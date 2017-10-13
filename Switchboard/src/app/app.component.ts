import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  switches = [true, false, true, false, true, false, true, false, true, false];
  flipSwitch(idx){
    if(this.switches[idx]==true){
      this.switches[idx]=false;
      return this.switches;
    }
    if(this.switches[idx]==false){
      this.switches[idx]=true;
      return this.switches;
    }
  }
}
