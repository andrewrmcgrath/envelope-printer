$(document).ready(function() {

	//listen for clicks
	$('#create').click(function() {

		var return_address = $('#return_address').val();
		return_address = return_address.replace(/\n/g, '<br>');
		var mailing_address = $('#mailing_address').val();
		mailing_address = mailing_address.replace(/\n/g, '<br>');
		
		var envelope_element ='<div class="envelope">'+
								'<div class="return">'+return_address+'</div>'+
								'<div class="mailing">'+mailing_address+'</div>'+
								'</div>';


	    $('#display').append(envelope_element);
	}); 
});