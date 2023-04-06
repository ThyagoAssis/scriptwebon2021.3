import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environments';

import { SharedModule } from './shared/shared.module';
import { FotografiaModule } from './page/fotografia/fotografia.module';

import { HomeModule } from './page/home/home.module';
import { LoginModule } from './page/login/login.module';
import { CoreModule } from '../app/core/core.module';


@NgModule({
  declarations: [
    AppComponent,
       
  ],

  imports: [   
    
    AngularFireModule.initializeApp(environment.firebase),
    FotografiaModule,
    HomeModule,
    LoginModule,
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
