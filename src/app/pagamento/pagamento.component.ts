import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [ CurrencyPipe ],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css'
})

export class PagamentoComponent implements OnInit {
  total: number = 0;
  qrCodeUrl: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.total = +params['total'] || 0;
      this.generateQrCode();
    });
  }

  generateQrCode(): void {
    // Substitua pela lógica para gerar o URL do QR code
    this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=Pagamento%20de%20R$${this.total}&size=200x200`;
  }
}