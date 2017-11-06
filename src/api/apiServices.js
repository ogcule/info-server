import axios from 'axios';

export default {
  requestGetAll() {
    return axios.get('http://localhost:3000/service')
      .then(response => response.data)
      .catch(error => console.log(error));
  },
};
