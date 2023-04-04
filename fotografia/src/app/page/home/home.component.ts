import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticarService } from 'src/app/servico/autenticar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  imagemHome = "https://cdn.pixabay.com/photo/2020/04/20/14/47/car-5068532_960_720.png";

  constructor(
    private autenticar: AutenticarService,
    private router: Router
  ){}


   //delogar
   deslogar(){
    this.autenticar.logout();
    this.router.navigate(['']);

  }
}
