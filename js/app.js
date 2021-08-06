/* Creacion de botones */
const pantalla = document.querySelector('.datos p');
const botonesDigitos = document.querySelectorAll('.bnDigito');
const btnBorrar = document.querySelector('.btnBorar');
const btnRetroceso = document.querySelector('.btnRetroceso');
const btnPunto = document.querySelector('.btnPunto');
const acumulador = document.querySelector('.acumulador p');
const borrarantalla = document.querySelector('.btnBorrarPantalla');

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

btnMultiplicacionaddEventListener('click', function() {
    multiplicar();
})



/* Funciones */
function registrarDigito(digito) { 
    if (pantalla.textContent[0] == '0') {
        pantalla.textContent = '';
    }  
    
    pantalla.textContent = pantalla.textContent + digito;
    
    if (pantalla.textContent.length > 2) {
        pantalla.textContent = 'error';
    }
}

function registrarPunto() { 
    var contadorPuntos = 0;

    if (pantalla.textContent == 'errorr') {
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
    let operando = Number(pantalla.textContent);
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
        resultado = operando1 + operando2;
        pantalla.textContent = 0;
        acumulador.textContent = resultado;
    }
}