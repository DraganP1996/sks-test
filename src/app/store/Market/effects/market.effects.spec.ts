import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MarketEffects } from './market.effects';

describe('MarketEffects', () => {
  let actions$: Observable<any>;
  let effects: MarketEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MarketEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MarketEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
