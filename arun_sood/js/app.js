//Ask the user to enter their set of words

var userWords = prompt("What words would you like to use? Enter 6 separated by commas.");

//If user doesn't enter anything, use our own!

if (userWords) {
	var words = userWords.split(",");
} else {
	var words = ["Rhino", "Cat", "Dog", "Elephant", "Hippo", "Dinosaur"];
}

//Set up a new array, double each index from the given array and push to new array

var fullWords = [];

for (var i = 0; i < words.length; i++) {
	fullWords.push(words[i], words[i]);
}

//Function to shuffle array indexes

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

shuffleArray(fullWords);

//Place the words in the cells

var allCells = document.querySelectorAll("td");

for (var i = 0; i < allCells.length; i++) {
	allCells[i].innerHTML = "<div style='display:none;'>" + fullWords[i] + "</div>";
}

//Bind clicks to all td's

var chosenWords = [];

for (var i = 0; i < allCells.length; i++) {
	allCells[i].addEventListener("click", function() {
		var currentElem = this.getElementsByTagName("div")[0];

		//Make sure display on current element is set to none. This is to ensure that you don't click on the same square twice.

		if (currentElem.getAttribute("style") === "display:none;") {
		
			//Show the currently-clicked element

			currentElem.setAttribute("style", "display:block;");

			var wordSelected = currentElem.innerHTML;
			var idSelected = this.getAttribute("id");

			//Push the ID and the word as an object to a new array called chosenWords

			chosenWords.push(
				{
					word: wordSelected,
					id: idSelected
				}
			);

			//Check for match with a timeout to allow for both of the words to show up

			setTimeout(function() {
				if (chosenWords.length === 2) {
					if (chosenWords[0].word === chosenWords[1].word) {
						document.getElementById(chosenWords[0].id)
							.setAttribute("class", "found");
						
						document.getElementById(chosenWords[1].id)
							.setAttribute("class", "found");
						
						chosenWords = [];
					} else {
						document.getElementById(chosenWords[0].id)
							.getElementsByTagName("div")[0]
								.setAttribute("style", "display:none;");
						
						document.getElementById(chosenWords[1].id)
							.getElementsByTagName("div")[0]
								.setAttribute("style", "display:none;");
						
						chosenWords = [];
					}
				}
			}, 300);
		}
	});
}

