import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";

import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [ HeaderComponent ],

    imports: [ AppRoutingModule ],
    exports: [ HeaderComponent ]
})

export class HeaderModule{}