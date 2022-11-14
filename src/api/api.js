import axios from 'axios';

const API_KEY = '29964442-a5edbec7c684d468053165f7c';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPicturesByQuery = async (query, page) => {
  const config = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  };
  const response = await axios.get(`${BASE_URL}?`, config);
  return response.data.hits;
};
