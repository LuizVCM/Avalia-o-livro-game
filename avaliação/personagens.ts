import { IPagina } from "./interface";
import { Escolha } from "./escolha";



export abstract class PaginaBase implements IPagina {
    constructor(
        public id: number,
        public texto: string,
        public escolhas: Escolha[] = []
    ) {}

    
    abstract executar(): void;
    
    protected mostrarEscolhas(): void {
        console.log("\n--- Suas Opções ---");
        this.escolhas.forEach((escolha, index) => {
            console.log(`${index + 1}. ${escolha.texto}`);
        });
    }
}
