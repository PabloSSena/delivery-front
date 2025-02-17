import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService]
})
export class EditUserComponent implements OnInit {
  formEdicao!: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formEdicao = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Load user data
    this.loadUserData();
  }

  loadUserData(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.get(+userId).subscribe(data => {
        this.formEdicao.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.formEdicao.valid) {
      const userId = this.route.snapshot.paramMap.get('id');
      if (userId) {
        this.userService.update(+userId, this.formEdicao.value).subscribe(response => {
          console.log('User updated successfully', response);
        });
      }
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}