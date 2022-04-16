import * as fromMarketCategory from '../reducers/market-category.reducer';
import { selectMarketCategoriestate } from './market-category.selectors';

describe('MarketCategory Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMarketCategoriestate({
      [fromMarketCategory.MarketCategoryFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
