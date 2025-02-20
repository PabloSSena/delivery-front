import { Component, Input } from '@angular/core';
import { Item } from '../../item/item.model';
import { CarrinhoComponent } from '../../item/carrinho/carrinho.component';
import { ItemService } from '../../item/item.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [ItemService]
  
})
export class MenuComponent {
  @Input() menuItems: Item[] = [
    {
      codigo: 1,
      nome: 'Strogonoff',
      preco: 29.9,
      imagem: 'https://media.istockphoto.com/id/2086652998/pt/foto/chicken-stroganoff-with-rice-and-straw-potatoes-strogonoff.jpg?s=1024x1024&w=is&k=20&c=k8hk5vUDuDoo74uBmeNPUoatpqxvJ3TRM9gq5cikMSU=',
      descricao: 'Descrição do Prato 1',
    },
    {
      codigo: 2,
      nome: 'Arroz & Feijão + Proteína e Salada',
      preco: 29.9,
      imagem: 'https://media.istockphoto.com/id/1303029433/pt/foto/brazilian-typical-meal.jpg?s=1024x1024&w=is&k=20&c=CHv2vKvVYq7HNG_C_sH_VZl-n4mYJus_FK7fNqvM_ok=',
      descricao: 'Descrição do Prato 2',
    },
    {
      codigo: 3,
      nome: 'Feijoada Completa',
      preco: 39.9,
      imagem: 'https://foodandroad.com/wp-content/uploads/2021/04/feijoada-brasil-2.jpg',
      descricao: 'Descrição do Prato 3',
    },
    {
      codigo: 4,
      nome: 'Yakisoba Misto',
      preco: 39.9,
      imagem: 'https://painel.lojavirus.com.br/uploads/comida_6_58aab0de41.png',
      descricao: 'Descrição do Prato 4',
    },
    {
      codigo: 5,
      nome: 'Costelinha Barbecue',
      preco: 29.9,
      imagem: 'https://melhoresmomentosdavida.com/wp-content/uploads/2022/07/pratos-tipicos-dos-estados-unidos-5.jpg',
      descricao: 'Descrição do Prato 5',
    },
    {
      codigo: 6,
      nome: 'Filé de frango a parmegiana',
      preco: 29.9,
      imagem: 'https://braseirorestaurante.com.br/wp-content/uploads/2020/07/Braseiro-476-min-scaled.jpg',
      descricao: 'Descrição do Prato 6',
    },
  ];

  addToCart() {
    Item.fromJson(Item).carrinho = true
  }
}
