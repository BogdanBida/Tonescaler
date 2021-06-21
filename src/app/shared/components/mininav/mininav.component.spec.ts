/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MininavComponent } from './mininav.component';

describe('MininavComponent', () => {
  let component: MininavComponent;
  let fixture: ComponentFixture<MininavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MininavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MininavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
