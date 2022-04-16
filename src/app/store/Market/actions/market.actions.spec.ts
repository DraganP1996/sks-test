import * as fromMarket from './market.actions';

describe('loadMarkets', () => {
  it('should return an action', () => {
    expect(fromMarket.loadMarkets().type).toBe('[Market] Load Markets');
  });
});
