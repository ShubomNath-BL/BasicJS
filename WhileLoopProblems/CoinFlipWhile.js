let isHead=0;
let isTail=0;

while((isHead<=11) && (isTail<=11)){
    let coinFlip = Math.floor(Math.random()*2);
    if(coinFlip==0){
        isHead=isHead+1;
        console.log("Head is: "+isHead);
    }else{
        isTail=isTail+1;
        console.log("Tail is: "+isTail);
    }
}
if(isHead==11){
    console.log("Head wins");
}else{
    console.log("Tail wins");
}