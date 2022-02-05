const vistaInicio = document.getElementById("inicio");
const vistaAgregarPalabra = document.getElementById("agregar-palabra");
const vistaJuego = document.getElementById("juego");

var palabras = ["JUEGO", "ORACLE", "ONE", "ALURA", "AHORCADO"];

const regex = new RegExp("^[A-Z\\s]+$");

function mostrar (vista){
    vistaInicio.classList.add("display-none");
    vistaAgregarPalabra.classList.add("display-none");
    vistaJuego.classList.add("display-none");
    vista.classList.remove("display-none");
}

function escogerPalabra (array){
    const posicionRandom = Math.round(Math.random() * (array.length-1));
    const secreto = array[posicionRandom];
    //Eliminamos la palabra del array asi no se vuelve a elegir.
    array.splice(posicionRandom,1);
    return secreto;
}

function mostrarGuiones (palabra){
    const word = document.querySelector(".word");
    word.innerHTML = "";
    const cantidad = palabra.length;
    for (let i = 0; i < cantidad; i++) {
        const letra = palabra[i];
        word.innerHTML += `<div class="letter">
                                <p class="${letra} display-none">${letra}</p>
                                <img src="img/underline.png">
                            </div>`;
    };
}

function mostrarLetraCorrecta(letra) { 
    const letter = document.querySelectorAll(`.${letra}`);
    letter.forEach(letra =>(
        letra.classList.remove("display-none")
    ));
}

function escribirLetraIncorrecta(errores) { 
    const other = document.querySelector(".other");
    other.innerHTML = "";
    errores.forEach(error =>(other.innerHTML += `<p>${error}</p>`));
    
}

function estaEnPalabra(letra, palabra) {
    return palabra.includes(letra);
}

function verificarLetra(secreto, errores, letrasCorrectas) {
    document.addEventListener("keyup", function eventoKeyUp (e){
        if (regex.test(e.key)) {
            let letra = e.key;
            if (estaEnPalabra(letra, secreto)) {
                if (!letrasCorrectas.includes(letra)) {
                    letrasCorrectas.push(letra);
                    mostrarLetraCorrecta(letra);
                }else{
                    alert(letra + " ya fue agregada");
                }
            }else{
                if (!errores.includes(letra)) {
                    errores.push(letra);
                    escribirLetraIncorrecta(errores);
                    switch (errores.length) {
                        case 1:
                            dibujarCabeza()
                            break;
                        case 2:
                            dibujarCuerpo()
                            break;
                        case 3:
                            dibujarPiernaDerecha()
                            break;
                        case 4:
                            dibujarPiernaIzquierda()
                            break;
                        case 5:
                            dibujarBrazoDerecho()
                            break;
                        case 6:
                            dibujarBrazoIzquierdo()
                            break;
                    }
                }else{
                    alert(letra + " ya fue agregada");
                }
            }
            verificarFinJuego(secreto, letrasCorrectas, errores, eventoKeyUp);
        }else{
            //Mostrar algo cuando no pasa el REGEX
        }
    })
}

function verificarFinJuego(secreto, letrasCorrectas, errores, eventoKeyUp){
    if (errores.length == 6) {
        escribirTexto("PERDISTE","red");
        mostrarPalabra(secreto);
        document.removeEventListener("keyup", eventoKeyUp);
    }
    const dataArr = new Set(secreto);
    let arraySecreto = [...dataArr];
    if (letrasCorrectas.length == arraySecreto.length) {
        escribirTexto("GANASTE","green");
        document.removeEventListener("keyup", eventoKeyUp);
    }
}

function IniciarJuego (){
    let errores = [];
    let letrasCorrectas = [];
    const secreto = escogerPalabra(palabras);
    inputMobile();
    mostrarGuiones(secreto);
    mostrar(vistaJuego);
    verificarLetra(secreto, errores, letrasCorrectas);
}

function AgregarPalabra (palabra){
    if (palabra != "") {
        palabras.push(palabra);
        alert("Se agregó: " + palabra);
    }
}

function inputMobile() {
    const input = document.querySelector(".mobile");
    input.addEventListener("input", ()=>{
        setTimeout(() => {
            input.value=""
        }, 200);
    })
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
    location.reload();
    //Logica para desistir palabra y pasar al a siguiente.
    //location reload pero almacenar antes el array de palabras en localsotrage, recuperarlo y mostrar vista ahorcado
    //Si el array esta vacio, mostrar mensaje PERDISTE, FIN DEL JUEGO.
    //O simplemente mostrar "PERDISTE" y la palabra.
}