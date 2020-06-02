// autor:Aniket Kanurkar

/*1.Declarar dos variables con la palabra reservada "var", imprimir el resultado de las operaciones de "Suma", 
"Resta", "Multiplicación" y "División" en la consola. Las variables pueden ser estáticas.*/
console.log("1.Declarar dos variables con la palabra reservada var, imprimir el resultado de las operaciones de Suma, Resta, Multiplicación y División en la consola. Las variables pueden ser estáticas.");
var a=5;
var b=6;

function suma() {
    console.log("suma con var "+(a+b));
}
function resta() {
    console.log("resta con var "+(a-b));
}
function multi() {
    console.log("multiplicacion con var "+(a*b));
}
function divi() {
    console.log("division con var "+(a/b));
}

suma();
resta();
multi();
divi();
//Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.

console.log("2.Declarar dos variables con la palabra reservada let, imprimir la concatenación de ellas.")
let c=5;
let d=6;

console.log("c"+d);

//3.Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable.
console.log("3.Declarar dos variables con la palabra reservada const, imprimir cuál es el tipo de dato de esa variable")
const e=8;
const f="hola";

console.log(typeof(e));
console.log(typeof(f));

/*4.Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que contengan un entero,
 un string, un booleano y un objeto vacío, en ese mismo orden.*/
console.log("4.Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que contengan un entero, un string, un booleano y un objeto vacío, en ese mismo orden.")

let entero=5;
let string="hola mundo";
let booleano=true;

const obj={entero,string,booleano, };

console.log(obj);
