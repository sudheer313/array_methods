// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((number) => number * number);
// console.log(squares);
// const oddNumbers = numbers.filter((number) => number % 2 == 0);
// console.log(oddNumbers);
// const sum = numbers.reduce((acc, currentValue) => acc + currentValue);
// console.log(sum);
// numbers.forEach((number) => console.log(number));

// const arr = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Bob" },
// ];

// arr.map((item) => {
//   console.log(item.id, item.name);
// });

// arr.filter((item) => console.log(item.name === "John"));

const data = {
  users: [
    {
      id: 1,
      name: "John",
      age: 35,
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
      },
      hobbies: ["reading", "swimming", "traveling"],
      friends: [
        { id: 2, name: "Mary", age: 30 },
        { id: 3, name: "Tom", age: 40 },
      ],
    },
    {
      id: 2,
      name: "Mary",
      age: 30,
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        zip: "90001",
      },
      hobbies: ["hiking", "biking", "skiing"],
      friends: [
        { id: 1, name: "John", age: 35 },
        { id: 3, name: "Tom", age: 40 },
      ],
    },
    {
      id: 3,
      name: "Tom",
      age: 40,
      address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zip: "60601",
      },
      hobbies: ["painting", "cooking", "gardening"],
      friends: [
        { id: 1, name: "John", age: 35 },
        { id: 2, name: "Mary", age: 30 },
      ],
    },
  ],
};

// data.users.map((user) => {
//   console.log(
//     user.id,
//     user.name,
//     user.age,
//     user.address,
//     user.hobbies,
//     user.friends
//   );
// });

const usersover35 = data.users.filter((user) => user.age > 35);
console.log(usersover35);
