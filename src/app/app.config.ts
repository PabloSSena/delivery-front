import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { SingupUserComponent } from './user/signup-user/signup-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { CarrinhoComponent } from './item/carrinho/carrinho.component';
import { PerfilComponent } from './user/perfil/perfil.component';
import { CadastrarItemComponent } from './item/cadastrar-item/cadastrar-item.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { LoginComponent } from './login/login.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cardapio', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SingupUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'cadastrarItem', component: CadastrarItemComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient()]

};
