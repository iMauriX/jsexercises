/*
Crear un algoritmo que elimine los 
elementos repetidos de un arreglo
*/
function eliminarRepetidos() {
    let input = prompt("Ingresa los elementos del array separados por comas:");
    let array = input.split(",").map(function(item) {
        return parseFloat(item.trim());
    });//FUNCION PROMPT Y SEPARADO

    if (array.length === 0) {
        return "El array está vacío.";
    }

    let arraySinRepetidos = array.filter(function(elemento, indice){
        return array.indexOf(elemento) === indice;
    });

    // return "Array sin elementos repetidos: " + arraySinRepetidos.join(", ");
    document.getElementById('ejercicio3').innerHTML= "Array sin elementos repetidos: " + arraySinRepetidos.join(", ");
}

// document.write(eliminarRepetidos())
document.getElementById("ejecutar03").addEventListener("click", function() {
    eliminarRepetidos();
});