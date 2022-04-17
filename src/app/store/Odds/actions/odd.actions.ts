import { createAction, props } from "@ngrx/store";
import { OddData } from "../../store.model";

const LOAD_ODDS = '[Odd/API] Load Sub Event\'s Odds';
const LOAD_ODDS_SUCCESS = '[Odd/API] Load Sub Event\'s Odds Success';
const LOAD_ODDS_FAILURE = '[Odd/API] Load Sub Event\'s Odds Failure';
const SELECT_SPORT = '[Odd List Component] Odd Selection';
const SET_ODDS = '[Odd/API] Set Odds';
const CLEAR_ODDS = '[Odd/API] Clear Odds';

export const loadOdds = createAction(LOAD_ODDS);
export const loadOddsSuccess = createAction(LOAD_ODDS_SUCCESS, props<{ odds: OddData[] }>());
export const loadOddsFailure = createAction(LOAD_ODDS_FAILURE, props<{ error: Error }>());

export const selectOdd = createAction(SELECT_SPORT, props<{id: number}>());

export const setOdds = createAction(SET_ODDS, props<{ odds: OddData[] }>());

export const clearOdds = createAction(CLEAR_ODDS);