import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTable } from './orders-table';

describe('OrdersTable', () => {
  let component: OrdersTable;
  let fixture: ComponentFixture<OrdersTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTable],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
