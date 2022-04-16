import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MarketCategoryEffects } from './market-category.effects';

describe('MarketCategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: MarketCategoryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MarketCategoryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MarketCategoryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
