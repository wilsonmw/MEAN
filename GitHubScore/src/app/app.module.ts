import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetscoreService } from './getscore.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GetscoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
