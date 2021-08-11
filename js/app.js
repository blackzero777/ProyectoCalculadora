/* Creacion de botones */
const pantalla = document.querySelector('.datos p');
const botonesDigitos = document.querySelectorAll('.btnDigito');
const btnBorrar = document.querySelector('.btnBorrar');
const btnRetroceso = document.querySelector('.btnRetroceso');
const btnPunto = document.querySelector('.btnPunto');
const acumulador = document.querySelector('.acumulador p');
const borrarPantalla = document.querySelector('.btnBorrarPantalla');

/*Botones de operaciones*/
const btnSuma = document.querySelector('.btnSuma');
const btnResta = document.querySelector('.btnResta');
const btnMultiplicacion = document.querySelector('.btnMultiplicacion');
const btnDivision = document.querySelector('.bntDivision');
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

borrarPantalla.addEventListener('click', function(){
    pantalla.textContent = 0;
}) 

btnRetroceso.addEventListener('click', function() {
    borrarNumero();
})

btnPunto.addEventListener('click', function() {
    registrarDigito('.');
})

btnSuma.addEventListener('click',function (){
    sumar();
}) 

btnResta.addEventListener('click', function() {
    restar();
})

btnMultiplicacion.addEventListener('click', function() {
    multiplicar();
})

btnDivision.addEventListener('click', function(){
    dividir();
})


/* Funciones */
function registrarDigito(digito) { 
    if(digito == '.'){
        let contadorPuntos = 0;
  
        for (let i = 0; i < pantalla.textContent.length; i++) {
          if (pantalla.textContent[i] == '.') {
            contadorPuntos++;
          }
          
        }
  
        if(contadorPuntos >=1){
          pantalla.textContent = pantalla.textContent
          }else{
            pantalla.textContent = pantalla.textContent + digito;
          }
      }else{
          if(pantalla.textContent[0] == '0'){
            pantalla.textContent = '';
          }
        pantalla.textContent = pantalla.textContent + digito;
      }
        if(pantalla.textContent.length > 11){
          pantalla.textContent = 'error';
        }
}

function borrarNumero() {
    if (pantalla.textContent == 'error') {
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
    let operando2 = Number(pantalla.textContent);
    let resultado;

    if (acumulador.textContent == '0') {
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
    let resultado;

    if (primeraVez == false) {
        acumulador.textContent = pantalla.textContent;
        pantalla.textContent = 0;
        primeraVez = true;
    } else {
        resultado = operando1 - operando2;
        pantalla.textContent = 0;
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
        resultado = operando1 * operando2;
        pantalla.textContent = 0;
        acumulador.textContent = resultado;
    }
}