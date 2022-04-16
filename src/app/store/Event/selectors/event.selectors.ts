import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEvent } from '../../store.model';
import { EventState, selectAll } from '../reducers/event.reducer';

export const eventFeatureStoreState = createFeatureSelector<EventState>('events');

export const eventsSelector = createSelector(
  eventFeatureStoreState,
  (state: EventState) => state
);

export const selectEventById = (eventId: number) => createSelector(
  eventsSelector,
  eventState => eventState.entities[eventId]
);


export const selectAllEvents = createSelector(
  eventsSelector,
  selectAll
);

export const selectTopEventIds = createSelector(
  eventsSelector,
  eventState => eventState.topEventIds
);

export const selectEventsByIds = (eventIds: number[]) => createSelector(
  eventsSelector,
  eventState => {
    const events = eventIds.map((id: number) => eventState.entities[id]);

    return !!events.length ? events as IEvent[] : [];
  }
);

export const selectEventsForGroup = (groupId: number) => createSelector(
  selectAllEvents,
  event => event.filter(event => event.GroupId === groupId)
);
