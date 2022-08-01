const prompt = require("prompt-sync")();
var day,month;
day=prompt("Enter day of month: ");
month=prompt("Enter month in a year: ");
console.log("Date: ",day,"/",month);
if((day>=20 && month==3) && (day<=31 && month==3)){
    console.log("true");
}else if((day>=1 && month==4) && (day<=30 && month==4)){
    console.log("true");
}else if((day>=1 && month==5) && (day<=30 && month==5)){
    console.log("true");
}else if((day>=1 && month==6) && (day<=20 && month==6)){
    console.log("true");
}else{
    console.log("false");
}