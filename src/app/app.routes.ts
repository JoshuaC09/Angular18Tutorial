import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './common/abouts/abouts.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';
import { authGuard } from './Guard/auth.guard';
import { childauthGuard } from './Guard/childauth.guard';
import { authdeactivateGuard } from './Guard/authdeactivate.guard'; // Change this line
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    component: AboutsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about/:submenu/:id',
    component: AboutsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
    canActivate: [authGuard],
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [authGuard],
    canActivateChild: [childauthGuard],
    canDeactivate: [authdeactivateGuard], // Change this line
    children: [
      { path: 'add', component: AddComponent },
      { path: 'edit/:id', component: AddComponent },
    ],
  },
  {
    path: '**',
    component: StatusComponent,
  },
];
