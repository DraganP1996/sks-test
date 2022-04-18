import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { SubEvent } from '../../store.model';
import * as SubeventActions from '../actions/subevent.actions';

export interface SubEventState extends EntityState<SubEvent<number>> {
  selectedSubEventIds: number | null;
};

export const adapter: EntityAdapter<SubEvent<number>> = createEntityAdapter<SubEvent<number>>({
  selectId: (subEvent: SubEvent<number>) => subEvent.Id,
});

export const initialState: SubEventState = adapter.getInitialState({
  selectedSubEventIds: null,
});

export const subeventReducer = createReducer(
  initialState,

  // Load Sub Events Success
  on(SubeventActions.loadSubeventsSuccess, (state, { subEvents }) => {
    return adapter.setMany(subEvents, state);
  }),

  // Load Sub Events Success
  on(SubeventActions.subeventSelection, (state, { subeventId }) => {
    return {
      ...state,
      selectedSubEventIds: subeventId
    };
  }),

  // Load Sub Events Quotas Success
  on(SubeventActions.loadSubeventQuotasSuccess, (state, { subeventId, activeMarketCategoryIds, activeMarketIds, odds }) => {
    const subEvent = state.entities[subeventId];

    if (!subEvent) {
      return {
        ...state
      }
    }

    const allActiveOddsIds = odds.map(odd => odd.Id);

    return adapter.setOne({...subEvent, activeMarketCategoryIds, activeMarketIds, allActiveOddsIds }, state);
  }),

  // Clear Subevents
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