import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { SportActions } from '..';
import { Sport } from '../../store.model';

export interface SportState extends EntityState<Sport> {
  selectedSportId: number | null;
};

export const adapter: EntityAdapter<Sport> = createEntityAdapter<Sport>({
  selectId: (sport: Sport) => sport.Id,
});

export const initialState: SportState = adapter.getInitialState({
  selectedSportId: null,
});

export const sportReducer = createReducer(
  initialState,

  on(SportActions.loadSportsSuccess, (state, { sports }) => {
    return adapter.setAll(sports, state);
  }),

  on(SportActions.selectSport, (state, { id }) => {
    return {
      ...state,
      selectedSportId: id
    };
  })
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
