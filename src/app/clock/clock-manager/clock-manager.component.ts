import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-manager',
  templateUrl: './clock-manager.component.html',
  styleUrls: ['./clock-manager.component.css']
})
export class ClockManagerComponent {

  clocks = [
    { hour: 0, minute: 0, timezone: "GMT" },
    { hour: 5, minute: 30, timezone: "India" },
    { hour: -7, minute: -45, timezone: "Australia" },
    { hour: -9, minute: -30, timezone: "NewYork" },
  ];

}
