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
      descricao: ['', Validators.required],
      preco: ['', [Validators.required, Validators.min(0)]],
      detalhes: ['', Validators.required],
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
        descricao: this.formCadastro.get('descricao')?.value,
        preco: this.formCadastro.get('preco')?.value,
        detalhes: this.formCadastro.get('detalhes')?.value,
        imagem: this.base64Image
      };

      this.itemService.create(item).subscribe(response => {
        console.log('Item cadastrado com sucesso', response);
        // Adicione a lógica para redirecionar ou exibir uma mensagem de sucesso
      });
    }
  }
}