import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as MarketActions from '../actions/market.actions';



@Injectable()
export class MarketEffects {

  loadMarkets$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(MarketActions.loadMarkets),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => MarketActions.loadMarketsSuccess({ data })),
          catchError(error => of(MarketActions.loadMarketsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
