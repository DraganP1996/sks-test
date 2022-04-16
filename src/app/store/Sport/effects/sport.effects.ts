import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, tap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as SportActions from '../actions/sport.actions';
import { MockDataService } from '../../mockData.service';
import { loadSports, loadSportsSuccess } from '../actions/sport.actions';
import { Sport } from '../../store.model';



@Injectable()
export class SportEffects {

  constructor(
    private actions$: Actions, 
    private _mockDataService: MockDataService) {}

  loadSports$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(loadSports),
      mergeMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this._mockDataService.getSportList().pipe(
          map((sports: Sport[]) => loadSportsSuccess({ sports })),
          catchError(error => of(SportActions.loadSportsFailure({ error }))))
      )
    );
  });

}
