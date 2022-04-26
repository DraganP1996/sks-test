import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ListItemColorMode } from 'src/app/shared/components/list-item/list-item.model';

import { Sport } from 'src/app/store/store.model';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.scss']
})
export class SportListComponent implements OnInit, OnDestroy {

  sportList$!: Observable<Sport[]>;
  sportItemConfig = ListItemColorMode.dark;
  
  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _homeFacade: HomeFacade) { }

  ngOnInit(): void {
    this._homeFacade.loadSports();

    this._homeFacade.getSportList$()
      .subscribe(() => console.log('Sport list changed'))
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
