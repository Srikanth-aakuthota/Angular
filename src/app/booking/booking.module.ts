import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingManagerComponent } from './booking-manager/booking-manager.component';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from '../shared/date-picker/date-picker.component';
import { AutoCompleteComponent } from '../shared/auto-complete/auto-complete.component';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookingManagerComponent],
  imports: [
    CommonModule, FormsModule, SharedModule
  ]
})
export class BookingModule { }
