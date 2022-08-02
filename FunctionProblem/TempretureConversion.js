const prompts = require("prompt-sync")();
var degC;
degC = prompts("Enter temprature in celcius: ");
var degF;
degF = prompts("Enter temprature in farenheit: ");
function celciusToFernheit(){
    var Farenheit = (degC * 9/5) + 32;
    return Farenheit;
}
function farenheitToCelcius(){
    var Celcius = (degF - 32)*(5/9);
    return Celcius;
}
if((degC<100) && (degF<212)){
    if((degC>0) && (degF>32)){
        console.log(celciusToFernheit());
        console.log(farenheitToCelcius());
    }else{
        console.log("Temprature is less then freezing point");
    }
}else{
    console.log("Temprature is more then boiling point");
}
