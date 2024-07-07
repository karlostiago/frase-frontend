import {Component, OnInit} from '@angular/core';
import {Mensagem} from "../../model/Mensagem";

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit  {

    mensagem = new Mensagem();

    constructor() { }

    ngOnInit(): void {

    }

    atualizarTabelaResultadoProcessamento(mensagem: Mensagem) {
        console.log(mensagem);
        this.mensagem = mensagem;
    }
}
