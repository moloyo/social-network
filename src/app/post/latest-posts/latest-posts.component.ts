import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatePostComponent } from '../create-post/create-post.component';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  @ViewChild('createPost') createPost: CreatePostComponent;
  latestPosts: Post[];
  get isCollapsed(): boolean { return this.createPost.isCollapsed; }

  constructor(private readonly postService: PostService) { }

  ngOnInit() {
    this.postService.getLatest().then((posts) => this.latestPosts = posts);
    this.createPost.postCreated.subscribe((post) => this.latestPosts = [post, ...this.latestPosts]);
  }

}
