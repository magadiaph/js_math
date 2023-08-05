let num = 56.3;

console.log(Math.round(num));
console.log(Math.ceil(10.2)); // always round up
console.log(Math.floor(1.9)); // always round down
console.log(Math.pow(10, 5)) // exponent (base, exp)
console.log(Math.sqrt(100)) // square root
console.log(Math.abs(-7)) //always return a positive number
console.log(Math.min(10, 1, 20, -2, -1)); // lowest value
console.log(Math.max(10, 1, 20, -2, -1)); // highest value
console.log(Math.round(Math.random() * 10));

let names = ["A", "B", "C"]
let index = Math.round(Math.random() * 2);
console.log(index);
console.log(names[index]);