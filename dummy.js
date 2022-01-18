import axios from 'axios';
//const axios = require('axios');


axios.get('http://dummy.restapiexample.com/api/v1/employee/1')
  .then(function (response) {
    
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });

