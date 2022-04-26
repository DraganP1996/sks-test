import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Group, IEvent, Market, MarketCategory, OddData, Sport, SubEvent } from 'src/app/store/store.model';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'app-bet-event-details',
  templateUrl: './bet-event-details.component.html',
  styleUrls: ['./bet-event-details.component.scss']
})
export class BetEventDetailsComponent implements OnInit, OnDestroy {

  selectedEvent!: IEvent;
  subeventOfSelectedEvent: SubEvent<number>[] = [];
  subeventDetails?: SubEvent<number>;
  subEventMarketCategories: MarketCategory<number>[] = [];
  subEventMarkets: Market[] = [];

  selectedSportId!: number;
  selectedGroupId!: number;
  selectedEventId!: number;
  selectedSubEventId!: number;

  groupsForSelectedSport$ = new Observable<Group<number>[]>();
  eventsForSelectedGroup$ = new Observable<IEvent[]>();

  quotasExample: {[key: string]: OddData} = {};

  private _unsubscribe$ = new Subject<void>();

  constructor(private _homeFacade: HomeFacade) { }

  ngOnInit(): void {
    this._homeFacade.getSelectedSport$()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(sport => {
        if (!!sport) {
          this.groupsForSelectedSport$ = this._homeFacade.getListOfGroupsForSport$(sport.Id);
        }
      });

    // this._homeFacade.getSelectedEvent$().pipe(
    //   takeUntil(this._unsubscribe$),
    //   filter(event => !!event && !!event.subEventIds),
    //   tap(event => {
    //     if (!event) return;

    //     this.selectedEvent = event;
    //     this.selectedEventId = event.Id;

    //   }),
    //   switchMap(event => this._homeFacade.getListOfSubeventsForEvent$(event!.subEventIds!)),
    //   tap(subevents => this.subeventOfSelectedEvent = subevents),
    //   map(subEvents => this.mapSubEventToOddIds(subEvents)),
    //   switchMap(oddIds => this._homeFacade.queryOddsById$(oddIds)),
    // )
    //   .subscribe(odds => odds.forEach(odd => this.quotasExample[odd.Id] = odd));

    // this._homeFacade.getSelectedSubevent$()
    //   .pipe(
    //     takeUntil(this._unsubscribe$),
    //     tap(subevent => this.subeventDetails = !!subevent ? subevent : undefined),
    //     filter(subevent => !!subevent && !!subevent.activeMarketCategoryIds && !!subevent.allActiveOddsIds),
    //     switchMap(subevent => this._homeFacade.queryMarketCategoriesByIds$(subevent!.activeMarketCategoryIds!)),
    //     tap(activeCategories => this.subEventMarketCategories = activeCategories),
    //     map(activeCategories => this.mapMarketCategoriesToMarketIds(activeCategories)),
    //     switchMap(marketCategoryIds => this._homeFacade.queryMarketsByIds$(marketCategoryIds)),
    //     filter(() => !!this.subeventDetails && !!this.subeventDetails.allActiveOddsIds),
    //     switchMap(() => this._homeFacade.queryOddsById$(this.subeventDetails!.allActiveOddsIds!))
    //   )
    //   .subscribe(data => {
    //     console.log('Imao sam vremena samo za vikend, pa sam sastavio normalizovani store medjutim nisam imao vremena za ostalo :(', data);
    //     this.formatDataForDetailedSubeventView();
    //   })
  }

  selectGroup(groupId: number): void {
    this._homeFacade.selectGroup(groupId);
  }

  selectSubEvent(subeventId: number): void {
    this._homeFacade.selectSubEvent(subeventId);
  }

  mapSubEventToOddIds(subEventIds: SubEvent<number>[]): number[] {
    let oddIds: number[] = [];

    subEventIds.forEach(subEvent => oddIds = !!subEvent.mainActiveOddsIds ? [...oddIds, ...subEvent.mainActiveOddsIds] : oddIds);

    return oddIds;
  }

  mapMarketCategoriesToMarketIds(marketCategories: MarketCategory<number>[]): number[] {
    let marketIds: number[] = [];

    marketCategories.forEach(categoy => marketIds = !!categoy.Markets ? [...marketIds, ...categoy.Markets] : marketIds);

    return marketIds;
  }

  formatDataForDetailedSubeventView(): void {
    console.log('HERE');
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();  
  }

}