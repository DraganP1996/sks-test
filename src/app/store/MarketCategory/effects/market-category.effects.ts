import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as MarketCategoryActions from '../actions/market-category.actions';
import { MockDataService } from '../../mockData.service';
import { Market, MarketCategory } from '../../store.model';
import { selectEvent } from '../../Event';



@Injectable()
export class MarketCategoryEffects {

  constructor(
    private actions$: Actions,
    private _mockDataService: MockDataService) {}


  loadMarketCategories$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(selectEvent),
      concatMap(payload =>
        this._mockDataService.getMarketCategories(payload.selectedEventId).pipe(
          map(categories => {
            let markets: Market[] = [];

            const marketCategories = categories.map(categoriy => {
              const { id, Name, Order } = categoriy;
              const marketIds = categoriy.Markets.map(market => market.id);

              markets = [...markets, ...categoriy.Markets];

              return { id, Name, Order, Markets: marketIds }
            });
            return MarketCategoryActions.loadActiveMarketCategoriesSuccess({ marketCategories, markets, eventId: payload.selectedEventId });          
          }),
          catchError(error => of(MarketCategoryActions.loadActiveMarketCategoriesFailure({ error }))))
      )
    );
  });
}
