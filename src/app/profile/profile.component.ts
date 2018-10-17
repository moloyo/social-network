import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number;
  user: User;

  get isAuthUserId(): boolean {
    return this.id === this.authService.getAuthUserId();
  }

  constructor(private router: ActivatedRoute,
              private readonly userService: UserService,
              private readonly authService: AuthService) {
                this.userService.userProfileUpdated.subscribe((user) => this.user = user);
              }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = +params['id'];
      this.userService.getUserById(this.id).then(user => this.user = user);
    });
  }

}
