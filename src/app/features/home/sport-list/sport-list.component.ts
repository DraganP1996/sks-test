import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { EventState, loadTopEvents } from 'src/app/store/Event';
import { MockDataService } from 'src/app/store/mockData.service';
import { selectAll, selectAllSports, SportState } from 'src/app/store/Sport';
import { loadSports, selectSport } from 'src/app/store/Sport/actions/sport.actions';
import { Sport } from 'src/app/store/store.model';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.scss']
})
export class SportListComponent implements OnInit, OnDestroy {

  sportList$!: Observable<Sport[]>;
  
  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _sportStore: Store<SportState>,
    private _eventsStore: Store<EventState>) { }

  ngOnInit(): void {
    // Dispatch load sports action
    this._sportStore.dispatch(loadSports());

    // Dispatch load top events action
    this._eventsStore.dispatch(loadTopEvents());

    // Get the list of sports from the store
    this.sportList$ = this._sportStore.select(selectAllSports);
  }

  selectSport(id: number): void {
    this._sportStore.dispatch(selectSport({ id }));
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
