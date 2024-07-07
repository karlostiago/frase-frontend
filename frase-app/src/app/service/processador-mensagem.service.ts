import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mensagem} from "../model/Mensagem";

@Injectable({
  providedIn: 'root'
})
export class ProcessadorMensagemService {

    path: string = "http://localhost:8080/frase-app/api/mensagem";

    constructor(private httpCliente: HttpClient) { }

    async processar(mensagem: string) :Promise<void> {
        const mensagemInput = {
            "texto": mensagem
        }
        const request = this.httpCliente.post(`${this.path}/analisar`, JSON.stringify(mensagemInput), this.options());
        return this.toPromise(request);
    }

    async buscarUltimaMensagemProcessada(): Promise<Mensagem> {
        const request = this.httpCliente.get(`${this.path}`, this.options());
        return this.toPromise(request);
    }

    private options(httpParams: HttpParams = new HttpParams()) {
        return {
            headers: this.headers(),
            httpParams
        }
    }

    private headers(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.append("Content-Type", "application/json");
        return headers;
    }

    private toPromise<T>(request: Observable<Object>): Promise<T> {
        return new Promise((resolve) => {
            request.subscribe({
                next: (data) => {
                    resolve(data as T);
                },
                error: (error) => {
                    console.log(error);
                }
            })
        })
    }
}
