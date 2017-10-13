import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.css']
})
export class AppComponentComponent implements OnInit {

  emails = [{email: "bob@gmail.com", importance: true, subject: "You won a million dollars!", content: "You won a lottery that you didn't even enter!"},
  {email: "GEORGE@gmail.com", importance: false, subject: "I hate you.", content: "You are the absolute worst and I wish you would die."},
  {email: "paul@gmail.com", importance: true, subject: "I love you.", content: "You are the best and I wish we could be together forever."},
  {email: "john@gmail.com", importance: false, subject: "Insurance", content: "You should buy life insurance because George might kill you, and then what would Paul do?"},
  ]


  constructor() { }

  ngOnInit() {
  }

}
