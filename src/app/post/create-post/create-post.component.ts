import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postForm: FormGroup;
  isCollapsed = true;
  postCreated: EventEmitter<Post>;

  constructor(private readonly postService: PostService,
              private readonly authService: AuthService,
              private readonly fb: FormBuilder) {
    this.postCreated = new EventEmitter();
    this.postForm = this.fb.group({
      title: ['', [ Validators.required ]],
      content: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(250) ]]
    });
  }

  createPost() {
    this.postService.createPost(this.postForm.value).then(sent => this.postCreated.emit(sent));
    this.isCollapsed = true;
  }

}
