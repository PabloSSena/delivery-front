import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  providers: [ItemService]
})
export class CarrinhoComponent implements OnInit {
  cartItems: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.getItens();
    this.getTotal();
  }

  getItens(): void {
  this.itemService.getAll().subscribe(items => {
      this.cartItems = items.filter(item => item.carrinho);
    });
  }

  getTotal(): void {
   this.total = this.cartItems.reduce((total, item) => total + item.preco!, 0);
  }

  finalizeOrder(): void {
    this.router.navigate(['/pagamento'], { queryParams: { total: this.total } });
    this.cartItems = [];
    this.total = 0;
  }


}