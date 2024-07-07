import {Component, OnInit} from '@angular/core';
import {Mensagem} from "../../model/Mensagem";
import {ProcessadorMensagemService} from "../../service/processador-mensagem.service";
import {NotificacaoService} from "../../service/notificacao.service";

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit  {

    mensagem = new Mensagem();

    constructor(private processamentoMensagemService: ProcessadorMensagemService,
                private notificacaoService: NotificacaoService) {
    }

    ngOnInit(): void {

    }

    atualizarTabelaResultadoProcessamento(mensagem: Mensagem) {
        console.log(mensagem);
        this.mensagem = mensagem;
    }

    private pesquisar() {
        this.processamentoMensagemService.buscarUltimaMensagemProcessada().then(response => {
            this.mensagem = response;
            this.notificacaoService.successo('Mensagem processada com sucesso.');
        });
    }
}
