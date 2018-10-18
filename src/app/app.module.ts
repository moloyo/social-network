import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from './routes/routes';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthedGuard } from './guards/authed.guard';
import { NotifyService } from './services/notify.service';
import { NotifyComponent } from './notify/notify.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './services/user.service';
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { NgProgressModule } from '@ngx-progressbar/core';
import { WallComponent } from './profile/wall/wall.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { FollowComponent } from './profile/follow/follow.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { LatestPostsComponent } from './post/latest-posts/latest-posts.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    NotifyComponent,
    NavigationPanelComponent,
    ProfileComponent,
    PrettyDatePipe,
    WallComponent,
    EditProfileComponent,
    FollowComponent,
    CreatePostComponent,
    LatestPostsComponent
  ],
  imports: [
    NgbModule,
    NgProgressModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthedGuard,
    NotifyService,
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
