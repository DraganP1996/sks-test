import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as SportActions from '../actions/sport.actions';



@Injectable()
export class SportEffects {

  loadSports$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SportActions.loadSports),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SportActions.loadSportsSuccess({ data })),
          catchError(error => of(SportActions.loadSportsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
