import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthedGuard implements CanActivate {

    constructor(private readonly authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (!this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    }
}