import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderplacedComponent } from './orderplaced.component';

describe('OrderplacedComponent', () => {
  let component: OrderplacedComponent;
  let fixture: ComponentFixture<OrderplacedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderplacedComponent]
    });
    fixture = TestBed.createComponent(OrderplacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
