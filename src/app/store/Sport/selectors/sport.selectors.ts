import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Sport } from '../../store.model';
import * as fromSport from '../reducers/sport.reducer';

export const selectSportState = createFeatureSelector<fromSport.SportState>(
  fromSport.sportFeatureKey
);


export const selectSportsState = createFeatureSelector<EntityState<Sport>>('sport');

export const selectsportById = (sportId: number) => createSelector(
  selectSportsState,
  sportState => sportState.entities[sportId]
);


export const selectAllCourses = createSelector(
  selectSportsState,
  fromSport.selectAll
);

