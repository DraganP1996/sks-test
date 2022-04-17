import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as OddActions from '../actions/odd.actions';
import { MockDataService } from '../../mockData.service';
import { loadOdds, loadOddsSuccess } from '../actions/odd.actions';
import { OddData } from '../../store.model';



@Injectable()
export class OddEffects {

  constructor(
    private actions$: Actions, 
    private _mockDataService: MockDataService) {}

  loadOdds$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(loadOdds),
      mergeMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((odds: OddData[]) => loadOddsSuccess({ odds })),
          catchError(error => of(OddActions.loadOddsFailure({ error }))))
      )
    );
  });

}
