const prompt = require("prompt-sync")();
var Year;
Year=prompt("Enter year: ");
let a = (Year%4);
let b = (Year%100);
let c = (Year%400);

if((a==0) && (b!=0) || (c==0)){
    console.log(Year+" is a leap year");
}else{
    console.log(Year+" is not a leap year");
}