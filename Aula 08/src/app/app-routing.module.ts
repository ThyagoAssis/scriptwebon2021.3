import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoformComponent } from './page/fotografia/fotoform/fotoform.component';

import { FotoformularioComponent } from './page/fotografia/fotoformulario/fotoformulario.component';
import { FotolistComponent } from './page/fotografia/fotolist/fotolist.component';
import { HomeComponent } from './page/home/home.component';

//Constante para criação das rotas
//Criação de rotas simples
const routes: Routes = [
  {path: '', component: HomeComponent },  
  {path: 'lista', component: FotolistComponent},
  {path: 'form', component: FotoformComponent}
];

//Decorator - Determinar a função de um arquivo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }