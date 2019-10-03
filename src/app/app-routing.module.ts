import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';

import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home',  },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent }

];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);