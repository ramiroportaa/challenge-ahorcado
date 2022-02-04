const vistaInicio = document.getElementById("inicio");
const vistaAgregarPalabra = document.getElementById("agregar-palabra");
const vistaJuego = document.getElementById("juego");

var palabras = ["juego", "oracle", "one", "alura", "ahorcado"];

function mostrar (vista){
    vistaInicio.classList.add("display-none");
    vistaAgregarPalabra.classList.add("display-none");
    vistaJuego.classList.add("display-none");
    vista.classList.remove("display-none");
}

function escogerPalabra (array){
    const posicionRandom = Math.round(Math.random() * (array.length-1));
    const secreto = array[posicionRandom];
    return secreto;
}

function mostrarGuiones (palabra){
    const word = document.querySelector(".word");
    word.innerHTML = "";
    const cantidad = palabra.length;
    for (let i = 0; i < cantidad; i++) {
        const letra = palabra[i];
        word.innerHTML += `<div class="letter">
                                <p id="${letra}" class="display-none">${letra}</p>
                                <img src="img/underline.png">
                            </div>`;
    };
}

function IniciarJuego (){
    const secreto = escogerPalabra(palabras);
    mostrarGuiones(secreto);

    mostrar(vistaJuego);
}

function AgregarPalabra (palabra){
    if (palabra != "") {
        palabras.push(palabra);
        alert("Se agregó: " + palabra);
    }
}

const btnInciarJuego = document.getElementById("iniciar-juego");
btnInciarJuego.onclick = IniciarJuego;

const btnAgregarPalabra = document.getElementById("nueva-palabra");
btnAgregarPalabra.onclick = ()=>{mostrar(vistaAgregarPalabra)};

const inputNuevaPalabra = document.getElementById("input-nueva-palabra");
inputNuevaPalabra.addEventListener("keyup", (e)=>{
    if (e.key == "Enter") {
        const palabra = inputNuevaPalabra.value;
        AgregarPalabra(palabra);
        inputNuevaPalabra.value = "";
    }
})

const btnGuardar = document.getElementById("guardar");
btnGuardar.addEventListener("click",()=>{
    const palabra = inputNuevaPalabra.value;
    AgregarPalabra(palabra);
    IniciarJuego();
})

const btnCancelar = document.getElementById("cancelar");
btnCancelar.onclick = ()=>{location.reload()};

const btnNuevoJuego = document.getElementById("nuevoJuego");
btnNuevoJuego.onclick = ()=>{location.reload()};

const btnDesistir = document.getElementById("desistir");
btnDesistir.onclick = ()=>{
    console.log("Logica para jugar la proxima palabra");
}