var input= prompt("What do you wanna do?");
var list= new Array();
while(input!=="quit"){
    if(input==="new"){
        newwork();
    }
    else if (input==="list"){
        listwork();
    }
    else if(input==="delete"){
        listdelete();
    }
    input= prompt("What do you wanna do?");
}
if(input!=="quit"){
    input= prompt("What do you wanna do?");
}
else{
    console.log("you quit!!");
}

function listwork(){
    console.log("***************");
        list.forEach(function(item, index){
            console.log(list.indexOf(item)+": "+item);
        });
        console.log("***************");
}

function newwork(){
    var add= prompt("Whats do you wanna add to the list?")
        list.push(add);
        console.log("item added to the list");


}

function listdelete(){
    var del= prompt("write index of the element you wanna delete from the list?")
        var dlted= list.splice(del,1);
        console.log("the item " +  dlted + "is deleted from your list");
}
