const prompt = require("prompt-sync")();
var num = prompt("Entre number: ");
var i;
var result;
for(i=2; i<=num/2; i++){
    result = num%i;
    if(result == 0){
        console.log("Not an prime number");
        break;
    }else{
        console.log("Prime number");
        break;
    }
}
