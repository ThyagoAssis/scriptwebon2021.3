//Modulo de serviço - Junta componentes com a mesma função
import { NgModule } from '@angular/core';

import { FotoComponent } from './foto/foto.component';
import { FormupdateComponent } from './formupdate/formupdate.component';

import { FotoformComponent } from './fotoform/fotoform.component';
import { FotolistComponent } from './fotolist/fotolist.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
    declarations: [
        FotoComponent,
        FormupdateComponent,
        FotoformComponent,
        FotolistComponent
    ],

    imports: [SharedModule],

    exports: [FotoComponent]
})

export class FotografiaModule{}