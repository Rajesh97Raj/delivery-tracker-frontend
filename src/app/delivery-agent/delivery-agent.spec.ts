import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAgent } from './delivery-agent';

describe('DeliveryAgent', () => {
  let component: DeliveryAgent;
  let fixture: ComponentFixture<DeliveryAgent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryAgent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryAgent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
