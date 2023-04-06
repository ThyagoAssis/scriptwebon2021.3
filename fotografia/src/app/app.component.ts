import { Component } from '@angular/core';
import { AutenticarService } from './servico/autenticar.service';

//Decorator do angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  header: boolean;
}
