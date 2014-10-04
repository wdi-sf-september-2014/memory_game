//1 Even I passed divs_array into the function, the array cannnot be changed within the function, 
// I can only return it and assign to the global vairable again.

document.addEventListener('DOMContentLoaded', function(){

	var total_number_of_cards = 8;
	var divs_array = [];

	push_divs_to_divs_array										(total_number_of_cards, divs_array);

	insert_image_tag_to_divs_in_divs_array						(total_number_of_cards, divs_array);

	divs_array = clone_the_divs_array_and_add_clone_class		(total_number_of_cards, divs_array); //1

	add_style_to_divs_array										(total_number_of_cards, divs_array);

	add_click_listener_to_divs_in_divs_array					(divs_array);

	fisher_yates_shuffle_the_divs_array							(divs_array);

	add_divs_to_container										(divs_array);

})