import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as MarketActions from '../actions/market.actions';
import { MockDataService } from '../../mockData.service';
import { selectEvent } from '../../Event';



@Injectable()
export class MarketEffects {

  constructor(
    private actions$: Actions,
    private _mockDataService: MockDataService) {}


  loadMarkets$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(selectEvent),
      concatMap(payload =>
        this._mockDataService.getMarketsForEvent(payload.selectedEventId).pipe(
          map(markets => MarketActions.loadActiveMarketsForEventSuccess({ markets, eventId: payload.selectedEventId })),
          catchError(error => of(MarketActions.loadActiveMarketsForEventFailure({ error }))))
      )
    );
  });
}
