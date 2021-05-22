$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip() 

    $("#botoncorreo").click(function(event){
        alert("El correo fue enviado correctamente");
    });

    $("#favoritos").click(function(event){
        alert("Añadido a favoritos");
    });

   $("h4").dblclick(function(){
    $(this).css("color", "red");
   });

   $('.card-title').click(function(){
    $('.card-text').toggle();
   });

   $('.botonempezar').click(function(event){
    alert("¡Genial! te has suscrito :)");
});



});

