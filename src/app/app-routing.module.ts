import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NavigationComponent } from './navigation/navigation.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navigation', component: NavigationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
