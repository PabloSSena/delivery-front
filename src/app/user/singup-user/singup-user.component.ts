import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singup-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './singup-user.component.html',
  styleUrl: './singup-user.component.css',
  providers: [UserService]
})
export class SingupUserComponent {
  formCadastro: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.formCadastro = this.fb.group({
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isGerente: [false]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.formCadastro.valid) {
      const formValue = this.formCadastro.value;

      this.userService.create(formValue).subscribe(
        (response) => {
          console.log('Usuário criado com sucesso:', response);
            this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Erro ao criar usuário:', error);
        }
      );
    } else {
      console.log('Formulário inválido!');
    }
  }
}
