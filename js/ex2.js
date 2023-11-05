/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

*/

let listaDeCiudades = [];

do {
    let nuevaCiudad = prompt(`Ingrese el nombre de una ciudad:`);
    listaDeCiudades.push(nuevaCiudad)
}while (confirm(`¿Querés agregar el nombre de otra ciudad?`))

document.write(`<h2>El arreglo de ciudades tiene ${listaDeCiudades.length} elementos</h2>`)
document.write(`<ul>`);
document.write(`<li>Elemento 1er posición: ${listaDeCiudades[0]}</li>`)
document.write(`<li>Elemento 3er posición: ${listaDeCiudades[2]}</li>`)
document.write(`<li>Elemento última posición: ${listaDeCiudades.length-1}</li>`)
document.write(`<li>Elemento última posición: ${(listaDeCiudades.length-1)}</li>`)
document.write(`<li>Elemento última posición: ${[listaDeCiudades.length-1]}</li>`)
//no me muestra el nombre de la ultima ciudad del array
document.write(`</ul>`);

listaDeCiudades.push(`Paris`);

document.write(`<ul>`);
document.write(`<li>Elemento última posición: ${[listaDeCiudades.length - 1]}</li>`)
document.write(`</ul>`);

document.write(`<ul>`);
document.write(`<li>Elemento 2da posición: ${listaDeCiudades[1]}</li>`)
document.write(`</ul>`);

listaDeCiudades.splice(1, 1, `Barcelona`)

document.write(`<h2>Arreglo de ciudades</h2>`)
document.write(`<ul>`);
for(let i=0; i<listaDeCiudades.length; i++) {
    document.write(`<li>Elemento: ${listaDeCiudades[i]}</li>`)

}
document.write(`</ul>`);
