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

// functions
let greet: Function;
greet = () => {
    console.log('hello, world');
};
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);
}
add(3, 4, '20');

const minus = (a: number, b: number): number => {
    return a + b;
}
let result = minus(10, 7);


type stringOrNum = string | number;
type objWithName = {
    name: string,
    uid: stringOrNum
}

const logDetails = (uid: stringOrNum, item:string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const newGreet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

// Function signatures
let greetFunc: (a: string, b: string) => void;
greetFunc = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c:string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    let answer;
    if(action === 'add'){
        answer = numOne + numTwo;
    }else if(action === 'minus'){
        answer = numOne - numTwo;
    }else{
        answer = 0;
    }
    return answer;
}
console.log(calc(8, 1, 'minus'));

let newLogDetails: (obj: {name: string, age: number}) => void;
type person = {name: string, age: number};

newLogDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}