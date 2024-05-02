function calcular() {
    var nombre = document.getElementById("nombre").value
    var valor1 = parseFloat(document.getElementById("valor1").value)
    var valor2 = parseFloat(document.getElementById("valor2").value)
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
        var resultado = document.getElementById("resultado")
        resultado.innerHTML = nombre + ", las operaciones son:<br>"
        resultado.innerHTML += "Suma: " + (valor1 + valor2) + "<br>"
        resultado.innerHTML += "Resta: " + (valor1 - valor2) + "<br>"
        resultado.innerHTML += "Multiplicación: " + (valor1 * valor2) + "<br>"
        if (valor2 !== 0) {
            resultado.innerHTML += "División: " + (valor1 / valor2) + "<br>"
        } else {
            resultado.innerHTML += "División: No se puede dividir por cero<br>"
        }
    } else {
        alert("Por favor, ingrese valores numéricos válidos.")
    }
}
