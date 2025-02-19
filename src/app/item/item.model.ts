import { BaseResourceModel } from "../shared/base-resource.model";

export class Item extends BaseResourceModel{
    codigo?: number;
    descricao?: string;
    preco?: number;
    detalhes?: string;
    imagem?: string;
    carrinho?: boolean;

    static fromJson(jsonData: any): Item{
        return Object.assign(new Item(), jsonData);
    }
}

