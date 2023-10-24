import axios from 'axios';

export const heroApi = {
  getHeroes() {
    return axios.get('https://akabab.github.io/superhero-api/api/all.json').then(response => response.data);
  }
};
