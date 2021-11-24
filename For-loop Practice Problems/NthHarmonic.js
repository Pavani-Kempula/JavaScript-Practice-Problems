"use strict"

//For promting message and taking input from console.
const prompt = require("prompt-sync")({ sigint: true });

let number = prompt("Enter number to find harmonic value : ");

let harmonic = 0;

for(var i = 1; i <= number; i++)
{
    harmonic = 1/i+harmonic;
    console.log("\nHarmonic " + i + ": " + harmonic); 
}