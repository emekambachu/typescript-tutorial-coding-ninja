"use strict";
const character = 'Luigi';
let age = 30;
let isBlackBelt = false;
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(20));
// Arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
let numbers = [10, 20, 30, 40];
numbers.push(25);
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30,
};
ninja.age = 40;
ninja.name = 'ryu';
// Explicit types
let newCharacter;
let newAge;
let isLoggedIn;
newAge = 30;
isLoggedIn = true;
// Explicit types arrays
let newNinjas = [];
newNinjas.push('shaun');
// union types
let mixedArray = [];
mixedArray.push('hello');
mixedArray.push(20);
mixedArray.push(false);
console.log(mixedArray);
let uid;
// Objects
let ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30,
};
let ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black'
};
// Anytype
let anyAge = 25;
anyAge = true;
console.log(anyAge);
// functions
let greet;
greet = () => {
    console.log('hello, world');
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(3, 4, '20');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const newGreet = (user) => {
    console.log(`${user.name} says hello`);
};
// Function signatures
let greetFunc;
greetFunc = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    let answer;
    if (action === 'add') {
        answer = numOne + numTwo;
    }
    else if (action === 'minus') {
        answer = numOne - numTwo;
    }
    else {
        answer = 0;
    }
    return answer;
};
console.log(calc(8, 1, 'minus'));
let newLogDetails;
newLogDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
