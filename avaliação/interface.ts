import { Escolha } from "./escolha";

export interface IPagina {
    id: number;
    texto: string;
    escolhas: Escolha[] ;
    executar(): void;
}