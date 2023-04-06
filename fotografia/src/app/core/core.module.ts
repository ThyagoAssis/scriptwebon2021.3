import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from '../componentes/header/header.component';

@NgModule({
  
  declarations: [ HeaderComponent], 
  imports: [
    CommonModule,
    AppRoutingModule
  ],

  exports: [
    //AngularFirestoreModule - Responsável por fornecer as ferramentas de manipulação do banco de dados
    AngularFirestoreModule,
    //AngularFireAuthModule - Responsável por fornecer as ferramentas de autenticação (AngularFireAuth)
    AngularFireAuthModule,
    AppRoutingModule,
    HeaderComponent,
    CommonModule,
  ]
})
export class CoreModule { }
