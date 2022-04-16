import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { allEffects } from './effects';
import { reducers } from './reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([...allEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class MainAppStoreModule { }
