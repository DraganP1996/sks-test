import { EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEvent } from '../../store.model';
import * as fromIEvent from '../reducers/event.reducer';

export const selectIEventState = createFeatureSelector<fromIEvent.EventState>(
  fromIEvent.eventFeatureKey
);


export const selectIEventsState = createFeatureSelector<EntityState<IEvent>>('event');

export const selecteventById = (eventId: number) => createSelector(
  selectIEventsState,
  eventState => eventState.entities[eventId]
);


export const selectAllCourses = createSelector(
  selectIEventsState,
  fromIEvent.selectAll
);

