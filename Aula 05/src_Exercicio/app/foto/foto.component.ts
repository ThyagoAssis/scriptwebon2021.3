import { Component } from "@angular/core";


//Decorator é o cara  que determina a função
@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent{

   title = "Cadastro";
   imagen = "https://cdn.pixabay.com/photo/2016/05/18/10/52/buick-1400243__340.jpg";
    
   alterar(){
    if(this.title == "Cadastro"){
        this.title = "Novo Titulo";
        this.imagen = "https://cdn.pixabay.com/photo/2022/04/18/02/24/architecture-7139263__340.jpg";
    }else{
        this.title = "Cadastro";
        this.imagen = "https://cdn.pixabay.com/photo/2016/05/18/10/52/buick-1400243__340.jpg";
    
    }
   }

}