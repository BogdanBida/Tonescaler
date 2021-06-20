/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TunerChartComponent } from './tuner-chart.component';

describe('TunerChartComponent', () => {
  let component: TunerChartComponent;
  let fixture: ComponentFixture<TunerChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunerChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
