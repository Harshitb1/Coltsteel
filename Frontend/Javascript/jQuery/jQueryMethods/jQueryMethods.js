var abc= $("h1").text();
alert(abc);
$("img").css("width","200px");

//to change the src attribute of the first image
$("img:first-of-type").attr("src","https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80");

//to change the last img tag src sttribute one can use the last() function  of jQuery
$("img").last().attr("src","https://images.unsplash.com/photo-1500479694472-551d1fb6258d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");

//to get the value selected by the user in the drop down menu
console.log($("select").val());

//to  add a class
$("h1").addClass("correct");

//add class to all lis ie a collection
$("li").addClass("wrong");

//to remove class
$("h1").removeClass("correct");

// to toggle class from first li
$("li").first().toggleClass("done");

$("h1").click(function(){
    alert("h1 clicked");
});

console.log($("h1").text());
$("button").click(function(){
    $(this).css("background","pink");
    console.log("you clicked" + $(this).text());
})

//to check if enter was pressed  on the input
$("input").keypress(function(event){
    if(event.which === 13){
    console.log("you press enter")
}
});

//at hover in

$("button").on("mouseenter",function(){
    $(this).css("font-weight","bold");

})

// at hover out

$("button").on("mouseleave",function(){
    $(this).css("font-weight","normal");

})
