import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { loadMarketCategoriesSuccess } from '../../MarketCategory';
import { Market } from '../../store.model';
import * as MarketActions from '../actions/market.actions';

export interface MarketState extends EntityState<Market> {
  selectedMarketIds: number[] | null;
};

export const adapter: EntityAdapter<Market> = createEntityAdapter<Market>();

export const initialState: MarketState = adapter.getInitialState({
  // additional entity state properties
  selectedMarketIds: null,
});

export const marketReducer = createReducer(
  initialState,

  on(MarketActions.upsertMarkets, (state, { markets }) => {
    return adapter.upsertMany(markets, state);
  }),

  on(MarketActions.loadMarketsSuccess, (state, { markets }) => {
    return adapter.setAll(markets, state);
  }),

  on(MarketActions.setMarkets, (state, { markets }) => {
    return adapter.setMany(markets, state);
  }),

  on(MarketActions.clearMarkets, state => {
    return adapter.removeAll({ ...state, selectedMarketId: null });
  })
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
