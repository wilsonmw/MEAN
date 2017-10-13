import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  upVote(){
    this.quote.votes += 1;
  }
  downVote(){
    this.quote.votes -= 1;
  }
  // delete(){
  //   console.log(this.idx)
  //   this.quotes.splice(this.idx);
  // }
  constructor() { }
  @Input() quote;
  @Input() idx;
  @Output() addingVotes = new EventEmitter();
  @Output() deleteQuote = new EventEmitter();
  @Output() subtractingVotes = new EventEmitter();
  // @Input() quotes;
  addVotes(idx){
    this.addingVotes.emit(idx);
  }
  delete(idx){
    this.deleteQuote.emit(idx);
  }
  subtractVotes(idx){
    this.subtractingVotes.emit(idx);
  }

  ngOnInit() {
  }


}
