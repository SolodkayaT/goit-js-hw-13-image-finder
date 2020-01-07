import apiService from './services/apiService';
import imageTamplate from './templates/card-image.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  galeryList: document.querySelector('#galery-list'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function buildListImageMarkup(items) {
  const markup = items.map((item) => imageTamplate(item)).join('');
  refs.galeryList.insertAdjacentHTML('beforeend', markup);
}

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.query.value;
  apiService.fetchImages(searchQuery).then((data) => {
    buildListImageMarkup(data);
  });
}
