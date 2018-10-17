import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  @Input() currentProfileId: boolean;
  get isFollowing(): boolean {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
