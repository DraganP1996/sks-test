import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OddData } from '../../store.model';

import { selectAll, OddState } from '../reducers/odd.reducer';


export const oddsFeatureSelector = createFeatureSelector<OddState>('odds');

export const oddsSelector = createSelector(
  oddsFeatureSelector,
  (state: OddState) => state
)

export const selectOddById = (oddId: number) => createSelector(
  oddsSelector,
  oddsState => oddsState.entities[oddId]
);

export const selectOddsByIds = (oddIds: number[]) => createSelector(
  oddsSelector,
  oddsState => {
    const odds = oddIds.map((id: number) => oddsState.entities[id]);

    return !!odds.length ? odds as OddData[] : [];
  }
);

export const getSelectedOdd = createSelector(
  oddsSelector,
  oddsState => oddsState.selectedOddId
);

export const selectAllOdds = createSelector(
  oddsFeatureSelector,
  selectAll
);

