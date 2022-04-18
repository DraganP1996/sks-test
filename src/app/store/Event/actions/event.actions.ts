import { createAction, props } from "@ngrx/store";
import { IEvent } from "../../store.model";

const LOAD_EVENT = '[Event/API] Load Events';
const LOAD_EVENT_SUCCESS = '[Event/API] Load Events Success';
const LOAD_EVENT_FAILURE = '[Event/API] Load Events Failure';
const LOAD_TOP_EVENTS = '[Top Events/API] Load Top Events';
const LOAD_TOP_EVENTS_SUCCESS = '[Top Events/API] Load Top Events Success';
const SET_EVENTS = '[Event/API] Set Events';
const ADD_EVENTS = '[Event/API] Add Events';
const UPSERT_EVENTS = '[Event/API] Upsert Events';
const SELECT_EVENT = '[Event List] Select Event';
const CLEAR_EVENTS = '[Event/API] Clear Events';

// Load Event Actions
export const loadEvents = createAction(LOAD_EVENT, props<{ events: IEvent[] }>());
export const loadEventsSuccess = createAction(LOAD_EVENT_SUCCESS, props<{ events: IEvent[] }>());
export const loadEventsFailure = createAction(LOAD_EVENT_FAILURE, props<{ error: Error }>());

// Load Top Event Actions
export const loadTopEvents = createAction(LOAD_TOP_EVENTS);
export const loadTopEventsSuccess = createAction(LOAD_TOP_EVENTS_SUCCESS, props<{ topEvents: IEvent[]}>());

// Add/Set/Updet Event Actions
export const setEvents = createAction(SET_EVENTS, props<{ events: IEvent[] }>());
export const addEvents = createAction(ADD_EVENTS, props<{ events: IEvent[] }>());
export const upsertEvents = createAction(UPSERT_EVENTS, props<{ events: IEvent[] }>());

// Event Selection Action
export const selectEvent = createAction(SELECT_EVENT, props<{ selectedEventId: number}>());

// Clear Events Action
export const clearEvents = createAction(CLEAR_EVENTS);