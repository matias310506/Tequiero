function mostrarMensaje() {
    var helloKittyCard = document.getElementById('helloKittyCard');
    var helloKittyImage = document.getElementById('helloKittyImage');
    var mensaje = document.getElementById('mensaje');

    helloKittyImage.style.display = 'none';
    helloKittyCard.removeChild(helloKittyImage);
    
    var boton = document.querySelector('button');
    boton.style.display = 'none';

    mensaje.style.display = 'block';
}