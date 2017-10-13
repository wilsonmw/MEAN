import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  loginError;

  errorObserver = new BehaviorSubject(this.loginError);

  user = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  constructor(private _http: Http, private _route: ActivatedRoute, private _router: Router) { }

  createUser(user){
    this._http.post('/user', user).subscribe(
      (response)=>{response.json();
        console.log("came back from database successfully.");
        console.log(response.json()._id);
        this._router.navigate(['/dashboard']);
      },
      (err)=>{
        console.log("user not created successfully at service.ts level.");
      }
    )
  }

  login(user){
    this._http.post('/userLogin', user).subscribe(
      (response)=>{
        console.log("got user");
        console.log(response);
        if(response.json() == null){
          this.loginError = true;
          this.errorObserver.next(this.loginError);
          console.log(this.loginError);
        } else {
          this.loginError = false;
          this._router.navigate(['/dashboard']);
        }
      },
      (err)=>{
        console.log("didn't get user");
      }
    )
  }

  // getCurUser(id){
  //   console.log("Got to the Get Current User function.");
  //   this._http.get('/user', id).subscribe(
  //     (response)=>{response.json();
  //       console.log("Get current User function successful response.");
  //     },
  //     (err)=>{
  //       console.log("User not retrieved in Get current User function.");
  //     }
  //   )
  // }
}
