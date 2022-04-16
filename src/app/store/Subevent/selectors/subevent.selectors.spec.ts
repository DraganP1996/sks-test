import * as fromSubevent from '../reducers/subevent.reducer';
import { selectSubeventstate } from './subevent.selectors';

describe('Subevent Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSubeventstate({
      [fromSubevent.SubeventFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
