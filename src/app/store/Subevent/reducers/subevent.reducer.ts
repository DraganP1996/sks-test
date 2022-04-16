import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { SubEvent } from '../../store.model';
import * as SubeventActions from '../actions/subevent.actions';

export const SubeventFeatureKey = 'Subevent';

export const subeventFeatureKey = 'subevent';

export interface SubEventState extends EntityState<SubEvent> {
  selectedSubEventIds: number[] | null;
};

export const adapter: EntityAdapter<SubEvent> = createEntityAdapter<SubEvent>();

export const initialState: SubEventState = adapter.getInitialState({
  // additional entity state properties
  selectedSubEventIds: null,
});

export const subeventReducer = createReducer(
  initialState,
  on(SubeventActions.addSubevent, (state, { subevent }) => {
    return adapter.addOne(subevent, state)
  }),
  on(SubeventActions.setSubevent, (state, { subevent }) => {
    return adapter.setOne(subevent, state)
  }),
  on(SubeventActions.upsertSubevent, (state, { subevent }) => {
    return adapter.upsertOne(subevent, state);
  }),
  on(SubeventActions.addSubevents, (state, { subevents }) => {
    return adapter.addMany(subevents, state);
  }),
  on(SubeventActions.upsertSubevents, (state, { subevents }) => {
    return adapter.upsertMany(subevents, state);
  }),
  on(SubeventActions.updateSubevent, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(SubeventActions.updateSubevents, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(SubeventActions.mapSubevent, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(SubeventActions.deleteSubevent, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(SubeventActions.deleteSubevents, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(SubeventActions.deleteSubeventsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(SubeventActions.loadSubevents, (state, { subevents }) => {
    return adapter.setAll(subevents, state);
  }),
  on(SubeventActions.setSubevents, (state, { subevents }) => {
    return adapter.setMany(subevents, state);
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