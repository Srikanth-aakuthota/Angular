import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routes, AuthGuard } from "./routes";
import { RouterModule } from "@angular/router";
import { TestModule } from './test/test.module';
import { CalendarModule } from './calendar/calendar.module';
import { BookingModule } from './booking/booking.module';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoModule } from './demo/demo.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule, // contains code for DOM Access
    RouterModule.forRoot(routes), // routerLink, routerLinkActive, router-outlet, Router
    TestModule,// TestManagerComponent, Test1Component, :::
    CalendarModule, 
    BookingModule,
    DemoModule,
    HttpClientModule, // HttpClient 
    ReactiveFormsModule // FormBuilder, FormGroup, FormControl, Validators
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
