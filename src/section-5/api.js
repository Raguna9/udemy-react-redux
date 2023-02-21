import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 73EclNWu4VYeXZMUX9XvSzntp_W9O7dBCfr8ru-BfZA',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
