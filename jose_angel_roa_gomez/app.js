// define the array of animals
var animals = ["Elephant", "Monkey", "Lion",
			   "Bird", "Dog", "Cat",
			   "Elephant", "Monkey", "Lion",
			   "Bird", "Dog", "Cat" ];

// populate the table
var cells = document.querySelectorAll("table div");

for(var i =0 ; i < animals.length ; i++) {

	cells[i].setAttribute("style", "display:none");
	cells[i].innerHTML = animals[i];

}


// show animal when I click a cell

var elements = document.querySelectorAll("td");

for(var i =0 ; i < elements.length ; i++) {

	elements[i].addEventListener("click", function(){
		

	// I am clicking in the td, so this = td (clicked)
		//console.log(this);
	// I look for the div inside the td
		//console.log(this.querySelector("div"));

		this.querySelector("div").setAttribute("style", "display:block");
	});
}