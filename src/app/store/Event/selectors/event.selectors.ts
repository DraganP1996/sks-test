import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEvent } from '../../store.model';
import { EventState, selectAll } from '../reducers/event.reducer';

export const eventFeatureStoreState = createFeatureSelector<EventState>('events');

export const eventsSelector = createSelector(
  eventFeatureStoreState,
  (state: EventState) => state
);

/**
 * Get Event by Id
 * @param eventId 
 * @returns 
 */
export const selectEventById = (eventId: number) => createSelector(
  eventsSelector,
  eventState => eventState.entities[eventId]
);

/**
 * Get Events by Ids
 * @param eventIds 
 * @returns 
 */
 export const selectEventsByIds = (eventIds: number[]) => createSelector(
  eventsSelector,
  eventState => {
    const events = eventIds.map((id: number) => eventState.entities[id]);

    return !!events.length ? events as IEvent[] : [];
  }
);

/**
 * Get currently selected event id
 */
export const getSelectedEventId = createSelector(
  eventsSelector,
  eventState => eventState.selectedEventId
);

/**
 * Get all events
 */
export const selectAllEvents = createSelector(
  eventsSelector,
  selectAll
);

/**
 * Get array of top event ids
 */
export const selectTopEventIds = createSelector(
  eventsSelector,
  eventState => eventState.topEventIds
);

