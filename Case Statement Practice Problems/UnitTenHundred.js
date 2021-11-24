"use strict"

//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

//storing user input into variable.
let userNumber = prompt("Enter number like 1,10,100,1000......100000000: ");

let number = + userNumber;

switch (number)
{
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
    case 10000000:
        console.log("Crore");
        break;
    case 100000000:
        console.log("Ten Crore");
        break;
    default:
        console.log("Wrong input");
}