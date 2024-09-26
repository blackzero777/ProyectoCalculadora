/* Creacion de botones */
const pantalla = document.querySelector('.datos p');
const botonesDigitos = document.querySelectorAll('.btnDigito'); //La clase es btnDigito y no bnDigito
const btnBorrar = document.querySelector('.btnBorrar'); //La clase es btnBorrar y no btnBora
const btnRetroceso = document.querySelector('.btnRetroceso');
const btnPunto = document.querySelector('.btnPunto');
const acumulador = document.querySelector('.acumulador p');
const borrarPantalla = document.querySelector('.btnBorrarPantalla'); //const escrita erronamente borrarantalla por borrarPantalla

/*Botones de operaciones*/
const btnSuma = document.querySelector('.btnSuma');
const btnResta = document.querySelector('.btnResta');
const btnMultiplicacion = document.querySelector('.btnMultiplicacion');

let primeraVez = false; /*Booleana*/

/* Eventos */
for (let i = 0; i < botonesDigitos.length; i++) {
    botonesDigitos[i].addEventListener('click', function() {
        if (pantalla.textContent == 'error') {
            alert('Tienes pantalla de error Presiona la tecla \'C\'')
        } else {
            registrarDigito(botonesDigitos[i].textContent);
        }
    }) 
}

btnBorrar.addEventListener('click',function() {
    pantalla.textContent = 0;
    acumulador.textContent = 0;
    primeraVez = false;
})

borrarPantalla.onclick = function(){
    pantalla.textContent = 0;
}

btnRetroceso.addEventListener('click', function() {
    borrarNumero(valor);
})

btnPunto.addEventListener('click', function() {
    registrarPunto();
})

btnSuma.onclick = function() {
    sumar();
}

btnResta.addEventListener('click', function() {
    restar();
})

btnMultiplicacion.addEventListener('click', function() { //Error al llamar la función addEventListener
    multiplicar();
})



/* Funciones */
function registrarDigito(digito) { 
    if (pantalla.textContent[0] == '0') {
        pantalla.textContent = '';
    }  
    
    pantalla.textContent = pantalla.textContent + digito;
    
    if (pantalla.textContent.length > botonesDigitos.length) {  //Se cambio la condición de la función registrarDigito
        pantalla.textContent = 'error';
    }
}

function registrarPunto() { 
    var contadorPuntos = 0;

    if (pantalla.textContent == 'error') { //pantalla.textContent == 'error' y no pantalla.textContent == 'errorr'
        alert('Tienes pantalla de error Presiona la tecla \'C\'')
    } else {
        for (let i = 0; i < pantalla.textContent.length; i++) {
            if (pantalla.textContent[i] == '.') {
                contadorPuntos++;
            }  
        }

        if (contadorPuntos >= 1) {
            pantalla.textContent = pantalla.textContent;
        } else {
            registrarDigito('.');
        }
        
    }
}

function borrarNumero() {
    if (pantalla.textContent == 'errror') {
        alert('Tienes pantalla de error Presiona la tecla \'C\'');
    } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    
        if (pantalla.textContent.length == 0) {
            pantalla.textContent = '0';
        }
    }
    
}

function sumar() {
    let operando1 = Number(acumulador.textContent);
    let operando2 = Number(pantalla.textContent); //la variable debe ser operando2 y no solo operando
    let resultado;

    if (primeraVez == false) {
        acumulador.textContent = pantalla.textContent;
        pantalla.textContent = 0;
        primeraVez = true;
    } else {
        resultado = operando1 + operando2;
        pantalla.textContent = 0;
        acumulador.textContent = resultado;
    }
}

function restar() {
    let operando1 = Number(acumulador.textContent);
    let operando2 = Number(pantalla.textContent);
    /*let resultado;*/

    if (primeraVez == false) {
        acumulador.textContent = pantalla.textContent;
        pantalla.textContent = 0;
        primeraVez = true;
    } else {
        resultado = operando1 - operando2;
        pantalla.textContent = 0;   //Se debe limpiar la pantalla para evitar la acumulación de numeros que se restan
        acumulador.textContent = resultado;
    }
}

function multiplicar() {
    let operando1 = Number(acumulador.textContent);
    let operando2 = Number(pantalla.textContent);
    let resultado;


    if (primeraVez == false) {
        acumulador.textContent = pantalla.textContent;
        pantalla.textContent = 0;

        primeraVez = true;
    } else {
        resultado = operando1 * operando2; //la operación estsba como suma, se debe multiplicar
        pantalla.textContent = 0;
        acumulador.textContent = resultado;
    }
}