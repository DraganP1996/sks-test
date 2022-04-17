import { createAction, props } from "@ngrx/store";
import { Market } from "../../store.model";

const LOAD_MARKETS = '[Market/API] Load Markets';
const LOAD_MARKETS_SUCCESS = '[Market/API] Load Markets Success';
const LOAD_MARKETS_FAILURE = '[Market/API] Load Markets Failiure';

const SET_MARKETS = '[Market/API] Set Markets';
const UPSERT_MARKETS = '[Market/API] Upsert Markets';
const CLEAR_MARKETS = '[Market/API] Clear Markets'

export const loadMarkets = createAction(LOAD_MARKETS, props<{ eventId: number }>());
export const loadMarketsSuccess = createAction(LOAD_MARKETS_SUCCESS, props<{ markets: Market[] }>());
export const loadMarketsFailure = createAction(LOAD_MARKETS_FAILURE, props<{ error: Error }>());

export const setMarkets = createAction(SET_MARKETS, props<{ markets: Market[] }>());
export const upsertMarkets = createAction(UPSERT_MARKETS, props<{ markets: Market[] }>());

export const clearMarkets = createAction(CLEAR_MARKETS);