import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AddressService } from './shared/endereco.service';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [    
      CommonModule,
      ReactiveFormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      RouterModule
    ],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.css'
})
export class EnderecoComponent {

  states: string[] = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  addressForm: FormGroup = new FormGroup({
    // user: new FormControl(1),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required])
  });

  constructor(private addressService: AddressService, private router: Router) {
  }

  onSubmit(): void {
    this.addressService.create(this.addressForm.value).subscribe(
      (response) => {
        console.log('Endereço criado com sucesso:', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Erro ao criar endereço:', error);
      }
    );
  }

}
