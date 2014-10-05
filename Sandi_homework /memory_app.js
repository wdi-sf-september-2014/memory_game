
//an array for animals and an array for squares 

var animals= ["dog", "dog", "cat", "cat", "snake", "snake", "cow", "cow", "dragon", "dragon", "bird", "bird"];
var squares= document.querySelectorAll("td");

//shuffle function from fisher yates - hip chat
//calls for the animal array above

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
}

shuffle(animals);

//this allows the squares array to populate into individual squares
for (var i=0; i<animals.length; i++) {
	squares[i].querySelector("div").innerHTML = animals[i];
	//squaresi].setAttributes("color", colors[i]
} 

//this allows the squares to show up when clicked--it is present to have a font color of white. 
var counter = 1;
var firstClick; //stores data from first click <div class =... > animal </div>
var secondClick; // stores the data from 2nd click 


for (var i=0; i<squares.length; i++) {
	squares[i].addEventListener("click", function(){
		
		//this condition makes sure that if the user is clicking on the same square it will not run the rest of the program

		if (this.querySelector("div").className ==="hide") {
			this.querySelector("div").setAttribute("class", "noHide"); 
				if (counter === 1) { 
				//this selects for the div inside the td's
					firstClick = this.querySelector("div");
					counter++;
				} else { 	
				//we are only comparing the innnerHTML (the actual string!) inside the td div's
					secondClick = this.querySelector("div");  
					if (firstClick.innerHTML===secondClick.innerHTML) {
						alert("It's a match");

					}else {
						alert("It's NOT a match");
						firstClick.setAttribute("class", "hide"); 
						secondClick.setAttribute("class", "hide");
					}
					counter =1; 
				}
		}
	});
}










