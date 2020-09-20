import { Route, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { TestManagerComponent } from './test/test-manager/test-manager.component';
import { ClockManagerComponent } from './clock/clock-manager/clock-manager.component';
import { CalendarManagerComponent } from './calendar/calendar-manager/calendar-manager.component';
import { BookingManagerComponent } from './booking/booking-manager/booking-manager.component';
import { Test1Component } from './test/test1/test1.component';
import { Test2Component } from './test/test2/test2.component';
import { Test3Component } from './test/test3/test3.component';
import { Test4Component } from './test/test4/test4.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authentication: AuthenticationService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authentication.isUserAuthenticated) {
        return true;
    }

    // navigate to login page
    this.router.navigate(['/login']);
  
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}

export let routes: Array<Route> = [
    
    {
        path : "demo1", component : Demo1Component
    },

    {
        path : "demo2", component : Demo2Component
    },

    {
        path: "login", component: LoginComponent
    },

    {
        path: "bookings", component: BookingManagerComponent
    },

    {
        path: "content", component: ContentComponent,
        canActivate : [AuthGuard], 
        children: [
            {
                path: "test", component: TestManagerComponent,
                canActivate : [AuthGuard],  
                children: [
                    {
                        path: "test1", component: Test1Component
                    },
                    {
                        path: "test2", component: Test2Component
                    },
                    {
                        path: "test3", component: Test3Component
                    },
                    {
                        path: "test4", component: Test4Component
                    }
                ]
            },
            {
                path: "clocks", loadChildren: () => import('./clock/clock.module').then(m => m.ClockModule),
                canActivate : [AuthGuard]
            },
            {
                path: "calendars", component: CalendarManagerComponent,
                canActivate : [AuthGuard],  
            },
            {
                path: "bookings", component: BookingManagerComponent,
                canActivate : [AuthGuard],  
            },
        ]
    },



    // {
    //     path : "",
    //     redirectTo : "test",
    //     pathMatch : "full"
    // }

];