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
      new Post('primero', 'primero contenido'),
      new Post('segundo', 'segundo contenido'),
      new Post('tercero', 'tercero contenido')
    ]);
    // return this.apiService.get<Post[]>('posts/latest').toPromise();
  }

  createPost(post: Post): Promise<Post> {
    return Promise.resolve(post);
    // return this.apiService.post<Post>('posts', post).toPromise();
  }
}
