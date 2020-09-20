import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [DatePickerComponent, AutoCompleteComponent, ConfirmationDialogComponent],
  exports: [DatePickerComponent, AutoCompleteComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
