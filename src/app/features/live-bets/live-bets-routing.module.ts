import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveBetsComponent } from './live-bets.component';

const routes: Routes = [{ path: '', component: LiveBetsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveBetsRoutingModule { }
