/*
Crear un programa donde dado un número cualquiera, 
lo reduzca sumando las cifras que la componen hasta
reducirse a un número
*/
function reducirNumero() {
    let numero = prompt("Ingresa un número para reducirlo a una sola cifra:")
    if (numero < 10) {
        return numero;
    }
    let digitos = numero.split("").map(Number);

    while (digitos.length > 1) {
        let suma = digitos.reduce((a, b) => a + b); 
        digitos = suma.toString().split("").map(Number);
    }
    document.getElementById("ejercicio6").textContent = "El número reducido es: " + digitos[0];
    // return reducirNumero(suma);
}


// document.write("El número reducido es: " + resultado);
document.getElementById("ejecutar06").addEventListener("click", function() {
    reducirNumero();
});