import { createAction, props } from "@ngrx/store";
import { Market } from "../../store.model";

const LOAD_ACTIVE_MARKETS = '[Market/API] Load Markets';
const LOAD_ACTIVE_MARKETS_SUCCESS = '[Market/API] Load Markets Success';
const LOAD_ACTIVE_MARKETS_FAILURE = '[Market/API] Load Markets Failiure';

const SET_MARKETS = '[Market/API] Set Markets';
const UPSERT_MARKETS = '[Market/API] Upsert Markets';
const CLEAR_MARKETS = '[Market/API] Clear Markets'

export const loadActiveMarketsForEvent = createAction(LOAD_ACTIVE_MARKETS, props<{ eventId: number }>());
export const loadActiveMarketsForEventSuccess = createAction(LOAD_ACTIVE_MARKETS_SUCCESS, props<{ markets: Market[], eventId: number }>());
export const loadActiveMarketsForEventFailure = createAction(LOAD_ACTIVE_MARKETS_FAILURE, props<{ error: Error }>());

export const setMarkets = createAction(SET_MARKETS, props<{ markets: Market[] }>());
export const upsertMarkets = createAction(UPSERT_MARKETS, props<{ markets: Market[] }>());

export const clearMarkets = createAction(CLEAR_MARKETS);