/* 
Crear un algoritmo el cual encuentre el 
valor máximo de un array
*/
function encontrarMaximoConPrompt() {
    let input = prompt("Ingresa los elementos del array separados por comas:");
    let array = input.split(",").map(function(item) {
        return parseInt(item.trim());
    });

    if (array.some(isNaN)) {
        return "Error: Ingresa solo números válidos.";
    }

    if (array.length === 0) {
        return "El array está vacío.";
    }

    let maximo = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }

    // return "El número más grande es: " + maximo;
    document.getElementById('ejercicio1').innerHTML= "El número más grande es: " + maximo;
}

// Ejemplo de uso:

document.getElementById("ejecutar01").addEventListener("click", function() {
    encontrarMaximoConPrompt();
});