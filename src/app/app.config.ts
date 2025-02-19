import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { SingupUserComponent } from './user/singup-user/singup-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { CarrinhoComponent } from './item/carrinho/carrinho.component';
import { PerfilComponent } from './user/perfil/perfil.component';

const routes: Routes = [
  { path: 'singUp', component: SingupUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'carrinho', component: CarrinhoComponent },

];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
