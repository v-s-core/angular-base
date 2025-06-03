// Angular modules
import { Routes } from '@angular/router';

export const routes : Routes = [
  {
    path         : 'auth',
    loadChildren : () => import('./modules/auth/auth.routes').then(m => m.routes),
  },
  {
    path          : 'home',
    loadComponent : () => import('./modules/home/home.component').then(m => m.HomeComponent),
  },
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { 
    path : 'customer-details', 
    loadComponent : () => import('./modules/customer-details/customer-details.component').then(m=> m.CustomerDetailsComponent),
  },
  { 
    path : 'billing', 
    loadComponent : () => import('./modules/billing/billing.component').then(m=> m.BillingComponent),
  },{path : 'billing', redirectTo : '/billing', pathMatch : 'full'},
  {
    path          : '**',
    loadComponent : () => import('./modules/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];