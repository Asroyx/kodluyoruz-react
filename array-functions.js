import { user } from "./my-module";

const users = [{ name: "Mehnet" }, { name: "Murat" }, { name: "Sevilay" }];

// push
// users.push("Ayşe");
// users.push("Fatma");

// console.log(users);

// map
// users.map((item) => {
//   console.log(item.name);
// });

// find
const result = users.find((item) => item.name === "Mehmet");
console.log(result);