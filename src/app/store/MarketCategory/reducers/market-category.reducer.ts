import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { MarketCategory } from '../../store.model';
import * as MarketCategoryActions from '../actions/market-category.actions';

export const marketCategoryFeatureKey = 'MarketCategory';

export interface MarketCategoryState extends EntityState<MarketCategory<number>> { 
  selectedMarketCategoryId: number | null;
};

export const adapter: EntityAdapter<MarketCategory<number>> = createEntityAdapter<MarketCategory<number>>({
  selectId: (marketCategory: MarketCategory<number>) => marketCategory.Id,
});

export const initialState: MarketCategoryState = adapter.getInitialState({
  selectedMarketCategoryId: null
});

export const marketCategoryReducer = createReducer(
  initialState,

  on(MarketCategoryActions.upsertMarketCategories, (state, { marketCategories }) => {
    return adapter.upsertMany(marketCategories, state);
  }),

  on(MarketCategoryActions.loadActiveMarketCategoriesSuccess, (state, { marketCategories, eventId }) => {
    return adapter.upsertMany(marketCategories, state);
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
