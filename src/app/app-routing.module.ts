import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductInfoComponent } from './product-info/product-info.component';

import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home',  },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-info', component: ProductInfoComponent}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);