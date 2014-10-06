//2 I cannot pass parameters without invoking the handler function, set up a gldbal variable instead.

var clicked_card;
var clicked_card_holder;

function add_button_to_toggle_cover() {
	$button = document.createElement('button');
	$button.innerHTML = 'Toggle Cover';
	$button.setAttribute('onclick', 'toggle_cover()')
	document.getElementsByTagName('body')[0].appendChild($button);
}

function toggle_cover() {
	[].slice.call(document.querySelectorAll('.cover')).forEach(function($cover){
		if ($cover.classList.contains('remove_cover')) {
			$cover.classList.remove('remove_cover');
		} else {
			$cover.classList.add('remove_cover');
		}
	})
}

function push_divs_array_to_divs_holder_array(divs_array, divs_holder_array) {
	for (var i = 0; i < divs_array.length; i++) {
		var $div_holder = document.createElement('div');
		$div_holder.appendChild(divs_array[i])
		divs_holder_array.push($div_holder);
	}	
}

function push_divs_to_divs_array(divs_array, total_number_of_cards) {
	for (var i = 1; i <= total_number_of_cards; i++) {
		var $div = document.createElement('div');
		$div.setAttribute('class', 'card' + i);
		divs_array.push($div);			
	}
}

function add_card_cover_to_divs_holder_array(divs_holder_array) {
	for (var i = 0; i < divs_holder_array.length; i++) {
		var $div = document.createElement('div');
		var $img = document.createElement('img');
		$img.setAttribute('width','100');	
		$img.setAttribute('src','http://api.mtgdb.info/content/card_images/150.jpeg');
		$div.classList.add('cover');	
		$div.setAttribute('width','100');
		$div.appendChild($img);
		divs_holder_array[i].appendChild($div);
	}
}

function insert_image_tag_to_divs_in_divs_array(total_number_of_cards, divs_array) {
// function insert_image_tag_to_divs_in_divs_array(divs_array, total_number_of_cards) {
	// console.log(total_number_of_cards, divs_array)

	for (var i = 1; i <= total_number_of_cards; i++) {
		var $img = document.createElement('img');
		$img.setAttribute('width','100');			
		$img.setAttribute('src','http://api.mtgdb.info/content/card_images/15' + i + '.jpeg');
		divs_array[i-1].appendChild($img);
	}
}

function clone_the_divs_array_and_add_clone_class(divs_array, total_number_of_cards) {
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

function add_style_to_divs_array(divs_array, total_number_of_cards) {
	for (var i = 0; i < divs_array.length; i++) {
		divs_array[i].classList.add('card_holder')
	}
}

function add_style_to_divs_holder_array(divs_holder_array, total_number_of_cards) {
	for (var i = 0; i < divs_holder_array.length; i++) {
		divs_holder_array[i].classList.add('card_holder')
	}
}

function add_divs_to_container(divs_array) {
	$container = document.querySelector('.container');
	for (var i = 0; i < divs_array.length; i++) {
		$container.appendChild(divs_array[i]);
	}
}

function add_divs_holder_to_container(divs_holder_array) {
	$container = document.querySelector('.container');
	for (var i = 0; i < divs_holder_array.length; i++) {
		$container.appendChild(divs_holder_array[i]);
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

function add_click_listener_to_divs_in_divs_holder_array(divs_holder_array) {
	for (var i = 0; i < divs_holder_array.length; i++) {
		divs_holder_array[i].addEventListener('click', holder_click_handler)  
	}	
}

function holder_click_handler(){
	if (clicked_card_holder === undefined) {
		// first click
		clicked_card_holder = this;
		clicked_card_holder.removeEventListener('click', holder_click_handler);
		clicked_card_holder.children[1].classList.add('clicked')
	} else {
		// second click
		if (this.childNodes[0].classList[0] === clicked_card_holder.childNodes[0].classList[0]) {
			// matched
			console.log('matched')
			this.removeEventListener('click', holder_click_handler);
			clicked_card_holder.children[1].classList.remove('clicked');
			clicked_card_holder.children[1].classList.add('matched');
			this.children[1].classList.add('matched');
		} else {
			// not matched
			console.log('not matched')
			clicked_card_holder.addEventListener('click', holder_click_handler)
			clicked_card_holder.children[1].classList.remove('clicked')
		}
		clicked_card_holder = undefined;
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

