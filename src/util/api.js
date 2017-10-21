import axios from 'axios';

function getRequest(table) {
  return axios.get(`http://localhost:3000/${table}`);
}
function postRequest(table, question, answer) {
  return axios.post(
    `http://localhost:3000/${table}`,
    { question, answer },
  )
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}
function getAllFaqs(table) {
  return getRequest(table)
    .then(response => response.data)
    .catch(error => console.log(error));
}


export { getAllFaqs, postRequest };
