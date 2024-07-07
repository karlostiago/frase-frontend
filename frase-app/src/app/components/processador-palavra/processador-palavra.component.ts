import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProcessadorMensagemService} from "../../service/processador-mensagem.service";

import {MessageService} from "primeng/api";

@Component({
  selector: 'app-processador-palavra',
  templateUrl: './processador-palavra.component.html',
  styleUrls: ['./processador-palavra.component.css']
})
export class ProcessadorPalavraComponent implements OnInit {

    texto: string = "";

    @Output() atualizarTabela: EventEmitter<any> = new EventEmitter<any>();

    constructor(private processadorMensagemService: ProcessadorMensagemService,
                private messageService: MessageService) {
    }

    ngOnInit() { }

    processar() {
        this.validarTextoInvalido();
        this.processadorMensagemService.processar(this.texto).then(response => {
            this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'Mensagem alocada para processamento.'
            });
            this.atualizarTabela.emit("sucesso");
        }).catch(error => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: error
            });
        });
    }

    limpar() {
        this.texto = "";
    }

    private validarTextoInvalido() {
        if (this.texto.length === 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Por gentileza informe ao menos uma palavra, para que seja possivel realizar o processamento.'
            });
            throw new Error();
        }
    }
}
