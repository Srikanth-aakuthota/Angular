import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(public testService : TestService) { }

  ngOnInit() {
    this.testService.getSingleOptionQuestions() ;
  }

}
