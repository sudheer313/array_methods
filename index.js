// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((number) => number * number);
// console.log(squares);
// const oddNumbers = numbers.filter((number) => number % 2 == 0);
// console.log(oddNumbers);
// const sum = numbers.reduce((acc, currentValue) => acc + currentValue);
// console.log(sum);
// numbers.forEach((number) => console.log(number));

const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

arr.map((item) => {
  console.log(item.id, item.name);
});

arr.filter((item) => console.log(item.name === "John"));
