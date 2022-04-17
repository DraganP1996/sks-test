import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarketCategory } from '../../store.model';
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

export const selectMarketCategoriesByIds = (marketCategoryIds: number[]) => createSelector(
  marketCategoriesSelector,
  marketCategoryState => {
    const categories: MarketCategory<number>[] = [];

    marketCategoryIds.forEach(marketCategoryId => {
      if (!!marketCategoryState.entities[marketCategoryId]) 
        categories.push(marketCategoryState.entities[marketCategoryId]!)
      });
    
    return categories;
  }
);



export const selectAllCourses = createSelector(
  marketCategoriesSelector,
  selectAll
);
