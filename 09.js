/*
Crear un algoritmo que te imprima 
los números de Fibonacci
*/
let cantidad;
function calcularFibonacci() {
        let cantidad = parseInt(prompt("Ingrese la cantidad de números de Fibonacci que desea:"));

        let numerosDeFibonacci = fibonacci(cantidad);
        let resultadoParrafo = document.getElementById("ejercicio9");
        resultadoParrafo.textContent = "Los primeros " + cantidad + " números de Fibonacci son: " + numerosDeFibonacci.join(", ");
    }

//Cacular los numeros fibonacci
function fibonacci(n) {
    let numeros = [];

    if (n >= 1) {
        numeros.push(0);
    }
    if (n >= 2) {
        numeros.push(1);
    }
    for (let i = 2; i < n; i++) {
        let nuevoNumero = numeros[i - 1] + numeros[i - 2];
        numeros.push(nuevoNumero);
    }

    return numeros;
}

// Agregar un event listener para el clic en el botón
document.getElementById("ejecutar09").addEventListener("click", calcularFibonacci);