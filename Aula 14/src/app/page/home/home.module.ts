import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FotografiaModule } from '../fotografia/fotografia.module';
import { HeaderModule } from 'src/app/componentes/header/header.module';



@NgModule({
  declarations: [HomeComponent],
  
  imports: [
    HeaderModule,
    SharedModule,
    FotografiaModule
  ]
})
export class HomeModule { }
