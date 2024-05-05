/*
Crear un algoritmo el cual ordeno los
elementos numéricos de un arreglo
*/
function ordenarArrayNumerico() {
    let input = prompt("Ingresa los elementos del array separados por comas:");
    let array = input.split(",").map(function(item) {
        return parseFloat(item.trim());
    }); //ESTA ES LA PARTE DEL PROMPT()

    if (array.some(isNaN)) {
        return "Error: Ingresa solo números válidos.";
    }

    if (array.length === 0) {
        return "El array está vacío.";
    }

    array.sort(function(a, b) {
        return a - b;
    }); //CON ESTE CODIGO ORDENAMOS EL ARRAY

    // return "Array ordenado: " + array.join(", ");
    document.getElementById('ejercicio2').innerHTML= "Array ordenado: " + array.join(", ");
}

// Ejemplo de uso:
// document.write(ordenarArrayNumerico());
document.getElementById("ejecutar02").addEventListener("click", function() {
    ordenarArrayNumerico();
});