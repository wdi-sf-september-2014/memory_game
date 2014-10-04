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
var animals = ["dog", "cat", "rat", "parrot", "lion", "tiger"];
var cards = [];
for (i = 0; i < animals.length + 1; i++) {   	// double the animals
	for (j = -1; j < 1; j++) {
		cards.push(animals[i + j]);
	}
}

cards.pop();
cards.shift();
