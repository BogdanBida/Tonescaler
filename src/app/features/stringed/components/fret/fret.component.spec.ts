/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FretComponent } from './fret.component';

describe('FretComponent', () => {
  let component: FretComponent;
  let fixture: ComponentFixture<FretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
