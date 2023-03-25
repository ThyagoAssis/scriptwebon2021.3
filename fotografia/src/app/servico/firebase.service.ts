import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';

//Determina que esse arquivo é um serviço
@Injectable({
    providedIn: 'root'
})

export class FirebaseService implements OnInit{

    //Variavel que vai receber e manipular as coleções
    minhaColecao: AngularFirestoreCollection;

    //Contrutor faz injeção de dependencia
    constructor(private af: AngularFirestore){
        this.minhaColecao = this.af.collection('fotos');
    }

    //O ngOnnit é o metodo responsavel por carregar tudo que estiver dentro ele junto com a classe
    ngOnInit(): void {
        
    }

    //Criar os nossos métodos
    //Método de consulta
    consultaDados(){
        return this.minhaColecao.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                })
            })
        )
    }
    
    //Método de cadastro
    cadastrarDados(dados: any){
        console.log(dados);
        return this.minhaColecao.add(dados);
    }

    //Método de edição
    editaDados(id, dados){
        return this.minhaColecao.doc(id).update(dados);
    }

    //Método de excluir
    excluirDados(id){
        return this.minhaColecao.doc(id).delete();
    }
}