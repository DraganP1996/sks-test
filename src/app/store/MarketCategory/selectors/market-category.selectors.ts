import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarketCategory } from '../../store.model';
import * as fromMarketCategory from '../reducers/market-category.reducer';

export const selectMarketCategoryState = createFeatureSelector<fromMarketCategory.MarketCategoryState>(
  fromMarketCategory.marketCategoryFeatureKey
);

export const selectMarketCategorysState = createFeatureSelector<EntityState<MarketCategory>>('marketCategory');

export const selectmarketCategoryById = (marketCategoryId: number) => createSelector(
  selectMarketCategorysState,
  marketCategoryState => marketCategoryState.entities[marketCategoryId]
);


export const selectAllCourses = createSelector(
  selectMarketCategorysState,
  fromMarketCategory.selectAll
);
