import { Component, Input } from "@angular/core";


//Decorator é o cara  que determina a função
@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent{

    /**
     * Inbound Property

        O inbound property permiti que uma varivel receba um valor externo
        Permite que um compnente receba infromações de outros componentes
         @Input() é p inbound property
     */

    //A função desse componete é criar responsividade nas imagens
     @Input() imagen = "";
}