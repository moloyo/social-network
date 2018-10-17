import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User;

  constructor(private readonly authService: AuthService, private readonly userService: UserService) {
  }

  ngOnInit() {
    this.user = this.authService.getAuthUser();
  }

  editProfile() {
    this.userService.updateProfile(this.user.name, this.user.email).then((user) => {
      this.user = user;
    });
  }

}
