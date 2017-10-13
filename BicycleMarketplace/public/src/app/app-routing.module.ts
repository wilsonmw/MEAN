import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginRegComponent } from './guest/login-reg/login-reg.component';
import { DayBikeComponent } from './guest/day-bike/day-bike.component';
import { ShowBikeComponent } from './dashboard/show-bike/show-bike.component';
import { EditBikeComponent } from './dashboard/edit-bike/edit-bike.component';
import { CreateBikeComponent } from './dashboard/create-bike/create-bike.component';
import { GuestComponent } from './guest/guest.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'', component: GuestComponent},
  {path:'dashboard', component: DashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
