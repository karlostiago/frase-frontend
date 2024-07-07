import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mensagem} from "../model/Mensagem";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

    constructor(private messageService: MessageService) { }

    successo(mensagem: string) {
        this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: mensagem
        });
    }

    erro(mensagem: string) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: mensagem
        });
    }
}
