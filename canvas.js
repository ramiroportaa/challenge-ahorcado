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

/* Dibujo de cabeza */
pincel.beginPath();
pincel.arc(370,100,20,0,2*3.14);
pincel.stroke();

/* Dibujo cuerpo */
pincel.beginPath();
pincel.moveTo(370,120);
pincel.lineTo(370,240);
pincel.stroke();

/* Dibujo pierna derecha */
pincel.beginPath();
pincel.moveTo(370,240);
pincel.lineTo(400,290);
pincel.stroke();

/* Dibujo pierna izquierda */
pincel.beginPath();
pincel.moveTo(370,240);
pincel.lineTo(340,290);
pincel.stroke();

/* Dibujo brazo derecho */
pincel.beginPath();
pincel.moveTo(370,120);
pincel.lineTo(400,170);
pincel.stroke();

/* Dibujo brazo izquierdo */
pincel.beginPath();
pincel.moveTo(370,120);
pincel.lineTo(340,170);
pincel.stroke();