//2 I cannot pass parameters without invoking the handler function, set up a gldbal variable instead.

var clicked_card;


function push_divs_to_divs_array(total_number_of_cards, divs_array) {
	for (var i = 1; i <= total_number_of_cards; i++) {
		var $div = document.createElement('div');
		$div.setAttribute('class', 'card' + i);
		divs_array.push($div);			
	}
}

function insert_image_tag_to_divs_in_divs_array(total_number_of_cards, divs_array) {

	for (var i = 1; i <= total_number_of_cards; i++) {
		var $imgTag = document.createElement('img');
		$imgTag.setAttribute('width','100');			
		$imgTag.setAttribute('src','http://api.mtgdb.info/content/card_images/15' + i + '.jpeg');
		divs_array[i-1].appendChild($imgTag);
	}
}

function clone_the_divs_array_and_add_clone_class(total_number_of_cards, divs_array) {
	var $clone_divs_array = [];
	for (var i = 0; i < divs_array.length; i++) {
		var $newNode = divs_array[i].cloneNode();
		$newNode.setAttribute('class', 'card' + (i + 1));
		$newNode.classList.add('clone')
		$clone_divs_array.push($newNode);
	}	

	insert_image_tag_to_divs_in_divs_array(total_number_of_cards, $clone_divs_array)

	return divs_array.concat($clone_divs_array)  //1
}

function add_style_to_divs_array(total_number_of_cards, divs_array) {
	for (var i = 0; i < divs_array.length; i++) {
		divs_array[i].classList.add('card_holder')
	}
}

function add_divs_to_container(divs_array) {
	$container = document.querySelector('.container');
	for (var i = 0; i < divs_array.length; i++) {
		$container.appendChild(divs_array[i]);
	}
}

function fisher_yates_shuffle_the_divs_array(array) {
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

function add_click_listener_to_divs_in_divs_array(divs_array) {
	for (var i = 0; i < divs_array.length; i++) {
		divs_array[i].addEventListener('click', click_handler)   //2
	}
}

function click_handler(){
	if (clicked_card === undefined) {
		// first click
		clicked_card = this;
		clicked_card.removeEventListener('click', click_handler);
		clicked_card.classList.add('clicked')
	} else {
		// second click
		if (this.classList[0] === clicked_card.classList[0]) {
			// matched
			console.log('matched')
			this.removeEventListener('click', click_handler);
			clicked_card.classList.remove('clicked');
			clicked_card.classList.add('matched');
			this.classList.add('matched');
		} else {
			// not matched
			console.log('not matched')
			clicked_card.addEventListener('click', click_handler)
			clicked_card.classList.remove('clicked')
		}
		clicked_card = undefined;
	}
}		