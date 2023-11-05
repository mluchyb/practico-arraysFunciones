/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

*/

let textoIngresado = prompt(`Escriba una oración`)


function  reconocerMayusMinusc() {

    if (textoIngresado === textoIngresado.toLowerCase()) {
        return document.write(`<h2>El texto está formado sólo por minúsculas.</h2>`)
    } else if (textoIngresado === textoIngresado.toUpperCase()) {
        return document.write(`<h2>El texto está formado sólo por mayúsculas.</h2>`)
    } else {
        return document.write(`<h2>El texto está formado por mayúsculas y minúsculas.</h2>`)
    }
}

reconocerMayusMinusc()

