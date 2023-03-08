//Desta foram a gente cria uma classe(molde)
class Pessoa{
    //Atributos - Variáveis
    //Atributo Global
    nome;
    idade; 

    //Modo padrão de toda classe - Cons
    constructor(){}
    
    //Métodos
    //Para criar um método preciso do nome do primo que assitia chaves
    falarNome(){
        console.log(this.nome);
    }

    falarIdade(){
        console.log(this.idade);
    }
}//Fim da classe pessoausuarioUm

//Como usar o molde? //Instancia de classe
const usuarioUm = new Pessoa();
var readline = require('readline-sync');
//Diz o nome e a idade
usuarioUm.nome = readline.question("Nome: "); 
usuarioUm.idade = readline.question("Idade: ");

/* usuarioUm.nome = "Thyago Assis de Almeida"; 
usuarioUm.idade = 41; */

//pede para falar o nome e a idade
usuarioUm.falarNome();
usuarioUm.falarIdade();


