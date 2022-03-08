import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitListComponent } from './unit-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UnitListComponent', () => {
  let component: UnitListComponent;
  let fixture: ComponentFixture<UnitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
