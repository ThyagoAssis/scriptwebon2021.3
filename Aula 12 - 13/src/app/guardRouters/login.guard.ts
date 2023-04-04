import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

import { AutenticarService } from '../servico/autenticar.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private autenticar: AutenticarService,
    private router: Router
  ){}
  
  canActivate(): Promise<boolean>{
   return new Promise(results => {
    this.autenticar.detalesUser().onAuthStateChanged(user => {
      if(user) this.router.navigate(['/home']);
      results(!user ? true: false)
    })
   });
  }
  
}
