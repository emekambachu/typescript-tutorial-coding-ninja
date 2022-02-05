const character = 'Luigi';
let age = 30;
let isBlackBelt = false;
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
   console.log(input);
});

const circ = (diameter: number) => {
    return diameter * Math.PI
}
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
}

ninja.age = 40;
ninja.name = 'ryu';

// Explicit types
let newCharacter: string;
let newAge: number;
let isLoggedIn: boolean;

newAge = 30;
isLoggedIn = true;

// Explicit types arrays
let newNinjas: string[] = [];
newNinjas.push('shaun');

// union types
let mixedArray: (string|number|boolean)[] = [];
mixedArray.push('hello');
mixedArray.push(20);
mixedArray.push(false);
console.log(mixedArray);

let uid: string|number;

// Objects
let ninjaOne: object;
ninjaOne = {
    name: 'yoshi',
    age: 30,
}

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}

ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColour: 'black'
}

// Anytype
let anyAge: any = 25;
anyAge = true;
console.log(anyAge);