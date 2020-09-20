import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginFormGroup: FormGroup; // refers to the new form group object created by form builder
  private subscription: Subscription;
  public failedMessage = null ; 

  constructor(public formBuilder: FormBuilder, public authentication: AuthenticationService) {

    // form builder should be used to create new form group
    this.loginFormGroup = formBuilder.group({
      // form control - default value and validators
      username: ["", Validators.compose([Validators.required, Validators.minLength(4)])],
      // form control - default value and validators
      password: ["", Validators.compose([Validators.required])]
    });

    // subscribing for the failed notification
    this.subscription = authentication.failedObservable.subscribe(() => {
      this.failedMessage = "Username and Password did not match" ;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  login() {
    this.failedMessage = null ;
    let username = this.loginFormGroup.controls.username.value;
    let password = this.loginFormGroup.controls.password.value;
    this.authentication.login({ username, password });
    // send the username and password to the server for validation and to obtain
    // the authentication ticket (JSON Web Token)
  }

}
