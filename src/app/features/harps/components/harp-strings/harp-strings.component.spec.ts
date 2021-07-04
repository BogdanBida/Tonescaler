/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HarpStringsComponent } from './harp-strings.component';

describe('HarpStringsComponent', () => {
  let component: HarpStringsComponent;
  let fixture: ComponentFixture<HarpStringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarpStringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarpStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
