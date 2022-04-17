import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Market } from '../../store.model';
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

export const selectMarketByIds = (marketIds: number[]) => createSelector(
  marketFeatureSelector,
  marketState => {
    const markets: Market[] = [];

    marketIds.forEach(marketId => {
      if (marketState.entities[marketId]) 
        markets.push(marketState.entities[marketId]!)});

    return markets;
  }
);

export const selectAllCourses = createSelector(
  marketsSelector,
  selectAll
);