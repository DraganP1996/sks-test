import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as MarketCategoryActions from '../actions/market-category.actions';



@Injectable()
export class MarketCategoryEffects {

  loadMarketCategories$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(MarketCategoryActions.loadMarketCategories),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => MarketCategoryActions.loadMarketCategoriesSuccess({ data })),
          catchError(error => of(MarketCategoryActions.loadMarketCategoriesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
