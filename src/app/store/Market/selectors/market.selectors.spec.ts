import * as fromMarket from '../reducers/market.reducer';
import { selectMarketstate } from './market.selectors';

describe('Market Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMarketstate({
      [fromMarket.MarketFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
