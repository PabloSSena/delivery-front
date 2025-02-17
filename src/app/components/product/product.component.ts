import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  dishes = [
    {
      image: '/assets/dishes/dish1.jpg',
      description: 'Penne ao Molho Gorgonzola com Cogumelos',
    },
    {
      image: '/assets/dishes/dish2.jpg',
      description: 'Risoto de Camarão com Açafrão',
    },
    {
      image: '/assets/dishes/dish3.jpg',
      description: 'Tournedos Rossini com Purê de Batata Trufado',
    },
  ];
}
