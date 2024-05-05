/*
Crear un algoritmo para evaluar
un polinomio
*/
function evaluarPolinomioSegundoGrado() {

    let coeficientesInput = prompt("Ingrese los coeficientes del polinomio de segundo grado separados por comas:");


    let coeficientes = coeficientesInput.split(",").map(parseFloat);

    if (coeficientes.length !== 3 || coeficientes.some(isNaN)) {
        alert("Por favor, ingrese exactamente tres coeficientes separados por comas (ax^2, bx, c).");
        return;
    }

    let variable = parseFloat(prompt("Ingrese el valor de la variable:"));

    let [a, b, c] = coeficientes;

    let resultado = a * variable ** 2 + b * variable + c;

    document.getElementById('ejercicio8').innerHTML = `El resultado del polinomio ${a}x<sup>2</sup> + ${b}x + ${c} evaluado en x = ${variable} es: ${resultado}`;
}

// Llamar a la función para evaluar el polinomio de segundo grado
document.getElementById("ejecutar08").addEventListener("click",evaluarPolinomioSegundoGrado);