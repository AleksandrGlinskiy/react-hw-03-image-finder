const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38624631-d7f32947d4fa4c7307f1ec8bf';

export const getImages = (searchImage, currentPage) => {
  return fetch(
    `${BASE_URL}?q=${searchImage}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else return Promise.reject(new Error(`not found ${searchImage}`));
  });
};
