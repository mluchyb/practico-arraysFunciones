/*

4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

*/

function numeroEntero(){
    let numeroIngresado = parseInt(prompt(`Ingrese un número`))
    if (numeroIngresado % 2 === 0) {
        return document.write(`<h2>El número ${numeroIngresado} es par.</h2>`)
    } else {
        return document.write(`<h2>El número ${numeroIngresado} es impar.</h2>`)
    }

}

numeroEntero()