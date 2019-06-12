$(document).ready(function(){
    var usuario = sessionStorage.getItem("usuario");
    var contrasena = sessionStorage.getItem("contrasena");
    var email = sessionStorage.getItem("email");
    
    $("h1").text("Hola "+usuario+"!");
});