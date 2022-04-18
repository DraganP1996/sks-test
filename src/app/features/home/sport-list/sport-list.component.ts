import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Sport } from 'src/app/store/store.model';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.scss']
})
export class SportListComponent implements OnInit, OnDestroy {

  sportList$!: Observable<Sport[]>;
  
  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _homeFacade: HomeFacade) { }

  ngOnInit(): void {
    this._homeFacade.loadSports();
    this.sportList$ = this._homeFacade.getSportList$();
  }

  selectSport(id: number): void {
    this._homeFacade.selectSport(id);
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
