import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { stringify } from '@angular/core/src/util';
import { UserData } from '../models/user-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('submit login');
    this.authService.login(form.value.email, form.value.password).then((userData: UserData) => {
      this.authService.logUserIn(userData);
    });
  }

}
