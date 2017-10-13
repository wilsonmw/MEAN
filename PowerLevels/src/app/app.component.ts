import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  power: number;
  displayPower = {};
  
  onSubmit(){
    console.log("***********************************")
    this.displayPower = {
      human: this.power,
      saiyan: this.power*10,
      supersaiyan: this.power*90,
      supersaiyantwo: this.power*150,
      supersaiyanthree: this.power*250,
      supersaiyanfour: this.power*500
  
    }
    return this.displayPower;
  }
}
