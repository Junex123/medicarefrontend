import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontactComponent } from './viewcontact.component';

describe('ViewcontactComponent', () => {
  let component: ViewcontactComponent;
  let fixture: ComponentFixture<ViewcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcontactComponent]
    });
    fixture = TestBed.createComponent(ViewcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
