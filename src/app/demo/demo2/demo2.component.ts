import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component  {

  public count : number = 0 ;

  @Output() // to send the value from the parent component
  public countChange = new EventEmitter<number>() ; 

  @Input() // to obtain the value from the parent component
  public step : number = 1 ; 

  public increment() : void { 
    this.count += this.step ; 
    this.countChange.emit ( this.count );
  }

  public decrement() : void { 
    this.count -= this.step ;
    this.countChange.emit ( this.count );
  }

}
