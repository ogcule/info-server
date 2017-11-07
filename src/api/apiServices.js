import axios from 'axios';
import querystring from 'querystring';

export default {
  requestGetAll() {
    return axios.get('http://localhost:3000/service')
      .then(response => response.data)
      .catch(error => console.log(error));
  },
    requestPost(
      name,
      category,
      description,
      image,
      weblink,
      email,
      telephone,
      address,
      rcgpCategory
    ){
  return axios({
    method: 'post',
    url: 'http://localhost:3000/service',
    data: querystring.stringify({
      name,
      category,
      description,
      image,
      weblink,
      email,
      telephone,
      address,
      rcgpCategory,
     // property shorthand
    }),
  })
  .then((response) => {
    return response.data;
  })
  .catch(error => console.log(error));
},
}
