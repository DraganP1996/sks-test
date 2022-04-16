import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { SportActions } from '../index';

import { Sport } from '../../store.model';

export const sportFeatureKey = 'sport';

export interface SportState extends EntityState<Sport> {
  selectedSportId: number | null;
};

export const adapter: EntityAdapter<Sport> = createEntityAdapter<Sport>();

export const initialState: SportState = adapter.getInitialState({
  // additional entity state properties
  selectedSportId: null,
});

export const sportReducer = createReducer(
  initialState,
  // on(SportActions.addSport, (state, { sport }) => {
  //   return adapter.addOne(sport, state)
  // }),
  // on(SportActions.setSport, (state, { sport }) => {
  //   return adapter.setOne(sport, state)
  // }),
  // on(SportActions.upsertSport, (state, { sport }) => {
  //   return adapter.upsertOne(sport, state);
  // }),
  // on(SportActions.addSports, (state, { sports }) => {
  //   return adapter.addMany(sports, state);
  // }),
  // on(SportActions.upsertSports, (state, { sports }) => {
  //   return adapter.upsertMany(sports, state);
  // }),
  // on(SportActions.updateSport, (state, { update }) => {
  //   return adapter.updateOne(update, state);
  // }),
  // on(SportActions.updateSports, (state, { updates }) => {
  //   return adapter.updateMany(updates, state);
  // }),
  // on(SportActions.mapSport, (state, { entityMap }) => {
  //   return adapter.mapOne(entityMap, state);
  // }),
  // on(SportActions.mapSports, (state, { entityMap }) => {
  //   return adapter.map(entityMap, state);
  // }),
  // on(SportActions.deleteSport, (state, { id }) => {
  //   return adapter.removeOne(id, state);
  // }),
  // on(SportActions.deleteSports, (state, { ids }) => {
  //   return adapter.removeMany(ids, state);
  // }),
  // on(SportActions.deleteSportsByPredicate, (state, { predicate }) => {
  //   return adapter.removeMany(predicate, state);
  // }),
  on(SportActions.loadSportsSuccess, (state, { sports }) => {
    return adapter.setAll(sports, state);
  }),
  on(SportActions.selectSport, (state, { id }) => {
    return {
      ...state,
      selectedSportId: id
    };
  }),
  // on(SportActions.setSports, (state, { sports }) => {
  //   return adapter.setMany(sports, state);
  // }),
  // on(SportActions.clearSports, state => {
  //   return adapter.removeAll({ ...state, selectedSportId: null });
  // })
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
