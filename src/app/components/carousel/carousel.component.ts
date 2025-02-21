import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface CarouselItem {
  image: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Input() items: CarouselItem[] = [];
  currentIndex = 0;

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }
}
