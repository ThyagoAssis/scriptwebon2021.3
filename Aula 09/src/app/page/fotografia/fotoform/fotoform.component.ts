import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FirebaseService } from '../../../servico/firebase.service';

@Component({
  selector: 'app-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent implements OnInit{

  formDataDriven!: FormGroup;

  //Injeção de dependencia
  //é uma boa prática deixar o constructor da classe somente para injeção de depencia
  constructor(
    private marcos: FormBuilder, 
    private fs: FirebaseService
    ){}

  //Metodo oninit (CArrega no inicio da classe tudo que tiver dentro )
  ngOnInit(): void {      
    
        //O construtor executa o m
        this.validaForm();
  }
  
  //Metodo estatico - ele não se executa sozinho
  validaForm(){
    this.formDataDriven = this.marcos.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.maxLength(255)]]
    })
  }
  
  //Método chamado pelo submit do botão do formulario
  cadastrar(){

    try {
      this.fs.cadastrarDados(this.formDataDriven.value);
    }catch(err) {
      console.log(err);
    }
    
   }



}
