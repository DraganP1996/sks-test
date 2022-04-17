import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeMap, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { EventState, getEventSubEvents, getSelectedEventId, selectEvent, selectEventById, selectEventsByIds } from 'src/app/store/Event';
import { getSelectedGroupId, GroupState, loadGroups, selectAllEventsForGroup, selectAllGroupsForSportId, selectedGroupId } from 'src/app/store/Group';
import {  MarketState } from 'src/app/store/Market';
import { getSelectedSport, SportState } from 'src/app/store/Sport';
import { Group, IEvent, MarketCategory, SubEvent } from 'src/app/store/store.model';
import { selectSubEventsByIds } from 'src/app/store/Subevent';

@Component({
  selector: 'app-bet-event-details',
  templateUrl: './bet-event-details.component.html',
  styleUrls: ['./bet-event-details.component.scss']
})
export class BetEventDetailsComponent implements OnInit, OnDestroy {

  selectedSportId!: number;
  selectedGroupId!: number;
  selectedEventId!: number;

  groupsForSelectedSport$ = new Observable<Group<number>[]>();
  eventsForSelectedGroup$ = new Observable<IEvent[]>();
  subEventsForSelectedEvent$ = new Observable<SubEvent<number>[]>();

  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _sportStore: Store<SportState>,
    private _groupStore: Store<GroupState>,
    private _eventStore: Store<EventState>,
    private _subeventStore: Store<EventState>
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
      .pipe(
        tap(selectedEventId => this.selectedEventId = selectedEventId),
        tap(selectedEventId => console.log(`Selected event id ${selectedEventId}`)),
        mergeMap(selectedEventId => this._eventStore.select(getEventSubEvents(selectedEventId))),
        takeUntil(this._unsubscribe$))
      .subscribe(subEventIds => {
        console.log('SubEvents of selected event id', subEventIds);
        this.subEventsForSelectedEvent$ = this._subeventStore.select(selectSubEventsByIds(subEventIds))
        
      })
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
