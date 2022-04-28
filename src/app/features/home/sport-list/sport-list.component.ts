import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItemColorMode } from 'src/app/shared/components/list-item/list-item.model';

import { Sport } from 'src/app/store/store.model';
import { HomeFacade } from '../home.facade';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.scss']
})
export class SportListComponent implements OnInit {

  sportList$: Observable<Sport[]>;
  sportItemConfig = ListItemColorMode.dark;
  
  constructor(
    private _homeFacade: HomeFacade
    ) { 
      this.sportList$ = this._homeFacade.getSportList$();
    }

  ngOnInit(): void {
    this._homeFacade.loadSportsAndTopEvents();
  }

  selectSport(id: number): void {
    this._homeFacade.selectSport(id);
  }

}
