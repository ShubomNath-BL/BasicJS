const prompt = require("prompt-sync")();
var num;
num = prompt("Enter number and get the weekday: ");
let weekDayNum = num % 7;
if(weekDayNum==0){
    console.log("Sunday");
}else if(weekDayNum==1){
    console.log("Monday");
}else if(weekDayNum==2){
    console.log("Tuesday");
}else if(weekDayNum==3){
    console.log("Wednesday");
}else if(weekDayNum==4){
    console.log("Thurseday");
}else if(weekDayNum==5){
    console.log("Friday");
}else if(weekDayNum==6){
    console.log("Saterday");
}