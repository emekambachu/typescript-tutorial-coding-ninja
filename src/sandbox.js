var character = 'Luigi';
var age = 30;
var isBlackBelt = false;
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(20));
// Arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
var numbers = [10, 20, 30, 40];
numbers.push(25);
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// Explicit types
var newCharacter;
var newAge;
var isLoggedIn;
newAge = 30;
isLoggedIn = true;
// Explicit types arrays
var newNinjas = [];
newNinjas.push('shaun');
// union types
var mixedArray = [];
mixedArray.push('hello');
mixedArray.push(20);
mixedArray.push(false);
console.log(mixedArray);
var uid;
// Objects
var ninjaOne;
ninjaOne = {
    name: 'yoshi',
    age: 30
};
var ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black'
};
// Anytype
var anyAge = 25;
anyAge = true;
console.log(anyAge);
