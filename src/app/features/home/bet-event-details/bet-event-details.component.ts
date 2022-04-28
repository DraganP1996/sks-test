import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ListItemColorMode } from 'src/app/shared/components/list-item/list-item.model';
import { Group } from 'src/app/store/store.model';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'app-bet-event-details',
  templateUrl: './bet-event-details.component.html',
  styleUrls: ['./bet-event-details.component.scss']
})
export class BetEventDetailsComponent implements OnInit, OnDestroy {

  groupsForSelectedSport$?: Observable<Group<number>[]>;
  groupItemConfig = ListItemColorMode.light;

  private _unsubscribe$ = new Subject<void>();

  constructor(private _homeFacade: HomeFacade) { }

  ngOnInit(): void {
    this._homeFacade.getSelectedSport$()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(sport => this.groupsForSelectedSport$ = this._homeFacade.getListOfGroupsForSport$(sport.Id));
  }

  selectGroup(groupId: number): void {
    this._homeFacade.selectGroup(groupId);
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();  
  }

}