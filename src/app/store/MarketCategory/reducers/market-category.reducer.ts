import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { MarketCategory } from '../../store.model';
import * as MarketCategoryActions from '../actions/market-category.actions';

export const marketCategoryFeatureKey = 'MarketCategory';

export interface MarketCategoryState extends EntityState<MarketCategory> { };

export const adapter: EntityAdapter<MarketCategory> = createEntityAdapter<MarketCategory>();

export const initialState: MarketCategoryState = adapter.getInitialState();

export const marketCategoryReducer = createReducer(
  initialState,
  on(MarketCategoryActions.addMarketCategory, (state, { marketCategory }) => {
    return adapter.addOne(marketCategory, state)
  }),
  on(MarketCategoryActions.setMarketCategory, (state, { marketCategory }) => {
    return adapter.setOne(marketCategory, state)
  }),
  on(MarketCategoryActions.upsertMarketCategory, (state, { marketCategory }) => {
    return adapter.upsertOne(marketCategory, state);
  }),
  on(MarketCategoryActions.addMarketCategories, (state, { marketCategories }) => {
    return adapter.addMany(marketCategories, state);
  }),
  on(MarketCategoryActions.upsertMarketCategories, (state, { marketCategories }) => {
    return adapter.upsertMany(marketCategories, state);
  }),
  on(MarketCategoryActions.updateMarketCategory, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(MarketCategoryActions.updateMarketCategories, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(MarketCategoryActions.mapMarketCategory, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(MarketCategoryActions.mapMarketCategories, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(MarketCategoryActions.deleteMarketCategory, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(MarketCategoryActions.deleteMarketCategories, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(MarketCategoryActions.deleteMarketCategoriesByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(MarketCategoryActions.loadMarketCategories, (state, { marketCategories }) => {
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
