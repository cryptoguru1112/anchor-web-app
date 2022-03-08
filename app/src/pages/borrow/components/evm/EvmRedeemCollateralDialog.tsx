import React from 'react';
import { bAsset, ERC20Addr } from '@anchor-protocol/types';
import type { DialogProps } from '@libs/use-dialog';
import { useAccount } from 'contexts/account';
import { useCallback } from 'react';
import { useRedeemCollateralTx } from 'tx/evm';
import { RedeemCollateralDialog } from '../RedeemCollateralDialog';
import { RedeemCollateralFormParams } from '../types';
import { useERC20Balance } from '@libs/app-provider/queries/erc20/balanceOf';

export const EvmRedeemCollateralDialog = (
  props: DialogProps<RedeemCollateralFormParams>,
) => {
  const { token, collateralToken, tokenDisplay } = props;

  const { connected } = useAccount();

  const uTokenBalance = useERC20Balance<bAsset>(token as ERC20Addr);

  const redeemCollateralTx = useRedeemCollateralTx();
  const [postTx, txResult] = redeemCollateralTx?.stream ?? [null, null];

  const proceed = useCallback(
    (amount: bAsset) => {
      if (connected && postTx) {
        postTx({
          collateralContractEvm: token,
          collateralContractTerra: collateralToken,
          amount,
          tokenDisplay,
        });
      }
    },
    [connected, postTx, token, collateralToken, tokenDisplay],
  );

  return (
    <RedeemCollateralDialog
      {...props}
      txResult={txResult}
      uTokenBalance={uTokenBalance}
      proceedable={postTx !== undefined}
      onProceed={proceed}
    />
  );
};
