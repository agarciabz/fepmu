import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeHousesContainerComponent } from './three-houses-container.component';

describe('ThreeHousesContainerComponent', () => {
  let component: ThreeHousesContainerComponent;
  let fixture: ComponentFixture<ThreeHousesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeHousesContainerComponent ]
    })
    .compileComponents();
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
