import { Component } from '@angular/core';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent {

  imagens = [
    {
      img: "https://cdn.pixabay.com/photo/2016/11/19/11/26/automotive-1838744__340.jpg", 
      title: "BMW"  
    },

    {
      img: "https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125__340.jpg", 
      title: "Transito"  
    },

    {
      img: "https://cdn.pixabay.com/photo/2018/05/03/08/52/car-3370706__340.jpg", 
      title: "Carro Antigo"  
    },

    {
      img: "https://cdn.pixabay.com/photo/2017/12/28/23/41/car-3046424__340.jpg", 
      title: "Carro Antigo Novo"  
    },

    {
      img: "https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465__340.jpg", 
      title: "Mercedes"  
    }, 
    {
      img: "https://cdn.pixabay.com/photo/2017/12/28/23/41/car-3046424__340.jpg", 
      title: "Carro Antigo Novo"  
    },

    {
      img: "https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465__340.jpg", 
      title: "Mercedes"  
    },    

    {
      img: "https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465__340.jpg", 
      title: "Mercedes"  
    },   
  ];

}
