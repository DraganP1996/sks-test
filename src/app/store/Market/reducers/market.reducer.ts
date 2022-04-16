import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Market } from '../../store.model';
import * as MarketActions from '../actions/market.actions';

export const marketFeatureKey = 'marketCategory';

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
  on(MarketActions.addMarket, (state, { marketCategory }) => {
    return adapter.addOne(marketCategory, state)
  }),
  on(MarketActions.setMarket, (state, { marketCategory }) => {
    return adapter.setOne(marketCategory, state)
  }),
  on(MarketActions.upsertMarket, (state, { marketCategory }) => {
    return adapter.upsertOne(marketCategory, state);
  }),
  on(MarketActions.addMarkets, (state, { marketCategorys }) => {
    return adapter.addMany(marketCategorys, state);
  }),
  on(MarketActions.upsertMarkets, (state, { marketCategorys }) => {
    return adapter.upsertMany(marketCategorys, state);
  }),
  on(MarketActions.updateMarket, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(MarketActions.updateMarkets, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(MarketActions.mapMarket, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(MarketActions.mapMarkets, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(MarketActions.deleteMarket, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(MarketActions.deleteMarkets, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(MarketActions.deleteMarketsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(MarketActions.loadMarkets, (state, { marketCategorys }) => {
    return adapter.setAll(marketCategorys, state);
  }),
  on(MarketActions.setMarkets, (state, { marketCategorys }) => {
    return adapter.setMany(marketCategorys, state);
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
