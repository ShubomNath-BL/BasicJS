let num1 = Math.floor(Math.random()*1000)%999+100;
let num2 = Math.floor(Math.random()*1000)%999+100;
let num3 = Math.floor(Math.random()*1000)%999+100;
let num4 = Math.floor(Math.random()*1000)%999+100;
let num5 = Math.floor(Math.random()*1000)%999+100;
if(num1>num2){
    if(num1>num3){
        if(num1>num4){
            if(num1>num5){
                console.log(num1+": num1 is maximum");
            }else{
                console.log(num5+": num5 is maximum");
            }
        }else{
            console.log(num4+": num4 is maximum"); 
        }
    }else{
        console.log(num3+": num3 is maximum")
    }
}else{
    console.log(num2+": num2 is maximum");
}
if(num1<num2){
    if(num1<num3){
        if(num1<num4){
            if(num1<num5){
                console.log(num1+": num1 is minimum");
            }else{
                console.log(num5+": num5 is minimum");
            }
        }else{
            console.log(num4+": num4 is minimum"); 
        }
    }else{
        console.log(num3+": num3 is minimum")
    }
}else{
    console.log(num2+": num2 is minimum");
}
console.log("Num1: "+num1+" Num2: "+num2+" Num3: "+num3+" Num4: "+num4+" Num5: "+num5);