import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import * as GroupsActions from '../actions/group.actions';
import { MockDataService } from '../../mockData.service';
import { Group, IEvent } from '../../store.model';
import { loadEventsSuccess } from '../../Event';
import { selectSport } from '../../Sport/actions/sport.actions';


@Injectable()
export class GroupsEffects {

  constructor(
    private actions$: Actions,
    private _mockDataService: MockDataService) {}

  loadGroups$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(selectSport),
      concatMap((payload) =>
        this._mockDataService.getGroupsForSport(payload.id).pipe(
          map(groups => {
            let events: IEvent[] = [];
            const formattedGroups: Group<number>[] = groups.map(group => {
              const { Id, Name, Order, NumQuote, Sport, SportId, Antepost } = group;
              const Events = group.Events.map(event => event.Id);

              events = [...events, ...group.Events];
              return { Id, Name, Order, NumQuote, Sport, SportId, Antepost, Events };
            });

            return GroupsActions.loadGroupsSuccess({ groups: formattedGroups, events })
          }),
          catchError(error => of(GroupsActions.loadGroupsFailure({ error }))))
      )
    );
  });

}
