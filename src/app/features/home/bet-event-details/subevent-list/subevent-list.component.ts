import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubEvent } from 'src/app/store/store.model';
import { HomeFacade } from '../../home.facade';

@Component({
  selector: 'app-subevent-list',
  templateUrl: './subevent-list.component.html',
  styleUrls: ['./subevent-list.component.scss']
})
export class SubeventListComponent implements OnInit {

  @Input() eventId!: number;

  subevents$!: Observable<SubEvent<number>[]>;

  groups$!: Observable<any>;

  constructor(
    private _homeFacade: HomeFacade
    ) { }

  ngOnInit(): void {
    console.log('LALALA', this.eventId);
    this.subevents$ = this._homeFacade.getEventSubevents(this.eventId);
    this.groups$ = this._homeFacade.getGroupedSubevents(this.eventId)
  }

}
