import { Injectable, Injector } from '@angular/core';
import { Item } from './item.model';
import { BaseResourceService } from '../shared/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class ItemService extends BaseResourceService<Item>{
  
  constructor(protected override injector: Injector) {
    super("http://localhost:3000/api/menu-items", injector, Item.fromJson)
  }
  
}
