import axios from "axios";

const API_GITHUB = axios.create({
    baseURL: 'https://api.github.com/users/atomotavio/repos',
  });

export default API_GITHUB;