import { Injectable } from "@angular/core";
import { EMPTY, Observable, of, take } from "rxjs";
import { groupList } from "src/mocks/groupList.mock";
import { marketCategories } from "src/mocks/market-categories.mock";
import { markets } from "src/mocks/markets.mock";
import { sports } from "src/mocks/sports.mock";
import { subeventQuotas } from "src/mocks/subeventQuotes.mock";
import { subevents } from "src/mocks/subevents.mock";
import { topEvents } from "src/mocks/top-events.mock";
import { Group, IEvent, IEventWithSubEvents, Market, MarketCategory, Sport, SubEventDetailsResponse, TopEventResponse } from "./store.model";

@Injectable()
export class MockDataService {

    getSportList(): Observable<Sport[]> {
        return of(sports).pipe(take(1))
    }

    getTopEventList(): Observable<TopEventResponse[]> {
        return of(topEvents)
    }

    getGroupsForSport(sportId: number): Observable<Group<IEvent>[]> {
        if (sportId !== 342)
            return of([]);

        return of(groupList)
    }

    getMarketsForEvent(eventId: number): Observable<Market[]> {
        if (eventId !== 1648275)
         return of([]);
        
        return of(markets)
    }


    getMarketCategories(eventId: number): Observable<MarketCategory<Market>[]> {
        if (eventId !== 1648275)
            return of([]);
            
        return of(marketCategories)
    }

    getSubEvents(eventId: number): Observable<IEventWithSubEvents[]> {
        if (eventId !== 1648275)
            return of([]);

        return of(subevents);
    }

    getSubEventQuotas(subEventId: number): Observable<SubEventDetailsResponse> {
        if (subEventId !== 120718887)
        return EMPTY;

    return of(subeventQuotas);
    }

}