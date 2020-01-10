import apiService from './services/apiService';
import imageTamplate from './templates/card-image.hbs';

const basicLightbox = require('basiclightbox');

const refs = {
  searchForm: document.querySelector('#search-form'),
  galeryList: document.querySelector('#galery-list'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

function buildListImageMarkup(items) {
  const markup = items.map((item) => imageTamplate(item)).join('');
  refs.galeryList.insertAdjacentHTML('afterbegin', markup);
}

function clearListImages() {
  refs.galeryList.innerHTML = '';
}

function scrollImage() {
  setTimeout(() => {
    const currentScroll = document.documentElement.scrollHeight + innerHeight;
    window.scrollTo(0, currentScroll);
  }, 1500);
}

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const input = form.elements.query;
  const inputValue = input.value;
  clearListImages();
  apiService.resetPage();
  apiService.searchQuery = inputValue;
  apiService.fetchImages().then((data) => buildListImageMarkup(data));
  input.value = '';
}
function handleLoadMoreButton() {
  apiService.fetchImages().then((data) => buildListImageMarkup(data));
  scrollImage();
}
function handleShowImage({ target }) {
  if (target.tagName !== 'IMG') return;
  const url = target.dataset.src;
  console.log(url);
  basicLightbox.create(`<img width="1400" height="900" src=${url}>`).show();
}
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', handleLoadMoreButton);
refs.galeryList.addEventListener('click', handleShowImage);
