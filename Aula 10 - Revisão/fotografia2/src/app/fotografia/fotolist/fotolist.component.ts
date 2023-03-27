import { Component } from '@angular/core';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent {

  //Solução Atividade 03
  /* 
  titulo = "Minhas Imagens";
  imagen = "https://cdn.pixabay.com/photo/2023/03/19/20/59/rabbit-7863312__340.jpg";

  altera(){

    if(this.titulo == "Minhas Imagens"){
      this.titulo = "Minhas Fotos";
      this.imagen = "https://cdn.pixabay.com/photo/2022/08/15/15/38/animal-7388186__340.jpg";
    }else{
      this.titulo = "Minhas Imagens";
      this.imagen = "https://cdn.pixabay.com/photo/2023/03/19/20/59/rabbit-7863312__340.jpg";
    }    
    
  } */


  //Solução da atividade 04

  imagens = [
    //Cada chave é uma divisão (Array de objetos) as {} representam um objeto
    {img: "https://cdn.pixabay.com/photo/2023/03/18/21/26/scorpionfly-7861414__340.jpg"}, 
    {img: "https://cdn.pixabay.com/photo/2023/03/19/20/59/rabbit-7863312__340.jpg"},
    {img: "https://cdn.pixabay.com/photo/2023/03/18/06/53/rose-7860008__340.jpg"},
    {img: "https://cdn.pixabay.com/photo/2022/10/08/16/47/austria-7507345__340.jpg"},
    {img: "https://cdn.pixabay.com/photo/2022/08/15/15/38/animal-7388186__340.jpg"},
    
  ];
  control = true;
  nameButton = "Fotos Pares";

  mudar(){
    this.control = !this.control;
    if(this.nameButton == "Fotos Pares"){
      this.nameButton = "Todas as fotos"
    }else{
      this.nameButton = "Fotos Pares";
    }
  }
}
