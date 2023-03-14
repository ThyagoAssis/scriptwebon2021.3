import { Component } from '@angular/core';
import { throttleTime } from 'rxjs';

//Decorator do angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Data Binding';
  imagen = 'https://cdn.pixabay.com/photo/2023/02/24/10/14/flowers-7810659__340.jpg';
  description = "O data binding pega uma informação do arquivo .ts e leva para o arquivo .hmtl do componente"

  titleDois = "Event Binding";
  descriptionDois = "Captura uma informação ou um evento no arquivo .html e leva para o arquivo .ts" 

  /*
  //Diretiva - São recursos do Angular que permitem criar estrutras de repetição de decisao no HTML
  //ngIf - Diretiva de decisão
  //ngFor - Diretiva para repetição
  */
  
  pessoa = {
    nome: "Thyago Assis de Almeida",
    idade: 15,
    altura: 1.75,
    aniversario: "15/02"
  }
  //carro = {} //Objeto
  //mesa = [] //Array


  //Array de Objetos
  meusClientes = [
    {nome: 'João', idade: 25},
    {nome: 'Maria', idade: 15},
    {nome: 'Marcos', idade: 30},
    {nome: 'Mariana', idade: 10}

  ]

  //A diretiva ngFor é utilizada quando precisamos fazer um loop





  //Método do botão
  clicando(){
    alert("Clicou");
  }

  

}
