import { Component, OnInit, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent  {

  // 2
  constructor() {
    this.timezone = "GMT" ; 
    this.hour = 0 ; 
    this.minute = 0 ; 
  }

  // 3
  @Input() // can receive data from the parent
  public hour : number ; 

  @Input() // can receive data from the parent
  public minute : number ; 

  @Input() // can receive data from the parent
  public timezone : string ; 

  // 4: After the values comes from the parent first time
  ngOnInit() { 

  }

  // 5: HTML is created

  // 6
  @ViewChild("cnv", { static: true }) // as good as document.getElementById()
 // as good as document.getElementById()
  public canvas : ElementRef ; 
  // angfx will create ElementRef object containing canvas DOM reference in nativeElement property

  private timerId ;

  // 7: After @ViewChild data member is initialized
  ngAfterViewInit(/* this = reference of the AnalogClockComponent object */) {
    var ctx = this.canvas.nativeElement.getContext("2d");
    var radius = this.canvas.nativeElement.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90 ;

    this.drawClock(ctx, radius) ;
    this.timerId = window.setInterval(() => this.drawClock(ctx, radius), 1000);
  }

  drawClock(/* this = reference of the AnalogClockComponent object */ ctx, radius) {
    this.drawFace(ctx, radius);
    this.drawNumbers(ctx, radius);
    this.drawTime(ctx, radius);
  }

  drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
  }
  
  drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }
  
  drawTime(ctx, radius){

      var now = new Date();

      var hour = now.getUTCHours() + this.hour ;
      var minute = now.getUTCMinutes() + this.minute ;
      var second = now.getUTCSeconds();

      //hour
      hour=hour%12;
      hour=(hour*Math.PI/6)+
      (minute*Math.PI/(6*60))+
      (second*Math.PI/(360*60));
      this.drawHand(ctx, hour, radius*0.5, radius*0.07);
      //minute
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      this.drawHand(ctx, minute, radius*0.8, radius*0.07);
      // second
      second=(second*Math.PI/30);
      this.drawHand(ctx, second, radius*0.9, radius*0.02);
  }
  
  drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }

  // 8: Whenever input values come again from the parent
  ngOnChanges(changes: SimpleChanges) { 

  }

  // 9: this called just before component object is destroyed 
  ngOnDestroy() {
    window.clearInterval(this.timerId) ;
  }


}
