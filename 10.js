/*
Ejemplo de una función
*/

function sumarNumeros(numero1, numero2) {
    
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 + num2;
        document.getElementById("ejercicio10").innerHTML= "La suma de " + num1 + " y " + num2 + " es: " + resultado;
    
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}   


document.getElementById("ejecutar10").addEventListener("click", sumarNumeros);