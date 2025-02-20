import { BaseResourceModel } from "../shared/base-resource.model";

export class User extends BaseResourceModel{
    username?: string;
    firstName?: string;
    lastName?: string | null;
    password?: string;
    email?: string;
    isGerente?: boolean;

    static fromJson(jsonData: any): User{
        return Object.assign(new User(), jsonData);
    }
}

