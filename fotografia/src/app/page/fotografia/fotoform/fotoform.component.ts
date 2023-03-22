import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent {

  formDataDriven!: FormGroup;

  //Injeção de dependencia
  constructor(private marcos: FormBuilder){}

  validaForm(){
    this.formDataDriven = this.marcos.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.maxLength(255)]]
    })
  }
  
  
  cadastrar(){
    console.log(this.formDataDriven.value);
  }



}
