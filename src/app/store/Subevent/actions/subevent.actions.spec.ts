import * as fromSubevent from './subevent.actions';

describe('loadSubevents', () => {
  it('should return an action', () => {
    expect(fromSubevent.loadSubevents().type).toBe('[Subevent] Load Subevents');
  });
});
