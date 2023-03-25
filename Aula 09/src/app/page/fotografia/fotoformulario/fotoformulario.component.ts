import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fotoformulario',
  templateUrl: './fotoformulario.component.html',
  styleUrls: ['./fotoformulario.component.css']
})
export class FotoformularioComponent {

  //Trabalhando com data driven
  //A ferramenta formgroup captura as informações 
  //do formulario e coloca na variavel form
  formDataDriven!: FormGroup

  //Injeção de dependecia
  constructor(private marcos: FormBuilder){
    this.validaForm();
  }

  //Responsavel por criar o formulario e gerar validação
  validaForm(){
    this.formDataDriven = this.marcos.group({
      titulo: ['',[Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.maxLength(255)]]
    })
  }

  //Metodo que recebe o submit
  formData(){
    console.log(this.formDataDriven.value);
  }



  //Trabalhando com Template driven
  //Método qu recebe os dados do formulario 
  form(formulario: any){
    console.log(formulario.value);
  }
}
