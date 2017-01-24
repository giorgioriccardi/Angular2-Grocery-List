/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagedefaultComponent } from './pagedefault.component';

describe('PagedefaultComponent', () => {
  let component: PagedefaultComponent;
  let fixture: ComponentFixture<PagedefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
