// Ejercicio 06 jun averiguar qué es lo que hacen estos métodos en un array y buscar otros 3 métodos para aplicarlo al array que creen
var frutas = ['manzana', 'uva', 'melon', 'pera', 'banana', 'toronja'];
var num = [1, 2, 3, 4, 5, 6, 7, 8];

// Array.lastIndexOf() imprime la posicion en la q se encuenta el valorBusqueda, string
console.log(frutas.lastIndexOf('uva'));

// Array.findIndex() recibe una funcion, imprimira la posicion del primer elemento q cumplan con la funcion
function numMayor(num) {
    return num < 5;
}
console.log(num.findIndex(numMayor));

// Array.shift() borra el primer elemento
frutas.shift();
console.log(frutas);

// Array.unshift() agrega un elemento al principio
frutas.unshift('hola');
console.log(frutas);

// Array.slice() Devolver una porción de un array existente, 1er param. lo mantiene, 2do param. lo corta desde esa posicion
console.log(frutas.slice(1, 3));

// Array.reverse() ordena de reversa
// console.log(frutas.reverse());

// Array.copyWithin()
frutas.copyWithin();

///////////////////////////////////////
//CONSTRUCTORS
// Array.from() usar Array, te crea un array nuevo con los atributos separados del string introducido
console.log(Array.from('adios'));

// Array.of()
// Array.of(target, start, end) -- target: en q index se va a insertar la copia del start -- start: de donde inicia la copia -- end: donde termina la copia, se queda en la posicion en la q esta, no toma en cuenta el target
console.log(frutas.copyWithin(0, 3, 4));

//Array(numero de elementos q contendra el array, length)
//Array.of(elemento que contendra el array)
console.log(Array.of(7));
///////////////////////////////////////

