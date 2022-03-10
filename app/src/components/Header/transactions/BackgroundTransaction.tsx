import { useEvmWallet } from '@libs/evm-wallet';
import { SnackbarContent } from '@libs/neumorphism-ui/components/Snackbar';
import { Snackbar, useSnackbar } from '@libs/snackbar';
import { IconButton, LinearProgress } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useResumeTx } from 'tx/evm';
import { useTransaction } from 'tx/evm/storage/useTransaction';
import { Transaction } from 'tx/evm/storage/useTransactions';
import { txResultMessage } from 'tx/evm/utils';
import { TransactionDisplay } from './TransactionDisplay';
import { useExecuteOnceWhen } from './utils';

export type BackgroundTransactionProps = { tx: Transaction };

export const BackgroundTransaction = ({ tx }: BackgroundTransactionProps) => {
  const { addSnackbar } = useSnackbar();

  useEffect(() => {
    const snackbarControl = addSnackbar(
      <TxSnackbar
        key={tx.receipt.transactionHash}
        txHash={tx.receipt.transactionHash}
      />,
    );

    return function cleanup() {
      snackbarControl?.close();
    };

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <React.Fragment />;
};

const TxSnackbarBase = ({
  className,
  txHash,
}: {
  className?: string;
  txHash: string;
}) => {
  const tx = useTransaction(txHash);
  if (!tx) {
    return null;
  }

  return (
    <Snackbar autoClose={false}>
      <div className={className}>
        <LinearProgress className="tx-progress" />
        <SnackbarContent message={<TxMessage tx={tx} />} />
      </div>
    </Snackbar>
  );
};

const TxSnackbar = styled(TxSnackbarBase)`
  display: flex;
  flex-direction: column;

  .MuiSnackbarContent-action {
    padding-left: 0px;
  }

  .tx-progress {
    transform: translateY(4px);
    border-radius: 5px;
    background-color: inherit;

    .MuiLinearProgress-barColorPrimary {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const TxMessageBase = ({
  className,
  tx,
}: {
  className?: string;
  tx: Transaction;
}) => {
  const { connectType, chainId } = useEvmWallet();
  const backgroundTx = useResumeTx(tx);
  const { dismissTx, alreadyRunning } = backgroundTx?.utils ?? {};
  const [execute] = backgroundTx?.stream ?? [null, null];

  useExecuteOnceWhen(
    () => {
      execute!({});
    },
    () => Boolean(execute) && !alreadyRunning,
  );

  return (
    <div className={className}>
      <div className="tx-content">
        <TransactionDisplay tx={tx} />
        <div className="tx-message">
          {txResultMessage(
            tx.lastEventKind,
            connectType!,
            chainId!,
            tx.display.txKind,
          )}
        </div>
      </div>
      <IconButton
        onClick={() => dismissTx?.(tx.receipt.transactionHash)}
        className="tx-dismiss"
        key="close"
        aria-label="close"
        color="inherit"
      >
        <Close />
      </IconButton>
    </div>
  );
};

const TxMessage = styled(TxMessageBase)`
  display: flex;

  .tx-dismiss {
    padding: 0 10px;
  }

  .tx-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .tx-message {
    align-self: flex-start;
    font-size: 10px;
    margin-left: 10px;
    max-width: 300px;
    font-weight: 500;
    color: ${({ theme }) => theme.dimTextColor};
  }
`;