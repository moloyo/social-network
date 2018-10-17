import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly authServicer: AuthService,
              private readonly apiService: ApiService,
              private readonly notifyService: NotifyService) { }

  getUserById(userId: number): Promise<User> {
    if (userId === this.authServicer.getAuthUserId()) {
      return Promise.resolve(this.authServicer.getAuthUser());
    } else {
      return this.apiService.get<User>(`user/${userId}`).toPromise().then(response => {
        return response;
      })
      .catch((error: any) => {
        this.notifyService.notify(`ERROR: ${error.status} ${error.name}. Detail: ${error.statusText}`, 'error', 10);
        return undefined;
      });
    }
  }

}
