import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouterGuard } from './guardRouters/router.guard';
import { LoginGuard } from './guardRouters/login.guard';

import { FormupdateComponent } from './page/fotografia/formupdate/formupdate.component';
import { FotoformComponent } from './page/fotografia/fotoform/fotoform.component';

import { FotolistComponent } from './page/fotografia/fotolist/fotolist.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';

//Constante para criação das rotas
//Criação de rotas simples
const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [RouterGuard] },
  {path: 'lista', component: FotolistComponent, canActivate: [RouterGuard]},
  {path: 'form', component: FotoformComponent, canActivate: [RouterGuard]},
  {path: '', component: LoginComponent, canActivate: [LoginGuard]},
  
  //Prepara a rota para receber um id
  {path: 'update/:id', component: FormupdateComponent}
];

//Decorator - Determinar a função de um arquivo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }