var numsquares= 6;
var colors =[];
var pickedcolor;
var squares= document.querySelectorAll(".square");
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector("h1");
var reset= document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");
init();

function init(){
    for(var i=0;i< modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");    
            modeButtons[1].classList.remove("selected"); 
            this.classList.add("selected");   
            if(this.textContent==="Easy"){
                numsquares=3;
            }
            else{
                numsquares=6;
            }
            resetFunc();
    
        });
    }

    for(var i=0;i<squares.length;i++){

        squares[i].addEventListener("click",function(){
            var clickedColor= this.style.backgroundColor;
            if(clickedColor === pickedcolor){
                messageDisplay.textContent= "Correct!"
                changeColors(clickedColor);
                h1.style.backgroundColor= clickedColor;
                reset.textContent= "Play Again?";
            }
            else{
                this.style.backgroundColor= "#232323";
                messageDisplay.textContent= "Try Again";
            }
        });
    }
    resetFunc();
    
}


function resetFunc(){
    console.log("in reset func");
    colors= generateRandomColors(numsquares);
    pickedcolor = pickColor();
    colorDisplay.textContent= pickedcolor;
    h1.style.backgroundColor = "steelblue";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display= "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display= "none";
        }
        
    }
    messageDisplay.textContent= "";
    reset.textContent= "New Colors";
}



// easyBtn.addEventListener("click",function(){
//    easyBtn.classList.add("selected");
//    hardBtn.classList.remove("selected");
//    numsquares= 3;
//    colors= generateRandomColors(numsquares);
//    pickedcolor= pickColor();
//    colorDisplay.textContent= pickedcolor;

//    for(var i=0;i<squares.length;i++){
//        if(colors[i]){
//            squares[i].style.backgroundColor= colors[i];
//        }
//        else{
//            squares[i].style.display = "none";
//        }
//    }
// })

// hardBtn.addEventListener("click",function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numsquares= 6;
//     colors= generateRandomColors(numsquares);
//     pickedcolor= pickColor();
//     colorDisplay.textContent= pickedcolor;
//     for(var i=0;i<squares.length;i++){
//             squares[i].style.backgroundColor= colors[i];
//             squares[i].style.display = "block";      
//     }

// })

reset.addEventListener("click",function(){
     resetFunc();
      
});

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor= color;
    }
}

function pickColor(){
    //gives random no between 0 and 1 but is not inclusive ie wont include 1
    // if we want any random no between 0 n 6 we can simply Math.random() * 6
// or if we wanna have a random no between 1 and 6 we can Math.random() *6 + 1
// use Math.floor() to remove decimal
   var random= Math.floor( Math.random() * colors.length);
   // as it is not inclusive, we can use colors.length which is 1 more than the actual last index.. so its fine as it is not inclusive
    return colors[random];
}

function generateRandomColors(num){
    var arr= new Array();
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // as we are rounding it down n we want 255 as the max no so we are using 256  which is one greater

    var r= Math.floor(Math.random()* 256);
    var g= Math.floor(Math.random()* 256);
    var b= Math.floor(Math.random()* 256);
    return  "rgb(" + r+ ", "+ g+ ", "+ b+ ")";
}