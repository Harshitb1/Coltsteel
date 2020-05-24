function echo(str, num){
    for(var i=0;i<num;i++){
        console.log(str);
    }
}

// echo("heyy",10);
// echo("byee",3);

function average(scores){
    var total=0;
    // scores.forEach(element => {
    //     total += element;
    // });
    scores.forEach(function(score){
        total+= score;
    })

    var avg= total/scores.length;
    return Math.round(avg);
}
var scores =[90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));