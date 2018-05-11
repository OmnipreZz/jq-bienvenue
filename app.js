//console.log('have fun !');


$(document).ready(function(){


    //code qui marche avec la touche entrer!!
   /* $('input').keyup(function (e) {
        var nom = $('#first_name').val();
        var prenom = $('#last_name').val();
        var ville = $('#city').val();
        if (e.keyCode == 13) {
            var rpl = $('#username').replaceWith(nom + " " + prenom);
            $('#username').text(rpl.text());
        }     
    });*/


    $('body').append('<button class="btn">Enter</button>'); // avec un boutton
    $('.btn').click(function () {
        var nom = $('#first_name').val();
        var prenom = $('#last_name').val();
        var ville = $('#city').val();
        var rpl = $('#username').replaceWith(nom + " " + prenom);
        $('#username').text(rpl.text());
    });

    

 }); 
