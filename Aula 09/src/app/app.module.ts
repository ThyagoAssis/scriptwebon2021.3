import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FotoComponent } from './page/fotografia/foto/foto.component';
import { FotolistComponent } from './page/fotografia/fotolist/fotolist.component';
import { FotoformularioComponent } from './page/fotografia/fotoformulario/fotoformulario.component';

import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';

import { FotoformComponent } from './page/fotografia/fotoform/fotoform.component';
import { environment } from 'src/environments/environments';




@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    FotolistComponent,
    FotoformularioComponent,
    HomeComponent,
    HeaderComponent,    
    FotoformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Template driven (ngForm, ngModel, ngSubmit)
    ReactiveFormsModule, //Data driven (formgroup, formbuilder, formcontroname),
    //A função do import AngularFireModule é ligar nossa aplicação com o firebase 
    AngularFireModule.initializeApp(environment.firebase),

    //AngularFirestoreModule - Responsável por fornecer as ferramentas de manipulação do banco de dados
    AngularFirestoreModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
