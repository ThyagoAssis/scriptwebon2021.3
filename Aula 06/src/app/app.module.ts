import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FotoComponent } from './page/fotografia/foto/foto.component';
import { FotolistComponent } from './page/fotografia/fotolist/fotolist.component';
import { FotoformularioComponent } from './page/fotografia/fotoformulario/fotoformulario.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    FotolistComponent,
    FotoformularioComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
