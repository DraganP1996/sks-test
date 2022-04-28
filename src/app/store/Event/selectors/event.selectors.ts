import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEvent } from '../../store.model';
import { EventState, selectAll, selectEntities } from '../reducers/event.reducer';

export const eventFeatureStoreState = createFeatureSelector<EventState>('events');

export const eventsSelector = createSelector(
  eventFeatureStoreState,
  (state: EventState) => state
);

export const eventEntitiesSelector = createSelector(
  eventsSelector,
  selectEntities
)

/**
 * Get Event by Id
 * @param eventId 
 * @returns 
 */
export const selectEventById = (eventId: number) => createSelector(
  eventsSelector,
  eventState => eventState.entities[eventId]
);

export const getEventSubEvents = (eventId: number) => createSelector(
  selectEventById(eventId),
  event => !!event ? event.subEventIds : []
);

export const selectEventActiveCategories = (eventId: number) => createSelector(
  selectEventById(eventId),
  event => event?.activeMarketCategoryIds
)

/**
 * Get Events by Ids
 * @param eventIds 
 * @returns 
 */
 export const selectEventsByIds = (eventIds: number[]) => createSelector(
  eventEntitiesSelector,
  entities => !!eventIds ? eventIds.map((id: number) => entities[id]!) : []
);

export const queryEventsByIds = (eventIds: number[]) => createSelector(
  selectEventsByIds(eventIds),
  eventList => eventList
);

/**
 * Get currently selected event id
 */
export const getSelectedEventId = createSelector(
  eventsSelector,
  eventState => eventState.selectedEventId as number
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

