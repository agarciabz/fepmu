import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeHousesContainerComponent } from './three-houses-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ThreeHousesContainerComponent', () => {
  let component: ThreeHousesContainerComponent;
  let fixture: ComponentFixture<ThreeHousesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeHousesContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeHousesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
