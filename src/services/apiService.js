const URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
export default {
  page: 1,
  fetchImages(query) {
    const options = {
      headers: { Autorization: '14836280-095028a335045ad546bd82bf5' },
    };
    const requestParams = `?q=${query}&page=${this.page}`;
    fetch(URL + requestParams, options).then((response) => response.json());
  },
};
