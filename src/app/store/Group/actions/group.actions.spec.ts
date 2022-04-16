import * as fromSport from './group.actions';

describe('loadGroups', () => {
  it('should return an action', () => {
    expect(fromSport.loadGroups().type).toBe('[Groups] Load Sports');
  });
});
