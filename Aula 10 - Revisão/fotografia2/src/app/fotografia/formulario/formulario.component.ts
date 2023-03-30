import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  formulario!: FormGroup;
  titulo = "";
  imagen = ""
  foto = {
    img: "https://cdn.pixabay.com/photo/2022/05/11/22/17/pink-hibiscus-7190314_640.jpg",
    titulo: "Flores"
  }

  constructor(private formBuilder: FormBuilder){}

 ngOnInit(): void {
   this.createForm();
 }


  createForm(){
    this.formulario = this.formBuilder.group({
      titulo: [this.foto.titulo, [Validators.required]],
      img: [this.foto.img, [Validators.required]]
    })
  }


  cadastroDriven(){
    this.titulo = this.formulario.value.titulo;
    this.imagen = this.formulario.value.img;
  }
  
  /* 
  titulo = "";
  imagen = ""

  cadastro(form: any){
    this.titulo = form.value.titulo;
    this.imagen = form.value.img
  } */
}
