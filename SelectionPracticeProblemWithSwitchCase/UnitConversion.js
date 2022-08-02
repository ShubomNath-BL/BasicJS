const prompt = require("prompt-sync")();
function FeetToInch(){
    var feet = prompt("Enter feet: ");
    var inch = feet * 12;
    console.log(inch);
}
function InchToFeet(){
    var Inch = prompt("Enter inches: ");
    var Feet = Inch/12;
    console.log(Feet);
}
function FeetToMeter(){
    var feet1 = prompt("Enter feets: ");
    var meter = feet1/3.28084;
    console.log(meter);
}
function MeterToFeet(){
    var Meter = prompt("Enter meters: ");
    var Feet2 = Meter * 3.28084;
    console.log(Feet2); 
}
var num;
num = parseInt(prompt("Enter your choice"));
switch(num){
    case 1:
        FeetToInch();
        break;
    case 2:
        InchToFeet();
        break;
    case 3:
        FeetToMeter();
        break;
    case 4:
        MeterToFeet();
        break;            
}