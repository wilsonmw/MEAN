import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Barcode Generator';
  barcode = [1,2,3,4,5,6,7,8,9,10];
  colors = ['lightsteelblue', 'lightsalmon', 'linen', 'magenta', 'moccasin', 'orchid', 'black', 'navy', 'mediumblue', 'blue', 'green', 'teal', 'cyan', 'lime', 'royalblue', 'indigo', 'dimgray', 'maroon', 'purple', 'olive', 'darkred', 'saddlebrown', 'yellowgreen', 'firebrick', 'indianred', 'crimson', 'red', 'orange', 'yellow'];
  colorNum = this.colors.length-1;
  randNum(){
    var colorIdx = Math.floor(Math.random()*this.colorNum);
    return colorIdx;
  }
}
