const prompt = require("prompt-sync")();
var n = prompt("Enter number: ");
var i;
var power;
for(i=0; i<=n; i++){
    power = 2 ** i;
    console.log(power);
}