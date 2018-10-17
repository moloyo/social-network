import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guards/auth.guard';
import { AuthedGuard } from '../guards/authed.guard';
import { ProfileComponent } from '../profile/profile.component';
import { WallComponent } from '../profile/wall/wall.component';
import { EditProfileComponent } from '../profile/edit-profile/edit-profile.component';

export const Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'auth/register', component: RegisterComponent, canActivate: [ AuthedGuard ] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ]},
    { path: 'auth/login', component: LoginComponent, canActivate: [ AuthedGuard ] },
    {
        path: 'user/:id',
        component: ProfileComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: '',
                component: WallComponent
            },
            {
                path: 'edit',
                component: EditProfileComponent
            }
        ]
    }
];
