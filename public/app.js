// @ts-ignore
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
//
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Invoice('Mario', 'plumbing work', 200);
//
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
//
// interface IsPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
//
// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void{
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount);
//         return amount;
//     },
// };
//
// const greetPerson = (person: IsPerson) => {
//     console.log('hello ', person.name);
// }
//
// greetPerson(me);
//
// const invOne = new Invoice('mario', 'Work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'Work on the luigi website', 300);
//
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
//
// invoices.forEach(inv =>{
//    console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
