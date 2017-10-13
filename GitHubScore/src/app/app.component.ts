import { Component } from '@angular/core';
import { GetscoreService } from './getscore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = "";
  user;
  doesNotExist;
  score;

  constructor(private _getscoreService: GetscoreService){}

  getUser(){
    this.user = this._getscoreService.apiCall(this.username);
    if(this.user){
      this.user.then((user) => {
        if(user.id){
          this.doesNotExist = false;
          this.score = user.public_repos + user.followers;
        }
        else{
          this.doesNotExist = true;
          this.score = null;
        }
        this.username = null;
      })
      .catch((err)=>{
        this.doesNotExist = true;
      });
      }
      else{
        this.doesNotExist = true;
      }
    }
  }
