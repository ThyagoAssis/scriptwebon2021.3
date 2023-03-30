import { Component, OnInit } from '@angular/core';

import { FirebaseService } from 'src/app/servico/firebase.service';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit{

  imagens = [];  

  constructor(private fs: FirebaseService){}
  
  ngOnInit(): void {
    //Observable do JS
      this.fs.consultaDados().subscribe(caixinha => this.imagens = caixinha);      
  }

  //Método que exclui uma foto
  excluir(id){
    this.fs.excluirDados(id);
    alert('Foto Excluida');
  }



  

}
