import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SubeventActions from '../actions/subevent.actions';
import { selectEvent } from '../../Event';
import { MockDataService } from '../../mockData.service';
import { MarketOdds, OddData, SubEvent, SubEventDetailsResponse } from '../../store.model';

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
            // Since we requested the subEvents for a specific event, I assume that the num of Event will be always 1
            const eventWithSubeventData = subEvents[0];

            let allOdds: OddData[] = [];

            // Map subevents in a normalized structure
            const normalizesSubEvents = eventWithSubeventData.Subevents.map(
              (subevent: SubEvent<MarketOdds>) => {
                // All the odd ids related to this subevent
                let subEventOddIds: number[] = [];

                // Get all the market ids related to this subevent
                const subEventMarketIds = subevent.Markets!.map((m) => {
                  const odds = m.Odds;
                  const oddIds = m.Odds.map((o) => o.Id);

                  // update the array containing all the odd ids for this subevent
                  subEventOddIds = [...subEventOddIds, ...oddIds];
                  // update the array containing all the odds we get from this "endpoint"
                  allOdds = [...allOdds, ...odds];
                  return m.Id;
                });

                delete subevent.Markets;

                // All the active market ids for this subevent will be here
                subevent.activeMarketIds = subEventMarketIds;
                // All the ids of the most important odds of this subevent will be here
                subevent.mainActiveOddsIds = subEventOddIds;
                subevent.allActiveOddsIds = [];

                return subevent as unknown as SubEvent<number>;
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
