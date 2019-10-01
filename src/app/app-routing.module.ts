import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SuccessSiteComponent } from './success-site/success-site.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'product-info', component: ProductInfoComponent},
  { path: 'success-site', component: SuccessSiteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
