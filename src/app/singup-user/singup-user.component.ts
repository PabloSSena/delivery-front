import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

@Component({
  selector: 'app-singup-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './singup-user.component.html',
  styleUrl: './singup-user.component.css'
})
export class SingupUserComponent {
  formCadastro: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.formCadastro = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      keepLoggedIn: [false],
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
    }
  }
}
