import { Injectable, Injector } from '@angular/core';
import { User } from './user.model';
import { BaseResourceService } from '../shared/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<User>{
  
  constructor(protected override injector: Injector) {
    super("http://localhost:8080/api/users", injector, User.fromJson)
   }
  
}
