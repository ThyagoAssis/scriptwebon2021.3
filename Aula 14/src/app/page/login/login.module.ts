import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],

  imports: [SharedModule]

  
})
export class LoginModule { }
