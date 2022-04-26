import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SportListComponent } from './sport-list/sport-list.component';
import { BetEventDetailsComponent } from './bet-event-details/bet-event-details.component';
import { ListItemModule } from 'src/app/shared/components/list-item/list-item.module';
import { EventListComponent } from './bet-event-details/event-list/event-list.component';
import { SubeventListComponent } from './bet-event-details/subevent-list/subevent-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    SportListComponent,
    BetEventDetailsComponent,
    EventListComponent,
    SubeventListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ListItemModule
  ]
})
export class HomeModule { }
