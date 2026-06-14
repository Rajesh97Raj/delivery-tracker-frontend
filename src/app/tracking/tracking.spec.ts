import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tracking } from './tracking';

describe('Tracking', () => {
  let component: Tracking;
  let fixture: ComponentFixture<Tracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tracking],
    }).compileComponents();

    fixture = TestBed.createComponent(Tracking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
