import * as fromSport from '../reducers/sport.reducer';
import { selectSportState } from './sport.selectors';

describe('Sport Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSportState({
      [fromSport.sportFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
