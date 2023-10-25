import axios from 'axios';
import normalizeData from '../utils/normalizeData';

export const heroApi = {
  getHeroes() {
    return axios.get('https://akabab.github.io/superhero-api/api/all.json').then(response => normalizeData(response.data));
  }
};
