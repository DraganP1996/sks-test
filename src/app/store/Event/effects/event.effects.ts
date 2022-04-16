import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

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
          map(data => SportActions.loadTopEventsSuccess({ ids: data.map(topEvent => topEvent.Id) })),
          catchError(error => of(SportActions.loadEventsFailure({ error }))))
      )
    );
  });

}
