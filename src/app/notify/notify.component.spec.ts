import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyComponent } from './notify.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NotifyComponent', () => {
  let component: NotifyComponent;
  let fixture: ComponentFixture<NotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
