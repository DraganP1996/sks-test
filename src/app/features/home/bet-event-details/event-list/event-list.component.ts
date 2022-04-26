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

  dictionary: EventListDictionary = {};

  constructor(
    private _homeFacade: HomeFacade
  ) { }

  ngOnInit(): void {
    this._homeFacade.getListOfEventsForGroup$(this.eventIds)
      .pipe(takeUntil(this._unsubscribe$),tap(() => console.log('SETTING DICTIONARY'))
      )
      .subscribe(eventList => this.setEventListDictionary(eventList));
  }

  selectEvent(selectedEventId: number): void {
    this._homeFacade.selectEvent(selectedEventId);
    console.log('Selected event id', selectedEventId);
    this._homeFacade.querySubeventForEventId(selectedEventId)
      .pipe(takeUntil(this._unsubscribe$), tap(data => console.log('SUBEVENTS FOR THE SELECTED EVENT', data)))
      .subscribe(subevents => {
        this.dictionary[selectedEventId].subevents = subevents;
        console.log('THE DICTIONARY CURRENTLY', this.dictionary)
      })
  }

  setEventListDictionary(eventList: IEvent[]): void {
    eventList.forEach(event => this.dictionary[event.Id] = { event, subevents: [] } );
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
