import { Injectable } from "@angular/core";
import { Observable, of, take } from "rxjs";
import { groupList } from "src/mocks/groupList.mock";
import { sports } from "src/mocks/sports.mock";
import { topEvents } from "src/mocks/top-events.mock";
import { Sport, TopEventResponse } from "./store.model";

@Injectable()
export class MockDataService {

    getSportList(): Observable<Sport[]> {
        return of(sports).pipe(take(1))
    }

    getTopEventList(): Observable<TopEventResponse[]> {
        return of(topEvents)
    }

    getGroupsForSport(sportId: number) {
        if (sportId !== 342)
            return of([]);

        return of(groupList)
    }

}