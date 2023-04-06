import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from 'src/app/servico/autenticar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  header = false
  constructor(
    private autenticar: AutenticarService,
    private router: Router
  ){

    this.autenticar.detalesUser().onAuthStateChanged(user => {
      if(user){
        this.header = true;
      }
    })

  }

    //delogar
    deslogar(){
      this.autenticar.logout();
      this.header = !this.header
  
    }

}
