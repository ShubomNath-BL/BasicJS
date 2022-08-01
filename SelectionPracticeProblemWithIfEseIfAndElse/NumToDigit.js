const prompt = require("prompt-sync")();
var num;
num = prompt("Enter a number: ");
if(num==1){
    console.log("Digit is one's");
}else if(num==10){
    console.log("Digit is ten's");
}else if(num==100){
    console.log("Digit is hundred's");
}else if(num==1000){
    console.log("Digit is thousand's");
}else{
    console.log("Invalid");
}