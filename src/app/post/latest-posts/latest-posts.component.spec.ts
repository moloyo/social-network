import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostsComponent } from './latest-posts.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LatestPostsComponent', () => {
  let component: LatestPostsComponent;
  let fixture: ComponentFixture<LatestPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestPostsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
