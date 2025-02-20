import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { SingupUserComponent } from './user/singup-user/singup-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { CarrinhoComponent } from './item/carrinho/carrinho.component';
import { PerfilComponent } from './user/perfil/perfil.component';
import { CadastrarItemComponent } from './item/cadastrar-item/cadastrar-item.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [
  { path: 'singUp', component: SingupUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'cadastrarItem', component: CadastrarItemComponent },
  { path: 'pagamento', component: PagamentoComponent },

];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
