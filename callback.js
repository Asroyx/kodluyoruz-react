// setTimeout(() => console.log("Hello"), 5000);

// setInterval(() => {
//   console.log("Hello, I will work every second");
// }, 1000);

// const sayHello = (cb) => {
//   cb();
// };

// sayHello(() => console.log("Hello"));

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    console.log("USERS LOADED", users);

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => data.json())
      .then((posts) => console.log("POSTS LOADED", posts));
  });
