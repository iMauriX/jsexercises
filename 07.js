/*
Crear un programa que muestre las descomposiciones
de un número par mayor que 4 como la suma de dos primos
*/

// Función para encontrar las descomposiciones de un número par como la suma de dos primos
function descomposicionComoSumaDePrimos() {
    let numeroPar = prompt("Ingrese un número par mayor que 4:");
    if (numeroPar !== null) {
        numeroPar = parseInt(numeroPar);
        if (!isNaN(numeroPar) && numeroPar > 4 && numeroPar % 2 === 0) {
            let descomposiciones = [];

            // Iterar desde el primer primo (2) hasta la mitad del número
            for (let i = 2; i <= numeroPar / 2; i++) {
                // Verificar si i y numeroPar - i son primos
                if (esPrimo(i) && esPrimo(numeroPar - i)) {
                    descomposiciones.push(`${i} + ${numeroPar - i}`);
                }
            }

            // Mostrar el resultado con las descomposiciones separadas por comas
            document.getElementById("ejercicio7").textContent = "Se descompone en: " + descomposiciones.join(", ");
        } else {
            alert("Por favor, ingrese un número par mayor que 4.");
        }
    }
}
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


// Agregar un event listener para el clic en el botón
document.getElementById("ejecutar07").addEventListener("click", descomposicionComoSumaDePrimos);