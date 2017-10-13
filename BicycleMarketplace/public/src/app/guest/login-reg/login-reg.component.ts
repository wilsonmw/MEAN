import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  loginError: any;

  user = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  regUser = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    pwConfirm: "",
  };

  loginUser = {
    email: "",
    password: ""
  }

  constructor(private _userService: UserService, private _route: ActivatedRoute) {
    this._userService.errorObserver.subscribe(error => {
      this.loginError = error;
    })
   }

  regSubmit(){
    this.user.first_name = this.regUser.first_name;
    this.user.last_name = this.regUser.last_name;
    this.user.email = this.regUser.email;
    this.user.password = this.regUser.password;
    this._userService.createUser(this.user);
    this.user = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  loginSubmit(){
    this._userService.login(this.loginUser);
  }
  ngOnInit() {
  }

}
