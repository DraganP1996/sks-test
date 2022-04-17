import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { OddActions } from '..';
import { OddData } from '../../store.model';
import { loadSubeventsSuccess } from '../../Subevent';

export interface OddState extends EntityState<OddData> {
  selectedOddId: number | null;
};

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
    return adapter.upsertMany(odds, state);
  }),

  on(OddActions.selectOdd, (state, { id }) => {
    return {
      ...state,
      selectedOddId: id
    };
  })
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
