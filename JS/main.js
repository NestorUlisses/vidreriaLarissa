$('.toggle').click(function () {
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-button': 'toggle',
        opacity: 'toggle'

    }, "slow");
    
});

$(document).ready(function(){
    $(".agregar").click(function(e){
        var usuario = $("#usuario").val();
        var contra = $("#pass").val();
        var email = $("#email").val();
        

        sessionStorage.setItem("usuario", usuario);
        sessionStorage.setItem("pass", contra);
        sessionStorage.setItem("email", email);
    });
});
        