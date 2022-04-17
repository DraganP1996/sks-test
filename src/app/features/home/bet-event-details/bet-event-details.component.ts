import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { EventState, getSelectedEventId, selectEvent, selectEventsByIds } from 'src/app/store/Event';
import { getSelectedGroupId, GroupState, loadGroups, selectAllEventsForGroup, selectAllGroupsForSportId, selectedGroupId } from 'src/app/store/Group';
import { loadMarkets, MarketState } from 'src/app/store/Market';
import { loadMarketCategories } from 'src/app/store/MarketCategory';
import { getSelectedSport, SportState } from 'src/app/store/Sport';
import { Group, IEvent, MarketCategory } from 'src/app/store/store.model';

@Component({
  selector: 'app-bet-event-details',
  templateUrl: './bet-event-details.component.html',
  styleUrls: ['./bet-event-details.component.scss']
})
export class BetEventDetailsComponent implements OnInit, OnDestroy {

  selectedSportId!: number;
  selectedGroupId!: number;

  groupsForSelectedSport$ = new Observable<Group[]>();

  eventsForSelectedGroup$ = new Observable<IEvent[]>();
  
  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _sportStore: Store<SportState>,
    private _groupStore: Store<GroupState>,
    private _eventStore: Store<EventState>,
    private _marketStore: Store<MarketState>,
    private _marketCategoriesStore: Store<MarketCategory>
  ) { }

  ngOnInit(): void {
    this._sportStore.select(getSelectedSport)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((sportId: number | null) => {
        if(!!sportId) {
          this._sportStore.dispatch(loadGroups({ sportId })); 
          this.selectedSportId = sportId;
          this.groupsForSelectedSport$ = this._groupStore.select(selectAllGroupsForSportId(this.selectedSportId));
        }
      });

    this._groupStore.select(getSelectedGroupId)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(selectedGroupId => {
        if (selectedGroupId) {
          this.selectedGroupId = selectedGroupId;
          this._groupStore.select(selectAllEventsForGroup(selectedGroupId))
            .pipe(take(1))
            .subscribe(eventIds => {
              if (!!eventIds)
                this.eventsForSelectedGroup$ = this._eventStore.select(selectEventsByIds(eventIds))
            });
          }
      });

    this._eventStore.select(getSelectedEventId)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(eventId => {
        if (eventId) {
          this._marketStore.dispatch(loadMarkets({eventId}));
          this._marketCategoriesStore.dispatch(loadMarketCategories())
        }
      });

  }

  selectGroup(groupId: number): void {
    this._groupStore.dispatch(selectedGroupId({ id: groupId}));
  }

  selectEvent(selectedEventId: number): void {
    this._eventStore.dispatch(selectEvent({ selectedEventId }));
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();  
  }

}
