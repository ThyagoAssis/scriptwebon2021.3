import { Calculadora } from "./calculadora.js";

//Instancia
const calculadoraTux = new Calculadora(20, 40);


//Executar as operações (metodos)
console.log("Soma: " + calculadoraTux.soma());
console.log("Subtração: " +  calculadoraTux.subtracao());

console.log("Multiplicação: " + calculadoraTux.multiplicar());
console.log("Divisão: " + calculadoraTux.dividir());