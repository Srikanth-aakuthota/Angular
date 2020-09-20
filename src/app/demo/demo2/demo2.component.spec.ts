import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo2Component } from './demo2.component';
import { By } from '@angular/platform-browser';

describe('Demo2Component', () => {

  // define component as reference variable => Component Object
  let component: Demo2Component;

  // define fixture as reference variable => HTML DOM of the Component object
  let fixture: ComponentFixture<Demo2Component>;

  // the callback method registered with beforeEach is called before every test runs
  beforeEach(async(() => {

    // Create Module to hold the component 
    TestBed.configureTestingModule({
      declarations: [Demo2Component]
    })
      .compileComponents();

  }));

  // the callback method will be called before each test runs
  beforeEach(() => {

    // Creating the New Component object
    fixture = TestBed.createComponent(Demo2Component);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  // First Test: Before each Test New Component object is created
  it('should create', () => {
    // null, undefined, NaN, false, 0 => falsy
    expect(component).toBeTruthy();
  });

  // Second Test: Before each Test New Component object is created
  it('should check count', () => {
    // null, undefined, NaN, false, 0 => falsy
    expect(component.count).toEqual(0);
  });

  // Third Test: Before each Test New Component object is created
  it('should check increment', () => {
    // null, undefined, NaN, false, 0 => falsy
    expect(component.count).toEqual(0);
    component.increment();
    expect(component.count).toEqual(1);
    component.increment();
    expect(component.count).toEqual(2);
  });

  // Fourth Test: Before each Test New Component object is created
  it('should check decrement', () => {
    // null, undefined, NaN, false, 0 => falsy
    expect(component.count).toEqual(0);
    component.decrement();
    expect(component.count).toEqual(-1);
    component.decrement();
    expect(component.count).toEqual(-2);
  });

  // Fifth Test: Before each Test New Component object is created
  it('should check increment by 2', () => {
    component.step = 2;
    // null, undefined, NaN, false, 0 => falsy
    expect(component.count).toEqual(0);
    component.increment();
    expect(component.count).toEqual(2);
    component.increment();
    expect(component.count).toEqual(4);
  });

  // Sixth Test: Before each Test New Component object is created
  it('should check Button UI', () => {

    let incrementButton = fixture.debugElement.query(By.css(".increment"));
    let decrementButton = fixture.debugElement.query(By.css(".decrement"));

    expect(incrementButton).toBeTruthy();
    expect(decrementButton).toBeTruthy();

    expect(incrementButton.nativeElement.textContent).toEqual("+");
    expect(decrementButton.nativeElement.textContent).toEqual("-");

  });

  // Seventh Test: Before each Test New Component object is created
  it('should check Button Increment Click', () => {

    let incrementButton = fixture.debugElement.query(By.css(".increment"));

    incrementButton.triggerEventHandler("click", null);

    expect(component.count).toEqual(1);

  });

  // Eight Test: Before each Test New Component object is created
  it('should check Value of Count in UI', () => {

    let incrementButton = fixture.debugElement.query(By.css(".increment"));
    let outputDiv = fixture.debugElement.query(By.css(".output"));

    fixture.detectChanges(); // forcing the UI  Updation
    expect(outputDiv.nativeElement.textContent).toEqual("0");

    incrementButton.triggerEventHandler("click", null);

    fixture.detectChanges(); // forcing the UI  Updation
    expect(outputDiv.nativeElement.textContent).toEqual("1");


  });

  // Ninth Test: Before each Test New Component object is created
  it('should test emit', () => {



  });

  // Tenth Test: Before each Test New Component object is created
  it('should test observable', () => {



  });





});
