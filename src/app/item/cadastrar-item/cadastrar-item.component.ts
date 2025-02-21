import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-cadastrar-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule,NavigationComponent],
  templateUrl: './cadastrar-item.component.html',
  styleUrls: ['./cadastrar-item.component.css'],
  providers: [ItemService]
})
export class CadastrarItemComponent implements OnInit {
  formCadastro!: FormGroup;
  selectedFile: File | null = null;
  base64Image: string | null = null;
  selectedFileName: string = 'Nenhum arquivo selecionado';

  constructor(private fb: FormBuilder, private itemService: ItemService) {}

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.min(0)]],
      preco: ['', Validators.required],
      imagem: ['', Validators.required]
    });
  }
  
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.selectedFileName = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string;
        this.formCadastro.patchValue({
          imagem: this.base64Image
        });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.formCadastro.valid && this.base64Image) {
      const item: Item = {
        name: this.formCadastro.get('name')?.value,
        description: this.formCadastro.get('description')?.value,
        price: this.formCadastro.get('price')?.value,
        imageUrl: this.base64Image,
        on_little_car: false
      };

      this.itemService.create(item).subscribe(response => {
        console.log('Item cadastrado com sucesso', response);
        // Adicione a lógica para redirecionar ou exibir uma mensagem de sucesso
      });
    }
  }
}