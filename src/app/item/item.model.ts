import { BaseResourceModel } from "../shared/base-resource.model";

export class Item extends BaseResourceModel{
    name?: string;
    description?: string;
    price!: number;
    imageUrl?: string;
    on_little_car?: boolean;

    static fromJson(jsonData: any): Item{
        return Object.assign(new Item(), jsonData);
    }
}

