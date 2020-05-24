$("ul").on("click","li",function(){
    $(this).toggleClass("completed");   
});

$("ul").on("click","span",function(event){
    //this is a jQuery method to stop the method from bubbling up. ie clicking on span will fire the li click event ...
    event.stopPropagation();  
    //.parent is the method to access the parent as this  here will return the span not the li
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
});

$("input[type='text']").on("keypress",function(key){
    if(key.which===13){
       var todoText= $(this).val();
       $("ul").append("<li>"+"<span><i class='fa fa-trash'></i>  </span>"+todoText+"</li>");
        $(this).val("");
    }
});

$(".fa-plus").on("click",function(){
    $("input[type='text']").fadeToggle();
})

