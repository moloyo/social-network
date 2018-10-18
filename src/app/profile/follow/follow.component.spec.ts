import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowComponent } from './follow.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FollowComponent', () => {
  let component: FollowComponent;
  let fixture: ComponentFixture<FollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
