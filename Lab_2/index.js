//Ex 1
console.log("Ex 1");
let arr1 = [1, 2, 4, 5, 6],
  arr2 = [1, 6, 8, 9, 0];
let narr = arr2.filter((x) => arr1.includes(x));
console.log("narr: ", narr);

//Ex 2
console.log("Ex 2");
let arr = [1, 54, 6, 7];
console.log(arr.map((x) => (x += 5)));

//Ex 3
console.log("Ex 3");
let m = [1, 2, 4, 5, 6, 7],
  n = [3, 5, 675, 8, 96];
let del = [1, 8, 10, 96, 7];
let new_m = m.filter((x) => !del.includes(x));
console.log("new_m: ", new_m);
let new_n = n.filter((x) => !del.includes(x));
console.log("new_n: ", new_n);

//Ex 4
console.log("Ex 4");
let players = [
  { id: 11, name: "Messi", age: 33 },
  { id: 12, name: "Ronaldo", age: 34 },
  { id: 13, name: "Young", age: 35 },
  { id: 14, name: "Mane", age: 21 },
  { id: 15, name: "Salah", age: 24 },
];
//C1
function convert(accumulator, currentValue) {
  let n_arr = [...accumulator];
  let s = "";
  s +=
    String(currentValue.id) +
    ": {id: " +
    String(currentValue.id) +
    ", name: " +
    currentValue.name +
    ", age: " +
    String(currentValue.age);
  n_arr.push(s);
  return n_arr;
}
let ans_players = players.reduce(convert, []);
console.log("ans_players: ", ans_players);
//C2
let ans_players1 = players.map((currentValue) => {
  let s = "";
  s +=
    String(currentValue.id) +
    ": {id: " +
    String(currentValue.id) +
    ", name: " +
    currentValue.name +
    ", age: " +
    String(currentValue.age);
  return s;
});
console.log("ans_players1: ", ans_players1);
