import { BaseResourceModel } from "../shared/base-resource.model";

export class Item extends BaseResourceModel{
    nome?: string;
    codigo?: number;
    descricao?: string;
    preco!: number;
    detalhes?: string;
    imagem?: string;
    on_little_car?: boolean;

    static fromJson(jsonData: any): Item{
        return Object.assign(new Item(), jsonData);
    }
}

