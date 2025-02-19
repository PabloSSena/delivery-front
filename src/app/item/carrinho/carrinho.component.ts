import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

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

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getAll().subscribe(items => {
      this.cartItems = items.filter(item => item.carrinho);
    });
  }
}