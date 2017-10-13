import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Time Zone Display';
  now;
  pswitch = false;
  mswitch = false;
  cswitch = false;
  eswitch = false;

  getTime(tz){
    this.now = new Date();
    console.log(tz);
    if(tz=="PST"){
      this.pswitch=true;
      this.mswitch=false;
      this.cswitch=false;
      this.eswitch=false;
      return this.now;
    }
    if(tz=="MST"){
      console.log(tz);
      this.now = this.now.setHours(this.now.getHours()+1);
      this.mswitch=true;
      this.pswitch=false;
      this.cswitch=false;
      this.eswitch=false;
      return this.now;
    }
    if(tz=="CST"){
      console.log(tz);
      this.now = this.now.setHours(this.now.getHours()+2);
      this.cswitch=true;
      this.pswitch=false;
      this.mswitch=false;
      this.eswitch=false;
      return this.now;
    }
    if(tz=="EST"){
      console.log(tz);
      this.now = this.now.setHours(this.now.getHours()+3);
      this.eswitch=true;
      this.pswitch=false;
      this.mswitch=false;
      this.cswitch=false;
      return this.now;
    }
  }

  clear(){
    this.now = null;
    this.pswitch=false;
    this.mswitch=false;
    this.cswitch=false;
    this.eswitch=false;
    return;
  }
}
