//notas 
const note1 = document.getElementById('noteM1');
const note2 = document.getElementById('noteM2');
const note3 = document.getElementById('noteM3');
const note4 = document.getElementById('noteM4');

//declarar posiciones iniciales notas
let posicion = -2700;
let posicion1 = -2300;
let posicion2 = -2600;
let posicion3 = -2100;
// variable del movimiento
let intervalo;

//metodos para el movimiento
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function moveNote1() {
    posicion += 6.2;
    note1.style.top = posicion + 'px';
    if (posicion >= (window.innerHeight)) {
        posicion = getRandomInt(200, 700) * -1;
    }
}
function moveNote2() {
    posicion1 += 6.2;
    note2.style.top = posicion1 + 'px';
    if (posicion1 >= (window.innerHeight)) {
        posicion1 = getRandomInt(200, 700) * -1;
    }
}
function moveNote3() {
    posicion2 += 6.2;
    note3.style.top = posicion2 + 'px';
    if (posicion2 >= (window.innerHeight)) {
        posicion2 = getRandomInt(200, 700) * -1;
    }
}
function moveNote4() {
    posicion3 += 6.2;
    note4.style.top = posicion3 + 'px';
    if (posicion3 >= (window.innerHeight)) {
        posicion3 = getRandomInt(200, 700) * -1;
    }
}
function start() {
    intervalo = setInterval(function () {
        moveNote1();
        moveNote2();
        moveNote3();
        moveNote4();
    }, 10);
}
//desaparecer objetos
function desaparecerObjetos() {
    function moveNote1() {
        note1.style.display = "none";
    }
    function moveNote2() {
        note2.style.display = "none";
    }
    function moveNote3() {
        note3.style.display = "none";
    }
    function moveNote4() {
        note4.style.display = "none";
    }

    moveNote1();
    moveNote2();
    moveNote3();
    moveNote4();
}
function desaparecerBotones() {
    function moveButton() {
        let boton = document.getElementById("botonMusica");
        boton.style.display = "none";
        let boton2 = document.getElementById("pause");
        boton2.style.display = "none";;
        let boton3 = document.getElementById("r1");
        boton3.style.display = "none";
    }
    moveButton();
}
//obtener puntaje
var cont = 0;
const tbody = document.getElementById('puntaje');
let suma;
function obtenerPuntaje(posicionTop) {
    if (posicionTop >= 720 && posicionTop <= 810) {
        cont += 30;
    } else if (posicionTop <= 720 || posicionTop >= 810) {
        cont = cont - 20;
    }
    return cont;
}
function obtenerPuntajeActual(posicionTop) {
    if (posicionTop >= 720 && posicionTop <= 810) {
        suma = 1;
    } else if (posicionTop <= 720 || posicionTop >= 810) {
        suma = 0;
    }
    return suma;
}

function actualizarPuntaje(cont) {
    document.getElementById('puntaje').innerText += cont;
    document.getElementById('score').innerText = cont;
    document.getElementById('scoreF').innerText = cont;
    console.log(document.getElementById('scoreF').textContent);
}

function llenarTabla(cont) {
    let contenidoTabla = '';

    contenidoTabla += `
<tr>
    <td id="puntaje-actual">${cont}</td>
</tr>
`;
    tbody.innerHTML = contenidoTabla;
}
//obtener puntos perdidos
const body = document.getElementById('puntosPerdidos');
let cantidadPerdidos = 0;
function missed(suma) {
    if (suma == 0) {
        cantidadPerdidos += 1;
    }
    return cantidadPerdidos;
}
function actualizarMissed(m) {
    document.getElementById('puntosPerdidos').innerText = m;
    document.getElementById('lost').innerText = m;
    document.getElementById('lostF').innerText = m;
    console.log(document.getElementById('lostF').textContent);
}
function llenarMissed(m) {
    let contenidoTabla = '';

    contenidoTabla += `
<tr>
    <td id="puntosPerdidos">${m}/15</td>
</tr>
`;
    body.innerHTML = contenidoTabla;
}
//cantidad perdidos
let puntajePerder = 0;
function perder(suma) {
    if (suma == 0) {
        puntajePerder += 20;
    }
    return puntajePerder;
}
//contar puntaje para perder
function contarPuntaje(num) {
    return num * 20;
}
//mostrar pestaña perder
let pestañaPerdida = document.getElementById('pantallaPerdida');
let pestañaFinal = document.getElementById('pantallaFinal');
function pestañaPerder() {
    pestañaPerdida.style.display = "block";
}
function pantallaFinal() {
    pestañaFinal.style.display = "block";
}

//reproducir 
const video = document.getElementById("videoFondo");
const musica = document.getElementById("musicaFondo");

//calcular tiempo transcurrido
function calcularTiempoTranscurrido(tiempoInicio) {
    let tiempoActual = new Date();
    let tiempoTranscurrido = tiempoActual - tiempoInicio;
    let segundosTranscurridos = Math.floor(tiempoTranscurrido / 1000);
    return segundosTranscurridos;
}
//parar contenido
let final = document.getElementById("pantallaFinal");
function startTimer() {
    temporizador = setTimeout(() => {
        tiempoRestante--;

        if (tiempoRestante > 0) {
            startTimer();
        } else {
            video.pause();
            clearInterval(intervalo);
            desaparecerObjetos();
            desaparecerBotones();
            //detenerSonido();
            empezar = false;
            temporizador = null;
            pantallaFinal();
            musica.pause();
        }
    }, 1000); // 1 segundo
}
function pararContenido() {
    video.pause();
    clearInterval(intervalo);
    desaparecerBotones();
    //detenerSonido();
    musica.pause();
}

function reproducirSonido(tecla) {
    const audio = sonidos[tecla];
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}
//reiniciar juego
let botonReinicio = document.getElementById("r1");
let botonReinicio2 = document.getElementById("r2");
let botonReinicio3 = document.getElementById("r3");
function reiniciarJuego() {
    location.reload();
}
//EVENTOS
//reiniciar juego
botonReinicio.addEventListener("click", function () {
    reiniciarJuego();
});
botonReinicio2.addEventListener("click", function () {
    reiniciarJuego();
});
botonReinicio3.addEventListener("click", function () {
    reiniciarJuego();
});
//empezar-reanudar juego
let empezar = false;
let pause = document.getElementById("pause");
video.pause;
let tiempoRestante = 148; // Tiempo inicial en segundos
let temporizador;

document.getElementById("botonMusica").addEventListener("click", function () {
    if(video.paused){
        start();
        video.play();
        musica.volume = 0.5;
        musica.play();
        /*detenerSonido();*/
        empezar = true;
        startTimer();
    }
    return empezar;
});
//pausar juego
document.getElementById("pause").addEventListener("click", function () {
    if(video.paused){

    }else{
        clearInterval(intervalo);
        video.pause();
        musica.pause();
        empezar = false;
        if (temporizador) {
            // Si el temporizador está corriendo, detenerlo
            clearTimeout(temporizador);
            temporizador = null;
        } else {
            // Si el temporizador no está corriendo, iniciar/reanudarlo
            startTimer();
        }
        empezar = false;

    }
    return empezar;
});
//
function stopTimer() {
    clearTimeout(temporizador);
    temporizador = null; // Limpiar temporizador al detenerlo
}
//teclas
const s = document.getElementById('sound1');
const d = document.getElementById('sound2');
const k = document.getElementById('sound3');
const l = document.getElementById('sound4');
//notas juego
let puntajePerderTotal = 0;
let punt = 0;
let punt1 = 0;
let punt2 = 0;
let punt3 = 0;
let pararContar = true;
let cantPerdidos;
document.addEventListener('keydown', function (e) {
    console.log(e.key)

    if (e.key == 's' || e.key == 'S') {
        if (pararContar && empezar) {
            //puntaje
            let div = document.getElementById('noteM1');
            let posicionTop = div.offsetTop;
            obtenerPuntaje(posicionTop);
            suma = obtenerPuntajeActual(posicionTop);
            cont = obtenerPuntaje();
            actualizarPuntaje(cont);
            llenarTabla(cont);
            //puntaje perdidos
            punt = perder(suma);
            missed(suma);
            cantPerdidos = missed();
            actualizarMissed(cantPerdidos);
            llenarMissed(cantPerdidos);
            //sonido
            if(suma==1){
                s.play();
            }
        }
    }
    if (e.key == 'd' || e.key == 'D') {
        if (pararContar && empezar) {
            //puntaje
            let div1 = document.getElementById('noteM2');
            let posicionTop1 = div1.offsetTop;
            obtenerPuntaje(posicionTop1);
            suma = obtenerPuntajeActual(posicionTop1);
            cont = obtenerPuntaje();
            actualizarPuntaje(cont);
            llenarTabla(cont);
            //puntaje perdidos
            punt1 = perder(suma);
            missed(suma);
            cantPerdidos = missed();
            actualizarMissed(cantPerdidos);
            llenarMissed(cantPerdidos);
            //sonido
            if(suma==1){
                d.play();
            }
        }
    }
    if (e.key == 'k' || e.key == 'K') {
        if (pararContar && empezar) {
            //puntaje
            let div2 = document.getElementById('noteM3');
            let posicionTop2 = div2.offsetTop;
            obtenerPuntaje(posicionTop2);
            suma = obtenerPuntajeActual(posicionTop2);
            cont = obtenerPuntaje();
            actualizarPuntaje(cont);
            llenarTabla(cont);
            //puntaje perdidos
            punt2 = perder(suma);
            missed(suma);
            cantPerdidos = missed();
            actualizarMissed(cantPerdidos);
            llenarMissed(cantPerdidos);
            //sonido
            if(suma==1){
                k.play();
            }
        }
    }
    if (e.key == 'l' || e.key == 'L') {
        if (pararContar && empezar) {
            //puntaje
            let div3 = document.getElementById('noteM4');
            let posicionTop3 = div3.offsetTop;
            obtenerPuntaje(posicionTop3);
            suma = obtenerPuntajeActual(posicionTop3);
            cont = obtenerPuntaje();
            actualizarPuntaje(cont);
            llenarTabla(cont);
            //puntaje perdidos
            punt3 = perder(suma);
            missed(suma);
            cantPerdidos = missed();
            actualizarMissed(cantPerdidos);
            llenarMissed(cantPerdidos);
            //sonido
            if(suma==1){
                l.play();
            }
        }
    }
    //parar juego por equivocaciones
    puntajePerderTotal = perder();

    if (puntajePerderTotal >= contarPuntaje(15)) {
        pararContenido();
        pararContar = false;
        pestañaPerder();
    }
});
