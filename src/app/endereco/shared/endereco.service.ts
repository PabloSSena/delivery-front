import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../shared/base-resource.service';
import { Address } from './endereco.model';


@Injectable({
  providedIn: 'root'
})
export class AddressService extends BaseResourceService<Address>{
  
  constructor(protected override injector: Injector) {
    super("http://localhost:3000/api/address", injector, Address.fromJson)
  }
  
}
