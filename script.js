function calcular() {
    var nombre = document.getElementById("nombre").value
    var valor1 = parseFloat(document.getElementById("valor1").value)
    var valor2 = parseFloat(document.getElementById("valor2").value)
    
    if (!isNaN(valor1) && !isNaN(valor2)) {
        var resultado = document.getElementById("resultado")
        resultado.innerHTML = nombre + ", los resultados son:<br>"
        resultado.innerHTML += diver("Suma: ") + (valor1 + valor2) + "<br>"
        resultado.innerHTML += diver("Resta: ") + (valor1 - valor2) + "<br>"
        resultado.innerHTML += diver("Multiplicación: ") + (valor1 * valor2) + "<br>"
        if (valor2 !== 0) {
            resultado.innerHTML += diver("División: ") + (valor1 / valor2) + "<br>"
        } else {
            resultado.innerHTML += diver("División: ")+ "No se puede dividir por cero<br>"
        }
    } else {
        alert("Por favor, ingrese valores numéricos válidos.")
    }
}

function diver(str) {
    return '<span class="tag">' + str +'</span>';
}