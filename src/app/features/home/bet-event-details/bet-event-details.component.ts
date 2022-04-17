import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { EventState, getEventSubEvents, getSelectedEventId, selectEvent, selectEventById, selectEventsByIds } from 'src/app/store/Event';
import { getSelectedGroupId, GroupState, loadGroups, selectAllEventsForGroup, selectAllGroupsForSportId, selectedGroupId } from 'src/app/store/Group';
import { OddState, selectOddsByIds } from 'src/app/store/Odds';
import { getSelectedSport, SportState } from 'src/app/store/Sport';
import { Group, IEvent, OddData, SubEvent } from 'src/app/store/store.model';
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

  subEvents: SubEvent<number>[] = [];

  quotasExample: {[key: string]: OddData} = {};

  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _sportStore: Store<SportState>,
    private _groupStore: Store<GroupState>,
    private _eventStore: Store<EventState>,
    private _subeventStore: Store<EventState>,
    private _oddStore: Store<OddState>
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
      .pipe(
        tap(selectedGroupId => !!selectedGroupId ? this.selectedGroupId = selectedGroupId : null),
        switchMap(selectedGroupId => this._groupStore.select(selectAllEventsForGroup(selectedGroupId!))),
        tap(eventIds => this.eventsForSelectedGroup$ = this._eventStore.select(selectEventsByIds(eventIds))),
        takeUntil(this._unsubscribe$))
      .subscribe();

    this._eventStore.select(getSelectedEventId)
      .pipe(
        tap(selectedEventId => !!selectedEventId ? this.selectedEventId = selectedEventId : null),
        switchMap(selectedEventId => this._eventStore.select(getEventSubEvents(selectedEventId))),
        switchMap(subEventIds => this._subeventStore.select(selectSubEventsByIds(subEventIds))),
        tap(subEvents => this.subEvents = subEvents),
        map(subEvents => this.mapSubEventToOddIds(subEvents)),
        switchMap(oddIds => this._oddStore.select(selectOddsByIds(oddIds))),
        takeUntil(this._unsubscribe$))
      .subscribe(odds => odds.forEach(odd => this.quotasExample[odd.Id] = odd));
  }

  selectGroup(groupId: number): void {
    this._groupStore.dispatch(selectedGroupId({ id: groupId}));
  }

  selectEvent(selectedEventId: number): void {
    this._eventStore.dispatch(selectEvent({ selectedEventId }));
  }

  mapSubEventToOddIds(subEventIds: SubEvent<number>[]): number[] {
    let oddIds: number[] = [];

    subEventIds.forEach(subEvent => oddIds = !!subEvent.activeOddIds ? [...oddIds, ...subEvent.activeOddIds] : oddIds);

    return oddIds;
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();  
  }

}
