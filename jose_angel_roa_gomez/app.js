// define the array of animals
var animals = ["Elephant", "Monkey", "Lion",
			   "Bird", "Dog", "Cat",
			   "Elephant", "Monkey", "Lion",
			   "Bird", "Dog", "Cat" ];

// populate the table
var cells = document.querySelectorAll("table div");

for(var i =0 ; i < animals.length ; i++) {

	//cells[i].setAttribute("style", "display:none");
	cells[i].setAttribute("class", "unmatched");
	cells[i].innerHTML = animals[i];

}


// show animal when I click a cell

var elements = document.querySelectorAll("td");
var count = 1;
var itemOne, itemTwo;
var element1, element2;
var timeoutID;
var stillInSecondClick = false;

for(var i =0 ; i < elements.length ; i++) {

	elements[i].addEventListener("click", function(){
		
		// var element1, element2;
		var divShowing = this.querySelector("div");

		if(divShowing.className === "unmatched" && !stillInSecondClick){

			divShowing.setAttribute("class", "matched");
			console.log(divShowing.class);

			if(count === 1){			// first click
				itemOne = divShowing.innerHTML;
				element1 = divShowing;
				count++;
			} else {					// second click
				
				//console.log("stillInSecondClick = " + stillInSecondClick);
				itemTwo = divShowing.innerHTML;
				element2 = divShowing;
				

				if(itemOne === itemTwo) {
				} else {
					stillInSecondClick = true;
					setTimeout(function(){
					element1.setAttribute("class", "unmatched");
					element2.setAttribute("class", "unmatched");
					stillInSecondClick = false;
					},5000);
				}
				count = 1;
			}

		}

	});
}




	// I am clicking in the td, so this = td (clicked)
		//console.log(this);
	// I look for the div inside the td
		//console.log(this.querySelector("div"));

		//this.querySelector("div").setAttribute("style", "display:block");
	// I get the innerHTML of the just showed div
		//console.log(this.querySelector("div").innerHTML);