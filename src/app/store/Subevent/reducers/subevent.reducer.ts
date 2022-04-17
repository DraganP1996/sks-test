import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
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

  on(SubeventActions.loadSubevents, (state, { subevents }) => {
    return adapter.setAll(subevents, state);
  }),

  on(SubeventActions.loadSubeventsSuccess, (state, { subEvents }) => {
    return adapter.upsertMany(subEvents, state);
  }),

  on(SubeventActions.upsertSubevents, (state, { subevents }) => {
    return adapter.upsertMany(subevents, state);
  }),

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