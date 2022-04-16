import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { loadGroupsSuccess } from '../../Group/actions/group.actions';
import { IEvent } from '../../store.model';
import * as EventActions from '../actions/event.actions';

export const eventFeatureKey = 'event';

export interface EventState extends EntityState<IEvent> { 
  topEventIds: number[];
};

export const adapter: EntityAdapter<IEvent> = createEntityAdapter<IEvent>();

export const initialState: EventState = adapter.getInitialState({
  topEventIds: []
});

export const eventReducer = createReducer(
  initialState,
  on(EventActions.loadTopEventsSuccess, (state, { ids }) => {
    return {
      ...state,
      topEventIds: ids
    }
  }),
  on(loadGroupsSuccess, (state, { events }) => {
    return adapter.addMany(events, state)
  }),
  on(EventActions.addEvent, (state, { event }) => {
    return adapter.addOne(event, state)
  }),
  on(EventActions.setEvent, (state, { event }) => {
    return adapter.setOne(event, state)
  }),
  on(EventActions.upsertEvent, (state, { event }) => {
    return adapter.upsertOne(event, state);
  }),
  on(EventActions.addEvents, (state, { events }) => {
    return adapter.addMany(events, state);
  }),
  on(EventActions.upsertEvents, (state, { events }) => {
    return adapter.upsertMany(events, state);
  }),
  on(EventActions.updateEvent, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(EventActions.updateEvents, (state, { updates }) => {
    return adapter.updateMany(updates, state);
  }),
  on(EventActions.mapEvent, (state, { entityMap }) => {
    return adapter.mapOne(entityMap, state);
  }),
  on(EventActions.mapEvents, (state, { entityMap }) => {
    return adapter.map(entityMap, state);
  }),
  on(EventActions.deleteEvent, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(EventActions.deleteEvents, (state, { ids }) => {
    return adapter.removeMany(ids, state);
  }),
  on(EventActions.deleteEventsByPredicate, (state, { predicate }) => {
    return adapter.removeMany(predicate, state);
  }),
  on(EventActions.loadEvents, (state, { events }) => {
    return adapter.setAll(events, state);
  }),
  on(EventActions.setEvents, (state, { events }) => {
    return adapter.setMany(events, state);
  }),
  on(EventActions.clearEvents, state => {
    return adapter.removeAll({ ...state, selectedEventId: null });
  })
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();