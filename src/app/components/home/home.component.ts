import { Component } from '@angular/core';
import {
  CarouselComponent,
  CarouselItem,
} from '../carousel/carousel.component';
import { NavigationComponent } from '../navigation/navigation.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  dishes: CarouselItem[] = [
    {
      image:
        'https://media.istockphoto.com/id/2086652998/pt/foto/chicken-stroganoff-with-rice-and-straw-potatoes-strogonoff.jpg?s=1024x1024&w=is&k=20&c=k8hk5vUDuDoo74uBmeNPUoatpqxvJ3TRM9gq5cikMSU=',
      description: 'Descrição do Prato 1',
    },
    {
      image:
        'https://media.istockphoto.com/id/1303029433/pt/foto/brazilian-typical-meal.jpg?s=1024x1024&w=is&k=20&c=CHv2vKvVYq7HNG_C_sH_VZl-n4mYJus_FK7fNqvM_ok=',
      description: 'Descrição do Prato 2',
    },
  ];
}
