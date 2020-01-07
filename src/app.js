import apiService from './services/apiService';

// import { refs } from "./utils/refs";
const refs = {
  searchForm: document.querySelector('#search-form'),
  galeryList: document.querySelector('#galery-list'),
};
function searchFormSubmitHandler(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.query.value;
  console.log(searchQuery);
  apiService.fetchImages(searchQuery).then((data) => console.log(data));
}
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
