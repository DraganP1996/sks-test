import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as MarketActions from '../actions/market.actions';
import { MockDataService } from '../../mockData.service';



@Injectable()
export class MarketEffects {

  constructor(
    private actions$: Actions,
    private _mockDataService: MockDataService) {}


  loadMarkets$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(MarketActions.loadMarkets),
      concatMap(payload =>
        this._mockDataService.getMarketsForEvent(payload.eventId).pipe(
          map(markets => MarketActions.loadMarketsSuccess({ markets })),
          catchError(error => of(MarketActions.loadMarketsFailure({ error }))))
      )
    );
  });
}
