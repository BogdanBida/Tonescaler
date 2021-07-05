/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KalimbaControlsComponent } from './kalimba-controls.component';

describe('KalimbaControlsComponent', () => {
  let component: KalimbaControlsComponent;
  let fixture: ComponentFixture<KalimbaControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalimbaControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalimbaControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
