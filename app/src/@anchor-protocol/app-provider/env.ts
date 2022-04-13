export enum ANCHOR_TX_KEY {
  EARN_DEPOSIT = 'ANCHOR_TX_EARN_DEPOSIT',
  EARN_WITHDRAW = 'ANCHOR_TX_EARN_WITHDRAW',
  BORROW_BORROW = 'ANCHOR_TX_BORROW_BORROW',
  BORROW_REPAY = 'ANCHOR_TX_BORROW_BORROW',
  BORROW_PROVIDE_COLLATERAL = 'ANCHOR_TX_BORROW_BORROW',
  BORROW_REDEEM_COLLATERAL = 'ANCHOR_TX_BORROW_BORROW',
  BOND_MINT = 'ANCHOR_TX_BOND_MINT',
  BOND_BURN = 'ANCHOR_TX_BOND_BURN',
  BOND_SWAP = 'ANCHOR_TX_BOND_SWAP',
  BOND_CLAIM = 'ANCHOR_TX_BOND_CLAIM',
  BASSET_IMPORT = 'ANCHOR_TX_BASSET_IMPORT',
  BASSET_EXPORT = 'ANCHOR_TX_BASSET_EXPORT',
  BOND_WITHDRAW = 'ANCHOR_TX_BOND_WITHDRAW',
  ANC_ANC_UST_LP_PROVIDE = 'ANCHOR_TX_ANC_ANC_UST_LP_PROVIDE',
  ANC_ANC_UST_LP_WITHDRAW = 'ANCHOR_TX_ANC_ANC_UST_LP_WITHDRAW',
  ANC_ANC_UST_LP_STAKE = 'ANCHOR_TX_ANC_ANC_UST_LP_STAKE',
  ANC_ANC_UST_LP_UNSTAKE = 'ANCHOR_TX_ANC_ANC_UST_LP_UNSTAKE',
  ANC_BUY = 'ANCHOR_TX_ANC_BUY',
  ANC_SELL = 'ANCHOR_TX_ANC_SELL',
  ANC_GOVERNANCE_STAKE = 'ANCHOR_TX_ANC_GOVERNANCE_STAKE',
  ANC_GOVERNANCE_UNSTAKE = 'ANCHOR_TX_ANC_GOVERNANCE_UNSTAKE',
  GOV_CREATE_POLL = 'ANCHOR_TX_GOV_CREATE_POLL',
  GOV_VOTE = 'ANCHOR_TX_GOV_VOTE',
  REWARDS_ALL_CLAIM = 'ANCHOR_TX_REWARDS_ALL_CLAIM',
  REWARDS_ANC_UST_LP_CLAIM = 'ANCHOR_TX_REWARDS_UST_LP_CLAIM',
  REWARDS_UST_BORROW_CLAIM = 'ANCHOR_TX_REWARDS_UST_BORROW_CLAIM',
  AIRDROP_CLAIM = 'ANCHOR_TX_AIRDROP_CLAIM',
  TERRA_SEND = 'ANCHOR_TX_TERRA_SEND',
}

export enum ANCHOR_QUERY_KEY {
  EARN_EPOCH_STATES = 'ANCHOR_QUERY_EARN_EPOCH_STATES',
  EARN_APY_HISTORY = 'ANCHOR_QUERY_EARN_APY_HISTORY',
  EARN_TRANSACTION_HISTORY = 'ANCHOR_QUERY_EARN_TRANSACTION_HISTORY',
  BORROW_MARKET = 'ANCHOR_QUERY_BORROW_MARKET',
  BORROW_BORROWER = 'ANCHOR_QUERY_BORROW_BORROWER',
  BORROW_APY = 'ANCHOR_QUERY_BORROW_APY',
  BORROW_COLLATERAL_BORROWER = 'ANCHOR_QUERY_BORROW_COLLATERAL_BORROWER',
  BASSET_INFO = 'ANCHOR_QUERY_BASSET_INFO',
  BASSET_INFO_LIST = 'ANCHOR_QUERY_BASSET_INFO_LIST',
  BASSET_INFO_BY_TOKEN_ADDR = 'ANCHOR_QUERY_BASSET_INFO_BY_TOKEN_ADDR',
  ANCHOR_QUERY_BASSET_INFO_BY_TOKEN_SYMBOL = 'ANCHOR_QUERY_BASSET_INFO_BY_TOKEN_SYMBOL',
  BASSET_INFO_AND_BALANCE_TOTAL = 'ANCHOR_QUERY_BASSET_INFO_AND_BALANCE_TOTAL',
  BASSET_INFO_AND_BALANCE_BY_TOKEN_ADDR = 'ANCHOR_QUERY_BASSET_INFO_AND_BALANCE_BY_TOKEN_ADDR',
  BOND_BLUNA_EXCHANGE_RATE = 'ANCHOR_QUERY_BOND_EXHCNAGE_RATE',
  BOND_BLUNA_PRICE = 'ANCHOR_QUERY_BOND_BLUNA_PRICE',
  BOND_CLAIMABLE_REWARDS = 'ANCHOR_QUERY_BOND_CLAIMABLE_REWARDS',
  BOND_BETH_CLAIMABLE_REWARDS = 'ANCHOR_QUERY_BOND_CLAIMABLE_REWARDS',
  BOND_BETH_CLAIMABLE_REWARDS_TOTAL = 'ANCHOR_QUERY_BOND_CLAIMABLE_REWARDS_TOTAL',
  BOND_VALIDATORS = 'ANCHOR_QUERY_BOND_VALIDATORS',
  BOND_WITHDRAWABLE_AMOUNT = 'ANCHOR_QUERY_BOND_WITHDRAWABLE_AMOUNT',
  BRIDGE_ASSETS = 'ANCHOR_QUERY_BRIDGE_ASSETS',
  ANC_PRICE = 'ANCHOR_QUERY_ANC_PRICE',
  ANC_LP_STAKING_STATE = 'ANCHOR_QUERY_ANC_STAKING_STATE',
  ANC_BALANCE = 'ANCHOR_QUERY_ANC_BALANCE',
  ANC_TOKEN_INFO = 'ANCHOR_QUERY_ANC_TOKEN_INFO',
  ANC_VESTING_ACCOUNT = 'ANCHOR_QUERY_ANC_VESTING_ACCOUNT',
  ANC_STAKED_BALANCE = 'ANCHOR_QUERY_ANC_STAKED_BALANCE',
  ANC_VOTING_POWER = 'ANCHOR_QUERY_ANC_VOTING_POWER',
  GOV_CONFIG = 'ANCHOR_QUERY_GOV_CONFIG',
  GOV_DISTRIBUTION_MODEL_UPDATE_CONFIG = 'ANCHOR_QUERY_GOV_DISTRIBUTION_MODEL_UPDATE_CONFIG',
  GOV_POLL = 'ANCHOR_QUERY_GOV_POLL',
  GOV_POLLS = 'ANCHOR_QUERY_GOV_POLLS',
  GOV_STATE = 'ANCHOR_QUERY_GOV_STATE',
  GOV_VOTERS = 'ANCHOR_QUERY_GOV_VOTERS',
  GOV_MYPOLLS = 'ANCHOR_QUERY_GOV_MYPOLLS',
  REWARDS_ANC_GOVERNANCE_REWARDS = 'ANCHOR_QUERY_REWARDS_ANC_GOVERNANCE_REWARDS',
  REWARDS_ANCHOR_LP_REWARDS = 'ANCHOR_QUERY_REWARDS_ANCHOR_LP_REWARDS',
  REWARDS_ANC_UST_LP_REWARDS = 'ANCHOR_QUERY_REWARDS_ANC_UST_LP_REWARDS',
  //REWARDS_CLAIMABLE_ANC_UST_LP_REWARDS = 'ANCHOR_QUERY_REWARDS_CLAIMABLE_ANC_UST_LP_REWARDS',
  REWARDS_CLAIMABLE_UST_BORROW_REWARDS = 'ANCHOR_QUERY_REWARDS_CLAIMABLE_UST_BORROW_REWARDS',
  REWARDS_UST_BORROW_REWARDS = 'ANCHOR_QUERY_REWARDS_UST_BORROW_REWARDS',
  AIRDROP_CHECK = 'ANCHOR_QUERY_AIRDROP_CHECK',
  TERRA_LAST_SYNCED_HEIGHT = 'ANCHOR_QUERY_LAST_SYNCED_HEIGHT',
  MARKET_STATE = 'ANCHOR_QUERY_MARKET_STATE',
  MARKET_BASSET = 'ANCHOR_QUERY_MARKET_BASSET',
  MARKET_STABLE_COIN = 'ANCHOR_QUERY_MARKET_STABLE_COIN',
  MARKET_ANC = 'ANCHOR_QUERY_MARKET_ANC',
  MARKET_BLUNA = 'ANCHOR_QUERY_MARKET_BLUNA',
  MARKET_BETH = 'ANCHOR_QUERY_MARKET_BETH',
  MARKET_COLLATERALS = 'ANCHOR_QUERY_MARKET_COLLATERALS',
  MARKET_DEPOSIT_AND_BORROW = 'ANCHOR_QUERY_MARKET_DEPOSIT_AND_BORROW',
  MARKET_UST = 'ANCHOR_QUERY_MARKET_UST',
  MARKET_BUYBACK = 'ANCHOR_QUERY_MARKET_BUYBACK',
  EVM_TERRA_ADDRESS = 'ANCHOR_QUERY_EVM_TERRA_ADDRESS',
  WHITELIST_COLLATERAL_BY_TOKEN_ADDR = 'ANCHOR_QUERY_WHITELIST_COLLATERAL_BY_TOKEN_ADDR',
  WHITELIST_COLLATERAL = 'ANCHOR_QUERY_WHITELIST_COLLATERAL',
  ASTRO_PRICE = 'ASTRO_PRICE',
  EVM_BLOCK_NUMBER = 'EVM_BLOCK_NUMBER',
  PROJECTED_EARN_APY = 'PROJECTED_EARN_APY',
  BLOCK = 'BLOCK',
}
