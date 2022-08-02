const prompt = require("prompt-sync")();
var digit;
var text;
digit=parseInt(prompt("Enter number to get weekday: "));
switch(digit){
    case 1:
        text = "Ones";
        break;
    case 10:
        text = "Tens";
        break;
    case 100:
        text = "Hundreds";
        break;
    case 1000:
        text = "Thousends";
        break;
    default:
        text = "Invalid";
        break;                
}console.log(text);
