import { Item } from "./itens";


class Inventario {
    private itens: Item[] = [];
    
    adicionarItem(item: Item): void {
        this.itens.push(item);
        console.log(`${item.nome} adicionado ao inventário!`);
    }
    
    usarItem(nome: string): boolean {
        const itemIndex = this.itens.findIndex(item => item.nome === nome);
        if (itemIndex > -1) {
            this.itens[itemIndex].usar();
            this.itens.splice(itemIndex, 1);
            return true;
        }
        return false;
    }
}