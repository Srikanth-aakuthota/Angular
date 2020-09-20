import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestManagerComponent } from './test-manager/test-manager.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms" ;
import { TestService } from './test.service';

@NgModule({
  providers : [ TestService ],
  declarations: [TestManagerComponent, Test1Component, Test2Component, Test3Component, Test4Component],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class TestModule { }
