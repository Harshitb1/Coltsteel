var ans = prompt("are we there yet??");

while(ans.indexOf("yes")=== -1 && ans.indexOf("yeh")=== -1 ){
    var ans = prompt("are we there yet??");
}

// this ones for changing the google logo on the home page exercise
// document.querySelector("#hplogo> a > img").setAttribute("src","https://images.unsplash.com/photo-1545955413-209e03defb1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");

// this is to change the src of a particular image
// document.getElementsByTagName("img")[0].setAttribute("src","https://images.unsplash.com/photo-1545955413-209e03defb1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80");

// this is to chage the href of an anchor tag
// document.querySelector("a").setAttribute("href","https://ntvirustheguru.com.au/index.php/yoga-meditation/");

// this is to change the text of a  particular tag
// document.querySelector("a").textContent="Link to ntvirus";


alert("We made it!!")