import { EntityMap, EntityMapOne, Predicate, Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { IEvent } from "../../store.model";

export const loadEvents = createAction('[Event/API] Load Events', props<{ events: IEvent[] }>());
export const loadEventsSuccess = createAction('[Event/API] Load Events Success', props<{ events: IEvent[] }>());

export const loadTopEvents = createAction('[Top Events/API] Load Top Events');
export const loadTopEventsSuccess = createAction('[Top Events/API] Load Top Events Success', props<{ids: number[]}>());

export const loadEventsFailure = createAction('[Event/API] Load Events Failure', props<{ error: Error }>());

export const setEvents = createAction('[Event/API] Set Events', props<{ events: IEvent[] }>());
export const addEvent = createAction('[Event/API] Add Event', props<{ event: IEvent }>());
export const setEvent = createAction('[Event/API] Set Event', props<{ event: IEvent }>());
export const upsertEvent = createAction('[Event/API] Upsert Event', props<{ event: IEvent }>());
export const addEvents = createAction('[Event/API] Add Events', props<{ events: IEvent[] }>());
export const upsertEvents = createAction('[Event/API] Upsert Events', props<{ events: IEvent[] }>());
export const updateEvent = createAction('[Event/API] Update Event', props<{ update: Update<IEvent> }>());
export const updateEvents = createAction('[Event/API] Update Events', props<{ updates: Update<IEvent>[] }>());
export const mapEvent = createAction('[Event/API] Map Event', props<{ entityMap: EntityMapOne<IEvent> }>());
export const mapEvents = createAction('[Event/API] Map Events', props<{ entityMap: EntityMap<IEvent> }>());
export const deleteEvent = createAction('[Event/API] Delete Event', props<{ id: string }>());
export const deleteEvents = createAction('[Event/API] Delete Events', props<{ ids: string[] }>());
export const deleteEventsByPredicate = createAction('[Event/API] Delete Events By Predicate', props<{ predicate: Predicate<IEvent> }>());
export const clearEvents = createAction('[Event/API] Clear Events');