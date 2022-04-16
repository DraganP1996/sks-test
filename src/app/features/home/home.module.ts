import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SportListComponent } from './sport-list/sport-list.component';
import { BetEventDetailsComponent } from './bet-event-details/bet-event-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    SportListComponent,
    BetEventDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
