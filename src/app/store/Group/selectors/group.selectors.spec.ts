import * as fromGroup from '../reducers/group.reducer';
import { selectGroupState } from './group.selectors';

describe('Group Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGroupState({
      [fromGroup.groupFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
