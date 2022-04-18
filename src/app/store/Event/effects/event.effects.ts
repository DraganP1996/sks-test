import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SportActions from '../actions/event.actions';
import { MockDataService } from '../../mockData.service';



@Injectable()
export class EventEffects {

  constructor(
    private actions$: Actions,
    private _mockDataService: MockDataService) {}

  loadEvents$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SportActions.loadTopEvents),
      mergeMap(() =>
        this._mockDataService.getTopEventList().pipe(
          map(topEvents => SportActions.loadTopEventsSuccess({ topEvents })),
          catchError(error => of(SportActions.loadEventsFailure({ error }))))
      )
    );
  });

}
