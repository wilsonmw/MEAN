import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginRegComponent } from './guest/login-reg/login-reg.component';
import { DayBikeComponent } from './/guest/day-bike/day-bike.component';
import { ShowBikeComponent } from './dashboard/show-bike/show-bike.component';
import { EditBikeComponent } from './dashboard/edit-bike/edit-bike.component';
import { CreateBikeComponent } from './dashboard/create-bike/create-bike.component';
import { GuestComponent } from './guest/guest.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { BikeService } from './bike.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    DayBikeComponent,
    ShowBikeComponent,
    EditBikeComponent,
    CreateBikeComponent,
    GuestComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BikeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
