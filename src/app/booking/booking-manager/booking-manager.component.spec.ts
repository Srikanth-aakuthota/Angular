import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingManagerComponent } from './booking-manager.component';

describe('BookingManagerComponent', () => {
  let component: BookingManagerComponent;
  let fixture: ComponentFixture<BookingManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
