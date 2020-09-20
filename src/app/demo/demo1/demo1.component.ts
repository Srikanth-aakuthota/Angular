import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// import { fromEvent, of, interval } from 'rxjs';
// import { scan, mapTo, throttleTime, map, filter, switchMap, debounceTime, delay } from "rxjs/operators";

import { fromEvent } from "rxjs";
import { mapTo, scan, map, debounceTime } from "rxjs/operators";
//import { pipe } from '@angular/core/src/render3';

// creators - creates Observable object - rxjs file
// next() - can be called multiple times - over the time
// complete() - once
// error() - once

// unless subscribe() is called on observable object, it doesn't generate data
// subscribe() allows to subscribe for, next, complete, error

// subscribe on once observable object can be called many times
// every time it is called, the observable will start generating the data from the beginning - COLD observables
// every time it is called, the observable doesn;t start supplying data from beginnning, 
// instead supplies that data which it is already in process of supplying - HOT observables

// every call to subscript returns subscription object, using which we can cancel the process

// operators - that operates on the data that Observable object GIVES - rxjs/operators file

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {

  @ViewChild("i1", { static: true })
  public i1: ElementRef;

  ngAfterViewInit() {

    // NORMAL-WAY
    // let count = 0 ; 
    // window.document.addEventListener('click', () => {
    //   count = count + 1 ; 
    //   console.log( count ) ;
    // });

    // RXJS - WAY - Example - 1
    // let clickObservable = fromEvent(document, 'click');
    // clickObservable.subscribe(() => console.log("Document Clicked"));

    // let changeObservable = fromEvent(this.i1.nativeElement, 'input');
    // changeObservable.subscribe((event: any) => console.log(event.data));

    // RXJS - WAY - Example - 2
    // let clickObservable = fromEvent(document, 'click')
    //                         .pipe(mapTo(1))
    //                         .pipe(scan((count, step) => count + step));
    // clickObservable.subscribe(value => console.log(value));

    let previousSubscription = null ;
    let debounceTimeObservable = fromEvent(this.i1.nativeElement, 'input')
                              .pipe(map((event: any) => event.data))
                              .pipe(scan((str: string, value: string) => str + value, ""))
                              .pipe(debounceTime(6000));

      debounceTimeObservable.subscribe(value =>  { 
      console.log(value);
      // Sending the Request to the Serverr
      // let newSubsciption = http.get() ; 
      // if ( previousSubscription != null ) previousSubscription.unsubscribe() ; 
      // previousSubscription = newSubscription ; 
    });




    // Example - 2
    // fromEvent(document, 'click')
    //   .pipe(mapTo(10))
    //   .pipe(scan((state : number, one : number) => {
    //     return state + one;
    //   }))
    //   .subscribe(count => console.log(`Clicked ${count} times`));

    // Example - 3
    // fromEvent(document, 'click')
    //     .pipe(throttleTime(5000))
    //     .pipe(mapTo(1))
    //     .pipe(scan((state : number, one : number) => state + one))
    //     .subscribe(count => console.log(`Clicked ${count} times`));

    //(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

    //map((x: number) => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));

    //(of(1, 2, 3)).pipe(map((x: number) => x * x)).subscribe((v) => console.log(`value: ${v}`));


    // (of(1, 2, 3)).pipe(
    //   filter(v => !(v % 2)),
    //   map(v => v + v),
    // ).subscribe((v) => console.log(`value: ${v}`))

    // const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3, x ** 4)));
    // switched.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(switchMap((ev) => interval(1000)));
    // result.subscribe(x => console.log(x));

    //interval(1000).pipe(throttleTime(3000)).subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(delay(3000)); 
    // delayedClicks.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(debounceTime(3000));
    // delayedClicks.subscribe(x => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(throttleTime(3000)); 
    // delayedClicks.subscribe(x => console.log(x));
  }

}
