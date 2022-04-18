import { createFeatureSelector, createSelector } from "@ngrx/store";
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
 * @param eventIds 
 * @returns 
 */
 export const selectSubEventsByIds = (eventIds?: number[]) => createSelector(
    subEventsSelector,
    subEventState => {
      const events = !!eventIds ? eventIds.map((id: number) => subEventState.entities[id]): [];
  
      return events as SubEvent<number>[];
    }
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

