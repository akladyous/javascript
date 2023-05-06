const axios = require('axios').default;

//https://jsonplaceholder.typicode.com/todos

// const { default: axios } = require("axios");

// const myPromise = new Promise((resolve, reject) => {
//     const userState = false;
//     if(userState) {
//         resolve("user successfully logged in");
//     } else {
//         reject("user not allowed");
//     }
// })

// myPromise
//     .then(value => {
//     console.log(value)
//     })
//     .catch(error => {
//         console.log(error)
//     })
// ----------------------------------------------------------------
const getUserEmails = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  const emailsArray = data.map((user) => {
    return user.email;
  });

  postToWebPage(emailsArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

// getUserEmails("https://jsonplaceholder.typicode.com/users");

const controller = new AbortController();
const signal = controller.signal;
const getUsers = async (url) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      signal: signal,
    });
    if (response.status !== 200) {
      throw new Error(response.message);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
console.log('start');
let start = performance.now();
axios.get('http://localhost:4000/sleep/5000').then((response) => {
  console.log(response.data);
});
let end = performance.now();
console.log('end');
console.log(Number.parseFloat(end - start).toFixed(2));
