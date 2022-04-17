import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as MarketCategoryActions from '../actions/market-category.actions';
import { MockDataService } from '../../mockData.service';
import { Market, MarketCategory } from '../../store.model';



@Injectable()
export class MarketCategoryEffects {

  constructor(
    private actions$: Actions,
    private _mockDataService: MockDataService) {}


  loadMarketCategories$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(MarketCategoryActions.loadMarketCategories),
      concatMap(() =>
        this._mockDataService.getMarketCategories().pipe(
          map(marketCategories => {
            let markets: Market[] = [];

            const formattedMarketCategories = marketCategories.map(marketCategory => {
              const { id, Name, Order } = marketCategory;
              const marketIds = marketCategory.Markets.map(market => market.id);

              markets = [...markets, ...marketCategory.Markets];

              return { id, Name, Order, Markets: marketIds }
            });
            return MarketCategoryActions.loadMarketCategoriesSuccess({ marketCategories:  formattedMarketCategories })
          
          }),
          catchError(error => of(MarketCategoryActions.loadMarketCategoriesFailure({ error }))))
      )
    );
  });
}
