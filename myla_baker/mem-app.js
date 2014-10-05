var wordsArray= ["Dog", "Cat", "Hamster", "Lizard", "Parrot", "Fish", "Dog", "Cat", "Hamster", "Lizard", "Parrot", "Fish"];


//shuffle and populate
var cells= document.querySelectorAll("td div");

(function sort(arr) {
	var m = arr.length, t, i;
	while (m) {
		i= Math.floor(Math.random() * m --);
		t= arr[m];
		arr[m] = arr[i];
		arr[i] = t;
	}
	return arr;
})(wordsArray);

(function populate(arr) {
	for (var i=0; i<arr.length; i++) {
		cells[i].setAttribute("style", "display:none");
		cells[i].setAttribute("class", "matched");
		cells[i].innerHTML= wordsArray[i];
		
	}
})(wordsArray);


//click to reveal card
var elements = document.querySelectorAll("td");
var count = 1;
var itemOne, itemTwo;
var element1, element2;
var timeoutID;
var td1, td2;

var clickHandler = function() {
		this.querySelector("div").setAttribute("style", "display:block");
		var divShowing = this.querySelector("div");
		divShowing.setAttribute("class", "matched");
		console.log("click just occured. this is set to "+this+", divShowing is set to "+divShowing);
        if (count === 1) {
            itemOne= divShowing.innerHTML;
            element1 = divShowing;
            td1 = this;
            count++;
            console.log("count is 1. itemOne is "+itemOne+", element1 is "+element1+", td1 is "+td1.id);
        } else if (count === 2) {
            itemTwo = divShowing.innerHTML;
            element2 = divShowing;
            td2 = this;
            count = 1;
            console.log(td2);
            if (itemOne === itemTwo) {
                console.log("were the same");
                element1.setAttribute("style", "background-color: #CCFFB2");
                element2.setAttribute("style", "background-color: #CCFFB2");
                td1.removeEventListener("click", clickHandler);
                td2.removeEventListener("click", clickHandler);

            } else {
                alert("Sorry that's not a match!"); 
                timeoutID = window.setTimeout(function(){}, 2000);
                element1.setAttribute("class", "unmatched");
                element2.setAttribute("class", "unmatched");
            }
        }
	};
//separate loop to add click listener
for (var i=0; i<elements.length; i++) {
	elements[i].addEventListener("click", clickHandler);
}