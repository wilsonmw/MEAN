import { Component, OnInit, Input } from '@angular/core';
import { GetscoreService } from './../getscore.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  user;
  @Input() score;
  constructor(private _getscoreService: GetscoreService) { }



  ngOnInit() {
  }

}
