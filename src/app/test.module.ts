import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from './routes/routes';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from '@ngx-progressbar/core';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgbModule,
    NgProgressModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ]
})
export class TestModule { }
