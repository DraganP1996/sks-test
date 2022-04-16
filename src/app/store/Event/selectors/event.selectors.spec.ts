import * as fromSport from '../reducers/event.reducer';
import { selectEventState } from './event.selectors';

describe('Sport Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEventState({
      [fromSport.eventsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
