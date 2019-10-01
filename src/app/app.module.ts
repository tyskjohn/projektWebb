import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCollageComponent } from './product-collage/product-collage.component';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SuccessSiteComponent } from './success-site/success-site.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCollageComponent,
    HomeComponent,
    ProductInfoComponent,
    SuccessSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
