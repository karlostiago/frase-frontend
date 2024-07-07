import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {MensagemComponent} from "./pages/mensagem/mensagem.component";
import {HeaderComponent} from "./core/header/header.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import { ProcessadorPalavraComponent } from './components/processador-palavra/processador-palavra.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from "primeng/table";
import { ProcessadorTabelaComponent } from './components/processador-tabela/processador-tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    MensagemComponent,
    HeaderComponent,
    ProcessadorPalavraComponent,
    ProcessadorTabelaComponent
  ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        BrowserModule,
        ButtonModule,
        InputTextareaModule,
        FormsModule,
        ToastModule,
        TableModule
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
