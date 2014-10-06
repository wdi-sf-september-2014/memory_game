var words = ["Dog", "Dog", "Cat", "Cat", "Bird", "Bird", "Snake", "Snake", "Fox", "Fox", "Butterfly", "Butterfly", "Fish", "Fish", "Dinosaur", "Dinosaur"];

//Shuffle the array of words
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

shuffle(words);

//Fill the table with values in the array
for (i=0; i < words.length; i++) {
	document.querySelectorAll(".cell div")[i].innerHTML = words[i];
}

//clicking on each table td changes div class from "on" to "off"
var cells = document.getElementsByTagName("td");
var click1;
var click2;
var counter = 1;
var clicked = false;

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
    	if (this.querySelector("div").getAttribute("class") === "off" && !clicked) {
	    	this.querySelector("div").setAttribute("class", "on");
	    	if (counter === 1) {
	    		click1 = this.querySelector("div");
	    		counter++;
	    	} 
	    	else {
	  			click2 = this.querySelector("div");
	  			clicked = true;
	  			counter = 1;
	  			if (click1.innerHTML === click2.innerHTML) {
	  				click1.parentNode.setAttribute("style", "background-color:green;");
	  				click2.parentNode.setAttribute("style", "background-color:green;");
	  				console.log("You rock!");
	  				clicked = false;
	  			}
	  			else {
	  				setTimeout(function() {
	  					click1.setAttribute("class", "off");
						click2.setAttribute("class", "off");
						clicked = false;
	  				},1000);	
	  			}
	  		
	    	}
	    }
    });
};