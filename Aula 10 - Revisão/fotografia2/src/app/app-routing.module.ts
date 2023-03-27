import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from './fotografia/formulario/formulario.component';
import { FotolistComponent } from './fotografia/fotolist/fotolist.component';

const routes: Routes = [
  {path: "fotos", component: FotolistComponent},
  {path: "formulario", component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
