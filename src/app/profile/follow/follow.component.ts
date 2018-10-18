import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  @Input() currentProfileId: number;
  isLoading = true;
  isFollowing: boolean;

  constructor(private readonly userService: UserService) { }

  ngOnInit() {
    this.userService.isFollowing(this.currentProfileId).then((response) => {
      this.isLoading = false;
      this.isFollowing = response;
    });
  }

  follow() {
    this.isLoading = true;
    this.userService.follow(this.currentProfileId).then(resp => {
      this.isLoading = false;
      this.isFollowing = true;
    });
  }

  unFollow() {
    this.isLoading = true;
    this.userService.unFollow(this.currentProfileId).then(resp => {
      this.isLoading = false;
      this.isFollowing = false;
    });
  }

}
