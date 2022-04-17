import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as SubeventActions from '../actions/subevent.actions';
import { selectEvent } from '../../Event';
import { MockDataService } from '../../mockData.service';
import { Market, MarketOdds, OddData, SubEvent } from '../../store.model';



@Injectable()
export class SubeventEffects {
  
  constructor(
    private actions$: Actions,
    private _mockDataService: MockDataService) {}


  loadSubevents$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(selectEvent),
      concatMap(payload =>
        this._mockDataService.getSubEvents(payload.selectedEventId).pipe(
          map(subEvents => {
            // Since we requested the subEvents for a specific event, the num of Event will be always 1
            const eventWithSubeventData = subEvents[0];
            let allOdds: OddData[] = [];
            const foundSubEvents =  eventWithSubeventData.Subevents.map(s => {
              let subEventOddIds: number[] = [];

              const convertedSubEvet = (s as unknown) as SubEvent<number>;
              const subEventMarketIds = s.Markets!.map(m => {
                const odds = m.Odds;
                const oddIds = m.Odds.map(o => o.Id);

                subEventOddIds = [...subEventOddIds, ...oddIds];
                allOdds = [...allOdds, ...odds]
                return m.id
              });

              delete convertedSubEvet.Markets;
              convertedSubEvet.activeMarketIds = subEventMarketIds;
              convertedSubEvet.activeOddIds = subEventOddIds;

              return convertedSubEvet;
            });

            return SubeventActions.loadSubeventsSuccess({ subEvents: foundSubEvents, odds: allOdds, eventId: payload.selectedEventId })
          }),
          catchError(error => of(SubeventActions.loadSubeventsFailure({ error }))))
      )
    );
  });
}
