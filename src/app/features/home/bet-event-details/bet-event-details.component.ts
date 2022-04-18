import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, filter, map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { EventState, getEventSubEvents, getSelectedEventId, selectEvent, selectEventsByIds } from 'src/app/store/Event';
import { getSelectedGroupId, GroupState, loadGroups, selectAllEventsForGroup, selectAllGroupsForSportId, selectedGroupId } from 'src/app/store/Group';
import { selectMarketByIds } from 'src/app/store/Market';
import { selectMarketCategoriesByIds } from 'src/app/store/MarketCategory';
import { OddState, selectOddsByIds } from 'src/app/store/Odds';
import { getSelectedSport, SportState } from 'src/app/store/Sport';
import { Group, IEvent, Market, MarketCategory, OddData, Sport, SubEvent } from 'src/app/store/store.model';
import { getSelectedSubEventId, selectSubEventById, selectSubEventsByIds, subeventSelection } from 'src/app/store/Subevent';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'app-bet-event-details',
  templateUrl: './bet-event-details.component.html',
  styleUrls: ['./bet-event-details.component.scss']
})
export class BetEventDetailsComponent implements OnInit, OnDestroy {

  selectedSport!: Sport;
  selectedGroup!: Group<number>;
  selectedEvent!: IEvent;
  subeventOfSelectedEvent: SubEvent<number>[] = [];
  subeventDetails!: SubEvent<number>;
  subEventMarketCategories: MarketCategory<number>[] = [];
  subEventMarkets: Market[] = [];

  selectedSportId!: number;
  selectedGroupId!: number;
  selectedEventId!: number;
  selectedSubEventId!: number;

  groupsForSelectedSport$ = new Observable<Group<number>[]>();
  eventsForSelectedGroup$ = new Observable<IEvent[]>();

  subEventDetail!: SubEvent<number>;

  quotasExample: {[key: string]: OddData} = {};

  private _unsubscribe$ = new Subject<void>();

  constructor(private _homeFacade: HomeFacade) { }

  ngOnInit(): void {
    this._homeFacade.getSelectedSport$()
      .subscribe(sport => {
        if (!!sport) {
          this.selectedSport = sport;
          this.groupsForSelectedSport$ = this._homeFacade.getListOfGroupsForSport$(sport.Id);
        }
      });

    this._homeFacade.getSelectedGroup$()
      .subscribe(group => {
        if (!group) return;

        this.selectedGroupId = group.Id;
        this.eventsForSelectedGroup$ = this._homeFacade.getListOfEventsForGroup$(group.Events);
      });

    this._homeFacade.getSelectedEvent$().pipe(
      filter(event => !!event && !!event.subEventIds),
      tap(event => {
        if (!event) return;

        this.selectedEvent = event;
        this.selectedEventId = event.Id;

      }),
      switchMap(event => this._homeFacade.getListOfSubeventsForEvent$(event!.subEventIds!)),
      tap(subevents => this.subeventOfSelectedEvent = subevents),
      map(subEvents => this.mapSubEventToOddIds(subEvents)),
      switchMap(oddIds => this._homeFacade.queryOddsById$(oddIds)),
    )
      .subscribe(odds => odds.forEach(odd => this.quotasExample[odd.Id] = odd));

    this._homeFacade.getSelectedSubevent$()
      .pipe(
        tap(subevent => this.subeventDetails = subevent!),
        switchMap(subevent => this._homeFacade.queryMarketCategoriesByIds$(subevent!.activeMarketCategoryIds!)),
        tap(activeCategories => this.subEventMarketCategories = activeCategories),
        map(activeCategories => this.mapMarketCategoriesToMarketIds(activeCategories)),
        switchMap(marketCategoryIds => this._homeFacade.queryMarketsByIds$(marketCategoryIds)),
        tap(markets => this.subEventMarkets = markets),
        filter(() => !!this.subeventDetails && !!this.subeventDetails.allActiveOddsIds),
        switchMap(() => this._homeFacade.queryOddsById$(this.subeventDetails.allActiveOddsIds!))
      )
      .subscribe(data => {
        console.log('All the odds for this subevent', data);
        this.formatDataForDetailedSubeventView();
      })
  }

  selectGroup(groupId: number): void {
    this._homeFacade.selectGroup(groupId);
  }

  selectEvent(selectedEventId: number): void {
    this._homeFacade.selectEvent(selectedEventId);
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