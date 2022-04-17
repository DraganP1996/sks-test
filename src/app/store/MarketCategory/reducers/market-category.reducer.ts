import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { MarketCategory, MarketCategoryResponse } from '../../store.model';
import * as MarketCategoryActions from '../actions/market-category.actions';

export const marketCategoryFeatureKey = 'MarketCategory';

export interface MarketCategoryState extends EntityState<MarketCategory> { 
  selectedMarketCategoryId: number | null;
};

export const adapter: EntityAdapter<MarketCategory> = createEntityAdapter<MarketCategory>();

export const initialState: MarketCategoryState = adapter.getInitialState({
  selectedMarketCategoryId: null
});

export const marketCategoryReducer = createReducer(
  initialState,

  on(MarketCategoryActions.upsertMarketCategories, (state, { marketCategories }) => {
    return adapter.upsertMany(marketCategories, state);
  }),

  on(MarketCategoryActions.loadMarketCategoriesSuccess, (state, { marketCategories }) => {
    return adapter.setAll(marketCategories, state);
  }),

  on(MarketCategoryActions.setMarketCategories, (state, { marketCategories }) => {
    return adapter.setMany(marketCategories, state);
  }),

  on(MarketCategoryActions.clearMarketCategories, state => {
    return adapter.removeAll({ ...state, selectedMarketCategoryId: null });
  })
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
