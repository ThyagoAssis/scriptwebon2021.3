import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FotografiaModule } from '../fotografia/fotografia.module';

@NgModule({
  declarations: [HomeComponent],
  
  imports: [
    
    SharedModule,
    FotografiaModule
  ]
})
export class HomeModule { }
