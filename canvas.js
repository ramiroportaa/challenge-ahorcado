const canvas = document.getElementById("ahorcado");
var pincel = canvas.getContext("2d");

/* Definimos estilos del pincel */
pincel.strokeStyle = "#0A3871";
pincel.lineWidth = 2;

/* Dibujamos la horca inicial*/
pincel.beginPath();
pincel.moveTo(200,350);
pincel.lineTo(400,350);
pincel.moveTo(260,350);
pincel.lineTo(260,50);
pincel.moveTo(260,50);
pincel.lineTo(370,50);
pincel.moveTo(370,50);
pincel.lineTo(370,80);
pincel.stroke();

function dibujarCabeza() {
    pincel.beginPath();
    pincel.arc(370,100,20,0,2*3.14);
    pincel.stroke();
}

function dibujarCuerpo() {
    pincel.beginPath();
    pincel.moveTo(370,120);
    pincel.lineTo(370,240);
    pincel.stroke();
}

function dibujarPiernaDerecha() {
    pincel.beginPath();
    pincel.moveTo(370,240);
    pincel.lineTo(400,290);
    pincel.stroke();
}

function dibujarPiernaIzquierda(){
    pincel.beginPath();
    pincel.moveTo(370,240);
    pincel.lineTo(340,290);
    pincel.stroke();
}

function dibujarBrazoDerecho(){
    pincel.beginPath();
    pincel.moveTo(370,120);
    pincel.lineTo(400,170);
    pincel.stroke();
}

function dibujarBrazoIzquierdo(){
    pincel.beginPath();
    pincel.moveTo(370,120);
    pincel.lineTo(340,170);
    pincel.stroke();
}

function escribirTexto(texto, color) {
    pincel.beginPath();
    pincel.fillStyle = color;
    pincel.strokeStyle="black";
    pincel.font = "bold 5rem arial";
    pincel.fillText(texto,100,200);
    pincel.strokeText(texto,100,200);
}

function mostrarPalabra(palabra) {
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.font = "bold 1.5rem arial";
    pincel.fillText("La palabra era " + palabra,100,385);
}