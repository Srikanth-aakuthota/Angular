import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // subjects are used for raising notifications
  public successSubject = new Subject<any>()  ;
  public failedSubject = new Subject<any>()  ;
  public logoutSubject = new Subject<any>()  ;

  // observables are used for subscribing to receive notifications
  public successObservable = this.successSubject.asObservable();
  public failedObservable = this.failedSubject.asObservable();
  public logoutObservable = this.logoutSubject.asObservable();


  private baseUrl = "http://localhost:5200";

  public isLoginInProgress = false;
  public isUserAuthenticated = false;
  public token = null;

  constructor(public http: HttpClient) { }

  logout() {
    this.isUserAuthenticated = false ; 
    this.token = null;
    this.logoutSubject.next(null);
  } 

  login(credentials) {

    this.isLoginInProgress = true;

    this.http.post(`${this.baseUrl}/login`, credentials).toPromise()
      .then((result: any) => {
        
        this.isUserAuthenticated = result.status === "success";
        this.token = this.isUserAuthenticated ? result.token : null;
        this.isLoginInProgress = false;

        if ( this.isUserAuthenticated)
          this.successSubject.next(null); // raising the notification
        else
          this.failedSubject.next(null) ; // raising the notification

      })
      .catch(() => this.isLoginInProgress = false);

  }

}
