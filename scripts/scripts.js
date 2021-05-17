
var elemBotones, btnHelado, btnFruta, btnPersona, nuevoP, textoP;
var miPrefijo = 'boton';
var lstBotones = [];
var lstPropiedades = [];

document.write(`<div class='cont'>Bienvenido a las pruebas de js,<br>Crea tu pripio menú</div>`);

function iniciando(e) {
    elemBotones = document.getElementById('botones');
    elemRespuestas = document.getElementById('respuestas');
    
    crearListas();
    crearBotones();
    
}
/* Creación de un elemento js para poder ponerlo a la escucha. Esto es antes implementar la creación
"dinámica" de los elementos HTML y su posterior elemento js y puesta a la escucha. (Estaba en línea 15)
    // btnHelado = document.getElementById('helado');
    // btnHelado.addEventListener('click', Helado);*/


function crearListas() {;
    nuevoBoton = null;
    let i = 0;
    while (nuevoBoton != 'exit') {;
        nuevoBoton = prompt('Ingrese el nombre del botón a crear (exit para terminar): ');
        nuevoBoton = nuevoBoton.toLowerCase();
        if (nuevoBoton != 'exit') {
            nuevoBoton = nuevoBoton.charAt(0).toUpperCase() + nuevoBoton.slice(1);
            lstBotones[i] = 'boton' + nuevoBoton;
            i++;
        }
    }
}


function crearBotones() {
    for (i of lstBotones) {
        let nombre = i;
        nombre = nombre.slice(5);
        window[i] = document.createElement('input');
        window[i].setAttribute('id', i);
        window[i].setAttribute('class', 'btn');
        window[i].setAttribute('type', 'button');
        window[i].setAttribute('value', nombre);
        elemBotones.appendChild(window[i]);
        window['js' + i] = document.getElementById(i);
        window['js' + i].addEventListener('click', Helado);
        window['js' + i].addEventListener('contextmenu', eliminar);
    }
}


function eliminar(e) {
    e.preventDefault();
    elemBotones.removeChild(e.target);
}

function Helado() {
    
    msg = 'Bienvenido ' + prompt('Cuál es tu nombre?') + '.\n';
    // document.write(`Bienvenido ${nombre}<br>&nbsp;&nbsp;`);
    
    dinero = parseFloat(prompt('Cuánto dinero gastarás?'));
    
    if (dinero >= 2.9) {
        let vuelto = (dinero - 2.9).toFixed(2);
        msg = msg + `Con $${dinero} puedes comprar helado con confites o pote de 1/4 kg y te sobra $${vuelto}`;
    } else if (dinero >= 1.8) {
        let vuelto = (dinero - 1.8).toFixed(2);
        msg = msg + `Con $${dinero} puedes comprar un helado HELARDO! y te sobra $${vuelto}`;
    } else if (dinero >= 1.7) {
        let vuelto = (dinero - 1.7).toFixed(2);
        msg = msg + `Con $${dinero} puedes comprar un helado HELADOVICH! y te sobra $${vuelto}`;
    } else if (dinero >= 0.6) {
        let vuelto = (dinero - 0.6).toFixed(2);
        msg = msg + `Con $${dinero} puedes comprar un helado DE AGUA! y te sobra $${vuelto}`;
    } else {
        msg = msg + `Lo siento, no te alcanza para nada :(, guarda tu dinero`;
    }

    nuevoP = document.createElement('p');
    nuevoP.setAttribute('class', 'resp');
    textoP = null;
    
    textoP = document.createTextNode(msg);
    nuevoP.appendChild(textoP);
    elemRespuestas.appendChild(nuevoP)
}


window.addEventListener('load', iniciando, false);


/* Creación de un botón y luego asignando sus distintas propiedades, antes de intentar su creación "dinámica".

    // const botonHelado = document.createElement('input');
    // botonHelado.setAttribute('id', 'helado');
    // botonHelado.setAttribute('class', 'btn');
    // botonHelado.setAttribute('type', 'button');
    // botonHelado.setAttribute('value', 'Helado');


Creación original de los botones, digitando el código HTML por medio del document.write (100% "estático")
    // document.write(`<input class='btn'  id='helado' type='button' value='Helado'>`);
    // document.write(`<input class='btn' id='frutas' type='button' value='Fruta'>`);
    // document.write(`<input class='btn' id='personas' type='button' value='Persona'>`);
*/
