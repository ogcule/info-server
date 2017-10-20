import axios from 'axios';

function getRequest(table) {
  return axios.get(`http://localhost:3000/${table}`);
}

function getAllFaqs(table) {
  return getRequest(table)
    .then(response => response.data)
    .catch(error => console.log(error));
}

export default getAllFaqs;
