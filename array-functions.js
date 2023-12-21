import { user } from "./my-module";

const users = [
  { name: "Mehnet", age: 10 },
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
// const result = users.find((item) => item.name === "Mehmet" && item.age > 20);
// console.log(result);

// filter
const filtered = users.filter(({ name, age }) => name === "Mehmet" && age < 20);
console.log(filtered);
