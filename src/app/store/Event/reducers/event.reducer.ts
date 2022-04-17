import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadGroupsSuccess } from '../../Group/actions/group.actions';
import { IEvent } from '../../store.model';
import * as EventActions from '../actions/event.actions';

export interface EventState extends EntityState<IEvent> { 
  topEventIds: number[];
  selectedEventId: number | null;
};

export const adapter: EntityAdapter<IEvent> = createEntityAdapter<IEvent>();

export const initialState: EventState = adapter.getInitialState({
  topEventIds: [],
  selectedEventId: null
});

export const eventReducer = createReducer(
  initialState,

  // Not sure if set all is the rigth choose here...
  on(EventActions.loadEvents, (state, { events }) => {
      return adapter.setAll(events, state);
  }),

  // Update top events
  on(EventActions.loadTopEventsSuccess, (state, { ids }) => {
    return { ...state, topEventIds: ids }
  }),

  // Loading of groups successfully
  on(loadGroupsSuccess, (state, { events }) => {
    return adapter.addMany(events, state)
  }),

  // Event selection
  on(EventActions.selectEvent, (state, { selectedEventId }) => {
    return {
      ...state,
      selectedEventId
    }
  }),

  // Add Events (maybe upser or some other strategy)
  on(EventActions.addEvents, (state, { events }) => {
    return adapter.addMany(events, state);
  }),

  // Upsert Events
  on(EventActions.upsertEvents, (state, { events }) => {
    return adapter.upsertMany(events, state);
  }),

  // Remove all events
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