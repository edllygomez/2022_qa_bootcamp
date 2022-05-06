//Variables
// EMCS5
// var emcs5 = "EMCS5";
// let a = "a";
// const b = "b";

// Data types
let name = "John"; // String
let age = 30; // Number
let isMarried = false; // Boolean
let value = null; // Null
let value2 = undefined; // Undefined

// // Object
// let person = {
// 	name: "John",
// 	age: 30,
// };

// console.log(person.name); // dot notation
// console.log(person["name"]); // bracket notation

// function interate(person) {
// 	for (let key in person) {
// 		console.log(`Key:${key}, value: ${person[key]}`);
// 	}
// }

// Arithmetic operators
// let sum = age + 1;
// console.log(sum);

// let difference = age - 1;
// console.log(difference);

// let multiplication = age * 2;
// console.log(multiplication);

// let division = age / 2;
// console.log(division);

// let mod = 15 % 2;
// console.log(mod);

// let exp = age ** 2;
// console.log(exp);

// let sqrt = Math.sqrt(age);

// Assignment operators
// let num = 10;
// num += 1; // num = num + 1
// num -= 1; // num = num - 1
// num *= 1; // num = num * 1
// num /= 1; // num = num / 1
// num %= 1; // num = num % 1

// num++; // First increment, then assign value
// ++num; // First assign value, then increment

// let x = 3;
// let y = x++;
// console.log(`x: ${x}, y: ${y}`);

// let a = 3;
// let b = ++a;
// console.log("a: " + a + ", b: " + b);
// console.log(`a: ${a}, b: ${b}`);

// Comparison operators
// let isEqual = age == "30";
// console.log(isEqual);

// let isEqual2 = age === 30;
// console.log(isEqual2);

// console.log(age > 30);
// console.log(age < 30);
// console.log(age >= 30);
// console.log(age <= 30);
// console.log(age != 30);
// console.log(age !== 30);

// Ternary operator
// condition ? true : false;

// if (age > 30) {
// 	console.log("You are over 30");
// } else {
// 	console.log("You are under 30");
// }

// function checkAge(age) {
// 	return age > 30 || age < 20;
// }

// function print(string) {
// 	console.log(string);
// }

// checkAge(age) ? print("You are over 30") : print("You are under 30");

// Truthy and falsy values
// Falsy values: undefined, null, 0, "", NaN

// let apellido = [];
// if (apellido) {
// 	console.log("apellido is defined");
// } else {
// 	console.log("apellido is not defined");
// }

// Rest operator && Spread operator (...)
let numbers = [1, 2, 3, 4, 5];
let letters = ["a", "b", "c", "d", "e"];

// Ugly way
// for (let i = 0; i < letters.length; i++) {
// 	numbers.push(letters[i]);
// }

// console.log([...numbers, ...letters]);

// Object

// console.log({ ...person, hasChildren: false });
// console.log(person);
// let person2 = { ...person };
// person2.name = "Juan";
// console.log(person2);
// console.log(person);
// console.log(numbers);

// function sum(person, ...numbers) {
// 	console.log(person);
// 	console.log(numbers);
// 	// return numbers.reduce((acc, curr) => acc + curr);
// }

// Functions

// let person = {
// 	name: "John",
// 	age: 30,
// 	sayHello: function () {
// 		console.log(`Hello, my name is ${this.name}`);
// 	},
// };

// function myFunction() {
// 	console.log(this.name);
// }

// const myFunction1 = function () {
// 	console.log("Hello 1");
// };

// // Arrow functions
// const myFunction2 = () => {
// 	return 1 + 1;
// };

// const myFunction3 = (number) => number + 2;

// // myFunction1();
// console.log(myFunction2());
// console.log(myFunction3(10));

// Hoisting

myFunction();
function myFunction() {
	console.log("I am a function that works with hoisting");
}
// myFunction();

// myFunction();
// const myFunction = function () {
// 	console.log("I am a function expresion and I do not like hoisting");
// };

// console.log(x);

// var x = 1;

// console.log(x);
