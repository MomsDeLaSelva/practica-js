//Ejercicio 1
/* alert('un mensaje') */

//Ejercicio 2
/* document.write('Hello World') */

//Ejercicio 3
/* document.write(3 + 5) */

//Ejercicio 4
/* let nombreUsuario = prompt('Escriba su nombre de usuario');
document.write('Hola ' + nombreUsuario); */

//Ejercicio 5
/* let num1 = parseFloat(prompt('Ingrese un número'));
let num2 = parseFloat(prompt('Ingrese otro número'));
document.write(num1, ' + ', num2, ' = ', num1+num2); */

//Ejercicio 6
/* let num3 = parseFloat(prompt('Ingrese un número'));
let num4 = parseFloat(prompt('Ingrese otro número')) ;
if (num3 > num4) {
    document.write('El ', num3, ' es el número más gande.');
}else if (num3 < num4){
    document.write('El ', num4, ' es el número más gande.');
}else{
    document.write('los númeron ingresados son iguales.');
} */

//Ejercicio 7
/* let num5 = parseFloat(prompt('Ingrese un número'));
let num6 = parseFloat(prompt('Ingrese un segundo número'));
let num7 = parseFloat(prompt('Ingrese un tercer número'));
if (num5 > num6 && num5 >num7) {
    document.write('El ', num5, ' es el número más gande.');
}else if (num6 > num7){
    document.write('El ', num6, ' es el número más gande.');
}else{
    document.write('El ', num7, ' es el número más gande.');
} */

//Ejercicio 8
/* let divisible = parseFloat(prompt('Ingrese un número'));
if (divisible % 2 == 0){
    document.write(divisible, ' es divisible por 2.');
}else{
    document.write(divisible, ' no es divisible por 2.');
} */

//Ejercicio 9
/* let frase = prompt('Escriba una frase').toLowerCase();
let vocales = "";

for (i=0; i<frase.length; i++){
    let letra = frase.charAt(i);
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        vocales += letra;
    }
}

document.write(vocales); */

//Ejercicio 10
/* let numDiv = +prompt('Ingrese un número')

switch (true) {
    case (numDiv % 2 == 0):
        document.write(numDiv, ' es divisible por 2')
        break;
    case (numDiv % 3 == 0):
        document.write(numDiv, ' es divisible por 3')
        break;
    case (numDiv % 5 == 0):
        document.write(numDiv, ' es divisible por 5')
        break;
    case (numDiv % 7 == 0):
        document.write(numDiv, ' es divisible por 7')
        break;
    default:
        document.write(numDiv, ' no es divisible por 2 ni por 3 ni por 5 ni por 7')
} */

//Ejercicio 11
/* let divNum = +prompt('Ingrese un número') //forma conrta con if anidado

if (divNum % 2 == 0 || divNum % 3 == 0 || divNum % 5 == 0 || divNum % 7 == 0) {
    if (divNum % 2 == 0) {
        document.write(divNum, ' es divisible por 2. ')
    }
    if (divNum % 3 == 0) {
        document.write(divNum, ' es divisible por 3. ')
    }
    if (divNum % 5 == 0) {
        document.write(divNum, ' es divisible por 5. ')
    }
    if (divNum % 7 == 0) {
        document.write(divNum, ' es divisible por 7. ')
    }
} else {
    document.write(divNum, ' no es divisible ni por 2 ni por 3 ni por 5 ni por 7')
} */

/* let divNum = Number(prompt("Ingrese un número")) //forma larga larguísima

if (divNum % 2 ==0 && divNum % 3 == 0 && divNum % 5 == 0 && divNum % 7 == 0){
    document.write("Es divisible por 2, por 3, por 5 y por 7")
} else if (divNum % 3 == 0 &&divNum % 5 == 0 && divNum % 7 == 0){
    document.write("Es divisible por 3, por 5 y por 7")
} else if (divNum % 2 == 0 && divNum % 5 == 0 && divNum % 7 == 0){
    document.write("Es divisible por 2, por 5 y por 7")
} else if (divNum % 3 == 0 && divNum % 2 == 0 && divNum % 7 == 0){
    document.write("Es divisible por 2, por 3 y por 7")
} else if (divNum % 3 == 0 && divNum % 5 == 0 && divNum % 2 == 0){
    document.write("Es divisible por 2, por 3 y por 5")
} else if (divNum % 2 == 0 && divNum % 3 == 0){
    document.write("Es divisible por 2 y por 3")
} else if (divNum % 2 == 0 && divNum % 5 == 0){
    document.write("Es divisible por 2 y por 5")
} else if (divNum % 2 == 0 && divNum % 7 == 0){
    document.write("Es divisible por 2 y por 7")
} else if (divNum % 3 == 0 && divNum % 5 == 0){
    document.write("Es divisible por 3 y por 5")
} else if (divNum % 3 == 0 && divNum % 7 == 0){
    document.write("Es divisible por 3 y por 7")
} else if (divNum % 5 == 0 && divNum % 7 == 0){
    document.write("Es divisible por 5 y por 7")
} else if (divNum % 2 == 0){
    document.write("Es divisible sólo por 2")
} else if (divNum % 3 == 0){
    document.write("Es divisible sólo por 3")
} else if (divNum % 5 == 0){
    document.write("Es divisible sólo por 5")
} else if (divNum % 7 == 0){
    document.write("Es divisible sólo por 7")
} else {
    document.write("No es divisible por 2, por 3, por 5 ni por 7")
} */