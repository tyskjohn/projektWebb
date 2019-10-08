import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-checkout-layout',
  templateUrl: './checkout-layout.component.html',
  styleUrls: ['./checkout-layout.component.css']
})
export class CheckoutLayoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public user = {};

  ngOnInit() {

    this.authService.getUser().subscribe(data => this.user = data);

  }

}
