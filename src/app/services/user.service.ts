import { Injectable, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userProfileUpdated: EventEmitter<User>;

  constructor(private readonly authServicer: AuthService,
              private readonly apiService: ApiService,
              private readonly notifyService: NotifyService) {
                this.userProfileUpdated = new EventEmitter();
              }

  getUserById(userId: number): Promise<User> {
    if (userId === this.authServicer.getAuthUserId()) {
      return Promise.resolve(this.authServicer.getAuthUser());
    } else {
      return this.apiService.get<User>(`user/${userId}`).toPromise().then(response => {
        return response;
      });
    }
  }

  updateProfile(name: string, email: string): Promise<User> {
    const body = { name: name, email: email };
    return this.apiService.put<User>('user/update', body).toPromise().then((response) => {
      localStorage.setItem('user', JSON.stringify(response));
      this.notifyService.notify(`Profile Updated.`, 'success');
      this.userProfileUpdated.emit(response);
      return response;
    });
  }

  isFollowing(id: number): Promise<boolean> {
    return this.apiService.post<boolean>('user/is/following', { idUser: id }, true).toPromise();
  }

  follow(id: number) {
    return this.apiService.post<void>('user/follow', { idUser: id }, true).toPromise();
  }

  unFollow(id: number) {
    return this.apiService.post<void>('user/unfollow', { idUser: id }, true).toPromise();
  }
}
