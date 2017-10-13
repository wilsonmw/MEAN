import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes = [];
  quote = {
    content: "",
    author: "",
    votes: 0,
  };

  onSubmit(){
    console.log(this.quote);
    console.log(this.quote.author);
    console.log(this.quote.content);
    this.quotes.push(this.quote);
    console.log(this.quotes[0].content);
    this.quote = {
      content: "",
      author: "",
      votes: 0
    }
    return;
  }
  addVotes(idx){
    this.quotes[idx].votes += 1;
    return;
  }
  subtractVotes(idx){
    this.quotes[idx].votes -=1;
    return;
  }
  delete(idx){
    this.quotes.splice(idx, 1);
    return;
  }
}
