import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeHousesFormComponent } from './three-houses-form.component';

describe('ThreeHousesFormComponent', () => {
  let component: ThreeHousesFormComponent;
  let fixture: ComponentFixture<ThreeHousesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeHousesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeHousesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
