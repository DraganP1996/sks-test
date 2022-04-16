import * as fromSport from './event.actions';

describe('loadSports', () => {
  it('should return an action', () => {
    expect(fromSport.loadEvents().type).toBe('[Sport] Load Sports');
  });
});
