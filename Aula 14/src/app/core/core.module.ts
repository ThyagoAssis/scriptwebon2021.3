import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  
  imports: [
    CommonModule
  ],

  exports: [
    //AngularFirestoreModule - Responsável por fornecer as ferramentas de manipulação do banco de dados
    AngularFirestoreModule,
    //AngularFireAuthModule - Responsável por fornecer as ferramentas de autenticação (AngularFireAuth)
    AngularFireAuthModule,
  ]
})
export class CoreModule { }
