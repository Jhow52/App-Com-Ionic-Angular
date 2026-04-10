import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Pagamento{
  fornecedor: string;
  vencimento: string;
  pagamentos: string;
  valor: number;
}

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
  standalone: false,
})
export class PagarPage implements OnInit {

  constructor(private router: Router) {}

  pagamento = {
    fornecedor: '',
    vencimento: "",
    pagamentos: "",
    valor: null,
  }

  listaPagamento: any[] = [];

  cadastroPagamento(){
    const vencimento = this.pagamento.vencimento;
    const pagamento = this.pagamento.pagamentos;
    const valor = this.pagamento.valor;
    const fornecedor = this.pagamento.fornecedor;
    
    if(!fornecedor || !valor || !vencimento || !pagamento){
      return;
    }

    const dataVencimento = new Date(vencimento + 'T00:00:00');
    const dataPagamento = new Date(pagamento + 'T00:00:00');

    this.listaPagamento.unshift({vencimento: dataVencimento.toLocaleDateString('pt-BR'),
      pagamento: dataPagamento.toLocaleDateString('pt-BR'),
      valor, fornecedor});
    this.limparFormulario();
  }

  excluir(index: number){
    if(index >= 0 && index < this.listaPagamento.length){
      this.listaPagamento.splice(index,1);
    }
  }
  
  limparFormulario(){
    this.pagamento = {
      fornecedor: "",
      vencimento: "",
      pagamentos: "",
      valor: null,
    }
  }

  voltarMenu(){
    this.router.navigate(['/menu'])
  }

  ngOnInit() {
  }

}