import { AncUstLP, uUST } from '@anchor-protocol/types';
import { ancAncUstLpUnstakeTx } from '@anchor-protocol/webapp-fns';
import { useStream } from '@rx-stream/react';

import { useConnectedWallet } from '@terra-money/wallet-provider';
import { useRefetchQueries, useTerraWebapp } from '@libs/webapp-provider';
import { useCallback } from 'react';
import { useAnchorWebapp } from '../../contexts/context';
import { ANCHOR_TX_KEY } from '../../env';

export interface AncAncUstLpUnstakeTxParams {
  lpAmount: AncUstLP;
  onTxSucceed?: () => void;
}

export function useAncAncUstLpUnstakeTx() {
  const connectedWallet = useConnectedWallet();

  const { addressProvider, constants } = useAnchorWebapp();

  const { mantleEndpoint, mantleFetch, txErrorReporter } = useTerraWebapp();

  const refetchQueries = useRefetchQueries();

  const stream = useCallback(
    ({ lpAmount, onTxSucceed }: AncAncUstLpUnstakeTxParams) => {
      if (!connectedWallet || !connectedWallet.availablePost) {
        throw new Error('Can not post!');
      }

      return ancAncUstLpUnstakeTx({
        // fabricateStakingUnbond
        address: connectedWallet.walletAddress,
        amount: lpAmount,
        // post
        network: connectedWallet.network,
        post: connectedWallet.post,
        fixedGas: constants.fixedGas.toString() as uUST,
        gasFee: constants.gasFee,
        gasAdjustment: constants.gasAdjustment,
        addressProvider,
        // query
        mantleEndpoint,
        mantleFetch,
        // error
        txErrorReporter,
        // side effect
        onTxSucceed: () => {
          onTxSucceed?.();
          refetchQueries(ANCHOR_TX_KEY.ANC_ANC_UST_LP_UNSTAKE);
        },
      });
    },
    [
      connectedWallet,
      constants.fixedGas,
      constants.gasFee,
      constants.gasAdjustment,
      addressProvider,
      mantleEndpoint,
      mantleFetch,
      txErrorReporter,
      refetchQueries,
    ],
  );

  const streamReturn = useStream(stream);

  return connectedWallet ? streamReturn : [null, null];
}
