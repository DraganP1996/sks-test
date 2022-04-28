import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { ListItemColorMode } from 'src/app/shared/components/list-item/list-item.model';
import { IEvent } from 'src/app/store/store.model';
import { HomeFacade } from '../../home.facade';
import { EventListDictionary } from './event-list.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {

  private _unsubscribe$ = new Subject<void>();

  @Input() eventIds: number[] = [];

  eventList$!: Observable<IEvent[]>;
  sportItemConfig = ListItemColorMode.dark;

  constructor(
    private _homeFacade: HomeFacade
  ) { 
  }

  ngOnInit(): void {
    this.eventList$ = this._homeFacade.getEventsByIds$(this.eventIds)
  }

  selectEvent(eventId: number): void {
    this._homeFacade.selectEvent(eventId)
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
