/*
Crear un algoritmo el cual indique 
si un número es primo o no
*/
function verificarPrimo() {
    // Solicitar al usuario que ingrese un número
    let numero = parseInt(prompt("Ingrese un número para verificar si es primo:"));

    if (esPrimo(numero)) {
        // alert(numero + " es un número primo.");
        document.getElementById('ejercicio4').innerHTML= numero + " es un número primo.";
    } else {
        // alert(numero + " no es un número primo.");
        document.getElementById('ejercicio4').innerHTML= numero + " no es un número primo.";
    }
}

function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }

    // Verificar si el número es divisible por algún número entre 2 y la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si es divisible, no es primo
        }
    }

    return true; // Si no se encontró ningún divisor, es primo
}

// Llamar a la función para verificar si un número ingresado por el usuario es primo
// verificarPrimo();
document.getElementById("ejecutar04").addEventListener("click", function() {
    esPrimo(),verificarPrimo();
});