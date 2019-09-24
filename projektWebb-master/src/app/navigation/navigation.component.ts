import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
//import { CookieService } from 'ngx-cookie-service';
//import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  //isLoggedIn: boolean = this.cookieService.check('isLoggedIn')

  public user = {}



  ngOnInit() {
 //   if(this.isLoggedIn) {
   //   this.authService.getUser().subscribe(data => this.user = data)
   // }
    // $(document).ready(function () {
    //   $('.sidenav').sidenav();
    // });
  }


}
