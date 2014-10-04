document.addEventListener('DOMContentLoaded', function(){

var TotalUniqueCardNumber = 5;
var UniqueCardImagesTags = []

for (var i = 1; i <= TotalUniqueCardNumber; i++) {
	var $div = insertDiv(i);
	addClass($div, 'float');
	UniqueCardImagesTags.push(insertImgFromMTGDB(i));
}

for (var i = 1; i <= TotalUniqueCardNumber; i++) {
	var $div = insertDiv(i + TotalUniqueCardNumber)
	addClass($div, 'float')
	$div.appendChild(UniqueCardImagesTags[i - 1].cloneNode())
}

var $divs = [].slice.call(document.querySelectorAll('.container div'))

var $shuffledDivs = shuffle($divs);

document.querySelector('.container').innerHTML = ''
for (var i = 0; i < $shuffledDivs.length; i++) {
	document.querySelector('.container').appendChild($shuffledDivs[i])
}

var clicked;

for (var i = 0; i < $divs.length; i++) {
	addListener($divs[i])
}

function addListener($div) {
	$div.addEventListener('click',function(){
		if (clicked) {
			var thisId = this.getAttribute('id').slice(4)
			var clickedId = clicked.getAttribute('id').slice(4)
			
			if ( Math.abs(thisId - clickedId) === TotalUniqueCardNumber) {
				console.log('matched')
				clicked.removeEventListener('click')
				addClass(this, 'selected')
			} else {
				addListener($div)
			}

			clicked = null;
		} else {
			clicked = this;
			this.removeEventListener('click')
			addClass(this, 'selected')
		}
	})
}

})