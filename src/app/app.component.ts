import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private subscription1 : Subscription ;
  private subscription2 : Subscription ;
 
  constructor(public router : Router, public authentication : AuthenticationService) {
    
    this.subscription1 = authentication.successObservable.subscribe(() => {
      this.router.navigateByUrl("content");
    }) ;

    this.subscription2 = authentication.logoutObservable.subscribe(() => {
      this.router.navigateByUrl("login");
    }) ;

  }

  ngOnDestroy() { 
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  ngOnInit() {
    this.router.navigateByUrl("bookings") ;
  }

}
