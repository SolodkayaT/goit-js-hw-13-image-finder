const URL =  'https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=14836280-095028a335045ad546bd82bf5&image_type=photo&orientation=horizontal';
export default {
  page: 1,
  per_page: 6,
  query: ' ',
  fetchImages() {
    const options = {
      headers: { Autorization: '14836280-095028a335045ad546bd82bf5' },
    };
    const requestParams = `&q=${this.query}&page=${this.page}&per_page=${this.per_page}`;
    return fetch(URL + requestParams, options)
      .then((response) => response.json())
      .then((parsedResponse) => {
        this.incrementPage();
        return parsedResponse.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
