import { ActionReducerMap } from "@ngrx/store";
import { eventReducer, EventState } from "./Event";
import { groupReducer, GroupState } from "./Group";
import { marketReducer, MarketState } from "./Market";
import { marketCategoryReducer, MarketCategoryState } from "./MarketCategory";
import { oddReducer, OddState } from "./Odds";
import { SportState, sportReducer } from "./Sport";
import { subeventReducer, SubEventState } from "./Subevent";

export interface AppState {
    sports: SportState,
    groups: GroupState,
    events: EventState,
    marketCategories: MarketCategoryState,
    markets: MarketState,
    subevents: SubEventState,
    odds: OddState

}

export const reducers: ActionReducerMap<AppState> = {
    sports: sportReducer,
    groups: groupReducer,
    events: eventReducer,
    marketCategories: marketCategoryReducer,
    markets: marketReducer,
    subevents: subeventReducer,
    odds: oddReducer
}