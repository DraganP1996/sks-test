import { createAction, props } from "@ngrx/store";
import { Sport } from "../../store.model";

const LOAD_SPORTS = '[Sport/API] Load Sport\'s Sports';
const LOAD_SPORTS_SUCCESS = '[Sport/API] Load Sport\'s Sports Success';
const LOAD_SPORTS_FAILURE = '[Sport/API] Load Sport\'s Sports Failure';
const SELECT_SPORT = '[Sport List Component] Sport Selection';
const SET_SPORTS = '[Sport/API] Set Sports';
const CLEAR_SPORTS = '[Sport/API] Clear Sports';

export const loadSports = createAction(LOAD_SPORTS);
export const loadSportsSuccess = createAction(LOAD_SPORTS_SUCCESS, props<{ sports: Sport[] }>());
export const loadSportsFailure = createAction(LOAD_SPORTS_FAILURE, props<{ error: Error }>());

export const selectSport = createAction(SELECT_SPORT, props<{id: number}>());

export const setSports = createAction(SET_SPORTS, props<{ sports: Sport[] }>());

export const clearSports = createAction(CLEAR_SPORTS);