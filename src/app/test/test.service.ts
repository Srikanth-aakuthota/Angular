import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {

  private baseUrl = "http://localhost:5200";

  public singleOptionQuestions = null;
  public multiOptionQuestions = null;

  constructor(public http: HttpClient) { }

  getSingleOptionQuestions() {

    if (this.singleOptionQuestions !== null)
      return;

    this.http.get(`${this.baseUrl}/singleoptionquestions`).toPromise()
      .then(singleOptionQuestions => {
        this.singleOptionQuestions = singleOptionQuestions;
      })
      .catch(() => {

      });

  }

  getMultiOptionQuestions() {

    if (this.multiOptionQuestions !== null)
      return;

    this.http.get(`${this.baseUrl}/multioptionquestions`).toPromise()
      .then(multiOptionQuestions => {
        this.multiOptionQuestions = multiOptionQuestions;
      })
      .catch(() => {

      });
  }

}
