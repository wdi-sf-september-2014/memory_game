// create a function to shuffle, feed it an array of animals
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



// create an animal array, double the array to fill out the cards
var animals = ["Dog", "Cat", "Rat", "Parrot", "Lion", "Tiger"];
var cards = [];
for (var i = 0; i < animals.length + 1; i++) {   	// double the animals
	for (var j = -1; j < 1; j++) {
		cards.push(animals[i + j]);
	}
}

cards.pop();
cards.shift();
shuffle(cards);



// assign animals to cards
for (var i = 1; i < 13; i++) {
	var boxString = "box" + i;
	document.getElementById(boxString).innerHTML = cards[i - 1];
}


// detect card click, change style
var cardsClicked = document.getElementsByClassName("hide");
for (var i = 0; i < cardsClicked.length; i++) {
	cardsClicked[i].addEventListener("click", function() {
		this.setAttribute("class", "show");
	});
}