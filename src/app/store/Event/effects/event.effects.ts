import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as SportActions from '../actions/event.actions';



@Injectable()
export class EventEffects {

  loadSports$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SportActions.loadEvents),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SportActions.loadEventsSuccess({ data })),
          catchError(error => of(SportActions.loadEventsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
