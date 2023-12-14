// setTimeout(() => console.log("Hello"), 5000);

// setInterval(() => {
//   console.log("Hello, I will work every second");
// }, 1000);

// const sayHello = (cb) => {
//   cb();
// };

// sayHello(() => console.log("Hello"));

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("USERS LOADED", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((posts) => {
//         console.log("POSTS LOADED", posts);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((posts2) => console.log("POSTS 2 LOADED", posts));
//       });
//   });

// async function getData() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();
//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// }

// getData();

// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// })();

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    resolve(data);
  });
};

getUsers()
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
