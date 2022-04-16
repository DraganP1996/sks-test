import * as fromMarketCategory from './market-category.actions';

describe('loadMarketCategories', () => {
  it('should return an action', () => {
    expect(fromMarketCategory.loadMarketCategories().type).toBe('[MarketCategory] Load MarketCategories');
  });
});
