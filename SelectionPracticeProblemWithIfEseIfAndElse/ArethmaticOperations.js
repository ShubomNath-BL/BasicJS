const prompt = require("prompt-sync")();
var num1;
var num2; 
var num3;
num1 = prompt("Enter first number: ");
num2 = prompt("Enter second number: ");
num3 = prompt("Enter third number: ");

console.log("Find maximum");
if((num1>num2) && (num1>num3)){
    console.log(num1+" is maximum");
}else if((num2>num1) && (num2>num3)){
    console.log(num2+" is maximum");
}else{
    console.log(num3+" is maximum");
}
console.log("Find minimum");
if((num1<num2) && (num1<num3)){
    console.log(num1+" is minimum");
}else if((num2<num1) && (num2<num3)){
    console.log(num2+" is minimum");
}else{
    console.log(num3+" is minimum");
}
let op1 = num1 + num2 * num3;
console.log("Result of first operation is: "+op1);
let op2 = num3 + num1 / num2;
console.log("Result of second operations is: "+op2);
let op3 = num1 % num2 + num3;
console.log("Result of third operations is: "+op3);
let op4 = num1 * num2 + num3;
console.log("Result of forth operations is: "+op4);