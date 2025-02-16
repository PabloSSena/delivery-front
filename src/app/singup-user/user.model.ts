import { BaseResourceModel } from "../shared/base-resource.model";

export class User extends BaseResourceModel{
    name?: string;
    lastname?: string;
    email?: string;
    password?: number;

    static fromJson(jsonData: any): User{
        return Object.assign(new User(), jsonData);
    }
}

