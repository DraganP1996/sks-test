import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarketCategoryState, selectAll } from '../reducers/market-category.reducer';

export const marketCategoriesFeatureState = createFeatureSelector<MarketCategoryState>('marketCategories');

export const marketCategoriesSelector = createSelector(
  marketCategoriesFeatureState,
  (state: MarketCategoryState) => state
);

export const selectmarketCategoryById = (marketCategoryId: number) => createSelector(
  marketCategoriesSelector,
  marketCategoryState => marketCategoryState.entities[marketCategoryId]
);


export const selectAllCourses = createSelector(
  marketCategoriesSelector,
  selectAll
);
