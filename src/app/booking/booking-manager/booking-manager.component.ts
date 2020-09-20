import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-manager',
  templateUrl: './booking-manager.component.html',
  styleUrls: ['./booking-manager.component.css']
})
export class BookingManagerComponent  {

  bookings = [ ] ;

  addNewBooking() {
    this.bookings.push ( { name : "", onward : new Date().toLocaleDateString(), return :  new Date().toLocaleDateString()} ) ;
  }

  deleteBooking() { 
    // TODO: remove from the array
  }

}
