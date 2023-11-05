/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tablaDeMultiplicar () {
    let numeroIngresado = parseInt(prompt(`Ingrese un número menor o igual a 10`))
    if (isNaN(numeroIngresado)) {
        document.write(`Ingrese un número válido`)
    } else if (numeroIngresado >= 11) {
        document.write(`Ingrese un número válido`)
    } else {
        document.write(`<h2>Tabla de multiplicar del ${numeroIngresado}:</h2>`);
        document.write("<ul>");

        for (let i = 1; i <= 10; i++) {
            let resultado = numeroIngresado * i;
            document.write(`<li>${numeroIngresado} * ${i} = ${resultado}</li>`);
        }

        document.write("</ul>");
        
    }

}

tablaDeMultiplicar ()
