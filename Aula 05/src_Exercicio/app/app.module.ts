import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotoComponent } from '../app/foto/foto.component';
import { FotolistComponent } from './fotolist/fotolist.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    FotolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
