/*
Crear un algoritmo que imprima todas las
permutaciones de una cantidad de números
*/
//Función para calcular el factorial de un número
// Función para calcular las permutaciones
function calcularPermutaciones() {
    let input = prompt("Ingrese los elementos del array separados por comas:");
    let elementos = input.split(",");
    let cantidadPermutaciones = factorial(elementos.length);
    let resultadoParrafo = document.getElementById("ejercicio5");
    resultadoParrafo.textContent = "La cantidad total de permutaciones es: " + cantidadPermutaciones;
}

// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Agregar un event listener para el clic en el botón
document.getElementById("ejecutar05").addEventListener("click", calcularPermutaciones);
