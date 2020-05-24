//print no between -10 19
var x=-10;
while(x<19){
    x++;
    console.log(x);
}
//even no between 10 n 40
x= 10;
while(x<40){
    if(x%2===0){
        console.log(x);
    }
    x++;
}

//odd 300 333
x= 300;
while(x<333){
    if(x%2!==0){
        console.log(x);
    }
    x++;
}

//div by 5 n 3 between 5 n 50

x= 5;
while(x<50){
    if(x%5===0 && x%3===0){
        console.log(x);
    }
    x++;
}