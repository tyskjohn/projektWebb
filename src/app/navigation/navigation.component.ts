import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';

//import { CookieService } from 'ngx-cookie-service';
//import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private items: Item[] = [];
  private total: number = 0;
  private itemQuantity: number = 0;

  constructor(private router: Router, private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  //isLoggedIn: boolean = this.cookieService.check('isLoggedIn')

  public user = {}

  ngOnInit() {

  }
 }
