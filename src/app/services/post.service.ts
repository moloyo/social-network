import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly apiService: ApiService) { }

  getLatest(): Promise<Post[]> {
    return Promise.resolve( [
      new Post('primero', 'primero contenido', null),
      new Post('segundo', 'segundo contenido', null),
      new Post('tercerp', 'tercerp contenido', null)
    ]);
    // return this.apiService.get<Post[]>('posts/latest').toPromise();
  }

  createPost(post: Post) {
    console.log(post);
  }
}
