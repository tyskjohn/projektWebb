import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder,) { }

  loginForm: FormGroup;

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email:      [ '', Validators.required ],
      password:   [ '', Validators.required ],
    })

  }

  get formControls() { return this.loginForm.controls }

  login() {

    if(this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe((res) => {

      localStorage.setItem('ACCESS_TOKEN', res['token']);
      localStorage.setItem('USER_ID', res['id']);

      if(res["success"]) {
        
        this.router.navigateByUrl('/profile');
      } else {
        return;
      }

    })

  }

}
