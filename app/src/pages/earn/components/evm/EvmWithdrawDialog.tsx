import React from 'react';
import {
  useEarnEpochStatesQuery,
  useEarnWithdrawForm,
} from '@anchor-protocol/app-provider';
import { ActionButton } from '@libs/neumorphism-ui/components/ActionButton';
import { useAccount } from 'contexts/account';
import { WithdrawDialog } from '../WithdrawDialog';
import { aUST } from '@anchor-protocol/types';
import { Big } from 'big.js';
import { useWithdrawUstTx } from 'tx/evm';
import { DialogProps } from '@libs/use-dialog';
import { Container } from 'components/primitives/Container';

export function EvmWithdrawDialog(props: DialogProps<{}, void>) {
  const { connected } = useAccount();

  const { data } = useEarnEpochStatesQuery();

  const state = useEarnWithdrawForm();

  const [withdraw, withdrawTxResult] = useWithdrawUstTx();

  const { withdrawAmount, availablePost } = state;

  return (
    <WithdrawDialog {...props} {...state} txResult={withdrawTxResult}>
      <Container direction="row" gap={10}>
        <ActionButton
          className="button"
          disabled={
            !availablePost || !connected || !withdraw || !availablePost || !data
          }
          onClick={() =>
            withdraw!({
              withdrawAmount: Big(withdrawAmount)
                .div(data!.moneyMarketEpochState.exchange_rate)
                .toString() as aUST,
            })
          }
        >
          Proceed
        </ActionButton>
      </Container>
    </WithdrawDialog>
  );
}