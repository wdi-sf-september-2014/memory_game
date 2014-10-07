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
for (var i = 0; i < animals.length; i++) {   	// double the animals
	cards.push(animals[i], animals[i]);
}

// shuffle the cards
shuffle(cards);

// assign animals to cards
for (var i = 1; i < 13; i++) {
	var boxString = "box" + i;
	document.getElementById(boxString).innerHTML = cards[i - 1];
}


// detect card click, change style
var counter = 0;
var card1, card2, element1, element2;
var cardClicked = document.querySelectorAll("td");

for (var i = 0; i < cardClicked.length; i++) {
  cardClicked[i].addEventListener("click", function() {

    if (counter === 0 && this.getAttribute("class") === "hide") {
      this.setAttribute("class", "show");
      card1 = this.innerHTML;
      element1 = this.getAttribute("id");
      counter++;
      console.log(card1, element1, counter);
    } 

    else if (counter === 1 && this.getAttribute("class") === "hide") {
      this.setAttribute("class", "show");
      card2 = this.innerHTML;
      element2 = this.getAttribute("id");

      if (card1 === card2) {
      document.getElementById(element1).setAttribute("class", "show");
      document.getElementById(element2).setAttribute("class", "show");
      counter = 0;
      } else { 
      counter = 0;
      setTimeout(function (){
        document.getElementById(element1).setAttribute("class", "hide");
        document.getElementById(element2).setAttribute("class", "hide");
      }, 700);
    }
      
    }
  });
}