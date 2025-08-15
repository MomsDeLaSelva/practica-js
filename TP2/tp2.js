//Ejercicio 1
/* let edad = Number(prompt('Ingrese su edad'));

if (edad <=0 || edad >=90) {
    document.write('El número ingresado es inválido. Por favor ingrese una edad válida.');
} else if (edad >= 18){
    document.write('Usted ya puede conducir.');
} else {
    document.write('Usted no puede conducir.');
} */

//Ejercicio 2
/* let nota = Number(prompt('Ingrese una nota de exámen'));

if (nota < 0 || nota > 10) {
    document.write('Número erróneo')
} else if (isNaN(nota)) {
    document.write('Introduce un número válido')
} else if (nota == 10){
    alert('Sobresaliente');
} else if (nota >= 8){
    alert('Notable');
} else if (nota ==7){
    alert('Bien');
} else if (nota >= 5){
    alert('Suficiente');
} else if (nota >= 3){
    alert('Insuficiente');
} else {
    alert('Muy deficiente');
} */

//Ejercicio 3
/* let cadena ="";

do {
    let eslabon = prompt('Ingrese una frase');
    cadena += (eslabon + '-');
} while (confirm('¿Quiere agregar otra frase?'))

    document.write(cadena) */

//Ejercicio 4
/* let suma = 0;

do {
    let num = Number(prompt('Ingrese un número'));
    if (isNaN(num)){
        alert('Error. Ingrese un número');
    } else {
        suma += num;
    }
} while (confirm('¿Quiere agregar otro número?'))

document.write(suma) */

//Ejercicio 5
/* let dni = Number(prompt('Ingrese un número de documento (sin puntos)'));

while (dni !== null) {
    if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        let letra = letras.charAt(dni % 23);
        alert(`La letra según el dni ingresado es:  ${letra}`);
    } else {
        alert('Número inválido. Debe ingresar un valor entre 0 y 99999999');
    }
    dni = number(prompt('Ingrese un nuevo número de documento. (Apretar Cancelar para salir)'));
}
document.write('Fin del programa'); */

//Ejercicio 6
/* for (numRep = 1; numRep <= 30; numRep++) {
    for (i = 0; i < numRep; i++) {
        document.write(numRep);
    }
    document.write("<br>");
} */

//Ejercicio 7
/* let tope = Number(prompt('Ingrese un número entre 2 y 50'));

if (tope > 1 && tope <= 50) {
    for (numRep = tope; numRep > 0; numRep--) {
        for (i = numRep; i > 0; i--) {
            document.write(numRep);
        }
        document.write("<br>");
    }
} else {
    alert('Valor incorrecto. Por favor ingrese un número entre 2 y 50')
} */

//Ejercicio 8
/* let tope = Number(prompt('Ingrese un número entre 2 y 50'));
let numPirAs = "";
if (tope > 1 && tope <= 50) {
    for (let numPir = 1; numPir <= tope; numPir++) {
        
        numPirAs = "";
        
        for (i = 1; i <= numPir; i++) {
            numPirAs += i;
            
        }
    document.write(numPirAs);
    document.write("<br>");
    } 
} else {
    alert('Valor incorrecto. Por favor ingrese un número entre 2 y 50')
} */

//Ejercicio 9
/* for (numList = 1; numList <= 500; numList++) {
    if (numList % 4 == 0) {
        document.write('<p>' + numList + ' (Múltiplo de 4)', '</p>');
    } else if (numList % 9 == 0) {
        document.write('<p>' + numList + ' (Múltiplo de 9)', '</p>')
    } else if (numList % 5 == 0) {
        document.write(numList +'<p></p>', '----------------------------', '<p></p>')
    } else {
        document.write('<p>' + numList + '</p>');
    }
} */

//Ejercicio 10
/* const filas = parseInt(prompt('Ingrese el número de filas'));
const columnas = parseInt(prompt('Ingrese el número de columnas'));
let total = filas * columnas;

document.write( '<table border cellpadding="5">');

for (let cantFilas = 0; cantFilas < filas; cantFilas++) {
    document.write('<tr>');
    for (let cantColumnas = 0; cantColumnas < columnas; cantColumnas++) {
        document.write('<td>' +total+ '</td>');
        total--;
    }
    document.write('<tr>');
}
document.write('</table>') */

//Ejercicio 11
/* let nombre1 = prompt('Ingrese el nombre de una persona');
let edad1 = Number(prompt('Ingrese la edad de esa persona'));
let nombre2 = prompt('Ingrese el nombre de otra persona');
let edad2 = Number(prompt('Ingrese la edad de esa persona'));
let nombre3 = prompt('Ingrese el nombre de la tercer persona');
let edad3 = Number(prompt('Ingrese la edad de esa persona'));

if (Math.max(edad1, edad2, edad3) == edad1) {
    document.write(nombre1 + ' es el mayor de las tres personas');
} else if (Math.max(edad1, edad2, edad3) == edad2) {
    document.write(nombre2 + ' es el mayor de las tres personas');
} else {
    document.write(nombre3 + ' es el mayor de las tres personas');
}
 */
//Ejercicio 12
/* let aleatoreo = Math.ceil(Math.random(1,99)*100);
document.write(aleatoreo); */

//Ejercicio 13
/* let may = prompt('Ingrese una frase');
document.write(may.toUpperCase()); */

//Ejercicio 14
/* let frase = prompt('Ingrese una frase');

for (i = 0; i < frase.length; i++) {
    document.write(frase.charAt(i),'-');
} */

//Ejercicio 15

//Ejercicio 16

//Ejercicio 17