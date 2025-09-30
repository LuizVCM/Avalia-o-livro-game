import { PaginaBase } from "./personagens";
import { Item } from "./itens";

class PaginaBatalha extends PaginaBase {
    constructor(
        id: number,
        texto: string,
        public inimigo: Personagem,
        public recompensa: Item[]
    ) {
        super(id, texto);
    }
    
    executar(): void {
        console.log(`Enfrentando: ${this.inimigo.nome}!`);
        // Sistema de batalha aqui!
    }
}

class PaginaQuebraCabeca extends PaginaBase {
    constructor(
        id: number,
        texto: string,
        public solucao: string,
        public dica: string
    ) {
        super(id, texto);
    }
    
    executar(): void {
        console.log("Desvende o enigma élfico!");
    }
}