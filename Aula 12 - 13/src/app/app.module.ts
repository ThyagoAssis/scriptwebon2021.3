import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';


import { environment } from 'src/environments/environments';

import { FotografiaModule } from './page/fotografia/fotografia.module';
import { HomeModule } from './page/home/home.module';
import { LoginModule } from './page/login/login.module';


@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,    
  ],

  imports: [   
    AppRoutingModule,       
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFirestoreModule - Responsável por fornecer as ferramentas de manipulação do banco de dados
    AngularFirestoreModule,
    //AngularFireAuthModule - Responsável por fornecer as ferramentas de autenticação (AngularFireAuth)
    AngularFireAuthModule,
    FotografiaModule,
    HomeModule,
    LoginModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
