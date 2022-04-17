import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { OddEffects } from './odd.effects';

describe('OddEffects', () => {
  let actions$: Observable<any>;
  let effects: OddEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OddEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(OddEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
