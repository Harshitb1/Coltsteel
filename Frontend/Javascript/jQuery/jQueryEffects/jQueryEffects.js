// $("button").on("click",function(){
//     $("div").fadeOut(1000);
//     console.log("faded done");
//     //but this console.log wont wait till the fade is over, javascript will  shift to the next line
// })

//so to solve the above problem we pass in a function in the fadeout which will be executed after the daing is complete


// $("button").on("click",function(){
//     $("div").fadeOut(1000, function(){
//         $(this).remove();
//     });
    
// });

//remember after fade out the elements are hidden n not faded out
//like display =none so we have to remove them manually if we want to


//use fadetoggle

$("button").on("click",function(){
        $("div").fadeToggle(500) ;
        
    });