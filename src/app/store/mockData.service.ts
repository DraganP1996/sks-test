import { Injectable } from "@angular/core";
import { Observable, of, take } from "rxjs";
import { groupList } from "src/mocks/groupList.mock";
import { marketCategories } from "src/mocks/market-categories.mock";
import { markets } from "src/mocks/markets.mock";
import { sports } from "src/mocks/sports.mock";
import { topEvents } from "src/mocks/top-events.mock";
import { Group, IEvent, Market, MarketCategory, Sport, TopEventResponse } from "./store.model";

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


    getMarketCategories(): Observable<MarketCategory<Market>[]> {
        return of(marketCategories)
    }

}