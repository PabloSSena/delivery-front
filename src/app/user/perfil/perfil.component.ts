import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [UserService]
})
export class PerfilComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    //const userId = this.route.snapshot.paramMap.get('id');

    /*this.userService.get(userId).subscribe(data => {
      this.user = data;
    });*/
    this.user = {
      id: 1,
      username: 'JohnDoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johnemail.com',
      password: '123456',
    };
  }

  addAddress(): void {
    // Lógica para adicionar endereço
    console.log('Adicionar endereço');
  }
}