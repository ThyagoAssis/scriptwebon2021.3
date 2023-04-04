import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AutenticarService } from '../../servico/autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  title = "Login";
  nameButtonForm = "Logar";
  nameButtonCad = "Não possui conta? Clique Aqui";

  usuario = "";

  //Variavel que guarda o formulario
  formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private autenticaService: AutenticarService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.createForm();
  }

  //Cria e gera validação para o formulario
  createForm(){
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }


  //Método chamado pelo botão do formulario
  formAuth(){
    if(this.nameButtonForm == "Logar"){

      alert("Botão Login");
      
      //Autentica um usuario existente
      this.autenticaService.autenticarUser(this.formulario.value);

      this.autenticaService.detalesUser().user.subscribe(results => this.usuario = results.email);

      //Redireciona para a pagina
      //this.router.navigate(['/home']);

    }else if(this.nameButtonForm == "Cadastrar" ){

      alert('Usuario Cadastrado');

      //Cadastra um usuario para autenticar no banco de dados
      this.autenticaService.cadastrarUser(this.formulario.value);

      /* //Direciona para a tela de login
      this.router.navigate(['/']); */
      

    }else{
      alert('Opção invalida');
    }
  }


  //Metodo chamado pelo botão não possui conta
  alterar(){
    if(this.title == "Login"){
      this.title = "Cadastre-se";
      this.nameButtonForm = "Cadastrar";
      this.nameButtonCad = "Autenticar";
    }else{
      this.title = "Login";
      this.nameButtonForm = "Logar";
      this.nameButtonCad = "Não possui conta? Clique Aqui";
    }
  }

}
