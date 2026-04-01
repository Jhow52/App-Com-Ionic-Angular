import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Cadastro{
  nome: string;
  tipo: string;
  endereco: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage implements OnInit {

  cadastro = {
    nome: '',
    tipo: '',
    endereco: '',
  }

  listaCadastro: any[] = [];

  cadastrar(){
    const nome = this.cadastro.nome.trim();
    const tipo = this.cadastro.tipo.trim();
    const endereco = this.cadastro.endereco.trim();

    if(!nome || !tipo || !endereco){
      return;
    }

    this.listaCadastro.unshift({nome, tipo, endereco});
  }
  
  excluir(index: number){
    if(index >= 0 && index < this.listaCadastro.length){
      this.listaCadastro.splice(index,1);
    }
  }

  limparFormulario(){
    this.cadastro = {
      nome: '',
      tipo: '',
      endereco: '',
    }
  }

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
