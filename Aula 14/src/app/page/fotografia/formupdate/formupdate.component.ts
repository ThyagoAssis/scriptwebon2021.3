import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servico/firebase.service';

@Component({
  selector: 'app-formupdate',
  templateUrl: './formupdate.component.html',
  styleUrls: ['./formupdate.component.css']
})
export class FormupdateComponent implements OnInit {


  updateForm: FormGroup;

  //Variavel para guardar o id
  //A variavel do tipo null só e criada na memória ram se ela for usada
  routeId = null;

  //A ferramente ActivatedRoute captura a rota ativa
  //é ela que vai nos ajudar a captura o id
  constructor(
    private activated: ActivatedRoute,
    private firebase: FirebaseService,
    private formBuilder: FormBuilder
    
    ){}

  ngOnInit(): void {

    this.createForm("");

    this.routeId = this.activated.snapshot.params['id'];

    if(this.routeId){
      this.firebase.consultaUm(this.routeId).subscribe(caixinha => this.createForm(caixinha));
 
    }

  }

  createForm(dados){
    this.updateForm = this.formBuilder.group({
      titulo: [dados.titulo],
      url: [dados.url],
      descricao: [dados.descricao]
    })
  }


  atualizar(){
    this.firebase.editaDados(this.routeId, this.updateForm.value);
  }
}
