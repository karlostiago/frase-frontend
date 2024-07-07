import {Palavra} from "./Palavra";

export class Mensagem {
    texto: string = "";
    palavras: Array<Palavra> = [];
    quantidadePalavrasDistintas: number = 0;
}
