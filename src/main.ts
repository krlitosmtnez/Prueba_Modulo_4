// Funciones para subir y bajar el número del turno actual

function subir (){
    let posicion : string | number = document.getElementsByClassName("numero-turno")[0].innerHTML;
    let nuevaposicion = parseInt(posicion)+1;
    const turnotexto = nuevaposicion.toString();
    if (nuevaposicion < 10) {
        // Añado el 0 de la izquierda simplemente comprobando si el número es inferior a 10
        document.getElementsByClassName("numero-turno")[0].innerHTML = "0" + turnotexto;
    }
    // Si es mayor de 10, no se añade el 0 de la izquierda
    else {
        document.getElementsByClassName("numero-turno")[0].innerHTML = turnotexto;
    } 
}

function bajar (){
    let posicion : string | number = document.getElementsByClassName("numero-turno")[0].innerHTML;
    let nuevaposicion = parseInt(posicion)-1;
    if (nuevaposicion > 0) {
        //Controlamos que el contador no pueda bajar de 1
        const turnotexto = nuevaposicion.toString();
        if (nuevaposicion < 10) {
            document.getElementsByClassName("numero-turno")[0].innerHTML = "0" + turnotexto;
        }
        else {
            document.getElementsByClassName("numero-turno")[0].innerHTML = turnotexto;        
        }
    }
}

function reseteo (){
    document.getElementsByClassName("numero-turno")[0].innerHTML = "01";
}

function ajuste (){
    const nuevoturno = (document.getElementById("turnomanual") as HTMLInputElement).value;
    if (parseInt(nuevoturno) < 10 && parseInt(nuevoturno) != 0 ) {
        document.getElementsByClassName("numero-turno")[0].innerHTML = "0" + nuevoturno;
    }
    else {
        document.getElementsByClassName("numero-turno")[0].innerHTML = "" + nuevoturno;
    }
}

const pulsarreset = document.getElementById("cero");
if (pulsarreset !== null && pulsarreset !== undefined) {
    pulsarreset.addEventListener("click", reseteo);
}

const pulsarup = document.getElementById("up");
if (pulsarup !== null && pulsarup !== undefined) {
    pulsarup.addEventListener("click", subir);
}

const pulsardown = document.getElementById("down");
if (pulsardown !== null && pulsardown !== undefined) {
    pulsardown.addEventListener("click", bajar);
}

const pulsarajuste = document.getElementById("ajustado");
if (pulsarajuste !== null && pulsarajuste !== undefined) {
    pulsarajuste.addEventListener("click", ajuste);
}