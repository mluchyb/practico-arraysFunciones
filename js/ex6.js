/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24     Output: 58
lado B = 5
*/

function perimetroDelRectangulo () {
    let base = parseInt(prompt(`¿Cuánto mide la base del rectangulo?`));
    let altura = parseInt(prompt(`¿Cuánto mide la altura del rectangulo?`));
    return document.write(`<h2>El perímetro del rectángulo es ${2*(base + altura)}</h2>`)
}

perimetroDelRectangulo()
