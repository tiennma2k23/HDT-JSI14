// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// /// Tang tat ca phan tu len 2 lan
// let n_arr = arr.map((num) => {
//   return (num *= 2);
// });
// console.log(n_arr);
// let arrfilter = arr.filter((item) => {
//   return item % 2 == 0;
// });
// console.log("arrfilter: ", arrfilter);

const animal = [
  {
    name: "cat",
    size: "small",
    weight: 5,
  },
  {
    name: "dog",
    size: "small",
    weight: 7,
  },
  {
    name: "elephant",
    size: "big",
    weight: 5000,
  },
];

// for (let i = 0; i < animal.length; i++) console.log(animal[i].name);
console.log(animal.map((a) => a.name));
console.log("\n");
let n_arr = animal.filter((item) => {
  return item.weight < 1000;
});
console.log(n_arr.map((a) => a.name));
console.log("\n");

let n_arr1 = animal.filter((item) => {
  return item.size == "small";
});
console.log(n_arr1.map((a) => a.name));
console.log("\n");

let n_arr2 = animal.filter((item) => {
  return item.size == "big";
});
console.log(n_arr2.map((a) => a.name));

console.log("\n");
