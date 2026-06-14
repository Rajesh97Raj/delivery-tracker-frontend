import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTracking } from './customer-tracking';

describe('CustomerTracking', () => {
  let component: CustomerTracking;
  let fixture: ComponentFixture<CustomerTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTracking],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerTracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
