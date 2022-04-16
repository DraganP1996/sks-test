import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GroupsEffects } from './group.effects';

describe('GroupsEffects', () => {
  let actions$: Observable<any>;
  let effects: GroupsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GroupsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
