//Variables 
let rndValue = parseInt(Math.random()* (100+1));
let attemps = 10;
let attempsHistorial = [];


//Elementos del documento html
const form = document.getElementById("form")
const valueIn = document.getElementById("numberToValidate");
const attempsList = document.getElementById("listaIntentos");
const submit = document.getElementById("button");
const attempsRemaining = document.getElementById("attemps");
const message = document.getElementById("message");
const restart = document.getElementById("restart");

//Función que finaliza el Juego
function finalize(){
    submit.style.display = "none";
    submit.disabled = true;
    valueIn.disabled = true;
    restart.style.display = "block";

}


//Funcion que realiza la compara y valida de los valores que ingresa el usuario
function compare() {

    if (attemps > 0) {//Si la cantidad de intentos es mayor a 0
        const castedValue = Number(valueIn.value)//casteo a entero de valueIn

        if(castedValue < 0 || castedValue >100 || !castedValue){
            message.innerHTML = "Ingrese un valor numérico válido";
        }else{
            attempsHistorial.push(castedValue); //Agregar intento a la lista de intentos
        }
        
        
        if(castedValue === rndValue){//Analizar respuesta ingresada por el usuario
            message.innerHTML = "Respuesta correcta!";
            finalize();
        }else if(castedValue < rndValue){
            message.innerHTML = "Aumente la cifra";
        }else{
            message.innerHTML = "Disminuya la cifra";
        }
        attemps--;
        attempsRemaining.innerHTML = attemps;
    }else{
        //Usuario no adivina la respuesta, revela la respuesta
        message.innerHTML = "Sin intentos restantes, el número correcto era "+ rndValue +".";
        finalize();
    }
    valueIn.innerHTML = ""
    attempsList.innerHTML = attempsHistorial.join(", "); 
}

//Funcíon que reinicia el juego
function restartAction() {
    rndValue = parseInt(Math.random()* (100+1));
    attemps = 10;
    submit.style.display = "block";
    submit.disabled = false;
    valueIn.disabled = false;
    restart.style.display = "none";
    attempsRemaining.innerHTML = attemps;
    message.innerHTML = "";
    attempsHistorial = [];
    attempsList.innerHTML = "";

}


//Eventos
submit.addEventListener("click", e => {e.preventDefault();  compare()});
restart.addEventListener("click", e => {e.preventDefault(); restartAction()})
