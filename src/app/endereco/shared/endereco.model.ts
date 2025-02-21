import { BaseResourceModel } from "../../shared/base-resource.model";

export class Address extends BaseResourceModel{
    user?: number;
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    number?: number;

    static fromJson(jsonData: any): Address{
        return Object.assign(new Address(), jsonData);
    }
}

