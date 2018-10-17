import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { UserData } from '../models/user-data';
import { NotifyService } from './notify.service';
import { User } from '../models/user';
import { NgProgress } from 'ngx-progressbar';

@Injectable()

export class AuthService {

    constructor (private readonly apiService: ApiService,
                 private readonly router: Router,
                 private readonly notifyService: NotifyService,
                 private readonly ngProgress: NgProgress) {
    }

    register(name: string, email: string, password: string): Promise<UserData | void> {
        console.log({ name: name, email: email, password: password });
        return this.apiService.post('register', { name: name, email: email, password: password })
        .toPromise()
        .then((response) => {
            const token = response.token;
            const user = response.user;

            return new UserData(token, user);
        }, (error: any) => {
            this.notifyService.notify(JSON.stringify(error), 'error', 10);
        });
    }

    logUserIn(userData: UserData) {
        localStorage.setItem('token', userData.token);
        localStorage.setItem('user', JSON.stringify(userData.user));
        this.notifyService.notify('Successful LogIn', 'success');
        this.router.navigate(['/dashboard']);
    }

    login(email: string, password: string): Promise<UserData> {
        this.ngProgress.start();
        const token = 'sefsekfmsmeklmseklfmseklfmseklmfksefmksemfksefmksefmsekfmseklf';
        const user = {
            id: 123414,
            name: 'Joaco',
            email: 'joaco@j.com',
            avatar: null,
            joined: '2017-04-11 01:17:54',
        };

        return Promise.resolve(new UserData(token, user));

        // return this.apiService.post('authenticate', { email: email, password: password })
        // .toPromise()
        // .then((response) => {
        //     console.log('login succcess');

        //     const token = response.json().token;
        //     const user = response.json().data;

        //     return new UserData(token, user);
        // });
    }

    isLoggedIn(): boolean {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (user && token) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        this.router.navigate(['/auth/login']);
    }

    getAuthUser(): User {
        return JSON.parse(localStorage.getItem('user'));
    }

    getAuthUserId(): number {
        return JSON.parse(localStorage.getItem('user')).id;
    }
}
