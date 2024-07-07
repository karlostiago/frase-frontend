import {Component, Input, OnInit} from '@angular/core';
import {Mensagem} from "../../model/Mensagem";

@Component({
  selector: 'app-processador-tabela',
  templateUrl: './processador-tabela.component.html',
  styleUrls: ['./processador-tabela.component.css']
})
export class ProcessadorTabelaComponent implements OnInit {

    @Input() mensagem: Mensagem = new Mensagem();

    ngOnInit(): void {
    }
}
