import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly apiService: ApiService) { }

  getLatest(): Promise<Post[]> {
    return Promise.resolve( [
      new Post('primero', 'primero contenido', { id: 1, name: 'pepe', email: 'aeawea', avatar: null, joined: null }),
      new Post('segundo', 'segundo contenido', { id: 1, name: 'pepe', email: 'aeawea', avatar: null, joined: null }),
      new Post('tercero', 'tercero contenido', { id: 1, name: 'pepe', email: 'aeawea', avatar: null, joined: null })
    ]);
    // return this.apiService.get<Post[]>('posts/latest').toPromise();
  }

  createPost(post: Post) {
    console.log(post);
  }
}
