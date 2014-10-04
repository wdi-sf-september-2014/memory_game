
function insertDiv(divId) {
	var $container = document.querySelector('.container')
	var $div = document.createElement('div')

	$div.setAttribute('id', 'card' + divId)
	$container.appendChild($div)
	return $div
}

function insertImgFromMTGDB(cardImageNumber) {
	var $imgTag = document.createElement('img')
	$imgTag.setAttribute('src','http://api.mtgdb.info/content/card_images/15'+cardImageNumber+'.jpeg')
	$imgTag.setAttribute('width','100')

	var $ImageHolder = document.querySelector('#card' + cardImageNumber);
	$ImageHolder.appendChild($imgTag);

	return $imgTag
}

function insertImagesTags($div, $imgTag) {
	$div.innerHTML = $imgTag
}

function addClass($div, classname) {
	$div.classList.add(classname)
}

function removeClass($div, classname) {
	$div.classList.remove(classname)
}

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