import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { OddActions } from '..';
import { OddData } from '../../store.model';
import {
  loadSubeventQuotasSuccess,
  loadSubeventsSuccess,
} from '../../Subevent';

export interface OddState extends EntityState<OddData> {
  selectedOddId: number | null;
}

export const adapter: EntityAdapter<OddData> = createEntityAdapter<OddData>({
  selectId: (odd: OddData) => odd.Id,
});

export const initialState: OddState = adapter.getInitialState({
  selectedOddId: null,
});

export const oddReducer = createReducer(
  initialState,

  on(OddActions.loadOddsSuccess, (state, { odds }) => {
    return adapter.setAll(odds, state);
  }),

  on(loadSubeventsSuccess, (state, { odds }) => {
    return adapter.setMany(odds, state);
  }),

  on(OddActions.selectOdd, (state, { id }) => {
    return {
      ...state,
      selectedOddId: id,
    };
  }),

  // Load Sub Events Quotas Success
  on(loadSubeventQuotasSuccess, (state, { odds }) => {
    return adapter.setMany(odds, state);
  })
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
