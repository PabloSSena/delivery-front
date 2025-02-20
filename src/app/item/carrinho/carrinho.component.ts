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
  items: Item[] = [
    { codigo: 1, descricao: 'Spaghetti Carbonara', preco: 25.0, detalhes: 'Delicious spaghetti with creamy carbonara sauce.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
    { codigo: 2, descricao: 'Margherita Pizza', preco: 30.0, detalhes: 'Classic pizza with fresh tomatoes, mozzarella, and basil.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
    { codigo: 3, descricao: 'Caesar Salad', preco: 15.0, detalhes: 'Crispy romaine lettuce with Caesar dressing and croutons.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
    { codigo: 4, descricao: 'Grilled Salmon', preco: 40.0, detalhes: 'Perfectly grilled salmon with a side of vegetables.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
    { codigo: 5, descricao: 'Beef Tacos', preco: 20.0, detalhes: 'Tasty beef tacos with fresh salsa and guacamole.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
    { codigo: 6, descricao: 'Chicken Alfredo', preco: 28.0, detalhes: 'Creamy Alfredo pasta with grilled chicken.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
    { codigo: 7, descricao: 'Vegetable Stir Fry', preco: 18.0, detalhes: 'Mixed vegetables stir-fried with a savory sauce.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
    { codigo: 8, descricao: 'Cheeseburger', preco: 22.0, detalhes: 'Juicy cheeseburger with lettuce, tomato, and pickles.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
    { codigo: 9, descricao: 'Shrimp Scampi', preco: 35.0, detalhes: 'Succulent shrimp in a garlic butter sauce.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
    { codigo: 10, descricao: 'Chocolate Cake', preco: 12.0, detalhes: 'Rich and moist chocolate cake with a creamy frosting.', imagem: '../../assets/logo-removebg-preview.png', carrinho: true },
  ];
  total: number = 0;

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.getItens();
    this.getTotal();
  }

  getItens(): void {
 /* this.itemService.getAll().subscribe(items => {
      this.cartItems = items.filter(item => item.carrinho);
    });*/
    this.cartItems = this.items.filter(item => item.carrinho);
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