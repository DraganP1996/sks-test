import { createFeatureSelector, createSelector } from '@ngrx/store';

import { selectAll, OddState } from '../reducers/odd.reducer';


export const oddsFeatureSelector = createFeatureSelector<OddState>('odds');

export const oddsSelector = createSelector(
  oddsFeatureSelector,
  (state: OddState) => state
)

export const selectoddById = (oddId: number) => createSelector(
  oddsSelector,
  oddsState => oddsState.entities[oddId]
);

export const getSelectedOdd = createSelector(
  oddsSelector,
  oddsState => oddsState.selectedOddId
);

export const selectAllOdds = createSelector(
  oddsFeatureSelector,
  selectAll
);

