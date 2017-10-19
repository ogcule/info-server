import axios from 'axios';

function getFAQ() {
  return axios.get('http://localhost:3000/faq').then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
}

function hello() {
  console.log('Hello World');
}

export { hello, getFAQ };
