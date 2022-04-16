import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SubeventEffects } from './subevent.effects';

describe('SubeventEffects', () => {
  let actions$: Observable<any>;
  let effects: SubeventEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SubeventEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SubeventEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
