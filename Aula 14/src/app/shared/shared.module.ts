//Modulo de compartilhamento

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';



@NgModule({

   
    exports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
          
        
    ]
})

export class SharedModule{ }