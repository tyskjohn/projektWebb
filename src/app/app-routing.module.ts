import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ModuleWithProviders } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home',  },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-info', component: ProductInfoComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent}

];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
