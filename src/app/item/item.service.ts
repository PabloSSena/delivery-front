import { Injectable, Injector } from '@angular/core';
import { Item } from './item.model';
import { BaseResourceService } from '../shared/base-resource.service';
import { catchError, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService extends BaseResourceService<Item>{
  
  constructor(protected override injector: Injector) {
    super("http://localhost:3000/api/menu-items", injector, Item.fromJson)
  }

  finalizeOrder(): Observable<Item> {
    const url = `http://localhost:3000/api/menu-items`;

    return this.http.put<Item>(url, null).pipe(
      catchError(this.handleError),
      map(this.jsonDataToResource.bind(this))
    );
  }
  
}
