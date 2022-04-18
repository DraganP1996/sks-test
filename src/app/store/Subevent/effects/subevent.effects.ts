import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

import * as SubeventActions from '../actions/subevent.actions';
import { selectEvent } from '../../Event';
import { MockDataService } from '../../mockData.service';
import { OddData, SubEvent, SubEventDetailsResponse } from '../../store.model';

@Injectable()
export class SubeventEffects {
  constructor(
    private actions$: Actions,
    private _mockDataService: MockDataService
  ) {}

  loadSubevents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(selectEvent),
      concatMap((payload) =>
        this._mockDataService.getSubEvents(payload.selectedEventId).pipe(
          map((subEvents) => {
            // Since we requested the subEvents for a specific event, the num of Event will be always 1
            const eventWithSubeventData = subEvents[0];
            let allOdds: OddData[] = [];

            // Map subevents in a normalized structure
            const normalizesSubEvents = eventWithSubeventData.Subevents.map(
              (s) => {
                let subEventOddIds: number[] = [];

                const normalizedSubEvent = s as unknown as SubEvent<number>;
                const subEventMarketIds = s.Markets!.map((m) => {
                  const odds = m.Odds;
                  const oddIds = m.Odds.map((o) => o.Id);

                  subEventOddIds = [...subEventOddIds, ...oddIds];
                  allOdds = [...allOdds, ...odds];
                  return m.Id;
                });

                delete normalizedSubEvent.Markets;
                normalizedSubEvent.activeMarketIds = subEventMarketIds;
                normalizedSubEvent.mainActiveOddsIds = subEventOddIds;
                normalizedSubEvent.allActiveOddsIds = [];

                return normalizedSubEvent;
              }
            );

            return SubeventActions.loadSubeventsSuccess({
              subEvents: normalizesSubEvents,
              odds: allOdds,
              eventId: payload.selectedEventId,
            });
          }),
          catchError((error) =>
            of(SubeventActions.loadSubeventsFailure({ error }))
          )
        )
      )
    );
  });

  loadQuotas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubeventActions.subeventSelection),
      concatMap((payload) =>
        this._mockDataService.getSubEventQuotas(payload.subeventId).pipe(
          map((subEventQuota: SubEventDetailsResponse) => {
            let activeMarketIds: number[] = [];
            let allActiveOdds: OddData[] = [];
            const activeMarketCategoryIds = subEventQuota.GroupedMarkets.map(
              (marketCategory) => {
                const marketIds = marketCategory.Markets.map((market) => {
                  const odds = market.Odds;

                  allActiveOdds = [...allActiveOdds, ...odds];

                  return market.Id;
                });

                activeMarketIds = [...activeMarketIds, ...marketIds];
                return marketCategory.Id;
              }
            );
            return SubeventActions.loadSubeventQuotasSuccess({
              subeventId: payload.subeventId,
              activeMarketCategoryIds,
              activeMarketIds,
              odds: allActiveOdds,
            });
          }),
          catchError((error) =>
            of(SubeventActions.loadSubeventQuotasFailure({ error }))
          )
        )
      )
    );
  });
}
