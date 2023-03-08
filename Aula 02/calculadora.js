//Atividade 01

// Desenvovler uma classe calculadora com dois atributos e os métodos (soma, subtração, divisao e multiplicação)em POO
//

//O export permite usar a classe fora do arquivo
export class Calculadora{ 

    //Método padrão (Construtor da classe)
    constructor(valorA, valorB){
        this.valorUm = valorA;
        this.valorDois = valorB;
    }
    
    //Métodos da classe
    soma(){
        return this.valorUm + this.valorDois;
    }

    subtracao(){
        return this.valorUm - this.valorDois;
    }

    multiplicar(){
        return this.valorUm * this.valorDois;  
    }

    dividir(){
        return this.valorUm / this.valorDois;  
    }
}