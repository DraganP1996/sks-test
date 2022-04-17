import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { SubEvent } from '../../store.model';
import * as SubeventActions from '../actions/subevent.actions';

export interface SubEventState extends EntityState<SubEvent<number>> {
  selectedSubEventIds: number[] | null;
};

export const adapter: EntityAdapter<SubEvent<number>> = createEntityAdapter<SubEvent<number>>({
  selectId: (subEvent: SubEvent<number>) => subEvent.Id,
});

export const initialState: SubEventState = adapter.getInitialState({
  selectedSubEventIds: null,
});

export const subeventReducer = createReducer(
  initialState,

  // Load Sub Events Success
  on(SubeventActions.loadSubeventsSuccess, (state, { subEvents }) => {
    return adapter.upsertMany(subEvents, state);
  }),

  // Clear Subevents
  on(SubeventActions.clearSubevents, state => {
    return adapter.removeAll({ ...state, selectedSubEventId: null });
  })
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();