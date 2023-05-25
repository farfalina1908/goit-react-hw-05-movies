import axios from 'axios';

const API_KEY = 'dbdcf857e7d45aa6a01875af24f92606';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function getTrendingMovies() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  return response;
}
