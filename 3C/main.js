const sorter = (type) => typeof type;
let car = "";

console.log(sorter(123)); // number

console.log(sorter()); // undefined

console.log(sorter("hello")); // string

console.log(sorter(true)); // boolean

console.log(sorter(null)); // object

console.log(sorter(function hello() {})); // function
