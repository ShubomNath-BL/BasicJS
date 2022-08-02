const prompt = require("prompt-sync")();
var num = prompt("Entre number: ");
var i;
var j;
var isPrime;
for(i=2; i<=num; i++){
    isPrime=1;
    for(j=2; j<=i/2; j++){
        if(i%j==0){
            isPrime=0;
            break;
        }
    }
    if(isPrime == 1){
        console.log(i);
    }
}
    

