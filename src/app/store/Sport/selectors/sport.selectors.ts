import { createFeatureSelector, createSelector } from '@ngrx/store';

import { selectAll, SportState } from '../reducers/sport.reducer';


export const sportsFeatureSelector = createFeatureSelector<SportState>('sports');

export const sportsSelector = createSelector(
  sportsFeatureSelector,
  (state: SportState) => state
)

export const selectsportById = (sportId: number) => createSelector(
  sportsSelector,
  sportState => sportState.entities[sportId]
);

export const getSelectedSport = createSelector(
  sportsSelector,
  sportState => sportState.selectedSportId as number
);

export const selectAllSports = createSelector(
  sportsFeatureSelector,
  selectAll
);

