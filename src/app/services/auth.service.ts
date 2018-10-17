import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { UserData } from '../models/user-data';
import { NotifyService } from './notify.service';
import { User } from '../models/user';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Injectable()

export class AuthService {
    progressRef: NgProgressRef;

    constructor (private readonly apiService: ApiService,
                 private readonly router: Router,
                 private readonly notifyService: NotifyService,
                 private readonly progress: NgProgress) {
        this.progressRef = progress.ref();
    }

    register(name: string, email: string, password: string): Promise<UserData | void> {
        console.log({ name: name, email: email, password: password });
        return this.apiService.post<UserData>('register', { name: name, email: email, password: password })
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
        this.progressRef.start();
        const token = 'sefsekfmsmeklmseklfmseklfmseklmfksefmksemfksefmksefmsekfmseklf';
        const user = {
            id: 123414,
            name: 'Joaco',
            email: 'joaco@j.com',
            avatar: null,
            joined: '2017-04-11 01:17:54',
        };

        setTimeout(() => this.progressRef.complete(), 500);

        return Promise.resolve(new UserData(token, user));

        // return this.apiService.post('authenticate', { email: email, password: password })
        // .toPromise()
        // .then((response) => {
        //     console.log('login succcess');
        //     this.progressRef.complete()

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
        const user = JSON.parse(localStorage.getItem('user'));
        return user ? user.id : undefined;
    }
}
