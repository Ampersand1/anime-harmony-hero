//iniciar juego con boton
const boton = document.getElementById('jugar');
boton.addEventListener('click', function () {
    jugar();
});
//cambiar de pagina
function jugar() {
    window.location.href = 'juego.html';
}