//1 Even I passed divs_array into a function, the array cannnot be changed within the function, 
//1 I can only return it and assign it to the global vairable again. This introduces a very funky bug.
//1 That is if I change the signature of the previous function from 
//1 (total_number_of_cards, divs_array) to (divs_array, total_number_of_cards)
//1 the program will break.

document.addEventListener('DOMContentLoaded', function() {

	var total_number_of_cards = 8;
	var divs_array = [];
	var divs_holder_array = [];

//	Function Name												Signature

	push_divs_to_divs_array										(divs_array, total_number_of_cards);

	insert_image_tag_to_divs_in_divs_array						(total_number_of_cards, divs_array); // insert_image_tag_to_divs_in_divs_array						(divs_array, total_number_of_cards);

	divs_array = clone_the_divs_array_and_add_clone_class		(divs_array, total_number_of_cards); //1

	fisher_yates_shuffle_the_divs_array							(divs_array);

//  Version 2 -- with cover

	push_divs_array_to_divs_holder_array						(divs_array, divs_holder_array);

	add_card_cover_to_divs_holder_array							(divs_holder_array);

	add_style_to_divs_holder_array								(divs_holder_array, total_number_of_cards);

	add_click_listener_to_divs_in_divs_holder_array				(divs_holder_array);

	add_divs_holder_to_container								(divs_holder_array);

	add_button_to_toggle_cover									();


//  Version 1 -- without cover

	// add_style_to_divs_array										(divs_array, total_number_of_cards);

	// add_click_listener_to_divs_in_divs_array					(divs_array);

	// add_divs_to_container										(divs_array);

})