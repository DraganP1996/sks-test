import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Market } from '../../store.model';
import * as fromMarket from '../reducers/market.reducer';

export const selectMarketState = createFeatureSelector<fromMarket.MarketState>(
  fromMarket.marketFeatureKey
);


export const selectMarketsState = createFeatureSelector<EntityState<Market>>('market');

export const selectmarketById = (marketId: number) => createSelector(
  selectMarketsState,
  marketState => marketState.entities[marketId]
);


export const selectAllCourses = createSelector(
  selectMarketsState,
  fromMarket.selectAll
);