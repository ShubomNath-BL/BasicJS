const prompt = require("prompt-sync")();
var num;
var text;
num=parseInt(prompt("Enter number to get weekday: "));
switch(num){
    case 1:
        text = "Sunday";
        break;
    case 2:
        text = "Monday";
        break; 
    case 3:
        text = "Tuesday";
        break;
    case 4:
        text = "Wednesday";
        break;
    case 5:
        text = "Thursday";
        break;
    case 6:
        text = "friday";
        break;
    case 7:
        text = "Saturday";
        break; 
    default:
        text = "Invalid"
        break;                              
}console.log(text);