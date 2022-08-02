const prompt = require("prompt-sync")();
var num = prompt("Entre number: ");
var fact = 1;

for(var i = 1; i<=num; i++){
    fact=fact*i;
    console.log(fact);
}