var p1= document.querySelector("#p1");
var p2= document.getElementById("p2");
var reset = document.querySelector("#reset");
var p1score=0;
var p1display= document.querySelector("#p1display");
var p2score=0;
var p2display= document.querySelector("#p2display");
var winningscoredisplay= document.querySelector("p span")
var gameover= false;
var winningscore = 5;
var input= document.querySelector("input");
p1.addEventListener("click",function(){
    if(!gameover){
        p1score++;
        if(p1score=== winningscore){
            gameover  = true;
            p1display.classList.add("winner");
        }   
        p1display.textContent= p1score;
     }
    
});

p2.addEventListener("click",function(){
    if(!gameover){
        p2score++;
        if(p2score=== winningscore){
            gameover  = true;
            p2display.classList.add("winner");

        }  
        p2display.textContent = p2score; 
     }
});

reset.addEventListener("click",function(){
        resetfunc();
});

input.addEventListener("change",function(){
   
        var change= this.value;
        winningscoredisplay.textContent= change;
        winningscore= Number(change);
        resetfunc ();
});

function resetfunc(){
    p1display.textContent= 0;
        p2display.textContent=0;
        p1score=0;
        p2score=0;
        gameover=false;
        p1display.classList.remove("winner");
        p2display.classList.remove("winner");
}

