import { Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  isCollapsed = true;
  postCreated: EventEmitter<Post>;

  constructor(private readonly postService: PostService, private readonly authService: AuthService) {
    this.postCreated = new EventEmitter();
  }

  createPost(form: NgForm) {
    const user = this.authService.getAuthUser();
    const post = new Post(form.value.title, form.value.content, user);
    this.postService.createPost(post);
    this.postCreated.emit(post);
    this.isCollapsed = true;
  }

}
