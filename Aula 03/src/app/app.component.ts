import { Component } from '@angular/core';


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

  //Método do botão
  clicando(){
    alert("Clicou");
  }

}
