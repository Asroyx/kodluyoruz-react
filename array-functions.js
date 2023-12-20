import { user } from "./my-module";

const users = [
  { name: "Mehnet", age: 30 },
  { name: "Murat", age: 29 },
  { name: "Sevilay", age: 20 },
];

// push
// users.push("Ayşe");
// users.push("Fatma");

// console.log(users);

// map
// users.map((item) => {
//   console.log(item.name);
// });

// find
const result = users.find((item) => item.name === "Mehmet" && item.age > 20);
console.log(result);
