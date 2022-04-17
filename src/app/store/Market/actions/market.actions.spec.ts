import * as fromMarket from './market.actions';

describe('loadMarkets', () => {
  it('should return an action', () => {
    expect(fromMarket.loadActiveMarketsForEvent().type).toBe('[Market] Load Markets');
  });
});
