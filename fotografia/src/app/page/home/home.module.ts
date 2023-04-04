import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FotografiaModule } from '../fotografia/fotografia.module';


@NgModule({
  declarations: [HomeComponent],
  
  imports: [
    CommonModule,
    BrowserModule,
    FotografiaModule
  ]
})
export class HomeModule { }
