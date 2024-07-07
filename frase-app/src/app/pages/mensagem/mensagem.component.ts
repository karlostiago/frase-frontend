import {Component, OnInit} from '@angular/core';
import {Mensagem} from "../../model/Mensagem";
import {ProcessadorMensagemService} from "../../service/processador-mensagem.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit  {

    mensagem = new Mensagem();

    constructor(private processamentoMensagemService: ProcessadorMensagemService,
                private messageService: MessageService) {
    }

    ngOnInit(): void {

    }

    atualizarTabelaResultadoProcessamento(mensagem: string) {
        if (mensagem === 'sucesso') {
            this.pesquisar();
        }
    }

    private pesquisar() {
        this.processamentoMensagemService.buscarUltimaMensagemProcessada().then(response => {
            this.mensagem = response;
            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'Mensagem processada com sucesso.'
            });
        });
    }
}
