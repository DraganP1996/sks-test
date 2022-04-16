import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { EventState, selectEventsByIds, selectEventsForGroup } from 'src/app/store/Event';
import { GroupState, loadGroups, selectAllEventsForGroup, selectAllGroups, selectAllGroupsForSportId } from 'src/app/store/Group';
import { getSelectedSport, SportState } from 'src/app/store/Sport';
import { Group, IEvent } from 'src/app/store/store.model';

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
    private _eventStore: Store<EventState>
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

  }

  selectGroup(groupId: number): void {
    this._groupStore.select(selectAllEventsForGroup(groupId))
      .pipe(take(1))
      .subscribe(eventIds => {
        if (!!eventIds)
          this.eventsForSelectedGroup$ = this._eventStore.select(selectEventsByIds(eventIds))
      })
    this.selectedGroupId = groupId;
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();  
  }

}
