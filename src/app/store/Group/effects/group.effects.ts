import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import * as GroupsActions from '../actions/group.actions';
import { MockDataService } from '../../mockData.service';
import { Group, IEvent } from '../../store.model';
import { loadEventsSuccess } from '../../Event';


@Injectable()
export class GroupsEffects {

  constructor(
    private actions$: Actions,
    private _mockDataService: MockDataService) {}

  loadGroups$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(GroupsActions.loadGroups),
      concatMap((payload) =>
        this._mockDataService.getGroupsForSport(payload.sportId).pipe(
          map(groups => {
            let events: IEvent[] = [];
            const formattedGroups: Group<number>[] = groups.map(group => {
              const { id, Name, Order, NumQuote, Sport, SportId, Antepost } = group;
              const Events = group.Events.map(event => event.id);

              events = [...events, ...group.Events];
              return { id, Name, Order, NumQuote, Sport, SportId, Antepost, Events };
            });

            return GroupsActions.loadGroupsSuccess({ groups: formattedGroups, events })
          }),
          catchError(error => of(GroupsActions.loadGroupsFailure({ error }))))
      )
    );
  });

}
