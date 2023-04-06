import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';

import { AutenticarService } from '../servico/autenticar.service';


@Injectable({
  providedIn: 'root'
})
export class RouterGuard implements CanActivate {  

  constructor(
    private autenticar: AutenticarService,
    private routerControl: Router
    ){}


  //O que é uma promise: é um objeto em JavaScript que permite a execução de processamentos de forma assíncrona dentro do seu código
  
  canActivate(): Promise<boolean>{ 
    return new Promise( results => {
      this.autenticar.detalesUser().onAuthStateChanged(user => {
        if(!user) this.routerControl.navigate(['']);
        results(user ? true: false)
      });
    })
   }
  
}
