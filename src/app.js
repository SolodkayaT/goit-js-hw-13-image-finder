import apiService from './services/apiService';
import imageTamplate from './templates/card-image.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galeryList: document.querySelector('#galery-list'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', handleLoadMoreButton);

function buildListImageMarkup(items) {
  const markup = items.map((item) => imageTamplate(item)).join('');
  refs.galeryList.insertAdjacentHTML('afterbegin', markup);
}

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.query.value;
  clearListImages();
  apiService.resetPage();
  apiService.searchQuery = inputValue;
  apiService.fetchImages().then((data) => {
    buildListImageMarkup(data);
  });
}
function handleLoadMoreButton() {
  apiService.fetchImages().then((data) => {
    buildListImageMarkup(data);
  });
}
function clearListImages() {
  refs.galeryList.innerHTML = '';
}
