(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{KZjK:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),u=function(){this.clocks=[{hour:0,minute:0,timezone:"GMT"},{hour:5,minute:30,timezone:"India"},{hour:-7,minute:-45,timezone:"Australia"},{hour:-9,minute:-30,timezone:"NewYork"}]},o=function(){},i=t("pMnS"),a=function(){function n(){this.timezone="GMT",this.hour=0,this.minute=0}return n.prototype.ngOnInit=function(){},n.prototype.ngAfterViewInit=function(){var n=this,l=this.canvas.nativeElement.getContext("2d"),t=this.canvas.nativeElement.height/2;l.translate(t,t),this.drawClock(l,t*=.9),this.timerId=window.setInterval((function(){return n.drawClock(l,t)}),1e3)},n.prototype.drawClock=function(n,l){this.drawFace(n,l),this.drawNumbers(n,l),this.drawTime(n,l)},n.prototype.drawFace=function(n,l){var t;n.beginPath(),n.arc(0,0,l,0,2*Math.PI),n.fillStyle="white",n.fill(),(t=n.createRadialGradient(0,0,.95*l,0,0,1.05*l)).addColorStop(0,"#333"),t.addColorStop(.5,"white"),t.addColorStop(1,"#333"),n.strokeStyle=t,n.lineWidth=.1*l,n.stroke(),n.beginPath(),n.arc(0,0,.1*l,0,2*Math.PI),n.fillStyle="#333",n.fill()},n.prototype.drawNumbers=function(n,l){var t,e;for(n.font=.15*l+"px arial",n.textBaseline="middle",n.textAlign="center",e=1;e<13;e++)t=e*Math.PI/6,n.rotate(t),n.translate(0,.85*-l),n.rotate(-t),n.fillText(e.toString(),0,0),n.rotate(t),n.translate(0,.85*l),n.rotate(-t)},n.prototype.drawTime=function(n,l){var t=new Date,e=t.getUTCHours()+this.hour,u=t.getUTCMinutes()+this.minute,o=t.getUTCSeconds();e=(e%=12)*Math.PI/6+u*Math.PI/360+o*Math.PI/21600,this.drawHand(n,e,.5*l,.07*l),u=u*Math.PI/30+o*Math.PI/1800,this.drawHand(n,u,.8*l,.07*l),o=o*Math.PI/30,this.drawHand(n,o,.9*l,.02*l)},n.prototype.drawHand=function(n,l,t,e){n.beginPath(),n.lineWidth=e,n.lineCap="round",n.moveTo(0,0),n.rotate(l),n.lineTo(0,-t),n.stroke(),n.rotate(-l)},n.prototype.ngOnChanges=function(n){},n.prototype.ngOnDestroy=function(){window.clearInterval(this.timerId)},n}(),r=e.nb({encapsulation:0,styles:[[""]],data:{}});function c(n){return e.Fb(0,[e.Cb(402653184,1,{canvas:0}),(n()(),e.pb(1,0,null,null,5,"div",[["class","card border-primary"]],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,2,"div",[["class","card-header bg-primary text-white"]],null,null,null,null,null)),(n()(),e.pb(3,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Eb(4,null,["",""])),(n()(),e.pb(5,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.pb(6,0,[[1,0],["cnv",1]],null,0,"canvas",[["height","300"],["width","300"]],null,null,null,null,null))],null,(function(n,l){n(l,4,0,l.component.timezone)}))}var s=t("SVse"),d=e.nb({encapsulation:0,styles:[[""]],data:{}});function h(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","col-3"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"analog-clock",[],null,null,null,c,r)),e.ob(2,4964352,null,0,a,[],{hour:[0,"hour"],minute:[1,"minute"],timezone:[2,"timezone"]},null)],(function(n,l){n(l,2,0,l.context.$implicit.hour,l.context.$implicit.minute,l.context.$implicit.timezone)}),null)}function p(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,h)),e.ob(2,278528,null,0,s.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.clocks)}),null)}var b=e.lb("app-clock-manager",u,(function(n){return e.Fb(0,[(n()(),e.pb(0,0,null,null,1,"app-clock-manager",[],null,null,null,p,d)),e.ob(1,49152,null,0,u,[],null,null)],null,null)}),{},{},[]),m=t("iInd");t.d(l,"ClockModuleNgFactory",(function(){return f}));var f=e.mb(o,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[i.a,b]],[3,e.j],e.v]),e.zb(4608,s.k,s.j,[e.s,[2,s.q]]),e.zb(1073742336,s.b,s.b,[]),e.zb(1073742336,m.o,m.o,[[2,m.t],[2,m.k]]),e.zb(1073742336,o,o,[]),e.zb(1024,m.i,(function(){return[[{path:"",component:u}]]}),[])])}))}}]);