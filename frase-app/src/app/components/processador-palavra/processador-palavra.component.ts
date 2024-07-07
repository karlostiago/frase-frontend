import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProcessadorMensagemService} from "../../service/processador-mensagem.service";
import {NotificacaoService} from "../../service/notificacao.service";

@Component({
  selector: 'app-processador-palavra',
  templateUrl: './processador-palavra.component.html',
  styleUrls: ['./processador-palavra.component.css']
})
export class ProcessadorPalavraComponent implements OnInit {

    texto: string = "";

    @Output() atualizarTabela: EventEmitter<any> = new EventEmitter<any>();

    constructor(private processadorMensagemService: ProcessadorMensagemService,
                private notificacaoService: NotificacaoService) {
    }

    ngOnInit() { }

    processar() {
        this.validarTextoInvalido();
        this.processadorMensagemService.processar(this.texto).then(response => {
            this.notificacaoService.successo('Mensagem alocada para processamento.');
            this.enviarUltimaMensagemProcessada();
        }).catch(error => {
            this.notificacaoService.erro('Ocorreu um erro ao processar a mensagem. ' + error);
        });
    }

    limpar() {
        this.texto = "";
    }

    private enviarUltimaMensagemProcessada() {
        this.processadorMensagemService.buscarUltimaMensagemProcessada().then(response => {
            this.atualizarTabela.emit(response);
        }).catch(error => {
            this.notificacaoService.erro('Ocorreu um erro ao enviar a mensagem. ' + error);
        });
    }

    private validarTextoInvalido() {
        if (this.texto.length === 0) {
            this.notificacaoService.erro('Por gentileza informe ao menos uma palavra, para que seja possivel realizar o processamento.')
            throw new Error();
        }
    }
}
