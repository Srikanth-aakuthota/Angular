import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockManagerComponent } from './clock-manager/clock-manager.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { RouterModule, Route } from '@angular/router';

let childRoutes : Route[] = [ 
  { 
    path : "",
    component : ClockManagerComponent
  }
];

@NgModule({
  declarations: [ClockManagerComponent, AnalogClockComponent],
  imports: [
    CommonModule, RouterModule.forChild(childRoutes)
  ]
})
export class ClockModule { }
