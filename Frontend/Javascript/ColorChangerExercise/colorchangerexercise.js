// this was the one way of doing it with JS

// var isPurple= false;
// document.querySelector("button").addEventListener("click",function(){
//     if(isPurple){
//         this.style.background = "white"; (for making button purple)
            // document.body.style.background="white";
//     }
//     else{
//         this.style.background = "purple";
//     }
//     isPurple= !isPurple;
//     // alert("clicked");
// });

// other way can be by using the toggle class function

document.querySelector("button").addEventListener("click",function(){
    document.body.classList.toggle("colorswitch")
});