import axios from 'axios';

const baseURL = 'https://www.episodate.com/api/';

const api = axios.create({
  baseURL,
});

export const getPopularShows = async (page) => {
  const { data } = await api.get(`most-popular?page=${page}`);
  return data.tv_shows;
};

export const getShowDetails = async (id) => {
  const { data } = await api.get(`show-details?q=${id}`);
  return data.tvShow;
};

export const searchShows = async (query) => {
  const { data } = await api.get(`search?q=${query}`);
  return data.tv_shows;
};

export default api;
