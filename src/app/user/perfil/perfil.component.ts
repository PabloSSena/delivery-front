import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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
  isGerente: boolean | undefined; 

  constructor(private userService: UserService, private route: ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const userId = this.route.snapshot.paramMap.get('id');

    this.userService.get(userId).subscribe(data => {
      this.user = data;
      this.isGerente = this.user.isGerente;
    });
  }

  addAddress(): void {
    console.log('Adicionar endereço');
  }

  navigateToCadastrarItem(): void {
    this.router.navigate(['/cadastrarItem']);
  }

}