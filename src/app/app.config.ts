import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { SingupUserComponent } from './user/singup-user/singup-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'singUp', component: SingupUserComponent },
  { path: 'edit/:id', component: EditUserComponent },

];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
