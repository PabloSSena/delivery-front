import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [ CurrencyPipe, NavigationComponent ],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})

export class PagamentoComponent implements OnInit {
  total: number = 0;
  qrCodeUrl: string = '';

  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.total = +params['total'] || 0;
      this.generateQrCode();
    });
  }

  generateQrCode(): void {
    this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=Pagamento%20de%20R$${this.total}&size=200x200`;
  }

  pagamentoFeito(){
    this.itemService.finalizeOrder().subscribe(
      (response) => {
        console.log('Pagamento realizado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao realizar pagamento:', error);
      })
  }
}