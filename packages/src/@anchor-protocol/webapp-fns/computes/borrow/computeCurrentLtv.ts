import type { Rate } from '@anchor-protocol/types';
import { moneyMarket } from '@anchor-protocol/types';
import big, { Big } from 'big.js';
import { computeCollateralTotalUST } from './computeCollateralTotalUST';

export function computeCurrentLtv(
  marketBorrowerInfo: moneyMarket.market.BorrowerInfoResponse,
  overseerCollaterals: moneyMarket.overseer.CollateralsResponse,
  oraclePrices: moneyMarket.oracle.PricesResponse,
): Rate<Big> | undefined {
  const collateralTotalUST = computeCollateralTotalUST(
    overseerCollaterals,
    oraclePrices,
  );

  return big(marketBorrowerInfo.loan_amount).div(
    collateralTotalUST,
  ) as Rate<Big>;
}
