import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as GroupsActions from '../actions/group.actions';



@Injectable()
export class GroupsEffects {

  private _loadGroups$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(GroupsActions.loadGroups),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => GroupsActions.loadGroupsSuccess({ data })),
          catchError(error => of(GroupsActions.loadGroupsFailure({ error }))))
      )
    );
  });
  public get loadGroups$() {
    return this._loadGroups$;
  }
  public set loadGroups$(value) {
    this._loadGroups$ = value;
  }



  constructor(private actions$: Actions) {}

}
