import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fotoform',
  templateUrl: './fotoform.component.html',
  styleUrls: ['./fotoform.component.css']
})
export class FotoformComponent implements OnInit{

  formDataDriven!: FormGroup;

  //Variavel que recebe e manipula as coleções do firestore
  fotoCollection!: AngularFirestoreCollection;  

  //Injeção de dependencia
  //é uma boa prática deixar o constructor da classe somente para injeção de depencia
  constructor(private marcos: FormBuilder, private af: AngularFirestore){}

  //Metodo oninit (CArrega no inicio da classe tudo que tiver dentro )
  ngOnInit(): void {
        //Apresentação 
        this.fotoCollection = this.af.collection("fotos");
    
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
    this.fotoCollection.add(this.formDataDriven.value);

    //console.log(this.formDataDriven.value);
  }



}
