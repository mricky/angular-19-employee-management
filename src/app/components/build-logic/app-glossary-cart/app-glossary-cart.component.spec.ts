import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGlossaryCartComponent } from './app-glossary-cart.component';

describe('AppGlossaryCartComponent', () => {
  let component: AppGlossaryCartComponent;
  let fixture: ComponentFixture<AppGlossaryCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppGlossaryCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppGlossaryCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
