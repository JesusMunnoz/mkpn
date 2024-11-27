let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'flex' //'block'

    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo';
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya';
    }else{
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){

    let mascotaAleatoria = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else if(mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'Fuego';
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua';
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra';
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAletorio = aleatorio(1, 3)

    if (ataqueAletorio == 1){
        ataqueEnemigo = 'Fuego'
    }else if(ataqueAletorio == 2){
        ataqueEnemigo = 'Agua'
    }else if(ataqueAletorio == 3){
        ataqueEnemigo = 'Tierra'
    }

    combate();
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
    }else if ((ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') || (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') || (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua')){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    }else if (vidasJugador == 0){
        crearMensajeFinal("Lo siento, perdiste :(")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true

    let sectionSeleccionarAtaque = document.getElementById('reiniciar');
    sectionSeleccionarAtaque.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) +min)
}

window.addEventListener('load', iniciarJuego) // para poner <script> al inicio