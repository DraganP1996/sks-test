import * as fromSport from './sport.actions';

describe('loadSports', () => {
  it('should return an action', () => {
    expect(fromSport.loadSports().type).toBe('[Sport] Load Sports');
  });
});
