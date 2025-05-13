import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTrainBookingComponent } from './app-train-booking.component';

describe('AppTrainBookingComponent', () => {
  let component: AppTrainBookingComponent;
  let fixture: ComponentFixture<AppTrainBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTrainBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTrainBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
