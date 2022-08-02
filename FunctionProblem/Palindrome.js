const prompts = require("prompt-sync")();
var rem;
var reverse;
function isPalindrome1(){
    var num1;
    num1 = prompts("Enter first number: ");
    var temp1 = num1;
    while(num1!=0){
        rem = temp1%10;
        reverse = reverse*10+rem;
        temp1 = temp1/10;
    }
    if(num1==reverse){
        console.log(num1+" is palindrome");
    }else{
        console.log(num1+" is not palindrome");
    }
}
isPalindrome1();
