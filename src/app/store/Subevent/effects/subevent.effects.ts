import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as SubeventActions from '../actions/subevent.actions';



@Injectable()
export class SubeventEffects {

  loadSubevents$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SubeventActions.loadSubevents),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SubeventActions.loadSubeventsSuccess({ data })),
          catchError(error => of(SubeventActions.loadSubeventsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
