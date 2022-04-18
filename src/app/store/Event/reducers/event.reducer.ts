import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadGroupsSuccess } from '../../Group/actions/group.actions';
import { loadActiveMarketsForEventSuccess } from '../../Market/actions/market.actions';
import { loadActiveMarketCategoriesSuccess } from '../../MarketCategory';
import { IEvent } from '../../store.model';
import { loadSubeventsSuccess } from '../../Subevent';
import * as EventActions from '../actions/event.actions';

export interface EventState extends EntityState<IEvent> { 
  topEventIds: number[];
  selectedEventId: number | null;
};

export const adapter: EntityAdapter<IEvent> = createEntityAdapter<IEvent>({
  selectId: (event: IEvent) => event.Id,
});

export const initialState: EventState = adapter.getInitialState({
  topEventIds: [],
  selectedEventId: null
});

export const eventReducer = createReducer(
  initialState,

  // Not sure if set all is the rigth choose here...
  on(EventActions.loadEvents, (state, { events }) => {
      return adapter.setMany(events, state);
  }),

  // Update top events
  on(EventActions.loadTopEventsSuccess, (state, { topEvents }) => {
    return { ...state, ...adapter.setMany(topEvents, state), topEventIds: topEvents.map(topEvent => topEvent.Id) }
  }),

  // Loading of groups successfully
  on(loadActiveMarketsForEventSuccess, (state, { markets, eventId }) => {
    const event = {...state.entities[eventId], activeMarketIds: markets.map(market => market.Id)};

    return adapter.setOne(event as IEvent, state)
  }),

  on(loadActiveMarketCategoriesSuccess, (state, { eventId, marketCategories }) => {
    const event = {...state.entities[eventId], activeMarketCategoryIds: marketCategories.map(market => market.Id)};

    return adapter.setOne(event as IEvent, state)
  }),

  on(loadSubeventsSuccess, (state, { eventId, subEvents }) => {
    const event = {...state.entities[eventId], subEventIds: subEvents.map(subEvent => subEvent.Id)};

    return adapter.setOne(event as IEvent, state)
  }),

  on(loadGroupsSuccess, (state, { events }) => {
    return adapter.setMany(events, state)
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