//Modulo de serviço - Junta componentes com a mesma função
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FotoComponent } from './foto/foto.component';
import { FormupdateComponent } from './formupdate/formupdate.component';

import { FotoformComponent } from './fotoform/fotoform.component';
import { FotolistComponent } from './fotolist/fotolist.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [
        FotoComponent,
        FormupdateComponent,
        FotoformComponent,
        FotolistComponent
    ],

    imports: [
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        AppRoutingModule
    ],

    exports: [FotoComponent]
})

export class FotografiaModule{}