import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {

  constructor(public router: Router) { }

  ngOnInit() {
    this.router.navigateByUrl("/content/test") ;
  }
  
}
