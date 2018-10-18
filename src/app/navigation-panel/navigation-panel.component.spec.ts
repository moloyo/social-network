import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPanelComponent } from './navigation-panel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NavigationPanelComponent', () => {
  let component: NavigationPanelComponent;
  let fixture: ComponentFixture<NavigationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPanelComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
