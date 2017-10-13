import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  successMess = false;
  user = new User();
  users = [];
  onSubmit(){
    this.successMess = true;
    delete this.user["pwConfirm"]
    this.users.push(this.user);
    this.user = new User();
  }
}
