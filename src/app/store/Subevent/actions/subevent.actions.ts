import { createAction, props } from "@ngrx/store";
import { OddData, SubEvent } from "../../store.model";

const LOAD_SUBEVENT = '[SubEvent/API] Load SubEvents';
const LOAD_SUBEVENT_SUCCESS = '[SubEvent/API] Load SubEvents Success';
const LOAD_SUBEVENT_FAILURE = '[SubEvent/API] Load SubEvents Failure';

const UPSERT_SUBEVENTS = '[SubEvent/API] Upsert SubEvents';
const CLEAR_SUBEVENTS = '[SubEvent/API] Clear SubEvents';


export const loadSubevents = createAction(LOAD_SUBEVENT, props<{ subevents: SubEvent<number>[] }>());
export const loadSubeventsSuccess = createAction(LOAD_SUBEVENT_SUCCESS, props<{ subEvents: SubEvent<number>[], odds: OddData[], eventId: number }>());
export const loadSubeventsFailure = createAction(LOAD_SUBEVENT_FAILURE, props<{ error: Error }>());

export const upsertSubevents = createAction(UPSERT_SUBEVENTS, props<{ subevents: SubEvent<number>[] }>());
export const clearSubevents = createAction(CLEAR_SUBEVENTS);