import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectEntities } from "../../MarketCategory";
import { SubEvent } from "../../store.model";
import { selectAll, SubEventState } from "../reducers/subevent.reducer";

export const subEventFeatureStoreState = createFeatureSelector<SubEventState>('subevents');

export const subEventsSelector = createSelector(
    subEventFeatureStoreState,
  (state: SubEventState) => state
);

/**
 * Get SubEvent by Id
 * @param eventId 
 * @returns 
 */
 export const selectSubEventById = (eventId: number) => createSelector(
    subEventsSelector,
    subEventState => subEventState.entities[eventId]
  );

  /**
 * Get SubEvent by Ids
 * @param subeventIds 
 * @returns 
 */
 export const selectSubEventsByIds = (subeventIds?: number[]) => createSelector(
    subEventsSelector,
    subEventState => !!subeventIds ? subeventIds.map((id: number) => subEventState.entities[id]!): []
  );

/**
 * Get currently selected SubEvent id
 */
 export const getSelectedSubEventId = createSelector(
    subEventsSelector,
    subEventState => subEventState.selectedSubEventIds as number
  );

/**
 * Get all SubEvents
 */
 export const selectAllEvents = createSelector(
    subEventsSelector,
    selectAll
  );

export const getSubeventsByEventId = (eventId: number) => createSelector(
  selectAllEvents,
  subevents => subevents.filter(subevent => subevent.EventId === eventId)
);

