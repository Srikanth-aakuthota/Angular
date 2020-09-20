import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;  // please do not worry about $ as it is coming from jquery library

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  @Input()
  date: string;

  @Output()
  dateChange = new EventEmitter<string>();

  constructor() {
    let current = new Date();
    this.date = current.toLocaleDateString();
  }

  @ViewChild("dp", { static: true })
  datePicker: ElementRef;

  ngAfterViewInit() {
    $(this.datePicker.nativeElement).datepicker({
      onSelect: newDate => this.dateChange.emit(newDate)
    });
  }

}
