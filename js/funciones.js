$(document).ready(function() {

new WOW().init();

	var token = '2680328736.c4c9d9b.14cfd1e271554d2c888f40d1cd4b9bff',
    hashtag='beroquitattoo', // hashtag without # symbol
    num_photos = 10;

    $.ajax({
    	url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
    	dataType: 'jsonp',
    	type: 'GET',
    	data: {access_token: token, count: num_photos},
    	success: function(data){
    		console.log(data);
    		for(x in data.data){
    			$('.ctFotosIG').append('<div class=\"ctImagen col- mr-3 mt-3\" style=\" background-image: url('+data.data[x].images.standard_resolution.url+')\" >');  
    			if(x <= 0){

    				$('#ctFotosIGMD').append('<div class=\"carousel-item active \"><div class=\"d-block w-100 ctFotosCarrusel\" style=\" background-image: url('+data.data[x].images.standard_resolution.url+')\" >');  

    			} else {
    				$('#ctFotosIGMD').append('<div class=\"carousel-item \"><div class=\"d-block w-100 ctFotosCarrusel\" style=\" background-image: url('+data.data[x].images.standard_resolution.url+')\" >');  

    			}




    		}
    	},
    	error: function(data){
    		console.log(data);
    	}
    });

   






    $("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

    function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
    	type: "POST",
    	url: "php/form-process.php",
    	data: "name=" + name + "&email=" + email + "&message=" + message,
    	success : function(text){
    		if (text == "success"){
    			formSuccess();
    		}
    	}
    });


}

function formSuccess(){
	$( "#msgSubmit" ).removeClass( "d-none" );
	$('.modal-body').text('Su consulta ha sido enviada');

	var myModalTimeout = setTimeout(function() {
		$('#modalCenter').modal('hide');
	}, 2000);
	
}



$('#modalCenter').on('hidden.bs.modal', function() {

	$('.modal-body').text('');
	$('.modal-body').append('<p>Cargando solicitud</p><i class="fa-3x fas fa-spinner fa-pulse m-auto"></i>');



});





});


/*
----Hide modal -----

 setTimeout(function(){$('#myModal').modal('hide')},3000);

 */


/*

https://www.instagram.com/developer/

https://api.instagram.com/oauth/authorize/?client_id=82410e5f38524ca490fe8719ad901f68&redirect_uri=http://localhost/Estefi_sinwp/p&response_type=token

https://api.instagram.com/oauth/authorize/?client_id=82410e5f38524ca490fe8719ad901f68&redirect_uri=http://localhost/Estefi_sinwp/&response_type=token


access_token=350000103.82410e5.73a81f474ce145799cf59c4c2887e773

https://api.instagram.com/oauth/authorize/?client_id=82410e5f38524ca490fe8719ad901f68&redirect_uri=http://localhost/Estefi_sinwp/&response_type=code&scope=public_content

https://www.instagram.com/developer/authentication/

*/