
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutLayoutComponent } from './checkout-layout/checkout-layout.component';

const routes: Routes = [

  { path: 'checkout-layout', component: CheckoutLayoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }