import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveBetsRoutingModule } from './live-bets-routing.module';
import { LiveBetsComponent } from './live-bets.component';


@NgModule({
  declarations: [
    LiveBetsComponent
  ],
  imports: [
    CommonModule,
    LiveBetsRoutingModule
  ]
})
export class LiveBetsModule { }
