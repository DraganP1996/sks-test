import { createAction, props } from "@ngrx/store";
import { Market, MarketCategory } from "../../store.model";

const LOAD_MARKET_CATEGORIES = '[Market Category/API] Load Market Categories';
const LOAD_MARKET_CATEGORIES_SUCCESS = '[Market Category/API] Load Market Categories Success';
const LOAD_MARKET_CATEGORIES_FAILURE = '[Market Category/API] Load Market Categories Failiure';

const SET_MARKET_CATEGORIES = '[Market Category/API] Set Market Categories';
const UPSERT_MARKET_CATEGORIES = '[Market Category/API] Upsert Market Categories';
const CLEAR_MARKET_CATEGORIES = '[Market Category/API] Clear Market Categories'

export const loadActiveMarketCategories = createAction(LOAD_MARKET_CATEGORIES);
export const loadActiveMarketCategoriesSuccess = createAction(LOAD_MARKET_CATEGORIES_SUCCESS, props<{ marketCategories: MarketCategory<number>[], eventId: number, markets: Market[]}>());
export const loadActiveMarketCategoriesFailure = createAction(LOAD_MARKET_CATEGORIES_FAILURE, props<{ error: Error }>());

export const setMarketCategories = createAction(SET_MARKET_CATEGORIES, props<{ marketCategories: MarketCategory<number>[] }>());
export const upsertMarketCategories = createAction(UPSERT_MARKET_CATEGORIES, props<{ marketCategories: MarketCategory<number>[] }>());

export const clearMarketCategories = createAction(CLEAR_MARKET_CATEGORIES);