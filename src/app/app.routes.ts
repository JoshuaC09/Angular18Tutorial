import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './common/abouts/abouts.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './common/customer/customer.component';
import { AddComponent } from './common/add/add.component';
import { StatusComponent } from './common/status/status.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutsComponent,
  },
  {
    path: 'about/:submenu/:id',
    component: AboutsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
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
