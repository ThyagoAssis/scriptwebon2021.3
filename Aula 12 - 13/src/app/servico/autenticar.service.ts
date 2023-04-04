import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class AutenticarService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  //Autenticar um usuario
  autenticarUser(user){
    return this.angularFireAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  //Cadastra um novo usuario
  cadastrarUser(user){
    return this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.angularFireAuth.signOut();
  }

  detalesUser(){
    return this.angularFireAuth
  }
}
