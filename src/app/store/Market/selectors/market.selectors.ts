import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarketState, selectAll } from '../reducers/market.reducer';

export const marketFeatureSelector = createFeatureSelector<MarketState>('markets');

export const marketsSelector = createSelector(
  marketFeatureSelector,
  (state: MarketState) => state
);

export const selectMarketById = (marketId: number) => createSelector(
  marketFeatureSelector,
  marketState => marketState.entities[marketId]
);

export const selectAllCourses = createSelector(
  marketsSelector,
  selectAll
);