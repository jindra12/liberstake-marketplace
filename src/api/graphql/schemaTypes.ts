import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: { input: any; output: any; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /** The day, does not include a time. */
  Date: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Account = Node & {
  __typename?: 'Account';
  /** Reads and enables pagination through a set of `Account`. */
  accountsByAssetTransferFromIdAndToId: AccountAccountsByAssetTransferFromIdAndToIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByAssetTransferToIdAndFromId: AccountAccountsByAssetTransferToIdAndFromIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByMeritFromIdAndToId: AccountAccountsByMeritFromIdAndToIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByMeritToIdAndFromId: AccountAccountsByMeritToIdAndFromIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByTransferFromIdAndToId: AccountAccountsByTransferFromIdAndToIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByTransferToIdAndFromId: AccountAccountsByTransferToIdAndFromIdManyToManyConnection;
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfersByFromId: AssetTransfersConnection;
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfersByToId: AssetTransfersConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByAssetTransferFromIdAndBlockId: AccountBlocksByAssetTransferFromIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByAssetTransferToIdAndBlockId: AccountBlocksByAssetTransferToIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByExtrinsicSignerIdAndBlockId: AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByMeritFromIdAndBlockId: AccountBlocksByMeritFromIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByMeritToIdAndBlockId: AccountBlocksByMeritToIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksBySoraBurnedSenderIdAndBlockId: AccountBlocksBySoraBurnedSenderIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksBySoraMintedRecipientIdAndBlockId: AccountBlocksBySoraMintedRecipientIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByStakingUserIdAndBlockId: AccountBlocksByStakingUserIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByTaxPoolAddressIdAndBlockId: AccountBlocksByTaxPoolAddressIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByTaxUnPoolAddressIdAndBlockId: AccountBlocksByTaxUnPoolAddressIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByTransferFromIdAndBlockId: AccountBlocksByTransferFromIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Block`. */
  blocksByTransferToIdAndBlockId: AccountBlocksByTransferToIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceiptsByFromId: BridgeReceiptsConnection;
  /** Reads and enables pagination through a set of `BridgeVote`. */
  bridgeVotesByRelayId: BridgeVotesConnection;
  /** Reads and enables pagination through a set of `EthAccount`. */
  ethAccountsByBridgeReceiptFromIdAndEthRecipientId: AccountEthAccountsByBridgeReceiptFromIdAndEthRecipientIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Event`. */
  eventsByBridgeReceiptFromIdAndEventId: AccountEventsByBridgeReceiptFromIdAndEventIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Event`. */
  eventsByBridgeVoteRelayIdAndEventId: AccountEventsByBridgeVoteRelayIdAndEventIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Extrinsic`. */
  extrinsics: ExtrinsicsConnection;
  id: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Merit`. */
  meritsByFromId: MeritsConnection;
  /** Reads and enables pagination through a set of `Merit`. */
  meritsByToId: MeritsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `SoraBurned`. */
  soraBurnedsBySenderId: SoraBurnedsConnection;
  /** Reads and enables pagination through a set of `SoraMinted`. */
  soraMintedsByRecipientId: SoraMintedsConnection;
  /** Reads and enables pagination through a set of `Staking`. */
  stakingsByUserId: StakingsConnection;
  /** Reads and enables pagination through a set of `TaxPool`. */
  taxPoolsByAddressId: TaxPoolsConnection;
  /** Reads and enables pagination through a set of `TaxUnPool`. */
  taxUnPoolsByAddressId: TaxUnPoolsConnection;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfersByFromId: TransfersConnection;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfersByToId: TransfersConnection;
};


export type AccountAccountsByAssetTransferFromIdAndToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByAssetTransferToIdAndFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByMeritFromIdAndToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByMeritToIdAndFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByTransferFromIdAndToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByTransferToIdAndFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAssetTransfersByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};


export type AccountAssetTransfersByToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};


export type AccountBlocksByAssetTransferFromIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByAssetTransferToIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByExtrinsicSignerIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByMeritFromIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByMeritToIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksBySoraBurnedSenderIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksBySoraMintedRecipientIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByStakingUserIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByTaxPoolAddressIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByTaxUnPoolAddressIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByTransferFromIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBlocksByTransferToIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type AccountBridgeReceiptsByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};


export type AccountBridgeVotesByRelayIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Votes_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeVoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeVotesOrderBy>>;
};


export type AccountEthAccountsByBridgeReceiptFromIdAndEthRecipientIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Eth_Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<EthAccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EthAccountsOrderBy>>;
};


export type AccountEventsByBridgeReceiptFromIdAndEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


export type AccountEventsByBridgeVoteRelayIdAndEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


export type AccountExtrinsicsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Extrinsics_Distinct_Enum>>>;
  filter?: InputMaybe<ExtrinsicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};


export type AccountMeritsByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};


export type AccountMeritsByToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};


export type AccountSoraBurnedsBySenderIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Burneds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraBurnedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraBurnedsOrderBy>>;
};


export type AccountSoraMintedsByRecipientIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Minteds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraMintedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraMintedsOrderBy>>;
};


export type AccountStakingsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Stakings_Distinct_Enum>>>;
  filter?: InputMaybe<StakingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StakingsOrderBy>>;
};


export type AccountTaxPoolsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxPoolsOrderBy>>;
};


export type AccountTaxUnPoolsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Un_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxUnPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxUnPoolsOrderBy>>;
};


export type AccountTransfersByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};


export type AccountTransfersByToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `AssetTransfer`. */
export type AccountAccountsByAssetTransferFromIdAndToIdManyToManyConnection = {
  __typename?: 'AccountAccountsByAssetTransferFromIdAndToIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `AssetTransfer`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByAssetTransferFromIdAndToIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `AssetTransfer`. */
export type AccountAccountsByAssetTransferFromIdAndToIdManyToManyEdge = {
  __typename?: 'AccountAccountsByAssetTransferFromIdAndToIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfersByToId: AssetTransfersConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `AssetTransfer`. */
export type AccountAccountsByAssetTransferFromIdAndToIdManyToManyEdgeAssetTransfersByToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `AssetTransfer`. */
export type AccountAccountsByAssetTransferToIdAndFromIdManyToManyConnection = {
  __typename?: 'AccountAccountsByAssetTransferToIdAndFromIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `AssetTransfer`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByAssetTransferToIdAndFromIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `AssetTransfer`. */
export type AccountAccountsByAssetTransferToIdAndFromIdManyToManyEdge = {
  __typename?: 'AccountAccountsByAssetTransferToIdAndFromIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfersByFromId: AssetTransfersConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `AssetTransfer`. */
export type AccountAccountsByAssetTransferToIdAndFromIdManyToManyEdgeAssetTransfersByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Merit`. */
export type AccountAccountsByMeritFromIdAndToIdManyToManyConnection = {
  __typename?: 'AccountAccountsByMeritFromIdAndToIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Merit`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByMeritFromIdAndToIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Merit`. */
export type AccountAccountsByMeritFromIdAndToIdManyToManyEdge = {
  __typename?: 'AccountAccountsByMeritFromIdAndToIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Merit`. */
  meritsByToId: MeritsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Merit`. */
export type AccountAccountsByMeritFromIdAndToIdManyToManyEdgeMeritsByToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Merit`. */
export type AccountAccountsByMeritToIdAndFromIdManyToManyConnection = {
  __typename?: 'AccountAccountsByMeritToIdAndFromIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Merit`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByMeritToIdAndFromIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Merit`. */
export type AccountAccountsByMeritToIdAndFromIdManyToManyEdge = {
  __typename?: 'AccountAccountsByMeritToIdAndFromIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Merit`. */
  meritsByFromId: MeritsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Merit`. */
export type AccountAccountsByMeritToIdAndFromIdManyToManyEdgeMeritsByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type AccountAccountsByTransferFromIdAndToIdManyToManyConnection = {
  __typename?: 'AccountAccountsByTransferFromIdAndToIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Transfer`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByTransferFromIdAndToIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type AccountAccountsByTransferFromIdAndToIdManyToManyEdge = {
  __typename?: 'AccountAccountsByTransferFromIdAndToIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfersByToId: TransfersConnection;
};


/** A `Account` edge in the connection, with data from `Transfer`. */
export type AccountAccountsByTransferFromIdAndToIdManyToManyEdgeTransfersByToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type AccountAccountsByTransferToIdAndFromIdManyToManyConnection = {
  __typename?: 'AccountAccountsByTransferToIdAndFromIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Transfer`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByTransferToIdAndFromIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type AccountAccountsByTransferToIdAndFromIdManyToManyEdge = {
  __typename?: 'AccountAccountsByTransferToIdAndFromIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfersByFromId: TransfersConnection;
};


/** A `Account` edge in the connection, with data from `Transfer`. */
export type AccountAccountsByTransferToIdAndFromIdManyToManyEdgeTransfersByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

export type AccountAggregates = {
  __typename?: 'AccountAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<AccountDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A connection to a list of `Block` values, with data from `AssetTransfer`. */
export type AccountBlocksByAssetTransferFromIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByAssetTransferFromIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `AssetTransfer`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByAssetTransferFromIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `AssetTransfer`. */
export type AccountBlocksByAssetTransferFromIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `AssetTransfer`. */
export type AccountBlocksByAssetTransferFromIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByAssetTransferFromIdAndBlockIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfers: AssetTransfersConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
};


/** A `Block` edge in the connection, with data from `AssetTransfer`. */
export type AccountBlocksByAssetTransferFromIdAndBlockIdManyToManyEdgeAssetTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `AssetTransfer`. */
export type AccountBlocksByAssetTransferToIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByAssetTransferToIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `AssetTransfer`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByAssetTransferToIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `AssetTransfer`. */
export type AccountBlocksByAssetTransferToIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `AssetTransfer`. */
export type AccountBlocksByAssetTransferToIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByAssetTransferToIdAndBlockIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfers: AssetTransfersConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
};


/** A `Block` edge in the connection, with data from `AssetTransfer`. */
export type AccountBlocksByAssetTransferToIdAndBlockIdManyToManyEdgeAssetTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `Extrinsic`. */
export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `Extrinsic`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `Extrinsic`. */
export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `Extrinsic`. */
export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Extrinsic`. */
  extrinsics: ExtrinsicsConnection;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
};


/** A `Block` edge in the connection, with data from `Extrinsic`. */
export type AccountBlocksByExtrinsicSignerIdAndBlockIdManyToManyEdgeExtrinsicsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Extrinsics_Distinct_Enum>>>;
  filter?: InputMaybe<ExtrinsicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `Merit`. */
export type AccountBlocksByMeritFromIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByMeritFromIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `Merit`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByMeritFromIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `Merit`. */
export type AccountBlocksByMeritFromIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `Merit`. */
export type AccountBlocksByMeritFromIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByMeritFromIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Merit`. */
  merits: MeritsConnection;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
};


/** A `Block` edge in the connection, with data from `Merit`. */
export type AccountBlocksByMeritFromIdAndBlockIdManyToManyEdgeMeritsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `Merit`. */
export type AccountBlocksByMeritToIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByMeritToIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `Merit`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByMeritToIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `Merit`. */
export type AccountBlocksByMeritToIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `Merit`. */
export type AccountBlocksByMeritToIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByMeritToIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Merit`. */
  merits: MeritsConnection;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
};


/** A `Block` edge in the connection, with data from `Merit`. */
export type AccountBlocksByMeritToIdAndBlockIdManyToManyEdgeMeritsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `SoraBurned`. */
export type AccountBlocksBySoraBurnedSenderIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksBySoraBurnedSenderIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `SoraBurned`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksBySoraBurnedSenderIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `SoraBurned`. */
export type AccountBlocksBySoraBurnedSenderIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `SoraBurned`. */
export type AccountBlocksBySoraBurnedSenderIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksBySoraBurnedSenderIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
  /** Reads and enables pagination through a set of `SoraBurned`. */
  soraBurneds: SoraBurnedsConnection;
};


/** A `Block` edge in the connection, with data from `SoraBurned`. */
export type AccountBlocksBySoraBurnedSenderIdAndBlockIdManyToManyEdgeSoraBurnedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Burneds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraBurnedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraBurnedsOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `SoraMinted`. */
export type AccountBlocksBySoraMintedRecipientIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksBySoraMintedRecipientIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `SoraMinted`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksBySoraMintedRecipientIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `SoraMinted`. */
export type AccountBlocksBySoraMintedRecipientIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `SoraMinted`. */
export type AccountBlocksBySoraMintedRecipientIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksBySoraMintedRecipientIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
  /** Reads and enables pagination through a set of `SoraMinted`. */
  soraMinteds: SoraMintedsConnection;
};


/** A `Block` edge in the connection, with data from `SoraMinted`. */
export type AccountBlocksBySoraMintedRecipientIdAndBlockIdManyToManyEdgeSoraMintedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Minteds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraMintedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraMintedsOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `Staking`. */
export type AccountBlocksByStakingUserIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByStakingUserIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `Staking`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByStakingUserIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `Staking`. */
export type AccountBlocksByStakingUserIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `Staking`. */
export type AccountBlocksByStakingUserIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByStakingUserIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
  /** Reads and enables pagination through a set of `Staking`. */
  stakings: StakingsConnection;
};


/** A `Block` edge in the connection, with data from `Staking`. */
export type AccountBlocksByStakingUserIdAndBlockIdManyToManyEdgeStakingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Stakings_Distinct_Enum>>>;
  filter?: InputMaybe<StakingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StakingsOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `TaxPool`. */
export type AccountBlocksByTaxPoolAddressIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByTaxPoolAddressIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `TaxPool`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByTaxPoolAddressIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `TaxPool`. */
export type AccountBlocksByTaxPoolAddressIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `TaxPool`. */
export type AccountBlocksByTaxPoolAddressIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByTaxPoolAddressIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
  /** Reads and enables pagination through a set of `TaxPool`. */
  taxPools: TaxPoolsConnection;
};


/** A `Block` edge in the connection, with data from `TaxPool`. */
export type AccountBlocksByTaxPoolAddressIdAndBlockIdManyToManyEdgeTaxPoolsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxPoolsOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `TaxUnPool`. */
export type AccountBlocksByTaxUnPoolAddressIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByTaxUnPoolAddressIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `TaxUnPool`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByTaxUnPoolAddressIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `TaxUnPool`. */
export type AccountBlocksByTaxUnPoolAddressIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `TaxUnPool`. */
export type AccountBlocksByTaxUnPoolAddressIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByTaxUnPoolAddressIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
  /** Reads and enables pagination through a set of `TaxUnPool`. */
  taxUnPools: TaxUnPoolsConnection;
};


/** A `Block` edge in the connection, with data from `TaxUnPool`. */
export type AccountBlocksByTaxUnPoolAddressIdAndBlockIdManyToManyEdgeTaxUnPoolsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Un_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxUnPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxUnPoolsOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `Transfer`. */
export type AccountBlocksByTransferFromIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByTransferFromIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `Transfer`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByTransferFromIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `Transfer`. */
export type AccountBlocksByTransferFromIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `Transfer`. */
export type AccountBlocksByTransferFromIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByTransferFromIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfers: TransfersConnection;
};


/** A `Block` edge in the connection, with data from `Transfer`. */
export type AccountBlocksByTransferFromIdAndBlockIdManyToManyEdgeTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

/** A connection to a list of `Block` values, with data from `Transfer`. */
export type AccountBlocksByTransferToIdAndBlockIdManyToManyConnection = {
  __typename?: 'AccountBlocksByTransferToIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `Transfer`, and the cursor to aid in pagination. */
  edges: Array<AccountBlocksByTransferToIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `Transfer`. */
export type AccountBlocksByTransferToIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `Transfer`. */
export type AccountBlocksByTransferToIdAndBlockIdManyToManyEdge = {
  __typename?: 'AccountBlocksByTransferToIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfers: TransfersConnection;
};


/** A `Block` edge in the connection, with data from `Transfer`. */
export type AccountBlocksByTransferToIdAndBlockIdManyToManyEdgeTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

export type AccountDistinctCountAggregates = {
  __typename?: 'AccountDistinctCountAggregates';
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
};

/** A connection to a list of `EthAccount` values, with data from `BridgeReceipt`. */
export type AccountEthAccountsByBridgeReceiptFromIdAndEthRecipientIdManyToManyConnection = {
  __typename?: 'AccountEthAccountsByBridgeReceiptFromIdAndEthRecipientIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<EthAccountAggregates>;
  /** A list of edges which contains the `EthAccount`, info from the `BridgeReceipt`, and the cursor to aid in pagination. */
  edges: Array<AccountEthAccountsByBridgeReceiptFromIdAndEthRecipientIdManyToManyEdge>;
  /** A list of `EthAccount` objects. */
  nodes: Array<Maybe<EthAccount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `EthAccount` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `EthAccount` edge in the connection, with data from `BridgeReceipt`. */
export type AccountEthAccountsByBridgeReceiptFromIdAndEthRecipientIdManyToManyEdge = {
  __typename?: 'AccountEthAccountsByBridgeReceiptFromIdAndEthRecipientIdManyToManyEdge';
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceiptsByEthRecipientId: BridgeReceiptsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `EthAccount` at the end of the edge. */
  node?: Maybe<EthAccount>;
};


/** A `EthAccount` edge in the connection, with data from `BridgeReceipt`. */
export type AccountEthAccountsByBridgeReceiptFromIdAndEthRecipientIdManyToManyEdgeBridgeReceiptsByEthRecipientIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};

/** A connection to a list of `Event` values, with data from `BridgeReceipt`. */
export type AccountEventsByBridgeReceiptFromIdAndEventIdManyToManyConnection = {
  __typename?: 'AccountEventsByBridgeReceiptFromIdAndEventIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<EventAggregates>;
  /** A list of edges which contains the `Event`, info from the `BridgeReceipt`, and the cursor to aid in pagination. */
  edges: Array<AccountEventsByBridgeReceiptFromIdAndEventIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<EventAggregates>>;
  /** A list of `Event` objects. */
  nodes: Array<Maybe<Event>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Event` values, with data from `BridgeReceipt`. */
export type AccountEventsByBridgeReceiptFromIdAndEventIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<EventsGroupBy>;
  having?: InputMaybe<EventsHavingInput>;
};

/** A `Event` edge in the connection, with data from `BridgeReceipt`. */
export type AccountEventsByBridgeReceiptFromIdAndEventIdManyToManyEdge = {
  __typename?: 'AccountEventsByBridgeReceiptFromIdAndEventIdManyToManyEdge';
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceipts: BridgeReceiptsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Event` at the end of the edge. */
  node?: Maybe<Event>;
};


/** A `Event` edge in the connection, with data from `BridgeReceipt`. */
export type AccountEventsByBridgeReceiptFromIdAndEventIdManyToManyEdgeBridgeReceiptsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};

/** A connection to a list of `Event` values, with data from `BridgeVote`. */
export type AccountEventsByBridgeVoteRelayIdAndEventIdManyToManyConnection = {
  __typename?: 'AccountEventsByBridgeVoteRelayIdAndEventIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<EventAggregates>;
  /** A list of edges which contains the `Event`, info from the `BridgeVote`, and the cursor to aid in pagination. */
  edges: Array<AccountEventsByBridgeVoteRelayIdAndEventIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<EventAggregates>>;
  /** A list of `Event` objects. */
  nodes: Array<Maybe<Event>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Event` values, with data from `BridgeVote`. */
export type AccountEventsByBridgeVoteRelayIdAndEventIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<EventsGroupBy>;
  having?: InputMaybe<EventsHavingInput>;
};

/** A `Event` edge in the connection, with data from `BridgeVote`. */
export type AccountEventsByBridgeVoteRelayIdAndEventIdManyToManyEdge = {
  __typename?: 'AccountEventsByBridgeVoteRelayIdAndEventIdManyToManyEdge';
  /** Reads and enables pagination through a set of `BridgeVote`. */
  bridgeVotes: BridgeVotesConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Event` at the end of the edge. */
  node?: Maybe<Event>;
};


/** A `Event` edge in the connection, with data from `BridgeVote`. */
export type AccountEventsByBridgeVoteRelayIdAndEventIdManyToManyEdgeBridgeVotesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Votes_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeVoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeVotesOrderBy>>;
};

/** A filter to be used against `Account` object types. All fields are combined with a logical ‘and.’ */
export type AccountFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AccountFilter>>;
  /** Filter by the object’s `assetTransfersByFromId` relation. */
  assetTransfersByFromId?: InputMaybe<AccountToManyAssetTransferFilter>;
  /** Some related `assetTransfersByFromId` exist. */
  assetTransfersByFromIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `assetTransfersByToId` relation. */
  assetTransfersByToId?: InputMaybe<AccountToManyAssetTransferFilter>;
  /** Some related `assetTransfersByToId` exist. */
  assetTransfersByToIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `bridgeReceiptsByFromId` relation. */
  bridgeReceiptsByFromId?: InputMaybe<AccountToManyBridgeReceiptFilter>;
  /** Some related `bridgeReceiptsByFromId` exist. */
  bridgeReceiptsByFromIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `bridgeVotesByRelayId` relation. */
  bridgeVotesByRelayId?: InputMaybe<AccountToManyBridgeVoteFilter>;
  /** Some related `bridgeVotesByRelayId` exist. */
  bridgeVotesByRelayIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `extrinsics` relation. */
  extrinsics?: InputMaybe<AccountToManyExtrinsicFilter>;
  /** Some related `extrinsics` exist. */
  extrinsicsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `meritsByFromId` relation. */
  meritsByFromId?: InputMaybe<AccountToManyMeritFilter>;
  /** Some related `meritsByFromId` exist. */
  meritsByFromIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `meritsByToId` relation. */
  meritsByToId?: InputMaybe<AccountToManyMeritFilter>;
  /** Some related `meritsByToId` exist. */
  meritsByToIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<AccountFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AccountFilter>>;
  /** Filter by the object’s `soraBurnedsBySenderId` relation. */
  soraBurnedsBySenderId?: InputMaybe<AccountToManySoraBurnedFilter>;
  /** Some related `soraBurnedsBySenderId` exist. */
  soraBurnedsBySenderIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `soraMintedsByRecipientId` relation. */
  soraMintedsByRecipientId?: InputMaybe<AccountToManySoraMintedFilter>;
  /** Some related `soraMintedsByRecipientId` exist. */
  soraMintedsByRecipientIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `stakingsByUserId` relation. */
  stakingsByUserId?: InputMaybe<AccountToManyStakingFilter>;
  /** Some related `stakingsByUserId` exist. */
  stakingsByUserIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `taxPoolsByAddressId` relation. */
  taxPoolsByAddressId?: InputMaybe<AccountToManyTaxPoolFilter>;
  /** Some related `taxPoolsByAddressId` exist. */
  taxPoolsByAddressIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `taxUnPoolsByAddressId` relation. */
  taxUnPoolsByAddressId?: InputMaybe<AccountToManyTaxUnPoolFilter>;
  /** Some related `taxUnPoolsByAddressId` exist. */
  taxUnPoolsByAddressIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `transfersByFromId` relation. */
  transfersByFromId?: InputMaybe<AccountToManyTransferFilter>;
  /** Some related `transfersByFromId` exist. */
  transfersByFromIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `transfersByToId` relation. */
  transfersByToId?: InputMaybe<AccountToManyTransferFilter>;
  /** Some related `transfersByToId` exist. */
  transfersByToIdExist?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A filter to be used against many `AssetTransfer` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyAssetTransferFilter = {
  /** Aggregates across related `AssetTransfer` match the filter criteria. */
  aggregates?: InputMaybe<AssetTransferAggregatesFilter>;
  /** Every related `AssetTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<AssetTransferFilter>;
  /** No related `AssetTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<AssetTransferFilter>;
  /** Some related `AssetTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<AssetTransferFilter>;
};

/** A filter to be used against many `BridgeReceipt` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyBridgeReceiptFilter = {
  /** Aggregates across related `BridgeReceipt` match the filter criteria. */
  aggregates?: InputMaybe<BridgeReceiptAggregatesFilter>;
  /** Every related `BridgeReceipt` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BridgeReceiptFilter>;
  /** No related `BridgeReceipt` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BridgeReceiptFilter>;
  /** Some related `BridgeReceipt` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BridgeReceiptFilter>;
};

/** A filter to be used against many `BridgeVote` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyBridgeVoteFilter = {
  /** Aggregates across related `BridgeVote` match the filter criteria. */
  aggregates?: InputMaybe<BridgeVoteAggregatesFilter>;
  /** Every related `BridgeVote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BridgeVoteFilter>;
  /** No related `BridgeVote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BridgeVoteFilter>;
  /** Some related `BridgeVote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BridgeVoteFilter>;
};

/** A filter to be used against many `Extrinsic` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyExtrinsicFilter = {
  /** Aggregates across related `Extrinsic` match the filter criteria. */
  aggregates?: InputMaybe<ExtrinsicAggregatesFilter>;
  /** Every related `Extrinsic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ExtrinsicFilter>;
  /** No related `Extrinsic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ExtrinsicFilter>;
  /** Some related `Extrinsic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ExtrinsicFilter>;
};

/** A filter to be used against many `Merit` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyMeritFilter = {
  /** Aggregates across related `Merit` match the filter criteria. */
  aggregates?: InputMaybe<MeritAggregatesFilter>;
  /** Every related `Merit` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<MeritFilter>;
  /** No related `Merit` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<MeritFilter>;
  /** Some related `Merit` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<MeritFilter>;
};

/** A filter to be used against many `SoraBurned` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManySoraBurnedFilter = {
  /** Aggregates across related `SoraBurned` match the filter criteria. */
  aggregates?: InputMaybe<SoraBurnedAggregatesFilter>;
  /** Every related `SoraBurned` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<SoraBurnedFilter>;
  /** No related `SoraBurned` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<SoraBurnedFilter>;
  /** Some related `SoraBurned` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<SoraBurnedFilter>;
};

/** A filter to be used against many `SoraMinted` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManySoraMintedFilter = {
  /** Aggregates across related `SoraMinted` match the filter criteria. */
  aggregates?: InputMaybe<SoraMintedAggregatesFilter>;
  /** Every related `SoraMinted` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<SoraMintedFilter>;
  /** No related `SoraMinted` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<SoraMintedFilter>;
  /** Some related `SoraMinted` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<SoraMintedFilter>;
};

/** A filter to be used against many `Staking` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyStakingFilter = {
  /** Aggregates across related `Staking` match the filter criteria. */
  aggregates?: InputMaybe<StakingAggregatesFilter>;
  /** Every related `Staking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<StakingFilter>;
  /** No related `Staking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<StakingFilter>;
  /** Some related `Staking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<StakingFilter>;
};

/** A filter to be used against many `TaxPool` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyTaxPoolFilter = {
  /** Aggregates across related `TaxPool` match the filter criteria. */
  aggregates?: InputMaybe<TaxPoolAggregatesFilter>;
  /** Every related `TaxPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TaxPoolFilter>;
  /** No related `TaxPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TaxPoolFilter>;
  /** Some related `TaxPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TaxPoolFilter>;
};

/** A filter to be used against many `TaxUnPool` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyTaxUnPoolFilter = {
  /** Aggregates across related `TaxUnPool` match the filter criteria. */
  aggregates?: InputMaybe<TaxUnPoolAggregatesFilter>;
  /** Every related `TaxUnPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TaxUnPoolFilter>;
  /** No related `TaxUnPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TaxUnPoolFilter>;
  /** Some related `TaxUnPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TaxUnPoolFilter>;
};

/** A filter to be used against many `Transfer` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyTransferFilter = {
  /** Aggregates across related `Transfer` match the filter criteria. */
  aggregates?: InputMaybe<TransferAggregatesFilter>;
  /** Every related `Transfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TransferFilter>;
  /** No related `Transfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TransferFilter>;
  /** Some related `Transfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TransferFilter>;
};

/** A connection to a list of `Account` values. */
export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  edges: Array<AccountsEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection. */
export type AccountsEdge = {
  __typename?: 'AccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  AssetTransfersByFromIdAverageAssetAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_ASSET_ASC',
  AssetTransfersByFromIdAverageAssetDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_ASSET_DESC',
  AssetTransfersByFromIdAverageBlockIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_BLOCK_ID_ASC',
  AssetTransfersByFromIdAverageBlockIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_BLOCK_ID_DESC',
  AssetTransfersByFromIdAverageBlockNumberAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_BLOCK_NUMBER_ASC',
  AssetTransfersByFromIdAverageBlockNumberDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_BLOCK_NUMBER_DESC',
  AssetTransfersByFromIdAverageEventIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_EVENT_INDEX_ASC',
  AssetTransfersByFromIdAverageEventIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_EVENT_INDEX_DESC',
  AssetTransfersByFromIdAverageExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  AssetTransfersByFromIdAverageExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  AssetTransfersByFromIdAverageFromIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_FROM_ID_ASC',
  AssetTransfersByFromIdAverageFromIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_FROM_ID_DESC',
  AssetTransfersByFromIdAverageIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_ID_ASC',
  AssetTransfersByFromIdAverageIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_ID_DESC',
  AssetTransfersByFromIdAverageRemarkAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_REMARK_ASC',
  AssetTransfersByFromIdAverageRemarkDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_REMARK_DESC',
  AssetTransfersByFromIdAverageToIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_TO_ID_ASC',
  AssetTransfersByFromIdAverageToIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_TO_ID_DESC',
  AssetTransfersByFromIdAverageValueAsc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_VALUE_ASC',
  AssetTransfersByFromIdAverageValueDesc = 'ASSET_TRANSFERS_BY_FROM_ID_AVERAGE_VALUE_DESC',
  AssetTransfersByFromIdCountAsc = 'ASSET_TRANSFERS_BY_FROM_ID_COUNT_ASC',
  AssetTransfersByFromIdCountDesc = 'ASSET_TRANSFERS_BY_FROM_ID_COUNT_DESC',
  AssetTransfersByFromIdDistinctCountAssetAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_ASSET_ASC',
  AssetTransfersByFromIdDistinctCountAssetDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_ASSET_DESC',
  AssetTransfersByFromIdDistinctCountBlockIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  AssetTransfersByFromIdDistinctCountBlockIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  AssetTransfersByFromIdDistinctCountBlockNumberAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  AssetTransfersByFromIdDistinctCountBlockNumberDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  AssetTransfersByFromIdDistinctCountEventIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  AssetTransfersByFromIdDistinctCountEventIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  AssetTransfersByFromIdDistinctCountExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  AssetTransfersByFromIdDistinctCountExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  AssetTransfersByFromIdDistinctCountFromIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_FROM_ID_ASC',
  AssetTransfersByFromIdDistinctCountFromIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_FROM_ID_DESC',
  AssetTransfersByFromIdDistinctCountIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_ID_ASC',
  AssetTransfersByFromIdDistinctCountIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_ID_DESC',
  AssetTransfersByFromIdDistinctCountRemarkAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_REMARK_ASC',
  AssetTransfersByFromIdDistinctCountRemarkDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_REMARK_DESC',
  AssetTransfersByFromIdDistinctCountToIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_TO_ID_ASC',
  AssetTransfersByFromIdDistinctCountToIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_TO_ID_DESC',
  AssetTransfersByFromIdDistinctCountValueAsc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_VALUE_ASC',
  AssetTransfersByFromIdDistinctCountValueDesc = 'ASSET_TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_VALUE_DESC',
  AssetTransfersByFromIdMaxAssetAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_ASSET_ASC',
  AssetTransfersByFromIdMaxAssetDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_ASSET_DESC',
  AssetTransfersByFromIdMaxBlockIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_BLOCK_ID_ASC',
  AssetTransfersByFromIdMaxBlockIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_BLOCK_ID_DESC',
  AssetTransfersByFromIdMaxBlockNumberAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_BLOCK_NUMBER_ASC',
  AssetTransfersByFromIdMaxBlockNumberDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_BLOCK_NUMBER_DESC',
  AssetTransfersByFromIdMaxEventIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_EVENT_INDEX_ASC',
  AssetTransfersByFromIdMaxEventIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_EVENT_INDEX_DESC',
  AssetTransfersByFromIdMaxExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_EXTRINSIC_INDEX_ASC',
  AssetTransfersByFromIdMaxExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_EXTRINSIC_INDEX_DESC',
  AssetTransfersByFromIdMaxFromIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_FROM_ID_ASC',
  AssetTransfersByFromIdMaxFromIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_FROM_ID_DESC',
  AssetTransfersByFromIdMaxIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_ID_ASC',
  AssetTransfersByFromIdMaxIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_ID_DESC',
  AssetTransfersByFromIdMaxRemarkAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_REMARK_ASC',
  AssetTransfersByFromIdMaxRemarkDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_REMARK_DESC',
  AssetTransfersByFromIdMaxToIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_TO_ID_ASC',
  AssetTransfersByFromIdMaxToIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_TO_ID_DESC',
  AssetTransfersByFromIdMaxValueAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_VALUE_ASC',
  AssetTransfersByFromIdMaxValueDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MAX_VALUE_DESC',
  AssetTransfersByFromIdMinAssetAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_ASSET_ASC',
  AssetTransfersByFromIdMinAssetDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_ASSET_DESC',
  AssetTransfersByFromIdMinBlockIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_BLOCK_ID_ASC',
  AssetTransfersByFromIdMinBlockIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_BLOCK_ID_DESC',
  AssetTransfersByFromIdMinBlockNumberAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_BLOCK_NUMBER_ASC',
  AssetTransfersByFromIdMinBlockNumberDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_BLOCK_NUMBER_DESC',
  AssetTransfersByFromIdMinEventIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_EVENT_INDEX_ASC',
  AssetTransfersByFromIdMinEventIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_EVENT_INDEX_DESC',
  AssetTransfersByFromIdMinExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_EXTRINSIC_INDEX_ASC',
  AssetTransfersByFromIdMinExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_EXTRINSIC_INDEX_DESC',
  AssetTransfersByFromIdMinFromIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_FROM_ID_ASC',
  AssetTransfersByFromIdMinFromIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_FROM_ID_DESC',
  AssetTransfersByFromIdMinIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_ID_ASC',
  AssetTransfersByFromIdMinIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_ID_DESC',
  AssetTransfersByFromIdMinRemarkAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_REMARK_ASC',
  AssetTransfersByFromIdMinRemarkDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_REMARK_DESC',
  AssetTransfersByFromIdMinToIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_TO_ID_ASC',
  AssetTransfersByFromIdMinToIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_TO_ID_DESC',
  AssetTransfersByFromIdMinValueAsc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_VALUE_ASC',
  AssetTransfersByFromIdMinValueDesc = 'ASSET_TRANSFERS_BY_FROM_ID_MIN_VALUE_DESC',
  AssetTransfersByFromIdStddevPopulationAssetAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_ASSET_ASC',
  AssetTransfersByFromIdStddevPopulationAssetDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_ASSET_DESC',
  AssetTransfersByFromIdStddevPopulationBlockIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  AssetTransfersByFromIdStddevPopulationBlockIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  AssetTransfersByFromIdStddevPopulationBlockNumberAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  AssetTransfersByFromIdStddevPopulationBlockNumberDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  AssetTransfersByFromIdStddevPopulationEventIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  AssetTransfersByFromIdStddevPopulationEventIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  AssetTransfersByFromIdStddevPopulationExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  AssetTransfersByFromIdStddevPopulationExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  AssetTransfersByFromIdStddevPopulationFromIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_FROM_ID_ASC',
  AssetTransfersByFromIdStddevPopulationFromIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_FROM_ID_DESC',
  AssetTransfersByFromIdStddevPopulationIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_ID_ASC',
  AssetTransfersByFromIdStddevPopulationIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_ID_DESC',
  AssetTransfersByFromIdStddevPopulationRemarkAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_REMARK_ASC',
  AssetTransfersByFromIdStddevPopulationRemarkDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_REMARK_DESC',
  AssetTransfersByFromIdStddevPopulationToIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_TO_ID_ASC',
  AssetTransfersByFromIdStddevPopulationToIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_TO_ID_DESC',
  AssetTransfersByFromIdStddevPopulationValueAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_VALUE_ASC',
  AssetTransfersByFromIdStddevPopulationValueDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_VALUE_DESC',
  AssetTransfersByFromIdStddevSampleAssetAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_ASSET_ASC',
  AssetTransfersByFromIdStddevSampleAssetDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_ASSET_DESC',
  AssetTransfersByFromIdStddevSampleBlockIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  AssetTransfersByFromIdStddevSampleBlockIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  AssetTransfersByFromIdStddevSampleBlockNumberAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  AssetTransfersByFromIdStddevSampleBlockNumberDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  AssetTransfersByFromIdStddevSampleEventIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  AssetTransfersByFromIdStddevSampleEventIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  AssetTransfersByFromIdStddevSampleExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  AssetTransfersByFromIdStddevSampleExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  AssetTransfersByFromIdStddevSampleFromIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_FROM_ID_ASC',
  AssetTransfersByFromIdStddevSampleFromIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_FROM_ID_DESC',
  AssetTransfersByFromIdStddevSampleIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_ID_ASC',
  AssetTransfersByFromIdStddevSampleIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_ID_DESC',
  AssetTransfersByFromIdStddevSampleRemarkAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_REMARK_ASC',
  AssetTransfersByFromIdStddevSampleRemarkDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_REMARK_DESC',
  AssetTransfersByFromIdStddevSampleToIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_TO_ID_ASC',
  AssetTransfersByFromIdStddevSampleToIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_TO_ID_DESC',
  AssetTransfersByFromIdStddevSampleValueAsc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_VALUE_ASC',
  AssetTransfersByFromIdStddevSampleValueDesc = 'ASSET_TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_VALUE_DESC',
  AssetTransfersByFromIdSumAssetAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_ASSET_ASC',
  AssetTransfersByFromIdSumAssetDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_ASSET_DESC',
  AssetTransfersByFromIdSumBlockIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_BLOCK_ID_ASC',
  AssetTransfersByFromIdSumBlockIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_BLOCK_ID_DESC',
  AssetTransfersByFromIdSumBlockNumberAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_BLOCK_NUMBER_ASC',
  AssetTransfersByFromIdSumBlockNumberDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_BLOCK_NUMBER_DESC',
  AssetTransfersByFromIdSumEventIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_EVENT_INDEX_ASC',
  AssetTransfersByFromIdSumEventIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_EVENT_INDEX_DESC',
  AssetTransfersByFromIdSumExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_EXTRINSIC_INDEX_ASC',
  AssetTransfersByFromIdSumExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_EXTRINSIC_INDEX_DESC',
  AssetTransfersByFromIdSumFromIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_FROM_ID_ASC',
  AssetTransfersByFromIdSumFromIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_FROM_ID_DESC',
  AssetTransfersByFromIdSumIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_ID_ASC',
  AssetTransfersByFromIdSumIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_ID_DESC',
  AssetTransfersByFromIdSumRemarkAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_REMARK_ASC',
  AssetTransfersByFromIdSumRemarkDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_REMARK_DESC',
  AssetTransfersByFromIdSumToIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_TO_ID_ASC',
  AssetTransfersByFromIdSumToIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_TO_ID_DESC',
  AssetTransfersByFromIdSumValueAsc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_VALUE_ASC',
  AssetTransfersByFromIdSumValueDesc = 'ASSET_TRANSFERS_BY_FROM_ID_SUM_VALUE_DESC',
  AssetTransfersByFromIdVariancePopulationAssetAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_ASSET_ASC',
  AssetTransfersByFromIdVariancePopulationAssetDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_ASSET_DESC',
  AssetTransfersByFromIdVariancePopulationBlockIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  AssetTransfersByFromIdVariancePopulationBlockIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  AssetTransfersByFromIdVariancePopulationBlockNumberAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  AssetTransfersByFromIdVariancePopulationBlockNumberDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  AssetTransfersByFromIdVariancePopulationEventIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  AssetTransfersByFromIdVariancePopulationEventIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  AssetTransfersByFromIdVariancePopulationExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  AssetTransfersByFromIdVariancePopulationExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  AssetTransfersByFromIdVariancePopulationFromIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_FROM_ID_ASC',
  AssetTransfersByFromIdVariancePopulationFromIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_FROM_ID_DESC',
  AssetTransfersByFromIdVariancePopulationIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_ID_ASC',
  AssetTransfersByFromIdVariancePopulationIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_ID_DESC',
  AssetTransfersByFromIdVariancePopulationRemarkAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_REMARK_ASC',
  AssetTransfersByFromIdVariancePopulationRemarkDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_REMARK_DESC',
  AssetTransfersByFromIdVariancePopulationToIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_TO_ID_ASC',
  AssetTransfersByFromIdVariancePopulationToIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_TO_ID_DESC',
  AssetTransfersByFromIdVariancePopulationValueAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_VALUE_ASC',
  AssetTransfersByFromIdVariancePopulationValueDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_VALUE_DESC',
  AssetTransfersByFromIdVarianceSampleAssetAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_ASSET_ASC',
  AssetTransfersByFromIdVarianceSampleAssetDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_ASSET_DESC',
  AssetTransfersByFromIdVarianceSampleBlockIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  AssetTransfersByFromIdVarianceSampleBlockIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  AssetTransfersByFromIdVarianceSampleBlockNumberAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  AssetTransfersByFromIdVarianceSampleBlockNumberDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  AssetTransfersByFromIdVarianceSampleEventIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  AssetTransfersByFromIdVarianceSampleEventIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  AssetTransfersByFromIdVarianceSampleExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  AssetTransfersByFromIdVarianceSampleExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  AssetTransfersByFromIdVarianceSampleFromIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_FROM_ID_ASC',
  AssetTransfersByFromIdVarianceSampleFromIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_FROM_ID_DESC',
  AssetTransfersByFromIdVarianceSampleIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_ID_ASC',
  AssetTransfersByFromIdVarianceSampleIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_ID_DESC',
  AssetTransfersByFromIdVarianceSampleRemarkAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_REMARK_ASC',
  AssetTransfersByFromIdVarianceSampleRemarkDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_REMARK_DESC',
  AssetTransfersByFromIdVarianceSampleToIdAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_TO_ID_ASC',
  AssetTransfersByFromIdVarianceSampleToIdDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_TO_ID_DESC',
  AssetTransfersByFromIdVarianceSampleValueAsc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_VALUE_ASC',
  AssetTransfersByFromIdVarianceSampleValueDesc = 'ASSET_TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_VALUE_DESC',
  AssetTransfersByToIdAverageAssetAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_ASSET_ASC',
  AssetTransfersByToIdAverageAssetDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_ASSET_DESC',
  AssetTransfersByToIdAverageBlockIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_BLOCK_ID_ASC',
  AssetTransfersByToIdAverageBlockIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_BLOCK_ID_DESC',
  AssetTransfersByToIdAverageBlockNumberAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_BLOCK_NUMBER_ASC',
  AssetTransfersByToIdAverageBlockNumberDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_BLOCK_NUMBER_DESC',
  AssetTransfersByToIdAverageEventIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_EVENT_INDEX_ASC',
  AssetTransfersByToIdAverageEventIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_EVENT_INDEX_DESC',
  AssetTransfersByToIdAverageExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  AssetTransfersByToIdAverageExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  AssetTransfersByToIdAverageFromIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_FROM_ID_ASC',
  AssetTransfersByToIdAverageFromIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_FROM_ID_DESC',
  AssetTransfersByToIdAverageIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_ID_ASC',
  AssetTransfersByToIdAverageIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_ID_DESC',
  AssetTransfersByToIdAverageRemarkAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_REMARK_ASC',
  AssetTransfersByToIdAverageRemarkDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_REMARK_DESC',
  AssetTransfersByToIdAverageToIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_TO_ID_ASC',
  AssetTransfersByToIdAverageToIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_TO_ID_DESC',
  AssetTransfersByToIdAverageValueAsc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_VALUE_ASC',
  AssetTransfersByToIdAverageValueDesc = 'ASSET_TRANSFERS_BY_TO_ID_AVERAGE_VALUE_DESC',
  AssetTransfersByToIdCountAsc = 'ASSET_TRANSFERS_BY_TO_ID_COUNT_ASC',
  AssetTransfersByToIdCountDesc = 'ASSET_TRANSFERS_BY_TO_ID_COUNT_DESC',
  AssetTransfersByToIdDistinctCountAssetAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_ASSET_ASC',
  AssetTransfersByToIdDistinctCountAssetDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_ASSET_DESC',
  AssetTransfersByToIdDistinctCountBlockIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  AssetTransfersByToIdDistinctCountBlockIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  AssetTransfersByToIdDistinctCountBlockNumberAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  AssetTransfersByToIdDistinctCountBlockNumberDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  AssetTransfersByToIdDistinctCountEventIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  AssetTransfersByToIdDistinctCountEventIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  AssetTransfersByToIdDistinctCountExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  AssetTransfersByToIdDistinctCountExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  AssetTransfersByToIdDistinctCountFromIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_FROM_ID_ASC',
  AssetTransfersByToIdDistinctCountFromIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_FROM_ID_DESC',
  AssetTransfersByToIdDistinctCountIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_ID_ASC',
  AssetTransfersByToIdDistinctCountIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_ID_DESC',
  AssetTransfersByToIdDistinctCountRemarkAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_REMARK_ASC',
  AssetTransfersByToIdDistinctCountRemarkDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_REMARK_DESC',
  AssetTransfersByToIdDistinctCountToIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_TO_ID_ASC',
  AssetTransfersByToIdDistinctCountToIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_TO_ID_DESC',
  AssetTransfersByToIdDistinctCountValueAsc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_VALUE_ASC',
  AssetTransfersByToIdDistinctCountValueDesc = 'ASSET_TRANSFERS_BY_TO_ID_DISTINCT_COUNT_VALUE_DESC',
  AssetTransfersByToIdMaxAssetAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_ASSET_ASC',
  AssetTransfersByToIdMaxAssetDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_ASSET_DESC',
  AssetTransfersByToIdMaxBlockIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_BLOCK_ID_ASC',
  AssetTransfersByToIdMaxBlockIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_BLOCK_ID_DESC',
  AssetTransfersByToIdMaxBlockNumberAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_BLOCK_NUMBER_ASC',
  AssetTransfersByToIdMaxBlockNumberDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_BLOCK_NUMBER_DESC',
  AssetTransfersByToIdMaxEventIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_EVENT_INDEX_ASC',
  AssetTransfersByToIdMaxEventIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_EVENT_INDEX_DESC',
  AssetTransfersByToIdMaxExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_EXTRINSIC_INDEX_ASC',
  AssetTransfersByToIdMaxExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_EXTRINSIC_INDEX_DESC',
  AssetTransfersByToIdMaxFromIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_FROM_ID_ASC',
  AssetTransfersByToIdMaxFromIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_FROM_ID_DESC',
  AssetTransfersByToIdMaxIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_ID_ASC',
  AssetTransfersByToIdMaxIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_ID_DESC',
  AssetTransfersByToIdMaxRemarkAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_REMARK_ASC',
  AssetTransfersByToIdMaxRemarkDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_REMARK_DESC',
  AssetTransfersByToIdMaxToIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_TO_ID_ASC',
  AssetTransfersByToIdMaxToIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_TO_ID_DESC',
  AssetTransfersByToIdMaxValueAsc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_VALUE_ASC',
  AssetTransfersByToIdMaxValueDesc = 'ASSET_TRANSFERS_BY_TO_ID_MAX_VALUE_DESC',
  AssetTransfersByToIdMinAssetAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_ASSET_ASC',
  AssetTransfersByToIdMinAssetDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_ASSET_DESC',
  AssetTransfersByToIdMinBlockIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_BLOCK_ID_ASC',
  AssetTransfersByToIdMinBlockIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_BLOCK_ID_DESC',
  AssetTransfersByToIdMinBlockNumberAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_BLOCK_NUMBER_ASC',
  AssetTransfersByToIdMinBlockNumberDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_BLOCK_NUMBER_DESC',
  AssetTransfersByToIdMinEventIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_EVENT_INDEX_ASC',
  AssetTransfersByToIdMinEventIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_EVENT_INDEX_DESC',
  AssetTransfersByToIdMinExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_EXTRINSIC_INDEX_ASC',
  AssetTransfersByToIdMinExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_EXTRINSIC_INDEX_DESC',
  AssetTransfersByToIdMinFromIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_FROM_ID_ASC',
  AssetTransfersByToIdMinFromIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_FROM_ID_DESC',
  AssetTransfersByToIdMinIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_ID_ASC',
  AssetTransfersByToIdMinIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_ID_DESC',
  AssetTransfersByToIdMinRemarkAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_REMARK_ASC',
  AssetTransfersByToIdMinRemarkDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_REMARK_DESC',
  AssetTransfersByToIdMinToIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_TO_ID_ASC',
  AssetTransfersByToIdMinToIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_TO_ID_DESC',
  AssetTransfersByToIdMinValueAsc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_VALUE_ASC',
  AssetTransfersByToIdMinValueDesc = 'ASSET_TRANSFERS_BY_TO_ID_MIN_VALUE_DESC',
  AssetTransfersByToIdStddevPopulationAssetAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_ASSET_ASC',
  AssetTransfersByToIdStddevPopulationAssetDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_ASSET_DESC',
  AssetTransfersByToIdStddevPopulationBlockIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  AssetTransfersByToIdStddevPopulationBlockIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  AssetTransfersByToIdStddevPopulationBlockNumberAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  AssetTransfersByToIdStddevPopulationBlockNumberDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  AssetTransfersByToIdStddevPopulationEventIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  AssetTransfersByToIdStddevPopulationEventIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  AssetTransfersByToIdStddevPopulationExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  AssetTransfersByToIdStddevPopulationExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  AssetTransfersByToIdStddevPopulationFromIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_FROM_ID_ASC',
  AssetTransfersByToIdStddevPopulationFromIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_FROM_ID_DESC',
  AssetTransfersByToIdStddevPopulationIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_ID_ASC',
  AssetTransfersByToIdStddevPopulationIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_ID_DESC',
  AssetTransfersByToIdStddevPopulationRemarkAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_REMARK_ASC',
  AssetTransfersByToIdStddevPopulationRemarkDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_REMARK_DESC',
  AssetTransfersByToIdStddevPopulationToIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_TO_ID_ASC',
  AssetTransfersByToIdStddevPopulationToIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_TO_ID_DESC',
  AssetTransfersByToIdStddevPopulationValueAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_VALUE_ASC',
  AssetTransfersByToIdStddevPopulationValueDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_POPULATION_VALUE_DESC',
  AssetTransfersByToIdStddevSampleAssetAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_ASSET_ASC',
  AssetTransfersByToIdStddevSampleAssetDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_ASSET_DESC',
  AssetTransfersByToIdStddevSampleBlockIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  AssetTransfersByToIdStddevSampleBlockIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  AssetTransfersByToIdStddevSampleBlockNumberAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  AssetTransfersByToIdStddevSampleBlockNumberDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  AssetTransfersByToIdStddevSampleEventIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  AssetTransfersByToIdStddevSampleEventIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  AssetTransfersByToIdStddevSampleExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  AssetTransfersByToIdStddevSampleExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  AssetTransfersByToIdStddevSampleFromIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_FROM_ID_ASC',
  AssetTransfersByToIdStddevSampleFromIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_FROM_ID_DESC',
  AssetTransfersByToIdStddevSampleIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_ID_ASC',
  AssetTransfersByToIdStddevSampleIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_ID_DESC',
  AssetTransfersByToIdStddevSampleRemarkAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_REMARK_ASC',
  AssetTransfersByToIdStddevSampleRemarkDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_REMARK_DESC',
  AssetTransfersByToIdStddevSampleToIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_TO_ID_ASC',
  AssetTransfersByToIdStddevSampleToIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_TO_ID_DESC',
  AssetTransfersByToIdStddevSampleValueAsc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_VALUE_ASC',
  AssetTransfersByToIdStddevSampleValueDesc = 'ASSET_TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_VALUE_DESC',
  AssetTransfersByToIdSumAssetAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_ASSET_ASC',
  AssetTransfersByToIdSumAssetDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_ASSET_DESC',
  AssetTransfersByToIdSumBlockIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_BLOCK_ID_ASC',
  AssetTransfersByToIdSumBlockIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_BLOCK_ID_DESC',
  AssetTransfersByToIdSumBlockNumberAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_BLOCK_NUMBER_ASC',
  AssetTransfersByToIdSumBlockNumberDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_BLOCK_NUMBER_DESC',
  AssetTransfersByToIdSumEventIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_EVENT_INDEX_ASC',
  AssetTransfersByToIdSumEventIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_EVENT_INDEX_DESC',
  AssetTransfersByToIdSumExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_EXTRINSIC_INDEX_ASC',
  AssetTransfersByToIdSumExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_EXTRINSIC_INDEX_DESC',
  AssetTransfersByToIdSumFromIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_FROM_ID_ASC',
  AssetTransfersByToIdSumFromIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_FROM_ID_DESC',
  AssetTransfersByToIdSumIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_ID_ASC',
  AssetTransfersByToIdSumIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_ID_DESC',
  AssetTransfersByToIdSumRemarkAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_REMARK_ASC',
  AssetTransfersByToIdSumRemarkDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_REMARK_DESC',
  AssetTransfersByToIdSumToIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_TO_ID_ASC',
  AssetTransfersByToIdSumToIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_TO_ID_DESC',
  AssetTransfersByToIdSumValueAsc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_VALUE_ASC',
  AssetTransfersByToIdSumValueDesc = 'ASSET_TRANSFERS_BY_TO_ID_SUM_VALUE_DESC',
  AssetTransfersByToIdVariancePopulationAssetAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_ASSET_ASC',
  AssetTransfersByToIdVariancePopulationAssetDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_ASSET_DESC',
  AssetTransfersByToIdVariancePopulationBlockIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  AssetTransfersByToIdVariancePopulationBlockIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  AssetTransfersByToIdVariancePopulationBlockNumberAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  AssetTransfersByToIdVariancePopulationBlockNumberDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  AssetTransfersByToIdVariancePopulationEventIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  AssetTransfersByToIdVariancePopulationEventIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  AssetTransfersByToIdVariancePopulationExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  AssetTransfersByToIdVariancePopulationExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  AssetTransfersByToIdVariancePopulationFromIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_FROM_ID_ASC',
  AssetTransfersByToIdVariancePopulationFromIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_FROM_ID_DESC',
  AssetTransfersByToIdVariancePopulationIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_ID_ASC',
  AssetTransfersByToIdVariancePopulationIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_ID_DESC',
  AssetTransfersByToIdVariancePopulationRemarkAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_REMARK_ASC',
  AssetTransfersByToIdVariancePopulationRemarkDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_REMARK_DESC',
  AssetTransfersByToIdVariancePopulationToIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_TO_ID_ASC',
  AssetTransfersByToIdVariancePopulationToIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_TO_ID_DESC',
  AssetTransfersByToIdVariancePopulationValueAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_VALUE_ASC',
  AssetTransfersByToIdVariancePopulationValueDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_VALUE_DESC',
  AssetTransfersByToIdVarianceSampleAssetAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_ASSET_ASC',
  AssetTransfersByToIdVarianceSampleAssetDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_ASSET_DESC',
  AssetTransfersByToIdVarianceSampleBlockIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  AssetTransfersByToIdVarianceSampleBlockIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  AssetTransfersByToIdVarianceSampleBlockNumberAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  AssetTransfersByToIdVarianceSampleBlockNumberDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  AssetTransfersByToIdVarianceSampleEventIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  AssetTransfersByToIdVarianceSampleEventIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  AssetTransfersByToIdVarianceSampleExtrinsicIndexAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  AssetTransfersByToIdVarianceSampleExtrinsicIndexDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  AssetTransfersByToIdVarianceSampleFromIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_FROM_ID_ASC',
  AssetTransfersByToIdVarianceSampleFromIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_FROM_ID_DESC',
  AssetTransfersByToIdVarianceSampleIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_ID_ASC',
  AssetTransfersByToIdVarianceSampleIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_ID_DESC',
  AssetTransfersByToIdVarianceSampleRemarkAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_REMARK_ASC',
  AssetTransfersByToIdVarianceSampleRemarkDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_REMARK_DESC',
  AssetTransfersByToIdVarianceSampleToIdAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_TO_ID_ASC',
  AssetTransfersByToIdVarianceSampleToIdDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_TO_ID_DESC',
  AssetTransfersByToIdVarianceSampleValueAsc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_VALUE_ASC',
  AssetTransfersByToIdVarianceSampleValueDesc = 'ASSET_TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_VALUE_DESC',
  BridgeReceiptsByFromIdAverageAmountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_AMOUNT_ASC',
  BridgeReceiptsByFromIdAverageAmountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_AMOUNT_DESC',
  BridgeReceiptsByFromIdAverageEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByFromIdAverageEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByFromIdAverageEventIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_EVENT_ID_ASC',
  BridgeReceiptsByFromIdAverageEventIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_EVENT_ID_DESC',
  BridgeReceiptsByFromIdAverageFromIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_FROM_ID_ASC',
  BridgeReceiptsByFromIdAverageFromIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_FROM_ID_DESC',
  BridgeReceiptsByFromIdAverageIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_ID_ASC',
  BridgeReceiptsByFromIdAverageIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_ID_DESC',
  BridgeReceiptsByFromIdAverageReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_RECEIPT_ID_ASC',
  BridgeReceiptsByFromIdAverageReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_AVERAGE_RECEIPT_ID_DESC',
  BridgeReceiptsByFromIdCountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_COUNT_ASC',
  BridgeReceiptsByFromIdCountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_COUNT_DESC',
  BridgeReceiptsByFromIdDistinctCountAmountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_AMOUNT_ASC',
  BridgeReceiptsByFromIdDistinctCountAmountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_AMOUNT_DESC',
  BridgeReceiptsByFromIdDistinctCountEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByFromIdDistinctCountEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByFromIdDistinctCountEventIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_EVENT_ID_ASC',
  BridgeReceiptsByFromIdDistinctCountEventIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_EVENT_ID_DESC',
  BridgeReceiptsByFromIdDistinctCountFromIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_FROM_ID_ASC',
  BridgeReceiptsByFromIdDistinctCountFromIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_FROM_ID_DESC',
  BridgeReceiptsByFromIdDistinctCountIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_ID_ASC',
  BridgeReceiptsByFromIdDistinctCountIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_ID_DESC',
  BridgeReceiptsByFromIdDistinctCountReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_RECEIPT_ID_ASC',
  BridgeReceiptsByFromIdDistinctCountReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_DISTINCT_COUNT_RECEIPT_ID_DESC',
  BridgeReceiptsByFromIdMaxAmountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_AMOUNT_ASC',
  BridgeReceiptsByFromIdMaxAmountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_AMOUNT_DESC',
  BridgeReceiptsByFromIdMaxEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByFromIdMaxEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByFromIdMaxEventIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_EVENT_ID_ASC',
  BridgeReceiptsByFromIdMaxEventIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_EVENT_ID_DESC',
  BridgeReceiptsByFromIdMaxFromIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_FROM_ID_ASC',
  BridgeReceiptsByFromIdMaxFromIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_FROM_ID_DESC',
  BridgeReceiptsByFromIdMaxIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_ID_ASC',
  BridgeReceiptsByFromIdMaxIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_ID_DESC',
  BridgeReceiptsByFromIdMaxReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_RECEIPT_ID_ASC',
  BridgeReceiptsByFromIdMaxReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MAX_RECEIPT_ID_DESC',
  BridgeReceiptsByFromIdMinAmountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_AMOUNT_ASC',
  BridgeReceiptsByFromIdMinAmountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_AMOUNT_DESC',
  BridgeReceiptsByFromIdMinEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByFromIdMinEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByFromIdMinEventIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_EVENT_ID_ASC',
  BridgeReceiptsByFromIdMinEventIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_EVENT_ID_DESC',
  BridgeReceiptsByFromIdMinFromIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_FROM_ID_ASC',
  BridgeReceiptsByFromIdMinFromIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_FROM_ID_DESC',
  BridgeReceiptsByFromIdMinIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_ID_ASC',
  BridgeReceiptsByFromIdMinIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_ID_DESC',
  BridgeReceiptsByFromIdMinReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_RECEIPT_ID_ASC',
  BridgeReceiptsByFromIdMinReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_MIN_RECEIPT_ID_DESC',
  BridgeReceiptsByFromIdStddevPopulationAmountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_AMOUNT_ASC',
  BridgeReceiptsByFromIdStddevPopulationAmountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_AMOUNT_DESC',
  BridgeReceiptsByFromIdStddevPopulationEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByFromIdStddevPopulationEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByFromIdStddevPopulationEventIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_EVENT_ID_ASC',
  BridgeReceiptsByFromIdStddevPopulationEventIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_EVENT_ID_DESC',
  BridgeReceiptsByFromIdStddevPopulationFromIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_FROM_ID_ASC',
  BridgeReceiptsByFromIdStddevPopulationFromIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_FROM_ID_DESC',
  BridgeReceiptsByFromIdStddevPopulationIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_ID_ASC',
  BridgeReceiptsByFromIdStddevPopulationIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_ID_DESC',
  BridgeReceiptsByFromIdStddevPopulationReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptsByFromIdStddevPopulationReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptsByFromIdStddevSampleAmountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  BridgeReceiptsByFromIdStddevSampleAmountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  BridgeReceiptsByFromIdStddevSampleEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByFromIdStddevSampleEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByFromIdStddevSampleEventIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptsByFromIdStddevSampleEventIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptsByFromIdStddevSampleFromIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_FROM_ID_ASC',
  BridgeReceiptsByFromIdStddevSampleFromIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_FROM_ID_DESC',
  BridgeReceiptsByFromIdStddevSampleIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_ID_ASC',
  BridgeReceiptsByFromIdStddevSampleIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_ID_DESC',
  BridgeReceiptsByFromIdStddevSampleReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptsByFromIdStddevSampleReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_STDDEV_SAMPLE_RECEIPT_ID_DESC',
  BridgeReceiptsByFromIdSumAmountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_AMOUNT_ASC',
  BridgeReceiptsByFromIdSumAmountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_AMOUNT_DESC',
  BridgeReceiptsByFromIdSumEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByFromIdSumEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByFromIdSumEventIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_EVENT_ID_ASC',
  BridgeReceiptsByFromIdSumEventIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_EVENT_ID_DESC',
  BridgeReceiptsByFromIdSumFromIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_FROM_ID_ASC',
  BridgeReceiptsByFromIdSumFromIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_FROM_ID_DESC',
  BridgeReceiptsByFromIdSumIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_ID_ASC',
  BridgeReceiptsByFromIdSumIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_ID_DESC',
  BridgeReceiptsByFromIdSumReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_RECEIPT_ID_ASC',
  BridgeReceiptsByFromIdSumReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_SUM_RECEIPT_ID_DESC',
  BridgeReceiptsByFromIdVariancePopulationAmountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  BridgeReceiptsByFromIdVariancePopulationAmountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  BridgeReceiptsByFromIdVariancePopulationEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByFromIdVariancePopulationEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByFromIdVariancePopulationEventIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_EVENT_ID_ASC',
  BridgeReceiptsByFromIdVariancePopulationEventIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_EVENT_ID_DESC',
  BridgeReceiptsByFromIdVariancePopulationFromIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_FROM_ID_ASC',
  BridgeReceiptsByFromIdVariancePopulationFromIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_FROM_ID_DESC',
  BridgeReceiptsByFromIdVariancePopulationIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_ID_ASC',
  BridgeReceiptsByFromIdVariancePopulationIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_ID_DESC',
  BridgeReceiptsByFromIdVariancePopulationReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptsByFromIdVariancePopulationReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptsByFromIdVarianceSampleAmountAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  BridgeReceiptsByFromIdVarianceSampleAmountDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  BridgeReceiptsByFromIdVarianceSampleEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByFromIdVarianceSampleEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByFromIdVarianceSampleEventIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptsByFromIdVarianceSampleEventIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptsByFromIdVarianceSampleFromIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_FROM_ID_ASC',
  BridgeReceiptsByFromIdVarianceSampleFromIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_FROM_ID_DESC',
  BridgeReceiptsByFromIdVarianceSampleIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_ID_ASC',
  BridgeReceiptsByFromIdVarianceSampleIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_ID_DESC',
  BridgeReceiptsByFromIdVarianceSampleReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptsByFromIdVarianceSampleReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_FROM_ID_VARIANCE_SAMPLE_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdAverageEthBlockNumberAsc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesByRelayIdAverageEthBlockNumberDesc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesByRelayIdAverageEventIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_EVENT_ID_ASC',
  BridgeVotesByRelayIdAverageEventIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_EVENT_ID_DESC',
  BridgeVotesByRelayIdAverageIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_ID_ASC',
  BridgeVotesByRelayIdAverageIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_ID_DESC',
  BridgeVotesByRelayIdAverageReceiptIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_RECEIPT_ID_ASC',
  BridgeVotesByRelayIdAverageReceiptIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdAverageRelayIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_RELAY_ID_ASC',
  BridgeVotesByRelayIdAverageRelayIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_AVERAGE_RELAY_ID_DESC',
  BridgeVotesByRelayIdCountAsc = 'BRIDGE_VOTES_BY_RELAY_ID_COUNT_ASC',
  BridgeVotesByRelayIdCountDesc = 'BRIDGE_VOTES_BY_RELAY_ID_COUNT_DESC',
  BridgeVotesByRelayIdDistinctCountEthBlockNumberAsc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesByRelayIdDistinctCountEthBlockNumberDesc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesByRelayIdDistinctCountEventIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_EVENT_ID_ASC',
  BridgeVotesByRelayIdDistinctCountEventIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_EVENT_ID_DESC',
  BridgeVotesByRelayIdDistinctCountIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_ID_ASC',
  BridgeVotesByRelayIdDistinctCountIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_ID_DESC',
  BridgeVotesByRelayIdDistinctCountReceiptIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_RECEIPT_ID_ASC',
  BridgeVotesByRelayIdDistinctCountReceiptIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdDistinctCountRelayIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_RELAY_ID_ASC',
  BridgeVotesByRelayIdDistinctCountRelayIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_DISTINCT_COUNT_RELAY_ID_DESC',
  BridgeVotesByRelayIdMaxEthBlockNumberAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesByRelayIdMaxEthBlockNumberDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesByRelayIdMaxEventIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_EVENT_ID_ASC',
  BridgeVotesByRelayIdMaxEventIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_EVENT_ID_DESC',
  BridgeVotesByRelayIdMaxIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_ID_ASC',
  BridgeVotesByRelayIdMaxIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_ID_DESC',
  BridgeVotesByRelayIdMaxReceiptIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_RECEIPT_ID_ASC',
  BridgeVotesByRelayIdMaxReceiptIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdMaxRelayIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_RELAY_ID_ASC',
  BridgeVotesByRelayIdMaxRelayIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MAX_RELAY_ID_DESC',
  BridgeVotesByRelayIdMinEthBlockNumberAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesByRelayIdMinEthBlockNumberDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesByRelayIdMinEventIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_EVENT_ID_ASC',
  BridgeVotesByRelayIdMinEventIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_EVENT_ID_DESC',
  BridgeVotesByRelayIdMinIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_ID_ASC',
  BridgeVotesByRelayIdMinIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_ID_DESC',
  BridgeVotesByRelayIdMinReceiptIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_RECEIPT_ID_ASC',
  BridgeVotesByRelayIdMinReceiptIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdMinRelayIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_RELAY_ID_ASC',
  BridgeVotesByRelayIdMinRelayIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_MIN_RELAY_ID_DESC',
  BridgeVotesByRelayIdStddevPopulationEthBlockNumberAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesByRelayIdStddevPopulationEthBlockNumberDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesByRelayIdStddevPopulationEventIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_EVENT_ID_ASC',
  BridgeVotesByRelayIdStddevPopulationEventIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_EVENT_ID_DESC',
  BridgeVotesByRelayIdStddevPopulationIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_ID_ASC',
  BridgeVotesByRelayIdStddevPopulationIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_ID_DESC',
  BridgeVotesByRelayIdStddevPopulationReceiptIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_RECEIPT_ID_ASC',
  BridgeVotesByRelayIdStddevPopulationReceiptIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdStddevPopulationRelayIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_RELAY_ID_ASC',
  BridgeVotesByRelayIdStddevPopulationRelayIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_POPULATION_RELAY_ID_DESC',
  BridgeVotesByRelayIdStddevSampleEthBlockNumberAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesByRelayIdStddevSampleEthBlockNumberDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesByRelayIdStddevSampleEventIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_EVENT_ID_ASC',
  BridgeVotesByRelayIdStddevSampleEventIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_EVENT_ID_DESC',
  BridgeVotesByRelayIdStddevSampleIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_ID_ASC',
  BridgeVotesByRelayIdStddevSampleIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_ID_DESC',
  BridgeVotesByRelayIdStddevSampleReceiptIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_RECEIPT_ID_ASC',
  BridgeVotesByRelayIdStddevSampleReceiptIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdStddevSampleRelayIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_RELAY_ID_ASC',
  BridgeVotesByRelayIdStddevSampleRelayIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_STDDEV_SAMPLE_RELAY_ID_DESC',
  BridgeVotesByRelayIdSumEthBlockNumberAsc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesByRelayIdSumEthBlockNumberDesc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesByRelayIdSumEventIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_EVENT_ID_ASC',
  BridgeVotesByRelayIdSumEventIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_EVENT_ID_DESC',
  BridgeVotesByRelayIdSumIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_ID_ASC',
  BridgeVotesByRelayIdSumIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_ID_DESC',
  BridgeVotesByRelayIdSumReceiptIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_RECEIPT_ID_ASC',
  BridgeVotesByRelayIdSumReceiptIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdSumRelayIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_RELAY_ID_ASC',
  BridgeVotesByRelayIdSumRelayIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_SUM_RELAY_ID_DESC',
  BridgeVotesByRelayIdVariancePopulationEthBlockNumberAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesByRelayIdVariancePopulationEthBlockNumberDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesByRelayIdVariancePopulationEventIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_EVENT_ID_ASC',
  BridgeVotesByRelayIdVariancePopulationEventIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_EVENT_ID_DESC',
  BridgeVotesByRelayIdVariancePopulationIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_ID_ASC',
  BridgeVotesByRelayIdVariancePopulationIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_ID_DESC',
  BridgeVotesByRelayIdVariancePopulationReceiptIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_RECEIPT_ID_ASC',
  BridgeVotesByRelayIdVariancePopulationReceiptIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdVariancePopulationRelayIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_RELAY_ID_ASC',
  BridgeVotesByRelayIdVariancePopulationRelayIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_POPULATION_RELAY_ID_DESC',
  BridgeVotesByRelayIdVarianceSampleEthBlockNumberAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesByRelayIdVarianceSampleEthBlockNumberDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesByRelayIdVarianceSampleEventIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BridgeVotesByRelayIdVarianceSampleEventIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BridgeVotesByRelayIdVarianceSampleIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_ID_ASC',
  BridgeVotesByRelayIdVarianceSampleIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_ID_DESC',
  BridgeVotesByRelayIdVarianceSampleReceiptIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_RECEIPT_ID_ASC',
  BridgeVotesByRelayIdVarianceSampleReceiptIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_RECEIPT_ID_DESC',
  BridgeVotesByRelayIdVarianceSampleRelayIdAsc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_RELAY_ID_ASC',
  BridgeVotesByRelayIdVarianceSampleRelayIdDesc = 'BRIDGE_VOTES_BY_RELAY_ID_VARIANCE_SAMPLE_RELAY_ID_DESC',
  ExtrinsicsAverageBlockIdAsc = 'EXTRINSICS_AVERAGE_BLOCK_ID_ASC',
  ExtrinsicsAverageBlockIdDesc = 'EXTRINSICS_AVERAGE_BLOCK_ID_DESC',
  ExtrinsicsAverageBlockNumberAsc = 'EXTRINSICS_AVERAGE_BLOCK_NUMBER_ASC',
  ExtrinsicsAverageBlockNumberDesc = 'EXTRINSICS_AVERAGE_BLOCK_NUMBER_DESC',
  ExtrinsicsAverageHashAsc = 'EXTRINSICS_AVERAGE_HASH_ASC',
  ExtrinsicsAverageHashDesc = 'EXTRINSICS_AVERAGE_HASH_DESC',
  ExtrinsicsAverageIdAsc = 'EXTRINSICS_AVERAGE_ID_ASC',
  ExtrinsicsAverageIdDesc = 'EXTRINSICS_AVERAGE_ID_DESC',
  ExtrinsicsAverageIndexAsc = 'EXTRINSICS_AVERAGE_INDEX_ASC',
  ExtrinsicsAverageIndexDesc = 'EXTRINSICS_AVERAGE_INDEX_DESC',
  ExtrinsicsAverageIsSignedAsc = 'EXTRINSICS_AVERAGE_IS_SIGNED_ASC',
  ExtrinsicsAverageIsSignedDesc = 'EXTRINSICS_AVERAGE_IS_SIGNED_DESC',
  ExtrinsicsAverageMethodAsc = 'EXTRINSICS_AVERAGE_METHOD_ASC',
  ExtrinsicsAverageMethodDesc = 'EXTRINSICS_AVERAGE_METHOD_DESC',
  ExtrinsicsAverageSectionAsc = 'EXTRINSICS_AVERAGE_SECTION_ASC',
  ExtrinsicsAverageSectionDesc = 'EXTRINSICS_AVERAGE_SECTION_DESC',
  ExtrinsicsAverageSignerIdAsc = 'EXTRINSICS_AVERAGE_SIGNER_ID_ASC',
  ExtrinsicsAverageSignerIdDesc = 'EXTRINSICS_AVERAGE_SIGNER_ID_DESC',
  ExtrinsicsAverageSuccessAsc = 'EXTRINSICS_AVERAGE_SUCCESS_ASC',
  ExtrinsicsAverageSuccessDesc = 'EXTRINSICS_AVERAGE_SUCCESS_DESC',
  ExtrinsicsCountAsc = 'EXTRINSICS_COUNT_ASC',
  ExtrinsicsCountDesc = 'EXTRINSICS_COUNT_DESC',
  ExtrinsicsDistinctCountBlockIdAsc = 'EXTRINSICS_DISTINCT_COUNT_BLOCK_ID_ASC',
  ExtrinsicsDistinctCountBlockIdDesc = 'EXTRINSICS_DISTINCT_COUNT_BLOCK_ID_DESC',
  ExtrinsicsDistinctCountBlockNumberAsc = 'EXTRINSICS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  ExtrinsicsDistinctCountBlockNumberDesc = 'EXTRINSICS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  ExtrinsicsDistinctCountHashAsc = 'EXTRINSICS_DISTINCT_COUNT_HASH_ASC',
  ExtrinsicsDistinctCountHashDesc = 'EXTRINSICS_DISTINCT_COUNT_HASH_DESC',
  ExtrinsicsDistinctCountIdAsc = 'EXTRINSICS_DISTINCT_COUNT_ID_ASC',
  ExtrinsicsDistinctCountIdDesc = 'EXTRINSICS_DISTINCT_COUNT_ID_DESC',
  ExtrinsicsDistinctCountIndexAsc = 'EXTRINSICS_DISTINCT_COUNT_INDEX_ASC',
  ExtrinsicsDistinctCountIndexDesc = 'EXTRINSICS_DISTINCT_COUNT_INDEX_DESC',
  ExtrinsicsDistinctCountIsSignedAsc = 'EXTRINSICS_DISTINCT_COUNT_IS_SIGNED_ASC',
  ExtrinsicsDistinctCountIsSignedDesc = 'EXTRINSICS_DISTINCT_COUNT_IS_SIGNED_DESC',
  ExtrinsicsDistinctCountMethodAsc = 'EXTRINSICS_DISTINCT_COUNT_METHOD_ASC',
  ExtrinsicsDistinctCountMethodDesc = 'EXTRINSICS_DISTINCT_COUNT_METHOD_DESC',
  ExtrinsicsDistinctCountSectionAsc = 'EXTRINSICS_DISTINCT_COUNT_SECTION_ASC',
  ExtrinsicsDistinctCountSectionDesc = 'EXTRINSICS_DISTINCT_COUNT_SECTION_DESC',
  ExtrinsicsDistinctCountSignerIdAsc = 'EXTRINSICS_DISTINCT_COUNT_SIGNER_ID_ASC',
  ExtrinsicsDistinctCountSignerIdDesc = 'EXTRINSICS_DISTINCT_COUNT_SIGNER_ID_DESC',
  ExtrinsicsDistinctCountSuccessAsc = 'EXTRINSICS_DISTINCT_COUNT_SUCCESS_ASC',
  ExtrinsicsDistinctCountSuccessDesc = 'EXTRINSICS_DISTINCT_COUNT_SUCCESS_DESC',
  ExtrinsicsMaxBlockIdAsc = 'EXTRINSICS_MAX_BLOCK_ID_ASC',
  ExtrinsicsMaxBlockIdDesc = 'EXTRINSICS_MAX_BLOCK_ID_DESC',
  ExtrinsicsMaxBlockNumberAsc = 'EXTRINSICS_MAX_BLOCK_NUMBER_ASC',
  ExtrinsicsMaxBlockNumberDesc = 'EXTRINSICS_MAX_BLOCK_NUMBER_DESC',
  ExtrinsicsMaxHashAsc = 'EXTRINSICS_MAX_HASH_ASC',
  ExtrinsicsMaxHashDesc = 'EXTRINSICS_MAX_HASH_DESC',
  ExtrinsicsMaxIdAsc = 'EXTRINSICS_MAX_ID_ASC',
  ExtrinsicsMaxIdDesc = 'EXTRINSICS_MAX_ID_DESC',
  ExtrinsicsMaxIndexAsc = 'EXTRINSICS_MAX_INDEX_ASC',
  ExtrinsicsMaxIndexDesc = 'EXTRINSICS_MAX_INDEX_DESC',
  ExtrinsicsMaxIsSignedAsc = 'EXTRINSICS_MAX_IS_SIGNED_ASC',
  ExtrinsicsMaxIsSignedDesc = 'EXTRINSICS_MAX_IS_SIGNED_DESC',
  ExtrinsicsMaxMethodAsc = 'EXTRINSICS_MAX_METHOD_ASC',
  ExtrinsicsMaxMethodDesc = 'EXTRINSICS_MAX_METHOD_DESC',
  ExtrinsicsMaxSectionAsc = 'EXTRINSICS_MAX_SECTION_ASC',
  ExtrinsicsMaxSectionDesc = 'EXTRINSICS_MAX_SECTION_DESC',
  ExtrinsicsMaxSignerIdAsc = 'EXTRINSICS_MAX_SIGNER_ID_ASC',
  ExtrinsicsMaxSignerIdDesc = 'EXTRINSICS_MAX_SIGNER_ID_DESC',
  ExtrinsicsMaxSuccessAsc = 'EXTRINSICS_MAX_SUCCESS_ASC',
  ExtrinsicsMaxSuccessDesc = 'EXTRINSICS_MAX_SUCCESS_DESC',
  ExtrinsicsMinBlockIdAsc = 'EXTRINSICS_MIN_BLOCK_ID_ASC',
  ExtrinsicsMinBlockIdDesc = 'EXTRINSICS_MIN_BLOCK_ID_DESC',
  ExtrinsicsMinBlockNumberAsc = 'EXTRINSICS_MIN_BLOCK_NUMBER_ASC',
  ExtrinsicsMinBlockNumberDesc = 'EXTRINSICS_MIN_BLOCK_NUMBER_DESC',
  ExtrinsicsMinHashAsc = 'EXTRINSICS_MIN_HASH_ASC',
  ExtrinsicsMinHashDesc = 'EXTRINSICS_MIN_HASH_DESC',
  ExtrinsicsMinIdAsc = 'EXTRINSICS_MIN_ID_ASC',
  ExtrinsicsMinIdDesc = 'EXTRINSICS_MIN_ID_DESC',
  ExtrinsicsMinIndexAsc = 'EXTRINSICS_MIN_INDEX_ASC',
  ExtrinsicsMinIndexDesc = 'EXTRINSICS_MIN_INDEX_DESC',
  ExtrinsicsMinIsSignedAsc = 'EXTRINSICS_MIN_IS_SIGNED_ASC',
  ExtrinsicsMinIsSignedDesc = 'EXTRINSICS_MIN_IS_SIGNED_DESC',
  ExtrinsicsMinMethodAsc = 'EXTRINSICS_MIN_METHOD_ASC',
  ExtrinsicsMinMethodDesc = 'EXTRINSICS_MIN_METHOD_DESC',
  ExtrinsicsMinSectionAsc = 'EXTRINSICS_MIN_SECTION_ASC',
  ExtrinsicsMinSectionDesc = 'EXTRINSICS_MIN_SECTION_DESC',
  ExtrinsicsMinSignerIdAsc = 'EXTRINSICS_MIN_SIGNER_ID_ASC',
  ExtrinsicsMinSignerIdDesc = 'EXTRINSICS_MIN_SIGNER_ID_DESC',
  ExtrinsicsMinSuccessAsc = 'EXTRINSICS_MIN_SUCCESS_ASC',
  ExtrinsicsMinSuccessDesc = 'EXTRINSICS_MIN_SUCCESS_DESC',
  ExtrinsicsStddevPopulationBlockIdAsc = 'EXTRINSICS_STDDEV_POPULATION_BLOCK_ID_ASC',
  ExtrinsicsStddevPopulationBlockIdDesc = 'EXTRINSICS_STDDEV_POPULATION_BLOCK_ID_DESC',
  ExtrinsicsStddevPopulationBlockNumberAsc = 'EXTRINSICS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  ExtrinsicsStddevPopulationBlockNumberDesc = 'EXTRINSICS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  ExtrinsicsStddevPopulationHashAsc = 'EXTRINSICS_STDDEV_POPULATION_HASH_ASC',
  ExtrinsicsStddevPopulationHashDesc = 'EXTRINSICS_STDDEV_POPULATION_HASH_DESC',
  ExtrinsicsStddevPopulationIdAsc = 'EXTRINSICS_STDDEV_POPULATION_ID_ASC',
  ExtrinsicsStddevPopulationIdDesc = 'EXTRINSICS_STDDEV_POPULATION_ID_DESC',
  ExtrinsicsStddevPopulationIndexAsc = 'EXTRINSICS_STDDEV_POPULATION_INDEX_ASC',
  ExtrinsicsStddevPopulationIndexDesc = 'EXTRINSICS_STDDEV_POPULATION_INDEX_DESC',
  ExtrinsicsStddevPopulationIsSignedAsc = 'EXTRINSICS_STDDEV_POPULATION_IS_SIGNED_ASC',
  ExtrinsicsStddevPopulationIsSignedDesc = 'EXTRINSICS_STDDEV_POPULATION_IS_SIGNED_DESC',
  ExtrinsicsStddevPopulationMethodAsc = 'EXTRINSICS_STDDEV_POPULATION_METHOD_ASC',
  ExtrinsicsStddevPopulationMethodDesc = 'EXTRINSICS_STDDEV_POPULATION_METHOD_DESC',
  ExtrinsicsStddevPopulationSectionAsc = 'EXTRINSICS_STDDEV_POPULATION_SECTION_ASC',
  ExtrinsicsStddevPopulationSectionDesc = 'EXTRINSICS_STDDEV_POPULATION_SECTION_DESC',
  ExtrinsicsStddevPopulationSignerIdAsc = 'EXTRINSICS_STDDEV_POPULATION_SIGNER_ID_ASC',
  ExtrinsicsStddevPopulationSignerIdDesc = 'EXTRINSICS_STDDEV_POPULATION_SIGNER_ID_DESC',
  ExtrinsicsStddevPopulationSuccessAsc = 'EXTRINSICS_STDDEV_POPULATION_SUCCESS_ASC',
  ExtrinsicsStddevPopulationSuccessDesc = 'EXTRINSICS_STDDEV_POPULATION_SUCCESS_DESC',
  ExtrinsicsStddevSampleBlockIdAsc = 'EXTRINSICS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  ExtrinsicsStddevSampleBlockIdDesc = 'EXTRINSICS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  ExtrinsicsStddevSampleBlockNumberAsc = 'EXTRINSICS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  ExtrinsicsStddevSampleBlockNumberDesc = 'EXTRINSICS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  ExtrinsicsStddevSampleHashAsc = 'EXTRINSICS_STDDEV_SAMPLE_HASH_ASC',
  ExtrinsicsStddevSampleHashDesc = 'EXTRINSICS_STDDEV_SAMPLE_HASH_DESC',
  ExtrinsicsStddevSampleIdAsc = 'EXTRINSICS_STDDEV_SAMPLE_ID_ASC',
  ExtrinsicsStddevSampleIdDesc = 'EXTRINSICS_STDDEV_SAMPLE_ID_DESC',
  ExtrinsicsStddevSampleIndexAsc = 'EXTRINSICS_STDDEV_SAMPLE_INDEX_ASC',
  ExtrinsicsStddevSampleIndexDesc = 'EXTRINSICS_STDDEV_SAMPLE_INDEX_DESC',
  ExtrinsicsStddevSampleIsSignedAsc = 'EXTRINSICS_STDDEV_SAMPLE_IS_SIGNED_ASC',
  ExtrinsicsStddevSampleIsSignedDesc = 'EXTRINSICS_STDDEV_SAMPLE_IS_SIGNED_DESC',
  ExtrinsicsStddevSampleMethodAsc = 'EXTRINSICS_STDDEV_SAMPLE_METHOD_ASC',
  ExtrinsicsStddevSampleMethodDesc = 'EXTRINSICS_STDDEV_SAMPLE_METHOD_DESC',
  ExtrinsicsStddevSampleSectionAsc = 'EXTRINSICS_STDDEV_SAMPLE_SECTION_ASC',
  ExtrinsicsStddevSampleSectionDesc = 'EXTRINSICS_STDDEV_SAMPLE_SECTION_DESC',
  ExtrinsicsStddevSampleSignerIdAsc = 'EXTRINSICS_STDDEV_SAMPLE_SIGNER_ID_ASC',
  ExtrinsicsStddevSampleSignerIdDesc = 'EXTRINSICS_STDDEV_SAMPLE_SIGNER_ID_DESC',
  ExtrinsicsStddevSampleSuccessAsc = 'EXTRINSICS_STDDEV_SAMPLE_SUCCESS_ASC',
  ExtrinsicsStddevSampleSuccessDesc = 'EXTRINSICS_STDDEV_SAMPLE_SUCCESS_DESC',
  ExtrinsicsSumBlockIdAsc = 'EXTRINSICS_SUM_BLOCK_ID_ASC',
  ExtrinsicsSumBlockIdDesc = 'EXTRINSICS_SUM_BLOCK_ID_DESC',
  ExtrinsicsSumBlockNumberAsc = 'EXTRINSICS_SUM_BLOCK_NUMBER_ASC',
  ExtrinsicsSumBlockNumberDesc = 'EXTRINSICS_SUM_BLOCK_NUMBER_DESC',
  ExtrinsicsSumHashAsc = 'EXTRINSICS_SUM_HASH_ASC',
  ExtrinsicsSumHashDesc = 'EXTRINSICS_SUM_HASH_DESC',
  ExtrinsicsSumIdAsc = 'EXTRINSICS_SUM_ID_ASC',
  ExtrinsicsSumIdDesc = 'EXTRINSICS_SUM_ID_DESC',
  ExtrinsicsSumIndexAsc = 'EXTRINSICS_SUM_INDEX_ASC',
  ExtrinsicsSumIndexDesc = 'EXTRINSICS_SUM_INDEX_DESC',
  ExtrinsicsSumIsSignedAsc = 'EXTRINSICS_SUM_IS_SIGNED_ASC',
  ExtrinsicsSumIsSignedDesc = 'EXTRINSICS_SUM_IS_SIGNED_DESC',
  ExtrinsicsSumMethodAsc = 'EXTRINSICS_SUM_METHOD_ASC',
  ExtrinsicsSumMethodDesc = 'EXTRINSICS_SUM_METHOD_DESC',
  ExtrinsicsSumSectionAsc = 'EXTRINSICS_SUM_SECTION_ASC',
  ExtrinsicsSumSectionDesc = 'EXTRINSICS_SUM_SECTION_DESC',
  ExtrinsicsSumSignerIdAsc = 'EXTRINSICS_SUM_SIGNER_ID_ASC',
  ExtrinsicsSumSignerIdDesc = 'EXTRINSICS_SUM_SIGNER_ID_DESC',
  ExtrinsicsSumSuccessAsc = 'EXTRINSICS_SUM_SUCCESS_ASC',
  ExtrinsicsSumSuccessDesc = 'EXTRINSICS_SUM_SUCCESS_DESC',
  ExtrinsicsVariancePopulationBlockIdAsc = 'EXTRINSICS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  ExtrinsicsVariancePopulationBlockIdDesc = 'EXTRINSICS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  ExtrinsicsVariancePopulationBlockNumberAsc = 'EXTRINSICS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  ExtrinsicsVariancePopulationBlockNumberDesc = 'EXTRINSICS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  ExtrinsicsVariancePopulationHashAsc = 'EXTRINSICS_VARIANCE_POPULATION_HASH_ASC',
  ExtrinsicsVariancePopulationHashDesc = 'EXTRINSICS_VARIANCE_POPULATION_HASH_DESC',
  ExtrinsicsVariancePopulationIdAsc = 'EXTRINSICS_VARIANCE_POPULATION_ID_ASC',
  ExtrinsicsVariancePopulationIdDesc = 'EXTRINSICS_VARIANCE_POPULATION_ID_DESC',
  ExtrinsicsVariancePopulationIndexAsc = 'EXTRINSICS_VARIANCE_POPULATION_INDEX_ASC',
  ExtrinsicsVariancePopulationIndexDesc = 'EXTRINSICS_VARIANCE_POPULATION_INDEX_DESC',
  ExtrinsicsVariancePopulationIsSignedAsc = 'EXTRINSICS_VARIANCE_POPULATION_IS_SIGNED_ASC',
  ExtrinsicsVariancePopulationIsSignedDesc = 'EXTRINSICS_VARIANCE_POPULATION_IS_SIGNED_DESC',
  ExtrinsicsVariancePopulationMethodAsc = 'EXTRINSICS_VARIANCE_POPULATION_METHOD_ASC',
  ExtrinsicsVariancePopulationMethodDesc = 'EXTRINSICS_VARIANCE_POPULATION_METHOD_DESC',
  ExtrinsicsVariancePopulationSectionAsc = 'EXTRINSICS_VARIANCE_POPULATION_SECTION_ASC',
  ExtrinsicsVariancePopulationSectionDesc = 'EXTRINSICS_VARIANCE_POPULATION_SECTION_DESC',
  ExtrinsicsVariancePopulationSignerIdAsc = 'EXTRINSICS_VARIANCE_POPULATION_SIGNER_ID_ASC',
  ExtrinsicsVariancePopulationSignerIdDesc = 'EXTRINSICS_VARIANCE_POPULATION_SIGNER_ID_DESC',
  ExtrinsicsVariancePopulationSuccessAsc = 'EXTRINSICS_VARIANCE_POPULATION_SUCCESS_ASC',
  ExtrinsicsVariancePopulationSuccessDesc = 'EXTRINSICS_VARIANCE_POPULATION_SUCCESS_DESC',
  ExtrinsicsVarianceSampleBlockIdAsc = 'EXTRINSICS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  ExtrinsicsVarianceSampleBlockIdDesc = 'EXTRINSICS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  ExtrinsicsVarianceSampleBlockNumberAsc = 'EXTRINSICS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  ExtrinsicsVarianceSampleBlockNumberDesc = 'EXTRINSICS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  ExtrinsicsVarianceSampleHashAsc = 'EXTRINSICS_VARIANCE_SAMPLE_HASH_ASC',
  ExtrinsicsVarianceSampleHashDesc = 'EXTRINSICS_VARIANCE_SAMPLE_HASH_DESC',
  ExtrinsicsVarianceSampleIdAsc = 'EXTRINSICS_VARIANCE_SAMPLE_ID_ASC',
  ExtrinsicsVarianceSampleIdDesc = 'EXTRINSICS_VARIANCE_SAMPLE_ID_DESC',
  ExtrinsicsVarianceSampleIndexAsc = 'EXTRINSICS_VARIANCE_SAMPLE_INDEX_ASC',
  ExtrinsicsVarianceSampleIndexDesc = 'EXTRINSICS_VARIANCE_SAMPLE_INDEX_DESC',
  ExtrinsicsVarianceSampleIsSignedAsc = 'EXTRINSICS_VARIANCE_SAMPLE_IS_SIGNED_ASC',
  ExtrinsicsVarianceSampleIsSignedDesc = 'EXTRINSICS_VARIANCE_SAMPLE_IS_SIGNED_DESC',
  ExtrinsicsVarianceSampleMethodAsc = 'EXTRINSICS_VARIANCE_SAMPLE_METHOD_ASC',
  ExtrinsicsVarianceSampleMethodDesc = 'EXTRINSICS_VARIANCE_SAMPLE_METHOD_DESC',
  ExtrinsicsVarianceSampleSectionAsc = 'EXTRINSICS_VARIANCE_SAMPLE_SECTION_ASC',
  ExtrinsicsVarianceSampleSectionDesc = 'EXTRINSICS_VARIANCE_SAMPLE_SECTION_DESC',
  ExtrinsicsVarianceSampleSignerIdAsc = 'EXTRINSICS_VARIANCE_SAMPLE_SIGNER_ID_ASC',
  ExtrinsicsVarianceSampleSignerIdDesc = 'EXTRINSICS_VARIANCE_SAMPLE_SIGNER_ID_DESC',
  ExtrinsicsVarianceSampleSuccessAsc = 'EXTRINSICS_VARIANCE_SAMPLE_SUCCESS_ASC',
  ExtrinsicsVarianceSampleSuccessDesc = 'EXTRINSICS_VARIANCE_SAMPLE_SUCCESS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MeritsByFromIdAverageBlockIdAsc = 'MERITS_BY_FROM_ID_AVERAGE_BLOCK_ID_ASC',
  MeritsByFromIdAverageBlockIdDesc = 'MERITS_BY_FROM_ID_AVERAGE_BLOCK_ID_DESC',
  MeritsByFromIdAverageBlockNumberAsc = 'MERITS_BY_FROM_ID_AVERAGE_BLOCK_NUMBER_ASC',
  MeritsByFromIdAverageBlockNumberDesc = 'MERITS_BY_FROM_ID_AVERAGE_BLOCK_NUMBER_DESC',
  MeritsByFromIdAverageEventIndexAsc = 'MERITS_BY_FROM_ID_AVERAGE_EVENT_INDEX_ASC',
  MeritsByFromIdAverageEventIndexDesc = 'MERITS_BY_FROM_ID_AVERAGE_EVENT_INDEX_DESC',
  MeritsByFromIdAverageExtrinsicIndexAsc = 'MERITS_BY_FROM_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  MeritsByFromIdAverageExtrinsicIndexDesc = 'MERITS_BY_FROM_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  MeritsByFromIdAverageFromIdAsc = 'MERITS_BY_FROM_ID_AVERAGE_FROM_ID_ASC',
  MeritsByFromIdAverageFromIdDesc = 'MERITS_BY_FROM_ID_AVERAGE_FROM_ID_DESC',
  MeritsByFromIdAverageIdAsc = 'MERITS_BY_FROM_ID_AVERAGE_ID_ASC',
  MeritsByFromIdAverageIdDesc = 'MERITS_BY_FROM_ID_AVERAGE_ID_DESC',
  MeritsByFromIdAverageRemarkAsc = 'MERITS_BY_FROM_ID_AVERAGE_REMARK_ASC',
  MeritsByFromIdAverageRemarkDesc = 'MERITS_BY_FROM_ID_AVERAGE_REMARK_DESC',
  MeritsByFromIdAverageToIdAsc = 'MERITS_BY_FROM_ID_AVERAGE_TO_ID_ASC',
  MeritsByFromIdAverageToIdDesc = 'MERITS_BY_FROM_ID_AVERAGE_TO_ID_DESC',
  MeritsByFromIdAverageValueAsc = 'MERITS_BY_FROM_ID_AVERAGE_VALUE_ASC',
  MeritsByFromIdAverageValueDesc = 'MERITS_BY_FROM_ID_AVERAGE_VALUE_DESC',
  MeritsByFromIdCountAsc = 'MERITS_BY_FROM_ID_COUNT_ASC',
  MeritsByFromIdCountDesc = 'MERITS_BY_FROM_ID_COUNT_DESC',
  MeritsByFromIdDistinctCountBlockIdAsc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  MeritsByFromIdDistinctCountBlockIdDesc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  MeritsByFromIdDistinctCountBlockNumberAsc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  MeritsByFromIdDistinctCountBlockNumberDesc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  MeritsByFromIdDistinctCountEventIndexAsc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  MeritsByFromIdDistinctCountEventIndexDesc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  MeritsByFromIdDistinctCountExtrinsicIndexAsc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  MeritsByFromIdDistinctCountExtrinsicIndexDesc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  MeritsByFromIdDistinctCountFromIdAsc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_FROM_ID_ASC',
  MeritsByFromIdDistinctCountFromIdDesc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_FROM_ID_DESC',
  MeritsByFromIdDistinctCountIdAsc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_ID_ASC',
  MeritsByFromIdDistinctCountIdDesc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_ID_DESC',
  MeritsByFromIdDistinctCountRemarkAsc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_REMARK_ASC',
  MeritsByFromIdDistinctCountRemarkDesc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_REMARK_DESC',
  MeritsByFromIdDistinctCountToIdAsc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_TO_ID_ASC',
  MeritsByFromIdDistinctCountToIdDesc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_TO_ID_DESC',
  MeritsByFromIdDistinctCountValueAsc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_VALUE_ASC',
  MeritsByFromIdDistinctCountValueDesc = 'MERITS_BY_FROM_ID_DISTINCT_COUNT_VALUE_DESC',
  MeritsByFromIdMaxBlockIdAsc = 'MERITS_BY_FROM_ID_MAX_BLOCK_ID_ASC',
  MeritsByFromIdMaxBlockIdDesc = 'MERITS_BY_FROM_ID_MAX_BLOCK_ID_DESC',
  MeritsByFromIdMaxBlockNumberAsc = 'MERITS_BY_FROM_ID_MAX_BLOCK_NUMBER_ASC',
  MeritsByFromIdMaxBlockNumberDesc = 'MERITS_BY_FROM_ID_MAX_BLOCK_NUMBER_DESC',
  MeritsByFromIdMaxEventIndexAsc = 'MERITS_BY_FROM_ID_MAX_EVENT_INDEX_ASC',
  MeritsByFromIdMaxEventIndexDesc = 'MERITS_BY_FROM_ID_MAX_EVENT_INDEX_DESC',
  MeritsByFromIdMaxExtrinsicIndexAsc = 'MERITS_BY_FROM_ID_MAX_EXTRINSIC_INDEX_ASC',
  MeritsByFromIdMaxExtrinsicIndexDesc = 'MERITS_BY_FROM_ID_MAX_EXTRINSIC_INDEX_DESC',
  MeritsByFromIdMaxFromIdAsc = 'MERITS_BY_FROM_ID_MAX_FROM_ID_ASC',
  MeritsByFromIdMaxFromIdDesc = 'MERITS_BY_FROM_ID_MAX_FROM_ID_DESC',
  MeritsByFromIdMaxIdAsc = 'MERITS_BY_FROM_ID_MAX_ID_ASC',
  MeritsByFromIdMaxIdDesc = 'MERITS_BY_FROM_ID_MAX_ID_DESC',
  MeritsByFromIdMaxRemarkAsc = 'MERITS_BY_FROM_ID_MAX_REMARK_ASC',
  MeritsByFromIdMaxRemarkDesc = 'MERITS_BY_FROM_ID_MAX_REMARK_DESC',
  MeritsByFromIdMaxToIdAsc = 'MERITS_BY_FROM_ID_MAX_TO_ID_ASC',
  MeritsByFromIdMaxToIdDesc = 'MERITS_BY_FROM_ID_MAX_TO_ID_DESC',
  MeritsByFromIdMaxValueAsc = 'MERITS_BY_FROM_ID_MAX_VALUE_ASC',
  MeritsByFromIdMaxValueDesc = 'MERITS_BY_FROM_ID_MAX_VALUE_DESC',
  MeritsByFromIdMinBlockIdAsc = 'MERITS_BY_FROM_ID_MIN_BLOCK_ID_ASC',
  MeritsByFromIdMinBlockIdDesc = 'MERITS_BY_FROM_ID_MIN_BLOCK_ID_DESC',
  MeritsByFromIdMinBlockNumberAsc = 'MERITS_BY_FROM_ID_MIN_BLOCK_NUMBER_ASC',
  MeritsByFromIdMinBlockNumberDesc = 'MERITS_BY_FROM_ID_MIN_BLOCK_NUMBER_DESC',
  MeritsByFromIdMinEventIndexAsc = 'MERITS_BY_FROM_ID_MIN_EVENT_INDEX_ASC',
  MeritsByFromIdMinEventIndexDesc = 'MERITS_BY_FROM_ID_MIN_EVENT_INDEX_DESC',
  MeritsByFromIdMinExtrinsicIndexAsc = 'MERITS_BY_FROM_ID_MIN_EXTRINSIC_INDEX_ASC',
  MeritsByFromIdMinExtrinsicIndexDesc = 'MERITS_BY_FROM_ID_MIN_EXTRINSIC_INDEX_DESC',
  MeritsByFromIdMinFromIdAsc = 'MERITS_BY_FROM_ID_MIN_FROM_ID_ASC',
  MeritsByFromIdMinFromIdDesc = 'MERITS_BY_FROM_ID_MIN_FROM_ID_DESC',
  MeritsByFromIdMinIdAsc = 'MERITS_BY_FROM_ID_MIN_ID_ASC',
  MeritsByFromIdMinIdDesc = 'MERITS_BY_FROM_ID_MIN_ID_DESC',
  MeritsByFromIdMinRemarkAsc = 'MERITS_BY_FROM_ID_MIN_REMARK_ASC',
  MeritsByFromIdMinRemarkDesc = 'MERITS_BY_FROM_ID_MIN_REMARK_DESC',
  MeritsByFromIdMinToIdAsc = 'MERITS_BY_FROM_ID_MIN_TO_ID_ASC',
  MeritsByFromIdMinToIdDesc = 'MERITS_BY_FROM_ID_MIN_TO_ID_DESC',
  MeritsByFromIdMinValueAsc = 'MERITS_BY_FROM_ID_MIN_VALUE_ASC',
  MeritsByFromIdMinValueDesc = 'MERITS_BY_FROM_ID_MIN_VALUE_DESC',
  MeritsByFromIdStddevPopulationBlockIdAsc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  MeritsByFromIdStddevPopulationBlockIdDesc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  MeritsByFromIdStddevPopulationBlockNumberAsc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  MeritsByFromIdStddevPopulationBlockNumberDesc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  MeritsByFromIdStddevPopulationEventIndexAsc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  MeritsByFromIdStddevPopulationEventIndexDesc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  MeritsByFromIdStddevPopulationExtrinsicIndexAsc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  MeritsByFromIdStddevPopulationExtrinsicIndexDesc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  MeritsByFromIdStddevPopulationFromIdAsc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_FROM_ID_ASC',
  MeritsByFromIdStddevPopulationFromIdDesc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_FROM_ID_DESC',
  MeritsByFromIdStddevPopulationIdAsc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_ID_ASC',
  MeritsByFromIdStddevPopulationIdDesc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_ID_DESC',
  MeritsByFromIdStddevPopulationRemarkAsc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_REMARK_ASC',
  MeritsByFromIdStddevPopulationRemarkDesc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_REMARK_DESC',
  MeritsByFromIdStddevPopulationToIdAsc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_TO_ID_ASC',
  MeritsByFromIdStddevPopulationToIdDesc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_TO_ID_DESC',
  MeritsByFromIdStddevPopulationValueAsc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_VALUE_ASC',
  MeritsByFromIdStddevPopulationValueDesc = 'MERITS_BY_FROM_ID_STDDEV_POPULATION_VALUE_DESC',
  MeritsByFromIdStddevSampleBlockIdAsc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  MeritsByFromIdStddevSampleBlockIdDesc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  MeritsByFromIdStddevSampleBlockNumberAsc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  MeritsByFromIdStddevSampleBlockNumberDesc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  MeritsByFromIdStddevSampleEventIndexAsc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  MeritsByFromIdStddevSampleEventIndexDesc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  MeritsByFromIdStddevSampleExtrinsicIndexAsc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  MeritsByFromIdStddevSampleExtrinsicIndexDesc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  MeritsByFromIdStddevSampleFromIdAsc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_FROM_ID_ASC',
  MeritsByFromIdStddevSampleFromIdDesc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_FROM_ID_DESC',
  MeritsByFromIdStddevSampleIdAsc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_ID_ASC',
  MeritsByFromIdStddevSampleIdDesc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_ID_DESC',
  MeritsByFromIdStddevSampleRemarkAsc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_REMARK_ASC',
  MeritsByFromIdStddevSampleRemarkDesc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_REMARK_DESC',
  MeritsByFromIdStddevSampleToIdAsc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_TO_ID_ASC',
  MeritsByFromIdStddevSampleToIdDesc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_TO_ID_DESC',
  MeritsByFromIdStddevSampleValueAsc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_VALUE_ASC',
  MeritsByFromIdStddevSampleValueDesc = 'MERITS_BY_FROM_ID_STDDEV_SAMPLE_VALUE_DESC',
  MeritsByFromIdSumBlockIdAsc = 'MERITS_BY_FROM_ID_SUM_BLOCK_ID_ASC',
  MeritsByFromIdSumBlockIdDesc = 'MERITS_BY_FROM_ID_SUM_BLOCK_ID_DESC',
  MeritsByFromIdSumBlockNumberAsc = 'MERITS_BY_FROM_ID_SUM_BLOCK_NUMBER_ASC',
  MeritsByFromIdSumBlockNumberDesc = 'MERITS_BY_FROM_ID_SUM_BLOCK_NUMBER_DESC',
  MeritsByFromIdSumEventIndexAsc = 'MERITS_BY_FROM_ID_SUM_EVENT_INDEX_ASC',
  MeritsByFromIdSumEventIndexDesc = 'MERITS_BY_FROM_ID_SUM_EVENT_INDEX_DESC',
  MeritsByFromIdSumExtrinsicIndexAsc = 'MERITS_BY_FROM_ID_SUM_EXTRINSIC_INDEX_ASC',
  MeritsByFromIdSumExtrinsicIndexDesc = 'MERITS_BY_FROM_ID_SUM_EXTRINSIC_INDEX_DESC',
  MeritsByFromIdSumFromIdAsc = 'MERITS_BY_FROM_ID_SUM_FROM_ID_ASC',
  MeritsByFromIdSumFromIdDesc = 'MERITS_BY_FROM_ID_SUM_FROM_ID_DESC',
  MeritsByFromIdSumIdAsc = 'MERITS_BY_FROM_ID_SUM_ID_ASC',
  MeritsByFromIdSumIdDesc = 'MERITS_BY_FROM_ID_SUM_ID_DESC',
  MeritsByFromIdSumRemarkAsc = 'MERITS_BY_FROM_ID_SUM_REMARK_ASC',
  MeritsByFromIdSumRemarkDesc = 'MERITS_BY_FROM_ID_SUM_REMARK_DESC',
  MeritsByFromIdSumToIdAsc = 'MERITS_BY_FROM_ID_SUM_TO_ID_ASC',
  MeritsByFromIdSumToIdDesc = 'MERITS_BY_FROM_ID_SUM_TO_ID_DESC',
  MeritsByFromIdSumValueAsc = 'MERITS_BY_FROM_ID_SUM_VALUE_ASC',
  MeritsByFromIdSumValueDesc = 'MERITS_BY_FROM_ID_SUM_VALUE_DESC',
  MeritsByFromIdVariancePopulationBlockIdAsc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  MeritsByFromIdVariancePopulationBlockIdDesc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  MeritsByFromIdVariancePopulationBlockNumberAsc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  MeritsByFromIdVariancePopulationBlockNumberDesc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  MeritsByFromIdVariancePopulationEventIndexAsc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  MeritsByFromIdVariancePopulationEventIndexDesc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  MeritsByFromIdVariancePopulationExtrinsicIndexAsc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  MeritsByFromIdVariancePopulationExtrinsicIndexDesc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  MeritsByFromIdVariancePopulationFromIdAsc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_FROM_ID_ASC',
  MeritsByFromIdVariancePopulationFromIdDesc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_FROM_ID_DESC',
  MeritsByFromIdVariancePopulationIdAsc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_ID_ASC',
  MeritsByFromIdVariancePopulationIdDesc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_ID_DESC',
  MeritsByFromIdVariancePopulationRemarkAsc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_REMARK_ASC',
  MeritsByFromIdVariancePopulationRemarkDesc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_REMARK_DESC',
  MeritsByFromIdVariancePopulationToIdAsc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_TO_ID_ASC',
  MeritsByFromIdVariancePopulationToIdDesc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_TO_ID_DESC',
  MeritsByFromIdVariancePopulationValueAsc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_VALUE_ASC',
  MeritsByFromIdVariancePopulationValueDesc = 'MERITS_BY_FROM_ID_VARIANCE_POPULATION_VALUE_DESC',
  MeritsByFromIdVarianceSampleBlockIdAsc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  MeritsByFromIdVarianceSampleBlockIdDesc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  MeritsByFromIdVarianceSampleBlockNumberAsc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  MeritsByFromIdVarianceSampleBlockNumberDesc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  MeritsByFromIdVarianceSampleEventIndexAsc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  MeritsByFromIdVarianceSampleEventIndexDesc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  MeritsByFromIdVarianceSampleExtrinsicIndexAsc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  MeritsByFromIdVarianceSampleExtrinsicIndexDesc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  MeritsByFromIdVarianceSampleFromIdAsc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_FROM_ID_ASC',
  MeritsByFromIdVarianceSampleFromIdDesc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_FROM_ID_DESC',
  MeritsByFromIdVarianceSampleIdAsc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_ID_ASC',
  MeritsByFromIdVarianceSampleIdDesc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_ID_DESC',
  MeritsByFromIdVarianceSampleRemarkAsc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_REMARK_ASC',
  MeritsByFromIdVarianceSampleRemarkDesc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_REMARK_DESC',
  MeritsByFromIdVarianceSampleToIdAsc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_TO_ID_ASC',
  MeritsByFromIdVarianceSampleToIdDesc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_TO_ID_DESC',
  MeritsByFromIdVarianceSampleValueAsc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_VALUE_ASC',
  MeritsByFromIdVarianceSampleValueDesc = 'MERITS_BY_FROM_ID_VARIANCE_SAMPLE_VALUE_DESC',
  MeritsByToIdAverageBlockIdAsc = 'MERITS_BY_TO_ID_AVERAGE_BLOCK_ID_ASC',
  MeritsByToIdAverageBlockIdDesc = 'MERITS_BY_TO_ID_AVERAGE_BLOCK_ID_DESC',
  MeritsByToIdAverageBlockNumberAsc = 'MERITS_BY_TO_ID_AVERAGE_BLOCK_NUMBER_ASC',
  MeritsByToIdAverageBlockNumberDesc = 'MERITS_BY_TO_ID_AVERAGE_BLOCK_NUMBER_DESC',
  MeritsByToIdAverageEventIndexAsc = 'MERITS_BY_TO_ID_AVERAGE_EVENT_INDEX_ASC',
  MeritsByToIdAverageEventIndexDesc = 'MERITS_BY_TO_ID_AVERAGE_EVENT_INDEX_DESC',
  MeritsByToIdAverageExtrinsicIndexAsc = 'MERITS_BY_TO_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  MeritsByToIdAverageExtrinsicIndexDesc = 'MERITS_BY_TO_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  MeritsByToIdAverageFromIdAsc = 'MERITS_BY_TO_ID_AVERAGE_FROM_ID_ASC',
  MeritsByToIdAverageFromIdDesc = 'MERITS_BY_TO_ID_AVERAGE_FROM_ID_DESC',
  MeritsByToIdAverageIdAsc = 'MERITS_BY_TO_ID_AVERAGE_ID_ASC',
  MeritsByToIdAverageIdDesc = 'MERITS_BY_TO_ID_AVERAGE_ID_DESC',
  MeritsByToIdAverageRemarkAsc = 'MERITS_BY_TO_ID_AVERAGE_REMARK_ASC',
  MeritsByToIdAverageRemarkDesc = 'MERITS_BY_TO_ID_AVERAGE_REMARK_DESC',
  MeritsByToIdAverageToIdAsc = 'MERITS_BY_TO_ID_AVERAGE_TO_ID_ASC',
  MeritsByToIdAverageToIdDesc = 'MERITS_BY_TO_ID_AVERAGE_TO_ID_DESC',
  MeritsByToIdAverageValueAsc = 'MERITS_BY_TO_ID_AVERAGE_VALUE_ASC',
  MeritsByToIdAverageValueDesc = 'MERITS_BY_TO_ID_AVERAGE_VALUE_DESC',
  MeritsByToIdCountAsc = 'MERITS_BY_TO_ID_COUNT_ASC',
  MeritsByToIdCountDesc = 'MERITS_BY_TO_ID_COUNT_DESC',
  MeritsByToIdDistinctCountBlockIdAsc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  MeritsByToIdDistinctCountBlockIdDesc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  MeritsByToIdDistinctCountBlockNumberAsc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  MeritsByToIdDistinctCountBlockNumberDesc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  MeritsByToIdDistinctCountEventIndexAsc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  MeritsByToIdDistinctCountEventIndexDesc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  MeritsByToIdDistinctCountExtrinsicIndexAsc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  MeritsByToIdDistinctCountExtrinsicIndexDesc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  MeritsByToIdDistinctCountFromIdAsc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_FROM_ID_ASC',
  MeritsByToIdDistinctCountFromIdDesc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_FROM_ID_DESC',
  MeritsByToIdDistinctCountIdAsc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_ID_ASC',
  MeritsByToIdDistinctCountIdDesc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_ID_DESC',
  MeritsByToIdDistinctCountRemarkAsc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_REMARK_ASC',
  MeritsByToIdDistinctCountRemarkDesc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_REMARK_DESC',
  MeritsByToIdDistinctCountToIdAsc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_TO_ID_ASC',
  MeritsByToIdDistinctCountToIdDesc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_TO_ID_DESC',
  MeritsByToIdDistinctCountValueAsc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_VALUE_ASC',
  MeritsByToIdDistinctCountValueDesc = 'MERITS_BY_TO_ID_DISTINCT_COUNT_VALUE_DESC',
  MeritsByToIdMaxBlockIdAsc = 'MERITS_BY_TO_ID_MAX_BLOCK_ID_ASC',
  MeritsByToIdMaxBlockIdDesc = 'MERITS_BY_TO_ID_MAX_BLOCK_ID_DESC',
  MeritsByToIdMaxBlockNumberAsc = 'MERITS_BY_TO_ID_MAX_BLOCK_NUMBER_ASC',
  MeritsByToIdMaxBlockNumberDesc = 'MERITS_BY_TO_ID_MAX_BLOCK_NUMBER_DESC',
  MeritsByToIdMaxEventIndexAsc = 'MERITS_BY_TO_ID_MAX_EVENT_INDEX_ASC',
  MeritsByToIdMaxEventIndexDesc = 'MERITS_BY_TO_ID_MAX_EVENT_INDEX_DESC',
  MeritsByToIdMaxExtrinsicIndexAsc = 'MERITS_BY_TO_ID_MAX_EXTRINSIC_INDEX_ASC',
  MeritsByToIdMaxExtrinsicIndexDesc = 'MERITS_BY_TO_ID_MAX_EXTRINSIC_INDEX_DESC',
  MeritsByToIdMaxFromIdAsc = 'MERITS_BY_TO_ID_MAX_FROM_ID_ASC',
  MeritsByToIdMaxFromIdDesc = 'MERITS_BY_TO_ID_MAX_FROM_ID_DESC',
  MeritsByToIdMaxIdAsc = 'MERITS_BY_TO_ID_MAX_ID_ASC',
  MeritsByToIdMaxIdDesc = 'MERITS_BY_TO_ID_MAX_ID_DESC',
  MeritsByToIdMaxRemarkAsc = 'MERITS_BY_TO_ID_MAX_REMARK_ASC',
  MeritsByToIdMaxRemarkDesc = 'MERITS_BY_TO_ID_MAX_REMARK_DESC',
  MeritsByToIdMaxToIdAsc = 'MERITS_BY_TO_ID_MAX_TO_ID_ASC',
  MeritsByToIdMaxToIdDesc = 'MERITS_BY_TO_ID_MAX_TO_ID_DESC',
  MeritsByToIdMaxValueAsc = 'MERITS_BY_TO_ID_MAX_VALUE_ASC',
  MeritsByToIdMaxValueDesc = 'MERITS_BY_TO_ID_MAX_VALUE_DESC',
  MeritsByToIdMinBlockIdAsc = 'MERITS_BY_TO_ID_MIN_BLOCK_ID_ASC',
  MeritsByToIdMinBlockIdDesc = 'MERITS_BY_TO_ID_MIN_BLOCK_ID_DESC',
  MeritsByToIdMinBlockNumberAsc = 'MERITS_BY_TO_ID_MIN_BLOCK_NUMBER_ASC',
  MeritsByToIdMinBlockNumberDesc = 'MERITS_BY_TO_ID_MIN_BLOCK_NUMBER_DESC',
  MeritsByToIdMinEventIndexAsc = 'MERITS_BY_TO_ID_MIN_EVENT_INDEX_ASC',
  MeritsByToIdMinEventIndexDesc = 'MERITS_BY_TO_ID_MIN_EVENT_INDEX_DESC',
  MeritsByToIdMinExtrinsicIndexAsc = 'MERITS_BY_TO_ID_MIN_EXTRINSIC_INDEX_ASC',
  MeritsByToIdMinExtrinsicIndexDesc = 'MERITS_BY_TO_ID_MIN_EXTRINSIC_INDEX_DESC',
  MeritsByToIdMinFromIdAsc = 'MERITS_BY_TO_ID_MIN_FROM_ID_ASC',
  MeritsByToIdMinFromIdDesc = 'MERITS_BY_TO_ID_MIN_FROM_ID_DESC',
  MeritsByToIdMinIdAsc = 'MERITS_BY_TO_ID_MIN_ID_ASC',
  MeritsByToIdMinIdDesc = 'MERITS_BY_TO_ID_MIN_ID_DESC',
  MeritsByToIdMinRemarkAsc = 'MERITS_BY_TO_ID_MIN_REMARK_ASC',
  MeritsByToIdMinRemarkDesc = 'MERITS_BY_TO_ID_MIN_REMARK_DESC',
  MeritsByToIdMinToIdAsc = 'MERITS_BY_TO_ID_MIN_TO_ID_ASC',
  MeritsByToIdMinToIdDesc = 'MERITS_BY_TO_ID_MIN_TO_ID_DESC',
  MeritsByToIdMinValueAsc = 'MERITS_BY_TO_ID_MIN_VALUE_ASC',
  MeritsByToIdMinValueDesc = 'MERITS_BY_TO_ID_MIN_VALUE_DESC',
  MeritsByToIdStddevPopulationBlockIdAsc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  MeritsByToIdStddevPopulationBlockIdDesc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  MeritsByToIdStddevPopulationBlockNumberAsc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  MeritsByToIdStddevPopulationBlockNumberDesc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  MeritsByToIdStddevPopulationEventIndexAsc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  MeritsByToIdStddevPopulationEventIndexDesc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  MeritsByToIdStddevPopulationExtrinsicIndexAsc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  MeritsByToIdStddevPopulationExtrinsicIndexDesc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  MeritsByToIdStddevPopulationFromIdAsc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_FROM_ID_ASC',
  MeritsByToIdStddevPopulationFromIdDesc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_FROM_ID_DESC',
  MeritsByToIdStddevPopulationIdAsc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_ID_ASC',
  MeritsByToIdStddevPopulationIdDesc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_ID_DESC',
  MeritsByToIdStddevPopulationRemarkAsc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_REMARK_ASC',
  MeritsByToIdStddevPopulationRemarkDesc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_REMARK_DESC',
  MeritsByToIdStddevPopulationToIdAsc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_TO_ID_ASC',
  MeritsByToIdStddevPopulationToIdDesc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_TO_ID_DESC',
  MeritsByToIdStddevPopulationValueAsc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_VALUE_ASC',
  MeritsByToIdStddevPopulationValueDesc = 'MERITS_BY_TO_ID_STDDEV_POPULATION_VALUE_DESC',
  MeritsByToIdStddevSampleBlockIdAsc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  MeritsByToIdStddevSampleBlockIdDesc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  MeritsByToIdStddevSampleBlockNumberAsc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  MeritsByToIdStddevSampleBlockNumberDesc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  MeritsByToIdStddevSampleEventIndexAsc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  MeritsByToIdStddevSampleEventIndexDesc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  MeritsByToIdStddevSampleExtrinsicIndexAsc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  MeritsByToIdStddevSampleExtrinsicIndexDesc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  MeritsByToIdStddevSampleFromIdAsc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_FROM_ID_ASC',
  MeritsByToIdStddevSampleFromIdDesc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_FROM_ID_DESC',
  MeritsByToIdStddevSampleIdAsc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_ID_ASC',
  MeritsByToIdStddevSampleIdDesc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_ID_DESC',
  MeritsByToIdStddevSampleRemarkAsc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_REMARK_ASC',
  MeritsByToIdStddevSampleRemarkDesc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_REMARK_DESC',
  MeritsByToIdStddevSampleToIdAsc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_TO_ID_ASC',
  MeritsByToIdStddevSampleToIdDesc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_TO_ID_DESC',
  MeritsByToIdStddevSampleValueAsc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_VALUE_ASC',
  MeritsByToIdStddevSampleValueDesc = 'MERITS_BY_TO_ID_STDDEV_SAMPLE_VALUE_DESC',
  MeritsByToIdSumBlockIdAsc = 'MERITS_BY_TO_ID_SUM_BLOCK_ID_ASC',
  MeritsByToIdSumBlockIdDesc = 'MERITS_BY_TO_ID_SUM_BLOCK_ID_DESC',
  MeritsByToIdSumBlockNumberAsc = 'MERITS_BY_TO_ID_SUM_BLOCK_NUMBER_ASC',
  MeritsByToIdSumBlockNumberDesc = 'MERITS_BY_TO_ID_SUM_BLOCK_NUMBER_DESC',
  MeritsByToIdSumEventIndexAsc = 'MERITS_BY_TO_ID_SUM_EVENT_INDEX_ASC',
  MeritsByToIdSumEventIndexDesc = 'MERITS_BY_TO_ID_SUM_EVENT_INDEX_DESC',
  MeritsByToIdSumExtrinsicIndexAsc = 'MERITS_BY_TO_ID_SUM_EXTRINSIC_INDEX_ASC',
  MeritsByToIdSumExtrinsicIndexDesc = 'MERITS_BY_TO_ID_SUM_EXTRINSIC_INDEX_DESC',
  MeritsByToIdSumFromIdAsc = 'MERITS_BY_TO_ID_SUM_FROM_ID_ASC',
  MeritsByToIdSumFromIdDesc = 'MERITS_BY_TO_ID_SUM_FROM_ID_DESC',
  MeritsByToIdSumIdAsc = 'MERITS_BY_TO_ID_SUM_ID_ASC',
  MeritsByToIdSumIdDesc = 'MERITS_BY_TO_ID_SUM_ID_DESC',
  MeritsByToIdSumRemarkAsc = 'MERITS_BY_TO_ID_SUM_REMARK_ASC',
  MeritsByToIdSumRemarkDesc = 'MERITS_BY_TO_ID_SUM_REMARK_DESC',
  MeritsByToIdSumToIdAsc = 'MERITS_BY_TO_ID_SUM_TO_ID_ASC',
  MeritsByToIdSumToIdDesc = 'MERITS_BY_TO_ID_SUM_TO_ID_DESC',
  MeritsByToIdSumValueAsc = 'MERITS_BY_TO_ID_SUM_VALUE_ASC',
  MeritsByToIdSumValueDesc = 'MERITS_BY_TO_ID_SUM_VALUE_DESC',
  MeritsByToIdVariancePopulationBlockIdAsc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  MeritsByToIdVariancePopulationBlockIdDesc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  MeritsByToIdVariancePopulationBlockNumberAsc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  MeritsByToIdVariancePopulationBlockNumberDesc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  MeritsByToIdVariancePopulationEventIndexAsc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  MeritsByToIdVariancePopulationEventIndexDesc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  MeritsByToIdVariancePopulationExtrinsicIndexAsc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  MeritsByToIdVariancePopulationExtrinsicIndexDesc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  MeritsByToIdVariancePopulationFromIdAsc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_FROM_ID_ASC',
  MeritsByToIdVariancePopulationFromIdDesc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_FROM_ID_DESC',
  MeritsByToIdVariancePopulationIdAsc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_ID_ASC',
  MeritsByToIdVariancePopulationIdDesc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_ID_DESC',
  MeritsByToIdVariancePopulationRemarkAsc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_REMARK_ASC',
  MeritsByToIdVariancePopulationRemarkDesc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_REMARK_DESC',
  MeritsByToIdVariancePopulationToIdAsc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_TO_ID_ASC',
  MeritsByToIdVariancePopulationToIdDesc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_TO_ID_DESC',
  MeritsByToIdVariancePopulationValueAsc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_VALUE_ASC',
  MeritsByToIdVariancePopulationValueDesc = 'MERITS_BY_TO_ID_VARIANCE_POPULATION_VALUE_DESC',
  MeritsByToIdVarianceSampleBlockIdAsc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  MeritsByToIdVarianceSampleBlockIdDesc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  MeritsByToIdVarianceSampleBlockNumberAsc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  MeritsByToIdVarianceSampleBlockNumberDesc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  MeritsByToIdVarianceSampleEventIndexAsc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  MeritsByToIdVarianceSampleEventIndexDesc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  MeritsByToIdVarianceSampleExtrinsicIndexAsc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  MeritsByToIdVarianceSampleExtrinsicIndexDesc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  MeritsByToIdVarianceSampleFromIdAsc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_FROM_ID_ASC',
  MeritsByToIdVarianceSampleFromIdDesc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_FROM_ID_DESC',
  MeritsByToIdVarianceSampleIdAsc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_ID_ASC',
  MeritsByToIdVarianceSampleIdDesc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_ID_DESC',
  MeritsByToIdVarianceSampleRemarkAsc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_REMARK_ASC',
  MeritsByToIdVarianceSampleRemarkDesc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_REMARK_DESC',
  MeritsByToIdVarianceSampleToIdAsc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_TO_ID_ASC',
  MeritsByToIdVarianceSampleToIdDesc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_TO_ID_DESC',
  MeritsByToIdVarianceSampleValueAsc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_VALUE_ASC',
  MeritsByToIdVarianceSampleValueDesc = 'MERITS_BY_TO_ID_VARIANCE_SAMPLE_VALUE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SoraBurnedsBySenderIdAverageAssetAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_ASSET_ASC',
  SoraBurnedsBySenderIdAverageAssetDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_ASSET_DESC',
  SoraBurnedsBySenderIdAverageBlockIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_BLOCK_ID_ASC',
  SoraBurnedsBySenderIdAverageBlockIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_BLOCK_ID_DESC',
  SoraBurnedsBySenderIdAverageBlockNumberAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_BLOCK_NUMBER_ASC',
  SoraBurnedsBySenderIdAverageBlockNumberDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_BLOCK_NUMBER_DESC',
  SoraBurnedsBySenderIdAverageEventIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_EVENT_INDEX_ASC',
  SoraBurnedsBySenderIdAverageEventIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_EVENT_INDEX_DESC',
  SoraBurnedsBySenderIdAverageExtrinsicIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  SoraBurnedsBySenderIdAverageExtrinsicIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  SoraBurnedsBySenderIdAverageIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_ID_ASC',
  SoraBurnedsBySenderIdAverageIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_ID_DESC',
  SoraBurnedsBySenderIdAverageNetworkAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_NETWORK_ASC',
  SoraBurnedsBySenderIdAverageNetworkDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_NETWORK_DESC',
  SoraBurnedsBySenderIdAverageRecipientAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_RECIPIENT_ASC',
  SoraBurnedsBySenderIdAverageRecipientDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_RECIPIENT_DESC',
  SoraBurnedsBySenderIdAverageSenderIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_SENDER_ID_ASC',
  SoraBurnedsBySenderIdAverageSenderIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_SENDER_ID_DESC',
  SoraBurnedsBySenderIdAverageValueAsc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_VALUE_ASC',
  SoraBurnedsBySenderIdAverageValueDesc = 'SORA_BURNEDS_BY_SENDER_ID_AVERAGE_VALUE_DESC',
  SoraBurnedsBySenderIdCountAsc = 'SORA_BURNEDS_BY_SENDER_ID_COUNT_ASC',
  SoraBurnedsBySenderIdCountDesc = 'SORA_BURNEDS_BY_SENDER_ID_COUNT_DESC',
  SoraBurnedsBySenderIdDistinctCountAssetAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_ASSET_ASC',
  SoraBurnedsBySenderIdDistinctCountAssetDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_ASSET_DESC',
  SoraBurnedsBySenderIdDistinctCountBlockIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  SoraBurnedsBySenderIdDistinctCountBlockIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  SoraBurnedsBySenderIdDistinctCountBlockNumberAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  SoraBurnedsBySenderIdDistinctCountBlockNumberDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  SoraBurnedsBySenderIdDistinctCountEventIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  SoraBurnedsBySenderIdDistinctCountEventIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  SoraBurnedsBySenderIdDistinctCountExtrinsicIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  SoraBurnedsBySenderIdDistinctCountExtrinsicIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  SoraBurnedsBySenderIdDistinctCountIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_ID_ASC',
  SoraBurnedsBySenderIdDistinctCountIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_ID_DESC',
  SoraBurnedsBySenderIdDistinctCountNetworkAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_NETWORK_ASC',
  SoraBurnedsBySenderIdDistinctCountNetworkDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_NETWORK_DESC',
  SoraBurnedsBySenderIdDistinctCountRecipientAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_RECIPIENT_ASC',
  SoraBurnedsBySenderIdDistinctCountRecipientDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_RECIPIENT_DESC',
  SoraBurnedsBySenderIdDistinctCountSenderIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_SENDER_ID_ASC',
  SoraBurnedsBySenderIdDistinctCountSenderIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_SENDER_ID_DESC',
  SoraBurnedsBySenderIdDistinctCountValueAsc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_VALUE_ASC',
  SoraBurnedsBySenderIdDistinctCountValueDesc = 'SORA_BURNEDS_BY_SENDER_ID_DISTINCT_COUNT_VALUE_DESC',
  SoraBurnedsBySenderIdMaxAssetAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_ASSET_ASC',
  SoraBurnedsBySenderIdMaxAssetDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_ASSET_DESC',
  SoraBurnedsBySenderIdMaxBlockIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_BLOCK_ID_ASC',
  SoraBurnedsBySenderIdMaxBlockIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_BLOCK_ID_DESC',
  SoraBurnedsBySenderIdMaxBlockNumberAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_BLOCK_NUMBER_ASC',
  SoraBurnedsBySenderIdMaxBlockNumberDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_BLOCK_NUMBER_DESC',
  SoraBurnedsBySenderIdMaxEventIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_EVENT_INDEX_ASC',
  SoraBurnedsBySenderIdMaxEventIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_EVENT_INDEX_DESC',
  SoraBurnedsBySenderIdMaxExtrinsicIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_EXTRINSIC_INDEX_ASC',
  SoraBurnedsBySenderIdMaxExtrinsicIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_EXTRINSIC_INDEX_DESC',
  SoraBurnedsBySenderIdMaxIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_ID_ASC',
  SoraBurnedsBySenderIdMaxIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_ID_DESC',
  SoraBurnedsBySenderIdMaxNetworkAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_NETWORK_ASC',
  SoraBurnedsBySenderIdMaxNetworkDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_NETWORK_DESC',
  SoraBurnedsBySenderIdMaxRecipientAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_RECIPIENT_ASC',
  SoraBurnedsBySenderIdMaxRecipientDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_RECIPIENT_DESC',
  SoraBurnedsBySenderIdMaxSenderIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_SENDER_ID_ASC',
  SoraBurnedsBySenderIdMaxSenderIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_SENDER_ID_DESC',
  SoraBurnedsBySenderIdMaxValueAsc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_VALUE_ASC',
  SoraBurnedsBySenderIdMaxValueDesc = 'SORA_BURNEDS_BY_SENDER_ID_MAX_VALUE_DESC',
  SoraBurnedsBySenderIdMinAssetAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_ASSET_ASC',
  SoraBurnedsBySenderIdMinAssetDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_ASSET_DESC',
  SoraBurnedsBySenderIdMinBlockIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_BLOCK_ID_ASC',
  SoraBurnedsBySenderIdMinBlockIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_BLOCK_ID_DESC',
  SoraBurnedsBySenderIdMinBlockNumberAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_BLOCK_NUMBER_ASC',
  SoraBurnedsBySenderIdMinBlockNumberDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_BLOCK_NUMBER_DESC',
  SoraBurnedsBySenderIdMinEventIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_EVENT_INDEX_ASC',
  SoraBurnedsBySenderIdMinEventIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_EVENT_INDEX_DESC',
  SoraBurnedsBySenderIdMinExtrinsicIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_EXTRINSIC_INDEX_ASC',
  SoraBurnedsBySenderIdMinExtrinsicIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_EXTRINSIC_INDEX_DESC',
  SoraBurnedsBySenderIdMinIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_ID_ASC',
  SoraBurnedsBySenderIdMinIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_ID_DESC',
  SoraBurnedsBySenderIdMinNetworkAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_NETWORK_ASC',
  SoraBurnedsBySenderIdMinNetworkDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_NETWORK_DESC',
  SoraBurnedsBySenderIdMinRecipientAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_RECIPIENT_ASC',
  SoraBurnedsBySenderIdMinRecipientDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_RECIPIENT_DESC',
  SoraBurnedsBySenderIdMinSenderIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_SENDER_ID_ASC',
  SoraBurnedsBySenderIdMinSenderIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_SENDER_ID_DESC',
  SoraBurnedsBySenderIdMinValueAsc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_VALUE_ASC',
  SoraBurnedsBySenderIdMinValueDesc = 'SORA_BURNEDS_BY_SENDER_ID_MIN_VALUE_DESC',
  SoraBurnedsBySenderIdStddevPopulationAssetAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_ASSET_ASC',
  SoraBurnedsBySenderIdStddevPopulationAssetDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_ASSET_DESC',
  SoraBurnedsBySenderIdStddevPopulationBlockIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  SoraBurnedsBySenderIdStddevPopulationBlockIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  SoraBurnedsBySenderIdStddevPopulationBlockNumberAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  SoraBurnedsBySenderIdStddevPopulationBlockNumberDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  SoraBurnedsBySenderIdStddevPopulationEventIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  SoraBurnedsBySenderIdStddevPopulationEventIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  SoraBurnedsBySenderIdStddevPopulationExtrinsicIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  SoraBurnedsBySenderIdStddevPopulationExtrinsicIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  SoraBurnedsBySenderIdStddevPopulationIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_ID_ASC',
  SoraBurnedsBySenderIdStddevPopulationIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_ID_DESC',
  SoraBurnedsBySenderIdStddevPopulationNetworkAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_NETWORK_ASC',
  SoraBurnedsBySenderIdStddevPopulationNetworkDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_NETWORK_DESC',
  SoraBurnedsBySenderIdStddevPopulationRecipientAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_RECIPIENT_ASC',
  SoraBurnedsBySenderIdStddevPopulationRecipientDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_RECIPIENT_DESC',
  SoraBurnedsBySenderIdStddevPopulationSenderIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_SENDER_ID_ASC',
  SoraBurnedsBySenderIdStddevPopulationSenderIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_SENDER_ID_DESC',
  SoraBurnedsBySenderIdStddevPopulationValueAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_VALUE_ASC',
  SoraBurnedsBySenderIdStddevPopulationValueDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_POPULATION_VALUE_DESC',
  SoraBurnedsBySenderIdStddevSampleAssetAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_ASSET_ASC',
  SoraBurnedsBySenderIdStddevSampleAssetDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_ASSET_DESC',
  SoraBurnedsBySenderIdStddevSampleBlockIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  SoraBurnedsBySenderIdStddevSampleBlockIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  SoraBurnedsBySenderIdStddevSampleBlockNumberAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  SoraBurnedsBySenderIdStddevSampleBlockNumberDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  SoraBurnedsBySenderIdStddevSampleEventIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  SoraBurnedsBySenderIdStddevSampleEventIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  SoraBurnedsBySenderIdStddevSampleExtrinsicIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  SoraBurnedsBySenderIdStddevSampleExtrinsicIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  SoraBurnedsBySenderIdStddevSampleIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_ID_ASC',
  SoraBurnedsBySenderIdStddevSampleIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_ID_DESC',
  SoraBurnedsBySenderIdStddevSampleNetworkAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_NETWORK_ASC',
  SoraBurnedsBySenderIdStddevSampleNetworkDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_NETWORK_DESC',
  SoraBurnedsBySenderIdStddevSampleRecipientAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_RECIPIENT_ASC',
  SoraBurnedsBySenderIdStddevSampleRecipientDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_RECIPIENT_DESC',
  SoraBurnedsBySenderIdStddevSampleSenderIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_SENDER_ID_ASC',
  SoraBurnedsBySenderIdStddevSampleSenderIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_SENDER_ID_DESC',
  SoraBurnedsBySenderIdStddevSampleValueAsc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_VALUE_ASC',
  SoraBurnedsBySenderIdStddevSampleValueDesc = 'SORA_BURNEDS_BY_SENDER_ID_STDDEV_SAMPLE_VALUE_DESC',
  SoraBurnedsBySenderIdSumAssetAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_ASSET_ASC',
  SoraBurnedsBySenderIdSumAssetDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_ASSET_DESC',
  SoraBurnedsBySenderIdSumBlockIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_BLOCK_ID_ASC',
  SoraBurnedsBySenderIdSumBlockIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_BLOCK_ID_DESC',
  SoraBurnedsBySenderIdSumBlockNumberAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_BLOCK_NUMBER_ASC',
  SoraBurnedsBySenderIdSumBlockNumberDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_BLOCK_NUMBER_DESC',
  SoraBurnedsBySenderIdSumEventIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_EVENT_INDEX_ASC',
  SoraBurnedsBySenderIdSumEventIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_EVENT_INDEX_DESC',
  SoraBurnedsBySenderIdSumExtrinsicIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_EXTRINSIC_INDEX_ASC',
  SoraBurnedsBySenderIdSumExtrinsicIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_EXTRINSIC_INDEX_DESC',
  SoraBurnedsBySenderIdSumIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_ID_ASC',
  SoraBurnedsBySenderIdSumIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_ID_DESC',
  SoraBurnedsBySenderIdSumNetworkAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_NETWORK_ASC',
  SoraBurnedsBySenderIdSumNetworkDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_NETWORK_DESC',
  SoraBurnedsBySenderIdSumRecipientAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_RECIPIENT_ASC',
  SoraBurnedsBySenderIdSumRecipientDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_RECIPIENT_DESC',
  SoraBurnedsBySenderIdSumSenderIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_SENDER_ID_ASC',
  SoraBurnedsBySenderIdSumSenderIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_SENDER_ID_DESC',
  SoraBurnedsBySenderIdSumValueAsc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_VALUE_ASC',
  SoraBurnedsBySenderIdSumValueDesc = 'SORA_BURNEDS_BY_SENDER_ID_SUM_VALUE_DESC',
  SoraBurnedsBySenderIdVariancePopulationAssetAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_ASSET_ASC',
  SoraBurnedsBySenderIdVariancePopulationAssetDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_ASSET_DESC',
  SoraBurnedsBySenderIdVariancePopulationBlockIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  SoraBurnedsBySenderIdVariancePopulationBlockIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  SoraBurnedsBySenderIdVariancePopulationBlockNumberAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  SoraBurnedsBySenderIdVariancePopulationBlockNumberDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  SoraBurnedsBySenderIdVariancePopulationEventIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  SoraBurnedsBySenderIdVariancePopulationEventIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  SoraBurnedsBySenderIdVariancePopulationExtrinsicIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  SoraBurnedsBySenderIdVariancePopulationExtrinsicIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  SoraBurnedsBySenderIdVariancePopulationIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_ID_ASC',
  SoraBurnedsBySenderIdVariancePopulationIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_ID_DESC',
  SoraBurnedsBySenderIdVariancePopulationNetworkAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_NETWORK_ASC',
  SoraBurnedsBySenderIdVariancePopulationNetworkDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_NETWORK_DESC',
  SoraBurnedsBySenderIdVariancePopulationRecipientAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_RECIPIENT_ASC',
  SoraBurnedsBySenderIdVariancePopulationRecipientDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_RECIPIENT_DESC',
  SoraBurnedsBySenderIdVariancePopulationSenderIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_SENDER_ID_ASC',
  SoraBurnedsBySenderIdVariancePopulationSenderIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_SENDER_ID_DESC',
  SoraBurnedsBySenderIdVariancePopulationValueAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_VALUE_ASC',
  SoraBurnedsBySenderIdVariancePopulationValueDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_POPULATION_VALUE_DESC',
  SoraBurnedsBySenderIdVarianceSampleAssetAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_ASSET_ASC',
  SoraBurnedsBySenderIdVarianceSampleAssetDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_ASSET_DESC',
  SoraBurnedsBySenderIdVarianceSampleBlockIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  SoraBurnedsBySenderIdVarianceSampleBlockIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  SoraBurnedsBySenderIdVarianceSampleBlockNumberAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  SoraBurnedsBySenderIdVarianceSampleBlockNumberDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  SoraBurnedsBySenderIdVarianceSampleEventIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  SoraBurnedsBySenderIdVarianceSampleEventIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  SoraBurnedsBySenderIdVarianceSampleExtrinsicIndexAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  SoraBurnedsBySenderIdVarianceSampleExtrinsicIndexDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  SoraBurnedsBySenderIdVarianceSampleIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_ID_ASC',
  SoraBurnedsBySenderIdVarianceSampleIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_ID_DESC',
  SoraBurnedsBySenderIdVarianceSampleNetworkAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_NETWORK_ASC',
  SoraBurnedsBySenderIdVarianceSampleNetworkDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_NETWORK_DESC',
  SoraBurnedsBySenderIdVarianceSampleRecipientAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_RECIPIENT_ASC',
  SoraBurnedsBySenderIdVarianceSampleRecipientDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_RECIPIENT_DESC',
  SoraBurnedsBySenderIdVarianceSampleSenderIdAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_SENDER_ID_ASC',
  SoraBurnedsBySenderIdVarianceSampleSenderIdDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_SENDER_ID_DESC',
  SoraBurnedsBySenderIdVarianceSampleValueAsc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_VALUE_ASC',
  SoraBurnedsBySenderIdVarianceSampleValueDesc = 'SORA_BURNEDS_BY_SENDER_ID_VARIANCE_SAMPLE_VALUE_DESC',
  SoraMintedsByRecipientIdAverageAssetAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_ASSET_ASC',
  SoraMintedsByRecipientIdAverageAssetDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_ASSET_DESC',
  SoraMintedsByRecipientIdAverageBlockIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_BLOCK_ID_ASC',
  SoraMintedsByRecipientIdAverageBlockIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_BLOCK_ID_DESC',
  SoraMintedsByRecipientIdAverageBlockNumberAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_BLOCK_NUMBER_ASC',
  SoraMintedsByRecipientIdAverageBlockNumberDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_BLOCK_NUMBER_DESC',
  SoraMintedsByRecipientIdAverageEventIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_EVENT_INDEX_ASC',
  SoraMintedsByRecipientIdAverageEventIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_EVENT_INDEX_DESC',
  SoraMintedsByRecipientIdAverageExtrinsicIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  SoraMintedsByRecipientIdAverageExtrinsicIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  SoraMintedsByRecipientIdAverageIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_ID_ASC',
  SoraMintedsByRecipientIdAverageIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_ID_DESC',
  SoraMintedsByRecipientIdAverageNetworkAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_NETWORK_ASC',
  SoraMintedsByRecipientIdAverageNetworkDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_NETWORK_DESC',
  SoraMintedsByRecipientIdAverageRecipientIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_RECIPIENT_ID_ASC',
  SoraMintedsByRecipientIdAverageRecipientIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_RECIPIENT_ID_DESC',
  SoraMintedsByRecipientIdAverageSenderAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_SENDER_ASC',
  SoraMintedsByRecipientIdAverageSenderDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_SENDER_DESC',
  SoraMintedsByRecipientIdAverageValueAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_VALUE_ASC',
  SoraMintedsByRecipientIdAverageValueDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_AVERAGE_VALUE_DESC',
  SoraMintedsByRecipientIdCountAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_COUNT_ASC',
  SoraMintedsByRecipientIdCountDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_COUNT_DESC',
  SoraMintedsByRecipientIdDistinctCountAssetAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_ASSET_ASC',
  SoraMintedsByRecipientIdDistinctCountAssetDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_ASSET_DESC',
  SoraMintedsByRecipientIdDistinctCountBlockIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  SoraMintedsByRecipientIdDistinctCountBlockIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  SoraMintedsByRecipientIdDistinctCountBlockNumberAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  SoraMintedsByRecipientIdDistinctCountBlockNumberDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  SoraMintedsByRecipientIdDistinctCountEventIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  SoraMintedsByRecipientIdDistinctCountEventIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  SoraMintedsByRecipientIdDistinctCountExtrinsicIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  SoraMintedsByRecipientIdDistinctCountExtrinsicIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  SoraMintedsByRecipientIdDistinctCountIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_ID_ASC',
  SoraMintedsByRecipientIdDistinctCountIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_ID_DESC',
  SoraMintedsByRecipientIdDistinctCountNetworkAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_NETWORK_ASC',
  SoraMintedsByRecipientIdDistinctCountNetworkDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_NETWORK_DESC',
  SoraMintedsByRecipientIdDistinctCountRecipientIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_RECIPIENT_ID_ASC',
  SoraMintedsByRecipientIdDistinctCountRecipientIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_RECIPIENT_ID_DESC',
  SoraMintedsByRecipientIdDistinctCountSenderAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_SENDER_ASC',
  SoraMintedsByRecipientIdDistinctCountSenderDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_SENDER_DESC',
  SoraMintedsByRecipientIdDistinctCountValueAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_VALUE_ASC',
  SoraMintedsByRecipientIdDistinctCountValueDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_DISTINCT_COUNT_VALUE_DESC',
  SoraMintedsByRecipientIdMaxAssetAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_ASSET_ASC',
  SoraMintedsByRecipientIdMaxAssetDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_ASSET_DESC',
  SoraMintedsByRecipientIdMaxBlockIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_BLOCK_ID_ASC',
  SoraMintedsByRecipientIdMaxBlockIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_BLOCK_ID_DESC',
  SoraMintedsByRecipientIdMaxBlockNumberAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_BLOCK_NUMBER_ASC',
  SoraMintedsByRecipientIdMaxBlockNumberDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_BLOCK_NUMBER_DESC',
  SoraMintedsByRecipientIdMaxEventIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_EVENT_INDEX_ASC',
  SoraMintedsByRecipientIdMaxEventIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_EVENT_INDEX_DESC',
  SoraMintedsByRecipientIdMaxExtrinsicIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_EXTRINSIC_INDEX_ASC',
  SoraMintedsByRecipientIdMaxExtrinsicIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_EXTRINSIC_INDEX_DESC',
  SoraMintedsByRecipientIdMaxIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_ID_ASC',
  SoraMintedsByRecipientIdMaxIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_ID_DESC',
  SoraMintedsByRecipientIdMaxNetworkAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_NETWORK_ASC',
  SoraMintedsByRecipientIdMaxNetworkDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_NETWORK_DESC',
  SoraMintedsByRecipientIdMaxRecipientIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_RECIPIENT_ID_ASC',
  SoraMintedsByRecipientIdMaxRecipientIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_RECIPIENT_ID_DESC',
  SoraMintedsByRecipientIdMaxSenderAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_SENDER_ASC',
  SoraMintedsByRecipientIdMaxSenderDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_SENDER_DESC',
  SoraMintedsByRecipientIdMaxValueAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_VALUE_ASC',
  SoraMintedsByRecipientIdMaxValueDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MAX_VALUE_DESC',
  SoraMintedsByRecipientIdMinAssetAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_ASSET_ASC',
  SoraMintedsByRecipientIdMinAssetDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_ASSET_DESC',
  SoraMintedsByRecipientIdMinBlockIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_BLOCK_ID_ASC',
  SoraMintedsByRecipientIdMinBlockIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_BLOCK_ID_DESC',
  SoraMintedsByRecipientIdMinBlockNumberAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_BLOCK_NUMBER_ASC',
  SoraMintedsByRecipientIdMinBlockNumberDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_BLOCK_NUMBER_DESC',
  SoraMintedsByRecipientIdMinEventIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_EVENT_INDEX_ASC',
  SoraMintedsByRecipientIdMinEventIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_EVENT_INDEX_DESC',
  SoraMintedsByRecipientIdMinExtrinsicIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_EXTRINSIC_INDEX_ASC',
  SoraMintedsByRecipientIdMinExtrinsicIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_EXTRINSIC_INDEX_DESC',
  SoraMintedsByRecipientIdMinIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_ID_ASC',
  SoraMintedsByRecipientIdMinIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_ID_DESC',
  SoraMintedsByRecipientIdMinNetworkAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_NETWORK_ASC',
  SoraMintedsByRecipientIdMinNetworkDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_NETWORK_DESC',
  SoraMintedsByRecipientIdMinRecipientIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_RECIPIENT_ID_ASC',
  SoraMintedsByRecipientIdMinRecipientIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_RECIPIENT_ID_DESC',
  SoraMintedsByRecipientIdMinSenderAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_SENDER_ASC',
  SoraMintedsByRecipientIdMinSenderDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_SENDER_DESC',
  SoraMintedsByRecipientIdMinValueAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_VALUE_ASC',
  SoraMintedsByRecipientIdMinValueDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_MIN_VALUE_DESC',
  SoraMintedsByRecipientIdStddevPopulationAssetAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_ASSET_ASC',
  SoraMintedsByRecipientIdStddevPopulationAssetDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_ASSET_DESC',
  SoraMintedsByRecipientIdStddevPopulationBlockIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  SoraMintedsByRecipientIdStddevPopulationBlockIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  SoraMintedsByRecipientIdStddevPopulationBlockNumberAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  SoraMintedsByRecipientIdStddevPopulationBlockNumberDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  SoraMintedsByRecipientIdStddevPopulationEventIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  SoraMintedsByRecipientIdStddevPopulationEventIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  SoraMintedsByRecipientIdStddevPopulationExtrinsicIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  SoraMintedsByRecipientIdStddevPopulationExtrinsicIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  SoraMintedsByRecipientIdStddevPopulationIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_ID_ASC',
  SoraMintedsByRecipientIdStddevPopulationIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_ID_DESC',
  SoraMintedsByRecipientIdStddevPopulationNetworkAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_NETWORK_ASC',
  SoraMintedsByRecipientIdStddevPopulationNetworkDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_NETWORK_DESC',
  SoraMintedsByRecipientIdStddevPopulationRecipientIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_RECIPIENT_ID_ASC',
  SoraMintedsByRecipientIdStddevPopulationRecipientIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_RECIPIENT_ID_DESC',
  SoraMintedsByRecipientIdStddevPopulationSenderAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_SENDER_ASC',
  SoraMintedsByRecipientIdStddevPopulationSenderDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_SENDER_DESC',
  SoraMintedsByRecipientIdStddevPopulationValueAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_VALUE_ASC',
  SoraMintedsByRecipientIdStddevPopulationValueDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_POPULATION_VALUE_DESC',
  SoraMintedsByRecipientIdStddevSampleAssetAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_ASSET_ASC',
  SoraMintedsByRecipientIdStddevSampleAssetDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_ASSET_DESC',
  SoraMintedsByRecipientIdStddevSampleBlockIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  SoraMintedsByRecipientIdStddevSampleBlockIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  SoraMintedsByRecipientIdStddevSampleBlockNumberAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  SoraMintedsByRecipientIdStddevSampleBlockNumberDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  SoraMintedsByRecipientIdStddevSampleEventIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  SoraMintedsByRecipientIdStddevSampleEventIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  SoraMintedsByRecipientIdStddevSampleExtrinsicIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  SoraMintedsByRecipientIdStddevSampleExtrinsicIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  SoraMintedsByRecipientIdStddevSampleIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_ID_ASC',
  SoraMintedsByRecipientIdStddevSampleIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_ID_DESC',
  SoraMintedsByRecipientIdStddevSampleNetworkAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_NETWORK_ASC',
  SoraMintedsByRecipientIdStddevSampleNetworkDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_NETWORK_DESC',
  SoraMintedsByRecipientIdStddevSampleRecipientIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_RECIPIENT_ID_ASC',
  SoraMintedsByRecipientIdStddevSampleRecipientIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_RECIPIENT_ID_DESC',
  SoraMintedsByRecipientIdStddevSampleSenderAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_SENDER_ASC',
  SoraMintedsByRecipientIdStddevSampleSenderDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_SENDER_DESC',
  SoraMintedsByRecipientIdStddevSampleValueAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_VALUE_ASC',
  SoraMintedsByRecipientIdStddevSampleValueDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_STDDEV_SAMPLE_VALUE_DESC',
  SoraMintedsByRecipientIdSumAssetAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_ASSET_ASC',
  SoraMintedsByRecipientIdSumAssetDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_ASSET_DESC',
  SoraMintedsByRecipientIdSumBlockIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_BLOCK_ID_ASC',
  SoraMintedsByRecipientIdSumBlockIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_BLOCK_ID_DESC',
  SoraMintedsByRecipientIdSumBlockNumberAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_BLOCK_NUMBER_ASC',
  SoraMintedsByRecipientIdSumBlockNumberDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_BLOCK_NUMBER_DESC',
  SoraMintedsByRecipientIdSumEventIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_EVENT_INDEX_ASC',
  SoraMintedsByRecipientIdSumEventIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_EVENT_INDEX_DESC',
  SoraMintedsByRecipientIdSumExtrinsicIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_EXTRINSIC_INDEX_ASC',
  SoraMintedsByRecipientIdSumExtrinsicIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_EXTRINSIC_INDEX_DESC',
  SoraMintedsByRecipientIdSumIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_ID_ASC',
  SoraMintedsByRecipientIdSumIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_ID_DESC',
  SoraMintedsByRecipientIdSumNetworkAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_NETWORK_ASC',
  SoraMintedsByRecipientIdSumNetworkDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_NETWORK_DESC',
  SoraMintedsByRecipientIdSumRecipientIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_RECIPIENT_ID_ASC',
  SoraMintedsByRecipientIdSumRecipientIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_RECIPIENT_ID_DESC',
  SoraMintedsByRecipientIdSumSenderAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_SENDER_ASC',
  SoraMintedsByRecipientIdSumSenderDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_SENDER_DESC',
  SoraMintedsByRecipientIdSumValueAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_VALUE_ASC',
  SoraMintedsByRecipientIdSumValueDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_SUM_VALUE_DESC',
  SoraMintedsByRecipientIdVariancePopulationAssetAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_ASSET_ASC',
  SoraMintedsByRecipientIdVariancePopulationAssetDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_ASSET_DESC',
  SoraMintedsByRecipientIdVariancePopulationBlockIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  SoraMintedsByRecipientIdVariancePopulationBlockIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  SoraMintedsByRecipientIdVariancePopulationBlockNumberAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  SoraMintedsByRecipientIdVariancePopulationBlockNumberDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  SoraMintedsByRecipientIdVariancePopulationEventIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  SoraMintedsByRecipientIdVariancePopulationEventIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  SoraMintedsByRecipientIdVariancePopulationExtrinsicIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  SoraMintedsByRecipientIdVariancePopulationExtrinsicIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  SoraMintedsByRecipientIdVariancePopulationIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_ID_ASC',
  SoraMintedsByRecipientIdVariancePopulationIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_ID_DESC',
  SoraMintedsByRecipientIdVariancePopulationNetworkAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_NETWORK_ASC',
  SoraMintedsByRecipientIdVariancePopulationNetworkDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_NETWORK_DESC',
  SoraMintedsByRecipientIdVariancePopulationRecipientIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_RECIPIENT_ID_ASC',
  SoraMintedsByRecipientIdVariancePopulationRecipientIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_RECIPIENT_ID_DESC',
  SoraMintedsByRecipientIdVariancePopulationSenderAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_SENDER_ASC',
  SoraMintedsByRecipientIdVariancePopulationSenderDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_SENDER_DESC',
  SoraMintedsByRecipientIdVariancePopulationValueAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_VALUE_ASC',
  SoraMintedsByRecipientIdVariancePopulationValueDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_POPULATION_VALUE_DESC',
  SoraMintedsByRecipientIdVarianceSampleAssetAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_ASSET_ASC',
  SoraMintedsByRecipientIdVarianceSampleAssetDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_ASSET_DESC',
  SoraMintedsByRecipientIdVarianceSampleBlockIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  SoraMintedsByRecipientIdVarianceSampleBlockIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  SoraMintedsByRecipientIdVarianceSampleBlockNumberAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  SoraMintedsByRecipientIdVarianceSampleBlockNumberDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  SoraMintedsByRecipientIdVarianceSampleEventIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  SoraMintedsByRecipientIdVarianceSampleEventIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  SoraMintedsByRecipientIdVarianceSampleExtrinsicIndexAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  SoraMintedsByRecipientIdVarianceSampleExtrinsicIndexDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  SoraMintedsByRecipientIdVarianceSampleIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_ID_ASC',
  SoraMintedsByRecipientIdVarianceSampleIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_ID_DESC',
  SoraMintedsByRecipientIdVarianceSampleNetworkAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_NETWORK_ASC',
  SoraMintedsByRecipientIdVarianceSampleNetworkDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_NETWORK_DESC',
  SoraMintedsByRecipientIdVarianceSampleRecipientIdAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_RECIPIENT_ID_ASC',
  SoraMintedsByRecipientIdVarianceSampleRecipientIdDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_RECIPIENT_ID_DESC',
  SoraMintedsByRecipientIdVarianceSampleSenderAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_SENDER_ASC',
  SoraMintedsByRecipientIdVarianceSampleSenderDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_SENDER_DESC',
  SoraMintedsByRecipientIdVarianceSampleValueAsc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_VALUE_ASC',
  SoraMintedsByRecipientIdVarianceSampleValueDesc = 'SORA_MINTEDS_BY_RECIPIENT_ID_VARIANCE_SAMPLE_VALUE_DESC',
  StakingsByUserIdAverageBlockIdAsc = 'STAKINGS_BY_USER_ID_AVERAGE_BLOCK_ID_ASC',
  StakingsByUserIdAverageBlockIdDesc = 'STAKINGS_BY_USER_ID_AVERAGE_BLOCK_ID_DESC',
  StakingsByUserIdAverageBlockNumberAsc = 'STAKINGS_BY_USER_ID_AVERAGE_BLOCK_NUMBER_ASC',
  StakingsByUserIdAverageBlockNumberDesc = 'STAKINGS_BY_USER_ID_AVERAGE_BLOCK_NUMBER_DESC',
  StakingsByUserIdAverageEventIndexAsc = 'STAKINGS_BY_USER_ID_AVERAGE_EVENT_INDEX_ASC',
  StakingsByUserIdAverageEventIndexDesc = 'STAKINGS_BY_USER_ID_AVERAGE_EVENT_INDEX_DESC',
  StakingsByUserIdAverageExtrinsicIndexAsc = 'STAKINGS_BY_USER_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  StakingsByUserIdAverageExtrinsicIndexDesc = 'STAKINGS_BY_USER_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  StakingsByUserIdAverageIdAsc = 'STAKINGS_BY_USER_ID_AVERAGE_ID_ASC',
  StakingsByUserIdAverageIdDesc = 'STAKINGS_BY_USER_ID_AVERAGE_ID_DESC',
  StakingsByUserIdAverageIsPositiveAsc = 'STAKINGS_BY_USER_ID_AVERAGE_IS_POSITIVE_ASC',
  StakingsByUserIdAverageIsPositiveDesc = 'STAKINGS_BY_USER_ID_AVERAGE_IS_POSITIVE_DESC',
  StakingsByUserIdAverageMethodAsc = 'STAKINGS_BY_USER_ID_AVERAGE_METHOD_ASC',
  StakingsByUserIdAverageMethodDesc = 'STAKINGS_BY_USER_ID_AVERAGE_METHOD_DESC',
  StakingsByUserIdAverageUserIdAsc = 'STAKINGS_BY_USER_ID_AVERAGE_USER_ID_ASC',
  StakingsByUserIdAverageUserIdDesc = 'STAKINGS_BY_USER_ID_AVERAGE_USER_ID_DESC',
  StakingsByUserIdAverageValueAsc = 'STAKINGS_BY_USER_ID_AVERAGE_VALUE_ASC',
  StakingsByUserIdAverageValueDesc = 'STAKINGS_BY_USER_ID_AVERAGE_VALUE_DESC',
  StakingsByUserIdCountAsc = 'STAKINGS_BY_USER_ID_COUNT_ASC',
  StakingsByUserIdCountDesc = 'STAKINGS_BY_USER_ID_COUNT_DESC',
  StakingsByUserIdDistinctCountBlockIdAsc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  StakingsByUserIdDistinctCountBlockIdDesc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  StakingsByUserIdDistinctCountBlockNumberAsc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  StakingsByUserIdDistinctCountBlockNumberDesc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  StakingsByUserIdDistinctCountEventIndexAsc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  StakingsByUserIdDistinctCountEventIndexDesc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  StakingsByUserIdDistinctCountExtrinsicIndexAsc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  StakingsByUserIdDistinctCountExtrinsicIndexDesc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  StakingsByUserIdDistinctCountIdAsc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_ID_ASC',
  StakingsByUserIdDistinctCountIdDesc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_ID_DESC',
  StakingsByUserIdDistinctCountIsPositiveAsc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_IS_POSITIVE_ASC',
  StakingsByUserIdDistinctCountIsPositiveDesc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_IS_POSITIVE_DESC',
  StakingsByUserIdDistinctCountMethodAsc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_METHOD_ASC',
  StakingsByUserIdDistinctCountMethodDesc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_METHOD_DESC',
  StakingsByUserIdDistinctCountUserIdAsc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_USER_ID_ASC',
  StakingsByUserIdDistinctCountUserIdDesc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_USER_ID_DESC',
  StakingsByUserIdDistinctCountValueAsc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_VALUE_ASC',
  StakingsByUserIdDistinctCountValueDesc = 'STAKINGS_BY_USER_ID_DISTINCT_COUNT_VALUE_DESC',
  StakingsByUserIdMaxBlockIdAsc = 'STAKINGS_BY_USER_ID_MAX_BLOCK_ID_ASC',
  StakingsByUserIdMaxBlockIdDesc = 'STAKINGS_BY_USER_ID_MAX_BLOCK_ID_DESC',
  StakingsByUserIdMaxBlockNumberAsc = 'STAKINGS_BY_USER_ID_MAX_BLOCK_NUMBER_ASC',
  StakingsByUserIdMaxBlockNumberDesc = 'STAKINGS_BY_USER_ID_MAX_BLOCK_NUMBER_DESC',
  StakingsByUserIdMaxEventIndexAsc = 'STAKINGS_BY_USER_ID_MAX_EVENT_INDEX_ASC',
  StakingsByUserIdMaxEventIndexDesc = 'STAKINGS_BY_USER_ID_MAX_EVENT_INDEX_DESC',
  StakingsByUserIdMaxExtrinsicIndexAsc = 'STAKINGS_BY_USER_ID_MAX_EXTRINSIC_INDEX_ASC',
  StakingsByUserIdMaxExtrinsicIndexDesc = 'STAKINGS_BY_USER_ID_MAX_EXTRINSIC_INDEX_DESC',
  StakingsByUserIdMaxIdAsc = 'STAKINGS_BY_USER_ID_MAX_ID_ASC',
  StakingsByUserIdMaxIdDesc = 'STAKINGS_BY_USER_ID_MAX_ID_DESC',
  StakingsByUserIdMaxIsPositiveAsc = 'STAKINGS_BY_USER_ID_MAX_IS_POSITIVE_ASC',
  StakingsByUserIdMaxIsPositiveDesc = 'STAKINGS_BY_USER_ID_MAX_IS_POSITIVE_DESC',
  StakingsByUserIdMaxMethodAsc = 'STAKINGS_BY_USER_ID_MAX_METHOD_ASC',
  StakingsByUserIdMaxMethodDesc = 'STAKINGS_BY_USER_ID_MAX_METHOD_DESC',
  StakingsByUserIdMaxUserIdAsc = 'STAKINGS_BY_USER_ID_MAX_USER_ID_ASC',
  StakingsByUserIdMaxUserIdDesc = 'STAKINGS_BY_USER_ID_MAX_USER_ID_DESC',
  StakingsByUserIdMaxValueAsc = 'STAKINGS_BY_USER_ID_MAX_VALUE_ASC',
  StakingsByUserIdMaxValueDesc = 'STAKINGS_BY_USER_ID_MAX_VALUE_DESC',
  StakingsByUserIdMinBlockIdAsc = 'STAKINGS_BY_USER_ID_MIN_BLOCK_ID_ASC',
  StakingsByUserIdMinBlockIdDesc = 'STAKINGS_BY_USER_ID_MIN_BLOCK_ID_DESC',
  StakingsByUserIdMinBlockNumberAsc = 'STAKINGS_BY_USER_ID_MIN_BLOCK_NUMBER_ASC',
  StakingsByUserIdMinBlockNumberDesc = 'STAKINGS_BY_USER_ID_MIN_BLOCK_NUMBER_DESC',
  StakingsByUserIdMinEventIndexAsc = 'STAKINGS_BY_USER_ID_MIN_EVENT_INDEX_ASC',
  StakingsByUserIdMinEventIndexDesc = 'STAKINGS_BY_USER_ID_MIN_EVENT_INDEX_DESC',
  StakingsByUserIdMinExtrinsicIndexAsc = 'STAKINGS_BY_USER_ID_MIN_EXTRINSIC_INDEX_ASC',
  StakingsByUserIdMinExtrinsicIndexDesc = 'STAKINGS_BY_USER_ID_MIN_EXTRINSIC_INDEX_DESC',
  StakingsByUserIdMinIdAsc = 'STAKINGS_BY_USER_ID_MIN_ID_ASC',
  StakingsByUserIdMinIdDesc = 'STAKINGS_BY_USER_ID_MIN_ID_DESC',
  StakingsByUserIdMinIsPositiveAsc = 'STAKINGS_BY_USER_ID_MIN_IS_POSITIVE_ASC',
  StakingsByUserIdMinIsPositiveDesc = 'STAKINGS_BY_USER_ID_MIN_IS_POSITIVE_DESC',
  StakingsByUserIdMinMethodAsc = 'STAKINGS_BY_USER_ID_MIN_METHOD_ASC',
  StakingsByUserIdMinMethodDesc = 'STAKINGS_BY_USER_ID_MIN_METHOD_DESC',
  StakingsByUserIdMinUserIdAsc = 'STAKINGS_BY_USER_ID_MIN_USER_ID_ASC',
  StakingsByUserIdMinUserIdDesc = 'STAKINGS_BY_USER_ID_MIN_USER_ID_DESC',
  StakingsByUserIdMinValueAsc = 'STAKINGS_BY_USER_ID_MIN_VALUE_ASC',
  StakingsByUserIdMinValueDesc = 'STAKINGS_BY_USER_ID_MIN_VALUE_DESC',
  StakingsByUserIdStddevPopulationBlockIdAsc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  StakingsByUserIdStddevPopulationBlockIdDesc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  StakingsByUserIdStddevPopulationBlockNumberAsc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  StakingsByUserIdStddevPopulationBlockNumberDesc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  StakingsByUserIdStddevPopulationEventIndexAsc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  StakingsByUserIdStddevPopulationEventIndexDesc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  StakingsByUserIdStddevPopulationExtrinsicIndexAsc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  StakingsByUserIdStddevPopulationExtrinsicIndexDesc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  StakingsByUserIdStddevPopulationIdAsc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_ID_ASC',
  StakingsByUserIdStddevPopulationIdDesc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_ID_DESC',
  StakingsByUserIdStddevPopulationIsPositiveAsc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_IS_POSITIVE_ASC',
  StakingsByUserIdStddevPopulationIsPositiveDesc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_IS_POSITIVE_DESC',
  StakingsByUserIdStddevPopulationMethodAsc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_METHOD_ASC',
  StakingsByUserIdStddevPopulationMethodDesc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_METHOD_DESC',
  StakingsByUserIdStddevPopulationUserIdAsc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_USER_ID_ASC',
  StakingsByUserIdStddevPopulationUserIdDesc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_USER_ID_DESC',
  StakingsByUserIdStddevPopulationValueAsc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_VALUE_ASC',
  StakingsByUserIdStddevPopulationValueDesc = 'STAKINGS_BY_USER_ID_STDDEV_POPULATION_VALUE_DESC',
  StakingsByUserIdStddevSampleBlockIdAsc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  StakingsByUserIdStddevSampleBlockIdDesc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  StakingsByUserIdStddevSampleBlockNumberAsc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  StakingsByUserIdStddevSampleBlockNumberDesc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  StakingsByUserIdStddevSampleEventIndexAsc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  StakingsByUserIdStddevSampleEventIndexDesc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  StakingsByUserIdStddevSampleExtrinsicIndexAsc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  StakingsByUserIdStddevSampleExtrinsicIndexDesc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  StakingsByUserIdStddevSampleIdAsc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_ID_ASC',
  StakingsByUserIdStddevSampleIdDesc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_ID_DESC',
  StakingsByUserIdStddevSampleIsPositiveAsc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_IS_POSITIVE_ASC',
  StakingsByUserIdStddevSampleIsPositiveDesc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_IS_POSITIVE_DESC',
  StakingsByUserIdStddevSampleMethodAsc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_METHOD_ASC',
  StakingsByUserIdStddevSampleMethodDesc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_METHOD_DESC',
  StakingsByUserIdStddevSampleUserIdAsc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_ASC',
  StakingsByUserIdStddevSampleUserIdDesc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_USER_ID_DESC',
  StakingsByUserIdStddevSampleValueAsc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_VALUE_ASC',
  StakingsByUserIdStddevSampleValueDesc = 'STAKINGS_BY_USER_ID_STDDEV_SAMPLE_VALUE_DESC',
  StakingsByUserIdSumBlockIdAsc = 'STAKINGS_BY_USER_ID_SUM_BLOCK_ID_ASC',
  StakingsByUserIdSumBlockIdDesc = 'STAKINGS_BY_USER_ID_SUM_BLOCK_ID_DESC',
  StakingsByUserIdSumBlockNumberAsc = 'STAKINGS_BY_USER_ID_SUM_BLOCK_NUMBER_ASC',
  StakingsByUserIdSumBlockNumberDesc = 'STAKINGS_BY_USER_ID_SUM_BLOCK_NUMBER_DESC',
  StakingsByUserIdSumEventIndexAsc = 'STAKINGS_BY_USER_ID_SUM_EVENT_INDEX_ASC',
  StakingsByUserIdSumEventIndexDesc = 'STAKINGS_BY_USER_ID_SUM_EVENT_INDEX_DESC',
  StakingsByUserIdSumExtrinsicIndexAsc = 'STAKINGS_BY_USER_ID_SUM_EXTRINSIC_INDEX_ASC',
  StakingsByUserIdSumExtrinsicIndexDesc = 'STAKINGS_BY_USER_ID_SUM_EXTRINSIC_INDEX_DESC',
  StakingsByUserIdSumIdAsc = 'STAKINGS_BY_USER_ID_SUM_ID_ASC',
  StakingsByUserIdSumIdDesc = 'STAKINGS_BY_USER_ID_SUM_ID_DESC',
  StakingsByUserIdSumIsPositiveAsc = 'STAKINGS_BY_USER_ID_SUM_IS_POSITIVE_ASC',
  StakingsByUserIdSumIsPositiveDesc = 'STAKINGS_BY_USER_ID_SUM_IS_POSITIVE_DESC',
  StakingsByUserIdSumMethodAsc = 'STAKINGS_BY_USER_ID_SUM_METHOD_ASC',
  StakingsByUserIdSumMethodDesc = 'STAKINGS_BY_USER_ID_SUM_METHOD_DESC',
  StakingsByUserIdSumUserIdAsc = 'STAKINGS_BY_USER_ID_SUM_USER_ID_ASC',
  StakingsByUserIdSumUserIdDesc = 'STAKINGS_BY_USER_ID_SUM_USER_ID_DESC',
  StakingsByUserIdSumValueAsc = 'STAKINGS_BY_USER_ID_SUM_VALUE_ASC',
  StakingsByUserIdSumValueDesc = 'STAKINGS_BY_USER_ID_SUM_VALUE_DESC',
  StakingsByUserIdVariancePopulationBlockIdAsc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  StakingsByUserIdVariancePopulationBlockIdDesc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  StakingsByUserIdVariancePopulationBlockNumberAsc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  StakingsByUserIdVariancePopulationBlockNumberDesc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  StakingsByUserIdVariancePopulationEventIndexAsc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  StakingsByUserIdVariancePopulationEventIndexDesc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  StakingsByUserIdVariancePopulationExtrinsicIndexAsc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  StakingsByUserIdVariancePopulationExtrinsicIndexDesc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  StakingsByUserIdVariancePopulationIdAsc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_ID_ASC',
  StakingsByUserIdVariancePopulationIdDesc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_ID_DESC',
  StakingsByUserIdVariancePopulationIsPositiveAsc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_IS_POSITIVE_ASC',
  StakingsByUserIdVariancePopulationIsPositiveDesc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_IS_POSITIVE_DESC',
  StakingsByUserIdVariancePopulationMethodAsc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_METHOD_ASC',
  StakingsByUserIdVariancePopulationMethodDesc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_METHOD_DESC',
  StakingsByUserIdVariancePopulationUserIdAsc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_ASC',
  StakingsByUserIdVariancePopulationUserIdDesc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_USER_ID_DESC',
  StakingsByUserIdVariancePopulationValueAsc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_VALUE_ASC',
  StakingsByUserIdVariancePopulationValueDesc = 'STAKINGS_BY_USER_ID_VARIANCE_POPULATION_VALUE_DESC',
  StakingsByUserIdVarianceSampleBlockIdAsc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  StakingsByUserIdVarianceSampleBlockIdDesc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  StakingsByUserIdVarianceSampleBlockNumberAsc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  StakingsByUserIdVarianceSampleBlockNumberDesc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  StakingsByUserIdVarianceSampleEventIndexAsc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  StakingsByUserIdVarianceSampleEventIndexDesc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  StakingsByUserIdVarianceSampleExtrinsicIndexAsc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  StakingsByUserIdVarianceSampleExtrinsicIndexDesc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  StakingsByUserIdVarianceSampleIdAsc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_ID_ASC',
  StakingsByUserIdVarianceSampleIdDesc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_ID_DESC',
  StakingsByUserIdVarianceSampleIsPositiveAsc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_IS_POSITIVE_ASC',
  StakingsByUserIdVarianceSampleIsPositiveDesc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_IS_POSITIVE_DESC',
  StakingsByUserIdVarianceSampleMethodAsc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_METHOD_ASC',
  StakingsByUserIdVarianceSampleMethodDesc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_METHOD_DESC',
  StakingsByUserIdVarianceSampleUserIdAsc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_ASC',
  StakingsByUserIdVarianceSampleUserIdDesc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_USER_ID_DESC',
  StakingsByUserIdVarianceSampleValueAsc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_VALUE_ASC',
  StakingsByUserIdVarianceSampleValueDesc = 'STAKINGS_BY_USER_ID_VARIANCE_SAMPLE_VALUE_DESC',
  TaxPoolsByAddressIdAverageAddressIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_ADDRESS_ID_ASC',
  TaxPoolsByAddressIdAverageAddressIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_ADDRESS_ID_DESC',
  TaxPoolsByAddressIdAverageBlockIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_BLOCK_ID_ASC',
  TaxPoolsByAddressIdAverageBlockIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_BLOCK_ID_DESC',
  TaxPoolsByAddressIdAverageBlockNumberAsc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_BLOCK_NUMBER_ASC',
  TaxPoolsByAddressIdAverageBlockNumberDesc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_BLOCK_NUMBER_DESC',
  TaxPoolsByAddressIdAverageEventIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_EVENT_INDEX_ASC',
  TaxPoolsByAddressIdAverageEventIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_EVENT_INDEX_DESC',
  TaxPoolsByAddressIdAverageExtrinsicIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  TaxPoolsByAddressIdAverageExtrinsicIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  TaxPoolsByAddressIdAverageIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_ID_ASC',
  TaxPoolsByAddressIdAverageIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_ID_DESC',
  TaxPoolsByAddressIdAverageValueAsc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_VALUE_ASC',
  TaxPoolsByAddressIdAverageValueDesc = 'TAX_POOLS_BY_ADDRESS_ID_AVERAGE_VALUE_DESC',
  TaxPoolsByAddressIdCountAsc = 'TAX_POOLS_BY_ADDRESS_ID_COUNT_ASC',
  TaxPoolsByAddressIdCountDesc = 'TAX_POOLS_BY_ADDRESS_ID_COUNT_DESC',
  TaxPoolsByAddressIdDistinctCountAddressIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_ADDRESS_ID_ASC',
  TaxPoolsByAddressIdDistinctCountAddressIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_ADDRESS_ID_DESC',
  TaxPoolsByAddressIdDistinctCountBlockIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  TaxPoolsByAddressIdDistinctCountBlockIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  TaxPoolsByAddressIdDistinctCountBlockNumberAsc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  TaxPoolsByAddressIdDistinctCountBlockNumberDesc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  TaxPoolsByAddressIdDistinctCountEventIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  TaxPoolsByAddressIdDistinctCountEventIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  TaxPoolsByAddressIdDistinctCountExtrinsicIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  TaxPoolsByAddressIdDistinctCountExtrinsicIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  TaxPoolsByAddressIdDistinctCountIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_ID_ASC',
  TaxPoolsByAddressIdDistinctCountIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_ID_DESC',
  TaxPoolsByAddressIdDistinctCountValueAsc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_VALUE_ASC',
  TaxPoolsByAddressIdDistinctCountValueDesc = 'TAX_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_VALUE_DESC',
  TaxPoolsByAddressIdMaxAddressIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_ADDRESS_ID_ASC',
  TaxPoolsByAddressIdMaxAddressIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_ADDRESS_ID_DESC',
  TaxPoolsByAddressIdMaxBlockIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_BLOCK_ID_ASC',
  TaxPoolsByAddressIdMaxBlockIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_BLOCK_ID_DESC',
  TaxPoolsByAddressIdMaxBlockNumberAsc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_BLOCK_NUMBER_ASC',
  TaxPoolsByAddressIdMaxBlockNumberDesc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_BLOCK_NUMBER_DESC',
  TaxPoolsByAddressIdMaxEventIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_EVENT_INDEX_ASC',
  TaxPoolsByAddressIdMaxEventIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_EVENT_INDEX_DESC',
  TaxPoolsByAddressIdMaxExtrinsicIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_EXTRINSIC_INDEX_ASC',
  TaxPoolsByAddressIdMaxExtrinsicIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_EXTRINSIC_INDEX_DESC',
  TaxPoolsByAddressIdMaxIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_ID_ASC',
  TaxPoolsByAddressIdMaxIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_ID_DESC',
  TaxPoolsByAddressIdMaxValueAsc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_VALUE_ASC',
  TaxPoolsByAddressIdMaxValueDesc = 'TAX_POOLS_BY_ADDRESS_ID_MAX_VALUE_DESC',
  TaxPoolsByAddressIdMinAddressIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_ADDRESS_ID_ASC',
  TaxPoolsByAddressIdMinAddressIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_ADDRESS_ID_DESC',
  TaxPoolsByAddressIdMinBlockIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_BLOCK_ID_ASC',
  TaxPoolsByAddressIdMinBlockIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_BLOCK_ID_DESC',
  TaxPoolsByAddressIdMinBlockNumberAsc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_BLOCK_NUMBER_ASC',
  TaxPoolsByAddressIdMinBlockNumberDesc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_BLOCK_NUMBER_DESC',
  TaxPoolsByAddressIdMinEventIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_EVENT_INDEX_ASC',
  TaxPoolsByAddressIdMinEventIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_EVENT_INDEX_DESC',
  TaxPoolsByAddressIdMinExtrinsicIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_EXTRINSIC_INDEX_ASC',
  TaxPoolsByAddressIdMinExtrinsicIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_EXTRINSIC_INDEX_DESC',
  TaxPoolsByAddressIdMinIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_ID_ASC',
  TaxPoolsByAddressIdMinIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_ID_DESC',
  TaxPoolsByAddressIdMinValueAsc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_VALUE_ASC',
  TaxPoolsByAddressIdMinValueDesc = 'TAX_POOLS_BY_ADDRESS_ID_MIN_VALUE_DESC',
  TaxPoolsByAddressIdStddevPopulationAddressIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_ADDRESS_ID_ASC',
  TaxPoolsByAddressIdStddevPopulationAddressIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_ADDRESS_ID_DESC',
  TaxPoolsByAddressIdStddevPopulationBlockIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  TaxPoolsByAddressIdStddevPopulationBlockIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  TaxPoolsByAddressIdStddevPopulationBlockNumberAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  TaxPoolsByAddressIdStddevPopulationBlockNumberDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  TaxPoolsByAddressIdStddevPopulationEventIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  TaxPoolsByAddressIdStddevPopulationEventIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  TaxPoolsByAddressIdStddevPopulationExtrinsicIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  TaxPoolsByAddressIdStddevPopulationExtrinsicIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  TaxPoolsByAddressIdStddevPopulationIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_ID_ASC',
  TaxPoolsByAddressIdStddevPopulationIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_ID_DESC',
  TaxPoolsByAddressIdStddevPopulationValueAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_VALUE_ASC',
  TaxPoolsByAddressIdStddevPopulationValueDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_VALUE_DESC',
  TaxPoolsByAddressIdStddevSampleAddressIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_ADDRESS_ID_ASC',
  TaxPoolsByAddressIdStddevSampleAddressIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_ADDRESS_ID_DESC',
  TaxPoolsByAddressIdStddevSampleBlockIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  TaxPoolsByAddressIdStddevSampleBlockIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  TaxPoolsByAddressIdStddevSampleBlockNumberAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  TaxPoolsByAddressIdStddevSampleBlockNumberDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  TaxPoolsByAddressIdStddevSampleEventIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  TaxPoolsByAddressIdStddevSampleEventIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  TaxPoolsByAddressIdStddevSampleExtrinsicIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  TaxPoolsByAddressIdStddevSampleExtrinsicIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  TaxPoolsByAddressIdStddevSampleIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_ID_ASC',
  TaxPoolsByAddressIdStddevSampleIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_ID_DESC',
  TaxPoolsByAddressIdStddevSampleValueAsc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_VALUE_ASC',
  TaxPoolsByAddressIdStddevSampleValueDesc = 'TAX_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_VALUE_DESC',
  TaxPoolsByAddressIdSumAddressIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_ADDRESS_ID_ASC',
  TaxPoolsByAddressIdSumAddressIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_ADDRESS_ID_DESC',
  TaxPoolsByAddressIdSumBlockIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_BLOCK_ID_ASC',
  TaxPoolsByAddressIdSumBlockIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_BLOCK_ID_DESC',
  TaxPoolsByAddressIdSumBlockNumberAsc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_BLOCK_NUMBER_ASC',
  TaxPoolsByAddressIdSumBlockNumberDesc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_BLOCK_NUMBER_DESC',
  TaxPoolsByAddressIdSumEventIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_EVENT_INDEX_ASC',
  TaxPoolsByAddressIdSumEventIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_EVENT_INDEX_DESC',
  TaxPoolsByAddressIdSumExtrinsicIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_EXTRINSIC_INDEX_ASC',
  TaxPoolsByAddressIdSumExtrinsicIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_EXTRINSIC_INDEX_DESC',
  TaxPoolsByAddressIdSumIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_ID_ASC',
  TaxPoolsByAddressIdSumIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_ID_DESC',
  TaxPoolsByAddressIdSumValueAsc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_VALUE_ASC',
  TaxPoolsByAddressIdSumValueDesc = 'TAX_POOLS_BY_ADDRESS_ID_SUM_VALUE_DESC',
  TaxPoolsByAddressIdVariancePopulationAddressIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_ADDRESS_ID_ASC',
  TaxPoolsByAddressIdVariancePopulationAddressIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_ADDRESS_ID_DESC',
  TaxPoolsByAddressIdVariancePopulationBlockIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  TaxPoolsByAddressIdVariancePopulationBlockIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  TaxPoolsByAddressIdVariancePopulationBlockNumberAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  TaxPoolsByAddressIdVariancePopulationBlockNumberDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  TaxPoolsByAddressIdVariancePopulationEventIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  TaxPoolsByAddressIdVariancePopulationEventIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  TaxPoolsByAddressIdVariancePopulationExtrinsicIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  TaxPoolsByAddressIdVariancePopulationExtrinsicIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  TaxPoolsByAddressIdVariancePopulationIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_ID_ASC',
  TaxPoolsByAddressIdVariancePopulationIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_ID_DESC',
  TaxPoolsByAddressIdVariancePopulationValueAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_VALUE_ASC',
  TaxPoolsByAddressIdVariancePopulationValueDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_VALUE_DESC',
  TaxPoolsByAddressIdVarianceSampleAddressIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_ADDRESS_ID_ASC',
  TaxPoolsByAddressIdVarianceSampleAddressIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_ADDRESS_ID_DESC',
  TaxPoolsByAddressIdVarianceSampleBlockIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  TaxPoolsByAddressIdVarianceSampleBlockIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  TaxPoolsByAddressIdVarianceSampleBlockNumberAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  TaxPoolsByAddressIdVarianceSampleBlockNumberDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  TaxPoolsByAddressIdVarianceSampleEventIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  TaxPoolsByAddressIdVarianceSampleEventIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  TaxPoolsByAddressIdVarianceSampleExtrinsicIndexAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  TaxPoolsByAddressIdVarianceSampleExtrinsicIndexDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  TaxPoolsByAddressIdVarianceSampleIdAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_ID_ASC',
  TaxPoolsByAddressIdVarianceSampleIdDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_ID_DESC',
  TaxPoolsByAddressIdVarianceSampleValueAsc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_VALUE_ASC',
  TaxPoolsByAddressIdVarianceSampleValueDesc = 'TAX_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_VALUE_DESC',
  TaxUnPoolsByAddressIdAverageAddressIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_ADDRESS_ID_ASC',
  TaxUnPoolsByAddressIdAverageAddressIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_ADDRESS_ID_DESC',
  TaxUnPoolsByAddressIdAverageBlockIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_BLOCK_ID_ASC',
  TaxUnPoolsByAddressIdAverageBlockIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_BLOCK_ID_DESC',
  TaxUnPoolsByAddressIdAverageBlockNumberAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_BLOCK_NUMBER_ASC',
  TaxUnPoolsByAddressIdAverageBlockNumberDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_BLOCK_NUMBER_DESC',
  TaxUnPoolsByAddressIdAverageEventIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_EVENT_INDEX_ASC',
  TaxUnPoolsByAddressIdAverageEventIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_EVENT_INDEX_DESC',
  TaxUnPoolsByAddressIdAverageExtrinsicIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsByAddressIdAverageExtrinsicIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsByAddressIdAverageIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_ID_ASC',
  TaxUnPoolsByAddressIdAverageIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_ID_DESC',
  TaxUnPoolsByAddressIdAverageValueAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_VALUE_ASC',
  TaxUnPoolsByAddressIdAverageValueDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_AVERAGE_VALUE_DESC',
  TaxUnPoolsByAddressIdCountAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_COUNT_ASC',
  TaxUnPoolsByAddressIdCountDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_COUNT_DESC',
  TaxUnPoolsByAddressIdDistinctCountAddressIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_ADDRESS_ID_ASC',
  TaxUnPoolsByAddressIdDistinctCountAddressIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_ADDRESS_ID_DESC',
  TaxUnPoolsByAddressIdDistinctCountBlockIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  TaxUnPoolsByAddressIdDistinctCountBlockIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  TaxUnPoolsByAddressIdDistinctCountBlockNumberAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  TaxUnPoolsByAddressIdDistinctCountBlockNumberDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  TaxUnPoolsByAddressIdDistinctCountEventIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  TaxUnPoolsByAddressIdDistinctCountEventIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  TaxUnPoolsByAddressIdDistinctCountExtrinsicIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsByAddressIdDistinctCountExtrinsicIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsByAddressIdDistinctCountIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_ID_ASC',
  TaxUnPoolsByAddressIdDistinctCountIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_ID_DESC',
  TaxUnPoolsByAddressIdDistinctCountValueAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_VALUE_ASC',
  TaxUnPoolsByAddressIdDistinctCountValueDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_DISTINCT_COUNT_VALUE_DESC',
  TaxUnPoolsByAddressIdMaxAddressIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_ADDRESS_ID_ASC',
  TaxUnPoolsByAddressIdMaxAddressIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_ADDRESS_ID_DESC',
  TaxUnPoolsByAddressIdMaxBlockIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_BLOCK_ID_ASC',
  TaxUnPoolsByAddressIdMaxBlockIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_BLOCK_ID_DESC',
  TaxUnPoolsByAddressIdMaxBlockNumberAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_BLOCK_NUMBER_ASC',
  TaxUnPoolsByAddressIdMaxBlockNumberDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_BLOCK_NUMBER_DESC',
  TaxUnPoolsByAddressIdMaxEventIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_EVENT_INDEX_ASC',
  TaxUnPoolsByAddressIdMaxEventIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_EVENT_INDEX_DESC',
  TaxUnPoolsByAddressIdMaxExtrinsicIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsByAddressIdMaxExtrinsicIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsByAddressIdMaxIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_ID_ASC',
  TaxUnPoolsByAddressIdMaxIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_ID_DESC',
  TaxUnPoolsByAddressIdMaxValueAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_VALUE_ASC',
  TaxUnPoolsByAddressIdMaxValueDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MAX_VALUE_DESC',
  TaxUnPoolsByAddressIdMinAddressIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_ADDRESS_ID_ASC',
  TaxUnPoolsByAddressIdMinAddressIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_ADDRESS_ID_DESC',
  TaxUnPoolsByAddressIdMinBlockIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_BLOCK_ID_ASC',
  TaxUnPoolsByAddressIdMinBlockIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_BLOCK_ID_DESC',
  TaxUnPoolsByAddressIdMinBlockNumberAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_BLOCK_NUMBER_ASC',
  TaxUnPoolsByAddressIdMinBlockNumberDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_BLOCK_NUMBER_DESC',
  TaxUnPoolsByAddressIdMinEventIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_EVENT_INDEX_ASC',
  TaxUnPoolsByAddressIdMinEventIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_EVENT_INDEX_DESC',
  TaxUnPoolsByAddressIdMinExtrinsicIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsByAddressIdMinExtrinsicIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsByAddressIdMinIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_ID_ASC',
  TaxUnPoolsByAddressIdMinIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_ID_DESC',
  TaxUnPoolsByAddressIdMinValueAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_VALUE_ASC',
  TaxUnPoolsByAddressIdMinValueDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_MIN_VALUE_DESC',
  TaxUnPoolsByAddressIdStddevPopulationAddressIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_ADDRESS_ID_ASC',
  TaxUnPoolsByAddressIdStddevPopulationAddressIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_ADDRESS_ID_DESC',
  TaxUnPoolsByAddressIdStddevPopulationBlockIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  TaxUnPoolsByAddressIdStddevPopulationBlockIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  TaxUnPoolsByAddressIdStddevPopulationBlockNumberAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  TaxUnPoolsByAddressIdStddevPopulationBlockNumberDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  TaxUnPoolsByAddressIdStddevPopulationEventIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  TaxUnPoolsByAddressIdStddevPopulationEventIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  TaxUnPoolsByAddressIdStddevPopulationExtrinsicIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsByAddressIdStddevPopulationExtrinsicIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsByAddressIdStddevPopulationIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_ID_ASC',
  TaxUnPoolsByAddressIdStddevPopulationIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_ID_DESC',
  TaxUnPoolsByAddressIdStddevPopulationValueAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_VALUE_ASC',
  TaxUnPoolsByAddressIdStddevPopulationValueDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_POPULATION_VALUE_DESC',
  TaxUnPoolsByAddressIdStddevSampleAddressIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_ADDRESS_ID_ASC',
  TaxUnPoolsByAddressIdStddevSampleAddressIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_ADDRESS_ID_DESC',
  TaxUnPoolsByAddressIdStddevSampleBlockIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  TaxUnPoolsByAddressIdStddevSampleBlockIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  TaxUnPoolsByAddressIdStddevSampleBlockNumberAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  TaxUnPoolsByAddressIdStddevSampleBlockNumberDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  TaxUnPoolsByAddressIdStddevSampleEventIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  TaxUnPoolsByAddressIdStddevSampleEventIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  TaxUnPoolsByAddressIdStddevSampleExtrinsicIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsByAddressIdStddevSampleExtrinsicIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsByAddressIdStddevSampleIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_ID_ASC',
  TaxUnPoolsByAddressIdStddevSampleIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_ID_DESC',
  TaxUnPoolsByAddressIdStddevSampleValueAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_VALUE_ASC',
  TaxUnPoolsByAddressIdStddevSampleValueDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_STDDEV_SAMPLE_VALUE_DESC',
  TaxUnPoolsByAddressIdSumAddressIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_ADDRESS_ID_ASC',
  TaxUnPoolsByAddressIdSumAddressIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_ADDRESS_ID_DESC',
  TaxUnPoolsByAddressIdSumBlockIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_BLOCK_ID_ASC',
  TaxUnPoolsByAddressIdSumBlockIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_BLOCK_ID_DESC',
  TaxUnPoolsByAddressIdSumBlockNumberAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_BLOCK_NUMBER_ASC',
  TaxUnPoolsByAddressIdSumBlockNumberDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_BLOCK_NUMBER_DESC',
  TaxUnPoolsByAddressIdSumEventIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_EVENT_INDEX_ASC',
  TaxUnPoolsByAddressIdSumEventIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_EVENT_INDEX_DESC',
  TaxUnPoolsByAddressIdSumExtrinsicIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsByAddressIdSumExtrinsicIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsByAddressIdSumIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_ID_ASC',
  TaxUnPoolsByAddressIdSumIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_ID_DESC',
  TaxUnPoolsByAddressIdSumValueAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_VALUE_ASC',
  TaxUnPoolsByAddressIdSumValueDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_SUM_VALUE_DESC',
  TaxUnPoolsByAddressIdVariancePopulationAddressIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_ADDRESS_ID_ASC',
  TaxUnPoolsByAddressIdVariancePopulationAddressIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_ADDRESS_ID_DESC',
  TaxUnPoolsByAddressIdVariancePopulationBlockIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  TaxUnPoolsByAddressIdVariancePopulationBlockIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  TaxUnPoolsByAddressIdVariancePopulationBlockNumberAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  TaxUnPoolsByAddressIdVariancePopulationBlockNumberDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  TaxUnPoolsByAddressIdVariancePopulationEventIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  TaxUnPoolsByAddressIdVariancePopulationEventIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  TaxUnPoolsByAddressIdVariancePopulationExtrinsicIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsByAddressIdVariancePopulationExtrinsicIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsByAddressIdVariancePopulationIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_ID_ASC',
  TaxUnPoolsByAddressIdVariancePopulationIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_ID_DESC',
  TaxUnPoolsByAddressIdVariancePopulationValueAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_VALUE_ASC',
  TaxUnPoolsByAddressIdVariancePopulationValueDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_POPULATION_VALUE_DESC',
  TaxUnPoolsByAddressIdVarianceSampleAddressIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_ADDRESS_ID_ASC',
  TaxUnPoolsByAddressIdVarianceSampleAddressIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_ADDRESS_ID_DESC',
  TaxUnPoolsByAddressIdVarianceSampleBlockIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  TaxUnPoolsByAddressIdVarianceSampleBlockIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  TaxUnPoolsByAddressIdVarianceSampleBlockNumberAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  TaxUnPoolsByAddressIdVarianceSampleBlockNumberDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  TaxUnPoolsByAddressIdVarianceSampleEventIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  TaxUnPoolsByAddressIdVarianceSampleEventIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  TaxUnPoolsByAddressIdVarianceSampleExtrinsicIndexAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsByAddressIdVarianceSampleExtrinsicIndexDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsByAddressIdVarianceSampleIdAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_ID_ASC',
  TaxUnPoolsByAddressIdVarianceSampleIdDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_ID_DESC',
  TaxUnPoolsByAddressIdVarianceSampleValueAsc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_VALUE_ASC',
  TaxUnPoolsByAddressIdVarianceSampleValueDesc = 'TAX_UN_POOLS_BY_ADDRESS_ID_VARIANCE_SAMPLE_VALUE_DESC',
  TransfersByFromIdAverageBlockIdAsc = 'TRANSFERS_BY_FROM_ID_AVERAGE_BLOCK_ID_ASC',
  TransfersByFromIdAverageBlockIdDesc = 'TRANSFERS_BY_FROM_ID_AVERAGE_BLOCK_ID_DESC',
  TransfersByFromIdAverageBlockNumberAsc = 'TRANSFERS_BY_FROM_ID_AVERAGE_BLOCK_NUMBER_ASC',
  TransfersByFromIdAverageBlockNumberDesc = 'TRANSFERS_BY_FROM_ID_AVERAGE_BLOCK_NUMBER_DESC',
  TransfersByFromIdAverageEventIndexAsc = 'TRANSFERS_BY_FROM_ID_AVERAGE_EVENT_INDEX_ASC',
  TransfersByFromIdAverageEventIndexDesc = 'TRANSFERS_BY_FROM_ID_AVERAGE_EVENT_INDEX_DESC',
  TransfersByFromIdAverageExtrinsicIndexAsc = 'TRANSFERS_BY_FROM_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  TransfersByFromIdAverageExtrinsicIndexDesc = 'TRANSFERS_BY_FROM_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  TransfersByFromIdAverageFromIdAsc = 'TRANSFERS_BY_FROM_ID_AVERAGE_FROM_ID_ASC',
  TransfersByFromIdAverageFromIdDesc = 'TRANSFERS_BY_FROM_ID_AVERAGE_FROM_ID_DESC',
  TransfersByFromIdAverageIdAsc = 'TRANSFERS_BY_FROM_ID_AVERAGE_ID_ASC',
  TransfersByFromIdAverageIdDesc = 'TRANSFERS_BY_FROM_ID_AVERAGE_ID_DESC',
  TransfersByFromIdAverageRemarkAsc = 'TRANSFERS_BY_FROM_ID_AVERAGE_REMARK_ASC',
  TransfersByFromIdAverageRemarkDesc = 'TRANSFERS_BY_FROM_ID_AVERAGE_REMARK_DESC',
  TransfersByFromIdAverageToIdAsc = 'TRANSFERS_BY_FROM_ID_AVERAGE_TO_ID_ASC',
  TransfersByFromIdAverageToIdDesc = 'TRANSFERS_BY_FROM_ID_AVERAGE_TO_ID_DESC',
  TransfersByFromIdAverageValueAsc = 'TRANSFERS_BY_FROM_ID_AVERAGE_VALUE_ASC',
  TransfersByFromIdAverageValueDesc = 'TRANSFERS_BY_FROM_ID_AVERAGE_VALUE_DESC',
  TransfersByFromIdCountAsc = 'TRANSFERS_BY_FROM_ID_COUNT_ASC',
  TransfersByFromIdCountDesc = 'TRANSFERS_BY_FROM_ID_COUNT_DESC',
  TransfersByFromIdDistinctCountBlockIdAsc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  TransfersByFromIdDistinctCountBlockIdDesc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  TransfersByFromIdDistinctCountBlockNumberAsc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  TransfersByFromIdDistinctCountBlockNumberDesc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  TransfersByFromIdDistinctCountEventIndexAsc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  TransfersByFromIdDistinctCountEventIndexDesc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  TransfersByFromIdDistinctCountExtrinsicIndexAsc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  TransfersByFromIdDistinctCountExtrinsicIndexDesc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  TransfersByFromIdDistinctCountFromIdAsc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_FROM_ID_ASC',
  TransfersByFromIdDistinctCountFromIdDesc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_FROM_ID_DESC',
  TransfersByFromIdDistinctCountIdAsc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_ID_ASC',
  TransfersByFromIdDistinctCountIdDesc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_ID_DESC',
  TransfersByFromIdDistinctCountRemarkAsc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_REMARK_ASC',
  TransfersByFromIdDistinctCountRemarkDesc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_REMARK_DESC',
  TransfersByFromIdDistinctCountToIdAsc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_TO_ID_ASC',
  TransfersByFromIdDistinctCountToIdDesc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_TO_ID_DESC',
  TransfersByFromIdDistinctCountValueAsc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_VALUE_ASC',
  TransfersByFromIdDistinctCountValueDesc = 'TRANSFERS_BY_FROM_ID_DISTINCT_COUNT_VALUE_DESC',
  TransfersByFromIdMaxBlockIdAsc = 'TRANSFERS_BY_FROM_ID_MAX_BLOCK_ID_ASC',
  TransfersByFromIdMaxBlockIdDesc = 'TRANSFERS_BY_FROM_ID_MAX_BLOCK_ID_DESC',
  TransfersByFromIdMaxBlockNumberAsc = 'TRANSFERS_BY_FROM_ID_MAX_BLOCK_NUMBER_ASC',
  TransfersByFromIdMaxBlockNumberDesc = 'TRANSFERS_BY_FROM_ID_MAX_BLOCK_NUMBER_DESC',
  TransfersByFromIdMaxEventIndexAsc = 'TRANSFERS_BY_FROM_ID_MAX_EVENT_INDEX_ASC',
  TransfersByFromIdMaxEventIndexDesc = 'TRANSFERS_BY_FROM_ID_MAX_EVENT_INDEX_DESC',
  TransfersByFromIdMaxExtrinsicIndexAsc = 'TRANSFERS_BY_FROM_ID_MAX_EXTRINSIC_INDEX_ASC',
  TransfersByFromIdMaxExtrinsicIndexDesc = 'TRANSFERS_BY_FROM_ID_MAX_EXTRINSIC_INDEX_DESC',
  TransfersByFromIdMaxFromIdAsc = 'TRANSFERS_BY_FROM_ID_MAX_FROM_ID_ASC',
  TransfersByFromIdMaxFromIdDesc = 'TRANSFERS_BY_FROM_ID_MAX_FROM_ID_DESC',
  TransfersByFromIdMaxIdAsc = 'TRANSFERS_BY_FROM_ID_MAX_ID_ASC',
  TransfersByFromIdMaxIdDesc = 'TRANSFERS_BY_FROM_ID_MAX_ID_DESC',
  TransfersByFromIdMaxRemarkAsc = 'TRANSFERS_BY_FROM_ID_MAX_REMARK_ASC',
  TransfersByFromIdMaxRemarkDesc = 'TRANSFERS_BY_FROM_ID_MAX_REMARK_DESC',
  TransfersByFromIdMaxToIdAsc = 'TRANSFERS_BY_FROM_ID_MAX_TO_ID_ASC',
  TransfersByFromIdMaxToIdDesc = 'TRANSFERS_BY_FROM_ID_MAX_TO_ID_DESC',
  TransfersByFromIdMaxValueAsc = 'TRANSFERS_BY_FROM_ID_MAX_VALUE_ASC',
  TransfersByFromIdMaxValueDesc = 'TRANSFERS_BY_FROM_ID_MAX_VALUE_DESC',
  TransfersByFromIdMinBlockIdAsc = 'TRANSFERS_BY_FROM_ID_MIN_BLOCK_ID_ASC',
  TransfersByFromIdMinBlockIdDesc = 'TRANSFERS_BY_FROM_ID_MIN_BLOCK_ID_DESC',
  TransfersByFromIdMinBlockNumberAsc = 'TRANSFERS_BY_FROM_ID_MIN_BLOCK_NUMBER_ASC',
  TransfersByFromIdMinBlockNumberDesc = 'TRANSFERS_BY_FROM_ID_MIN_BLOCK_NUMBER_DESC',
  TransfersByFromIdMinEventIndexAsc = 'TRANSFERS_BY_FROM_ID_MIN_EVENT_INDEX_ASC',
  TransfersByFromIdMinEventIndexDesc = 'TRANSFERS_BY_FROM_ID_MIN_EVENT_INDEX_DESC',
  TransfersByFromIdMinExtrinsicIndexAsc = 'TRANSFERS_BY_FROM_ID_MIN_EXTRINSIC_INDEX_ASC',
  TransfersByFromIdMinExtrinsicIndexDesc = 'TRANSFERS_BY_FROM_ID_MIN_EXTRINSIC_INDEX_DESC',
  TransfersByFromIdMinFromIdAsc = 'TRANSFERS_BY_FROM_ID_MIN_FROM_ID_ASC',
  TransfersByFromIdMinFromIdDesc = 'TRANSFERS_BY_FROM_ID_MIN_FROM_ID_DESC',
  TransfersByFromIdMinIdAsc = 'TRANSFERS_BY_FROM_ID_MIN_ID_ASC',
  TransfersByFromIdMinIdDesc = 'TRANSFERS_BY_FROM_ID_MIN_ID_DESC',
  TransfersByFromIdMinRemarkAsc = 'TRANSFERS_BY_FROM_ID_MIN_REMARK_ASC',
  TransfersByFromIdMinRemarkDesc = 'TRANSFERS_BY_FROM_ID_MIN_REMARK_DESC',
  TransfersByFromIdMinToIdAsc = 'TRANSFERS_BY_FROM_ID_MIN_TO_ID_ASC',
  TransfersByFromIdMinToIdDesc = 'TRANSFERS_BY_FROM_ID_MIN_TO_ID_DESC',
  TransfersByFromIdMinValueAsc = 'TRANSFERS_BY_FROM_ID_MIN_VALUE_ASC',
  TransfersByFromIdMinValueDesc = 'TRANSFERS_BY_FROM_ID_MIN_VALUE_DESC',
  TransfersByFromIdStddevPopulationBlockIdAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  TransfersByFromIdStddevPopulationBlockIdDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  TransfersByFromIdStddevPopulationBlockNumberAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  TransfersByFromIdStddevPopulationBlockNumberDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  TransfersByFromIdStddevPopulationEventIndexAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  TransfersByFromIdStddevPopulationEventIndexDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  TransfersByFromIdStddevPopulationExtrinsicIndexAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  TransfersByFromIdStddevPopulationExtrinsicIndexDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  TransfersByFromIdStddevPopulationFromIdAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_FROM_ID_ASC',
  TransfersByFromIdStddevPopulationFromIdDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_FROM_ID_DESC',
  TransfersByFromIdStddevPopulationIdAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_ID_ASC',
  TransfersByFromIdStddevPopulationIdDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_ID_DESC',
  TransfersByFromIdStddevPopulationRemarkAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_REMARK_ASC',
  TransfersByFromIdStddevPopulationRemarkDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_REMARK_DESC',
  TransfersByFromIdStddevPopulationToIdAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_TO_ID_ASC',
  TransfersByFromIdStddevPopulationToIdDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_TO_ID_DESC',
  TransfersByFromIdStddevPopulationValueAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_VALUE_ASC',
  TransfersByFromIdStddevPopulationValueDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_POPULATION_VALUE_DESC',
  TransfersByFromIdStddevSampleBlockIdAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  TransfersByFromIdStddevSampleBlockIdDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  TransfersByFromIdStddevSampleBlockNumberAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  TransfersByFromIdStddevSampleBlockNumberDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  TransfersByFromIdStddevSampleEventIndexAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  TransfersByFromIdStddevSampleEventIndexDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  TransfersByFromIdStddevSampleExtrinsicIndexAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  TransfersByFromIdStddevSampleExtrinsicIndexDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  TransfersByFromIdStddevSampleFromIdAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_FROM_ID_ASC',
  TransfersByFromIdStddevSampleFromIdDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_FROM_ID_DESC',
  TransfersByFromIdStddevSampleIdAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_ID_ASC',
  TransfersByFromIdStddevSampleIdDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_ID_DESC',
  TransfersByFromIdStddevSampleRemarkAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_REMARK_ASC',
  TransfersByFromIdStddevSampleRemarkDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_REMARK_DESC',
  TransfersByFromIdStddevSampleToIdAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_TO_ID_ASC',
  TransfersByFromIdStddevSampleToIdDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_TO_ID_DESC',
  TransfersByFromIdStddevSampleValueAsc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_VALUE_ASC',
  TransfersByFromIdStddevSampleValueDesc = 'TRANSFERS_BY_FROM_ID_STDDEV_SAMPLE_VALUE_DESC',
  TransfersByFromIdSumBlockIdAsc = 'TRANSFERS_BY_FROM_ID_SUM_BLOCK_ID_ASC',
  TransfersByFromIdSumBlockIdDesc = 'TRANSFERS_BY_FROM_ID_SUM_BLOCK_ID_DESC',
  TransfersByFromIdSumBlockNumberAsc = 'TRANSFERS_BY_FROM_ID_SUM_BLOCK_NUMBER_ASC',
  TransfersByFromIdSumBlockNumberDesc = 'TRANSFERS_BY_FROM_ID_SUM_BLOCK_NUMBER_DESC',
  TransfersByFromIdSumEventIndexAsc = 'TRANSFERS_BY_FROM_ID_SUM_EVENT_INDEX_ASC',
  TransfersByFromIdSumEventIndexDesc = 'TRANSFERS_BY_FROM_ID_SUM_EVENT_INDEX_DESC',
  TransfersByFromIdSumExtrinsicIndexAsc = 'TRANSFERS_BY_FROM_ID_SUM_EXTRINSIC_INDEX_ASC',
  TransfersByFromIdSumExtrinsicIndexDesc = 'TRANSFERS_BY_FROM_ID_SUM_EXTRINSIC_INDEX_DESC',
  TransfersByFromIdSumFromIdAsc = 'TRANSFERS_BY_FROM_ID_SUM_FROM_ID_ASC',
  TransfersByFromIdSumFromIdDesc = 'TRANSFERS_BY_FROM_ID_SUM_FROM_ID_DESC',
  TransfersByFromIdSumIdAsc = 'TRANSFERS_BY_FROM_ID_SUM_ID_ASC',
  TransfersByFromIdSumIdDesc = 'TRANSFERS_BY_FROM_ID_SUM_ID_DESC',
  TransfersByFromIdSumRemarkAsc = 'TRANSFERS_BY_FROM_ID_SUM_REMARK_ASC',
  TransfersByFromIdSumRemarkDesc = 'TRANSFERS_BY_FROM_ID_SUM_REMARK_DESC',
  TransfersByFromIdSumToIdAsc = 'TRANSFERS_BY_FROM_ID_SUM_TO_ID_ASC',
  TransfersByFromIdSumToIdDesc = 'TRANSFERS_BY_FROM_ID_SUM_TO_ID_DESC',
  TransfersByFromIdSumValueAsc = 'TRANSFERS_BY_FROM_ID_SUM_VALUE_ASC',
  TransfersByFromIdSumValueDesc = 'TRANSFERS_BY_FROM_ID_SUM_VALUE_DESC',
  TransfersByFromIdVariancePopulationBlockIdAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  TransfersByFromIdVariancePopulationBlockIdDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  TransfersByFromIdVariancePopulationBlockNumberAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  TransfersByFromIdVariancePopulationBlockNumberDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  TransfersByFromIdVariancePopulationEventIndexAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  TransfersByFromIdVariancePopulationEventIndexDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  TransfersByFromIdVariancePopulationExtrinsicIndexAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  TransfersByFromIdVariancePopulationExtrinsicIndexDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  TransfersByFromIdVariancePopulationFromIdAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_FROM_ID_ASC',
  TransfersByFromIdVariancePopulationFromIdDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_FROM_ID_DESC',
  TransfersByFromIdVariancePopulationIdAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_ID_ASC',
  TransfersByFromIdVariancePopulationIdDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_ID_DESC',
  TransfersByFromIdVariancePopulationRemarkAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_REMARK_ASC',
  TransfersByFromIdVariancePopulationRemarkDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_REMARK_DESC',
  TransfersByFromIdVariancePopulationToIdAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_TO_ID_ASC',
  TransfersByFromIdVariancePopulationToIdDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_TO_ID_DESC',
  TransfersByFromIdVariancePopulationValueAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_VALUE_ASC',
  TransfersByFromIdVariancePopulationValueDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_POPULATION_VALUE_DESC',
  TransfersByFromIdVarianceSampleBlockIdAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  TransfersByFromIdVarianceSampleBlockIdDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  TransfersByFromIdVarianceSampleBlockNumberAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  TransfersByFromIdVarianceSampleBlockNumberDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  TransfersByFromIdVarianceSampleEventIndexAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  TransfersByFromIdVarianceSampleEventIndexDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  TransfersByFromIdVarianceSampleExtrinsicIndexAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  TransfersByFromIdVarianceSampleExtrinsicIndexDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  TransfersByFromIdVarianceSampleFromIdAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_FROM_ID_ASC',
  TransfersByFromIdVarianceSampleFromIdDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_FROM_ID_DESC',
  TransfersByFromIdVarianceSampleIdAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_ID_ASC',
  TransfersByFromIdVarianceSampleIdDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_ID_DESC',
  TransfersByFromIdVarianceSampleRemarkAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_REMARK_ASC',
  TransfersByFromIdVarianceSampleRemarkDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_REMARK_DESC',
  TransfersByFromIdVarianceSampleToIdAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_TO_ID_ASC',
  TransfersByFromIdVarianceSampleToIdDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_TO_ID_DESC',
  TransfersByFromIdVarianceSampleValueAsc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_VALUE_ASC',
  TransfersByFromIdVarianceSampleValueDesc = 'TRANSFERS_BY_FROM_ID_VARIANCE_SAMPLE_VALUE_DESC',
  TransfersByToIdAverageBlockIdAsc = 'TRANSFERS_BY_TO_ID_AVERAGE_BLOCK_ID_ASC',
  TransfersByToIdAverageBlockIdDesc = 'TRANSFERS_BY_TO_ID_AVERAGE_BLOCK_ID_DESC',
  TransfersByToIdAverageBlockNumberAsc = 'TRANSFERS_BY_TO_ID_AVERAGE_BLOCK_NUMBER_ASC',
  TransfersByToIdAverageBlockNumberDesc = 'TRANSFERS_BY_TO_ID_AVERAGE_BLOCK_NUMBER_DESC',
  TransfersByToIdAverageEventIndexAsc = 'TRANSFERS_BY_TO_ID_AVERAGE_EVENT_INDEX_ASC',
  TransfersByToIdAverageEventIndexDesc = 'TRANSFERS_BY_TO_ID_AVERAGE_EVENT_INDEX_DESC',
  TransfersByToIdAverageExtrinsicIndexAsc = 'TRANSFERS_BY_TO_ID_AVERAGE_EXTRINSIC_INDEX_ASC',
  TransfersByToIdAverageExtrinsicIndexDesc = 'TRANSFERS_BY_TO_ID_AVERAGE_EXTRINSIC_INDEX_DESC',
  TransfersByToIdAverageFromIdAsc = 'TRANSFERS_BY_TO_ID_AVERAGE_FROM_ID_ASC',
  TransfersByToIdAverageFromIdDesc = 'TRANSFERS_BY_TO_ID_AVERAGE_FROM_ID_DESC',
  TransfersByToIdAverageIdAsc = 'TRANSFERS_BY_TO_ID_AVERAGE_ID_ASC',
  TransfersByToIdAverageIdDesc = 'TRANSFERS_BY_TO_ID_AVERAGE_ID_DESC',
  TransfersByToIdAverageRemarkAsc = 'TRANSFERS_BY_TO_ID_AVERAGE_REMARK_ASC',
  TransfersByToIdAverageRemarkDesc = 'TRANSFERS_BY_TO_ID_AVERAGE_REMARK_DESC',
  TransfersByToIdAverageToIdAsc = 'TRANSFERS_BY_TO_ID_AVERAGE_TO_ID_ASC',
  TransfersByToIdAverageToIdDesc = 'TRANSFERS_BY_TO_ID_AVERAGE_TO_ID_DESC',
  TransfersByToIdAverageValueAsc = 'TRANSFERS_BY_TO_ID_AVERAGE_VALUE_ASC',
  TransfersByToIdAverageValueDesc = 'TRANSFERS_BY_TO_ID_AVERAGE_VALUE_DESC',
  TransfersByToIdCountAsc = 'TRANSFERS_BY_TO_ID_COUNT_ASC',
  TransfersByToIdCountDesc = 'TRANSFERS_BY_TO_ID_COUNT_DESC',
  TransfersByToIdDistinctCountBlockIdAsc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_BLOCK_ID_ASC',
  TransfersByToIdDistinctCountBlockIdDesc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_BLOCK_ID_DESC',
  TransfersByToIdDistinctCountBlockNumberAsc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  TransfersByToIdDistinctCountBlockNumberDesc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  TransfersByToIdDistinctCountEventIndexAsc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_EVENT_INDEX_ASC',
  TransfersByToIdDistinctCountEventIndexDesc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_EVENT_INDEX_DESC',
  TransfersByToIdDistinctCountExtrinsicIndexAsc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  TransfersByToIdDistinctCountExtrinsicIndexDesc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  TransfersByToIdDistinctCountFromIdAsc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_FROM_ID_ASC',
  TransfersByToIdDistinctCountFromIdDesc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_FROM_ID_DESC',
  TransfersByToIdDistinctCountIdAsc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_ID_ASC',
  TransfersByToIdDistinctCountIdDesc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_ID_DESC',
  TransfersByToIdDistinctCountRemarkAsc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_REMARK_ASC',
  TransfersByToIdDistinctCountRemarkDesc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_REMARK_DESC',
  TransfersByToIdDistinctCountToIdAsc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_TO_ID_ASC',
  TransfersByToIdDistinctCountToIdDesc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_TO_ID_DESC',
  TransfersByToIdDistinctCountValueAsc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_VALUE_ASC',
  TransfersByToIdDistinctCountValueDesc = 'TRANSFERS_BY_TO_ID_DISTINCT_COUNT_VALUE_DESC',
  TransfersByToIdMaxBlockIdAsc = 'TRANSFERS_BY_TO_ID_MAX_BLOCK_ID_ASC',
  TransfersByToIdMaxBlockIdDesc = 'TRANSFERS_BY_TO_ID_MAX_BLOCK_ID_DESC',
  TransfersByToIdMaxBlockNumberAsc = 'TRANSFERS_BY_TO_ID_MAX_BLOCK_NUMBER_ASC',
  TransfersByToIdMaxBlockNumberDesc = 'TRANSFERS_BY_TO_ID_MAX_BLOCK_NUMBER_DESC',
  TransfersByToIdMaxEventIndexAsc = 'TRANSFERS_BY_TO_ID_MAX_EVENT_INDEX_ASC',
  TransfersByToIdMaxEventIndexDesc = 'TRANSFERS_BY_TO_ID_MAX_EVENT_INDEX_DESC',
  TransfersByToIdMaxExtrinsicIndexAsc = 'TRANSFERS_BY_TO_ID_MAX_EXTRINSIC_INDEX_ASC',
  TransfersByToIdMaxExtrinsicIndexDesc = 'TRANSFERS_BY_TO_ID_MAX_EXTRINSIC_INDEX_DESC',
  TransfersByToIdMaxFromIdAsc = 'TRANSFERS_BY_TO_ID_MAX_FROM_ID_ASC',
  TransfersByToIdMaxFromIdDesc = 'TRANSFERS_BY_TO_ID_MAX_FROM_ID_DESC',
  TransfersByToIdMaxIdAsc = 'TRANSFERS_BY_TO_ID_MAX_ID_ASC',
  TransfersByToIdMaxIdDesc = 'TRANSFERS_BY_TO_ID_MAX_ID_DESC',
  TransfersByToIdMaxRemarkAsc = 'TRANSFERS_BY_TO_ID_MAX_REMARK_ASC',
  TransfersByToIdMaxRemarkDesc = 'TRANSFERS_BY_TO_ID_MAX_REMARK_DESC',
  TransfersByToIdMaxToIdAsc = 'TRANSFERS_BY_TO_ID_MAX_TO_ID_ASC',
  TransfersByToIdMaxToIdDesc = 'TRANSFERS_BY_TO_ID_MAX_TO_ID_DESC',
  TransfersByToIdMaxValueAsc = 'TRANSFERS_BY_TO_ID_MAX_VALUE_ASC',
  TransfersByToIdMaxValueDesc = 'TRANSFERS_BY_TO_ID_MAX_VALUE_DESC',
  TransfersByToIdMinBlockIdAsc = 'TRANSFERS_BY_TO_ID_MIN_BLOCK_ID_ASC',
  TransfersByToIdMinBlockIdDesc = 'TRANSFERS_BY_TO_ID_MIN_BLOCK_ID_DESC',
  TransfersByToIdMinBlockNumberAsc = 'TRANSFERS_BY_TO_ID_MIN_BLOCK_NUMBER_ASC',
  TransfersByToIdMinBlockNumberDesc = 'TRANSFERS_BY_TO_ID_MIN_BLOCK_NUMBER_DESC',
  TransfersByToIdMinEventIndexAsc = 'TRANSFERS_BY_TO_ID_MIN_EVENT_INDEX_ASC',
  TransfersByToIdMinEventIndexDesc = 'TRANSFERS_BY_TO_ID_MIN_EVENT_INDEX_DESC',
  TransfersByToIdMinExtrinsicIndexAsc = 'TRANSFERS_BY_TO_ID_MIN_EXTRINSIC_INDEX_ASC',
  TransfersByToIdMinExtrinsicIndexDesc = 'TRANSFERS_BY_TO_ID_MIN_EXTRINSIC_INDEX_DESC',
  TransfersByToIdMinFromIdAsc = 'TRANSFERS_BY_TO_ID_MIN_FROM_ID_ASC',
  TransfersByToIdMinFromIdDesc = 'TRANSFERS_BY_TO_ID_MIN_FROM_ID_DESC',
  TransfersByToIdMinIdAsc = 'TRANSFERS_BY_TO_ID_MIN_ID_ASC',
  TransfersByToIdMinIdDesc = 'TRANSFERS_BY_TO_ID_MIN_ID_DESC',
  TransfersByToIdMinRemarkAsc = 'TRANSFERS_BY_TO_ID_MIN_REMARK_ASC',
  TransfersByToIdMinRemarkDesc = 'TRANSFERS_BY_TO_ID_MIN_REMARK_DESC',
  TransfersByToIdMinToIdAsc = 'TRANSFERS_BY_TO_ID_MIN_TO_ID_ASC',
  TransfersByToIdMinToIdDesc = 'TRANSFERS_BY_TO_ID_MIN_TO_ID_DESC',
  TransfersByToIdMinValueAsc = 'TRANSFERS_BY_TO_ID_MIN_VALUE_ASC',
  TransfersByToIdMinValueDesc = 'TRANSFERS_BY_TO_ID_MIN_VALUE_DESC',
  TransfersByToIdStddevPopulationBlockIdAsc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_BLOCK_ID_ASC',
  TransfersByToIdStddevPopulationBlockIdDesc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_BLOCK_ID_DESC',
  TransfersByToIdStddevPopulationBlockNumberAsc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  TransfersByToIdStddevPopulationBlockNumberDesc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  TransfersByToIdStddevPopulationEventIndexAsc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_EVENT_INDEX_ASC',
  TransfersByToIdStddevPopulationEventIndexDesc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_EVENT_INDEX_DESC',
  TransfersByToIdStddevPopulationExtrinsicIndexAsc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  TransfersByToIdStddevPopulationExtrinsicIndexDesc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  TransfersByToIdStddevPopulationFromIdAsc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_FROM_ID_ASC',
  TransfersByToIdStddevPopulationFromIdDesc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_FROM_ID_DESC',
  TransfersByToIdStddevPopulationIdAsc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_ID_ASC',
  TransfersByToIdStddevPopulationIdDesc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_ID_DESC',
  TransfersByToIdStddevPopulationRemarkAsc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_REMARK_ASC',
  TransfersByToIdStddevPopulationRemarkDesc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_REMARK_DESC',
  TransfersByToIdStddevPopulationToIdAsc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_TO_ID_ASC',
  TransfersByToIdStddevPopulationToIdDesc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_TO_ID_DESC',
  TransfersByToIdStddevPopulationValueAsc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_VALUE_ASC',
  TransfersByToIdStddevPopulationValueDesc = 'TRANSFERS_BY_TO_ID_STDDEV_POPULATION_VALUE_DESC',
  TransfersByToIdStddevSampleBlockIdAsc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_ID_ASC',
  TransfersByToIdStddevSampleBlockIdDesc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_ID_DESC',
  TransfersByToIdStddevSampleBlockNumberAsc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  TransfersByToIdStddevSampleBlockNumberDesc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  TransfersByToIdStddevSampleEventIndexAsc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  TransfersByToIdStddevSampleEventIndexDesc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  TransfersByToIdStddevSampleExtrinsicIndexAsc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  TransfersByToIdStddevSampleExtrinsicIndexDesc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  TransfersByToIdStddevSampleFromIdAsc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_FROM_ID_ASC',
  TransfersByToIdStddevSampleFromIdDesc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_FROM_ID_DESC',
  TransfersByToIdStddevSampleIdAsc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_ID_ASC',
  TransfersByToIdStddevSampleIdDesc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_ID_DESC',
  TransfersByToIdStddevSampleRemarkAsc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_REMARK_ASC',
  TransfersByToIdStddevSampleRemarkDesc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_REMARK_DESC',
  TransfersByToIdStddevSampleToIdAsc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_TO_ID_ASC',
  TransfersByToIdStddevSampleToIdDesc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_TO_ID_DESC',
  TransfersByToIdStddevSampleValueAsc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_VALUE_ASC',
  TransfersByToIdStddevSampleValueDesc = 'TRANSFERS_BY_TO_ID_STDDEV_SAMPLE_VALUE_DESC',
  TransfersByToIdSumBlockIdAsc = 'TRANSFERS_BY_TO_ID_SUM_BLOCK_ID_ASC',
  TransfersByToIdSumBlockIdDesc = 'TRANSFERS_BY_TO_ID_SUM_BLOCK_ID_DESC',
  TransfersByToIdSumBlockNumberAsc = 'TRANSFERS_BY_TO_ID_SUM_BLOCK_NUMBER_ASC',
  TransfersByToIdSumBlockNumberDesc = 'TRANSFERS_BY_TO_ID_SUM_BLOCK_NUMBER_DESC',
  TransfersByToIdSumEventIndexAsc = 'TRANSFERS_BY_TO_ID_SUM_EVENT_INDEX_ASC',
  TransfersByToIdSumEventIndexDesc = 'TRANSFERS_BY_TO_ID_SUM_EVENT_INDEX_DESC',
  TransfersByToIdSumExtrinsicIndexAsc = 'TRANSFERS_BY_TO_ID_SUM_EXTRINSIC_INDEX_ASC',
  TransfersByToIdSumExtrinsicIndexDesc = 'TRANSFERS_BY_TO_ID_SUM_EXTRINSIC_INDEX_DESC',
  TransfersByToIdSumFromIdAsc = 'TRANSFERS_BY_TO_ID_SUM_FROM_ID_ASC',
  TransfersByToIdSumFromIdDesc = 'TRANSFERS_BY_TO_ID_SUM_FROM_ID_DESC',
  TransfersByToIdSumIdAsc = 'TRANSFERS_BY_TO_ID_SUM_ID_ASC',
  TransfersByToIdSumIdDesc = 'TRANSFERS_BY_TO_ID_SUM_ID_DESC',
  TransfersByToIdSumRemarkAsc = 'TRANSFERS_BY_TO_ID_SUM_REMARK_ASC',
  TransfersByToIdSumRemarkDesc = 'TRANSFERS_BY_TO_ID_SUM_REMARK_DESC',
  TransfersByToIdSumToIdAsc = 'TRANSFERS_BY_TO_ID_SUM_TO_ID_ASC',
  TransfersByToIdSumToIdDesc = 'TRANSFERS_BY_TO_ID_SUM_TO_ID_DESC',
  TransfersByToIdSumValueAsc = 'TRANSFERS_BY_TO_ID_SUM_VALUE_ASC',
  TransfersByToIdSumValueDesc = 'TRANSFERS_BY_TO_ID_SUM_VALUE_DESC',
  TransfersByToIdVariancePopulationBlockIdAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_ID_ASC',
  TransfersByToIdVariancePopulationBlockIdDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_ID_DESC',
  TransfersByToIdVariancePopulationBlockNumberAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  TransfersByToIdVariancePopulationBlockNumberDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  TransfersByToIdVariancePopulationEventIndexAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  TransfersByToIdVariancePopulationEventIndexDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  TransfersByToIdVariancePopulationExtrinsicIndexAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  TransfersByToIdVariancePopulationExtrinsicIndexDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  TransfersByToIdVariancePopulationFromIdAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_FROM_ID_ASC',
  TransfersByToIdVariancePopulationFromIdDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_FROM_ID_DESC',
  TransfersByToIdVariancePopulationIdAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_ID_ASC',
  TransfersByToIdVariancePopulationIdDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_ID_DESC',
  TransfersByToIdVariancePopulationRemarkAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_REMARK_ASC',
  TransfersByToIdVariancePopulationRemarkDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_REMARK_DESC',
  TransfersByToIdVariancePopulationToIdAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_TO_ID_ASC',
  TransfersByToIdVariancePopulationToIdDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_TO_ID_DESC',
  TransfersByToIdVariancePopulationValueAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_VALUE_ASC',
  TransfersByToIdVariancePopulationValueDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_POPULATION_VALUE_DESC',
  TransfersByToIdVarianceSampleBlockIdAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  TransfersByToIdVarianceSampleBlockIdDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  TransfersByToIdVarianceSampleBlockNumberAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  TransfersByToIdVarianceSampleBlockNumberDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  TransfersByToIdVarianceSampleEventIndexAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  TransfersByToIdVarianceSampleEventIndexDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  TransfersByToIdVarianceSampleExtrinsicIndexAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  TransfersByToIdVarianceSampleExtrinsicIndexDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  TransfersByToIdVarianceSampleFromIdAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_FROM_ID_ASC',
  TransfersByToIdVarianceSampleFromIdDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_FROM_ID_DESC',
  TransfersByToIdVarianceSampleIdAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_ID_ASC',
  TransfersByToIdVarianceSampleIdDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_ID_DESC',
  TransfersByToIdVarianceSampleRemarkAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_REMARK_ASC',
  TransfersByToIdVarianceSampleRemarkDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_REMARK_DESC',
  TransfersByToIdVarianceSampleToIdAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_TO_ID_ASC',
  TransfersByToIdVarianceSampleToIdDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_TO_ID_DESC',
  TransfersByToIdVarianceSampleValueAsc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_VALUE_ASC',
  TransfersByToIdVarianceSampleValueDesc = 'TRANSFERS_BY_TO_ID_VARIANCE_SAMPLE_VALUE_DESC'
}

export type AssetTransfer = Node & {
  __typename?: 'AssetTransfer';
  asset: Scalars['BigFloat']['output'];
  /** Reads a single `Block` that is related to this `AssetTransfer`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  eventIndex: Scalars['Int']['output'];
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Reads a single `Account` that is related to this `AssetTransfer`. */
  from?: Maybe<Account>;
  fromId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  remark?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Account` that is related to this `AssetTransfer`. */
  to?: Maybe<Account>;
  toId: Scalars['String']['output'];
  value: Scalars['BigFloat']['output'];
};

export type AssetTransferAggregates = {
  __typename?: 'AssetTransferAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<AssetTransferAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<AssetTransferDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<AssetTransferMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<AssetTransferMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<AssetTransferStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<AssetTransferStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<AssetTransferSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<AssetTransferVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<AssetTransferVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `AssetTransfer` object types. */
export type AssetTransferAggregatesFilter = {
  /** Mean average aggregate over matching `AssetTransfer` objects. */
  average?: InputMaybe<AssetTransferAverageAggregateFilter>;
  /** Distinct count aggregate over matching `AssetTransfer` objects. */
  distinctCount?: InputMaybe<AssetTransferDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `AssetTransfer` object to be included within the aggregate. */
  filter?: InputMaybe<AssetTransferFilter>;
  /** Maximum aggregate over matching `AssetTransfer` objects. */
  max?: InputMaybe<AssetTransferMaxAggregateFilter>;
  /** Minimum aggregate over matching `AssetTransfer` objects. */
  min?: InputMaybe<AssetTransferMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `AssetTransfer` objects. */
  stddevPopulation?: InputMaybe<AssetTransferStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `AssetTransfer` objects. */
  stddevSample?: InputMaybe<AssetTransferStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `AssetTransfer` objects. */
  sum?: InputMaybe<AssetTransferSumAggregateFilter>;
  /** Population variance aggregate over matching `AssetTransfer` objects. */
  variancePopulation?: InputMaybe<AssetTransferVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `AssetTransfer` objects. */
  varianceSample?: InputMaybe<AssetTransferVarianceSampleAggregateFilter>;
};

export type AssetTransferAverageAggregateFilter = {
  asset?: InputMaybe<BigFloatFilter>;
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type AssetTransferAverageAggregates = {
  __typename?: 'AssetTransferAverageAggregates';
  /** Mean average of asset across the matching connection */
  asset?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type AssetTransferDistinctCountAggregateFilter = {
  asset?: InputMaybe<BigIntFilter>;
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  fromId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  remark?: InputMaybe<BigIntFilter>;
  toId?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigIntFilter>;
};

export type AssetTransferDistinctCountAggregates = {
  __typename?: 'AssetTransferDistinctCountAggregates';
  /** Distinct count of asset across the matching connection */
  asset?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of fromId across the matching connection */
  fromId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of remark across the matching connection */
  remark?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of toId across the matching connection */
  toId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of value across the matching connection */
  value?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `AssetTransfer` object types. All fields are combined with a logical ‘and.’ */
export type AssetTransferFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AssetTransferFilter>>;
  /** Filter by the object’s `asset` field. */
  asset?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `eventIndex` field. */
  eventIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `extrinsicIndex` field. */
  extrinsicIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `from` relation. */
  from?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `fromId` field. */
  fromId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<AssetTransferFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AssetTransferFilter>>;
  /** Filter by the object’s `remark` field. */
  remark?: InputMaybe<StringFilter>;
  /** Filter by the object’s `to` relation. */
  to?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `toId` field. */
  toId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<BigFloatFilter>;
};

export type AssetTransferMaxAggregateFilter = {
  asset?: InputMaybe<BigFloatFilter>;
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type AssetTransferMaxAggregates = {
  __typename?: 'AssetTransferMaxAggregates';
  /** Maximum of asset across the matching connection */
  asset?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type AssetTransferMinAggregateFilter = {
  asset?: InputMaybe<BigFloatFilter>;
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type AssetTransferMinAggregates = {
  __typename?: 'AssetTransferMinAggregates';
  /** Minimum of asset across the matching connection */
  asset?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type AssetTransferStddevPopulationAggregateFilter = {
  asset?: InputMaybe<BigFloatFilter>;
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type AssetTransferStddevPopulationAggregates = {
  __typename?: 'AssetTransferStddevPopulationAggregates';
  /** Population standard deviation of asset across the matching connection */
  asset?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type AssetTransferStddevSampleAggregateFilter = {
  asset?: InputMaybe<BigFloatFilter>;
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type AssetTransferStddevSampleAggregates = {
  __typename?: 'AssetTransferStddevSampleAggregates';
  /** Sample standard deviation of asset across the matching connection */
  asset?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type AssetTransferSumAggregateFilter = {
  asset?: InputMaybe<BigFloatFilter>;
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type AssetTransferSumAggregates = {
  __typename?: 'AssetTransferSumAggregates';
  /** Sum of asset across the matching connection */
  asset: Scalars['BigFloat']['output'];
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of eventIndex across the matching connection */
  eventIndex: Scalars['BigInt']['output'];
  /** Sum of extrinsicIndex across the matching connection */
  extrinsicIndex: Scalars['BigInt']['output'];
  /** Sum of value across the matching connection */
  value: Scalars['BigFloat']['output'];
};

export type AssetTransferVariancePopulationAggregateFilter = {
  asset?: InputMaybe<BigFloatFilter>;
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type AssetTransferVariancePopulationAggregates = {
  __typename?: 'AssetTransferVariancePopulationAggregates';
  /** Population variance of asset across the matching connection */
  asset?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type AssetTransferVarianceSampleAggregateFilter = {
  asset?: InputMaybe<BigFloatFilter>;
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type AssetTransferVarianceSampleAggregates = {
  __typename?: 'AssetTransferVarianceSampleAggregates';
  /** Sample variance of asset across the matching connection */
  asset?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `AssetTransfer` values. */
export type AssetTransfersConnection = {
  __typename?: 'AssetTransfersConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AssetTransferAggregates>;
  /** A list of edges which contains the `AssetTransfer` and cursor to aid in pagination. */
  edges: Array<AssetTransfersEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AssetTransferAggregates>>;
  /** A list of `AssetTransfer` objects. */
  nodes: Array<Maybe<AssetTransfer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AssetTransfer` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `AssetTransfer` values. */
export type AssetTransfersConnectionGroupedAggregatesArgs = {
  groupBy: Array<AssetTransfersGroupBy>;
  having?: InputMaybe<AssetTransfersHavingInput>;
};

/** A `AssetTransfer` edge in the connection. */
export type AssetTransfersEdge = {
  __typename?: 'AssetTransfersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AssetTransfer` at the end of the edge. */
  node?: Maybe<AssetTransfer>;
};

/** Grouping methods for `AssetTransfer` for usage during aggregation. */
export enum AssetTransfersGroupBy {
  Asset = 'ASSET',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  FromId = 'FROM_ID',
  Remark = 'REMARK',
  ToId = 'TO_ID',
  Value = 'VALUE'
}

export type AssetTransfersHavingAverageInput = {
  asset?: InputMaybe<HavingBigfloatFilter>;
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type AssetTransfersHavingDistinctCountInput = {
  asset?: InputMaybe<HavingBigfloatFilter>;
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `AssetTransfer` aggregates. */
export type AssetTransfersHavingInput = {
  AND?: InputMaybe<Array<AssetTransfersHavingInput>>;
  OR?: InputMaybe<Array<AssetTransfersHavingInput>>;
  average?: InputMaybe<AssetTransfersHavingAverageInput>;
  distinctCount?: InputMaybe<AssetTransfersHavingDistinctCountInput>;
  max?: InputMaybe<AssetTransfersHavingMaxInput>;
  min?: InputMaybe<AssetTransfersHavingMinInput>;
  stddevPopulation?: InputMaybe<AssetTransfersHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<AssetTransfersHavingStddevSampleInput>;
  sum?: InputMaybe<AssetTransfersHavingSumInput>;
  variancePopulation?: InputMaybe<AssetTransfersHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<AssetTransfersHavingVarianceSampleInput>;
};

export type AssetTransfersHavingMaxInput = {
  asset?: InputMaybe<HavingBigfloatFilter>;
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type AssetTransfersHavingMinInput = {
  asset?: InputMaybe<HavingBigfloatFilter>;
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type AssetTransfersHavingStddevPopulationInput = {
  asset?: InputMaybe<HavingBigfloatFilter>;
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type AssetTransfersHavingStddevSampleInput = {
  asset?: InputMaybe<HavingBigfloatFilter>;
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type AssetTransfersHavingSumInput = {
  asset?: InputMaybe<HavingBigfloatFilter>;
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type AssetTransfersHavingVariancePopulationInput = {
  asset?: InputMaybe<HavingBigfloatFilter>;
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type AssetTransfersHavingVarianceSampleInput = {
  asset?: InputMaybe<HavingBigfloatFilter>;
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `AssetTransfer`. */
export enum AssetTransfersOrderBy {
  AssetAsc = 'ASSET_ASC',
  AssetDesc = 'ASSET_DESC',
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  EventIndexAsc = 'EVENT_INDEX_ASC',
  EventIndexDesc = 'EVENT_INDEX_DESC',
  ExtrinsicIndexAsc = 'EXTRINSIC_INDEX_ASC',
  ExtrinsicIndexDesc = 'EXTRINSIC_INDEX_DESC',
  FromIdAsc = 'FROM_ID_ASC',
  FromIdDesc = 'FROM_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RemarkAsc = 'REMARK_ASC',
  RemarkDesc = 'REMARK_DESC',
  ToIdAsc = 'TO_ID_ASC',
  ToIdDesc = 'TO_ID_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Block = Node & {
  __typename?: 'Block';
  /** Reads and enables pagination through a set of `Account`. */
  accountsByAssetTransferBlockIdAndFromId: BlockAccountsByAssetTransferBlockIdAndFromIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByAssetTransferBlockIdAndToId: BlockAccountsByAssetTransferBlockIdAndToIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByExtrinsicBlockIdAndSignerId: BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByMeritBlockIdAndFromId: BlockAccountsByMeritBlockIdAndFromIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByMeritBlockIdAndToId: BlockAccountsByMeritBlockIdAndToIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsBySoraBurnedBlockIdAndSenderId: BlockAccountsBySoraBurnedBlockIdAndSenderIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsBySoraMintedBlockIdAndRecipientId: BlockAccountsBySoraMintedBlockIdAndRecipientIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByStakingBlockIdAndUserId: BlockAccountsByStakingBlockIdAndUserIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByTaxPoolBlockIdAndAddressId: BlockAccountsByTaxPoolBlockIdAndAddressIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByTaxUnPoolBlockIdAndAddressId: BlockAccountsByTaxUnPoolBlockIdAndAddressIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByTransferBlockIdAndFromId: BlockAccountsByTransferBlockIdAndFromIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByTransferBlockIdAndToId: BlockAccountsByTransferBlockIdAndToIdManyToManyConnection;
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfers: AssetTransfersConnection;
  /** Reads and enables pagination through a set of `Event`. */
  events: EventsConnection;
  /** Reads and enables pagination through a set of `Extrinsic`. */
  extrinsics: ExtrinsicsConnection;
  /** Reads and enables pagination through a set of `Extrinsic`. */
  extrinsicsByEventBlockIdAndExtrinsicId: BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection;
  extrinsicsRoot?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Merit`. */
  merits: MeritsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  number: Scalars['BigFloat']['output'];
  parentHash?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `SoraBurned`. */
  soraBurneds: SoraBurnedsConnection;
  /** Reads and enables pagination through a set of `SoraMinted`. */
  soraMinteds: SoraMintedsConnection;
  specVersion?: Maybe<Scalars['Int']['output']>;
  /** Reads and enables pagination through a set of `Staking`. */
  stakings: StakingsConnection;
  stateRoot?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `TaxPool`. */
  taxPools: TaxPoolsConnection;
  /** Reads and enables pagination through a set of `TaxUnPool`. */
  taxUnPools: TaxUnPoolsConnection;
  timestamp?: Maybe<Scalars['Datetime']['output']>;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfers: TransfersConnection;
};


export type BlockAccountsByAssetTransferBlockIdAndFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByAssetTransferBlockIdAndToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByExtrinsicBlockIdAndSignerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByMeritBlockIdAndFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByMeritBlockIdAndToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsBySoraBurnedBlockIdAndSenderIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsBySoraMintedBlockIdAndRecipientIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByStakingBlockIdAndUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByTaxPoolBlockIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByTaxUnPoolBlockIdAndAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByTransferBlockIdAndFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAccountsByTransferBlockIdAndToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type BlockAssetTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};


export type BlockEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


export type BlockExtrinsicsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Extrinsics_Distinct_Enum>>>;
  filter?: InputMaybe<ExtrinsicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};


export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Extrinsics_Distinct_Enum>>>;
  filter?: InputMaybe<ExtrinsicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};


export type BlockMeritsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};


export type BlockSoraBurnedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Burneds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraBurnedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraBurnedsOrderBy>>;
};


export type BlockSoraMintedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Minteds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraMintedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraMintedsOrderBy>>;
};


export type BlockStakingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Stakings_Distinct_Enum>>>;
  filter?: InputMaybe<StakingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StakingsOrderBy>>;
};


export type BlockTaxPoolsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxPoolsOrderBy>>;
};


export type BlockTaxUnPoolsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Un_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxUnPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxUnPoolsOrderBy>>;
};


export type BlockTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `AssetTransfer`. */
export type BlockAccountsByAssetTransferBlockIdAndFromIdManyToManyConnection = {
  __typename?: 'BlockAccountsByAssetTransferBlockIdAndFromIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `AssetTransfer`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByAssetTransferBlockIdAndFromIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `AssetTransfer`. */
export type BlockAccountsByAssetTransferBlockIdAndFromIdManyToManyEdge = {
  __typename?: 'BlockAccountsByAssetTransferBlockIdAndFromIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfersByFromId: AssetTransfersConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `AssetTransfer`. */
export type BlockAccountsByAssetTransferBlockIdAndFromIdManyToManyEdgeAssetTransfersByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `AssetTransfer`. */
export type BlockAccountsByAssetTransferBlockIdAndToIdManyToManyConnection = {
  __typename?: 'BlockAccountsByAssetTransferBlockIdAndToIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `AssetTransfer`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByAssetTransferBlockIdAndToIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `AssetTransfer`. */
export type BlockAccountsByAssetTransferBlockIdAndToIdManyToManyEdge = {
  __typename?: 'BlockAccountsByAssetTransferBlockIdAndToIdManyToManyEdge';
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfersByToId: AssetTransfersConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `AssetTransfer`. */
export type BlockAccountsByAssetTransferBlockIdAndToIdManyToManyEdgeAssetTransfersByToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Extrinsic`. */
export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection = {
  __typename?: 'BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Extrinsic`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Extrinsic`. */
export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge = {
  __typename?: 'BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Extrinsic`. */
  extrinsics: ExtrinsicsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Extrinsic`. */
export type BlockAccountsByExtrinsicBlockIdAndSignerIdManyToManyEdgeExtrinsicsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Extrinsics_Distinct_Enum>>>;
  filter?: InputMaybe<ExtrinsicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Merit`. */
export type BlockAccountsByMeritBlockIdAndFromIdManyToManyConnection = {
  __typename?: 'BlockAccountsByMeritBlockIdAndFromIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Merit`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByMeritBlockIdAndFromIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Merit`. */
export type BlockAccountsByMeritBlockIdAndFromIdManyToManyEdge = {
  __typename?: 'BlockAccountsByMeritBlockIdAndFromIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Merit`. */
  meritsByFromId: MeritsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Merit`. */
export type BlockAccountsByMeritBlockIdAndFromIdManyToManyEdgeMeritsByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Merit`. */
export type BlockAccountsByMeritBlockIdAndToIdManyToManyConnection = {
  __typename?: 'BlockAccountsByMeritBlockIdAndToIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Merit`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByMeritBlockIdAndToIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Merit`. */
export type BlockAccountsByMeritBlockIdAndToIdManyToManyEdge = {
  __typename?: 'BlockAccountsByMeritBlockIdAndToIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Merit`. */
  meritsByToId: MeritsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Merit`. */
export type BlockAccountsByMeritBlockIdAndToIdManyToManyEdgeMeritsByToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `SoraBurned`. */
export type BlockAccountsBySoraBurnedBlockIdAndSenderIdManyToManyConnection = {
  __typename?: 'BlockAccountsBySoraBurnedBlockIdAndSenderIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `SoraBurned`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsBySoraBurnedBlockIdAndSenderIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `SoraBurned`. */
export type BlockAccountsBySoraBurnedBlockIdAndSenderIdManyToManyEdge = {
  __typename?: 'BlockAccountsBySoraBurnedBlockIdAndSenderIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `SoraBurned`. */
  soraBurnedsBySenderId: SoraBurnedsConnection;
};


/** A `Account` edge in the connection, with data from `SoraBurned`. */
export type BlockAccountsBySoraBurnedBlockIdAndSenderIdManyToManyEdgeSoraBurnedsBySenderIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Burneds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraBurnedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraBurnedsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `SoraMinted`. */
export type BlockAccountsBySoraMintedBlockIdAndRecipientIdManyToManyConnection = {
  __typename?: 'BlockAccountsBySoraMintedBlockIdAndRecipientIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `SoraMinted`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsBySoraMintedBlockIdAndRecipientIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `SoraMinted`. */
export type BlockAccountsBySoraMintedBlockIdAndRecipientIdManyToManyEdge = {
  __typename?: 'BlockAccountsBySoraMintedBlockIdAndRecipientIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `SoraMinted`. */
  soraMintedsByRecipientId: SoraMintedsConnection;
};


/** A `Account` edge in the connection, with data from `SoraMinted`. */
export type BlockAccountsBySoraMintedBlockIdAndRecipientIdManyToManyEdgeSoraMintedsByRecipientIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Minteds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraMintedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraMintedsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Staking`. */
export type BlockAccountsByStakingBlockIdAndUserIdManyToManyConnection = {
  __typename?: 'BlockAccountsByStakingBlockIdAndUserIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Staking`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByStakingBlockIdAndUserIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Staking`. */
export type BlockAccountsByStakingBlockIdAndUserIdManyToManyEdge = {
  __typename?: 'BlockAccountsByStakingBlockIdAndUserIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `Staking`. */
  stakingsByUserId: StakingsConnection;
};


/** A `Account` edge in the connection, with data from `Staking`. */
export type BlockAccountsByStakingBlockIdAndUserIdManyToManyEdgeStakingsByUserIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Stakings_Distinct_Enum>>>;
  filter?: InputMaybe<StakingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StakingsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `TaxPool`. */
export type BlockAccountsByTaxPoolBlockIdAndAddressIdManyToManyConnection = {
  __typename?: 'BlockAccountsByTaxPoolBlockIdAndAddressIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `TaxPool`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByTaxPoolBlockIdAndAddressIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `TaxPool`. */
export type BlockAccountsByTaxPoolBlockIdAndAddressIdManyToManyEdge = {
  __typename?: 'BlockAccountsByTaxPoolBlockIdAndAddressIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `TaxPool`. */
  taxPoolsByAddressId: TaxPoolsConnection;
};


/** A `Account` edge in the connection, with data from `TaxPool`. */
export type BlockAccountsByTaxPoolBlockIdAndAddressIdManyToManyEdgeTaxPoolsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxPoolsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `TaxUnPool`. */
export type BlockAccountsByTaxUnPoolBlockIdAndAddressIdManyToManyConnection = {
  __typename?: 'BlockAccountsByTaxUnPoolBlockIdAndAddressIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `TaxUnPool`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByTaxUnPoolBlockIdAndAddressIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `TaxUnPool`. */
export type BlockAccountsByTaxUnPoolBlockIdAndAddressIdManyToManyEdge = {
  __typename?: 'BlockAccountsByTaxUnPoolBlockIdAndAddressIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `TaxUnPool`. */
  taxUnPoolsByAddressId: TaxUnPoolsConnection;
};


/** A `Account` edge in the connection, with data from `TaxUnPool`. */
export type BlockAccountsByTaxUnPoolBlockIdAndAddressIdManyToManyEdgeTaxUnPoolsByAddressIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Un_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxUnPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxUnPoolsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type BlockAccountsByTransferBlockIdAndFromIdManyToManyConnection = {
  __typename?: 'BlockAccountsByTransferBlockIdAndFromIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Transfer`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByTransferBlockIdAndFromIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type BlockAccountsByTransferBlockIdAndFromIdManyToManyEdge = {
  __typename?: 'BlockAccountsByTransferBlockIdAndFromIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfersByFromId: TransfersConnection;
};


/** A `Account` edge in the connection, with data from `Transfer`. */
export type BlockAccountsByTransferBlockIdAndFromIdManyToManyEdgeTransfersByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Transfer`. */
export type BlockAccountsByTransferBlockIdAndToIdManyToManyConnection = {
  __typename?: 'BlockAccountsByTransferBlockIdAndToIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Transfer`, and the cursor to aid in pagination. */
  edges: Array<BlockAccountsByTransferBlockIdAndToIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `Transfer`. */
export type BlockAccountsByTransferBlockIdAndToIdManyToManyEdge = {
  __typename?: 'BlockAccountsByTransferBlockIdAndToIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfersByToId: TransfersConnection;
};


/** A `Account` edge in the connection, with data from `Transfer`. */
export type BlockAccountsByTransferBlockIdAndToIdManyToManyEdgeTransfersByToIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

export type BlockAggregates = {
  __typename?: 'BlockAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<BlockAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<BlockDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<BlockMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<BlockMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<BlockStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<BlockStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<BlockSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<BlockVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<BlockVarianceSampleAggregates>;
};

export type BlockAverageAggregates = {
  __typename?: 'BlockAverageAggregates';
  /** Mean average of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of specVersion across the matching connection */
  specVersion?: Maybe<Scalars['BigFloat']['output']>;
};

export type BlockDistinctCountAggregates = {
  __typename?: 'BlockDistinctCountAggregates';
  /** Distinct count of extrinsicsRoot across the matching connection */
  extrinsicsRoot?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of hash across the matching connection */
  hash?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of number across the matching connection */
  number?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of parentHash across the matching connection */
  parentHash?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of specVersion across the matching connection */
  specVersion?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of stateRoot across the matching connection */
  stateRoot?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of timestamp across the matching connection */
  timestamp?: Maybe<Scalars['BigInt']['output']>;
};

/** A connection to a list of `Extrinsic` values, with data from `Event`. */
export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ExtrinsicAggregates>;
  /** A list of edges which contains the `Extrinsic`, info from the `Event`, and the cursor to aid in pagination. */
  edges: Array<BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
  /** A list of `Extrinsic` objects. */
  nodes: Array<Maybe<Extrinsic>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Extrinsic` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Extrinsic` values, with data from `Event`. */
export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<ExtrinsicsGroupBy>;
  having?: InputMaybe<ExtrinsicsHavingInput>;
};

/** A `Extrinsic` edge in the connection, with data from `Event`. */
export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Event`. */
  events: EventsConnection;
  /** The `Extrinsic` at the end of the edge. */
  node?: Maybe<Extrinsic>;
};


/** A `Extrinsic` edge in the connection, with data from `Event`. */
export type BlockExtrinsicsByEventBlockIdAndExtrinsicIdManyToManyEdgeEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** A filter to be used against `Block` object types. All fields are combined with a logical ‘and.’ */
export type BlockFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BlockFilter>>;
  /** Filter by the object’s `assetTransfers` relation. */
  assetTransfers?: InputMaybe<BlockToManyAssetTransferFilter>;
  /** Some related `assetTransfers` exist. */
  assetTransfersExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `events` relation. */
  events?: InputMaybe<BlockToManyEventFilter>;
  /** Some related `events` exist. */
  eventsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `extrinsics` relation. */
  extrinsics?: InputMaybe<BlockToManyExtrinsicFilter>;
  /** Some related `extrinsics` exist. */
  extrinsicsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `extrinsicsRoot` field. */
  extrinsicsRoot?: InputMaybe<StringFilter>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `merits` relation. */
  merits?: InputMaybe<BlockToManyMeritFilter>;
  /** Some related `merits` exist. */
  meritsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Negates the expression. */
  not?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `number` field. */
  number?: InputMaybe<BigFloatFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BlockFilter>>;
  /** Filter by the object’s `parentHash` field. */
  parentHash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `soraBurneds` relation. */
  soraBurneds?: InputMaybe<BlockToManySoraBurnedFilter>;
  /** Some related `soraBurneds` exist. */
  soraBurnedsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `soraMinteds` relation. */
  soraMinteds?: InputMaybe<BlockToManySoraMintedFilter>;
  /** Some related `soraMinteds` exist. */
  soraMintedsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `specVersion` field. */
  specVersion?: InputMaybe<IntFilter>;
  /** Filter by the object’s `stakings` relation. */
  stakings?: InputMaybe<BlockToManyStakingFilter>;
  /** Some related `stakings` exist. */
  stakingsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `stateRoot` field. */
  stateRoot?: InputMaybe<StringFilter>;
  /** Filter by the object’s `taxPools` relation. */
  taxPools?: InputMaybe<BlockToManyTaxPoolFilter>;
  /** Some related `taxPools` exist. */
  taxPoolsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `taxUnPools` relation. */
  taxUnPools?: InputMaybe<BlockToManyTaxUnPoolFilter>;
  /** Some related `taxUnPools` exist. */
  taxUnPoolsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `transfers` relation. */
  transfers?: InputMaybe<BlockToManyTransferFilter>;
  /** Some related `transfers` exist. */
  transfersExist?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlockMaxAggregates = {
  __typename?: 'BlockMaxAggregates';
  /** Maximum of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of specVersion across the matching connection */
  specVersion?: Maybe<Scalars['Int']['output']>;
};

export type BlockMinAggregates = {
  __typename?: 'BlockMinAggregates';
  /** Minimum of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of specVersion across the matching connection */
  specVersion?: Maybe<Scalars['Int']['output']>;
};

export type BlockStddevPopulationAggregates = {
  __typename?: 'BlockStddevPopulationAggregates';
  /** Population standard deviation of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of specVersion across the matching connection */
  specVersion?: Maybe<Scalars['BigFloat']['output']>;
};

export type BlockStddevSampleAggregates = {
  __typename?: 'BlockStddevSampleAggregates';
  /** Sample standard deviation of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of specVersion across the matching connection */
  specVersion?: Maybe<Scalars['BigFloat']['output']>;
};

export type BlockSumAggregates = {
  __typename?: 'BlockSumAggregates';
  /** Sum of number across the matching connection */
  number: Scalars['BigFloat']['output'];
  /** Sum of specVersion across the matching connection */
  specVersion: Scalars['BigInt']['output'];
};

/** A filter to be used against many `AssetTransfer` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManyAssetTransferFilter = {
  /** Aggregates across related `AssetTransfer` match the filter criteria. */
  aggregates?: InputMaybe<AssetTransferAggregatesFilter>;
  /** Every related `AssetTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<AssetTransferFilter>;
  /** No related `AssetTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<AssetTransferFilter>;
  /** Some related `AssetTransfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<AssetTransferFilter>;
};

/** A filter to be used against many `Event` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManyEventFilter = {
  /** Aggregates across related `Event` match the filter criteria. */
  aggregates?: InputMaybe<EventAggregatesFilter>;
  /** Every related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<EventFilter>;
  /** No related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<EventFilter>;
  /** Some related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<EventFilter>;
};

/** A filter to be used against many `Extrinsic` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManyExtrinsicFilter = {
  /** Aggregates across related `Extrinsic` match the filter criteria. */
  aggregates?: InputMaybe<ExtrinsicAggregatesFilter>;
  /** Every related `Extrinsic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ExtrinsicFilter>;
  /** No related `Extrinsic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ExtrinsicFilter>;
  /** Some related `Extrinsic` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ExtrinsicFilter>;
};

/** A filter to be used against many `Merit` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManyMeritFilter = {
  /** Aggregates across related `Merit` match the filter criteria. */
  aggregates?: InputMaybe<MeritAggregatesFilter>;
  /** Every related `Merit` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<MeritFilter>;
  /** No related `Merit` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<MeritFilter>;
  /** Some related `Merit` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<MeritFilter>;
};

/** A filter to be used against many `SoraBurned` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManySoraBurnedFilter = {
  /** Aggregates across related `SoraBurned` match the filter criteria. */
  aggregates?: InputMaybe<SoraBurnedAggregatesFilter>;
  /** Every related `SoraBurned` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<SoraBurnedFilter>;
  /** No related `SoraBurned` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<SoraBurnedFilter>;
  /** Some related `SoraBurned` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<SoraBurnedFilter>;
};

/** A filter to be used against many `SoraMinted` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManySoraMintedFilter = {
  /** Aggregates across related `SoraMinted` match the filter criteria. */
  aggregates?: InputMaybe<SoraMintedAggregatesFilter>;
  /** Every related `SoraMinted` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<SoraMintedFilter>;
  /** No related `SoraMinted` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<SoraMintedFilter>;
  /** Some related `SoraMinted` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<SoraMintedFilter>;
};

/** A filter to be used against many `Staking` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManyStakingFilter = {
  /** Aggregates across related `Staking` match the filter criteria. */
  aggregates?: InputMaybe<StakingAggregatesFilter>;
  /** Every related `Staking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<StakingFilter>;
  /** No related `Staking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<StakingFilter>;
  /** Some related `Staking` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<StakingFilter>;
};

/** A filter to be used against many `TaxPool` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManyTaxPoolFilter = {
  /** Aggregates across related `TaxPool` match the filter criteria. */
  aggregates?: InputMaybe<TaxPoolAggregatesFilter>;
  /** Every related `TaxPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TaxPoolFilter>;
  /** No related `TaxPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TaxPoolFilter>;
  /** Some related `TaxPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TaxPoolFilter>;
};

/** A filter to be used against many `TaxUnPool` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManyTaxUnPoolFilter = {
  /** Aggregates across related `TaxUnPool` match the filter criteria. */
  aggregates?: InputMaybe<TaxUnPoolAggregatesFilter>;
  /** Every related `TaxUnPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TaxUnPoolFilter>;
  /** No related `TaxUnPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TaxUnPoolFilter>;
  /** Some related `TaxUnPool` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TaxUnPoolFilter>;
};

/** A filter to be used against many `Transfer` object types. All fields are combined with a logical ‘and.’ */
export type BlockToManyTransferFilter = {
  /** Aggregates across related `Transfer` match the filter criteria. */
  aggregates?: InputMaybe<TransferAggregatesFilter>;
  /** Every related `Transfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<TransferFilter>;
  /** No related `Transfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<TransferFilter>;
  /** Some related `Transfer` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<TransferFilter>;
};

export type BlockVariancePopulationAggregates = {
  __typename?: 'BlockVariancePopulationAggregates';
  /** Population variance of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of specVersion across the matching connection */
  specVersion?: Maybe<Scalars['BigFloat']['output']>;
};

export type BlockVarianceSampleAggregates = {
  __typename?: 'BlockVarianceSampleAggregates';
  /** Sample variance of number across the matching connection */
  number?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of specVersion across the matching connection */
  specVersion?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `Block` values. */
export type BlocksConnection = {
  __typename?: 'BlocksConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block` and cursor to aid in pagination. */
  edges: Array<BlocksEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values. */
export type BlocksConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection. */
export type BlocksEdge = {
  __typename?: 'BlocksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
};

/** Grouping methods for `Block` for usage during aggregation. */
export enum BlocksGroupBy {
  ExtrinsicsRoot = 'EXTRINSICS_ROOT',
  Hash = 'HASH',
  ParentHash = 'PARENT_HASH',
  SpecVersion = 'SPEC_VERSION',
  StateRoot = 'STATE_ROOT',
  Timestamp = 'TIMESTAMP',
  TimestampTruncatedToDay = 'TIMESTAMP_TRUNCATED_TO_DAY',
  TimestampTruncatedToHour = 'TIMESTAMP_TRUNCATED_TO_HOUR'
}

export type BlocksHavingAverageInput = {
  number?: InputMaybe<HavingBigfloatFilter>;
  specVersion?: InputMaybe<HavingIntFilter>;
  timestamp?: InputMaybe<HavingDatetimeFilter>;
};

export type BlocksHavingDistinctCountInput = {
  number?: InputMaybe<HavingBigfloatFilter>;
  specVersion?: InputMaybe<HavingIntFilter>;
  timestamp?: InputMaybe<HavingDatetimeFilter>;
};

/** Conditions for `Block` aggregates. */
export type BlocksHavingInput = {
  AND?: InputMaybe<Array<BlocksHavingInput>>;
  OR?: InputMaybe<Array<BlocksHavingInput>>;
  average?: InputMaybe<BlocksHavingAverageInput>;
  distinctCount?: InputMaybe<BlocksHavingDistinctCountInput>;
  max?: InputMaybe<BlocksHavingMaxInput>;
  min?: InputMaybe<BlocksHavingMinInput>;
  stddevPopulation?: InputMaybe<BlocksHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<BlocksHavingStddevSampleInput>;
  sum?: InputMaybe<BlocksHavingSumInput>;
  variancePopulation?: InputMaybe<BlocksHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<BlocksHavingVarianceSampleInput>;
};

export type BlocksHavingMaxInput = {
  number?: InputMaybe<HavingBigfloatFilter>;
  specVersion?: InputMaybe<HavingIntFilter>;
  timestamp?: InputMaybe<HavingDatetimeFilter>;
};

export type BlocksHavingMinInput = {
  number?: InputMaybe<HavingBigfloatFilter>;
  specVersion?: InputMaybe<HavingIntFilter>;
  timestamp?: InputMaybe<HavingDatetimeFilter>;
};

export type BlocksHavingStddevPopulationInput = {
  number?: InputMaybe<HavingBigfloatFilter>;
  specVersion?: InputMaybe<HavingIntFilter>;
  timestamp?: InputMaybe<HavingDatetimeFilter>;
};

export type BlocksHavingStddevSampleInput = {
  number?: InputMaybe<HavingBigfloatFilter>;
  specVersion?: InputMaybe<HavingIntFilter>;
  timestamp?: InputMaybe<HavingDatetimeFilter>;
};

export type BlocksHavingSumInput = {
  number?: InputMaybe<HavingBigfloatFilter>;
  specVersion?: InputMaybe<HavingIntFilter>;
  timestamp?: InputMaybe<HavingDatetimeFilter>;
};

export type BlocksHavingVariancePopulationInput = {
  number?: InputMaybe<HavingBigfloatFilter>;
  specVersion?: InputMaybe<HavingIntFilter>;
  timestamp?: InputMaybe<HavingDatetimeFilter>;
};

export type BlocksHavingVarianceSampleInput = {
  number?: InputMaybe<HavingBigfloatFilter>;
  specVersion?: InputMaybe<HavingIntFilter>;
  timestamp?: InputMaybe<HavingDatetimeFilter>;
};

/** Methods to use when ordering `Block`. */
export enum BlocksOrderBy {
  AssetTransfersAverageAssetAsc = 'ASSET_TRANSFERS_AVERAGE_ASSET_ASC',
  AssetTransfersAverageAssetDesc = 'ASSET_TRANSFERS_AVERAGE_ASSET_DESC',
  AssetTransfersAverageBlockIdAsc = 'ASSET_TRANSFERS_AVERAGE_BLOCK_ID_ASC',
  AssetTransfersAverageBlockIdDesc = 'ASSET_TRANSFERS_AVERAGE_BLOCK_ID_DESC',
  AssetTransfersAverageBlockNumberAsc = 'ASSET_TRANSFERS_AVERAGE_BLOCK_NUMBER_ASC',
  AssetTransfersAverageBlockNumberDesc = 'ASSET_TRANSFERS_AVERAGE_BLOCK_NUMBER_DESC',
  AssetTransfersAverageEventIndexAsc = 'ASSET_TRANSFERS_AVERAGE_EVENT_INDEX_ASC',
  AssetTransfersAverageEventIndexDesc = 'ASSET_TRANSFERS_AVERAGE_EVENT_INDEX_DESC',
  AssetTransfersAverageExtrinsicIndexAsc = 'ASSET_TRANSFERS_AVERAGE_EXTRINSIC_INDEX_ASC',
  AssetTransfersAverageExtrinsicIndexDesc = 'ASSET_TRANSFERS_AVERAGE_EXTRINSIC_INDEX_DESC',
  AssetTransfersAverageFromIdAsc = 'ASSET_TRANSFERS_AVERAGE_FROM_ID_ASC',
  AssetTransfersAverageFromIdDesc = 'ASSET_TRANSFERS_AVERAGE_FROM_ID_DESC',
  AssetTransfersAverageIdAsc = 'ASSET_TRANSFERS_AVERAGE_ID_ASC',
  AssetTransfersAverageIdDesc = 'ASSET_TRANSFERS_AVERAGE_ID_DESC',
  AssetTransfersAverageRemarkAsc = 'ASSET_TRANSFERS_AVERAGE_REMARK_ASC',
  AssetTransfersAverageRemarkDesc = 'ASSET_TRANSFERS_AVERAGE_REMARK_DESC',
  AssetTransfersAverageToIdAsc = 'ASSET_TRANSFERS_AVERAGE_TO_ID_ASC',
  AssetTransfersAverageToIdDesc = 'ASSET_TRANSFERS_AVERAGE_TO_ID_DESC',
  AssetTransfersAverageValueAsc = 'ASSET_TRANSFERS_AVERAGE_VALUE_ASC',
  AssetTransfersAverageValueDesc = 'ASSET_TRANSFERS_AVERAGE_VALUE_DESC',
  AssetTransfersCountAsc = 'ASSET_TRANSFERS_COUNT_ASC',
  AssetTransfersCountDesc = 'ASSET_TRANSFERS_COUNT_DESC',
  AssetTransfersDistinctCountAssetAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_ASSET_ASC',
  AssetTransfersDistinctCountAssetDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_ASSET_DESC',
  AssetTransfersDistinctCountBlockIdAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_BLOCK_ID_ASC',
  AssetTransfersDistinctCountBlockIdDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_BLOCK_ID_DESC',
  AssetTransfersDistinctCountBlockNumberAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  AssetTransfersDistinctCountBlockNumberDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  AssetTransfersDistinctCountEventIndexAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_EVENT_INDEX_ASC',
  AssetTransfersDistinctCountEventIndexDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_EVENT_INDEX_DESC',
  AssetTransfersDistinctCountExtrinsicIndexAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  AssetTransfersDistinctCountExtrinsicIndexDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  AssetTransfersDistinctCountFromIdAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_FROM_ID_ASC',
  AssetTransfersDistinctCountFromIdDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_FROM_ID_DESC',
  AssetTransfersDistinctCountIdAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_ID_ASC',
  AssetTransfersDistinctCountIdDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_ID_DESC',
  AssetTransfersDistinctCountRemarkAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_REMARK_ASC',
  AssetTransfersDistinctCountRemarkDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_REMARK_DESC',
  AssetTransfersDistinctCountToIdAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_TO_ID_ASC',
  AssetTransfersDistinctCountToIdDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_TO_ID_DESC',
  AssetTransfersDistinctCountValueAsc = 'ASSET_TRANSFERS_DISTINCT_COUNT_VALUE_ASC',
  AssetTransfersDistinctCountValueDesc = 'ASSET_TRANSFERS_DISTINCT_COUNT_VALUE_DESC',
  AssetTransfersMaxAssetAsc = 'ASSET_TRANSFERS_MAX_ASSET_ASC',
  AssetTransfersMaxAssetDesc = 'ASSET_TRANSFERS_MAX_ASSET_DESC',
  AssetTransfersMaxBlockIdAsc = 'ASSET_TRANSFERS_MAX_BLOCK_ID_ASC',
  AssetTransfersMaxBlockIdDesc = 'ASSET_TRANSFERS_MAX_BLOCK_ID_DESC',
  AssetTransfersMaxBlockNumberAsc = 'ASSET_TRANSFERS_MAX_BLOCK_NUMBER_ASC',
  AssetTransfersMaxBlockNumberDesc = 'ASSET_TRANSFERS_MAX_BLOCK_NUMBER_DESC',
  AssetTransfersMaxEventIndexAsc = 'ASSET_TRANSFERS_MAX_EVENT_INDEX_ASC',
  AssetTransfersMaxEventIndexDesc = 'ASSET_TRANSFERS_MAX_EVENT_INDEX_DESC',
  AssetTransfersMaxExtrinsicIndexAsc = 'ASSET_TRANSFERS_MAX_EXTRINSIC_INDEX_ASC',
  AssetTransfersMaxExtrinsicIndexDesc = 'ASSET_TRANSFERS_MAX_EXTRINSIC_INDEX_DESC',
  AssetTransfersMaxFromIdAsc = 'ASSET_TRANSFERS_MAX_FROM_ID_ASC',
  AssetTransfersMaxFromIdDesc = 'ASSET_TRANSFERS_MAX_FROM_ID_DESC',
  AssetTransfersMaxIdAsc = 'ASSET_TRANSFERS_MAX_ID_ASC',
  AssetTransfersMaxIdDesc = 'ASSET_TRANSFERS_MAX_ID_DESC',
  AssetTransfersMaxRemarkAsc = 'ASSET_TRANSFERS_MAX_REMARK_ASC',
  AssetTransfersMaxRemarkDesc = 'ASSET_TRANSFERS_MAX_REMARK_DESC',
  AssetTransfersMaxToIdAsc = 'ASSET_TRANSFERS_MAX_TO_ID_ASC',
  AssetTransfersMaxToIdDesc = 'ASSET_TRANSFERS_MAX_TO_ID_DESC',
  AssetTransfersMaxValueAsc = 'ASSET_TRANSFERS_MAX_VALUE_ASC',
  AssetTransfersMaxValueDesc = 'ASSET_TRANSFERS_MAX_VALUE_DESC',
  AssetTransfersMinAssetAsc = 'ASSET_TRANSFERS_MIN_ASSET_ASC',
  AssetTransfersMinAssetDesc = 'ASSET_TRANSFERS_MIN_ASSET_DESC',
  AssetTransfersMinBlockIdAsc = 'ASSET_TRANSFERS_MIN_BLOCK_ID_ASC',
  AssetTransfersMinBlockIdDesc = 'ASSET_TRANSFERS_MIN_BLOCK_ID_DESC',
  AssetTransfersMinBlockNumberAsc = 'ASSET_TRANSFERS_MIN_BLOCK_NUMBER_ASC',
  AssetTransfersMinBlockNumberDesc = 'ASSET_TRANSFERS_MIN_BLOCK_NUMBER_DESC',
  AssetTransfersMinEventIndexAsc = 'ASSET_TRANSFERS_MIN_EVENT_INDEX_ASC',
  AssetTransfersMinEventIndexDesc = 'ASSET_TRANSFERS_MIN_EVENT_INDEX_DESC',
  AssetTransfersMinExtrinsicIndexAsc = 'ASSET_TRANSFERS_MIN_EXTRINSIC_INDEX_ASC',
  AssetTransfersMinExtrinsicIndexDesc = 'ASSET_TRANSFERS_MIN_EXTRINSIC_INDEX_DESC',
  AssetTransfersMinFromIdAsc = 'ASSET_TRANSFERS_MIN_FROM_ID_ASC',
  AssetTransfersMinFromIdDesc = 'ASSET_TRANSFERS_MIN_FROM_ID_DESC',
  AssetTransfersMinIdAsc = 'ASSET_TRANSFERS_MIN_ID_ASC',
  AssetTransfersMinIdDesc = 'ASSET_TRANSFERS_MIN_ID_DESC',
  AssetTransfersMinRemarkAsc = 'ASSET_TRANSFERS_MIN_REMARK_ASC',
  AssetTransfersMinRemarkDesc = 'ASSET_TRANSFERS_MIN_REMARK_DESC',
  AssetTransfersMinToIdAsc = 'ASSET_TRANSFERS_MIN_TO_ID_ASC',
  AssetTransfersMinToIdDesc = 'ASSET_TRANSFERS_MIN_TO_ID_DESC',
  AssetTransfersMinValueAsc = 'ASSET_TRANSFERS_MIN_VALUE_ASC',
  AssetTransfersMinValueDesc = 'ASSET_TRANSFERS_MIN_VALUE_DESC',
  AssetTransfersStddevPopulationAssetAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_ASSET_ASC',
  AssetTransfersStddevPopulationAssetDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_ASSET_DESC',
  AssetTransfersStddevPopulationBlockIdAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_BLOCK_ID_ASC',
  AssetTransfersStddevPopulationBlockIdDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_BLOCK_ID_DESC',
  AssetTransfersStddevPopulationBlockNumberAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  AssetTransfersStddevPopulationBlockNumberDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  AssetTransfersStddevPopulationEventIndexAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_EVENT_INDEX_ASC',
  AssetTransfersStddevPopulationEventIndexDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_EVENT_INDEX_DESC',
  AssetTransfersStddevPopulationExtrinsicIndexAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  AssetTransfersStddevPopulationExtrinsicIndexDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  AssetTransfersStddevPopulationFromIdAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_FROM_ID_ASC',
  AssetTransfersStddevPopulationFromIdDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_FROM_ID_DESC',
  AssetTransfersStddevPopulationIdAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_ID_ASC',
  AssetTransfersStddevPopulationIdDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_ID_DESC',
  AssetTransfersStddevPopulationRemarkAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_REMARK_ASC',
  AssetTransfersStddevPopulationRemarkDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_REMARK_DESC',
  AssetTransfersStddevPopulationToIdAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_TO_ID_ASC',
  AssetTransfersStddevPopulationToIdDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_TO_ID_DESC',
  AssetTransfersStddevPopulationValueAsc = 'ASSET_TRANSFERS_STDDEV_POPULATION_VALUE_ASC',
  AssetTransfersStddevPopulationValueDesc = 'ASSET_TRANSFERS_STDDEV_POPULATION_VALUE_DESC',
  AssetTransfersStddevSampleAssetAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_ASSET_ASC',
  AssetTransfersStddevSampleAssetDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_ASSET_DESC',
  AssetTransfersStddevSampleBlockIdAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  AssetTransfersStddevSampleBlockIdDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  AssetTransfersStddevSampleBlockNumberAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  AssetTransfersStddevSampleBlockNumberDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  AssetTransfersStddevSampleEventIndexAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  AssetTransfersStddevSampleEventIndexDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  AssetTransfersStddevSampleExtrinsicIndexAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  AssetTransfersStddevSampleExtrinsicIndexDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  AssetTransfersStddevSampleFromIdAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_FROM_ID_ASC',
  AssetTransfersStddevSampleFromIdDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_FROM_ID_DESC',
  AssetTransfersStddevSampleIdAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_ID_ASC',
  AssetTransfersStddevSampleIdDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_ID_DESC',
  AssetTransfersStddevSampleRemarkAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_REMARK_ASC',
  AssetTransfersStddevSampleRemarkDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_REMARK_DESC',
  AssetTransfersStddevSampleToIdAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_TO_ID_ASC',
  AssetTransfersStddevSampleToIdDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_TO_ID_DESC',
  AssetTransfersStddevSampleValueAsc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_VALUE_ASC',
  AssetTransfersStddevSampleValueDesc = 'ASSET_TRANSFERS_STDDEV_SAMPLE_VALUE_DESC',
  AssetTransfersSumAssetAsc = 'ASSET_TRANSFERS_SUM_ASSET_ASC',
  AssetTransfersSumAssetDesc = 'ASSET_TRANSFERS_SUM_ASSET_DESC',
  AssetTransfersSumBlockIdAsc = 'ASSET_TRANSFERS_SUM_BLOCK_ID_ASC',
  AssetTransfersSumBlockIdDesc = 'ASSET_TRANSFERS_SUM_BLOCK_ID_DESC',
  AssetTransfersSumBlockNumberAsc = 'ASSET_TRANSFERS_SUM_BLOCK_NUMBER_ASC',
  AssetTransfersSumBlockNumberDesc = 'ASSET_TRANSFERS_SUM_BLOCK_NUMBER_DESC',
  AssetTransfersSumEventIndexAsc = 'ASSET_TRANSFERS_SUM_EVENT_INDEX_ASC',
  AssetTransfersSumEventIndexDesc = 'ASSET_TRANSFERS_SUM_EVENT_INDEX_DESC',
  AssetTransfersSumExtrinsicIndexAsc = 'ASSET_TRANSFERS_SUM_EXTRINSIC_INDEX_ASC',
  AssetTransfersSumExtrinsicIndexDesc = 'ASSET_TRANSFERS_SUM_EXTRINSIC_INDEX_DESC',
  AssetTransfersSumFromIdAsc = 'ASSET_TRANSFERS_SUM_FROM_ID_ASC',
  AssetTransfersSumFromIdDesc = 'ASSET_TRANSFERS_SUM_FROM_ID_DESC',
  AssetTransfersSumIdAsc = 'ASSET_TRANSFERS_SUM_ID_ASC',
  AssetTransfersSumIdDesc = 'ASSET_TRANSFERS_SUM_ID_DESC',
  AssetTransfersSumRemarkAsc = 'ASSET_TRANSFERS_SUM_REMARK_ASC',
  AssetTransfersSumRemarkDesc = 'ASSET_TRANSFERS_SUM_REMARK_DESC',
  AssetTransfersSumToIdAsc = 'ASSET_TRANSFERS_SUM_TO_ID_ASC',
  AssetTransfersSumToIdDesc = 'ASSET_TRANSFERS_SUM_TO_ID_DESC',
  AssetTransfersSumValueAsc = 'ASSET_TRANSFERS_SUM_VALUE_ASC',
  AssetTransfersSumValueDesc = 'ASSET_TRANSFERS_SUM_VALUE_DESC',
  AssetTransfersVariancePopulationAssetAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_ASSET_ASC',
  AssetTransfersVariancePopulationAssetDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_ASSET_DESC',
  AssetTransfersVariancePopulationBlockIdAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  AssetTransfersVariancePopulationBlockIdDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  AssetTransfersVariancePopulationBlockNumberAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  AssetTransfersVariancePopulationBlockNumberDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  AssetTransfersVariancePopulationEventIndexAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  AssetTransfersVariancePopulationEventIndexDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  AssetTransfersVariancePopulationExtrinsicIndexAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  AssetTransfersVariancePopulationExtrinsicIndexDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  AssetTransfersVariancePopulationFromIdAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_FROM_ID_ASC',
  AssetTransfersVariancePopulationFromIdDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_FROM_ID_DESC',
  AssetTransfersVariancePopulationIdAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_ID_ASC',
  AssetTransfersVariancePopulationIdDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_ID_DESC',
  AssetTransfersVariancePopulationRemarkAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_REMARK_ASC',
  AssetTransfersVariancePopulationRemarkDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_REMARK_DESC',
  AssetTransfersVariancePopulationToIdAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_TO_ID_ASC',
  AssetTransfersVariancePopulationToIdDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_TO_ID_DESC',
  AssetTransfersVariancePopulationValueAsc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_VALUE_ASC',
  AssetTransfersVariancePopulationValueDesc = 'ASSET_TRANSFERS_VARIANCE_POPULATION_VALUE_DESC',
  AssetTransfersVarianceSampleAssetAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_ASSET_ASC',
  AssetTransfersVarianceSampleAssetDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_ASSET_DESC',
  AssetTransfersVarianceSampleBlockIdAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  AssetTransfersVarianceSampleBlockIdDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  AssetTransfersVarianceSampleBlockNumberAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  AssetTransfersVarianceSampleBlockNumberDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  AssetTransfersVarianceSampleEventIndexAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  AssetTransfersVarianceSampleEventIndexDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  AssetTransfersVarianceSampleExtrinsicIndexAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  AssetTransfersVarianceSampleExtrinsicIndexDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  AssetTransfersVarianceSampleFromIdAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_FROM_ID_ASC',
  AssetTransfersVarianceSampleFromIdDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_FROM_ID_DESC',
  AssetTransfersVarianceSampleIdAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_ID_ASC',
  AssetTransfersVarianceSampleIdDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_ID_DESC',
  AssetTransfersVarianceSampleRemarkAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_REMARK_ASC',
  AssetTransfersVarianceSampleRemarkDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_REMARK_DESC',
  AssetTransfersVarianceSampleToIdAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_TO_ID_ASC',
  AssetTransfersVarianceSampleToIdDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_TO_ID_DESC',
  AssetTransfersVarianceSampleValueAsc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_VALUE_ASC',
  AssetTransfersVarianceSampleValueDesc = 'ASSET_TRANSFERS_VARIANCE_SAMPLE_VALUE_DESC',
  EventsAverageBlockIdAsc = 'EVENTS_AVERAGE_BLOCK_ID_ASC',
  EventsAverageBlockIdDesc = 'EVENTS_AVERAGE_BLOCK_ID_DESC',
  EventsAverageBlockNumberAsc = 'EVENTS_AVERAGE_BLOCK_NUMBER_ASC',
  EventsAverageBlockNumberDesc = 'EVENTS_AVERAGE_BLOCK_NUMBER_DESC',
  EventsAverageDataAsc = 'EVENTS_AVERAGE_DATA_ASC',
  EventsAverageDataDesc = 'EVENTS_AVERAGE_DATA_DESC',
  EventsAverageExtrinsicIdAsc = 'EVENTS_AVERAGE_EXTRINSIC_ID_ASC',
  EventsAverageExtrinsicIdDesc = 'EVENTS_AVERAGE_EXTRINSIC_ID_DESC',
  EventsAverageIdAsc = 'EVENTS_AVERAGE_ID_ASC',
  EventsAverageIdDesc = 'EVENTS_AVERAGE_ID_DESC',
  EventsAverageIndexAsc = 'EVENTS_AVERAGE_INDEX_ASC',
  EventsAverageIndexDesc = 'EVENTS_AVERAGE_INDEX_DESC',
  EventsAverageMethodAsc = 'EVENTS_AVERAGE_METHOD_ASC',
  EventsAverageMethodDesc = 'EVENTS_AVERAGE_METHOD_DESC',
  EventsAverageSectionAsc = 'EVENTS_AVERAGE_SECTION_ASC',
  EventsAverageSectionDesc = 'EVENTS_AVERAGE_SECTION_DESC',
  EventsCountAsc = 'EVENTS_COUNT_ASC',
  EventsCountDesc = 'EVENTS_COUNT_DESC',
  EventsDistinctCountBlockIdAsc = 'EVENTS_DISTINCT_COUNT_BLOCK_ID_ASC',
  EventsDistinctCountBlockIdDesc = 'EVENTS_DISTINCT_COUNT_BLOCK_ID_DESC',
  EventsDistinctCountBlockNumberAsc = 'EVENTS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  EventsDistinctCountBlockNumberDesc = 'EVENTS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  EventsDistinctCountDataAsc = 'EVENTS_DISTINCT_COUNT_DATA_ASC',
  EventsDistinctCountDataDesc = 'EVENTS_DISTINCT_COUNT_DATA_DESC',
  EventsDistinctCountExtrinsicIdAsc = 'EVENTS_DISTINCT_COUNT_EXTRINSIC_ID_ASC',
  EventsDistinctCountExtrinsicIdDesc = 'EVENTS_DISTINCT_COUNT_EXTRINSIC_ID_DESC',
  EventsDistinctCountIdAsc = 'EVENTS_DISTINCT_COUNT_ID_ASC',
  EventsDistinctCountIdDesc = 'EVENTS_DISTINCT_COUNT_ID_DESC',
  EventsDistinctCountIndexAsc = 'EVENTS_DISTINCT_COUNT_INDEX_ASC',
  EventsDistinctCountIndexDesc = 'EVENTS_DISTINCT_COUNT_INDEX_DESC',
  EventsDistinctCountMethodAsc = 'EVENTS_DISTINCT_COUNT_METHOD_ASC',
  EventsDistinctCountMethodDesc = 'EVENTS_DISTINCT_COUNT_METHOD_DESC',
  EventsDistinctCountSectionAsc = 'EVENTS_DISTINCT_COUNT_SECTION_ASC',
  EventsDistinctCountSectionDesc = 'EVENTS_DISTINCT_COUNT_SECTION_DESC',
  EventsMaxBlockIdAsc = 'EVENTS_MAX_BLOCK_ID_ASC',
  EventsMaxBlockIdDesc = 'EVENTS_MAX_BLOCK_ID_DESC',
  EventsMaxBlockNumberAsc = 'EVENTS_MAX_BLOCK_NUMBER_ASC',
  EventsMaxBlockNumberDesc = 'EVENTS_MAX_BLOCK_NUMBER_DESC',
  EventsMaxDataAsc = 'EVENTS_MAX_DATA_ASC',
  EventsMaxDataDesc = 'EVENTS_MAX_DATA_DESC',
  EventsMaxExtrinsicIdAsc = 'EVENTS_MAX_EXTRINSIC_ID_ASC',
  EventsMaxExtrinsicIdDesc = 'EVENTS_MAX_EXTRINSIC_ID_DESC',
  EventsMaxIdAsc = 'EVENTS_MAX_ID_ASC',
  EventsMaxIdDesc = 'EVENTS_MAX_ID_DESC',
  EventsMaxIndexAsc = 'EVENTS_MAX_INDEX_ASC',
  EventsMaxIndexDesc = 'EVENTS_MAX_INDEX_DESC',
  EventsMaxMethodAsc = 'EVENTS_MAX_METHOD_ASC',
  EventsMaxMethodDesc = 'EVENTS_MAX_METHOD_DESC',
  EventsMaxSectionAsc = 'EVENTS_MAX_SECTION_ASC',
  EventsMaxSectionDesc = 'EVENTS_MAX_SECTION_DESC',
  EventsMinBlockIdAsc = 'EVENTS_MIN_BLOCK_ID_ASC',
  EventsMinBlockIdDesc = 'EVENTS_MIN_BLOCK_ID_DESC',
  EventsMinBlockNumberAsc = 'EVENTS_MIN_BLOCK_NUMBER_ASC',
  EventsMinBlockNumberDesc = 'EVENTS_MIN_BLOCK_NUMBER_DESC',
  EventsMinDataAsc = 'EVENTS_MIN_DATA_ASC',
  EventsMinDataDesc = 'EVENTS_MIN_DATA_DESC',
  EventsMinExtrinsicIdAsc = 'EVENTS_MIN_EXTRINSIC_ID_ASC',
  EventsMinExtrinsicIdDesc = 'EVENTS_MIN_EXTRINSIC_ID_DESC',
  EventsMinIdAsc = 'EVENTS_MIN_ID_ASC',
  EventsMinIdDesc = 'EVENTS_MIN_ID_DESC',
  EventsMinIndexAsc = 'EVENTS_MIN_INDEX_ASC',
  EventsMinIndexDesc = 'EVENTS_MIN_INDEX_DESC',
  EventsMinMethodAsc = 'EVENTS_MIN_METHOD_ASC',
  EventsMinMethodDesc = 'EVENTS_MIN_METHOD_DESC',
  EventsMinSectionAsc = 'EVENTS_MIN_SECTION_ASC',
  EventsMinSectionDesc = 'EVENTS_MIN_SECTION_DESC',
  EventsStddevPopulationBlockIdAsc = 'EVENTS_STDDEV_POPULATION_BLOCK_ID_ASC',
  EventsStddevPopulationBlockIdDesc = 'EVENTS_STDDEV_POPULATION_BLOCK_ID_DESC',
  EventsStddevPopulationBlockNumberAsc = 'EVENTS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  EventsStddevPopulationBlockNumberDesc = 'EVENTS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  EventsStddevPopulationDataAsc = 'EVENTS_STDDEV_POPULATION_DATA_ASC',
  EventsStddevPopulationDataDesc = 'EVENTS_STDDEV_POPULATION_DATA_DESC',
  EventsStddevPopulationExtrinsicIdAsc = 'EVENTS_STDDEV_POPULATION_EXTRINSIC_ID_ASC',
  EventsStddevPopulationExtrinsicIdDesc = 'EVENTS_STDDEV_POPULATION_EXTRINSIC_ID_DESC',
  EventsStddevPopulationIdAsc = 'EVENTS_STDDEV_POPULATION_ID_ASC',
  EventsStddevPopulationIdDesc = 'EVENTS_STDDEV_POPULATION_ID_DESC',
  EventsStddevPopulationIndexAsc = 'EVENTS_STDDEV_POPULATION_INDEX_ASC',
  EventsStddevPopulationIndexDesc = 'EVENTS_STDDEV_POPULATION_INDEX_DESC',
  EventsStddevPopulationMethodAsc = 'EVENTS_STDDEV_POPULATION_METHOD_ASC',
  EventsStddevPopulationMethodDesc = 'EVENTS_STDDEV_POPULATION_METHOD_DESC',
  EventsStddevPopulationSectionAsc = 'EVENTS_STDDEV_POPULATION_SECTION_ASC',
  EventsStddevPopulationSectionDesc = 'EVENTS_STDDEV_POPULATION_SECTION_DESC',
  EventsStddevSampleBlockIdAsc = 'EVENTS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  EventsStddevSampleBlockIdDesc = 'EVENTS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  EventsStddevSampleBlockNumberAsc = 'EVENTS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  EventsStddevSampleBlockNumberDesc = 'EVENTS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  EventsStddevSampleDataAsc = 'EVENTS_STDDEV_SAMPLE_DATA_ASC',
  EventsStddevSampleDataDesc = 'EVENTS_STDDEV_SAMPLE_DATA_DESC',
  EventsStddevSampleExtrinsicIdAsc = 'EVENTS_STDDEV_SAMPLE_EXTRINSIC_ID_ASC',
  EventsStddevSampleExtrinsicIdDesc = 'EVENTS_STDDEV_SAMPLE_EXTRINSIC_ID_DESC',
  EventsStddevSampleIdAsc = 'EVENTS_STDDEV_SAMPLE_ID_ASC',
  EventsStddevSampleIdDesc = 'EVENTS_STDDEV_SAMPLE_ID_DESC',
  EventsStddevSampleIndexAsc = 'EVENTS_STDDEV_SAMPLE_INDEX_ASC',
  EventsStddevSampleIndexDesc = 'EVENTS_STDDEV_SAMPLE_INDEX_DESC',
  EventsStddevSampleMethodAsc = 'EVENTS_STDDEV_SAMPLE_METHOD_ASC',
  EventsStddevSampleMethodDesc = 'EVENTS_STDDEV_SAMPLE_METHOD_DESC',
  EventsStddevSampleSectionAsc = 'EVENTS_STDDEV_SAMPLE_SECTION_ASC',
  EventsStddevSampleSectionDesc = 'EVENTS_STDDEV_SAMPLE_SECTION_DESC',
  EventsSumBlockIdAsc = 'EVENTS_SUM_BLOCK_ID_ASC',
  EventsSumBlockIdDesc = 'EVENTS_SUM_BLOCK_ID_DESC',
  EventsSumBlockNumberAsc = 'EVENTS_SUM_BLOCK_NUMBER_ASC',
  EventsSumBlockNumberDesc = 'EVENTS_SUM_BLOCK_NUMBER_DESC',
  EventsSumDataAsc = 'EVENTS_SUM_DATA_ASC',
  EventsSumDataDesc = 'EVENTS_SUM_DATA_DESC',
  EventsSumExtrinsicIdAsc = 'EVENTS_SUM_EXTRINSIC_ID_ASC',
  EventsSumExtrinsicIdDesc = 'EVENTS_SUM_EXTRINSIC_ID_DESC',
  EventsSumIdAsc = 'EVENTS_SUM_ID_ASC',
  EventsSumIdDesc = 'EVENTS_SUM_ID_DESC',
  EventsSumIndexAsc = 'EVENTS_SUM_INDEX_ASC',
  EventsSumIndexDesc = 'EVENTS_SUM_INDEX_DESC',
  EventsSumMethodAsc = 'EVENTS_SUM_METHOD_ASC',
  EventsSumMethodDesc = 'EVENTS_SUM_METHOD_DESC',
  EventsSumSectionAsc = 'EVENTS_SUM_SECTION_ASC',
  EventsSumSectionDesc = 'EVENTS_SUM_SECTION_DESC',
  EventsVariancePopulationBlockIdAsc = 'EVENTS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  EventsVariancePopulationBlockIdDesc = 'EVENTS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  EventsVariancePopulationBlockNumberAsc = 'EVENTS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  EventsVariancePopulationBlockNumberDesc = 'EVENTS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  EventsVariancePopulationDataAsc = 'EVENTS_VARIANCE_POPULATION_DATA_ASC',
  EventsVariancePopulationDataDesc = 'EVENTS_VARIANCE_POPULATION_DATA_DESC',
  EventsVariancePopulationExtrinsicIdAsc = 'EVENTS_VARIANCE_POPULATION_EXTRINSIC_ID_ASC',
  EventsVariancePopulationExtrinsicIdDesc = 'EVENTS_VARIANCE_POPULATION_EXTRINSIC_ID_DESC',
  EventsVariancePopulationIdAsc = 'EVENTS_VARIANCE_POPULATION_ID_ASC',
  EventsVariancePopulationIdDesc = 'EVENTS_VARIANCE_POPULATION_ID_DESC',
  EventsVariancePopulationIndexAsc = 'EVENTS_VARIANCE_POPULATION_INDEX_ASC',
  EventsVariancePopulationIndexDesc = 'EVENTS_VARIANCE_POPULATION_INDEX_DESC',
  EventsVariancePopulationMethodAsc = 'EVENTS_VARIANCE_POPULATION_METHOD_ASC',
  EventsVariancePopulationMethodDesc = 'EVENTS_VARIANCE_POPULATION_METHOD_DESC',
  EventsVariancePopulationSectionAsc = 'EVENTS_VARIANCE_POPULATION_SECTION_ASC',
  EventsVariancePopulationSectionDesc = 'EVENTS_VARIANCE_POPULATION_SECTION_DESC',
  EventsVarianceSampleBlockIdAsc = 'EVENTS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  EventsVarianceSampleBlockIdDesc = 'EVENTS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  EventsVarianceSampleBlockNumberAsc = 'EVENTS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  EventsVarianceSampleBlockNumberDesc = 'EVENTS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  EventsVarianceSampleDataAsc = 'EVENTS_VARIANCE_SAMPLE_DATA_ASC',
  EventsVarianceSampleDataDesc = 'EVENTS_VARIANCE_SAMPLE_DATA_DESC',
  EventsVarianceSampleExtrinsicIdAsc = 'EVENTS_VARIANCE_SAMPLE_EXTRINSIC_ID_ASC',
  EventsVarianceSampleExtrinsicIdDesc = 'EVENTS_VARIANCE_SAMPLE_EXTRINSIC_ID_DESC',
  EventsVarianceSampleIdAsc = 'EVENTS_VARIANCE_SAMPLE_ID_ASC',
  EventsVarianceSampleIdDesc = 'EVENTS_VARIANCE_SAMPLE_ID_DESC',
  EventsVarianceSampleIndexAsc = 'EVENTS_VARIANCE_SAMPLE_INDEX_ASC',
  EventsVarianceSampleIndexDesc = 'EVENTS_VARIANCE_SAMPLE_INDEX_DESC',
  EventsVarianceSampleMethodAsc = 'EVENTS_VARIANCE_SAMPLE_METHOD_ASC',
  EventsVarianceSampleMethodDesc = 'EVENTS_VARIANCE_SAMPLE_METHOD_DESC',
  EventsVarianceSampleSectionAsc = 'EVENTS_VARIANCE_SAMPLE_SECTION_ASC',
  EventsVarianceSampleSectionDesc = 'EVENTS_VARIANCE_SAMPLE_SECTION_DESC',
  ExtrinsicsAverageBlockIdAsc = 'EXTRINSICS_AVERAGE_BLOCK_ID_ASC',
  ExtrinsicsAverageBlockIdDesc = 'EXTRINSICS_AVERAGE_BLOCK_ID_DESC',
  ExtrinsicsAverageBlockNumberAsc = 'EXTRINSICS_AVERAGE_BLOCK_NUMBER_ASC',
  ExtrinsicsAverageBlockNumberDesc = 'EXTRINSICS_AVERAGE_BLOCK_NUMBER_DESC',
  ExtrinsicsAverageHashAsc = 'EXTRINSICS_AVERAGE_HASH_ASC',
  ExtrinsicsAverageHashDesc = 'EXTRINSICS_AVERAGE_HASH_DESC',
  ExtrinsicsAverageIdAsc = 'EXTRINSICS_AVERAGE_ID_ASC',
  ExtrinsicsAverageIdDesc = 'EXTRINSICS_AVERAGE_ID_DESC',
  ExtrinsicsAverageIndexAsc = 'EXTRINSICS_AVERAGE_INDEX_ASC',
  ExtrinsicsAverageIndexDesc = 'EXTRINSICS_AVERAGE_INDEX_DESC',
  ExtrinsicsAverageIsSignedAsc = 'EXTRINSICS_AVERAGE_IS_SIGNED_ASC',
  ExtrinsicsAverageIsSignedDesc = 'EXTRINSICS_AVERAGE_IS_SIGNED_DESC',
  ExtrinsicsAverageMethodAsc = 'EXTRINSICS_AVERAGE_METHOD_ASC',
  ExtrinsicsAverageMethodDesc = 'EXTRINSICS_AVERAGE_METHOD_DESC',
  ExtrinsicsAverageSectionAsc = 'EXTRINSICS_AVERAGE_SECTION_ASC',
  ExtrinsicsAverageSectionDesc = 'EXTRINSICS_AVERAGE_SECTION_DESC',
  ExtrinsicsAverageSignerIdAsc = 'EXTRINSICS_AVERAGE_SIGNER_ID_ASC',
  ExtrinsicsAverageSignerIdDesc = 'EXTRINSICS_AVERAGE_SIGNER_ID_DESC',
  ExtrinsicsAverageSuccessAsc = 'EXTRINSICS_AVERAGE_SUCCESS_ASC',
  ExtrinsicsAverageSuccessDesc = 'EXTRINSICS_AVERAGE_SUCCESS_DESC',
  ExtrinsicsCountAsc = 'EXTRINSICS_COUNT_ASC',
  ExtrinsicsCountDesc = 'EXTRINSICS_COUNT_DESC',
  ExtrinsicsDistinctCountBlockIdAsc = 'EXTRINSICS_DISTINCT_COUNT_BLOCK_ID_ASC',
  ExtrinsicsDistinctCountBlockIdDesc = 'EXTRINSICS_DISTINCT_COUNT_BLOCK_ID_DESC',
  ExtrinsicsDistinctCountBlockNumberAsc = 'EXTRINSICS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  ExtrinsicsDistinctCountBlockNumberDesc = 'EXTRINSICS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  ExtrinsicsDistinctCountHashAsc = 'EXTRINSICS_DISTINCT_COUNT_HASH_ASC',
  ExtrinsicsDistinctCountHashDesc = 'EXTRINSICS_DISTINCT_COUNT_HASH_DESC',
  ExtrinsicsDistinctCountIdAsc = 'EXTRINSICS_DISTINCT_COUNT_ID_ASC',
  ExtrinsicsDistinctCountIdDesc = 'EXTRINSICS_DISTINCT_COUNT_ID_DESC',
  ExtrinsicsDistinctCountIndexAsc = 'EXTRINSICS_DISTINCT_COUNT_INDEX_ASC',
  ExtrinsicsDistinctCountIndexDesc = 'EXTRINSICS_DISTINCT_COUNT_INDEX_DESC',
  ExtrinsicsDistinctCountIsSignedAsc = 'EXTRINSICS_DISTINCT_COUNT_IS_SIGNED_ASC',
  ExtrinsicsDistinctCountIsSignedDesc = 'EXTRINSICS_DISTINCT_COUNT_IS_SIGNED_DESC',
  ExtrinsicsDistinctCountMethodAsc = 'EXTRINSICS_DISTINCT_COUNT_METHOD_ASC',
  ExtrinsicsDistinctCountMethodDesc = 'EXTRINSICS_DISTINCT_COUNT_METHOD_DESC',
  ExtrinsicsDistinctCountSectionAsc = 'EXTRINSICS_DISTINCT_COUNT_SECTION_ASC',
  ExtrinsicsDistinctCountSectionDesc = 'EXTRINSICS_DISTINCT_COUNT_SECTION_DESC',
  ExtrinsicsDistinctCountSignerIdAsc = 'EXTRINSICS_DISTINCT_COUNT_SIGNER_ID_ASC',
  ExtrinsicsDistinctCountSignerIdDesc = 'EXTRINSICS_DISTINCT_COUNT_SIGNER_ID_DESC',
  ExtrinsicsDistinctCountSuccessAsc = 'EXTRINSICS_DISTINCT_COUNT_SUCCESS_ASC',
  ExtrinsicsDistinctCountSuccessDesc = 'EXTRINSICS_DISTINCT_COUNT_SUCCESS_DESC',
  ExtrinsicsMaxBlockIdAsc = 'EXTRINSICS_MAX_BLOCK_ID_ASC',
  ExtrinsicsMaxBlockIdDesc = 'EXTRINSICS_MAX_BLOCK_ID_DESC',
  ExtrinsicsMaxBlockNumberAsc = 'EXTRINSICS_MAX_BLOCK_NUMBER_ASC',
  ExtrinsicsMaxBlockNumberDesc = 'EXTRINSICS_MAX_BLOCK_NUMBER_DESC',
  ExtrinsicsMaxHashAsc = 'EXTRINSICS_MAX_HASH_ASC',
  ExtrinsicsMaxHashDesc = 'EXTRINSICS_MAX_HASH_DESC',
  ExtrinsicsMaxIdAsc = 'EXTRINSICS_MAX_ID_ASC',
  ExtrinsicsMaxIdDesc = 'EXTRINSICS_MAX_ID_DESC',
  ExtrinsicsMaxIndexAsc = 'EXTRINSICS_MAX_INDEX_ASC',
  ExtrinsicsMaxIndexDesc = 'EXTRINSICS_MAX_INDEX_DESC',
  ExtrinsicsMaxIsSignedAsc = 'EXTRINSICS_MAX_IS_SIGNED_ASC',
  ExtrinsicsMaxIsSignedDesc = 'EXTRINSICS_MAX_IS_SIGNED_DESC',
  ExtrinsicsMaxMethodAsc = 'EXTRINSICS_MAX_METHOD_ASC',
  ExtrinsicsMaxMethodDesc = 'EXTRINSICS_MAX_METHOD_DESC',
  ExtrinsicsMaxSectionAsc = 'EXTRINSICS_MAX_SECTION_ASC',
  ExtrinsicsMaxSectionDesc = 'EXTRINSICS_MAX_SECTION_DESC',
  ExtrinsicsMaxSignerIdAsc = 'EXTRINSICS_MAX_SIGNER_ID_ASC',
  ExtrinsicsMaxSignerIdDesc = 'EXTRINSICS_MAX_SIGNER_ID_DESC',
  ExtrinsicsMaxSuccessAsc = 'EXTRINSICS_MAX_SUCCESS_ASC',
  ExtrinsicsMaxSuccessDesc = 'EXTRINSICS_MAX_SUCCESS_DESC',
  ExtrinsicsMinBlockIdAsc = 'EXTRINSICS_MIN_BLOCK_ID_ASC',
  ExtrinsicsMinBlockIdDesc = 'EXTRINSICS_MIN_BLOCK_ID_DESC',
  ExtrinsicsMinBlockNumberAsc = 'EXTRINSICS_MIN_BLOCK_NUMBER_ASC',
  ExtrinsicsMinBlockNumberDesc = 'EXTRINSICS_MIN_BLOCK_NUMBER_DESC',
  ExtrinsicsMinHashAsc = 'EXTRINSICS_MIN_HASH_ASC',
  ExtrinsicsMinHashDesc = 'EXTRINSICS_MIN_HASH_DESC',
  ExtrinsicsMinIdAsc = 'EXTRINSICS_MIN_ID_ASC',
  ExtrinsicsMinIdDesc = 'EXTRINSICS_MIN_ID_DESC',
  ExtrinsicsMinIndexAsc = 'EXTRINSICS_MIN_INDEX_ASC',
  ExtrinsicsMinIndexDesc = 'EXTRINSICS_MIN_INDEX_DESC',
  ExtrinsicsMinIsSignedAsc = 'EXTRINSICS_MIN_IS_SIGNED_ASC',
  ExtrinsicsMinIsSignedDesc = 'EXTRINSICS_MIN_IS_SIGNED_DESC',
  ExtrinsicsMinMethodAsc = 'EXTRINSICS_MIN_METHOD_ASC',
  ExtrinsicsMinMethodDesc = 'EXTRINSICS_MIN_METHOD_DESC',
  ExtrinsicsMinSectionAsc = 'EXTRINSICS_MIN_SECTION_ASC',
  ExtrinsicsMinSectionDesc = 'EXTRINSICS_MIN_SECTION_DESC',
  ExtrinsicsMinSignerIdAsc = 'EXTRINSICS_MIN_SIGNER_ID_ASC',
  ExtrinsicsMinSignerIdDesc = 'EXTRINSICS_MIN_SIGNER_ID_DESC',
  ExtrinsicsMinSuccessAsc = 'EXTRINSICS_MIN_SUCCESS_ASC',
  ExtrinsicsMinSuccessDesc = 'EXTRINSICS_MIN_SUCCESS_DESC',
  ExtrinsicsRootAsc = 'EXTRINSICS_ROOT_ASC',
  ExtrinsicsRootDesc = 'EXTRINSICS_ROOT_DESC',
  ExtrinsicsStddevPopulationBlockIdAsc = 'EXTRINSICS_STDDEV_POPULATION_BLOCK_ID_ASC',
  ExtrinsicsStddevPopulationBlockIdDesc = 'EXTRINSICS_STDDEV_POPULATION_BLOCK_ID_DESC',
  ExtrinsicsStddevPopulationBlockNumberAsc = 'EXTRINSICS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  ExtrinsicsStddevPopulationBlockNumberDesc = 'EXTRINSICS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  ExtrinsicsStddevPopulationHashAsc = 'EXTRINSICS_STDDEV_POPULATION_HASH_ASC',
  ExtrinsicsStddevPopulationHashDesc = 'EXTRINSICS_STDDEV_POPULATION_HASH_DESC',
  ExtrinsicsStddevPopulationIdAsc = 'EXTRINSICS_STDDEV_POPULATION_ID_ASC',
  ExtrinsicsStddevPopulationIdDesc = 'EXTRINSICS_STDDEV_POPULATION_ID_DESC',
  ExtrinsicsStddevPopulationIndexAsc = 'EXTRINSICS_STDDEV_POPULATION_INDEX_ASC',
  ExtrinsicsStddevPopulationIndexDesc = 'EXTRINSICS_STDDEV_POPULATION_INDEX_DESC',
  ExtrinsicsStddevPopulationIsSignedAsc = 'EXTRINSICS_STDDEV_POPULATION_IS_SIGNED_ASC',
  ExtrinsicsStddevPopulationIsSignedDesc = 'EXTRINSICS_STDDEV_POPULATION_IS_SIGNED_DESC',
  ExtrinsicsStddevPopulationMethodAsc = 'EXTRINSICS_STDDEV_POPULATION_METHOD_ASC',
  ExtrinsicsStddevPopulationMethodDesc = 'EXTRINSICS_STDDEV_POPULATION_METHOD_DESC',
  ExtrinsicsStddevPopulationSectionAsc = 'EXTRINSICS_STDDEV_POPULATION_SECTION_ASC',
  ExtrinsicsStddevPopulationSectionDesc = 'EXTRINSICS_STDDEV_POPULATION_SECTION_DESC',
  ExtrinsicsStddevPopulationSignerIdAsc = 'EXTRINSICS_STDDEV_POPULATION_SIGNER_ID_ASC',
  ExtrinsicsStddevPopulationSignerIdDesc = 'EXTRINSICS_STDDEV_POPULATION_SIGNER_ID_DESC',
  ExtrinsicsStddevPopulationSuccessAsc = 'EXTRINSICS_STDDEV_POPULATION_SUCCESS_ASC',
  ExtrinsicsStddevPopulationSuccessDesc = 'EXTRINSICS_STDDEV_POPULATION_SUCCESS_DESC',
  ExtrinsicsStddevSampleBlockIdAsc = 'EXTRINSICS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  ExtrinsicsStddevSampleBlockIdDesc = 'EXTRINSICS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  ExtrinsicsStddevSampleBlockNumberAsc = 'EXTRINSICS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  ExtrinsicsStddevSampleBlockNumberDesc = 'EXTRINSICS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  ExtrinsicsStddevSampleHashAsc = 'EXTRINSICS_STDDEV_SAMPLE_HASH_ASC',
  ExtrinsicsStddevSampleHashDesc = 'EXTRINSICS_STDDEV_SAMPLE_HASH_DESC',
  ExtrinsicsStddevSampleIdAsc = 'EXTRINSICS_STDDEV_SAMPLE_ID_ASC',
  ExtrinsicsStddevSampleIdDesc = 'EXTRINSICS_STDDEV_SAMPLE_ID_DESC',
  ExtrinsicsStddevSampleIndexAsc = 'EXTRINSICS_STDDEV_SAMPLE_INDEX_ASC',
  ExtrinsicsStddevSampleIndexDesc = 'EXTRINSICS_STDDEV_SAMPLE_INDEX_DESC',
  ExtrinsicsStddevSampleIsSignedAsc = 'EXTRINSICS_STDDEV_SAMPLE_IS_SIGNED_ASC',
  ExtrinsicsStddevSampleIsSignedDesc = 'EXTRINSICS_STDDEV_SAMPLE_IS_SIGNED_DESC',
  ExtrinsicsStddevSampleMethodAsc = 'EXTRINSICS_STDDEV_SAMPLE_METHOD_ASC',
  ExtrinsicsStddevSampleMethodDesc = 'EXTRINSICS_STDDEV_SAMPLE_METHOD_DESC',
  ExtrinsicsStddevSampleSectionAsc = 'EXTRINSICS_STDDEV_SAMPLE_SECTION_ASC',
  ExtrinsicsStddevSampleSectionDesc = 'EXTRINSICS_STDDEV_SAMPLE_SECTION_DESC',
  ExtrinsicsStddevSampleSignerIdAsc = 'EXTRINSICS_STDDEV_SAMPLE_SIGNER_ID_ASC',
  ExtrinsicsStddevSampleSignerIdDesc = 'EXTRINSICS_STDDEV_SAMPLE_SIGNER_ID_DESC',
  ExtrinsicsStddevSampleSuccessAsc = 'EXTRINSICS_STDDEV_SAMPLE_SUCCESS_ASC',
  ExtrinsicsStddevSampleSuccessDesc = 'EXTRINSICS_STDDEV_SAMPLE_SUCCESS_DESC',
  ExtrinsicsSumBlockIdAsc = 'EXTRINSICS_SUM_BLOCK_ID_ASC',
  ExtrinsicsSumBlockIdDesc = 'EXTRINSICS_SUM_BLOCK_ID_DESC',
  ExtrinsicsSumBlockNumberAsc = 'EXTRINSICS_SUM_BLOCK_NUMBER_ASC',
  ExtrinsicsSumBlockNumberDesc = 'EXTRINSICS_SUM_BLOCK_NUMBER_DESC',
  ExtrinsicsSumHashAsc = 'EXTRINSICS_SUM_HASH_ASC',
  ExtrinsicsSumHashDesc = 'EXTRINSICS_SUM_HASH_DESC',
  ExtrinsicsSumIdAsc = 'EXTRINSICS_SUM_ID_ASC',
  ExtrinsicsSumIdDesc = 'EXTRINSICS_SUM_ID_DESC',
  ExtrinsicsSumIndexAsc = 'EXTRINSICS_SUM_INDEX_ASC',
  ExtrinsicsSumIndexDesc = 'EXTRINSICS_SUM_INDEX_DESC',
  ExtrinsicsSumIsSignedAsc = 'EXTRINSICS_SUM_IS_SIGNED_ASC',
  ExtrinsicsSumIsSignedDesc = 'EXTRINSICS_SUM_IS_SIGNED_DESC',
  ExtrinsicsSumMethodAsc = 'EXTRINSICS_SUM_METHOD_ASC',
  ExtrinsicsSumMethodDesc = 'EXTRINSICS_SUM_METHOD_DESC',
  ExtrinsicsSumSectionAsc = 'EXTRINSICS_SUM_SECTION_ASC',
  ExtrinsicsSumSectionDesc = 'EXTRINSICS_SUM_SECTION_DESC',
  ExtrinsicsSumSignerIdAsc = 'EXTRINSICS_SUM_SIGNER_ID_ASC',
  ExtrinsicsSumSignerIdDesc = 'EXTRINSICS_SUM_SIGNER_ID_DESC',
  ExtrinsicsSumSuccessAsc = 'EXTRINSICS_SUM_SUCCESS_ASC',
  ExtrinsicsSumSuccessDesc = 'EXTRINSICS_SUM_SUCCESS_DESC',
  ExtrinsicsVariancePopulationBlockIdAsc = 'EXTRINSICS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  ExtrinsicsVariancePopulationBlockIdDesc = 'EXTRINSICS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  ExtrinsicsVariancePopulationBlockNumberAsc = 'EXTRINSICS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  ExtrinsicsVariancePopulationBlockNumberDesc = 'EXTRINSICS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  ExtrinsicsVariancePopulationHashAsc = 'EXTRINSICS_VARIANCE_POPULATION_HASH_ASC',
  ExtrinsicsVariancePopulationHashDesc = 'EXTRINSICS_VARIANCE_POPULATION_HASH_DESC',
  ExtrinsicsVariancePopulationIdAsc = 'EXTRINSICS_VARIANCE_POPULATION_ID_ASC',
  ExtrinsicsVariancePopulationIdDesc = 'EXTRINSICS_VARIANCE_POPULATION_ID_DESC',
  ExtrinsicsVariancePopulationIndexAsc = 'EXTRINSICS_VARIANCE_POPULATION_INDEX_ASC',
  ExtrinsicsVariancePopulationIndexDesc = 'EXTRINSICS_VARIANCE_POPULATION_INDEX_DESC',
  ExtrinsicsVariancePopulationIsSignedAsc = 'EXTRINSICS_VARIANCE_POPULATION_IS_SIGNED_ASC',
  ExtrinsicsVariancePopulationIsSignedDesc = 'EXTRINSICS_VARIANCE_POPULATION_IS_SIGNED_DESC',
  ExtrinsicsVariancePopulationMethodAsc = 'EXTRINSICS_VARIANCE_POPULATION_METHOD_ASC',
  ExtrinsicsVariancePopulationMethodDesc = 'EXTRINSICS_VARIANCE_POPULATION_METHOD_DESC',
  ExtrinsicsVariancePopulationSectionAsc = 'EXTRINSICS_VARIANCE_POPULATION_SECTION_ASC',
  ExtrinsicsVariancePopulationSectionDesc = 'EXTRINSICS_VARIANCE_POPULATION_SECTION_DESC',
  ExtrinsicsVariancePopulationSignerIdAsc = 'EXTRINSICS_VARIANCE_POPULATION_SIGNER_ID_ASC',
  ExtrinsicsVariancePopulationSignerIdDesc = 'EXTRINSICS_VARIANCE_POPULATION_SIGNER_ID_DESC',
  ExtrinsicsVariancePopulationSuccessAsc = 'EXTRINSICS_VARIANCE_POPULATION_SUCCESS_ASC',
  ExtrinsicsVariancePopulationSuccessDesc = 'EXTRINSICS_VARIANCE_POPULATION_SUCCESS_DESC',
  ExtrinsicsVarianceSampleBlockIdAsc = 'EXTRINSICS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  ExtrinsicsVarianceSampleBlockIdDesc = 'EXTRINSICS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  ExtrinsicsVarianceSampleBlockNumberAsc = 'EXTRINSICS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  ExtrinsicsVarianceSampleBlockNumberDesc = 'EXTRINSICS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  ExtrinsicsVarianceSampleHashAsc = 'EXTRINSICS_VARIANCE_SAMPLE_HASH_ASC',
  ExtrinsicsVarianceSampleHashDesc = 'EXTRINSICS_VARIANCE_SAMPLE_HASH_DESC',
  ExtrinsicsVarianceSampleIdAsc = 'EXTRINSICS_VARIANCE_SAMPLE_ID_ASC',
  ExtrinsicsVarianceSampleIdDesc = 'EXTRINSICS_VARIANCE_SAMPLE_ID_DESC',
  ExtrinsicsVarianceSampleIndexAsc = 'EXTRINSICS_VARIANCE_SAMPLE_INDEX_ASC',
  ExtrinsicsVarianceSampleIndexDesc = 'EXTRINSICS_VARIANCE_SAMPLE_INDEX_DESC',
  ExtrinsicsVarianceSampleIsSignedAsc = 'EXTRINSICS_VARIANCE_SAMPLE_IS_SIGNED_ASC',
  ExtrinsicsVarianceSampleIsSignedDesc = 'EXTRINSICS_VARIANCE_SAMPLE_IS_SIGNED_DESC',
  ExtrinsicsVarianceSampleMethodAsc = 'EXTRINSICS_VARIANCE_SAMPLE_METHOD_ASC',
  ExtrinsicsVarianceSampleMethodDesc = 'EXTRINSICS_VARIANCE_SAMPLE_METHOD_DESC',
  ExtrinsicsVarianceSampleSectionAsc = 'EXTRINSICS_VARIANCE_SAMPLE_SECTION_ASC',
  ExtrinsicsVarianceSampleSectionDesc = 'EXTRINSICS_VARIANCE_SAMPLE_SECTION_DESC',
  ExtrinsicsVarianceSampleSignerIdAsc = 'EXTRINSICS_VARIANCE_SAMPLE_SIGNER_ID_ASC',
  ExtrinsicsVarianceSampleSignerIdDesc = 'EXTRINSICS_VARIANCE_SAMPLE_SIGNER_ID_DESC',
  ExtrinsicsVarianceSampleSuccessAsc = 'EXTRINSICS_VARIANCE_SAMPLE_SUCCESS_ASC',
  ExtrinsicsVarianceSampleSuccessDesc = 'EXTRINSICS_VARIANCE_SAMPLE_SUCCESS_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MeritsAverageBlockIdAsc = 'MERITS_AVERAGE_BLOCK_ID_ASC',
  MeritsAverageBlockIdDesc = 'MERITS_AVERAGE_BLOCK_ID_DESC',
  MeritsAverageBlockNumberAsc = 'MERITS_AVERAGE_BLOCK_NUMBER_ASC',
  MeritsAverageBlockNumberDesc = 'MERITS_AVERAGE_BLOCK_NUMBER_DESC',
  MeritsAverageEventIndexAsc = 'MERITS_AVERAGE_EVENT_INDEX_ASC',
  MeritsAverageEventIndexDesc = 'MERITS_AVERAGE_EVENT_INDEX_DESC',
  MeritsAverageExtrinsicIndexAsc = 'MERITS_AVERAGE_EXTRINSIC_INDEX_ASC',
  MeritsAverageExtrinsicIndexDesc = 'MERITS_AVERAGE_EXTRINSIC_INDEX_DESC',
  MeritsAverageFromIdAsc = 'MERITS_AVERAGE_FROM_ID_ASC',
  MeritsAverageFromIdDesc = 'MERITS_AVERAGE_FROM_ID_DESC',
  MeritsAverageIdAsc = 'MERITS_AVERAGE_ID_ASC',
  MeritsAverageIdDesc = 'MERITS_AVERAGE_ID_DESC',
  MeritsAverageRemarkAsc = 'MERITS_AVERAGE_REMARK_ASC',
  MeritsAverageRemarkDesc = 'MERITS_AVERAGE_REMARK_DESC',
  MeritsAverageToIdAsc = 'MERITS_AVERAGE_TO_ID_ASC',
  MeritsAverageToIdDesc = 'MERITS_AVERAGE_TO_ID_DESC',
  MeritsAverageValueAsc = 'MERITS_AVERAGE_VALUE_ASC',
  MeritsAverageValueDesc = 'MERITS_AVERAGE_VALUE_DESC',
  MeritsCountAsc = 'MERITS_COUNT_ASC',
  MeritsCountDesc = 'MERITS_COUNT_DESC',
  MeritsDistinctCountBlockIdAsc = 'MERITS_DISTINCT_COUNT_BLOCK_ID_ASC',
  MeritsDistinctCountBlockIdDesc = 'MERITS_DISTINCT_COUNT_BLOCK_ID_DESC',
  MeritsDistinctCountBlockNumberAsc = 'MERITS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  MeritsDistinctCountBlockNumberDesc = 'MERITS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  MeritsDistinctCountEventIndexAsc = 'MERITS_DISTINCT_COUNT_EVENT_INDEX_ASC',
  MeritsDistinctCountEventIndexDesc = 'MERITS_DISTINCT_COUNT_EVENT_INDEX_DESC',
  MeritsDistinctCountExtrinsicIndexAsc = 'MERITS_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  MeritsDistinctCountExtrinsicIndexDesc = 'MERITS_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  MeritsDistinctCountFromIdAsc = 'MERITS_DISTINCT_COUNT_FROM_ID_ASC',
  MeritsDistinctCountFromIdDesc = 'MERITS_DISTINCT_COUNT_FROM_ID_DESC',
  MeritsDistinctCountIdAsc = 'MERITS_DISTINCT_COUNT_ID_ASC',
  MeritsDistinctCountIdDesc = 'MERITS_DISTINCT_COUNT_ID_DESC',
  MeritsDistinctCountRemarkAsc = 'MERITS_DISTINCT_COUNT_REMARK_ASC',
  MeritsDistinctCountRemarkDesc = 'MERITS_DISTINCT_COUNT_REMARK_DESC',
  MeritsDistinctCountToIdAsc = 'MERITS_DISTINCT_COUNT_TO_ID_ASC',
  MeritsDistinctCountToIdDesc = 'MERITS_DISTINCT_COUNT_TO_ID_DESC',
  MeritsDistinctCountValueAsc = 'MERITS_DISTINCT_COUNT_VALUE_ASC',
  MeritsDistinctCountValueDesc = 'MERITS_DISTINCT_COUNT_VALUE_DESC',
  MeritsMaxBlockIdAsc = 'MERITS_MAX_BLOCK_ID_ASC',
  MeritsMaxBlockIdDesc = 'MERITS_MAX_BLOCK_ID_DESC',
  MeritsMaxBlockNumberAsc = 'MERITS_MAX_BLOCK_NUMBER_ASC',
  MeritsMaxBlockNumberDesc = 'MERITS_MAX_BLOCK_NUMBER_DESC',
  MeritsMaxEventIndexAsc = 'MERITS_MAX_EVENT_INDEX_ASC',
  MeritsMaxEventIndexDesc = 'MERITS_MAX_EVENT_INDEX_DESC',
  MeritsMaxExtrinsicIndexAsc = 'MERITS_MAX_EXTRINSIC_INDEX_ASC',
  MeritsMaxExtrinsicIndexDesc = 'MERITS_MAX_EXTRINSIC_INDEX_DESC',
  MeritsMaxFromIdAsc = 'MERITS_MAX_FROM_ID_ASC',
  MeritsMaxFromIdDesc = 'MERITS_MAX_FROM_ID_DESC',
  MeritsMaxIdAsc = 'MERITS_MAX_ID_ASC',
  MeritsMaxIdDesc = 'MERITS_MAX_ID_DESC',
  MeritsMaxRemarkAsc = 'MERITS_MAX_REMARK_ASC',
  MeritsMaxRemarkDesc = 'MERITS_MAX_REMARK_DESC',
  MeritsMaxToIdAsc = 'MERITS_MAX_TO_ID_ASC',
  MeritsMaxToIdDesc = 'MERITS_MAX_TO_ID_DESC',
  MeritsMaxValueAsc = 'MERITS_MAX_VALUE_ASC',
  MeritsMaxValueDesc = 'MERITS_MAX_VALUE_DESC',
  MeritsMinBlockIdAsc = 'MERITS_MIN_BLOCK_ID_ASC',
  MeritsMinBlockIdDesc = 'MERITS_MIN_BLOCK_ID_DESC',
  MeritsMinBlockNumberAsc = 'MERITS_MIN_BLOCK_NUMBER_ASC',
  MeritsMinBlockNumberDesc = 'MERITS_MIN_BLOCK_NUMBER_DESC',
  MeritsMinEventIndexAsc = 'MERITS_MIN_EVENT_INDEX_ASC',
  MeritsMinEventIndexDesc = 'MERITS_MIN_EVENT_INDEX_DESC',
  MeritsMinExtrinsicIndexAsc = 'MERITS_MIN_EXTRINSIC_INDEX_ASC',
  MeritsMinExtrinsicIndexDesc = 'MERITS_MIN_EXTRINSIC_INDEX_DESC',
  MeritsMinFromIdAsc = 'MERITS_MIN_FROM_ID_ASC',
  MeritsMinFromIdDesc = 'MERITS_MIN_FROM_ID_DESC',
  MeritsMinIdAsc = 'MERITS_MIN_ID_ASC',
  MeritsMinIdDesc = 'MERITS_MIN_ID_DESC',
  MeritsMinRemarkAsc = 'MERITS_MIN_REMARK_ASC',
  MeritsMinRemarkDesc = 'MERITS_MIN_REMARK_DESC',
  MeritsMinToIdAsc = 'MERITS_MIN_TO_ID_ASC',
  MeritsMinToIdDesc = 'MERITS_MIN_TO_ID_DESC',
  MeritsMinValueAsc = 'MERITS_MIN_VALUE_ASC',
  MeritsMinValueDesc = 'MERITS_MIN_VALUE_DESC',
  MeritsStddevPopulationBlockIdAsc = 'MERITS_STDDEV_POPULATION_BLOCK_ID_ASC',
  MeritsStddevPopulationBlockIdDesc = 'MERITS_STDDEV_POPULATION_BLOCK_ID_DESC',
  MeritsStddevPopulationBlockNumberAsc = 'MERITS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  MeritsStddevPopulationBlockNumberDesc = 'MERITS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  MeritsStddevPopulationEventIndexAsc = 'MERITS_STDDEV_POPULATION_EVENT_INDEX_ASC',
  MeritsStddevPopulationEventIndexDesc = 'MERITS_STDDEV_POPULATION_EVENT_INDEX_DESC',
  MeritsStddevPopulationExtrinsicIndexAsc = 'MERITS_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  MeritsStddevPopulationExtrinsicIndexDesc = 'MERITS_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  MeritsStddevPopulationFromIdAsc = 'MERITS_STDDEV_POPULATION_FROM_ID_ASC',
  MeritsStddevPopulationFromIdDesc = 'MERITS_STDDEV_POPULATION_FROM_ID_DESC',
  MeritsStddevPopulationIdAsc = 'MERITS_STDDEV_POPULATION_ID_ASC',
  MeritsStddevPopulationIdDesc = 'MERITS_STDDEV_POPULATION_ID_DESC',
  MeritsStddevPopulationRemarkAsc = 'MERITS_STDDEV_POPULATION_REMARK_ASC',
  MeritsStddevPopulationRemarkDesc = 'MERITS_STDDEV_POPULATION_REMARK_DESC',
  MeritsStddevPopulationToIdAsc = 'MERITS_STDDEV_POPULATION_TO_ID_ASC',
  MeritsStddevPopulationToIdDesc = 'MERITS_STDDEV_POPULATION_TO_ID_DESC',
  MeritsStddevPopulationValueAsc = 'MERITS_STDDEV_POPULATION_VALUE_ASC',
  MeritsStddevPopulationValueDesc = 'MERITS_STDDEV_POPULATION_VALUE_DESC',
  MeritsStddevSampleBlockIdAsc = 'MERITS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  MeritsStddevSampleBlockIdDesc = 'MERITS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  MeritsStddevSampleBlockNumberAsc = 'MERITS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  MeritsStddevSampleBlockNumberDesc = 'MERITS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  MeritsStddevSampleEventIndexAsc = 'MERITS_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  MeritsStddevSampleEventIndexDesc = 'MERITS_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  MeritsStddevSampleExtrinsicIndexAsc = 'MERITS_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  MeritsStddevSampleExtrinsicIndexDesc = 'MERITS_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  MeritsStddevSampleFromIdAsc = 'MERITS_STDDEV_SAMPLE_FROM_ID_ASC',
  MeritsStddevSampleFromIdDesc = 'MERITS_STDDEV_SAMPLE_FROM_ID_DESC',
  MeritsStddevSampleIdAsc = 'MERITS_STDDEV_SAMPLE_ID_ASC',
  MeritsStddevSampleIdDesc = 'MERITS_STDDEV_SAMPLE_ID_DESC',
  MeritsStddevSampleRemarkAsc = 'MERITS_STDDEV_SAMPLE_REMARK_ASC',
  MeritsStddevSampleRemarkDesc = 'MERITS_STDDEV_SAMPLE_REMARK_DESC',
  MeritsStddevSampleToIdAsc = 'MERITS_STDDEV_SAMPLE_TO_ID_ASC',
  MeritsStddevSampleToIdDesc = 'MERITS_STDDEV_SAMPLE_TO_ID_DESC',
  MeritsStddevSampleValueAsc = 'MERITS_STDDEV_SAMPLE_VALUE_ASC',
  MeritsStddevSampleValueDesc = 'MERITS_STDDEV_SAMPLE_VALUE_DESC',
  MeritsSumBlockIdAsc = 'MERITS_SUM_BLOCK_ID_ASC',
  MeritsSumBlockIdDesc = 'MERITS_SUM_BLOCK_ID_DESC',
  MeritsSumBlockNumberAsc = 'MERITS_SUM_BLOCK_NUMBER_ASC',
  MeritsSumBlockNumberDesc = 'MERITS_SUM_BLOCK_NUMBER_DESC',
  MeritsSumEventIndexAsc = 'MERITS_SUM_EVENT_INDEX_ASC',
  MeritsSumEventIndexDesc = 'MERITS_SUM_EVENT_INDEX_DESC',
  MeritsSumExtrinsicIndexAsc = 'MERITS_SUM_EXTRINSIC_INDEX_ASC',
  MeritsSumExtrinsicIndexDesc = 'MERITS_SUM_EXTRINSIC_INDEX_DESC',
  MeritsSumFromIdAsc = 'MERITS_SUM_FROM_ID_ASC',
  MeritsSumFromIdDesc = 'MERITS_SUM_FROM_ID_DESC',
  MeritsSumIdAsc = 'MERITS_SUM_ID_ASC',
  MeritsSumIdDesc = 'MERITS_SUM_ID_DESC',
  MeritsSumRemarkAsc = 'MERITS_SUM_REMARK_ASC',
  MeritsSumRemarkDesc = 'MERITS_SUM_REMARK_DESC',
  MeritsSumToIdAsc = 'MERITS_SUM_TO_ID_ASC',
  MeritsSumToIdDesc = 'MERITS_SUM_TO_ID_DESC',
  MeritsSumValueAsc = 'MERITS_SUM_VALUE_ASC',
  MeritsSumValueDesc = 'MERITS_SUM_VALUE_DESC',
  MeritsVariancePopulationBlockIdAsc = 'MERITS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  MeritsVariancePopulationBlockIdDesc = 'MERITS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  MeritsVariancePopulationBlockNumberAsc = 'MERITS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  MeritsVariancePopulationBlockNumberDesc = 'MERITS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  MeritsVariancePopulationEventIndexAsc = 'MERITS_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  MeritsVariancePopulationEventIndexDesc = 'MERITS_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  MeritsVariancePopulationExtrinsicIndexAsc = 'MERITS_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  MeritsVariancePopulationExtrinsicIndexDesc = 'MERITS_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  MeritsVariancePopulationFromIdAsc = 'MERITS_VARIANCE_POPULATION_FROM_ID_ASC',
  MeritsVariancePopulationFromIdDesc = 'MERITS_VARIANCE_POPULATION_FROM_ID_DESC',
  MeritsVariancePopulationIdAsc = 'MERITS_VARIANCE_POPULATION_ID_ASC',
  MeritsVariancePopulationIdDesc = 'MERITS_VARIANCE_POPULATION_ID_DESC',
  MeritsVariancePopulationRemarkAsc = 'MERITS_VARIANCE_POPULATION_REMARK_ASC',
  MeritsVariancePopulationRemarkDesc = 'MERITS_VARIANCE_POPULATION_REMARK_DESC',
  MeritsVariancePopulationToIdAsc = 'MERITS_VARIANCE_POPULATION_TO_ID_ASC',
  MeritsVariancePopulationToIdDesc = 'MERITS_VARIANCE_POPULATION_TO_ID_DESC',
  MeritsVariancePopulationValueAsc = 'MERITS_VARIANCE_POPULATION_VALUE_ASC',
  MeritsVariancePopulationValueDesc = 'MERITS_VARIANCE_POPULATION_VALUE_DESC',
  MeritsVarianceSampleBlockIdAsc = 'MERITS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  MeritsVarianceSampleBlockIdDesc = 'MERITS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  MeritsVarianceSampleBlockNumberAsc = 'MERITS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  MeritsVarianceSampleBlockNumberDesc = 'MERITS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  MeritsVarianceSampleEventIndexAsc = 'MERITS_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  MeritsVarianceSampleEventIndexDesc = 'MERITS_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  MeritsVarianceSampleExtrinsicIndexAsc = 'MERITS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  MeritsVarianceSampleExtrinsicIndexDesc = 'MERITS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  MeritsVarianceSampleFromIdAsc = 'MERITS_VARIANCE_SAMPLE_FROM_ID_ASC',
  MeritsVarianceSampleFromIdDesc = 'MERITS_VARIANCE_SAMPLE_FROM_ID_DESC',
  MeritsVarianceSampleIdAsc = 'MERITS_VARIANCE_SAMPLE_ID_ASC',
  MeritsVarianceSampleIdDesc = 'MERITS_VARIANCE_SAMPLE_ID_DESC',
  MeritsVarianceSampleRemarkAsc = 'MERITS_VARIANCE_SAMPLE_REMARK_ASC',
  MeritsVarianceSampleRemarkDesc = 'MERITS_VARIANCE_SAMPLE_REMARK_DESC',
  MeritsVarianceSampleToIdAsc = 'MERITS_VARIANCE_SAMPLE_TO_ID_ASC',
  MeritsVarianceSampleToIdDesc = 'MERITS_VARIANCE_SAMPLE_TO_ID_DESC',
  MeritsVarianceSampleValueAsc = 'MERITS_VARIANCE_SAMPLE_VALUE_ASC',
  MeritsVarianceSampleValueDesc = 'MERITS_VARIANCE_SAMPLE_VALUE_DESC',
  Natural = 'NATURAL',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  ParentHashAsc = 'PARENT_HASH_ASC',
  ParentHashDesc = 'PARENT_HASH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SoraBurnedsAverageAssetAsc = 'SORA_BURNEDS_AVERAGE_ASSET_ASC',
  SoraBurnedsAverageAssetDesc = 'SORA_BURNEDS_AVERAGE_ASSET_DESC',
  SoraBurnedsAverageBlockIdAsc = 'SORA_BURNEDS_AVERAGE_BLOCK_ID_ASC',
  SoraBurnedsAverageBlockIdDesc = 'SORA_BURNEDS_AVERAGE_BLOCK_ID_DESC',
  SoraBurnedsAverageBlockNumberAsc = 'SORA_BURNEDS_AVERAGE_BLOCK_NUMBER_ASC',
  SoraBurnedsAverageBlockNumberDesc = 'SORA_BURNEDS_AVERAGE_BLOCK_NUMBER_DESC',
  SoraBurnedsAverageEventIndexAsc = 'SORA_BURNEDS_AVERAGE_EVENT_INDEX_ASC',
  SoraBurnedsAverageEventIndexDesc = 'SORA_BURNEDS_AVERAGE_EVENT_INDEX_DESC',
  SoraBurnedsAverageExtrinsicIndexAsc = 'SORA_BURNEDS_AVERAGE_EXTRINSIC_INDEX_ASC',
  SoraBurnedsAverageExtrinsicIndexDesc = 'SORA_BURNEDS_AVERAGE_EXTRINSIC_INDEX_DESC',
  SoraBurnedsAverageIdAsc = 'SORA_BURNEDS_AVERAGE_ID_ASC',
  SoraBurnedsAverageIdDesc = 'SORA_BURNEDS_AVERAGE_ID_DESC',
  SoraBurnedsAverageNetworkAsc = 'SORA_BURNEDS_AVERAGE_NETWORK_ASC',
  SoraBurnedsAverageNetworkDesc = 'SORA_BURNEDS_AVERAGE_NETWORK_DESC',
  SoraBurnedsAverageRecipientAsc = 'SORA_BURNEDS_AVERAGE_RECIPIENT_ASC',
  SoraBurnedsAverageRecipientDesc = 'SORA_BURNEDS_AVERAGE_RECIPIENT_DESC',
  SoraBurnedsAverageSenderIdAsc = 'SORA_BURNEDS_AVERAGE_SENDER_ID_ASC',
  SoraBurnedsAverageSenderIdDesc = 'SORA_BURNEDS_AVERAGE_SENDER_ID_DESC',
  SoraBurnedsAverageValueAsc = 'SORA_BURNEDS_AVERAGE_VALUE_ASC',
  SoraBurnedsAverageValueDesc = 'SORA_BURNEDS_AVERAGE_VALUE_DESC',
  SoraBurnedsCountAsc = 'SORA_BURNEDS_COUNT_ASC',
  SoraBurnedsCountDesc = 'SORA_BURNEDS_COUNT_DESC',
  SoraBurnedsDistinctCountAssetAsc = 'SORA_BURNEDS_DISTINCT_COUNT_ASSET_ASC',
  SoraBurnedsDistinctCountAssetDesc = 'SORA_BURNEDS_DISTINCT_COUNT_ASSET_DESC',
  SoraBurnedsDistinctCountBlockIdAsc = 'SORA_BURNEDS_DISTINCT_COUNT_BLOCK_ID_ASC',
  SoraBurnedsDistinctCountBlockIdDesc = 'SORA_BURNEDS_DISTINCT_COUNT_BLOCK_ID_DESC',
  SoraBurnedsDistinctCountBlockNumberAsc = 'SORA_BURNEDS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  SoraBurnedsDistinctCountBlockNumberDesc = 'SORA_BURNEDS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  SoraBurnedsDistinctCountEventIndexAsc = 'SORA_BURNEDS_DISTINCT_COUNT_EVENT_INDEX_ASC',
  SoraBurnedsDistinctCountEventIndexDesc = 'SORA_BURNEDS_DISTINCT_COUNT_EVENT_INDEX_DESC',
  SoraBurnedsDistinctCountExtrinsicIndexAsc = 'SORA_BURNEDS_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  SoraBurnedsDistinctCountExtrinsicIndexDesc = 'SORA_BURNEDS_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  SoraBurnedsDistinctCountIdAsc = 'SORA_BURNEDS_DISTINCT_COUNT_ID_ASC',
  SoraBurnedsDistinctCountIdDesc = 'SORA_BURNEDS_DISTINCT_COUNT_ID_DESC',
  SoraBurnedsDistinctCountNetworkAsc = 'SORA_BURNEDS_DISTINCT_COUNT_NETWORK_ASC',
  SoraBurnedsDistinctCountNetworkDesc = 'SORA_BURNEDS_DISTINCT_COUNT_NETWORK_DESC',
  SoraBurnedsDistinctCountRecipientAsc = 'SORA_BURNEDS_DISTINCT_COUNT_RECIPIENT_ASC',
  SoraBurnedsDistinctCountRecipientDesc = 'SORA_BURNEDS_DISTINCT_COUNT_RECIPIENT_DESC',
  SoraBurnedsDistinctCountSenderIdAsc = 'SORA_BURNEDS_DISTINCT_COUNT_SENDER_ID_ASC',
  SoraBurnedsDistinctCountSenderIdDesc = 'SORA_BURNEDS_DISTINCT_COUNT_SENDER_ID_DESC',
  SoraBurnedsDistinctCountValueAsc = 'SORA_BURNEDS_DISTINCT_COUNT_VALUE_ASC',
  SoraBurnedsDistinctCountValueDesc = 'SORA_BURNEDS_DISTINCT_COUNT_VALUE_DESC',
  SoraBurnedsMaxAssetAsc = 'SORA_BURNEDS_MAX_ASSET_ASC',
  SoraBurnedsMaxAssetDesc = 'SORA_BURNEDS_MAX_ASSET_DESC',
  SoraBurnedsMaxBlockIdAsc = 'SORA_BURNEDS_MAX_BLOCK_ID_ASC',
  SoraBurnedsMaxBlockIdDesc = 'SORA_BURNEDS_MAX_BLOCK_ID_DESC',
  SoraBurnedsMaxBlockNumberAsc = 'SORA_BURNEDS_MAX_BLOCK_NUMBER_ASC',
  SoraBurnedsMaxBlockNumberDesc = 'SORA_BURNEDS_MAX_BLOCK_NUMBER_DESC',
  SoraBurnedsMaxEventIndexAsc = 'SORA_BURNEDS_MAX_EVENT_INDEX_ASC',
  SoraBurnedsMaxEventIndexDesc = 'SORA_BURNEDS_MAX_EVENT_INDEX_DESC',
  SoraBurnedsMaxExtrinsicIndexAsc = 'SORA_BURNEDS_MAX_EXTRINSIC_INDEX_ASC',
  SoraBurnedsMaxExtrinsicIndexDesc = 'SORA_BURNEDS_MAX_EXTRINSIC_INDEX_DESC',
  SoraBurnedsMaxIdAsc = 'SORA_BURNEDS_MAX_ID_ASC',
  SoraBurnedsMaxIdDesc = 'SORA_BURNEDS_MAX_ID_DESC',
  SoraBurnedsMaxNetworkAsc = 'SORA_BURNEDS_MAX_NETWORK_ASC',
  SoraBurnedsMaxNetworkDesc = 'SORA_BURNEDS_MAX_NETWORK_DESC',
  SoraBurnedsMaxRecipientAsc = 'SORA_BURNEDS_MAX_RECIPIENT_ASC',
  SoraBurnedsMaxRecipientDesc = 'SORA_BURNEDS_MAX_RECIPIENT_DESC',
  SoraBurnedsMaxSenderIdAsc = 'SORA_BURNEDS_MAX_SENDER_ID_ASC',
  SoraBurnedsMaxSenderIdDesc = 'SORA_BURNEDS_MAX_SENDER_ID_DESC',
  SoraBurnedsMaxValueAsc = 'SORA_BURNEDS_MAX_VALUE_ASC',
  SoraBurnedsMaxValueDesc = 'SORA_BURNEDS_MAX_VALUE_DESC',
  SoraBurnedsMinAssetAsc = 'SORA_BURNEDS_MIN_ASSET_ASC',
  SoraBurnedsMinAssetDesc = 'SORA_BURNEDS_MIN_ASSET_DESC',
  SoraBurnedsMinBlockIdAsc = 'SORA_BURNEDS_MIN_BLOCK_ID_ASC',
  SoraBurnedsMinBlockIdDesc = 'SORA_BURNEDS_MIN_BLOCK_ID_DESC',
  SoraBurnedsMinBlockNumberAsc = 'SORA_BURNEDS_MIN_BLOCK_NUMBER_ASC',
  SoraBurnedsMinBlockNumberDesc = 'SORA_BURNEDS_MIN_BLOCK_NUMBER_DESC',
  SoraBurnedsMinEventIndexAsc = 'SORA_BURNEDS_MIN_EVENT_INDEX_ASC',
  SoraBurnedsMinEventIndexDesc = 'SORA_BURNEDS_MIN_EVENT_INDEX_DESC',
  SoraBurnedsMinExtrinsicIndexAsc = 'SORA_BURNEDS_MIN_EXTRINSIC_INDEX_ASC',
  SoraBurnedsMinExtrinsicIndexDesc = 'SORA_BURNEDS_MIN_EXTRINSIC_INDEX_DESC',
  SoraBurnedsMinIdAsc = 'SORA_BURNEDS_MIN_ID_ASC',
  SoraBurnedsMinIdDesc = 'SORA_BURNEDS_MIN_ID_DESC',
  SoraBurnedsMinNetworkAsc = 'SORA_BURNEDS_MIN_NETWORK_ASC',
  SoraBurnedsMinNetworkDesc = 'SORA_BURNEDS_MIN_NETWORK_DESC',
  SoraBurnedsMinRecipientAsc = 'SORA_BURNEDS_MIN_RECIPIENT_ASC',
  SoraBurnedsMinRecipientDesc = 'SORA_BURNEDS_MIN_RECIPIENT_DESC',
  SoraBurnedsMinSenderIdAsc = 'SORA_BURNEDS_MIN_SENDER_ID_ASC',
  SoraBurnedsMinSenderIdDesc = 'SORA_BURNEDS_MIN_SENDER_ID_DESC',
  SoraBurnedsMinValueAsc = 'SORA_BURNEDS_MIN_VALUE_ASC',
  SoraBurnedsMinValueDesc = 'SORA_BURNEDS_MIN_VALUE_DESC',
  SoraBurnedsStddevPopulationAssetAsc = 'SORA_BURNEDS_STDDEV_POPULATION_ASSET_ASC',
  SoraBurnedsStddevPopulationAssetDesc = 'SORA_BURNEDS_STDDEV_POPULATION_ASSET_DESC',
  SoraBurnedsStddevPopulationBlockIdAsc = 'SORA_BURNEDS_STDDEV_POPULATION_BLOCK_ID_ASC',
  SoraBurnedsStddevPopulationBlockIdDesc = 'SORA_BURNEDS_STDDEV_POPULATION_BLOCK_ID_DESC',
  SoraBurnedsStddevPopulationBlockNumberAsc = 'SORA_BURNEDS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  SoraBurnedsStddevPopulationBlockNumberDesc = 'SORA_BURNEDS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  SoraBurnedsStddevPopulationEventIndexAsc = 'SORA_BURNEDS_STDDEV_POPULATION_EVENT_INDEX_ASC',
  SoraBurnedsStddevPopulationEventIndexDesc = 'SORA_BURNEDS_STDDEV_POPULATION_EVENT_INDEX_DESC',
  SoraBurnedsStddevPopulationExtrinsicIndexAsc = 'SORA_BURNEDS_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  SoraBurnedsStddevPopulationExtrinsicIndexDesc = 'SORA_BURNEDS_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  SoraBurnedsStddevPopulationIdAsc = 'SORA_BURNEDS_STDDEV_POPULATION_ID_ASC',
  SoraBurnedsStddevPopulationIdDesc = 'SORA_BURNEDS_STDDEV_POPULATION_ID_DESC',
  SoraBurnedsStddevPopulationNetworkAsc = 'SORA_BURNEDS_STDDEV_POPULATION_NETWORK_ASC',
  SoraBurnedsStddevPopulationNetworkDesc = 'SORA_BURNEDS_STDDEV_POPULATION_NETWORK_DESC',
  SoraBurnedsStddevPopulationRecipientAsc = 'SORA_BURNEDS_STDDEV_POPULATION_RECIPIENT_ASC',
  SoraBurnedsStddevPopulationRecipientDesc = 'SORA_BURNEDS_STDDEV_POPULATION_RECIPIENT_DESC',
  SoraBurnedsStddevPopulationSenderIdAsc = 'SORA_BURNEDS_STDDEV_POPULATION_SENDER_ID_ASC',
  SoraBurnedsStddevPopulationSenderIdDesc = 'SORA_BURNEDS_STDDEV_POPULATION_SENDER_ID_DESC',
  SoraBurnedsStddevPopulationValueAsc = 'SORA_BURNEDS_STDDEV_POPULATION_VALUE_ASC',
  SoraBurnedsStddevPopulationValueDesc = 'SORA_BURNEDS_STDDEV_POPULATION_VALUE_DESC',
  SoraBurnedsStddevSampleAssetAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_ASSET_ASC',
  SoraBurnedsStddevSampleAssetDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_ASSET_DESC',
  SoraBurnedsStddevSampleBlockIdAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  SoraBurnedsStddevSampleBlockIdDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  SoraBurnedsStddevSampleBlockNumberAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  SoraBurnedsStddevSampleBlockNumberDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  SoraBurnedsStddevSampleEventIndexAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  SoraBurnedsStddevSampleEventIndexDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  SoraBurnedsStddevSampleExtrinsicIndexAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  SoraBurnedsStddevSampleExtrinsicIndexDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  SoraBurnedsStddevSampleIdAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_ID_ASC',
  SoraBurnedsStddevSampleIdDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_ID_DESC',
  SoraBurnedsStddevSampleNetworkAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_NETWORK_ASC',
  SoraBurnedsStddevSampleNetworkDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_NETWORK_DESC',
  SoraBurnedsStddevSampleRecipientAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_RECIPIENT_ASC',
  SoraBurnedsStddevSampleRecipientDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_RECIPIENT_DESC',
  SoraBurnedsStddevSampleSenderIdAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_SENDER_ID_ASC',
  SoraBurnedsStddevSampleSenderIdDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_SENDER_ID_DESC',
  SoraBurnedsStddevSampleValueAsc = 'SORA_BURNEDS_STDDEV_SAMPLE_VALUE_ASC',
  SoraBurnedsStddevSampleValueDesc = 'SORA_BURNEDS_STDDEV_SAMPLE_VALUE_DESC',
  SoraBurnedsSumAssetAsc = 'SORA_BURNEDS_SUM_ASSET_ASC',
  SoraBurnedsSumAssetDesc = 'SORA_BURNEDS_SUM_ASSET_DESC',
  SoraBurnedsSumBlockIdAsc = 'SORA_BURNEDS_SUM_BLOCK_ID_ASC',
  SoraBurnedsSumBlockIdDesc = 'SORA_BURNEDS_SUM_BLOCK_ID_DESC',
  SoraBurnedsSumBlockNumberAsc = 'SORA_BURNEDS_SUM_BLOCK_NUMBER_ASC',
  SoraBurnedsSumBlockNumberDesc = 'SORA_BURNEDS_SUM_BLOCK_NUMBER_DESC',
  SoraBurnedsSumEventIndexAsc = 'SORA_BURNEDS_SUM_EVENT_INDEX_ASC',
  SoraBurnedsSumEventIndexDesc = 'SORA_BURNEDS_SUM_EVENT_INDEX_DESC',
  SoraBurnedsSumExtrinsicIndexAsc = 'SORA_BURNEDS_SUM_EXTRINSIC_INDEX_ASC',
  SoraBurnedsSumExtrinsicIndexDesc = 'SORA_BURNEDS_SUM_EXTRINSIC_INDEX_DESC',
  SoraBurnedsSumIdAsc = 'SORA_BURNEDS_SUM_ID_ASC',
  SoraBurnedsSumIdDesc = 'SORA_BURNEDS_SUM_ID_DESC',
  SoraBurnedsSumNetworkAsc = 'SORA_BURNEDS_SUM_NETWORK_ASC',
  SoraBurnedsSumNetworkDesc = 'SORA_BURNEDS_SUM_NETWORK_DESC',
  SoraBurnedsSumRecipientAsc = 'SORA_BURNEDS_SUM_RECIPIENT_ASC',
  SoraBurnedsSumRecipientDesc = 'SORA_BURNEDS_SUM_RECIPIENT_DESC',
  SoraBurnedsSumSenderIdAsc = 'SORA_BURNEDS_SUM_SENDER_ID_ASC',
  SoraBurnedsSumSenderIdDesc = 'SORA_BURNEDS_SUM_SENDER_ID_DESC',
  SoraBurnedsSumValueAsc = 'SORA_BURNEDS_SUM_VALUE_ASC',
  SoraBurnedsSumValueDesc = 'SORA_BURNEDS_SUM_VALUE_DESC',
  SoraBurnedsVariancePopulationAssetAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_ASSET_ASC',
  SoraBurnedsVariancePopulationAssetDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_ASSET_DESC',
  SoraBurnedsVariancePopulationBlockIdAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  SoraBurnedsVariancePopulationBlockIdDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  SoraBurnedsVariancePopulationBlockNumberAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  SoraBurnedsVariancePopulationBlockNumberDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  SoraBurnedsVariancePopulationEventIndexAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  SoraBurnedsVariancePopulationEventIndexDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  SoraBurnedsVariancePopulationExtrinsicIndexAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  SoraBurnedsVariancePopulationExtrinsicIndexDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  SoraBurnedsVariancePopulationIdAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_ID_ASC',
  SoraBurnedsVariancePopulationIdDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_ID_DESC',
  SoraBurnedsVariancePopulationNetworkAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_NETWORK_ASC',
  SoraBurnedsVariancePopulationNetworkDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_NETWORK_DESC',
  SoraBurnedsVariancePopulationRecipientAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_RECIPIENT_ASC',
  SoraBurnedsVariancePopulationRecipientDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_RECIPIENT_DESC',
  SoraBurnedsVariancePopulationSenderIdAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_SENDER_ID_ASC',
  SoraBurnedsVariancePopulationSenderIdDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_SENDER_ID_DESC',
  SoraBurnedsVariancePopulationValueAsc = 'SORA_BURNEDS_VARIANCE_POPULATION_VALUE_ASC',
  SoraBurnedsVariancePopulationValueDesc = 'SORA_BURNEDS_VARIANCE_POPULATION_VALUE_DESC',
  SoraBurnedsVarianceSampleAssetAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_ASSET_ASC',
  SoraBurnedsVarianceSampleAssetDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_ASSET_DESC',
  SoraBurnedsVarianceSampleBlockIdAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  SoraBurnedsVarianceSampleBlockIdDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  SoraBurnedsVarianceSampleBlockNumberAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  SoraBurnedsVarianceSampleBlockNumberDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  SoraBurnedsVarianceSampleEventIndexAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  SoraBurnedsVarianceSampleEventIndexDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  SoraBurnedsVarianceSampleExtrinsicIndexAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  SoraBurnedsVarianceSampleExtrinsicIndexDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  SoraBurnedsVarianceSampleIdAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_ID_ASC',
  SoraBurnedsVarianceSampleIdDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_ID_DESC',
  SoraBurnedsVarianceSampleNetworkAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_NETWORK_ASC',
  SoraBurnedsVarianceSampleNetworkDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_NETWORK_DESC',
  SoraBurnedsVarianceSampleRecipientAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_RECIPIENT_ASC',
  SoraBurnedsVarianceSampleRecipientDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_RECIPIENT_DESC',
  SoraBurnedsVarianceSampleSenderIdAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_SENDER_ID_ASC',
  SoraBurnedsVarianceSampleSenderIdDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_SENDER_ID_DESC',
  SoraBurnedsVarianceSampleValueAsc = 'SORA_BURNEDS_VARIANCE_SAMPLE_VALUE_ASC',
  SoraBurnedsVarianceSampleValueDesc = 'SORA_BURNEDS_VARIANCE_SAMPLE_VALUE_DESC',
  SoraMintedsAverageAssetAsc = 'SORA_MINTEDS_AVERAGE_ASSET_ASC',
  SoraMintedsAverageAssetDesc = 'SORA_MINTEDS_AVERAGE_ASSET_DESC',
  SoraMintedsAverageBlockIdAsc = 'SORA_MINTEDS_AVERAGE_BLOCK_ID_ASC',
  SoraMintedsAverageBlockIdDesc = 'SORA_MINTEDS_AVERAGE_BLOCK_ID_DESC',
  SoraMintedsAverageBlockNumberAsc = 'SORA_MINTEDS_AVERAGE_BLOCK_NUMBER_ASC',
  SoraMintedsAverageBlockNumberDesc = 'SORA_MINTEDS_AVERAGE_BLOCK_NUMBER_DESC',
  SoraMintedsAverageEventIndexAsc = 'SORA_MINTEDS_AVERAGE_EVENT_INDEX_ASC',
  SoraMintedsAverageEventIndexDesc = 'SORA_MINTEDS_AVERAGE_EVENT_INDEX_DESC',
  SoraMintedsAverageExtrinsicIndexAsc = 'SORA_MINTEDS_AVERAGE_EXTRINSIC_INDEX_ASC',
  SoraMintedsAverageExtrinsicIndexDesc = 'SORA_MINTEDS_AVERAGE_EXTRINSIC_INDEX_DESC',
  SoraMintedsAverageIdAsc = 'SORA_MINTEDS_AVERAGE_ID_ASC',
  SoraMintedsAverageIdDesc = 'SORA_MINTEDS_AVERAGE_ID_DESC',
  SoraMintedsAverageNetworkAsc = 'SORA_MINTEDS_AVERAGE_NETWORK_ASC',
  SoraMintedsAverageNetworkDesc = 'SORA_MINTEDS_AVERAGE_NETWORK_DESC',
  SoraMintedsAverageRecipientIdAsc = 'SORA_MINTEDS_AVERAGE_RECIPIENT_ID_ASC',
  SoraMintedsAverageRecipientIdDesc = 'SORA_MINTEDS_AVERAGE_RECIPIENT_ID_DESC',
  SoraMintedsAverageSenderAsc = 'SORA_MINTEDS_AVERAGE_SENDER_ASC',
  SoraMintedsAverageSenderDesc = 'SORA_MINTEDS_AVERAGE_SENDER_DESC',
  SoraMintedsAverageValueAsc = 'SORA_MINTEDS_AVERAGE_VALUE_ASC',
  SoraMintedsAverageValueDesc = 'SORA_MINTEDS_AVERAGE_VALUE_DESC',
  SoraMintedsCountAsc = 'SORA_MINTEDS_COUNT_ASC',
  SoraMintedsCountDesc = 'SORA_MINTEDS_COUNT_DESC',
  SoraMintedsDistinctCountAssetAsc = 'SORA_MINTEDS_DISTINCT_COUNT_ASSET_ASC',
  SoraMintedsDistinctCountAssetDesc = 'SORA_MINTEDS_DISTINCT_COUNT_ASSET_DESC',
  SoraMintedsDistinctCountBlockIdAsc = 'SORA_MINTEDS_DISTINCT_COUNT_BLOCK_ID_ASC',
  SoraMintedsDistinctCountBlockIdDesc = 'SORA_MINTEDS_DISTINCT_COUNT_BLOCK_ID_DESC',
  SoraMintedsDistinctCountBlockNumberAsc = 'SORA_MINTEDS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  SoraMintedsDistinctCountBlockNumberDesc = 'SORA_MINTEDS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  SoraMintedsDistinctCountEventIndexAsc = 'SORA_MINTEDS_DISTINCT_COUNT_EVENT_INDEX_ASC',
  SoraMintedsDistinctCountEventIndexDesc = 'SORA_MINTEDS_DISTINCT_COUNT_EVENT_INDEX_DESC',
  SoraMintedsDistinctCountExtrinsicIndexAsc = 'SORA_MINTEDS_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  SoraMintedsDistinctCountExtrinsicIndexDesc = 'SORA_MINTEDS_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  SoraMintedsDistinctCountIdAsc = 'SORA_MINTEDS_DISTINCT_COUNT_ID_ASC',
  SoraMintedsDistinctCountIdDesc = 'SORA_MINTEDS_DISTINCT_COUNT_ID_DESC',
  SoraMintedsDistinctCountNetworkAsc = 'SORA_MINTEDS_DISTINCT_COUNT_NETWORK_ASC',
  SoraMintedsDistinctCountNetworkDesc = 'SORA_MINTEDS_DISTINCT_COUNT_NETWORK_DESC',
  SoraMintedsDistinctCountRecipientIdAsc = 'SORA_MINTEDS_DISTINCT_COUNT_RECIPIENT_ID_ASC',
  SoraMintedsDistinctCountRecipientIdDesc = 'SORA_MINTEDS_DISTINCT_COUNT_RECIPIENT_ID_DESC',
  SoraMintedsDistinctCountSenderAsc = 'SORA_MINTEDS_DISTINCT_COUNT_SENDER_ASC',
  SoraMintedsDistinctCountSenderDesc = 'SORA_MINTEDS_DISTINCT_COUNT_SENDER_DESC',
  SoraMintedsDistinctCountValueAsc = 'SORA_MINTEDS_DISTINCT_COUNT_VALUE_ASC',
  SoraMintedsDistinctCountValueDesc = 'SORA_MINTEDS_DISTINCT_COUNT_VALUE_DESC',
  SoraMintedsMaxAssetAsc = 'SORA_MINTEDS_MAX_ASSET_ASC',
  SoraMintedsMaxAssetDesc = 'SORA_MINTEDS_MAX_ASSET_DESC',
  SoraMintedsMaxBlockIdAsc = 'SORA_MINTEDS_MAX_BLOCK_ID_ASC',
  SoraMintedsMaxBlockIdDesc = 'SORA_MINTEDS_MAX_BLOCK_ID_DESC',
  SoraMintedsMaxBlockNumberAsc = 'SORA_MINTEDS_MAX_BLOCK_NUMBER_ASC',
  SoraMintedsMaxBlockNumberDesc = 'SORA_MINTEDS_MAX_BLOCK_NUMBER_DESC',
  SoraMintedsMaxEventIndexAsc = 'SORA_MINTEDS_MAX_EVENT_INDEX_ASC',
  SoraMintedsMaxEventIndexDesc = 'SORA_MINTEDS_MAX_EVENT_INDEX_DESC',
  SoraMintedsMaxExtrinsicIndexAsc = 'SORA_MINTEDS_MAX_EXTRINSIC_INDEX_ASC',
  SoraMintedsMaxExtrinsicIndexDesc = 'SORA_MINTEDS_MAX_EXTRINSIC_INDEX_DESC',
  SoraMintedsMaxIdAsc = 'SORA_MINTEDS_MAX_ID_ASC',
  SoraMintedsMaxIdDesc = 'SORA_MINTEDS_MAX_ID_DESC',
  SoraMintedsMaxNetworkAsc = 'SORA_MINTEDS_MAX_NETWORK_ASC',
  SoraMintedsMaxNetworkDesc = 'SORA_MINTEDS_MAX_NETWORK_DESC',
  SoraMintedsMaxRecipientIdAsc = 'SORA_MINTEDS_MAX_RECIPIENT_ID_ASC',
  SoraMintedsMaxRecipientIdDesc = 'SORA_MINTEDS_MAX_RECIPIENT_ID_DESC',
  SoraMintedsMaxSenderAsc = 'SORA_MINTEDS_MAX_SENDER_ASC',
  SoraMintedsMaxSenderDesc = 'SORA_MINTEDS_MAX_SENDER_DESC',
  SoraMintedsMaxValueAsc = 'SORA_MINTEDS_MAX_VALUE_ASC',
  SoraMintedsMaxValueDesc = 'SORA_MINTEDS_MAX_VALUE_DESC',
  SoraMintedsMinAssetAsc = 'SORA_MINTEDS_MIN_ASSET_ASC',
  SoraMintedsMinAssetDesc = 'SORA_MINTEDS_MIN_ASSET_DESC',
  SoraMintedsMinBlockIdAsc = 'SORA_MINTEDS_MIN_BLOCK_ID_ASC',
  SoraMintedsMinBlockIdDesc = 'SORA_MINTEDS_MIN_BLOCK_ID_DESC',
  SoraMintedsMinBlockNumberAsc = 'SORA_MINTEDS_MIN_BLOCK_NUMBER_ASC',
  SoraMintedsMinBlockNumberDesc = 'SORA_MINTEDS_MIN_BLOCK_NUMBER_DESC',
  SoraMintedsMinEventIndexAsc = 'SORA_MINTEDS_MIN_EVENT_INDEX_ASC',
  SoraMintedsMinEventIndexDesc = 'SORA_MINTEDS_MIN_EVENT_INDEX_DESC',
  SoraMintedsMinExtrinsicIndexAsc = 'SORA_MINTEDS_MIN_EXTRINSIC_INDEX_ASC',
  SoraMintedsMinExtrinsicIndexDesc = 'SORA_MINTEDS_MIN_EXTRINSIC_INDEX_DESC',
  SoraMintedsMinIdAsc = 'SORA_MINTEDS_MIN_ID_ASC',
  SoraMintedsMinIdDesc = 'SORA_MINTEDS_MIN_ID_DESC',
  SoraMintedsMinNetworkAsc = 'SORA_MINTEDS_MIN_NETWORK_ASC',
  SoraMintedsMinNetworkDesc = 'SORA_MINTEDS_MIN_NETWORK_DESC',
  SoraMintedsMinRecipientIdAsc = 'SORA_MINTEDS_MIN_RECIPIENT_ID_ASC',
  SoraMintedsMinRecipientIdDesc = 'SORA_MINTEDS_MIN_RECIPIENT_ID_DESC',
  SoraMintedsMinSenderAsc = 'SORA_MINTEDS_MIN_SENDER_ASC',
  SoraMintedsMinSenderDesc = 'SORA_MINTEDS_MIN_SENDER_DESC',
  SoraMintedsMinValueAsc = 'SORA_MINTEDS_MIN_VALUE_ASC',
  SoraMintedsMinValueDesc = 'SORA_MINTEDS_MIN_VALUE_DESC',
  SoraMintedsStddevPopulationAssetAsc = 'SORA_MINTEDS_STDDEV_POPULATION_ASSET_ASC',
  SoraMintedsStddevPopulationAssetDesc = 'SORA_MINTEDS_STDDEV_POPULATION_ASSET_DESC',
  SoraMintedsStddevPopulationBlockIdAsc = 'SORA_MINTEDS_STDDEV_POPULATION_BLOCK_ID_ASC',
  SoraMintedsStddevPopulationBlockIdDesc = 'SORA_MINTEDS_STDDEV_POPULATION_BLOCK_ID_DESC',
  SoraMintedsStddevPopulationBlockNumberAsc = 'SORA_MINTEDS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  SoraMintedsStddevPopulationBlockNumberDesc = 'SORA_MINTEDS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  SoraMintedsStddevPopulationEventIndexAsc = 'SORA_MINTEDS_STDDEV_POPULATION_EVENT_INDEX_ASC',
  SoraMintedsStddevPopulationEventIndexDesc = 'SORA_MINTEDS_STDDEV_POPULATION_EVENT_INDEX_DESC',
  SoraMintedsStddevPopulationExtrinsicIndexAsc = 'SORA_MINTEDS_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  SoraMintedsStddevPopulationExtrinsicIndexDesc = 'SORA_MINTEDS_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  SoraMintedsStddevPopulationIdAsc = 'SORA_MINTEDS_STDDEV_POPULATION_ID_ASC',
  SoraMintedsStddevPopulationIdDesc = 'SORA_MINTEDS_STDDEV_POPULATION_ID_DESC',
  SoraMintedsStddevPopulationNetworkAsc = 'SORA_MINTEDS_STDDEV_POPULATION_NETWORK_ASC',
  SoraMintedsStddevPopulationNetworkDesc = 'SORA_MINTEDS_STDDEV_POPULATION_NETWORK_DESC',
  SoraMintedsStddevPopulationRecipientIdAsc = 'SORA_MINTEDS_STDDEV_POPULATION_RECIPIENT_ID_ASC',
  SoraMintedsStddevPopulationRecipientIdDesc = 'SORA_MINTEDS_STDDEV_POPULATION_RECIPIENT_ID_DESC',
  SoraMintedsStddevPopulationSenderAsc = 'SORA_MINTEDS_STDDEV_POPULATION_SENDER_ASC',
  SoraMintedsStddevPopulationSenderDesc = 'SORA_MINTEDS_STDDEV_POPULATION_SENDER_DESC',
  SoraMintedsStddevPopulationValueAsc = 'SORA_MINTEDS_STDDEV_POPULATION_VALUE_ASC',
  SoraMintedsStddevPopulationValueDesc = 'SORA_MINTEDS_STDDEV_POPULATION_VALUE_DESC',
  SoraMintedsStddevSampleAssetAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_ASSET_ASC',
  SoraMintedsStddevSampleAssetDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_ASSET_DESC',
  SoraMintedsStddevSampleBlockIdAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  SoraMintedsStddevSampleBlockIdDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  SoraMintedsStddevSampleBlockNumberAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  SoraMintedsStddevSampleBlockNumberDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  SoraMintedsStddevSampleEventIndexAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  SoraMintedsStddevSampleEventIndexDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  SoraMintedsStddevSampleExtrinsicIndexAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  SoraMintedsStddevSampleExtrinsicIndexDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  SoraMintedsStddevSampleIdAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_ID_ASC',
  SoraMintedsStddevSampleIdDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_ID_DESC',
  SoraMintedsStddevSampleNetworkAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_NETWORK_ASC',
  SoraMintedsStddevSampleNetworkDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_NETWORK_DESC',
  SoraMintedsStddevSampleRecipientIdAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_RECIPIENT_ID_ASC',
  SoraMintedsStddevSampleRecipientIdDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_RECIPIENT_ID_DESC',
  SoraMintedsStddevSampleSenderAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_SENDER_ASC',
  SoraMintedsStddevSampleSenderDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_SENDER_DESC',
  SoraMintedsStddevSampleValueAsc = 'SORA_MINTEDS_STDDEV_SAMPLE_VALUE_ASC',
  SoraMintedsStddevSampleValueDesc = 'SORA_MINTEDS_STDDEV_SAMPLE_VALUE_DESC',
  SoraMintedsSumAssetAsc = 'SORA_MINTEDS_SUM_ASSET_ASC',
  SoraMintedsSumAssetDesc = 'SORA_MINTEDS_SUM_ASSET_DESC',
  SoraMintedsSumBlockIdAsc = 'SORA_MINTEDS_SUM_BLOCK_ID_ASC',
  SoraMintedsSumBlockIdDesc = 'SORA_MINTEDS_SUM_BLOCK_ID_DESC',
  SoraMintedsSumBlockNumberAsc = 'SORA_MINTEDS_SUM_BLOCK_NUMBER_ASC',
  SoraMintedsSumBlockNumberDesc = 'SORA_MINTEDS_SUM_BLOCK_NUMBER_DESC',
  SoraMintedsSumEventIndexAsc = 'SORA_MINTEDS_SUM_EVENT_INDEX_ASC',
  SoraMintedsSumEventIndexDesc = 'SORA_MINTEDS_SUM_EVENT_INDEX_DESC',
  SoraMintedsSumExtrinsicIndexAsc = 'SORA_MINTEDS_SUM_EXTRINSIC_INDEX_ASC',
  SoraMintedsSumExtrinsicIndexDesc = 'SORA_MINTEDS_SUM_EXTRINSIC_INDEX_DESC',
  SoraMintedsSumIdAsc = 'SORA_MINTEDS_SUM_ID_ASC',
  SoraMintedsSumIdDesc = 'SORA_MINTEDS_SUM_ID_DESC',
  SoraMintedsSumNetworkAsc = 'SORA_MINTEDS_SUM_NETWORK_ASC',
  SoraMintedsSumNetworkDesc = 'SORA_MINTEDS_SUM_NETWORK_DESC',
  SoraMintedsSumRecipientIdAsc = 'SORA_MINTEDS_SUM_RECIPIENT_ID_ASC',
  SoraMintedsSumRecipientIdDesc = 'SORA_MINTEDS_SUM_RECIPIENT_ID_DESC',
  SoraMintedsSumSenderAsc = 'SORA_MINTEDS_SUM_SENDER_ASC',
  SoraMintedsSumSenderDesc = 'SORA_MINTEDS_SUM_SENDER_DESC',
  SoraMintedsSumValueAsc = 'SORA_MINTEDS_SUM_VALUE_ASC',
  SoraMintedsSumValueDesc = 'SORA_MINTEDS_SUM_VALUE_DESC',
  SoraMintedsVariancePopulationAssetAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_ASSET_ASC',
  SoraMintedsVariancePopulationAssetDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_ASSET_DESC',
  SoraMintedsVariancePopulationBlockIdAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  SoraMintedsVariancePopulationBlockIdDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  SoraMintedsVariancePopulationBlockNumberAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  SoraMintedsVariancePopulationBlockNumberDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  SoraMintedsVariancePopulationEventIndexAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  SoraMintedsVariancePopulationEventIndexDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  SoraMintedsVariancePopulationExtrinsicIndexAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  SoraMintedsVariancePopulationExtrinsicIndexDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  SoraMintedsVariancePopulationIdAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_ID_ASC',
  SoraMintedsVariancePopulationIdDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_ID_DESC',
  SoraMintedsVariancePopulationNetworkAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_NETWORK_ASC',
  SoraMintedsVariancePopulationNetworkDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_NETWORK_DESC',
  SoraMintedsVariancePopulationRecipientIdAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_RECIPIENT_ID_ASC',
  SoraMintedsVariancePopulationRecipientIdDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_RECIPIENT_ID_DESC',
  SoraMintedsVariancePopulationSenderAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_SENDER_ASC',
  SoraMintedsVariancePopulationSenderDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_SENDER_DESC',
  SoraMintedsVariancePopulationValueAsc = 'SORA_MINTEDS_VARIANCE_POPULATION_VALUE_ASC',
  SoraMintedsVariancePopulationValueDesc = 'SORA_MINTEDS_VARIANCE_POPULATION_VALUE_DESC',
  SoraMintedsVarianceSampleAssetAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_ASSET_ASC',
  SoraMintedsVarianceSampleAssetDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_ASSET_DESC',
  SoraMintedsVarianceSampleBlockIdAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  SoraMintedsVarianceSampleBlockIdDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  SoraMintedsVarianceSampleBlockNumberAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  SoraMintedsVarianceSampleBlockNumberDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  SoraMintedsVarianceSampleEventIndexAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  SoraMintedsVarianceSampleEventIndexDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  SoraMintedsVarianceSampleExtrinsicIndexAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  SoraMintedsVarianceSampleExtrinsicIndexDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  SoraMintedsVarianceSampleIdAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_ID_ASC',
  SoraMintedsVarianceSampleIdDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_ID_DESC',
  SoraMintedsVarianceSampleNetworkAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_NETWORK_ASC',
  SoraMintedsVarianceSampleNetworkDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_NETWORK_DESC',
  SoraMintedsVarianceSampleRecipientIdAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_RECIPIENT_ID_ASC',
  SoraMintedsVarianceSampleRecipientIdDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_RECIPIENT_ID_DESC',
  SoraMintedsVarianceSampleSenderAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_SENDER_ASC',
  SoraMintedsVarianceSampleSenderDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_SENDER_DESC',
  SoraMintedsVarianceSampleValueAsc = 'SORA_MINTEDS_VARIANCE_SAMPLE_VALUE_ASC',
  SoraMintedsVarianceSampleValueDesc = 'SORA_MINTEDS_VARIANCE_SAMPLE_VALUE_DESC',
  SpecVersionAsc = 'SPEC_VERSION_ASC',
  SpecVersionDesc = 'SPEC_VERSION_DESC',
  StakingsAverageBlockIdAsc = 'STAKINGS_AVERAGE_BLOCK_ID_ASC',
  StakingsAverageBlockIdDesc = 'STAKINGS_AVERAGE_BLOCK_ID_DESC',
  StakingsAverageBlockNumberAsc = 'STAKINGS_AVERAGE_BLOCK_NUMBER_ASC',
  StakingsAverageBlockNumberDesc = 'STAKINGS_AVERAGE_BLOCK_NUMBER_DESC',
  StakingsAverageEventIndexAsc = 'STAKINGS_AVERAGE_EVENT_INDEX_ASC',
  StakingsAverageEventIndexDesc = 'STAKINGS_AVERAGE_EVENT_INDEX_DESC',
  StakingsAverageExtrinsicIndexAsc = 'STAKINGS_AVERAGE_EXTRINSIC_INDEX_ASC',
  StakingsAverageExtrinsicIndexDesc = 'STAKINGS_AVERAGE_EXTRINSIC_INDEX_DESC',
  StakingsAverageIdAsc = 'STAKINGS_AVERAGE_ID_ASC',
  StakingsAverageIdDesc = 'STAKINGS_AVERAGE_ID_DESC',
  StakingsAverageIsPositiveAsc = 'STAKINGS_AVERAGE_IS_POSITIVE_ASC',
  StakingsAverageIsPositiveDesc = 'STAKINGS_AVERAGE_IS_POSITIVE_DESC',
  StakingsAverageMethodAsc = 'STAKINGS_AVERAGE_METHOD_ASC',
  StakingsAverageMethodDesc = 'STAKINGS_AVERAGE_METHOD_DESC',
  StakingsAverageUserIdAsc = 'STAKINGS_AVERAGE_USER_ID_ASC',
  StakingsAverageUserIdDesc = 'STAKINGS_AVERAGE_USER_ID_DESC',
  StakingsAverageValueAsc = 'STAKINGS_AVERAGE_VALUE_ASC',
  StakingsAverageValueDesc = 'STAKINGS_AVERAGE_VALUE_DESC',
  StakingsCountAsc = 'STAKINGS_COUNT_ASC',
  StakingsCountDesc = 'STAKINGS_COUNT_DESC',
  StakingsDistinctCountBlockIdAsc = 'STAKINGS_DISTINCT_COUNT_BLOCK_ID_ASC',
  StakingsDistinctCountBlockIdDesc = 'STAKINGS_DISTINCT_COUNT_BLOCK_ID_DESC',
  StakingsDistinctCountBlockNumberAsc = 'STAKINGS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  StakingsDistinctCountBlockNumberDesc = 'STAKINGS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  StakingsDistinctCountEventIndexAsc = 'STAKINGS_DISTINCT_COUNT_EVENT_INDEX_ASC',
  StakingsDistinctCountEventIndexDesc = 'STAKINGS_DISTINCT_COUNT_EVENT_INDEX_DESC',
  StakingsDistinctCountExtrinsicIndexAsc = 'STAKINGS_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  StakingsDistinctCountExtrinsicIndexDesc = 'STAKINGS_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  StakingsDistinctCountIdAsc = 'STAKINGS_DISTINCT_COUNT_ID_ASC',
  StakingsDistinctCountIdDesc = 'STAKINGS_DISTINCT_COUNT_ID_DESC',
  StakingsDistinctCountIsPositiveAsc = 'STAKINGS_DISTINCT_COUNT_IS_POSITIVE_ASC',
  StakingsDistinctCountIsPositiveDesc = 'STAKINGS_DISTINCT_COUNT_IS_POSITIVE_DESC',
  StakingsDistinctCountMethodAsc = 'STAKINGS_DISTINCT_COUNT_METHOD_ASC',
  StakingsDistinctCountMethodDesc = 'STAKINGS_DISTINCT_COUNT_METHOD_DESC',
  StakingsDistinctCountUserIdAsc = 'STAKINGS_DISTINCT_COUNT_USER_ID_ASC',
  StakingsDistinctCountUserIdDesc = 'STAKINGS_DISTINCT_COUNT_USER_ID_DESC',
  StakingsDistinctCountValueAsc = 'STAKINGS_DISTINCT_COUNT_VALUE_ASC',
  StakingsDistinctCountValueDesc = 'STAKINGS_DISTINCT_COUNT_VALUE_DESC',
  StakingsMaxBlockIdAsc = 'STAKINGS_MAX_BLOCK_ID_ASC',
  StakingsMaxBlockIdDesc = 'STAKINGS_MAX_BLOCK_ID_DESC',
  StakingsMaxBlockNumberAsc = 'STAKINGS_MAX_BLOCK_NUMBER_ASC',
  StakingsMaxBlockNumberDesc = 'STAKINGS_MAX_BLOCK_NUMBER_DESC',
  StakingsMaxEventIndexAsc = 'STAKINGS_MAX_EVENT_INDEX_ASC',
  StakingsMaxEventIndexDesc = 'STAKINGS_MAX_EVENT_INDEX_DESC',
  StakingsMaxExtrinsicIndexAsc = 'STAKINGS_MAX_EXTRINSIC_INDEX_ASC',
  StakingsMaxExtrinsicIndexDesc = 'STAKINGS_MAX_EXTRINSIC_INDEX_DESC',
  StakingsMaxIdAsc = 'STAKINGS_MAX_ID_ASC',
  StakingsMaxIdDesc = 'STAKINGS_MAX_ID_DESC',
  StakingsMaxIsPositiveAsc = 'STAKINGS_MAX_IS_POSITIVE_ASC',
  StakingsMaxIsPositiveDesc = 'STAKINGS_MAX_IS_POSITIVE_DESC',
  StakingsMaxMethodAsc = 'STAKINGS_MAX_METHOD_ASC',
  StakingsMaxMethodDesc = 'STAKINGS_MAX_METHOD_DESC',
  StakingsMaxUserIdAsc = 'STAKINGS_MAX_USER_ID_ASC',
  StakingsMaxUserIdDesc = 'STAKINGS_MAX_USER_ID_DESC',
  StakingsMaxValueAsc = 'STAKINGS_MAX_VALUE_ASC',
  StakingsMaxValueDesc = 'STAKINGS_MAX_VALUE_DESC',
  StakingsMinBlockIdAsc = 'STAKINGS_MIN_BLOCK_ID_ASC',
  StakingsMinBlockIdDesc = 'STAKINGS_MIN_BLOCK_ID_DESC',
  StakingsMinBlockNumberAsc = 'STAKINGS_MIN_BLOCK_NUMBER_ASC',
  StakingsMinBlockNumberDesc = 'STAKINGS_MIN_BLOCK_NUMBER_DESC',
  StakingsMinEventIndexAsc = 'STAKINGS_MIN_EVENT_INDEX_ASC',
  StakingsMinEventIndexDesc = 'STAKINGS_MIN_EVENT_INDEX_DESC',
  StakingsMinExtrinsicIndexAsc = 'STAKINGS_MIN_EXTRINSIC_INDEX_ASC',
  StakingsMinExtrinsicIndexDesc = 'STAKINGS_MIN_EXTRINSIC_INDEX_DESC',
  StakingsMinIdAsc = 'STAKINGS_MIN_ID_ASC',
  StakingsMinIdDesc = 'STAKINGS_MIN_ID_DESC',
  StakingsMinIsPositiveAsc = 'STAKINGS_MIN_IS_POSITIVE_ASC',
  StakingsMinIsPositiveDesc = 'STAKINGS_MIN_IS_POSITIVE_DESC',
  StakingsMinMethodAsc = 'STAKINGS_MIN_METHOD_ASC',
  StakingsMinMethodDesc = 'STAKINGS_MIN_METHOD_DESC',
  StakingsMinUserIdAsc = 'STAKINGS_MIN_USER_ID_ASC',
  StakingsMinUserIdDesc = 'STAKINGS_MIN_USER_ID_DESC',
  StakingsMinValueAsc = 'STAKINGS_MIN_VALUE_ASC',
  StakingsMinValueDesc = 'STAKINGS_MIN_VALUE_DESC',
  StakingsStddevPopulationBlockIdAsc = 'STAKINGS_STDDEV_POPULATION_BLOCK_ID_ASC',
  StakingsStddevPopulationBlockIdDesc = 'STAKINGS_STDDEV_POPULATION_BLOCK_ID_DESC',
  StakingsStddevPopulationBlockNumberAsc = 'STAKINGS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  StakingsStddevPopulationBlockNumberDesc = 'STAKINGS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  StakingsStddevPopulationEventIndexAsc = 'STAKINGS_STDDEV_POPULATION_EVENT_INDEX_ASC',
  StakingsStddevPopulationEventIndexDesc = 'STAKINGS_STDDEV_POPULATION_EVENT_INDEX_DESC',
  StakingsStddevPopulationExtrinsicIndexAsc = 'STAKINGS_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  StakingsStddevPopulationExtrinsicIndexDesc = 'STAKINGS_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  StakingsStddevPopulationIdAsc = 'STAKINGS_STDDEV_POPULATION_ID_ASC',
  StakingsStddevPopulationIdDesc = 'STAKINGS_STDDEV_POPULATION_ID_DESC',
  StakingsStddevPopulationIsPositiveAsc = 'STAKINGS_STDDEV_POPULATION_IS_POSITIVE_ASC',
  StakingsStddevPopulationIsPositiveDesc = 'STAKINGS_STDDEV_POPULATION_IS_POSITIVE_DESC',
  StakingsStddevPopulationMethodAsc = 'STAKINGS_STDDEV_POPULATION_METHOD_ASC',
  StakingsStddevPopulationMethodDesc = 'STAKINGS_STDDEV_POPULATION_METHOD_DESC',
  StakingsStddevPopulationUserIdAsc = 'STAKINGS_STDDEV_POPULATION_USER_ID_ASC',
  StakingsStddevPopulationUserIdDesc = 'STAKINGS_STDDEV_POPULATION_USER_ID_DESC',
  StakingsStddevPopulationValueAsc = 'STAKINGS_STDDEV_POPULATION_VALUE_ASC',
  StakingsStddevPopulationValueDesc = 'STAKINGS_STDDEV_POPULATION_VALUE_DESC',
  StakingsStddevSampleBlockIdAsc = 'STAKINGS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  StakingsStddevSampleBlockIdDesc = 'STAKINGS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  StakingsStddevSampleBlockNumberAsc = 'STAKINGS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  StakingsStddevSampleBlockNumberDesc = 'STAKINGS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  StakingsStddevSampleEventIndexAsc = 'STAKINGS_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  StakingsStddevSampleEventIndexDesc = 'STAKINGS_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  StakingsStddevSampleExtrinsicIndexAsc = 'STAKINGS_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  StakingsStddevSampleExtrinsicIndexDesc = 'STAKINGS_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  StakingsStddevSampleIdAsc = 'STAKINGS_STDDEV_SAMPLE_ID_ASC',
  StakingsStddevSampleIdDesc = 'STAKINGS_STDDEV_SAMPLE_ID_DESC',
  StakingsStddevSampleIsPositiveAsc = 'STAKINGS_STDDEV_SAMPLE_IS_POSITIVE_ASC',
  StakingsStddevSampleIsPositiveDesc = 'STAKINGS_STDDEV_SAMPLE_IS_POSITIVE_DESC',
  StakingsStddevSampleMethodAsc = 'STAKINGS_STDDEV_SAMPLE_METHOD_ASC',
  StakingsStddevSampleMethodDesc = 'STAKINGS_STDDEV_SAMPLE_METHOD_DESC',
  StakingsStddevSampleUserIdAsc = 'STAKINGS_STDDEV_SAMPLE_USER_ID_ASC',
  StakingsStddevSampleUserIdDesc = 'STAKINGS_STDDEV_SAMPLE_USER_ID_DESC',
  StakingsStddevSampleValueAsc = 'STAKINGS_STDDEV_SAMPLE_VALUE_ASC',
  StakingsStddevSampleValueDesc = 'STAKINGS_STDDEV_SAMPLE_VALUE_DESC',
  StakingsSumBlockIdAsc = 'STAKINGS_SUM_BLOCK_ID_ASC',
  StakingsSumBlockIdDesc = 'STAKINGS_SUM_BLOCK_ID_DESC',
  StakingsSumBlockNumberAsc = 'STAKINGS_SUM_BLOCK_NUMBER_ASC',
  StakingsSumBlockNumberDesc = 'STAKINGS_SUM_BLOCK_NUMBER_DESC',
  StakingsSumEventIndexAsc = 'STAKINGS_SUM_EVENT_INDEX_ASC',
  StakingsSumEventIndexDesc = 'STAKINGS_SUM_EVENT_INDEX_DESC',
  StakingsSumExtrinsicIndexAsc = 'STAKINGS_SUM_EXTRINSIC_INDEX_ASC',
  StakingsSumExtrinsicIndexDesc = 'STAKINGS_SUM_EXTRINSIC_INDEX_DESC',
  StakingsSumIdAsc = 'STAKINGS_SUM_ID_ASC',
  StakingsSumIdDesc = 'STAKINGS_SUM_ID_DESC',
  StakingsSumIsPositiveAsc = 'STAKINGS_SUM_IS_POSITIVE_ASC',
  StakingsSumIsPositiveDesc = 'STAKINGS_SUM_IS_POSITIVE_DESC',
  StakingsSumMethodAsc = 'STAKINGS_SUM_METHOD_ASC',
  StakingsSumMethodDesc = 'STAKINGS_SUM_METHOD_DESC',
  StakingsSumUserIdAsc = 'STAKINGS_SUM_USER_ID_ASC',
  StakingsSumUserIdDesc = 'STAKINGS_SUM_USER_ID_DESC',
  StakingsSumValueAsc = 'STAKINGS_SUM_VALUE_ASC',
  StakingsSumValueDesc = 'STAKINGS_SUM_VALUE_DESC',
  StakingsVariancePopulationBlockIdAsc = 'STAKINGS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  StakingsVariancePopulationBlockIdDesc = 'STAKINGS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  StakingsVariancePopulationBlockNumberAsc = 'STAKINGS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  StakingsVariancePopulationBlockNumberDesc = 'STAKINGS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  StakingsVariancePopulationEventIndexAsc = 'STAKINGS_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  StakingsVariancePopulationEventIndexDesc = 'STAKINGS_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  StakingsVariancePopulationExtrinsicIndexAsc = 'STAKINGS_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  StakingsVariancePopulationExtrinsicIndexDesc = 'STAKINGS_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  StakingsVariancePopulationIdAsc = 'STAKINGS_VARIANCE_POPULATION_ID_ASC',
  StakingsVariancePopulationIdDesc = 'STAKINGS_VARIANCE_POPULATION_ID_DESC',
  StakingsVariancePopulationIsPositiveAsc = 'STAKINGS_VARIANCE_POPULATION_IS_POSITIVE_ASC',
  StakingsVariancePopulationIsPositiveDesc = 'STAKINGS_VARIANCE_POPULATION_IS_POSITIVE_DESC',
  StakingsVariancePopulationMethodAsc = 'STAKINGS_VARIANCE_POPULATION_METHOD_ASC',
  StakingsVariancePopulationMethodDesc = 'STAKINGS_VARIANCE_POPULATION_METHOD_DESC',
  StakingsVariancePopulationUserIdAsc = 'STAKINGS_VARIANCE_POPULATION_USER_ID_ASC',
  StakingsVariancePopulationUserIdDesc = 'STAKINGS_VARIANCE_POPULATION_USER_ID_DESC',
  StakingsVariancePopulationValueAsc = 'STAKINGS_VARIANCE_POPULATION_VALUE_ASC',
  StakingsVariancePopulationValueDesc = 'STAKINGS_VARIANCE_POPULATION_VALUE_DESC',
  StakingsVarianceSampleBlockIdAsc = 'STAKINGS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  StakingsVarianceSampleBlockIdDesc = 'STAKINGS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  StakingsVarianceSampleBlockNumberAsc = 'STAKINGS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  StakingsVarianceSampleBlockNumberDesc = 'STAKINGS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  StakingsVarianceSampleEventIndexAsc = 'STAKINGS_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  StakingsVarianceSampleEventIndexDesc = 'STAKINGS_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  StakingsVarianceSampleExtrinsicIndexAsc = 'STAKINGS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  StakingsVarianceSampleExtrinsicIndexDesc = 'STAKINGS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  StakingsVarianceSampleIdAsc = 'STAKINGS_VARIANCE_SAMPLE_ID_ASC',
  StakingsVarianceSampleIdDesc = 'STAKINGS_VARIANCE_SAMPLE_ID_DESC',
  StakingsVarianceSampleIsPositiveAsc = 'STAKINGS_VARIANCE_SAMPLE_IS_POSITIVE_ASC',
  StakingsVarianceSampleIsPositiveDesc = 'STAKINGS_VARIANCE_SAMPLE_IS_POSITIVE_DESC',
  StakingsVarianceSampleMethodAsc = 'STAKINGS_VARIANCE_SAMPLE_METHOD_ASC',
  StakingsVarianceSampleMethodDesc = 'STAKINGS_VARIANCE_SAMPLE_METHOD_DESC',
  StakingsVarianceSampleUserIdAsc = 'STAKINGS_VARIANCE_SAMPLE_USER_ID_ASC',
  StakingsVarianceSampleUserIdDesc = 'STAKINGS_VARIANCE_SAMPLE_USER_ID_DESC',
  StakingsVarianceSampleValueAsc = 'STAKINGS_VARIANCE_SAMPLE_VALUE_ASC',
  StakingsVarianceSampleValueDesc = 'STAKINGS_VARIANCE_SAMPLE_VALUE_DESC',
  StateRootAsc = 'STATE_ROOT_ASC',
  StateRootDesc = 'STATE_ROOT_DESC',
  TaxPoolsAverageAddressIdAsc = 'TAX_POOLS_AVERAGE_ADDRESS_ID_ASC',
  TaxPoolsAverageAddressIdDesc = 'TAX_POOLS_AVERAGE_ADDRESS_ID_DESC',
  TaxPoolsAverageBlockIdAsc = 'TAX_POOLS_AVERAGE_BLOCK_ID_ASC',
  TaxPoolsAverageBlockIdDesc = 'TAX_POOLS_AVERAGE_BLOCK_ID_DESC',
  TaxPoolsAverageBlockNumberAsc = 'TAX_POOLS_AVERAGE_BLOCK_NUMBER_ASC',
  TaxPoolsAverageBlockNumberDesc = 'TAX_POOLS_AVERAGE_BLOCK_NUMBER_DESC',
  TaxPoolsAverageEventIndexAsc = 'TAX_POOLS_AVERAGE_EVENT_INDEX_ASC',
  TaxPoolsAverageEventIndexDesc = 'TAX_POOLS_AVERAGE_EVENT_INDEX_DESC',
  TaxPoolsAverageExtrinsicIndexAsc = 'TAX_POOLS_AVERAGE_EXTRINSIC_INDEX_ASC',
  TaxPoolsAverageExtrinsicIndexDesc = 'TAX_POOLS_AVERAGE_EXTRINSIC_INDEX_DESC',
  TaxPoolsAverageIdAsc = 'TAX_POOLS_AVERAGE_ID_ASC',
  TaxPoolsAverageIdDesc = 'TAX_POOLS_AVERAGE_ID_DESC',
  TaxPoolsAverageValueAsc = 'TAX_POOLS_AVERAGE_VALUE_ASC',
  TaxPoolsAverageValueDesc = 'TAX_POOLS_AVERAGE_VALUE_DESC',
  TaxPoolsCountAsc = 'TAX_POOLS_COUNT_ASC',
  TaxPoolsCountDesc = 'TAX_POOLS_COUNT_DESC',
  TaxPoolsDistinctCountAddressIdAsc = 'TAX_POOLS_DISTINCT_COUNT_ADDRESS_ID_ASC',
  TaxPoolsDistinctCountAddressIdDesc = 'TAX_POOLS_DISTINCT_COUNT_ADDRESS_ID_DESC',
  TaxPoolsDistinctCountBlockIdAsc = 'TAX_POOLS_DISTINCT_COUNT_BLOCK_ID_ASC',
  TaxPoolsDistinctCountBlockIdDesc = 'TAX_POOLS_DISTINCT_COUNT_BLOCK_ID_DESC',
  TaxPoolsDistinctCountBlockNumberAsc = 'TAX_POOLS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  TaxPoolsDistinctCountBlockNumberDesc = 'TAX_POOLS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  TaxPoolsDistinctCountEventIndexAsc = 'TAX_POOLS_DISTINCT_COUNT_EVENT_INDEX_ASC',
  TaxPoolsDistinctCountEventIndexDesc = 'TAX_POOLS_DISTINCT_COUNT_EVENT_INDEX_DESC',
  TaxPoolsDistinctCountExtrinsicIndexAsc = 'TAX_POOLS_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  TaxPoolsDistinctCountExtrinsicIndexDesc = 'TAX_POOLS_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  TaxPoolsDistinctCountIdAsc = 'TAX_POOLS_DISTINCT_COUNT_ID_ASC',
  TaxPoolsDistinctCountIdDesc = 'TAX_POOLS_DISTINCT_COUNT_ID_DESC',
  TaxPoolsDistinctCountValueAsc = 'TAX_POOLS_DISTINCT_COUNT_VALUE_ASC',
  TaxPoolsDistinctCountValueDesc = 'TAX_POOLS_DISTINCT_COUNT_VALUE_DESC',
  TaxPoolsMaxAddressIdAsc = 'TAX_POOLS_MAX_ADDRESS_ID_ASC',
  TaxPoolsMaxAddressIdDesc = 'TAX_POOLS_MAX_ADDRESS_ID_DESC',
  TaxPoolsMaxBlockIdAsc = 'TAX_POOLS_MAX_BLOCK_ID_ASC',
  TaxPoolsMaxBlockIdDesc = 'TAX_POOLS_MAX_BLOCK_ID_DESC',
  TaxPoolsMaxBlockNumberAsc = 'TAX_POOLS_MAX_BLOCK_NUMBER_ASC',
  TaxPoolsMaxBlockNumberDesc = 'TAX_POOLS_MAX_BLOCK_NUMBER_DESC',
  TaxPoolsMaxEventIndexAsc = 'TAX_POOLS_MAX_EVENT_INDEX_ASC',
  TaxPoolsMaxEventIndexDesc = 'TAX_POOLS_MAX_EVENT_INDEX_DESC',
  TaxPoolsMaxExtrinsicIndexAsc = 'TAX_POOLS_MAX_EXTRINSIC_INDEX_ASC',
  TaxPoolsMaxExtrinsicIndexDesc = 'TAX_POOLS_MAX_EXTRINSIC_INDEX_DESC',
  TaxPoolsMaxIdAsc = 'TAX_POOLS_MAX_ID_ASC',
  TaxPoolsMaxIdDesc = 'TAX_POOLS_MAX_ID_DESC',
  TaxPoolsMaxValueAsc = 'TAX_POOLS_MAX_VALUE_ASC',
  TaxPoolsMaxValueDesc = 'TAX_POOLS_MAX_VALUE_DESC',
  TaxPoolsMinAddressIdAsc = 'TAX_POOLS_MIN_ADDRESS_ID_ASC',
  TaxPoolsMinAddressIdDesc = 'TAX_POOLS_MIN_ADDRESS_ID_DESC',
  TaxPoolsMinBlockIdAsc = 'TAX_POOLS_MIN_BLOCK_ID_ASC',
  TaxPoolsMinBlockIdDesc = 'TAX_POOLS_MIN_BLOCK_ID_DESC',
  TaxPoolsMinBlockNumberAsc = 'TAX_POOLS_MIN_BLOCK_NUMBER_ASC',
  TaxPoolsMinBlockNumberDesc = 'TAX_POOLS_MIN_BLOCK_NUMBER_DESC',
  TaxPoolsMinEventIndexAsc = 'TAX_POOLS_MIN_EVENT_INDEX_ASC',
  TaxPoolsMinEventIndexDesc = 'TAX_POOLS_MIN_EVENT_INDEX_DESC',
  TaxPoolsMinExtrinsicIndexAsc = 'TAX_POOLS_MIN_EXTRINSIC_INDEX_ASC',
  TaxPoolsMinExtrinsicIndexDesc = 'TAX_POOLS_MIN_EXTRINSIC_INDEX_DESC',
  TaxPoolsMinIdAsc = 'TAX_POOLS_MIN_ID_ASC',
  TaxPoolsMinIdDesc = 'TAX_POOLS_MIN_ID_DESC',
  TaxPoolsMinValueAsc = 'TAX_POOLS_MIN_VALUE_ASC',
  TaxPoolsMinValueDesc = 'TAX_POOLS_MIN_VALUE_DESC',
  TaxPoolsStddevPopulationAddressIdAsc = 'TAX_POOLS_STDDEV_POPULATION_ADDRESS_ID_ASC',
  TaxPoolsStddevPopulationAddressIdDesc = 'TAX_POOLS_STDDEV_POPULATION_ADDRESS_ID_DESC',
  TaxPoolsStddevPopulationBlockIdAsc = 'TAX_POOLS_STDDEV_POPULATION_BLOCK_ID_ASC',
  TaxPoolsStddevPopulationBlockIdDesc = 'TAX_POOLS_STDDEV_POPULATION_BLOCK_ID_DESC',
  TaxPoolsStddevPopulationBlockNumberAsc = 'TAX_POOLS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  TaxPoolsStddevPopulationBlockNumberDesc = 'TAX_POOLS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  TaxPoolsStddevPopulationEventIndexAsc = 'TAX_POOLS_STDDEV_POPULATION_EVENT_INDEX_ASC',
  TaxPoolsStddevPopulationEventIndexDesc = 'TAX_POOLS_STDDEV_POPULATION_EVENT_INDEX_DESC',
  TaxPoolsStddevPopulationExtrinsicIndexAsc = 'TAX_POOLS_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  TaxPoolsStddevPopulationExtrinsicIndexDesc = 'TAX_POOLS_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  TaxPoolsStddevPopulationIdAsc = 'TAX_POOLS_STDDEV_POPULATION_ID_ASC',
  TaxPoolsStddevPopulationIdDesc = 'TAX_POOLS_STDDEV_POPULATION_ID_DESC',
  TaxPoolsStddevPopulationValueAsc = 'TAX_POOLS_STDDEV_POPULATION_VALUE_ASC',
  TaxPoolsStddevPopulationValueDesc = 'TAX_POOLS_STDDEV_POPULATION_VALUE_DESC',
  TaxPoolsStddevSampleAddressIdAsc = 'TAX_POOLS_STDDEV_SAMPLE_ADDRESS_ID_ASC',
  TaxPoolsStddevSampleAddressIdDesc = 'TAX_POOLS_STDDEV_SAMPLE_ADDRESS_ID_DESC',
  TaxPoolsStddevSampleBlockIdAsc = 'TAX_POOLS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  TaxPoolsStddevSampleBlockIdDesc = 'TAX_POOLS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  TaxPoolsStddevSampleBlockNumberAsc = 'TAX_POOLS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  TaxPoolsStddevSampleBlockNumberDesc = 'TAX_POOLS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  TaxPoolsStddevSampleEventIndexAsc = 'TAX_POOLS_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  TaxPoolsStddevSampleEventIndexDesc = 'TAX_POOLS_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  TaxPoolsStddevSampleExtrinsicIndexAsc = 'TAX_POOLS_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  TaxPoolsStddevSampleExtrinsicIndexDesc = 'TAX_POOLS_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  TaxPoolsStddevSampleIdAsc = 'TAX_POOLS_STDDEV_SAMPLE_ID_ASC',
  TaxPoolsStddevSampleIdDesc = 'TAX_POOLS_STDDEV_SAMPLE_ID_DESC',
  TaxPoolsStddevSampleValueAsc = 'TAX_POOLS_STDDEV_SAMPLE_VALUE_ASC',
  TaxPoolsStddevSampleValueDesc = 'TAX_POOLS_STDDEV_SAMPLE_VALUE_DESC',
  TaxPoolsSumAddressIdAsc = 'TAX_POOLS_SUM_ADDRESS_ID_ASC',
  TaxPoolsSumAddressIdDesc = 'TAX_POOLS_SUM_ADDRESS_ID_DESC',
  TaxPoolsSumBlockIdAsc = 'TAX_POOLS_SUM_BLOCK_ID_ASC',
  TaxPoolsSumBlockIdDesc = 'TAX_POOLS_SUM_BLOCK_ID_DESC',
  TaxPoolsSumBlockNumberAsc = 'TAX_POOLS_SUM_BLOCK_NUMBER_ASC',
  TaxPoolsSumBlockNumberDesc = 'TAX_POOLS_SUM_BLOCK_NUMBER_DESC',
  TaxPoolsSumEventIndexAsc = 'TAX_POOLS_SUM_EVENT_INDEX_ASC',
  TaxPoolsSumEventIndexDesc = 'TAX_POOLS_SUM_EVENT_INDEX_DESC',
  TaxPoolsSumExtrinsicIndexAsc = 'TAX_POOLS_SUM_EXTRINSIC_INDEX_ASC',
  TaxPoolsSumExtrinsicIndexDesc = 'TAX_POOLS_SUM_EXTRINSIC_INDEX_DESC',
  TaxPoolsSumIdAsc = 'TAX_POOLS_SUM_ID_ASC',
  TaxPoolsSumIdDesc = 'TAX_POOLS_SUM_ID_DESC',
  TaxPoolsSumValueAsc = 'TAX_POOLS_SUM_VALUE_ASC',
  TaxPoolsSumValueDesc = 'TAX_POOLS_SUM_VALUE_DESC',
  TaxPoolsVariancePopulationAddressIdAsc = 'TAX_POOLS_VARIANCE_POPULATION_ADDRESS_ID_ASC',
  TaxPoolsVariancePopulationAddressIdDesc = 'TAX_POOLS_VARIANCE_POPULATION_ADDRESS_ID_DESC',
  TaxPoolsVariancePopulationBlockIdAsc = 'TAX_POOLS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  TaxPoolsVariancePopulationBlockIdDesc = 'TAX_POOLS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  TaxPoolsVariancePopulationBlockNumberAsc = 'TAX_POOLS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  TaxPoolsVariancePopulationBlockNumberDesc = 'TAX_POOLS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  TaxPoolsVariancePopulationEventIndexAsc = 'TAX_POOLS_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  TaxPoolsVariancePopulationEventIndexDesc = 'TAX_POOLS_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  TaxPoolsVariancePopulationExtrinsicIndexAsc = 'TAX_POOLS_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  TaxPoolsVariancePopulationExtrinsicIndexDesc = 'TAX_POOLS_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  TaxPoolsVariancePopulationIdAsc = 'TAX_POOLS_VARIANCE_POPULATION_ID_ASC',
  TaxPoolsVariancePopulationIdDesc = 'TAX_POOLS_VARIANCE_POPULATION_ID_DESC',
  TaxPoolsVariancePopulationValueAsc = 'TAX_POOLS_VARIANCE_POPULATION_VALUE_ASC',
  TaxPoolsVariancePopulationValueDesc = 'TAX_POOLS_VARIANCE_POPULATION_VALUE_DESC',
  TaxPoolsVarianceSampleAddressIdAsc = 'TAX_POOLS_VARIANCE_SAMPLE_ADDRESS_ID_ASC',
  TaxPoolsVarianceSampleAddressIdDesc = 'TAX_POOLS_VARIANCE_SAMPLE_ADDRESS_ID_DESC',
  TaxPoolsVarianceSampleBlockIdAsc = 'TAX_POOLS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  TaxPoolsVarianceSampleBlockIdDesc = 'TAX_POOLS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  TaxPoolsVarianceSampleBlockNumberAsc = 'TAX_POOLS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  TaxPoolsVarianceSampleBlockNumberDesc = 'TAX_POOLS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  TaxPoolsVarianceSampleEventIndexAsc = 'TAX_POOLS_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  TaxPoolsVarianceSampleEventIndexDesc = 'TAX_POOLS_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  TaxPoolsVarianceSampleExtrinsicIndexAsc = 'TAX_POOLS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  TaxPoolsVarianceSampleExtrinsicIndexDesc = 'TAX_POOLS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  TaxPoolsVarianceSampleIdAsc = 'TAX_POOLS_VARIANCE_SAMPLE_ID_ASC',
  TaxPoolsVarianceSampleIdDesc = 'TAX_POOLS_VARIANCE_SAMPLE_ID_DESC',
  TaxPoolsVarianceSampleValueAsc = 'TAX_POOLS_VARIANCE_SAMPLE_VALUE_ASC',
  TaxPoolsVarianceSampleValueDesc = 'TAX_POOLS_VARIANCE_SAMPLE_VALUE_DESC',
  TaxUnPoolsAverageAddressIdAsc = 'TAX_UN_POOLS_AVERAGE_ADDRESS_ID_ASC',
  TaxUnPoolsAverageAddressIdDesc = 'TAX_UN_POOLS_AVERAGE_ADDRESS_ID_DESC',
  TaxUnPoolsAverageBlockIdAsc = 'TAX_UN_POOLS_AVERAGE_BLOCK_ID_ASC',
  TaxUnPoolsAverageBlockIdDesc = 'TAX_UN_POOLS_AVERAGE_BLOCK_ID_DESC',
  TaxUnPoolsAverageBlockNumberAsc = 'TAX_UN_POOLS_AVERAGE_BLOCK_NUMBER_ASC',
  TaxUnPoolsAverageBlockNumberDesc = 'TAX_UN_POOLS_AVERAGE_BLOCK_NUMBER_DESC',
  TaxUnPoolsAverageEventIndexAsc = 'TAX_UN_POOLS_AVERAGE_EVENT_INDEX_ASC',
  TaxUnPoolsAverageEventIndexDesc = 'TAX_UN_POOLS_AVERAGE_EVENT_INDEX_DESC',
  TaxUnPoolsAverageExtrinsicIndexAsc = 'TAX_UN_POOLS_AVERAGE_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsAverageExtrinsicIndexDesc = 'TAX_UN_POOLS_AVERAGE_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsAverageIdAsc = 'TAX_UN_POOLS_AVERAGE_ID_ASC',
  TaxUnPoolsAverageIdDesc = 'TAX_UN_POOLS_AVERAGE_ID_DESC',
  TaxUnPoolsAverageValueAsc = 'TAX_UN_POOLS_AVERAGE_VALUE_ASC',
  TaxUnPoolsAverageValueDesc = 'TAX_UN_POOLS_AVERAGE_VALUE_DESC',
  TaxUnPoolsCountAsc = 'TAX_UN_POOLS_COUNT_ASC',
  TaxUnPoolsCountDesc = 'TAX_UN_POOLS_COUNT_DESC',
  TaxUnPoolsDistinctCountAddressIdAsc = 'TAX_UN_POOLS_DISTINCT_COUNT_ADDRESS_ID_ASC',
  TaxUnPoolsDistinctCountAddressIdDesc = 'TAX_UN_POOLS_DISTINCT_COUNT_ADDRESS_ID_DESC',
  TaxUnPoolsDistinctCountBlockIdAsc = 'TAX_UN_POOLS_DISTINCT_COUNT_BLOCK_ID_ASC',
  TaxUnPoolsDistinctCountBlockIdDesc = 'TAX_UN_POOLS_DISTINCT_COUNT_BLOCK_ID_DESC',
  TaxUnPoolsDistinctCountBlockNumberAsc = 'TAX_UN_POOLS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  TaxUnPoolsDistinctCountBlockNumberDesc = 'TAX_UN_POOLS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  TaxUnPoolsDistinctCountEventIndexAsc = 'TAX_UN_POOLS_DISTINCT_COUNT_EVENT_INDEX_ASC',
  TaxUnPoolsDistinctCountEventIndexDesc = 'TAX_UN_POOLS_DISTINCT_COUNT_EVENT_INDEX_DESC',
  TaxUnPoolsDistinctCountExtrinsicIndexAsc = 'TAX_UN_POOLS_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsDistinctCountExtrinsicIndexDesc = 'TAX_UN_POOLS_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsDistinctCountIdAsc = 'TAX_UN_POOLS_DISTINCT_COUNT_ID_ASC',
  TaxUnPoolsDistinctCountIdDesc = 'TAX_UN_POOLS_DISTINCT_COUNT_ID_DESC',
  TaxUnPoolsDistinctCountValueAsc = 'TAX_UN_POOLS_DISTINCT_COUNT_VALUE_ASC',
  TaxUnPoolsDistinctCountValueDesc = 'TAX_UN_POOLS_DISTINCT_COUNT_VALUE_DESC',
  TaxUnPoolsMaxAddressIdAsc = 'TAX_UN_POOLS_MAX_ADDRESS_ID_ASC',
  TaxUnPoolsMaxAddressIdDesc = 'TAX_UN_POOLS_MAX_ADDRESS_ID_DESC',
  TaxUnPoolsMaxBlockIdAsc = 'TAX_UN_POOLS_MAX_BLOCK_ID_ASC',
  TaxUnPoolsMaxBlockIdDesc = 'TAX_UN_POOLS_MAX_BLOCK_ID_DESC',
  TaxUnPoolsMaxBlockNumberAsc = 'TAX_UN_POOLS_MAX_BLOCK_NUMBER_ASC',
  TaxUnPoolsMaxBlockNumberDesc = 'TAX_UN_POOLS_MAX_BLOCK_NUMBER_DESC',
  TaxUnPoolsMaxEventIndexAsc = 'TAX_UN_POOLS_MAX_EVENT_INDEX_ASC',
  TaxUnPoolsMaxEventIndexDesc = 'TAX_UN_POOLS_MAX_EVENT_INDEX_DESC',
  TaxUnPoolsMaxExtrinsicIndexAsc = 'TAX_UN_POOLS_MAX_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsMaxExtrinsicIndexDesc = 'TAX_UN_POOLS_MAX_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsMaxIdAsc = 'TAX_UN_POOLS_MAX_ID_ASC',
  TaxUnPoolsMaxIdDesc = 'TAX_UN_POOLS_MAX_ID_DESC',
  TaxUnPoolsMaxValueAsc = 'TAX_UN_POOLS_MAX_VALUE_ASC',
  TaxUnPoolsMaxValueDesc = 'TAX_UN_POOLS_MAX_VALUE_DESC',
  TaxUnPoolsMinAddressIdAsc = 'TAX_UN_POOLS_MIN_ADDRESS_ID_ASC',
  TaxUnPoolsMinAddressIdDesc = 'TAX_UN_POOLS_MIN_ADDRESS_ID_DESC',
  TaxUnPoolsMinBlockIdAsc = 'TAX_UN_POOLS_MIN_BLOCK_ID_ASC',
  TaxUnPoolsMinBlockIdDesc = 'TAX_UN_POOLS_MIN_BLOCK_ID_DESC',
  TaxUnPoolsMinBlockNumberAsc = 'TAX_UN_POOLS_MIN_BLOCK_NUMBER_ASC',
  TaxUnPoolsMinBlockNumberDesc = 'TAX_UN_POOLS_MIN_BLOCK_NUMBER_DESC',
  TaxUnPoolsMinEventIndexAsc = 'TAX_UN_POOLS_MIN_EVENT_INDEX_ASC',
  TaxUnPoolsMinEventIndexDesc = 'TAX_UN_POOLS_MIN_EVENT_INDEX_DESC',
  TaxUnPoolsMinExtrinsicIndexAsc = 'TAX_UN_POOLS_MIN_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsMinExtrinsicIndexDesc = 'TAX_UN_POOLS_MIN_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsMinIdAsc = 'TAX_UN_POOLS_MIN_ID_ASC',
  TaxUnPoolsMinIdDesc = 'TAX_UN_POOLS_MIN_ID_DESC',
  TaxUnPoolsMinValueAsc = 'TAX_UN_POOLS_MIN_VALUE_ASC',
  TaxUnPoolsMinValueDesc = 'TAX_UN_POOLS_MIN_VALUE_DESC',
  TaxUnPoolsStddevPopulationAddressIdAsc = 'TAX_UN_POOLS_STDDEV_POPULATION_ADDRESS_ID_ASC',
  TaxUnPoolsStddevPopulationAddressIdDesc = 'TAX_UN_POOLS_STDDEV_POPULATION_ADDRESS_ID_DESC',
  TaxUnPoolsStddevPopulationBlockIdAsc = 'TAX_UN_POOLS_STDDEV_POPULATION_BLOCK_ID_ASC',
  TaxUnPoolsStddevPopulationBlockIdDesc = 'TAX_UN_POOLS_STDDEV_POPULATION_BLOCK_ID_DESC',
  TaxUnPoolsStddevPopulationBlockNumberAsc = 'TAX_UN_POOLS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  TaxUnPoolsStddevPopulationBlockNumberDesc = 'TAX_UN_POOLS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  TaxUnPoolsStddevPopulationEventIndexAsc = 'TAX_UN_POOLS_STDDEV_POPULATION_EVENT_INDEX_ASC',
  TaxUnPoolsStddevPopulationEventIndexDesc = 'TAX_UN_POOLS_STDDEV_POPULATION_EVENT_INDEX_DESC',
  TaxUnPoolsStddevPopulationExtrinsicIndexAsc = 'TAX_UN_POOLS_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsStddevPopulationExtrinsicIndexDesc = 'TAX_UN_POOLS_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsStddevPopulationIdAsc = 'TAX_UN_POOLS_STDDEV_POPULATION_ID_ASC',
  TaxUnPoolsStddevPopulationIdDesc = 'TAX_UN_POOLS_STDDEV_POPULATION_ID_DESC',
  TaxUnPoolsStddevPopulationValueAsc = 'TAX_UN_POOLS_STDDEV_POPULATION_VALUE_ASC',
  TaxUnPoolsStddevPopulationValueDesc = 'TAX_UN_POOLS_STDDEV_POPULATION_VALUE_DESC',
  TaxUnPoolsStddevSampleAddressIdAsc = 'TAX_UN_POOLS_STDDEV_SAMPLE_ADDRESS_ID_ASC',
  TaxUnPoolsStddevSampleAddressIdDesc = 'TAX_UN_POOLS_STDDEV_SAMPLE_ADDRESS_ID_DESC',
  TaxUnPoolsStddevSampleBlockIdAsc = 'TAX_UN_POOLS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  TaxUnPoolsStddevSampleBlockIdDesc = 'TAX_UN_POOLS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  TaxUnPoolsStddevSampleBlockNumberAsc = 'TAX_UN_POOLS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  TaxUnPoolsStddevSampleBlockNumberDesc = 'TAX_UN_POOLS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  TaxUnPoolsStddevSampleEventIndexAsc = 'TAX_UN_POOLS_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  TaxUnPoolsStddevSampleEventIndexDesc = 'TAX_UN_POOLS_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  TaxUnPoolsStddevSampleExtrinsicIndexAsc = 'TAX_UN_POOLS_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsStddevSampleExtrinsicIndexDesc = 'TAX_UN_POOLS_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsStddevSampleIdAsc = 'TAX_UN_POOLS_STDDEV_SAMPLE_ID_ASC',
  TaxUnPoolsStddevSampleIdDesc = 'TAX_UN_POOLS_STDDEV_SAMPLE_ID_DESC',
  TaxUnPoolsStddevSampleValueAsc = 'TAX_UN_POOLS_STDDEV_SAMPLE_VALUE_ASC',
  TaxUnPoolsStddevSampleValueDesc = 'TAX_UN_POOLS_STDDEV_SAMPLE_VALUE_DESC',
  TaxUnPoolsSumAddressIdAsc = 'TAX_UN_POOLS_SUM_ADDRESS_ID_ASC',
  TaxUnPoolsSumAddressIdDesc = 'TAX_UN_POOLS_SUM_ADDRESS_ID_DESC',
  TaxUnPoolsSumBlockIdAsc = 'TAX_UN_POOLS_SUM_BLOCK_ID_ASC',
  TaxUnPoolsSumBlockIdDesc = 'TAX_UN_POOLS_SUM_BLOCK_ID_DESC',
  TaxUnPoolsSumBlockNumberAsc = 'TAX_UN_POOLS_SUM_BLOCK_NUMBER_ASC',
  TaxUnPoolsSumBlockNumberDesc = 'TAX_UN_POOLS_SUM_BLOCK_NUMBER_DESC',
  TaxUnPoolsSumEventIndexAsc = 'TAX_UN_POOLS_SUM_EVENT_INDEX_ASC',
  TaxUnPoolsSumEventIndexDesc = 'TAX_UN_POOLS_SUM_EVENT_INDEX_DESC',
  TaxUnPoolsSumExtrinsicIndexAsc = 'TAX_UN_POOLS_SUM_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsSumExtrinsicIndexDesc = 'TAX_UN_POOLS_SUM_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsSumIdAsc = 'TAX_UN_POOLS_SUM_ID_ASC',
  TaxUnPoolsSumIdDesc = 'TAX_UN_POOLS_SUM_ID_DESC',
  TaxUnPoolsSumValueAsc = 'TAX_UN_POOLS_SUM_VALUE_ASC',
  TaxUnPoolsSumValueDesc = 'TAX_UN_POOLS_SUM_VALUE_DESC',
  TaxUnPoolsVariancePopulationAddressIdAsc = 'TAX_UN_POOLS_VARIANCE_POPULATION_ADDRESS_ID_ASC',
  TaxUnPoolsVariancePopulationAddressIdDesc = 'TAX_UN_POOLS_VARIANCE_POPULATION_ADDRESS_ID_DESC',
  TaxUnPoolsVariancePopulationBlockIdAsc = 'TAX_UN_POOLS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  TaxUnPoolsVariancePopulationBlockIdDesc = 'TAX_UN_POOLS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  TaxUnPoolsVariancePopulationBlockNumberAsc = 'TAX_UN_POOLS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  TaxUnPoolsVariancePopulationBlockNumberDesc = 'TAX_UN_POOLS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  TaxUnPoolsVariancePopulationEventIndexAsc = 'TAX_UN_POOLS_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  TaxUnPoolsVariancePopulationEventIndexDesc = 'TAX_UN_POOLS_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  TaxUnPoolsVariancePopulationExtrinsicIndexAsc = 'TAX_UN_POOLS_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsVariancePopulationExtrinsicIndexDesc = 'TAX_UN_POOLS_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsVariancePopulationIdAsc = 'TAX_UN_POOLS_VARIANCE_POPULATION_ID_ASC',
  TaxUnPoolsVariancePopulationIdDesc = 'TAX_UN_POOLS_VARIANCE_POPULATION_ID_DESC',
  TaxUnPoolsVariancePopulationValueAsc = 'TAX_UN_POOLS_VARIANCE_POPULATION_VALUE_ASC',
  TaxUnPoolsVariancePopulationValueDesc = 'TAX_UN_POOLS_VARIANCE_POPULATION_VALUE_DESC',
  TaxUnPoolsVarianceSampleAddressIdAsc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_ADDRESS_ID_ASC',
  TaxUnPoolsVarianceSampleAddressIdDesc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_ADDRESS_ID_DESC',
  TaxUnPoolsVarianceSampleBlockIdAsc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  TaxUnPoolsVarianceSampleBlockIdDesc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  TaxUnPoolsVarianceSampleBlockNumberAsc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  TaxUnPoolsVarianceSampleBlockNumberDesc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  TaxUnPoolsVarianceSampleEventIndexAsc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  TaxUnPoolsVarianceSampleEventIndexDesc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  TaxUnPoolsVarianceSampleExtrinsicIndexAsc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  TaxUnPoolsVarianceSampleExtrinsicIndexDesc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  TaxUnPoolsVarianceSampleIdAsc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_ID_ASC',
  TaxUnPoolsVarianceSampleIdDesc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_ID_DESC',
  TaxUnPoolsVarianceSampleValueAsc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_VALUE_ASC',
  TaxUnPoolsVarianceSampleValueDesc = 'TAX_UN_POOLS_VARIANCE_SAMPLE_VALUE_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TransfersAverageBlockIdAsc = 'TRANSFERS_AVERAGE_BLOCK_ID_ASC',
  TransfersAverageBlockIdDesc = 'TRANSFERS_AVERAGE_BLOCK_ID_DESC',
  TransfersAverageBlockNumberAsc = 'TRANSFERS_AVERAGE_BLOCK_NUMBER_ASC',
  TransfersAverageBlockNumberDesc = 'TRANSFERS_AVERAGE_BLOCK_NUMBER_DESC',
  TransfersAverageEventIndexAsc = 'TRANSFERS_AVERAGE_EVENT_INDEX_ASC',
  TransfersAverageEventIndexDesc = 'TRANSFERS_AVERAGE_EVENT_INDEX_DESC',
  TransfersAverageExtrinsicIndexAsc = 'TRANSFERS_AVERAGE_EXTRINSIC_INDEX_ASC',
  TransfersAverageExtrinsicIndexDesc = 'TRANSFERS_AVERAGE_EXTRINSIC_INDEX_DESC',
  TransfersAverageFromIdAsc = 'TRANSFERS_AVERAGE_FROM_ID_ASC',
  TransfersAverageFromIdDesc = 'TRANSFERS_AVERAGE_FROM_ID_DESC',
  TransfersAverageIdAsc = 'TRANSFERS_AVERAGE_ID_ASC',
  TransfersAverageIdDesc = 'TRANSFERS_AVERAGE_ID_DESC',
  TransfersAverageRemarkAsc = 'TRANSFERS_AVERAGE_REMARK_ASC',
  TransfersAverageRemarkDesc = 'TRANSFERS_AVERAGE_REMARK_DESC',
  TransfersAverageToIdAsc = 'TRANSFERS_AVERAGE_TO_ID_ASC',
  TransfersAverageToIdDesc = 'TRANSFERS_AVERAGE_TO_ID_DESC',
  TransfersAverageValueAsc = 'TRANSFERS_AVERAGE_VALUE_ASC',
  TransfersAverageValueDesc = 'TRANSFERS_AVERAGE_VALUE_DESC',
  TransfersCountAsc = 'TRANSFERS_COUNT_ASC',
  TransfersCountDesc = 'TRANSFERS_COUNT_DESC',
  TransfersDistinctCountBlockIdAsc = 'TRANSFERS_DISTINCT_COUNT_BLOCK_ID_ASC',
  TransfersDistinctCountBlockIdDesc = 'TRANSFERS_DISTINCT_COUNT_BLOCK_ID_DESC',
  TransfersDistinctCountBlockNumberAsc = 'TRANSFERS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  TransfersDistinctCountBlockNumberDesc = 'TRANSFERS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  TransfersDistinctCountEventIndexAsc = 'TRANSFERS_DISTINCT_COUNT_EVENT_INDEX_ASC',
  TransfersDistinctCountEventIndexDesc = 'TRANSFERS_DISTINCT_COUNT_EVENT_INDEX_DESC',
  TransfersDistinctCountExtrinsicIndexAsc = 'TRANSFERS_DISTINCT_COUNT_EXTRINSIC_INDEX_ASC',
  TransfersDistinctCountExtrinsicIndexDesc = 'TRANSFERS_DISTINCT_COUNT_EXTRINSIC_INDEX_DESC',
  TransfersDistinctCountFromIdAsc = 'TRANSFERS_DISTINCT_COUNT_FROM_ID_ASC',
  TransfersDistinctCountFromIdDesc = 'TRANSFERS_DISTINCT_COUNT_FROM_ID_DESC',
  TransfersDistinctCountIdAsc = 'TRANSFERS_DISTINCT_COUNT_ID_ASC',
  TransfersDistinctCountIdDesc = 'TRANSFERS_DISTINCT_COUNT_ID_DESC',
  TransfersDistinctCountRemarkAsc = 'TRANSFERS_DISTINCT_COUNT_REMARK_ASC',
  TransfersDistinctCountRemarkDesc = 'TRANSFERS_DISTINCT_COUNT_REMARK_DESC',
  TransfersDistinctCountToIdAsc = 'TRANSFERS_DISTINCT_COUNT_TO_ID_ASC',
  TransfersDistinctCountToIdDesc = 'TRANSFERS_DISTINCT_COUNT_TO_ID_DESC',
  TransfersDistinctCountValueAsc = 'TRANSFERS_DISTINCT_COUNT_VALUE_ASC',
  TransfersDistinctCountValueDesc = 'TRANSFERS_DISTINCT_COUNT_VALUE_DESC',
  TransfersMaxBlockIdAsc = 'TRANSFERS_MAX_BLOCK_ID_ASC',
  TransfersMaxBlockIdDesc = 'TRANSFERS_MAX_BLOCK_ID_DESC',
  TransfersMaxBlockNumberAsc = 'TRANSFERS_MAX_BLOCK_NUMBER_ASC',
  TransfersMaxBlockNumberDesc = 'TRANSFERS_MAX_BLOCK_NUMBER_DESC',
  TransfersMaxEventIndexAsc = 'TRANSFERS_MAX_EVENT_INDEX_ASC',
  TransfersMaxEventIndexDesc = 'TRANSFERS_MAX_EVENT_INDEX_DESC',
  TransfersMaxExtrinsicIndexAsc = 'TRANSFERS_MAX_EXTRINSIC_INDEX_ASC',
  TransfersMaxExtrinsicIndexDesc = 'TRANSFERS_MAX_EXTRINSIC_INDEX_DESC',
  TransfersMaxFromIdAsc = 'TRANSFERS_MAX_FROM_ID_ASC',
  TransfersMaxFromIdDesc = 'TRANSFERS_MAX_FROM_ID_DESC',
  TransfersMaxIdAsc = 'TRANSFERS_MAX_ID_ASC',
  TransfersMaxIdDesc = 'TRANSFERS_MAX_ID_DESC',
  TransfersMaxRemarkAsc = 'TRANSFERS_MAX_REMARK_ASC',
  TransfersMaxRemarkDesc = 'TRANSFERS_MAX_REMARK_DESC',
  TransfersMaxToIdAsc = 'TRANSFERS_MAX_TO_ID_ASC',
  TransfersMaxToIdDesc = 'TRANSFERS_MAX_TO_ID_DESC',
  TransfersMaxValueAsc = 'TRANSFERS_MAX_VALUE_ASC',
  TransfersMaxValueDesc = 'TRANSFERS_MAX_VALUE_DESC',
  TransfersMinBlockIdAsc = 'TRANSFERS_MIN_BLOCK_ID_ASC',
  TransfersMinBlockIdDesc = 'TRANSFERS_MIN_BLOCK_ID_DESC',
  TransfersMinBlockNumberAsc = 'TRANSFERS_MIN_BLOCK_NUMBER_ASC',
  TransfersMinBlockNumberDesc = 'TRANSFERS_MIN_BLOCK_NUMBER_DESC',
  TransfersMinEventIndexAsc = 'TRANSFERS_MIN_EVENT_INDEX_ASC',
  TransfersMinEventIndexDesc = 'TRANSFERS_MIN_EVENT_INDEX_DESC',
  TransfersMinExtrinsicIndexAsc = 'TRANSFERS_MIN_EXTRINSIC_INDEX_ASC',
  TransfersMinExtrinsicIndexDesc = 'TRANSFERS_MIN_EXTRINSIC_INDEX_DESC',
  TransfersMinFromIdAsc = 'TRANSFERS_MIN_FROM_ID_ASC',
  TransfersMinFromIdDesc = 'TRANSFERS_MIN_FROM_ID_DESC',
  TransfersMinIdAsc = 'TRANSFERS_MIN_ID_ASC',
  TransfersMinIdDesc = 'TRANSFERS_MIN_ID_DESC',
  TransfersMinRemarkAsc = 'TRANSFERS_MIN_REMARK_ASC',
  TransfersMinRemarkDesc = 'TRANSFERS_MIN_REMARK_DESC',
  TransfersMinToIdAsc = 'TRANSFERS_MIN_TO_ID_ASC',
  TransfersMinToIdDesc = 'TRANSFERS_MIN_TO_ID_DESC',
  TransfersMinValueAsc = 'TRANSFERS_MIN_VALUE_ASC',
  TransfersMinValueDesc = 'TRANSFERS_MIN_VALUE_DESC',
  TransfersStddevPopulationBlockIdAsc = 'TRANSFERS_STDDEV_POPULATION_BLOCK_ID_ASC',
  TransfersStddevPopulationBlockIdDesc = 'TRANSFERS_STDDEV_POPULATION_BLOCK_ID_DESC',
  TransfersStddevPopulationBlockNumberAsc = 'TRANSFERS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  TransfersStddevPopulationBlockNumberDesc = 'TRANSFERS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  TransfersStddevPopulationEventIndexAsc = 'TRANSFERS_STDDEV_POPULATION_EVENT_INDEX_ASC',
  TransfersStddevPopulationEventIndexDesc = 'TRANSFERS_STDDEV_POPULATION_EVENT_INDEX_DESC',
  TransfersStddevPopulationExtrinsicIndexAsc = 'TRANSFERS_STDDEV_POPULATION_EXTRINSIC_INDEX_ASC',
  TransfersStddevPopulationExtrinsicIndexDesc = 'TRANSFERS_STDDEV_POPULATION_EXTRINSIC_INDEX_DESC',
  TransfersStddevPopulationFromIdAsc = 'TRANSFERS_STDDEV_POPULATION_FROM_ID_ASC',
  TransfersStddevPopulationFromIdDesc = 'TRANSFERS_STDDEV_POPULATION_FROM_ID_DESC',
  TransfersStddevPopulationIdAsc = 'TRANSFERS_STDDEV_POPULATION_ID_ASC',
  TransfersStddevPopulationIdDesc = 'TRANSFERS_STDDEV_POPULATION_ID_DESC',
  TransfersStddevPopulationRemarkAsc = 'TRANSFERS_STDDEV_POPULATION_REMARK_ASC',
  TransfersStddevPopulationRemarkDesc = 'TRANSFERS_STDDEV_POPULATION_REMARK_DESC',
  TransfersStddevPopulationToIdAsc = 'TRANSFERS_STDDEV_POPULATION_TO_ID_ASC',
  TransfersStddevPopulationToIdDesc = 'TRANSFERS_STDDEV_POPULATION_TO_ID_DESC',
  TransfersStddevPopulationValueAsc = 'TRANSFERS_STDDEV_POPULATION_VALUE_ASC',
  TransfersStddevPopulationValueDesc = 'TRANSFERS_STDDEV_POPULATION_VALUE_DESC',
  TransfersStddevSampleBlockIdAsc = 'TRANSFERS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  TransfersStddevSampleBlockIdDesc = 'TRANSFERS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  TransfersStddevSampleBlockNumberAsc = 'TRANSFERS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  TransfersStddevSampleBlockNumberDesc = 'TRANSFERS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  TransfersStddevSampleEventIndexAsc = 'TRANSFERS_STDDEV_SAMPLE_EVENT_INDEX_ASC',
  TransfersStddevSampleEventIndexDesc = 'TRANSFERS_STDDEV_SAMPLE_EVENT_INDEX_DESC',
  TransfersStddevSampleExtrinsicIndexAsc = 'TRANSFERS_STDDEV_SAMPLE_EXTRINSIC_INDEX_ASC',
  TransfersStddevSampleExtrinsicIndexDesc = 'TRANSFERS_STDDEV_SAMPLE_EXTRINSIC_INDEX_DESC',
  TransfersStddevSampleFromIdAsc = 'TRANSFERS_STDDEV_SAMPLE_FROM_ID_ASC',
  TransfersStddevSampleFromIdDesc = 'TRANSFERS_STDDEV_SAMPLE_FROM_ID_DESC',
  TransfersStddevSampleIdAsc = 'TRANSFERS_STDDEV_SAMPLE_ID_ASC',
  TransfersStddevSampleIdDesc = 'TRANSFERS_STDDEV_SAMPLE_ID_DESC',
  TransfersStddevSampleRemarkAsc = 'TRANSFERS_STDDEV_SAMPLE_REMARK_ASC',
  TransfersStddevSampleRemarkDesc = 'TRANSFERS_STDDEV_SAMPLE_REMARK_DESC',
  TransfersStddevSampleToIdAsc = 'TRANSFERS_STDDEV_SAMPLE_TO_ID_ASC',
  TransfersStddevSampleToIdDesc = 'TRANSFERS_STDDEV_SAMPLE_TO_ID_DESC',
  TransfersStddevSampleValueAsc = 'TRANSFERS_STDDEV_SAMPLE_VALUE_ASC',
  TransfersStddevSampleValueDesc = 'TRANSFERS_STDDEV_SAMPLE_VALUE_DESC',
  TransfersSumBlockIdAsc = 'TRANSFERS_SUM_BLOCK_ID_ASC',
  TransfersSumBlockIdDesc = 'TRANSFERS_SUM_BLOCK_ID_DESC',
  TransfersSumBlockNumberAsc = 'TRANSFERS_SUM_BLOCK_NUMBER_ASC',
  TransfersSumBlockNumberDesc = 'TRANSFERS_SUM_BLOCK_NUMBER_DESC',
  TransfersSumEventIndexAsc = 'TRANSFERS_SUM_EVENT_INDEX_ASC',
  TransfersSumEventIndexDesc = 'TRANSFERS_SUM_EVENT_INDEX_DESC',
  TransfersSumExtrinsicIndexAsc = 'TRANSFERS_SUM_EXTRINSIC_INDEX_ASC',
  TransfersSumExtrinsicIndexDesc = 'TRANSFERS_SUM_EXTRINSIC_INDEX_DESC',
  TransfersSumFromIdAsc = 'TRANSFERS_SUM_FROM_ID_ASC',
  TransfersSumFromIdDesc = 'TRANSFERS_SUM_FROM_ID_DESC',
  TransfersSumIdAsc = 'TRANSFERS_SUM_ID_ASC',
  TransfersSumIdDesc = 'TRANSFERS_SUM_ID_DESC',
  TransfersSumRemarkAsc = 'TRANSFERS_SUM_REMARK_ASC',
  TransfersSumRemarkDesc = 'TRANSFERS_SUM_REMARK_DESC',
  TransfersSumToIdAsc = 'TRANSFERS_SUM_TO_ID_ASC',
  TransfersSumToIdDesc = 'TRANSFERS_SUM_TO_ID_DESC',
  TransfersSumValueAsc = 'TRANSFERS_SUM_VALUE_ASC',
  TransfersSumValueDesc = 'TRANSFERS_SUM_VALUE_DESC',
  TransfersVariancePopulationBlockIdAsc = 'TRANSFERS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  TransfersVariancePopulationBlockIdDesc = 'TRANSFERS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  TransfersVariancePopulationBlockNumberAsc = 'TRANSFERS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  TransfersVariancePopulationBlockNumberDesc = 'TRANSFERS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  TransfersVariancePopulationEventIndexAsc = 'TRANSFERS_VARIANCE_POPULATION_EVENT_INDEX_ASC',
  TransfersVariancePopulationEventIndexDesc = 'TRANSFERS_VARIANCE_POPULATION_EVENT_INDEX_DESC',
  TransfersVariancePopulationExtrinsicIndexAsc = 'TRANSFERS_VARIANCE_POPULATION_EXTRINSIC_INDEX_ASC',
  TransfersVariancePopulationExtrinsicIndexDesc = 'TRANSFERS_VARIANCE_POPULATION_EXTRINSIC_INDEX_DESC',
  TransfersVariancePopulationFromIdAsc = 'TRANSFERS_VARIANCE_POPULATION_FROM_ID_ASC',
  TransfersVariancePopulationFromIdDesc = 'TRANSFERS_VARIANCE_POPULATION_FROM_ID_DESC',
  TransfersVariancePopulationIdAsc = 'TRANSFERS_VARIANCE_POPULATION_ID_ASC',
  TransfersVariancePopulationIdDesc = 'TRANSFERS_VARIANCE_POPULATION_ID_DESC',
  TransfersVariancePopulationRemarkAsc = 'TRANSFERS_VARIANCE_POPULATION_REMARK_ASC',
  TransfersVariancePopulationRemarkDesc = 'TRANSFERS_VARIANCE_POPULATION_REMARK_DESC',
  TransfersVariancePopulationToIdAsc = 'TRANSFERS_VARIANCE_POPULATION_TO_ID_ASC',
  TransfersVariancePopulationToIdDesc = 'TRANSFERS_VARIANCE_POPULATION_TO_ID_DESC',
  TransfersVariancePopulationValueAsc = 'TRANSFERS_VARIANCE_POPULATION_VALUE_ASC',
  TransfersVariancePopulationValueDesc = 'TRANSFERS_VARIANCE_POPULATION_VALUE_DESC',
  TransfersVarianceSampleBlockIdAsc = 'TRANSFERS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  TransfersVarianceSampleBlockIdDesc = 'TRANSFERS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  TransfersVarianceSampleBlockNumberAsc = 'TRANSFERS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  TransfersVarianceSampleBlockNumberDesc = 'TRANSFERS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  TransfersVarianceSampleEventIndexAsc = 'TRANSFERS_VARIANCE_SAMPLE_EVENT_INDEX_ASC',
  TransfersVarianceSampleEventIndexDesc = 'TRANSFERS_VARIANCE_SAMPLE_EVENT_INDEX_DESC',
  TransfersVarianceSampleExtrinsicIndexAsc = 'TRANSFERS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_ASC',
  TransfersVarianceSampleExtrinsicIndexDesc = 'TRANSFERS_VARIANCE_SAMPLE_EXTRINSIC_INDEX_DESC',
  TransfersVarianceSampleFromIdAsc = 'TRANSFERS_VARIANCE_SAMPLE_FROM_ID_ASC',
  TransfersVarianceSampleFromIdDesc = 'TRANSFERS_VARIANCE_SAMPLE_FROM_ID_DESC',
  TransfersVarianceSampleIdAsc = 'TRANSFERS_VARIANCE_SAMPLE_ID_ASC',
  TransfersVarianceSampleIdDesc = 'TRANSFERS_VARIANCE_SAMPLE_ID_DESC',
  TransfersVarianceSampleRemarkAsc = 'TRANSFERS_VARIANCE_SAMPLE_REMARK_ASC',
  TransfersVarianceSampleRemarkDesc = 'TRANSFERS_VARIANCE_SAMPLE_REMARK_DESC',
  TransfersVarianceSampleToIdAsc = 'TRANSFERS_VARIANCE_SAMPLE_TO_ID_ASC',
  TransfersVarianceSampleToIdDesc = 'TRANSFERS_VARIANCE_SAMPLE_TO_ID_DESC',
  TransfersVarianceSampleValueAsc = 'TRANSFERS_VARIANCE_SAMPLE_VALUE_ASC',
  TransfersVarianceSampleValueDesc = 'TRANSFERS_VARIANCE_SAMPLE_VALUE_DESC'
}

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type BridgeReceipt = Node & {
  __typename?: 'BridgeReceipt';
  amount: Scalars['BigFloat']['output'];
  /** Reads a single `EthAccount` that is related to this `BridgeReceipt`. */
  ethRecipient?: Maybe<EthAccount>;
  ethRecipientId: Scalars['String']['output'];
  /** Reads a single `Event` that is related to this `BridgeReceipt`. */
  event?: Maybe<Event>;
  eventId: Scalars['String']['output'];
  /** Reads a single `Account` that is related to this `BridgeReceipt`. */
  from?: Maybe<Account>;
  fromId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  receiptId: Scalars['String']['output'];
};

export type BridgeReceiptAggregates = {
  __typename?: 'BridgeReceiptAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<BridgeReceiptAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<BridgeReceiptDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<BridgeReceiptMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<BridgeReceiptMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<BridgeReceiptStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<BridgeReceiptStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<BridgeReceiptSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<BridgeReceiptVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<BridgeReceiptVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `BridgeReceipt` object types. */
export type BridgeReceiptAggregatesFilter = {
  /** Mean average aggregate over matching `BridgeReceipt` objects. */
  average?: InputMaybe<BridgeReceiptAverageAggregateFilter>;
  /** Distinct count aggregate over matching `BridgeReceipt` objects. */
  distinctCount?: InputMaybe<BridgeReceiptDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `BridgeReceipt` object to be included within the aggregate. */
  filter?: InputMaybe<BridgeReceiptFilter>;
  /** Maximum aggregate over matching `BridgeReceipt` objects. */
  max?: InputMaybe<BridgeReceiptMaxAggregateFilter>;
  /** Minimum aggregate over matching `BridgeReceipt` objects. */
  min?: InputMaybe<BridgeReceiptMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `BridgeReceipt` objects. */
  stddevPopulation?: InputMaybe<BridgeReceiptStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `BridgeReceipt` objects. */
  stddevSample?: InputMaybe<BridgeReceiptStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `BridgeReceipt` objects. */
  sum?: InputMaybe<BridgeReceiptSumAggregateFilter>;
  /** Population variance aggregate over matching `BridgeReceipt` objects. */
  variancePopulation?: InputMaybe<BridgeReceiptVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `BridgeReceipt` objects. */
  varianceSample?: InputMaybe<BridgeReceiptVarianceSampleAggregateFilter>;
};

export type BridgeReceiptApproved = Node & {
  __typename?: 'BridgeReceiptApproved';
  /** Reads a single `Event` that is related to this `BridgeReceiptApproved`. */
  event?: Maybe<Event>;
  eventId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  receiptId: Scalars['String']['output'];
};

export type BridgeReceiptApprovedAggregates = {
  __typename?: 'BridgeReceiptApprovedAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<BridgeReceiptApprovedDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `BridgeReceiptApproved` object types. */
export type BridgeReceiptApprovedAggregatesFilter = {
  /** Distinct count aggregate over matching `BridgeReceiptApproved` objects. */
  distinctCount?: InputMaybe<BridgeReceiptApprovedDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `BridgeReceiptApproved` object to be included within the aggregate. */
  filter?: InputMaybe<BridgeReceiptApprovedFilter>;
};

export type BridgeReceiptApprovedDistinctCountAggregateFilter = {
  eventId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  receiptId?: InputMaybe<BigIntFilter>;
};

export type BridgeReceiptApprovedDistinctCountAggregates = {
  __typename?: 'BridgeReceiptApprovedDistinctCountAggregates';
  /** Distinct count of eventId across the matching connection */
  eventId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of receiptId across the matching connection */
  receiptId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `BridgeReceiptApproved` object types. All fields are combined with a logical ‘and.’ */
export type BridgeReceiptApprovedFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BridgeReceiptApprovedFilter>>;
  /** Filter by the object’s `event` relation. */
  event?: InputMaybe<EventFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BridgeReceiptApprovedFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BridgeReceiptApprovedFilter>>;
  /** Filter by the object’s `receiptId` field. */
  receiptId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `BridgeReceiptApproved` values. */
export type BridgeReceiptApprovedsConnection = {
  __typename?: 'BridgeReceiptApprovedsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BridgeReceiptApprovedAggregates>;
  /** A list of edges which contains the `BridgeReceiptApproved` and cursor to aid in pagination. */
  edges: Array<BridgeReceiptApprovedsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BridgeReceiptApprovedAggregates>>;
  /** A list of `BridgeReceiptApproved` objects. */
  nodes: Array<Maybe<BridgeReceiptApproved>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BridgeReceiptApproved` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `BridgeReceiptApproved` values. */
export type BridgeReceiptApprovedsConnectionGroupedAggregatesArgs = {
  groupBy: Array<BridgeReceiptApprovedsGroupBy>;
  having?: InputMaybe<BridgeReceiptApprovedsHavingInput>;
};

/** A `BridgeReceiptApproved` edge in the connection. */
export type BridgeReceiptApprovedsEdge = {
  __typename?: 'BridgeReceiptApprovedsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `BridgeReceiptApproved` at the end of the edge. */
  node?: Maybe<BridgeReceiptApproved>;
};

/** Grouping methods for `BridgeReceiptApproved` for usage during aggregation. */
export enum BridgeReceiptApprovedsGroupBy {
  EventId = 'EVENT_ID'
}

/** Conditions for `BridgeReceiptApproved` aggregates. */
export type BridgeReceiptApprovedsHavingInput = {
  AND?: InputMaybe<Array<BridgeReceiptApprovedsHavingInput>>;
  OR?: InputMaybe<Array<BridgeReceiptApprovedsHavingInput>>;
};

/** Methods to use when ordering `BridgeReceiptApproved`. */
export enum BridgeReceiptApprovedsOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReceiptIdAsc = 'RECEIPT_ID_ASC',
  ReceiptIdDesc = 'RECEIPT_ID_DESC'
}

export type BridgeReceiptAverageAggregateFilter = {
  amount?: InputMaybe<BigFloatFilter>;
};

export type BridgeReceiptAverageAggregates = {
  __typename?: 'BridgeReceiptAverageAggregates';
  /** Mean average of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeReceiptDistinctCountAggregateFilter = {
  amount?: InputMaybe<BigIntFilter>;
  ethRecipientId?: InputMaybe<BigIntFilter>;
  eventId?: InputMaybe<BigIntFilter>;
  fromId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  receiptId?: InputMaybe<BigIntFilter>;
};

export type BridgeReceiptDistinctCountAggregates = {
  __typename?: 'BridgeReceiptDistinctCountAggregates';
  /** Distinct count of amount across the matching connection */
  amount?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of ethRecipientId across the matching connection */
  ethRecipientId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventId across the matching connection */
  eventId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of fromId across the matching connection */
  fromId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of receiptId across the matching connection */
  receiptId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `BridgeReceipt` object types. All fields are combined with a logical ‘and.’ */
export type BridgeReceiptFilter = {
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BridgeReceiptFilter>>;
  /** Filter by the object’s `ethRecipient` relation. */
  ethRecipient?: InputMaybe<EthAccountFilter>;
  /** Filter by the object’s `ethRecipientId` field. */
  ethRecipientId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `event` relation. */
  event?: InputMaybe<EventFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `from` relation. */
  from?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `fromId` field. */
  fromId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BridgeReceiptFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BridgeReceiptFilter>>;
  /** Filter by the object’s `receiptId` field. */
  receiptId?: InputMaybe<StringFilter>;
};

export type BridgeReceiptMaxAggregateFilter = {
  amount?: InputMaybe<BigFloatFilter>;
};

export type BridgeReceiptMaxAggregates = {
  __typename?: 'BridgeReceiptMaxAggregates';
  /** Maximum of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeReceiptMinAggregateFilter = {
  amount?: InputMaybe<BigFloatFilter>;
};

export type BridgeReceiptMinAggregates = {
  __typename?: 'BridgeReceiptMinAggregates';
  /** Minimum of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeReceiptProcessed = Node & {
  __typename?: 'BridgeReceiptProcessed';
  /** Reads a single `Event` that is related to this `BridgeReceiptProcessed`. */
  event?: Maybe<Event>;
  eventId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  receiptId: Scalars['String']['output'];
};

export type BridgeReceiptProcessedAggregates = {
  __typename?: 'BridgeReceiptProcessedAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<BridgeReceiptProcessedDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

/** A filter to be used against aggregates of `BridgeReceiptProcessed` object types. */
export type BridgeReceiptProcessedAggregatesFilter = {
  /** Distinct count aggregate over matching `BridgeReceiptProcessed` objects. */
  distinctCount?: InputMaybe<BridgeReceiptProcessedDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `BridgeReceiptProcessed` object to be included within the aggregate. */
  filter?: InputMaybe<BridgeReceiptProcessedFilter>;
};

export type BridgeReceiptProcessedDistinctCountAggregateFilter = {
  eventId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  receiptId?: InputMaybe<BigIntFilter>;
};

export type BridgeReceiptProcessedDistinctCountAggregates = {
  __typename?: 'BridgeReceiptProcessedDistinctCountAggregates';
  /** Distinct count of eventId across the matching connection */
  eventId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of receiptId across the matching connection */
  receiptId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `BridgeReceiptProcessed` object types. All fields are combined with a logical ‘and.’ */
export type BridgeReceiptProcessedFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BridgeReceiptProcessedFilter>>;
  /** Filter by the object’s `event` relation. */
  event?: InputMaybe<EventFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BridgeReceiptProcessedFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BridgeReceiptProcessedFilter>>;
  /** Filter by the object’s `receiptId` field. */
  receiptId?: InputMaybe<StringFilter>;
};

/** A connection to a list of `BridgeReceiptProcessed` values. */
export type BridgeReceiptProcessedsConnection = {
  __typename?: 'BridgeReceiptProcessedsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BridgeReceiptProcessedAggregates>;
  /** A list of edges which contains the `BridgeReceiptProcessed` and cursor to aid in pagination. */
  edges: Array<BridgeReceiptProcessedsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BridgeReceiptProcessedAggregates>>;
  /** A list of `BridgeReceiptProcessed` objects. */
  nodes: Array<Maybe<BridgeReceiptProcessed>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BridgeReceiptProcessed` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `BridgeReceiptProcessed` values. */
export type BridgeReceiptProcessedsConnectionGroupedAggregatesArgs = {
  groupBy: Array<BridgeReceiptProcessedsGroupBy>;
  having?: InputMaybe<BridgeReceiptProcessedsHavingInput>;
};

/** A `BridgeReceiptProcessed` edge in the connection. */
export type BridgeReceiptProcessedsEdge = {
  __typename?: 'BridgeReceiptProcessedsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `BridgeReceiptProcessed` at the end of the edge. */
  node?: Maybe<BridgeReceiptProcessed>;
};

/** Grouping methods for `BridgeReceiptProcessed` for usage during aggregation. */
export enum BridgeReceiptProcessedsGroupBy {
  EventId = 'EVENT_ID'
}

/** Conditions for `BridgeReceiptProcessed` aggregates. */
export type BridgeReceiptProcessedsHavingInput = {
  AND?: InputMaybe<Array<BridgeReceiptProcessedsHavingInput>>;
  OR?: InputMaybe<Array<BridgeReceiptProcessedsHavingInput>>;
};

/** Methods to use when ordering `BridgeReceiptProcessed`. */
export enum BridgeReceiptProcessedsOrderBy {
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReceiptIdAsc = 'RECEIPT_ID_ASC',
  ReceiptIdDesc = 'RECEIPT_ID_DESC'
}

export type BridgeReceiptStddevPopulationAggregateFilter = {
  amount?: InputMaybe<BigFloatFilter>;
};

export type BridgeReceiptStddevPopulationAggregates = {
  __typename?: 'BridgeReceiptStddevPopulationAggregates';
  /** Population standard deviation of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeReceiptStddevSampleAggregateFilter = {
  amount?: InputMaybe<BigFloatFilter>;
};

export type BridgeReceiptStddevSampleAggregates = {
  __typename?: 'BridgeReceiptStddevSampleAggregates';
  /** Sample standard deviation of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeReceiptSumAggregateFilter = {
  amount?: InputMaybe<BigFloatFilter>;
};

export type BridgeReceiptSumAggregates = {
  __typename?: 'BridgeReceiptSumAggregates';
  /** Sum of amount across the matching connection */
  amount: Scalars['BigFloat']['output'];
};

export type BridgeReceiptVariancePopulationAggregateFilter = {
  amount?: InputMaybe<BigFloatFilter>;
};

export type BridgeReceiptVariancePopulationAggregates = {
  __typename?: 'BridgeReceiptVariancePopulationAggregates';
  /** Population variance of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeReceiptVarianceSampleAggregateFilter = {
  amount?: InputMaybe<BigFloatFilter>;
};

export type BridgeReceiptVarianceSampleAggregates = {
  __typename?: 'BridgeReceiptVarianceSampleAggregates';
  /** Sample variance of amount across the matching connection */
  amount?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `BridgeReceipt` values. */
export type BridgeReceiptsConnection = {
  __typename?: 'BridgeReceiptsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BridgeReceiptAggregates>;
  /** A list of edges which contains the `BridgeReceipt` and cursor to aid in pagination. */
  edges: Array<BridgeReceiptsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BridgeReceiptAggregates>>;
  /** A list of `BridgeReceipt` objects. */
  nodes: Array<Maybe<BridgeReceipt>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BridgeReceipt` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `BridgeReceipt` values. */
export type BridgeReceiptsConnectionGroupedAggregatesArgs = {
  groupBy: Array<BridgeReceiptsGroupBy>;
  having?: InputMaybe<BridgeReceiptsHavingInput>;
};

/** A `BridgeReceipt` edge in the connection. */
export type BridgeReceiptsEdge = {
  __typename?: 'BridgeReceiptsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `BridgeReceipt` at the end of the edge. */
  node?: Maybe<BridgeReceipt>;
};

/** Grouping methods for `BridgeReceipt` for usage during aggregation. */
export enum BridgeReceiptsGroupBy {
  Amount = 'AMOUNT',
  EthRecipientId = 'ETH_RECIPIENT_ID',
  EventId = 'EVENT_ID',
  FromId = 'FROM_ID',
  ReceiptId = 'RECEIPT_ID'
}

export type BridgeReceiptsHavingAverageInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeReceiptsHavingDistinctCountInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `BridgeReceipt` aggregates. */
export type BridgeReceiptsHavingInput = {
  AND?: InputMaybe<Array<BridgeReceiptsHavingInput>>;
  OR?: InputMaybe<Array<BridgeReceiptsHavingInput>>;
  average?: InputMaybe<BridgeReceiptsHavingAverageInput>;
  distinctCount?: InputMaybe<BridgeReceiptsHavingDistinctCountInput>;
  max?: InputMaybe<BridgeReceiptsHavingMaxInput>;
  min?: InputMaybe<BridgeReceiptsHavingMinInput>;
  stddevPopulation?: InputMaybe<BridgeReceiptsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<BridgeReceiptsHavingStddevSampleInput>;
  sum?: InputMaybe<BridgeReceiptsHavingSumInput>;
  variancePopulation?: InputMaybe<BridgeReceiptsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<BridgeReceiptsHavingVarianceSampleInput>;
};

export type BridgeReceiptsHavingMaxInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeReceiptsHavingMinInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeReceiptsHavingStddevPopulationInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeReceiptsHavingStddevSampleInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeReceiptsHavingSumInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeReceiptsHavingVariancePopulationInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeReceiptsHavingVarianceSampleInput = {
  amount?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `BridgeReceipt`. */
export enum BridgeReceiptsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  EthRecipientIdAsc = 'ETH_RECIPIENT_ID_ASC',
  EthRecipientIdDesc = 'ETH_RECIPIENT_ID_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  FromIdAsc = 'FROM_ID_ASC',
  FromIdDesc = 'FROM_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReceiptIdAsc = 'RECEIPT_ID_ASC',
  ReceiptIdDesc = 'RECEIPT_ID_DESC'
}

export type BridgeVote = Node & {
  __typename?: 'BridgeVote';
  ethBlockNumber: Scalars['BigFloat']['output'];
  /** Reads a single `Event` that is related to this `BridgeVote`. */
  event?: Maybe<Event>;
  eventId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  receiptId: Scalars['String']['output'];
  /** Reads a single `Account` that is related to this `BridgeVote`. */
  relay?: Maybe<Account>;
  relayId: Scalars['String']['output'];
};

export type BridgeVoteAggregates = {
  __typename?: 'BridgeVoteAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<BridgeVoteAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<BridgeVoteDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<BridgeVoteMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<BridgeVoteMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<BridgeVoteStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<BridgeVoteStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<BridgeVoteSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<BridgeVoteVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<BridgeVoteVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `BridgeVote` object types. */
export type BridgeVoteAggregatesFilter = {
  /** Mean average aggregate over matching `BridgeVote` objects. */
  average?: InputMaybe<BridgeVoteAverageAggregateFilter>;
  /** Distinct count aggregate over matching `BridgeVote` objects. */
  distinctCount?: InputMaybe<BridgeVoteDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `BridgeVote` object to be included within the aggregate. */
  filter?: InputMaybe<BridgeVoteFilter>;
  /** Maximum aggregate over matching `BridgeVote` objects. */
  max?: InputMaybe<BridgeVoteMaxAggregateFilter>;
  /** Minimum aggregate over matching `BridgeVote` objects. */
  min?: InputMaybe<BridgeVoteMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `BridgeVote` objects. */
  stddevPopulation?: InputMaybe<BridgeVoteStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `BridgeVote` objects. */
  stddevSample?: InputMaybe<BridgeVoteStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `BridgeVote` objects. */
  sum?: InputMaybe<BridgeVoteSumAggregateFilter>;
  /** Population variance aggregate over matching `BridgeVote` objects. */
  variancePopulation?: InputMaybe<BridgeVoteVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `BridgeVote` objects. */
  varianceSample?: InputMaybe<BridgeVoteVarianceSampleAggregateFilter>;
};

export type BridgeVoteAverageAggregateFilter = {
  ethBlockNumber?: InputMaybe<BigFloatFilter>;
};

export type BridgeVoteAverageAggregates = {
  __typename?: 'BridgeVoteAverageAggregates';
  /** Mean average of ethBlockNumber across the matching connection */
  ethBlockNumber?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeVoteDistinctCountAggregateFilter = {
  ethBlockNumber?: InputMaybe<BigIntFilter>;
  eventId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  receiptId?: InputMaybe<BigIntFilter>;
  relayId?: InputMaybe<BigIntFilter>;
};

export type BridgeVoteDistinctCountAggregates = {
  __typename?: 'BridgeVoteDistinctCountAggregates';
  /** Distinct count of ethBlockNumber across the matching connection */
  ethBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventId across the matching connection */
  eventId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of receiptId across the matching connection */
  receiptId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of relayId across the matching connection */
  relayId?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `BridgeVote` object types. All fields are combined with a logical ‘and.’ */
export type BridgeVoteFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<BridgeVoteFilter>>;
  /** Filter by the object’s `ethBlockNumber` field. */
  ethBlockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `event` relation. */
  event?: InputMaybe<EventFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<BridgeVoteFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<BridgeVoteFilter>>;
  /** Filter by the object’s `receiptId` field. */
  receiptId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `relay` relation. */
  relay?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `relayId` field. */
  relayId?: InputMaybe<StringFilter>;
};

export type BridgeVoteMaxAggregateFilter = {
  ethBlockNumber?: InputMaybe<BigFloatFilter>;
};

export type BridgeVoteMaxAggregates = {
  __typename?: 'BridgeVoteMaxAggregates';
  /** Maximum of ethBlockNumber across the matching connection */
  ethBlockNumber?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeVoteMinAggregateFilter = {
  ethBlockNumber?: InputMaybe<BigFloatFilter>;
};

export type BridgeVoteMinAggregates = {
  __typename?: 'BridgeVoteMinAggregates';
  /** Minimum of ethBlockNumber across the matching connection */
  ethBlockNumber?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeVoteStddevPopulationAggregateFilter = {
  ethBlockNumber?: InputMaybe<BigFloatFilter>;
};

export type BridgeVoteStddevPopulationAggregates = {
  __typename?: 'BridgeVoteStddevPopulationAggregates';
  /** Population standard deviation of ethBlockNumber across the matching connection */
  ethBlockNumber?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeVoteStddevSampleAggregateFilter = {
  ethBlockNumber?: InputMaybe<BigFloatFilter>;
};

export type BridgeVoteStddevSampleAggregates = {
  __typename?: 'BridgeVoteStddevSampleAggregates';
  /** Sample standard deviation of ethBlockNumber across the matching connection */
  ethBlockNumber?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeVoteSumAggregateFilter = {
  ethBlockNumber?: InputMaybe<BigFloatFilter>;
};

export type BridgeVoteSumAggregates = {
  __typename?: 'BridgeVoteSumAggregates';
  /** Sum of ethBlockNumber across the matching connection */
  ethBlockNumber: Scalars['BigFloat']['output'];
};

export type BridgeVoteVariancePopulationAggregateFilter = {
  ethBlockNumber?: InputMaybe<BigFloatFilter>;
};

export type BridgeVoteVariancePopulationAggregates = {
  __typename?: 'BridgeVoteVariancePopulationAggregates';
  /** Population variance of ethBlockNumber across the matching connection */
  ethBlockNumber?: Maybe<Scalars['BigFloat']['output']>;
};

export type BridgeVoteVarianceSampleAggregateFilter = {
  ethBlockNumber?: InputMaybe<BigFloatFilter>;
};

export type BridgeVoteVarianceSampleAggregates = {
  __typename?: 'BridgeVoteVarianceSampleAggregates';
  /** Sample variance of ethBlockNumber across the matching connection */
  ethBlockNumber?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `BridgeVote` values. */
export type BridgeVotesConnection = {
  __typename?: 'BridgeVotesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BridgeVoteAggregates>;
  /** A list of edges which contains the `BridgeVote` and cursor to aid in pagination. */
  edges: Array<BridgeVotesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BridgeVoteAggregates>>;
  /** A list of `BridgeVote` objects. */
  nodes: Array<Maybe<BridgeVote>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BridgeVote` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `BridgeVote` values. */
export type BridgeVotesConnectionGroupedAggregatesArgs = {
  groupBy: Array<BridgeVotesGroupBy>;
  having?: InputMaybe<BridgeVotesHavingInput>;
};

/** A `BridgeVote` edge in the connection. */
export type BridgeVotesEdge = {
  __typename?: 'BridgeVotesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `BridgeVote` at the end of the edge. */
  node?: Maybe<BridgeVote>;
};

/** Grouping methods for `BridgeVote` for usage during aggregation. */
export enum BridgeVotesGroupBy {
  EthBlockNumber = 'ETH_BLOCK_NUMBER',
  EventId = 'EVENT_ID',
  ReceiptId = 'RECEIPT_ID',
  RelayId = 'RELAY_ID'
}

export type BridgeVotesHavingAverageInput = {
  ethBlockNumber?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeVotesHavingDistinctCountInput = {
  ethBlockNumber?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `BridgeVote` aggregates. */
export type BridgeVotesHavingInput = {
  AND?: InputMaybe<Array<BridgeVotesHavingInput>>;
  OR?: InputMaybe<Array<BridgeVotesHavingInput>>;
  average?: InputMaybe<BridgeVotesHavingAverageInput>;
  distinctCount?: InputMaybe<BridgeVotesHavingDistinctCountInput>;
  max?: InputMaybe<BridgeVotesHavingMaxInput>;
  min?: InputMaybe<BridgeVotesHavingMinInput>;
  stddevPopulation?: InputMaybe<BridgeVotesHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<BridgeVotesHavingStddevSampleInput>;
  sum?: InputMaybe<BridgeVotesHavingSumInput>;
  variancePopulation?: InputMaybe<BridgeVotesHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<BridgeVotesHavingVarianceSampleInput>;
};

export type BridgeVotesHavingMaxInput = {
  ethBlockNumber?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeVotesHavingMinInput = {
  ethBlockNumber?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeVotesHavingStddevPopulationInput = {
  ethBlockNumber?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeVotesHavingStddevSampleInput = {
  ethBlockNumber?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeVotesHavingSumInput = {
  ethBlockNumber?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeVotesHavingVariancePopulationInput = {
  ethBlockNumber?: InputMaybe<HavingBigfloatFilter>;
};

export type BridgeVotesHavingVarianceSampleInput = {
  ethBlockNumber?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `BridgeVote`. */
export enum BridgeVotesOrderBy {
  EthBlockNumberAsc = 'ETH_BLOCK_NUMBER_ASC',
  EthBlockNumberDesc = 'ETH_BLOCK_NUMBER_DESC',
  EventIdAsc = 'EVENT_ID_ASC',
  EventIdDesc = 'EVENT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReceiptIdAsc = 'RECEIPT_ID_ASC',
  ReceiptIdDesc = 'RECEIPT_ID_DESC',
  RelayIdAsc = 'RELAY_ID_ASC',
  RelayIdDesc = 'RELAY_ID_DESC'
}

export type CongressMotion = Node & {
  __typename?: 'CongressMotion';
  blockNumber: Scalars['BigFloat']['output'];
  call: Scalars['String']['output'];
  /** Reads a single `Event` that is related to this `CongressMotion`. */
  executionEvent?: Maybe<Event>;
  executionEventId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Extrinsic` that is related to this `CongressMotion`. */
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  rawCall: Scalars['String']['output'];
  threshold: Scalars['Int']['output'];
};

export type CongressMotionAggregates = {
  __typename?: 'CongressMotionAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<CongressMotionAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<CongressMotionDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<CongressMotionMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<CongressMotionMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<CongressMotionStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<CongressMotionStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<CongressMotionSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<CongressMotionVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<CongressMotionVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `CongressMotion` object types. */
export type CongressMotionAggregatesFilter = {
  /** Mean average aggregate over matching `CongressMotion` objects. */
  average?: InputMaybe<CongressMotionAverageAggregateFilter>;
  /** Distinct count aggregate over matching `CongressMotion` objects. */
  distinctCount?: InputMaybe<CongressMotionDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `CongressMotion` object to be included within the aggregate. */
  filter?: InputMaybe<CongressMotionFilter>;
  /** Maximum aggregate over matching `CongressMotion` objects. */
  max?: InputMaybe<CongressMotionMaxAggregateFilter>;
  /** Minimum aggregate over matching `CongressMotion` objects. */
  min?: InputMaybe<CongressMotionMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `CongressMotion` objects. */
  stddevPopulation?: InputMaybe<CongressMotionStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `CongressMotion` objects. */
  stddevSample?: InputMaybe<CongressMotionStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `CongressMotion` objects. */
  sum?: InputMaybe<CongressMotionSumAggregateFilter>;
  /** Population variance aggregate over matching `CongressMotion` objects. */
  variancePopulation?: InputMaybe<CongressMotionVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `CongressMotion` objects. */
  varianceSample?: InputMaybe<CongressMotionVarianceSampleAggregateFilter>;
};

export type CongressMotionAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  threshold?: InputMaybe<BigFloatFilter>;
};

export type CongressMotionAverageAggregates = {
  __typename?: 'CongressMotionAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of threshold across the matching connection */
  threshold?: Maybe<Scalars['BigFloat']['output']>;
};

export type CongressMotionDistinctCountAggregateFilter = {
  blockNumber?: InputMaybe<BigIntFilter>;
  call?: InputMaybe<BigIntFilter>;
  executionEventId?: InputMaybe<BigIntFilter>;
  extrinsicId?: InputMaybe<BigIntFilter>;
  hash?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  rawCall?: InputMaybe<BigIntFilter>;
  threshold?: InputMaybe<BigIntFilter>;
};

export type CongressMotionDistinctCountAggregates = {
  __typename?: 'CongressMotionDistinctCountAggregates';
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of call across the matching connection */
  call?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of executionEventId across the matching connection */
  executionEventId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicId across the matching connection */
  extrinsicId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of hash across the matching connection */
  hash?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of rawCall across the matching connection */
  rawCall?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of threshold across the matching connection */
  threshold?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `CongressMotion` object types. All fields are combined with a logical ‘and.’ */
export type CongressMotionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CongressMotionFilter>>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `call` field. */
  call?: InputMaybe<StringFilter>;
  /** Filter by the object’s `executionEvent` relation. */
  executionEvent?: InputMaybe<EventFilter>;
  /** A related `executionEvent` exists. */
  executionEventExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `executionEventId` field. */
  executionEventId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `extrinsic` relation. */
  extrinsic?: InputMaybe<ExtrinsicFilter>;
  /** Filter by the object’s `extrinsicId` field. */
  extrinsicId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CongressMotionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CongressMotionFilter>>;
  /** Filter by the object’s `rawCall` field. */
  rawCall?: InputMaybe<StringFilter>;
  /** Filter by the object’s `threshold` field. */
  threshold?: InputMaybe<IntFilter>;
};

export type CongressMotionMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  threshold?: InputMaybe<IntFilter>;
};

export type CongressMotionMaxAggregates = {
  __typename?: 'CongressMotionMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of threshold across the matching connection */
  threshold?: Maybe<Scalars['Int']['output']>;
};

export type CongressMotionMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  threshold?: InputMaybe<IntFilter>;
};

export type CongressMotionMinAggregates = {
  __typename?: 'CongressMotionMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of threshold across the matching connection */
  threshold?: Maybe<Scalars['Int']['output']>;
};

export type CongressMotionStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  threshold?: InputMaybe<BigFloatFilter>;
};

export type CongressMotionStddevPopulationAggregates = {
  __typename?: 'CongressMotionStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of threshold across the matching connection */
  threshold?: Maybe<Scalars['BigFloat']['output']>;
};

export type CongressMotionStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  threshold?: InputMaybe<BigFloatFilter>;
};

export type CongressMotionStddevSampleAggregates = {
  __typename?: 'CongressMotionStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of threshold across the matching connection */
  threshold?: Maybe<Scalars['BigFloat']['output']>;
};

export type CongressMotionSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  threshold?: InputMaybe<BigIntFilter>;
};

export type CongressMotionSumAggregates = {
  __typename?: 'CongressMotionSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of threshold across the matching connection */
  threshold: Scalars['BigInt']['output'];
};

export type CongressMotionVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  threshold?: InputMaybe<BigFloatFilter>;
};

export type CongressMotionVariancePopulationAggregates = {
  __typename?: 'CongressMotionVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of threshold across the matching connection */
  threshold?: Maybe<Scalars['BigFloat']['output']>;
};

export type CongressMotionVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  threshold?: InputMaybe<BigFloatFilter>;
};

export type CongressMotionVarianceSampleAggregates = {
  __typename?: 'CongressMotionVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of threshold across the matching connection */
  threshold?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `CongressMotion` values. */
export type CongressMotionsConnection = {
  __typename?: 'CongressMotionsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CongressMotionAggregates>;
  /** A list of edges which contains the `CongressMotion` and cursor to aid in pagination. */
  edges: Array<CongressMotionsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CongressMotionAggregates>>;
  /** A list of `CongressMotion` objects. */
  nodes: Array<Maybe<CongressMotion>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CongressMotion` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `CongressMotion` values. */
export type CongressMotionsConnectionGroupedAggregatesArgs = {
  groupBy: Array<CongressMotionsGroupBy>;
  having?: InputMaybe<CongressMotionsHavingInput>;
};

/** A `CongressMotion` edge in the connection. */
export type CongressMotionsEdge = {
  __typename?: 'CongressMotionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `CongressMotion` at the end of the edge. */
  node?: Maybe<CongressMotion>;
};

/** Grouping methods for `CongressMotion` for usage during aggregation. */
export enum CongressMotionsGroupBy {
  BlockNumber = 'BLOCK_NUMBER',
  Call = 'CALL',
  ExecutionEventId = 'EXECUTION_EVENT_ID',
  ExtrinsicId = 'EXTRINSIC_ID',
  Hash = 'HASH',
  RawCall = 'RAW_CALL',
  Threshold = 'THRESHOLD'
}

export type CongressMotionsHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  threshold?: InputMaybe<HavingIntFilter>;
};

export type CongressMotionsHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  threshold?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `CongressMotion` aggregates. */
export type CongressMotionsHavingInput = {
  AND?: InputMaybe<Array<CongressMotionsHavingInput>>;
  OR?: InputMaybe<Array<CongressMotionsHavingInput>>;
  average?: InputMaybe<CongressMotionsHavingAverageInput>;
  distinctCount?: InputMaybe<CongressMotionsHavingDistinctCountInput>;
  max?: InputMaybe<CongressMotionsHavingMaxInput>;
  min?: InputMaybe<CongressMotionsHavingMinInput>;
  stddevPopulation?: InputMaybe<CongressMotionsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<CongressMotionsHavingStddevSampleInput>;
  sum?: InputMaybe<CongressMotionsHavingSumInput>;
  variancePopulation?: InputMaybe<CongressMotionsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<CongressMotionsHavingVarianceSampleInput>;
};

export type CongressMotionsHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  threshold?: InputMaybe<HavingIntFilter>;
};

export type CongressMotionsHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  threshold?: InputMaybe<HavingIntFilter>;
};

export type CongressMotionsHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  threshold?: InputMaybe<HavingIntFilter>;
};

export type CongressMotionsHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  threshold?: InputMaybe<HavingIntFilter>;
};

export type CongressMotionsHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  threshold?: InputMaybe<HavingIntFilter>;
};

export type CongressMotionsHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  threshold?: InputMaybe<HavingIntFilter>;
};

export type CongressMotionsHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  threshold?: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `CongressMotion`. */
export enum CongressMotionsOrderBy {
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  CallAsc = 'CALL_ASC',
  CallDesc = 'CALL_DESC',
  ExecutionEventIdAsc = 'EXECUTION_EVENT_ID_ASC',
  ExecutionEventIdDesc = 'EXECUTION_EVENT_ID_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RawCallAsc = 'RAW_CALL_ASC',
  RawCallDesc = 'RAW_CALL_DESC',
  ThresholdAsc = 'THRESHOLD_ASC',
  ThresholdDesc = 'THRESHOLD_DESC'
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export type Day = Node & {
  __typename?: 'Day';
  date: Scalars['Int']['output'];
  events: Scalars['Int']['output'];
  extrinsics: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  month: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  transferAmount: Scalars['BigFloat']['output'];
  transferAssetAmount: Scalars['BigFloat']['output'];
  transferAssetCount: Scalars['Int']['output'];
  transferCount: Scalars['Int']['output'];
  transferMeritAmount: Scalars['BigFloat']['output'];
  transferMeritCount: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};


export type DayEventsArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
};


export type DayExtrinsicsArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Extrinsics_Distinct_Enum>>>;
};

export type DayAggregates = {
  __typename?: 'DayAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<DayAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<DayDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<DayMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<DayMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<DayStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<DayStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<DaySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<DayVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<DayVarianceSampleAggregates>;
};

export type DayAverageAggregates = {
  __typename?: 'DayAverageAggregates';
  /** Mean average of date across the matching connection */
  date?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of events across the matching connection */
  events?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of extrinsics across the matching connection */
  extrinsics?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of month across the matching connection */
  month?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of transferAmount across the matching connection */
  transferAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of transferAssetAmount across the matching connection */
  transferAssetAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of transferAssetCount across the matching connection */
  transferAssetCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of transferCount across the matching connection */
  transferCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of transferMeritAmount across the matching connection */
  transferMeritAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of transferMeritCount across the matching connection */
  transferMeritCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of year across the matching connection */
  year?: Maybe<Scalars['BigFloat']['output']>;
};

export type DayDistinctCountAggregates = {
  __typename?: 'DayDistinctCountAggregates';
  /** Distinct count of date across the matching connection */
  date?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of events across the matching connection */
  events?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsics across the matching connection */
  extrinsics?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of month across the matching connection */
  month?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of transferAmount across the matching connection */
  transferAmount?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of transferAssetAmount across the matching connection */
  transferAssetAmount?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of transferAssetCount across the matching connection */
  transferAssetCount?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of transferCount across the matching connection */
  transferCount?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of transferMeritAmount across the matching connection */
  transferMeritAmount?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of transferMeritCount across the matching connection */
  transferMeritCount?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of year across the matching connection */
  year?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Day` object types. All fields are combined with a logical ‘and.’ */
export type DayFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<DayFilter>>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<IntFilter>;
  /** Filter by the object’s `events` field. */
  events?: InputMaybe<IntFilter>;
  /** Filter by the object’s `extrinsics` field. */
  extrinsics?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `month` field. */
  month?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<DayFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<DayFilter>>;
  /** Filter by the object’s `transferAmount` field. */
  transferAmount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `transferAssetAmount` field. */
  transferAssetAmount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `transferAssetCount` field. */
  transferAssetCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `transferCount` field. */
  transferCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `transferMeritAmount` field. */
  transferMeritAmount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `transferMeritCount` field. */
  transferMeritCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `year` field. */
  year?: InputMaybe<IntFilter>;
};

export type DayMaxAggregates = {
  __typename?: 'DayMaxAggregates';
  /** Maximum of date across the matching connection */
  date?: Maybe<Scalars['Int']['output']>;
  /** Maximum of events across the matching connection */
  events?: Maybe<Scalars['Int']['output']>;
  /** Maximum of extrinsics across the matching connection */
  extrinsics?: Maybe<Scalars['Int']['output']>;
  /** Maximum of month across the matching connection */
  month?: Maybe<Scalars['Int']['output']>;
  /** Maximum of transferAmount across the matching connection */
  transferAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of transferAssetAmount across the matching connection */
  transferAssetAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of transferAssetCount across the matching connection */
  transferAssetCount?: Maybe<Scalars['Int']['output']>;
  /** Maximum of transferCount across the matching connection */
  transferCount?: Maybe<Scalars['Int']['output']>;
  /** Maximum of transferMeritAmount across the matching connection */
  transferMeritAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of transferMeritCount across the matching connection */
  transferMeritCount?: Maybe<Scalars['Int']['output']>;
  /** Maximum of year across the matching connection */
  year?: Maybe<Scalars['Int']['output']>;
};

export type DayMinAggregates = {
  __typename?: 'DayMinAggregates';
  /** Minimum of date across the matching connection */
  date?: Maybe<Scalars['Int']['output']>;
  /** Minimum of events across the matching connection */
  events?: Maybe<Scalars['Int']['output']>;
  /** Minimum of extrinsics across the matching connection */
  extrinsics?: Maybe<Scalars['Int']['output']>;
  /** Minimum of month across the matching connection */
  month?: Maybe<Scalars['Int']['output']>;
  /** Minimum of transferAmount across the matching connection */
  transferAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of transferAssetAmount across the matching connection */
  transferAssetAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of transferAssetCount across the matching connection */
  transferAssetCount?: Maybe<Scalars['Int']['output']>;
  /** Minimum of transferCount across the matching connection */
  transferCount?: Maybe<Scalars['Int']['output']>;
  /** Minimum of transferMeritAmount across the matching connection */
  transferMeritAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of transferMeritCount across the matching connection */
  transferMeritCount?: Maybe<Scalars['Int']['output']>;
  /** Minimum of year across the matching connection */
  year?: Maybe<Scalars['Int']['output']>;
};

export type DayStddevPopulationAggregates = {
  __typename?: 'DayStddevPopulationAggregates';
  /** Population standard deviation of date across the matching connection */
  date?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of events across the matching connection */
  events?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of extrinsics across the matching connection */
  extrinsics?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of month across the matching connection */
  month?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of transferAmount across the matching connection */
  transferAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of transferAssetAmount across the matching connection */
  transferAssetAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of transferAssetCount across the matching connection */
  transferAssetCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of transferCount across the matching connection */
  transferCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of transferMeritAmount across the matching connection */
  transferMeritAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of transferMeritCount across the matching connection */
  transferMeritCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of year across the matching connection */
  year?: Maybe<Scalars['BigFloat']['output']>;
};

export type DayStddevSampleAggregates = {
  __typename?: 'DayStddevSampleAggregates';
  /** Sample standard deviation of date across the matching connection */
  date?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of events across the matching connection */
  events?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of extrinsics across the matching connection */
  extrinsics?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of month across the matching connection */
  month?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of transferAmount across the matching connection */
  transferAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of transferAssetAmount across the matching connection */
  transferAssetAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of transferAssetCount across the matching connection */
  transferAssetCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of transferCount across the matching connection */
  transferCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of transferMeritAmount across the matching connection */
  transferMeritAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of transferMeritCount across the matching connection */
  transferMeritCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of year across the matching connection */
  year?: Maybe<Scalars['BigFloat']['output']>;
};

export type DaySumAggregates = {
  __typename?: 'DaySumAggregates';
  /** Sum of date across the matching connection */
  date: Scalars['BigInt']['output'];
  /** Sum of events across the matching connection */
  events: Scalars['BigInt']['output'];
  /** Sum of extrinsics across the matching connection */
  extrinsics: Scalars['BigInt']['output'];
  /** Sum of month across the matching connection */
  month: Scalars['BigInt']['output'];
  /** Sum of transferAmount across the matching connection */
  transferAmount: Scalars['BigFloat']['output'];
  /** Sum of transferAssetAmount across the matching connection */
  transferAssetAmount: Scalars['BigFloat']['output'];
  /** Sum of transferAssetCount across the matching connection */
  transferAssetCount: Scalars['BigInt']['output'];
  /** Sum of transferCount across the matching connection */
  transferCount: Scalars['BigInt']['output'];
  /** Sum of transferMeritAmount across the matching connection */
  transferMeritAmount: Scalars['BigFloat']['output'];
  /** Sum of transferMeritCount across the matching connection */
  transferMeritCount: Scalars['BigInt']['output'];
  /** Sum of year across the matching connection */
  year: Scalars['BigInt']['output'];
};

export type DayVariancePopulationAggregates = {
  __typename?: 'DayVariancePopulationAggregates';
  /** Population variance of date across the matching connection */
  date?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of events across the matching connection */
  events?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of extrinsics across the matching connection */
  extrinsics?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of month across the matching connection */
  month?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of transferAmount across the matching connection */
  transferAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of transferAssetAmount across the matching connection */
  transferAssetAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of transferAssetCount across the matching connection */
  transferAssetCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of transferCount across the matching connection */
  transferCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of transferMeritAmount across the matching connection */
  transferMeritAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of transferMeritCount across the matching connection */
  transferMeritCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of year across the matching connection */
  year?: Maybe<Scalars['BigFloat']['output']>;
};

export type DayVarianceSampleAggregates = {
  __typename?: 'DayVarianceSampleAggregates';
  /** Sample variance of date across the matching connection */
  date?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of events across the matching connection */
  events?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of extrinsics across the matching connection */
  extrinsics?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of month across the matching connection */
  month?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of transferAmount across the matching connection */
  transferAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of transferAssetAmount across the matching connection */
  transferAssetAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of transferAssetCount across the matching connection */
  transferAssetCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of transferCount across the matching connection */
  transferCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of transferMeritAmount across the matching connection */
  transferMeritAmount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of transferMeritCount across the matching connection */
  transferMeritCount?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of year across the matching connection */
  year?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `Day` values. */
export type DaysConnection = {
  __typename?: 'DaysConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<DayAggregates>;
  /** A list of edges which contains the `Day` and cursor to aid in pagination. */
  edges: Array<DaysEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<DayAggregates>>;
  /** A list of `Day` objects. */
  nodes: Array<Maybe<Day>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Day` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Day` values. */
export type DaysConnectionGroupedAggregatesArgs = {
  groupBy: Array<DaysGroupBy>;
  having?: InputMaybe<DaysHavingInput>;
};

/** A `Day` edge in the connection. */
export type DaysEdge = {
  __typename?: 'DaysEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Day` at the end of the edge. */
  node?: Maybe<Day>;
};

/** Grouping methods for `Day` for usage during aggregation. */
export enum DaysGroupBy {
  Date = 'DATE',
  Events = 'EVENTS',
  Extrinsics = 'EXTRINSICS',
  Month = 'MONTH',
  TransferAmount = 'TRANSFER_AMOUNT',
  TransferAssetAmount = 'TRANSFER_ASSET_AMOUNT',
  TransferAssetCount = 'TRANSFER_ASSET_COUNT',
  TransferCount = 'TRANSFER_COUNT',
  TransferMeritAmount = 'TRANSFER_MERIT_AMOUNT',
  TransferMeritCount = 'TRANSFER_MERIT_COUNT',
  Year = 'YEAR'
}

export type DaysHavingAverageInput = {
  date?: InputMaybe<HavingIntFilter>;
  events?: InputMaybe<HavingIntFilter>;
  extrinsics?: InputMaybe<HavingIntFilter>;
  month?: InputMaybe<HavingIntFilter>;
  transferAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetCount?: InputMaybe<HavingIntFilter>;
  transferCount?: InputMaybe<HavingIntFilter>;
  transferMeritAmount?: InputMaybe<HavingBigfloatFilter>;
  transferMeritCount?: InputMaybe<HavingIntFilter>;
  year?: InputMaybe<HavingIntFilter>;
};

export type DaysHavingDistinctCountInput = {
  date?: InputMaybe<HavingIntFilter>;
  events?: InputMaybe<HavingIntFilter>;
  extrinsics?: InputMaybe<HavingIntFilter>;
  month?: InputMaybe<HavingIntFilter>;
  transferAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetCount?: InputMaybe<HavingIntFilter>;
  transferCount?: InputMaybe<HavingIntFilter>;
  transferMeritAmount?: InputMaybe<HavingBigfloatFilter>;
  transferMeritCount?: InputMaybe<HavingIntFilter>;
  year?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Day` aggregates. */
export type DaysHavingInput = {
  AND?: InputMaybe<Array<DaysHavingInput>>;
  OR?: InputMaybe<Array<DaysHavingInput>>;
  average?: InputMaybe<DaysHavingAverageInput>;
  distinctCount?: InputMaybe<DaysHavingDistinctCountInput>;
  max?: InputMaybe<DaysHavingMaxInput>;
  min?: InputMaybe<DaysHavingMinInput>;
  stddevPopulation?: InputMaybe<DaysHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<DaysHavingStddevSampleInput>;
  sum?: InputMaybe<DaysHavingSumInput>;
  variancePopulation?: InputMaybe<DaysHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<DaysHavingVarianceSampleInput>;
};

export type DaysHavingMaxInput = {
  date?: InputMaybe<HavingIntFilter>;
  events?: InputMaybe<HavingIntFilter>;
  extrinsics?: InputMaybe<HavingIntFilter>;
  month?: InputMaybe<HavingIntFilter>;
  transferAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetCount?: InputMaybe<HavingIntFilter>;
  transferCount?: InputMaybe<HavingIntFilter>;
  transferMeritAmount?: InputMaybe<HavingBigfloatFilter>;
  transferMeritCount?: InputMaybe<HavingIntFilter>;
  year?: InputMaybe<HavingIntFilter>;
};

export type DaysHavingMinInput = {
  date?: InputMaybe<HavingIntFilter>;
  events?: InputMaybe<HavingIntFilter>;
  extrinsics?: InputMaybe<HavingIntFilter>;
  month?: InputMaybe<HavingIntFilter>;
  transferAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetCount?: InputMaybe<HavingIntFilter>;
  transferCount?: InputMaybe<HavingIntFilter>;
  transferMeritAmount?: InputMaybe<HavingBigfloatFilter>;
  transferMeritCount?: InputMaybe<HavingIntFilter>;
  year?: InputMaybe<HavingIntFilter>;
};

export type DaysHavingStddevPopulationInput = {
  date?: InputMaybe<HavingIntFilter>;
  events?: InputMaybe<HavingIntFilter>;
  extrinsics?: InputMaybe<HavingIntFilter>;
  month?: InputMaybe<HavingIntFilter>;
  transferAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetCount?: InputMaybe<HavingIntFilter>;
  transferCount?: InputMaybe<HavingIntFilter>;
  transferMeritAmount?: InputMaybe<HavingBigfloatFilter>;
  transferMeritCount?: InputMaybe<HavingIntFilter>;
  year?: InputMaybe<HavingIntFilter>;
};

export type DaysHavingStddevSampleInput = {
  date?: InputMaybe<HavingIntFilter>;
  events?: InputMaybe<HavingIntFilter>;
  extrinsics?: InputMaybe<HavingIntFilter>;
  month?: InputMaybe<HavingIntFilter>;
  transferAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetCount?: InputMaybe<HavingIntFilter>;
  transferCount?: InputMaybe<HavingIntFilter>;
  transferMeritAmount?: InputMaybe<HavingBigfloatFilter>;
  transferMeritCount?: InputMaybe<HavingIntFilter>;
  year?: InputMaybe<HavingIntFilter>;
};

export type DaysHavingSumInput = {
  date?: InputMaybe<HavingIntFilter>;
  events?: InputMaybe<HavingIntFilter>;
  extrinsics?: InputMaybe<HavingIntFilter>;
  month?: InputMaybe<HavingIntFilter>;
  transferAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetCount?: InputMaybe<HavingIntFilter>;
  transferCount?: InputMaybe<HavingIntFilter>;
  transferMeritAmount?: InputMaybe<HavingBigfloatFilter>;
  transferMeritCount?: InputMaybe<HavingIntFilter>;
  year?: InputMaybe<HavingIntFilter>;
};

export type DaysHavingVariancePopulationInput = {
  date?: InputMaybe<HavingIntFilter>;
  events?: InputMaybe<HavingIntFilter>;
  extrinsics?: InputMaybe<HavingIntFilter>;
  month?: InputMaybe<HavingIntFilter>;
  transferAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetCount?: InputMaybe<HavingIntFilter>;
  transferCount?: InputMaybe<HavingIntFilter>;
  transferMeritAmount?: InputMaybe<HavingBigfloatFilter>;
  transferMeritCount?: InputMaybe<HavingIntFilter>;
  year?: InputMaybe<HavingIntFilter>;
};

export type DaysHavingVarianceSampleInput = {
  date?: InputMaybe<HavingIntFilter>;
  events?: InputMaybe<HavingIntFilter>;
  extrinsics?: InputMaybe<HavingIntFilter>;
  month?: InputMaybe<HavingIntFilter>;
  transferAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetAmount?: InputMaybe<HavingBigfloatFilter>;
  transferAssetCount?: InputMaybe<HavingIntFilter>;
  transferCount?: InputMaybe<HavingIntFilter>;
  transferMeritAmount?: InputMaybe<HavingBigfloatFilter>;
  transferMeritCount?: InputMaybe<HavingIntFilter>;
  year?: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `Day`. */
export enum DaysOrderBy {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  EventsAsc = 'EVENTS_ASC',
  EventsDesc = 'EVENTS_DESC',
  ExtrinsicsAsc = 'EXTRINSICS_ASC',
  ExtrinsicsDesc = 'EXTRINSICS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MonthAsc = 'MONTH_ASC',
  MonthDesc = 'MONTH_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TransferAmountAsc = 'TRANSFER_AMOUNT_ASC',
  TransferAmountDesc = 'TRANSFER_AMOUNT_DESC',
  TransferAssetAmountAsc = 'TRANSFER_ASSET_AMOUNT_ASC',
  TransferAssetAmountDesc = 'TRANSFER_ASSET_AMOUNT_DESC',
  TransferAssetCountAsc = 'TRANSFER_ASSET_COUNT_ASC',
  TransferAssetCountDesc = 'TRANSFER_ASSET_COUNT_DESC',
  TransferCountAsc = 'TRANSFER_COUNT_ASC',
  TransferCountDesc = 'TRANSFER_COUNT_DESC',
  TransferMeritAmountAsc = 'TRANSFER_MERIT_AMOUNT_ASC',
  TransferMeritAmountDesc = 'TRANSFER_MERIT_AMOUNT_DESC',
  TransferMeritCountAsc = 'TRANSFER_MERIT_COUNT_ASC',
  TransferMeritCountDesc = 'TRANSFER_MERIT_COUNT_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC'
}

export type EthAccount = Node & {
  __typename?: 'EthAccount';
  /** Reads and enables pagination through a set of `Account`. */
  accountsByBridgeReceiptEthRecipientIdAndFromId: EthAccountAccountsByBridgeReceiptEthRecipientIdAndFromIdManyToManyConnection;
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceiptsByEthRecipientId: BridgeReceiptsConnection;
  /** Reads and enables pagination through a set of `Event`. */
  eventsByBridgeReceiptEthRecipientIdAndEventId: EthAccountEventsByBridgeReceiptEthRecipientIdAndEventIdManyToManyConnection;
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};


export type EthAccountAccountsByBridgeReceiptEthRecipientIdAndFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type EthAccountBridgeReceiptsByEthRecipientIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};


export type EthAccountEventsByBridgeReceiptEthRecipientIdAndEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `BridgeReceipt`. */
export type EthAccountAccountsByBridgeReceiptEthRecipientIdAndFromIdManyToManyConnection = {
  __typename?: 'EthAccountAccountsByBridgeReceiptEthRecipientIdAndFromIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `BridgeReceipt`, and the cursor to aid in pagination. */
  edges: Array<EthAccountAccountsByBridgeReceiptEthRecipientIdAndFromIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `BridgeReceipt`. */
export type EthAccountAccountsByBridgeReceiptEthRecipientIdAndFromIdManyToManyEdge = {
  __typename?: 'EthAccountAccountsByBridgeReceiptEthRecipientIdAndFromIdManyToManyEdge';
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceiptsByFromId: BridgeReceiptsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `BridgeReceipt`. */
export type EthAccountAccountsByBridgeReceiptEthRecipientIdAndFromIdManyToManyEdgeBridgeReceiptsByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};

export type EthAccountAggregates = {
  __typename?: 'EthAccountAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<EthAccountDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

export type EthAccountDistinctCountAggregates = {
  __typename?: 'EthAccountDistinctCountAggregates';
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
};

/** A connection to a list of `Event` values, with data from `BridgeReceipt`. */
export type EthAccountEventsByBridgeReceiptEthRecipientIdAndEventIdManyToManyConnection = {
  __typename?: 'EthAccountEventsByBridgeReceiptEthRecipientIdAndEventIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<EventAggregates>;
  /** A list of edges which contains the `Event`, info from the `BridgeReceipt`, and the cursor to aid in pagination. */
  edges: Array<EthAccountEventsByBridgeReceiptEthRecipientIdAndEventIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<EventAggregates>>;
  /** A list of `Event` objects. */
  nodes: Array<Maybe<Event>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Event` values, with data from `BridgeReceipt`. */
export type EthAccountEventsByBridgeReceiptEthRecipientIdAndEventIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<EventsGroupBy>;
  having?: InputMaybe<EventsHavingInput>;
};

/** A `Event` edge in the connection, with data from `BridgeReceipt`. */
export type EthAccountEventsByBridgeReceiptEthRecipientIdAndEventIdManyToManyEdge = {
  __typename?: 'EthAccountEventsByBridgeReceiptEthRecipientIdAndEventIdManyToManyEdge';
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceipts: BridgeReceiptsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Event` at the end of the edge. */
  node?: Maybe<Event>;
};


/** A `Event` edge in the connection, with data from `BridgeReceipt`. */
export type EthAccountEventsByBridgeReceiptEthRecipientIdAndEventIdManyToManyEdgeBridgeReceiptsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};

/** A filter to be used against `EthAccount` object types. All fields are combined with a logical ‘and.’ */
export type EthAccountFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<EthAccountFilter>>;
  /** Filter by the object’s `bridgeReceiptsByEthRecipientId` relation. */
  bridgeReceiptsByEthRecipientId?: InputMaybe<EthAccountToManyBridgeReceiptFilter>;
  /** Some related `bridgeReceiptsByEthRecipientId` exist. */
  bridgeReceiptsByEthRecipientIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<EthAccountFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<EthAccountFilter>>;
};

/** A filter to be used against many `BridgeReceipt` object types. All fields are combined with a logical ‘and.’ */
export type EthAccountToManyBridgeReceiptFilter = {
  /** Aggregates across related `BridgeReceipt` match the filter criteria. */
  aggregates?: InputMaybe<BridgeReceiptAggregatesFilter>;
  /** Every related `BridgeReceipt` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BridgeReceiptFilter>;
  /** No related `BridgeReceipt` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BridgeReceiptFilter>;
  /** Some related `BridgeReceipt` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BridgeReceiptFilter>;
};

/** A connection to a list of `EthAccount` values. */
export type EthAccountsConnection = {
  __typename?: 'EthAccountsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<EthAccountAggregates>;
  /** A list of edges which contains the `EthAccount` and cursor to aid in pagination. */
  edges: Array<EthAccountsEdge>;
  /** A list of `EthAccount` objects. */
  nodes: Array<Maybe<EthAccount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `EthAccount` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `EthAccount` edge in the connection. */
export type EthAccountsEdge = {
  __typename?: 'EthAccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `EthAccount` at the end of the edge. */
  node?: Maybe<EthAccount>;
};

/** Methods to use when ordering `EthAccount`. */
export enum EthAccountsOrderBy {
  BridgeReceiptsByEthRecipientIdAverageAmountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_AMOUNT_ASC',
  BridgeReceiptsByEthRecipientIdAverageAmountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_AMOUNT_DESC',
  BridgeReceiptsByEthRecipientIdAverageEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdAverageEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdAverageEventIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_EVENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdAverageEventIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_EVENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdAverageFromIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_FROM_ID_ASC',
  BridgeReceiptsByEthRecipientIdAverageFromIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_FROM_ID_DESC',
  BridgeReceiptsByEthRecipientIdAverageIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_ID_ASC',
  BridgeReceiptsByEthRecipientIdAverageIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_ID_DESC',
  BridgeReceiptsByEthRecipientIdAverageReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_RECEIPT_ID_ASC',
  BridgeReceiptsByEthRecipientIdAverageReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_AVERAGE_RECEIPT_ID_DESC',
  BridgeReceiptsByEthRecipientIdCountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_COUNT_ASC',
  BridgeReceiptsByEthRecipientIdCountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_COUNT_DESC',
  BridgeReceiptsByEthRecipientIdDistinctCountAmountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_AMOUNT_ASC',
  BridgeReceiptsByEthRecipientIdDistinctCountAmountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_AMOUNT_DESC',
  BridgeReceiptsByEthRecipientIdDistinctCountEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdDistinctCountEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdDistinctCountEventIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_EVENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdDistinctCountEventIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_EVENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdDistinctCountFromIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_FROM_ID_ASC',
  BridgeReceiptsByEthRecipientIdDistinctCountFromIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_FROM_ID_DESC',
  BridgeReceiptsByEthRecipientIdDistinctCountIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_ID_ASC',
  BridgeReceiptsByEthRecipientIdDistinctCountIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_ID_DESC',
  BridgeReceiptsByEthRecipientIdDistinctCountReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_RECEIPT_ID_ASC',
  BridgeReceiptsByEthRecipientIdDistinctCountReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_DISTINCT_COUNT_RECEIPT_ID_DESC',
  BridgeReceiptsByEthRecipientIdMaxAmountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_AMOUNT_ASC',
  BridgeReceiptsByEthRecipientIdMaxAmountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_AMOUNT_DESC',
  BridgeReceiptsByEthRecipientIdMaxEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdMaxEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdMaxEventIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_EVENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdMaxEventIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_EVENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdMaxFromIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_FROM_ID_ASC',
  BridgeReceiptsByEthRecipientIdMaxFromIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_FROM_ID_DESC',
  BridgeReceiptsByEthRecipientIdMaxIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_ID_ASC',
  BridgeReceiptsByEthRecipientIdMaxIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_ID_DESC',
  BridgeReceiptsByEthRecipientIdMaxReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_RECEIPT_ID_ASC',
  BridgeReceiptsByEthRecipientIdMaxReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MAX_RECEIPT_ID_DESC',
  BridgeReceiptsByEthRecipientIdMinAmountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_AMOUNT_ASC',
  BridgeReceiptsByEthRecipientIdMinAmountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_AMOUNT_DESC',
  BridgeReceiptsByEthRecipientIdMinEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdMinEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdMinEventIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_EVENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdMinEventIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_EVENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdMinFromIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_FROM_ID_ASC',
  BridgeReceiptsByEthRecipientIdMinFromIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_FROM_ID_DESC',
  BridgeReceiptsByEthRecipientIdMinIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_ID_ASC',
  BridgeReceiptsByEthRecipientIdMinIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_ID_DESC',
  BridgeReceiptsByEthRecipientIdMinReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_RECEIPT_ID_ASC',
  BridgeReceiptsByEthRecipientIdMinReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_MIN_RECEIPT_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevPopulationAmountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_AMOUNT_ASC',
  BridgeReceiptsByEthRecipientIdStddevPopulationAmountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_AMOUNT_DESC',
  BridgeReceiptsByEthRecipientIdStddevPopulationEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevPopulationEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevPopulationEventIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_EVENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevPopulationEventIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_EVENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevPopulationFromIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_FROM_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevPopulationFromIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_FROM_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevPopulationIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevPopulationIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevPopulationReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevPopulationReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevSampleAmountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_AMOUNT_ASC',
  BridgeReceiptsByEthRecipientIdStddevSampleAmountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_AMOUNT_DESC',
  BridgeReceiptsByEthRecipientIdStddevSampleEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevSampleEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevSampleEventIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevSampleEventIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevSampleFromIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_FROM_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevSampleFromIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_FROM_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevSampleIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevSampleIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_ID_DESC',
  BridgeReceiptsByEthRecipientIdStddevSampleReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptsByEthRecipientIdStddevSampleReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_STDDEV_SAMPLE_RECEIPT_ID_DESC',
  BridgeReceiptsByEthRecipientIdSumAmountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_AMOUNT_ASC',
  BridgeReceiptsByEthRecipientIdSumAmountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_AMOUNT_DESC',
  BridgeReceiptsByEthRecipientIdSumEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdSumEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdSumEventIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_EVENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdSumEventIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_EVENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdSumFromIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_FROM_ID_ASC',
  BridgeReceiptsByEthRecipientIdSumFromIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_FROM_ID_DESC',
  BridgeReceiptsByEthRecipientIdSumIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_ID_ASC',
  BridgeReceiptsByEthRecipientIdSumIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_ID_DESC',
  BridgeReceiptsByEthRecipientIdSumReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_RECEIPT_ID_ASC',
  BridgeReceiptsByEthRecipientIdSumReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_SUM_RECEIPT_ID_DESC',
  BridgeReceiptsByEthRecipientIdVariancePopulationAmountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_AMOUNT_ASC',
  BridgeReceiptsByEthRecipientIdVariancePopulationAmountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_AMOUNT_DESC',
  BridgeReceiptsByEthRecipientIdVariancePopulationEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdVariancePopulationEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdVariancePopulationEventIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_EVENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdVariancePopulationEventIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_EVENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdVariancePopulationFromIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_FROM_ID_ASC',
  BridgeReceiptsByEthRecipientIdVariancePopulationFromIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_FROM_ID_DESC',
  BridgeReceiptsByEthRecipientIdVariancePopulationIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_ID_ASC',
  BridgeReceiptsByEthRecipientIdVariancePopulationIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_ID_DESC',
  BridgeReceiptsByEthRecipientIdVariancePopulationReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptsByEthRecipientIdVariancePopulationReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptsByEthRecipientIdVarianceSampleAmountAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_AMOUNT_ASC',
  BridgeReceiptsByEthRecipientIdVarianceSampleAmountDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_AMOUNT_DESC',
  BridgeReceiptsByEthRecipientIdVarianceSampleEthRecipientIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdVarianceSampleEthRecipientIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdVarianceSampleEventIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptsByEthRecipientIdVarianceSampleEventIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptsByEthRecipientIdVarianceSampleFromIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_FROM_ID_ASC',
  BridgeReceiptsByEthRecipientIdVarianceSampleFromIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_FROM_ID_DESC',
  BridgeReceiptsByEthRecipientIdVarianceSampleIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_ID_ASC',
  BridgeReceiptsByEthRecipientIdVarianceSampleIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_ID_DESC',
  BridgeReceiptsByEthRecipientIdVarianceSampleReceiptIdAsc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptsByEthRecipientIdVarianceSampleReceiptIdDesc = 'BRIDGE_RECEIPTS_BY_ETH_RECIPIENT_ID_VARIANCE_SAMPLE_RECEIPT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Event = Node & {
  __typename?: 'Event';
  /** Reads and enables pagination through a set of `Account`. */
  accountsByBridgeReceiptEventIdAndFromId: EventAccountsByBridgeReceiptEventIdAndFromIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByBridgeVoteEventIdAndRelayId: EventAccountsByBridgeVoteEventIdAndRelayIdManyToManyConnection;
  /** Reads a single `Block` that is related to this `Event`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  /** Reads and enables pagination through a set of `BridgeReceiptApproved`. */
  bridgeReceiptApproveds: BridgeReceiptApprovedsConnection;
  /** Reads and enables pagination through a set of `BridgeReceiptProcessed`. */
  bridgeReceiptProcesseds: BridgeReceiptProcessedsConnection;
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceipts: BridgeReceiptsConnection;
  /** Reads and enables pagination through a set of `BridgeVote`. */
  bridgeVotes: BridgeVotesConnection;
  /** Reads and enables pagination through a set of `CongressMotion`. */
  congressMotionsByExecutionEventId: CongressMotionsConnection;
  data?: Maybe<Scalars['JSON']['output']>;
  /** Reads and enables pagination through a set of `EthAccount`. */
  ethAccountsByBridgeReceiptEventIdAndEthRecipientId: EventEthAccountsByBridgeReceiptEventIdAndEthRecipientIdManyToManyConnection;
  /** Reads a single `Extrinsic` that is related to this `Event`. */
  extrinsic?: Maybe<Extrinsic>;
  extrinsicId?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Extrinsic`. */
  extrinsicsByCongressMotionExecutionEventIdAndExtrinsicId: EventExtrinsicsByCongressMotionExecutionEventIdAndExtrinsicIdManyToManyConnection;
  id: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  method?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  section?: Maybe<Scalars['String']['output']>;
};


export type EventAccountsByBridgeReceiptEventIdAndFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type EventAccountsByBridgeVoteEventIdAndRelayIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type EventBridgeReceiptApprovedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipt_Approveds_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptApprovedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptApprovedsOrderBy>>;
};


export type EventBridgeReceiptProcessedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipt_Processeds_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptProcessedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptProcessedsOrderBy>>;
};


export type EventBridgeReceiptsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};


export type EventBridgeVotesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Votes_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeVoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeVotesOrderBy>>;
};


export type EventCongressMotionsByExecutionEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Congress_Motions_Distinct_Enum>>>;
  filter?: InputMaybe<CongressMotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CongressMotionsOrderBy>>;
};


export type EventEthAccountsByBridgeReceiptEventIdAndEthRecipientIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Eth_Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<EthAccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EthAccountsOrderBy>>;
};


export type EventExtrinsicsByCongressMotionExecutionEventIdAndExtrinsicIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Extrinsics_Distinct_Enum>>>;
  filter?: InputMaybe<ExtrinsicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `BridgeReceipt`. */
export type EventAccountsByBridgeReceiptEventIdAndFromIdManyToManyConnection = {
  __typename?: 'EventAccountsByBridgeReceiptEventIdAndFromIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `BridgeReceipt`, and the cursor to aid in pagination. */
  edges: Array<EventAccountsByBridgeReceiptEventIdAndFromIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `BridgeReceipt`. */
export type EventAccountsByBridgeReceiptEventIdAndFromIdManyToManyEdge = {
  __typename?: 'EventAccountsByBridgeReceiptEventIdAndFromIdManyToManyEdge';
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceiptsByFromId: BridgeReceiptsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `BridgeReceipt`. */
export type EventAccountsByBridgeReceiptEventIdAndFromIdManyToManyEdgeBridgeReceiptsByFromIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `BridgeVote`. */
export type EventAccountsByBridgeVoteEventIdAndRelayIdManyToManyConnection = {
  __typename?: 'EventAccountsByBridgeVoteEventIdAndRelayIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `BridgeVote`, and the cursor to aid in pagination. */
  edges: Array<EventAccountsByBridgeVoteEventIdAndRelayIdManyToManyEdge>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Account` edge in the connection, with data from `BridgeVote`. */
export type EventAccountsByBridgeVoteEventIdAndRelayIdManyToManyEdge = {
  __typename?: 'EventAccountsByBridgeVoteEventIdAndRelayIdManyToManyEdge';
  /** Reads and enables pagination through a set of `BridgeVote`. */
  bridgeVotesByRelayId: BridgeVotesConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `BridgeVote`. */
export type EventAccountsByBridgeVoteEventIdAndRelayIdManyToManyEdgeBridgeVotesByRelayIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Votes_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeVoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeVotesOrderBy>>;
};

export type EventAggregates = {
  __typename?: 'EventAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<EventAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<EventDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<EventMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<EventMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<EventStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<EventStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<EventSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<EventVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<EventVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Event` object types. */
export type EventAggregatesFilter = {
  /** Mean average aggregate over matching `Event` objects. */
  average?: InputMaybe<EventAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Event` objects. */
  distinctCount?: InputMaybe<EventDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Event` object to be included within the aggregate. */
  filter?: InputMaybe<EventFilter>;
  /** Maximum aggregate over matching `Event` objects. */
  max?: InputMaybe<EventMaxAggregateFilter>;
  /** Minimum aggregate over matching `Event` objects. */
  min?: InputMaybe<EventMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Event` objects. */
  stddevPopulation?: InputMaybe<EventStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Event` objects. */
  stddevSample?: InputMaybe<EventStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Event` objects. */
  sum?: InputMaybe<EventSumAggregateFilter>;
  /** Population variance aggregate over matching `Event` objects. */
  variancePopulation?: InputMaybe<EventVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Event` objects. */
  varianceSample?: InputMaybe<EventVarianceSampleAggregateFilter>;
};

export type EventAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type EventAverageAggregates = {
  __typename?: 'EventAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

export type EventDistinctCountAggregateFilter = {
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  data?: InputMaybe<BigIntFilter>;
  extrinsicId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  index?: InputMaybe<BigIntFilter>;
  method?: InputMaybe<BigIntFilter>;
  section?: InputMaybe<BigIntFilter>;
};

export type EventDistinctCountAggregates = {
  __typename?: 'EventDistinctCountAggregates';
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of data across the matching connection */
  data?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicId across the matching connection */
  extrinsicId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of index across the matching connection */
  index?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of method across the matching connection */
  method?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of section across the matching connection */
  section?: Maybe<Scalars['BigInt']['output']>;
};

/** A connection to a list of `EthAccount` values, with data from `BridgeReceipt`. */
export type EventEthAccountsByBridgeReceiptEventIdAndEthRecipientIdManyToManyConnection = {
  __typename?: 'EventEthAccountsByBridgeReceiptEventIdAndEthRecipientIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<EthAccountAggregates>;
  /** A list of edges which contains the `EthAccount`, info from the `BridgeReceipt`, and the cursor to aid in pagination. */
  edges: Array<EventEthAccountsByBridgeReceiptEventIdAndEthRecipientIdManyToManyEdge>;
  /** A list of `EthAccount` objects. */
  nodes: Array<Maybe<EthAccount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `EthAccount` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `EthAccount` edge in the connection, with data from `BridgeReceipt`. */
export type EventEthAccountsByBridgeReceiptEventIdAndEthRecipientIdManyToManyEdge = {
  __typename?: 'EventEthAccountsByBridgeReceiptEventIdAndEthRecipientIdManyToManyEdge';
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceiptsByEthRecipientId: BridgeReceiptsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `EthAccount` at the end of the edge. */
  node?: Maybe<EthAccount>;
};


/** A `EthAccount` edge in the connection, with data from `BridgeReceipt`. */
export type EventEthAccountsByBridgeReceiptEventIdAndEthRecipientIdManyToManyEdgeBridgeReceiptsByEthRecipientIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};

/** A connection to a list of `Extrinsic` values, with data from `CongressMotion`. */
export type EventExtrinsicsByCongressMotionExecutionEventIdAndExtrinsicIdManyToManyConnection = {
  __typename?: 'EventExtrinsicsByCongressMotionExecutionEventIdAndExtrinsicIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ExtrinsicAggregates>;
  /** A list of edges which contains the `Extrinsic`, info from the `CongressMotion`, and the cursor to aid in pagination. */
  edges: Array<EventExtrinsicsByCongressMotionExecutionEventIdAndExtrinsicIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
  /** A list of `Extrinsic` objects. */
  nodes: Array<Maybe<Extrinsic>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Extrinsic` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Extrinsic` values, with data from `CongressMotion`. */
export type EventExtrinsicsByCongressMotionExecutionEventIdAndExtrinsicIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<ExtrinsicsGroupBy>;
  having?: InputMaybe<ExtrinsicsHavingInput>;
};

/** A `Extrinsic` edge in the connection, with data from `CongressMotion`. */
export type EventExtrinsicsByCongressMotionExecutionEventIdAndExtrinsicIdManyToManyEdge = {
  __typename?: 'EventExtrinsicsByCongressMotionExecutionEventIdAndExtrinsicIdManyToManyEdge';
  /** Reads and enables pagination through a set of `CongressMotion`. */
  congressMotions: CongressMotionsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Extrinsic` at the end of the edge. */
  node?: Maybe<Extrinsic>;
};


/** A `Extrinsic` edge in the connection, with data from `CongressMotion`. */
export type EventExtrinsicsByCongressMotionExecutionEventIdAndExtrinsicIdManyToManyEdgeCongressMotionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Congress_Motions_Distinct_Enum>>>;
  filter?: InputMaybe<CongressMotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CongressMotionsOrderBy>>;
};

/** A filter to be used against `Event` object types. All fields are combined with a logical ‘and.’ */
export type EventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `bridgeReceiptApproveds` relation. */
  bridgeReceiptApproveds?: InputMaybe<EventToManyBridgeReceiptApprovedFilter>;
  /** Some related `bridgeReceiptApproveds` exist. */
  bridgeReceiptApprovedsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `bridgeReceiptProcesseds` relation. */
  bridgeReceiptProcesseds?: InputMaybe<EventToManyBridgeReceiptProcessedFilter>;
  /** Some related `bridgeReceiptProcesseds` exist. */
  bridgeReceiptProcessedsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `bridgeReceipts` relation. */
  bridgeReceipts?: InputMaybe<EventToManyBridgeReceiptFilter>;
  /** Some related `bridgeReceipts` exist. */
  bridgeReceiptsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `bridgeVotes` relation. */
  bridgeVotes?: InputMaybe<EventToManyBridgeVoteFilter>;
  /** Some related `bridgeVotes` exist. */
  bridgeVotesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `congressMotionsByExecutionEventId` relation. */
  congressMotionsByExecutionEventId?: InputMaybe<EventToManyCongressMotionFilter>;
  /** Some related `congressMotionsByExecutionEventId` exist. */
  congressMotionsByExecutionEventIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `data` field. */
  data?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `extrinsic` relation. */
  extrinsic?: InputMaybe<ExtrinsicFilter>;
  /** A related `extrinsic` exists. */
  extrinsicExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `extrinsicId` field. */
  extrinsicId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `index` field. */
  index?: InputMaybe<IntFilter>;
  /** Filter by the object’s `method` field. */
  method?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<EventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `section` field. */
  section?: InputMaybe<StringFilter>;
};

export type EventMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<IntFilter>;
};

export type EventMaxAggregates = {
  __typename?: 'EventMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of index across the matching connection */
  index?: Maybe<Scalars['Int']['output']>;
};

export type EventMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<IntFilter>;
};

export type EventMinAggregates = {
  __typename?: 'EventMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of index across the matching connection */
  index?: Maybe<Scalars['Int']['output']>;
};

export type EventStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type EventStddevPopulationAggregates = {
  __typename?: 'EventStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

export type EventStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type EventStddevSampleAggregates = {
  __typename?: 'EventStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

export type EventSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigIntFilter>;
};

export type EventSumAggregates = {
  __typename?: 'EventSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of index across the matching connection */
  index: Scalars['BigInt']['output'];
};

/** A filter to be used against many `BridgeReceiptApproved` object types. All fields are combined with a logical ‘and.’ */
export type EventToManyBridgeReceiptApprovedFilter = {
  /** Aggregates across related `BridgeReceiptApproved` match the filter criteria. */
  aggregates?: InputMaybe<BridgeReceiptApprovedAggregatesFilter>;
  /** Every related `BridgeReceiptApproved` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BridgeReceiptApprovedFilter>;
  /** No related `BridgeReceiptApproved` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BridgeReceiptApprovedFilter>;
  /** Some related `BridgeReceiptApproved` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BridgeReceiptApprovedFilter>;
};

/** A filter to be used against many `BridgeReceipt` object types. All fields are combined with a logical ‘and.’ */
export type EventToManyBridgeReceiptFilter = {
  /** Aggregates across related `BridgeReceipt` match the filter criteria. */
  aggregates?: InputMaybe<BridgeReceiptAggregatesFilter>;
  /** Every related `BridgeReceipt` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BridgeReceiptFilter>;
  /** No related `BridgeReceipt` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BridgeReceiptFilter>;
  /** Some related `BridgeReceipt` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BridgeReceiptFilter>;
};

/** A filter to be used against many `BridgeReceiptProcessed` object types. All fields are combined with a logical ‘and.’ */
export type EventToManyBridgeReceiptProcessedFilter = {
  /** Aggregates across related `BridgeReceiptProcessed` match the filter criteria. */
  aggregates?: InputMaybe<BridgeReceiptProcessedAggregatesFilter>;
  /** Every related `BridgeReceiptProcessed` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BridgeReceiptProcessedFilter>;
  /** No related `BridgeReceiptProcessed` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BridgeReceiptProcessedFilter>;
  /** Some related `BridgeReceiptProcessed` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BridgeReceiptProcessedFilter>;
};

/** A filter to be used against many `BridgeVote` object types. All fields are combined with a logical ‘and.’ */
export type EventToManyBridgeVoteFilter = {
  /** Aggregates across related `BridgeVote` match the filter criteria. */
  aggregates?: InputMaybe<BridgeVoteAggregatesFilter>;
  /** Every related `BridgeVote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<BridgeVoteFilter>;
  /** No related `BridgeVote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<BridgeVoteFilter>;
  /** Some related `BridgeVote` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<BridgeVoteFilter>;
};

/** A filter to be used against many `CongressMotion` object types. All fields are combined with a logical ‘and.’ */
export type EventToManyCongressMotionFilter = {
  /** Aggregates across related `CongressMotion` match the filter criteria. */
  aggregates?: InputMaybe<CongressMotionAggregatesFilter>;
  /** Every related `CongressMotion` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CongressMotionFilter>;
  /** No related `CongressMotion` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CongressMotionFilter>;
  /** Some related `CongressMotion` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CongressMotionFilter>;
};

export type EventVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type EventVariancePopulationAggregates = {
  __typename?: 'EventVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

export type EventVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type EventVarianceSampleAggregates = {
  __typename?: 'EventVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `Event` values. */
export type EventsConnection = {
  __typename?: 'EventsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<EventAggregates>;
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  edges: Array<EventsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<EventAggregates>>;
  /** A list of `Event` objects. */
  nodes: Array<Maybe<Event>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Event` values. */
export type EventsConnectionGroupedAggregatesArgs = {
  groupBy: Array<EventsGroupBy>;
  having?: InputMaybe<EventsHavingInput>;
};

/** A `Event` edge in the connection. */
export type EventsEdge = {
  __typename?: 'EventsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Event` at the end of the edge. */
  node?: Maybe<Event>;
};

/** Grouping methods for `Event` for usage during aggregation. */
export enum EventsGroupBy {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  Data = 'DATA',
  ExtrinsicId = 'EXTRINSIC_ID',
  Index = 'INDEX',
  Method = 'METHOD',
  Section = 'SECTION'
}

export type EventsHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type EventsHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Event` aggregates. */
export type EventsHavingInput = {
  AND?: InputMaybe<Array<EventsHavingInput>>;
  OR?: InputMaybe<Array<EventsHavingInput>>;
  average?: InputMaybe<EventsHavingAverageInput>;
  distinctCount?: InputMaybe<EventsHavingDistinctCountInput>;
  max?: InputMaybe<EventsHavingMaxInput>;
  min?: InputMaybe<EventsHavingMinInput>;
  stddevPopulation?: InputMaybe<EventsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<EventsHavingStddevSampleInput>;
  sum?: InputMaybe<EventsHavingSumInput>;
  variancePopulation?: InputMaybe<EventsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<EventsHavingVarianceSampleInput>;
};

export type EventsHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type EventsHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type EventsHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type EventsHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type EventsHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type EventsHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type EventsHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `Event`. */
export enum EventsOrderBy {
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  BridgeReceiptsAverageAmountAsc = 'BRIDGE_RECEIPTS_AVERAGE_AMOUNT_ASC',
  BridgeReceiptsAverageAmountDesc = 'BRIDGE_RECEIPTS_AVERAGE_AMOUNT_DESC',
  BridgeReceiptsAverageEthRecipientIdAsc = 'BRIDGE_RECEIPTS_AVERAGE_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsAverageEthRecipientIdDesc = 'BRIDGE_RECEIPTS_AVERAGE_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsAverageEventIdAsc = 'BRIDGE_RECEIPTS_AVERAGE_EVENT_ID_ASC',
  BridgeReceiptsAverageEventIdDesc = 'BRIDGE_RECEIPTS_AVERAGE_EVENT_ID_DESC',
  BridgeReceiptsAverageFromIdAsc = 'BRIDGE_RECEIPTS_AVERAGE_FROM_ID_ASC',
  BridgeReceiptsAverageFromIdDesc = 'BRIDGE_RECEIPTS_AVERAGE_FROM_ID_DESC',
  BridgeReceiptsAverageIdAsc = 'BRIDGE_RECEIPTS_AVERAGE_ID_ASC',
  BridgeReceiptsAverageIdDesc = 'BRIDGE_RECEIPTS_AVERAGE_ID_DESC',
  BridgeReceiptsAverageReceiptIdAsc = 'BRIDGE_RECEIPTS_AVERAGE_RECEIPT_ID_ASC',
  BridgeReceiptsAverageReceiptIdDesc = 'BRIDGE_RECEIPTS_AVERAGE_RECEIPT_ID_DESC',
  BridgeReceiptsCountAsc = 'BRIDGE_RECEIPTS_COUNT_ASC',
  BridgeReceiptsCountDesc = 'BRIDGE_RECEIPTS_COUNT_DESC',
  BridgeReceiptsDistinctCountAmountAsc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_AMOUNT_ASC',
  BridgeReceiptsDistinctCountAmountDesc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_AMOUNT_DESC',
  BridgeReceiptsDistinctCountEthRecipientIdAsc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsDistinctCountEthRecipientIdDesc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsDistinctCountEventIdAsc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_EVENT_ID_ASC',
  BridgeReceiptsDistinctCountEventIdDesc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_EVENT_ID_DESC',
  BridgeReceiptsDistinctCountFromIdAsc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_FROM_ID_ASC',
  BridgeReceiptsDistinctCountFromIdDesc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_FROM_ID_DESC',
  BridgeReceiptsDistinctCountIdAsc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_ID_ASC',
  BridgeReceiptsDistinctCountIdDesc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_ID_DESC',
  BridgeReceiptsDistinctCountReceiptIdAsc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_RECEIPT_ID_ASC',
  BridgeReceiptsDistinctCountReceiptIdDesc = 'BRIDGE_RECEIPTS_DISTINCT_COUNT_RECEIPT_ID_DESC',
  BridgeReceiptsMaxAmountAsc = 'BRIDGE_RECEIPTS_MAX_AMOUNT_ASC',
  BridgeReceiptsMaxAmountDesc = 'BRIDGE_RECEIPTS_MAX_AMOUNT_DESC',
  BridgeReceiptsMaxEthRecipientIdAsc = 'BRIDGE_RECEIPTS_MAX_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsMaxEthRecipientIdDesc = 'BRIDGE_RECEIPTS_MAX_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsMaxEventIdAsc = 'BRIDGE_RECEIPTS_MAX_EVENT_ID_ASC',
  BridgeReceiptsMaxEventIdDesc = 'BRIDGE_RECEIPTS_MAX_EVENT_ID_DESC',
  BridgeReceiptsMaxFromIdAsc = 'BRIDGE_RECEIPTS_MAX_FROM_ID_ASC',
  BridgeReceiptsMaxFromIdDesc = 'BRIDGE_RECEIPTS_MAX_FROM_ID_DESC',
  BridgeReceiptsMaxIdAsc = 'BRIDGE_RECEIPTS_MAX_ID_ASC',
  BridgeReceiptsMaxIdDesc = 'BRIDGE_RECEIPTS_MAX_ID_DESC',
  BridgeReceiptsMaxReceiptIdAsc = 'BRIDGE_RECEIPTS_MAX_RECEIPT_ID_ASC',
  BridgeReceiptsMaxReceiptIdDesc = 'BRIDGE_RECEIPTS_MAX_RECEIPT_ID_DESC',
  BridgeReceiptsMinAmountAsc = 'BRIDGE_RECEIPTS_MIN_AMOUNT_ASC',
  BridgeReceiptsMinAmountDesc = 'BRIDGE_RECEIPTS_MIN_AMOUNT_DESC',
  BridgeReceiptsMinEthRecipientIdAsc = 'BRIDGE_RECEIPTS_MIN_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsMinEthRecipientIdDesc = 'BRIDGE_RECEIPTS_MIN_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsMinEventIdAsc = 'BRIDGE_RECEIPTS_MIN_EVENT_ID_ASC',
  BridgeReceiptsMinEventIdDesc = 'BRIDGE_RECEIPTS_MIN_EVENT_ID_DESC',
  BridgeReceiptsMinFromIdAsc = 'BRIDGE_RECEIPTS_MIN_FROM_ID_ASC',
  BridgeReceiptsMinFromIdDesc = 'BRIDGE_RECEIPTS_MIN_FROM_ID_DESC',
  BridgeReceiptsMinIdAsc = 'BRIDGE_RECEIPTS_MIN_ID_ASC',
  BridgeReceiptsMinIdDesc = 'BRIDGE_RECEIPTS_MIN_ID_DESC',
  BridgeReceiptsMinReceiptIdAsc = 'BRIDGE_RECEIPTS_MIN_RECEIPT_ID_ASC',
  BridgeReceiptsMinReceiptIdDesc = 'BRIDGE_RECEIPTS_MIN_RECEIPT_ID_DESC',
  BridgeReceiptsStddevPopulationAmountAsc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_AMOUNT_ASC',
  BridgeReceiptsStddevPopulationAmountDesc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_AMOUNT_DESC',
  BridgeReceiptsStddevPopulationEthRecipientIdAsc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsStddevPopulationEthRecipientIdDesc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsStddevPopulationEventIdAsc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_EVENT_ID_ASC',
  BridgeReceiptsStddevPopulationEventIdDesc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_EVENT_ID_DESC',
  BridgeReceiptsStddevPopulationFromIdAsc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_FROM_ID_ASC',
  BridgeReceiptsStddevPopulationFromIdDesc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_FROM_ID_DESC',
  BridgeReceiptsStddevPopulationIdAsc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_ID_ASC',
  BridgeReceiptsStddevPopulationIdDesc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_ID_DESC',
  BridgeReceiptsStddevPopulationReceiptIdAsc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptsStddevPopulationReceiptIdDesc = 'BRIDGE_RECEIPTS_STDDEV_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptsStddevSampleAmountAsc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_AMOUNT_ASC',
  BridgeReceiptsStddevSampleAmountDesc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_AMOUNT_DESC',
  BridgeReceiptsStddevSampleEthRecipientIdAsc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsStddevSampleEthRecipientIdDesc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsStddevSampleEventIdAsc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptsStddevSampleEventIdDesc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptsStddevSampleFromIdAsc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_FROM_ID_ASC',
  BridgeReceiptsStddevSampleFromIdDesc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_FROM_ID_DESC',
  BridgeReceiptsStddevSampleIdAsc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_ID_ASC',
  BridgeReceiptsStddevSampleIdDesc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_ID_DESC',
  BridgeReceiptsStddevSampleReceiptIdAsc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptsStddevSampleReceiptIdDesc = 'BRIDGE_RECEIPTS_STDDEV_SAMPLE_RECEIPT_ID_DESC',
  BridgeReceiptsSumAmountAsc = 'BRIDGE_RECEIPTS_SUM_AMOUNT_ASC',
  BridgeReceiptsSumAmountDesc = 'BRIDGE_RECEIPTS_SUM_AMOUNT_DESC',
  BridgeReceiptsSumEthRecipientIdAsc = 'BRIDGE_RECEIPTS_SUM_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsSumEthRecipientIdDesc = 'BRIDGE_RECEIPTS_SUM_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsSumEventIdAsc = 'BRIDGE_RECEIPTS_SUM_EVENT_ID_ASC',
  BridgeReceiptsSumEventIdDesc = 'BRIDGE_RECEIPTS_SUM_EVENT_ID_DESC',
  BridgeReceiptsSumFromIdAsc = 'BRIDGE_RECEIPTS_SUM_FROM_ID_ASC',
  BridgeReceiptsSumFromIdDesc = 'BRIDGE_RECEIPTS_SUM_FROM_ID_DESC',
  BridgeReceiptsSumIdAsc = 'BRIDGE_RECEIPTS_SUM_ID_ASC',
  BridgeReceiptsSumIdDesc = 'BRIDGE_RECEIPTS_SUM_ID_DESC',
  BridgeReceiptsSumReceiptIdAsc = 'BRIDGE_RECEIPTS_SUM_RECEIPT_ID_ASC',
  BridgeReceiptsSumReceiptIdDesc = 'BRIDGE_RECEIPTS_SUM_RECEIPT_ID_DESC',
  BridgeReceiptsVariancePopulationAmountAsc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_AMOUNT_ASC',
  BridgeReceiptsVariancePopulationAmountDesc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_AMOUNT_DESC',
  BridgeReceiptsVariancePopulationEthRecipientIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsVariancePopulationEthRecipientIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsVariancePopulationEventIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_EVENT_ID_ASC',
  BridgeReceiptsVariancePopulationEventIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_EVENT_ID_DESC',
  BridgeReceiptsVariancePopulationFromIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_FROM_ID_ASC',
  BridgeReceiptsVariancePopulationFromIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_FROM_ID_DESC',
  BridgeReceiptsVariancePopulationIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_ID_ASC',
  BridgeReceiptsVariancePopulationIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_ID_DESC',
  BridgeReceiptsVariancePopulationReceiptIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptsVariancePopulationReceiptIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptsVarianceSampleAmountAsc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_AMOUNT_ASC',
  BridgeReceiptsVarianceSampleAmountDesc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_AMOUNT_DESC',
  BridgeReceiptsVarianceSampleEthRecipientIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_ETH_RECIPIENT_ID_ASC',
  BridgeReceiptsVarianceSampleEthRecipientIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_ETH_RECIPIENT_ID_DESC',
  BridgeReceiptsVarianceSampleEventIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptsVarianceSampleEventIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptsVarianceSampleFromIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_FROM_ID_ASC',
  BridgeReceiptsVarianceSampleFromIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_FROM_ID_DESC',
  BridgeReceiptsVarianceSampleIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_ID_ASC',
  BridgeReceiptsVarianceSampleIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_ID_DESC',
  BridgeReceiptsVarianceSampleReceiptIdAsc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptsVarianceSampleReceiptIdDesc = 'BRIDGE_RECEIPTS_VARIANCE_SAMPLE_RECEIPT_ID_DESC',
  BridgeReceiptApprovedsAverageEventIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_AVERAGE_EVENT_ID_ASC',
  BridgeReceiptApprovedsAverageEventIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_AVERAGE_EVENT_ID_DESC',
  BridgeReceiptApprovedsAverageIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_AVERAGE_ID_ASC',
  BridgeReceiptApprovedsAverageIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_AVERAGE_ID_DESC',
  BridgeReceiptApprovedsAverageReceiptIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_AVERAGE_RECEIPT_ID_ASC',
  BridgeReceiptApprovedsAverageReceiptIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_AVERAGE_RECEIPT_ID_DESC',
  BridgeReceiptApprovedsCountAsc = 'BRIDGE_RECEIPT_APPROVEDS_COUNT_ASC',
  BridgeReceiptApprovedsCountDesc = 'BRIDGE_RECEIPT_APPROVEDS_COUNT_DESC',
  BridgeReceiptApprovedsDistinctCountEventIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_DISTINCT_COUNT_EVENT_ID_ASC',
  BridgeReceiptApprovedsDistinctCountEventIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_DISTINCT_COUNT_EVENT_ID_DESC',
  BridgeReceiptApprovedsDistinctCountIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_DISTINCT_COUNT_ID_ASC',
  BridgeReceiptApprovedsDistinctCountIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_DISTINCT_COUNT_ID_DESC',
  BridgeReceiptApprovedsDistinctCountReceiptIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_DISTINCT_COUNT_RECEIPT_ID_ASC',
  BridgeReceiptApprovedsDistinctCountReceiptIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_DISTINCT_COUNT_RECEIPT_ID_DESC',
  BridgeReceiptApprovedsMaxEventIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_MAX_EVENT_ID_ASC',
  BridgeReceiptApprovedsMaxEventIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_MAX_EVENT_ID_DESC',
  BridgeReceiptApprovedsMaxIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_MAX_ID_ASC',
  BridgeReceiptApprovedsMaxIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_MAX_ID_DESC',
  BridgeReceiptApprovedsMaxReceiptIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_MAX_RECEIPT_ID_ASC',
  BridgeReceiptApprovedsMaxReceiptIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_MAX_RECEIPT_ID_DESC',
  BridgeReceiptApprovedsMinEventIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_MIN_EVENT_ID_ASC',
  BridgeReceiptApprovedsMinEventIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_MIN_EVENT_ID_DESC',
  BridgeReceiptApprovedsMinIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_MIN_ID_ASC',
  BridgeReceiptApprovedsMinIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_MIN_ID_DESC',
  BridgeReceiptApprovedsMinReceiptIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_MIN_RECEIPT_ID_ASC',
  BridgeReceiptApprovedsMinReceiptIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_MIN_RECEIPT_ID_DESC',
  BridgeReceiptApprovedsStddevPopulationEventIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_POPULATION_EVENT_ID_ASC',
  BridgeReceiptApprovedsStddevPopulationEventIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_POPULATION_EVENT_ID_DESC',
  BridgeReceiptApprovedsStddevPopulationIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_POPULATION_ID_ASC',
  BridgeReceiptApprovedsStddevPopulationIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_POPULATION_ID_DESC',
  BridgeReceiptApprovedsStddevPopulationReceiptIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptApprovedsStddevPopulationReceiptIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptApprovedsStddevSampleEventIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptApprovedsStddevSampleEventIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptApprovedsStddevSampleIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_SAMPLE_ID_ASC',
  BridgeReceiptApprovedsStddevSampleIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_SAMPLE_ID_DESC',
  BridgeReceiptApprovedsStddevSampleReceiptIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptApprovedsStddevSampleReceiptIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_STDDEV_SAMPLE_RECEIPT_ID_DESC',
  BridgeReceiptApprovedsSumEventIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_SUM_EVENT_ID_ASC',
  BridgeReceiptApprovedsSumEventIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_SUM_EVENT_ID_DESC',
  BridgeReceiptApprovedsSumIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_SUM_ID_ASC',
  BridgeReceiptApprovedsSumIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_SUM_ID_DESC',
  BridgeReceiptApprovedsSumReceiptIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_SUM_RECEIPT_ID_ASC',
  BridgeReceiptApprovedsSumReceiptIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_SUM_RECEIPT_ID_DESC',
  BridgeReceiptApprovedsVariancePopulationEventIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_POPULATION_EVENT_ID_ASC',
  BridgeReceiptApprovedsVariancePopulationEventIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_POPULATION_EVENT_ID_DESC',
  BridgeReceiptApprovedsVariancePopulationIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_POPULATION_ID_ASC',
  BridgeReceiptApprovedsVariancePopulationIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_POPULATION_ID_DESC',
  BridgeReceiptApprovedsVariancePopulationReceiptIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptApprovedsVariancePopulationReceiptIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptApprovedsVarianceSampleEventIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptApprovedsVarianceSampleEventIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptApprovedsVarianceSampleIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_SAMPLE_ID_ASC',
  BridgeReceiptApprovedsVarianceSampleIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_SAMPLE_ID_DESC',
  BridgeReceiptApprovedsVarianceSampleReceiptIdAsc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptApprovedsVarianceSampleReceiptIdDesc = 'BRIDGE_RECEIPT_APPROVEDS_VARIANCE_SAMPLE_RECEIPT_ID_DESC',
  BridgeReceiptProcessedsAverageEventIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_AVERAGE_EVENT_ID_ASC',
  BridgeReceiptProcessedsAverageEventIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_AVERAGE_EVENT_ID_DESC',
  BridgeReceiptProcessedsAverageIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_AVERAGE_ID_ASC',
  BridgeReceiptProcessedsAverageIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_AVERAGE_ID_DESC',
  BridgeReceiptProcessedsAverageReceiptIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_AVERAGE_RECEIPT_ID_ASC',
  BridgeReceiptProcessedsAverageReceiptIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_AVERAGE_RECEIPT_ID_DESC',
  BridgeReceiptProcessedsCountAsc = 'BRIDGE_RECEIPT_PROCESSEDS_COUNT_ASC',
  BridgeReceiptProcessedsCountDesc = 'BRIDGE_RECEIPT_PROCESSEDS_COUNT_DESC',
  BridgeReceiptProcessedsDistinctCountEventIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_DISTINCT_COUNT_EVENT_ID_ASC',
  BridgeReceiptProcessedsDistinctCountEventIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_DISTINCT_COUNT_EVENT_ID_DESC',
  BridgeReceiptProcessedsDistinctCountIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_DISTINCT_COUNT_ID_ASC',
  BridgeReceiptProcessedsDistinctCountIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_DISTINCT_COUNT_ID_DESC',
  BridgeReceiptProcessedsDistinctCountReceiptIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_DISTINCT_COUNT_RECEIPT_ID_ASC',
  BridgeReceiptProcessedsDistinctCountReceiptIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_DISTINCT_COUNT_RECEIPT_ID_DESC',
  BridgeReceiptProcessedsMaxEventIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_MAX_EVENT_ID_ASC',
  BridgeReceiptProcessedsMaxEventIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_MAX_EVENT_ID_DESC',
  BridgeReceiptProcessedsMaxIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_MAX_ID_ASC',
  BridgeReceiptProcessedsMaxIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_MAX_ID_DESC',
  BridgeReceiptProcessedsMaxReceiptIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_MAX_RECEIPT_ID_ASC',
  BridgeReceiptProcessedsMaxReceiptIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_MAX_RECEIPT_ID_DESC',
  BridgeReceiptProcessedsMinEventIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_MIN_EVENT_ID_ASC',
  BridgeReceiptProcessedsMinEventIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_MIN_EVENT_ID_DESC',
  BridgeReceiptProcessedsMinIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_MIN_ID_ASC',
  BridgeReceiptProcessedsMinIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_MIN_ID_DESC',
  BridgeReceiptProcessedsMinReceiptIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_MIN_RECEIPT_ID_ASC',
  BridgeReceiptProcessedsMinReceiptIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_MIN_RECEIPT_ID_DESC',
  BridgeReceiptProcessedsStddevPopulationEventIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_POPULATION_EVENT_ID_ASC',
  BridgeReceiptProcessedsStddevPopulationEventIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_POPULATION_EVENT_ID_DESC',
  BridgeReceiptProcessedsStddevPopulationIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_POPULATION_ID_ASC',
  BridgeReceiptProcessedsStddevPopulationIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_POPULATION_ID_DESC',
  BridgeReceiptProcessedsStddevPopulationReceiptIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptProcessedsStddevPopulationReceiptIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptProcessedsStddevSampleEventIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptProcessedsStddevSampleEventIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptProcessedsStddevSampleIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_SAMPLE_ID_ASC',
  BridgeReceiptProcessedsStddevSampleIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_SAMPLE_ID_DESC',
  BridgeReceiptProcessedsStddevSampleReceiptIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptProcessedsStddevSampleReceiptIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_STDDEV_SAMPLE_RECEIPT_ID_DESC',
  BridgeReceiptProcessedsSumEventIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_SUM_EVENT_ID_ASC',
  BridgeReceiptProcessedsSumEventIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_SUM_EVENT_ID_DESC',
  BridgeReceiptProcessedsSumIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_SUM_ID_ASC',
  BridgeReceiptProcessedsSumIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_SUM_ID_DESC',
  BridgeReceiptProcessedsSumReceiptIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_SUM_RECEIPT_ID_ASC',
  BridgeReceiptProcessedsSumReceiptIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_SUM_RECEIPT_ID_DESC',
  BridgeReceiptProcessedsVariancePopulationEventIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_POPULATION_EVENT_ID_ASC',
  BridgeReceiptProcessedsVariancePopulationEventIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_POPULATION_EVENT_ID_DESC',
  BridgeReceiptProcessedsVariancePopulationIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_POPULATION_ID_ASC',
  BridgeReceiptProcessedsVariancePopulationIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_POPULATION_ID_DESC',
  BridgeReceiptProcessedsVariancePopulationReceiptIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_POPULATION_RECEIPT_ID_ASC',
  BridgeReceiptProcessedsVariancePopulationReceiptIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_POPULATION_RECEIPT_ID_DESC',
  BridgeReceiptProcessedsVarianceSampleEventIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BridgeReceiptProcessedsVarianceSampleEventIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BridgeReceiptProcessedsVarianceSampleIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_SAMPLE_ID_ASC',
  BridgeReceiptProcessedsVarianceSampleIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_SAMPLE_ID_DESC',
  BridgeReceiptProcessedsVarianceSampleReceiptIdAsc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_SAMPLE_RECEIPT_ID_ASC',
  BridgeReceiptProcessedsVarianceSampleReceiptIdDesc = 'BRIDGE_RECEIPT_PROCESSEDS_VARIANCE_SAMPLE_RECEIPT_ID_DESC',
  BridgeVotesAverageEthBlockNumberAsc = 'BRIDGE_VOTES_AVERAGE_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesAverageEthBlockNumberDesc = 'BRIDGE_VOTES_AVERAGE_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesAverageEventIdAsc = 'BRIDGE_VOTES_AVERAGE_EVENT_ID_ASC',
  BridgeVotesAverageEventIdDesc = 'BRIDGE_VOTES_AVERAGE_EVENT_ID_DESC',
  BridgeVotesAverageIdAsc = 'BRIDGE_VOTES_AVERAGE_ID_ASC',
  BridgeVotesAverageIdDesc = 'BRIDGE_VOTES_AVERAGE_ID_DESC',
  BridgeVotesAverageReceiptIdAsc = 'BRIDGE_VOTES_AVERAGE_RECEIPT_ID_ASC',
  BridgeVotesAverageReceiptIdDesc = 'BRIDGE_VOTES_AVERAGE_RECEIPT_ID_DESC',
  BridgeVotesAverageRelayIdAsc = 'BRIDGE_VOTES_AVERAGE_RELAY_ID_ASC',
  BridgeVotesAverageRelayIdDesc = 'BRIDGE_VOTES_AVERAGE_RELAY_ID_DESC',
  BridgeVotesCountAsc = 'BRIDGE_VOTES_COUNT_ASC',
  BridgeVotesCountDesc = 'BRIDGE_VOTES_COUNT_DESC',
  BridgeVotesDistinctCountEthBlockNumberAsc = 'BRIDGE_VOTES_DISTINCT_COUNT_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesDistinctCountEthBlockNumberDesc = 'BRIDGE_VOTES_DISTINCT_COUNT_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesDistinctCountEventIdAsc = 'BRIDGE_VOTES_DISTINCT_COUNT_EVENT_ID_ASC',
  BridgeVotesDistinctCountEventIdDesc = 'BRIDGE_VOTES_DISTINCT_COUNT_EVENT_ID_DESC',
  BridgeVotesDistinctCountIdAsc = 'BRIDGE_VOTES_DISTINCT_COUNT_ID_ASC',
  BridgeVotesDistinctCountIdDesc = 'BRIDGE_VOTES_DISTINCT_COUNT_ID_DESC',
  BridgeVotesDistinctCountReceiptIdAsc = 'BRIDGE_VOTES_DISTINCT_COUNT_RECEIPT_ID_ASC',
  BridgeVotesDistinctCountReceiptIdDesc = 'BRIDGE_VOTES_DISTINCT_COUNT_RECEIPT_ID_DESC',
  BridgeVotesDistinctCountRelayIdAsc = 'BRIDGE_VOTES_DISTINCT_COUNT_RELAY_ID_ASC',
  BridgeVotesDistinctCountRelayIdDesc = 'BRIDGE_VOTES_DISTINCT_COUNT_RELAY_ID_DESC',
  BridgeVotesMaxEthBlockNumberAsc = 'BRIDGE_VOTES_MAX_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesMaxEthBlockNumberDesc = 'BRIDGE_VOTES_MAX_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesMaxEventIdAsc = 'BRIDGE_VOTES_MAX_EVENT_ID_ASC',
  BridgeVotesMaxEventIdDesc = 'BRIDGE_VOTES_MAX_EVENT_ID_DESC',
  BridgeVotesMaxIdAsc = 'BRIDGE_VOTES_MAX_ID_ASC',
  BridgeVotesMaxIdDesc = 'BRIDGE_VOTES_MAX_ID_DESC',
  BridgeVotesMaxReceiptIdAsc = 'BRIDGE_VOTES_MAX_RECEIPT_ID_ASC',
  BridgeVotesMaxReceiptIdDesc = 'BRIDGE_VOTES_MAX_RECEIPT_ID_DESC',
  BridgeVotesMaxRelayIdAsc = 'BRIDGE_VOTES_MAX_RELAY_ID_ASC',
  BridgeVotesMaxRelayIdDesc = 'BRIDGE_VOTES_MAX_RELAY_ID_DESC',
  BridgeVotesMinEthBlockNumberAsc = 'BRIDGE_VOTES_MIN_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesMinEthBlockNumberDesc = 'BRIDGE_VOTES_MIN_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesMinEventIdAsc = 'BRIDGE_VOTES_MIN_EVENT_ID_ASC',
  BridgeVotesMinEventIdDesc = 'BRIDGE_VOTES_MIN_EVENT_ID_DESC',
  BridgeVotesMinIdAsc = 'BRIDGE_VOTES_MIN_ID_ASC',
  BridgeVotesMinIdDesc = 'BRIDGE_VOTES_MIN_ID_DESC',
  BridgeVotesMinReceiptIdAsc = 'BRIDGE_VOTES_MIN_RECEIPT_ID_ASC',
  BridgeVotesMinReceiptIdDesc = 'BRIDGE_VOTES_MIN_RECEIPT_ID_DESC',
  BridgeVotesMinRelayIdAsc = 'BRIDGE_VOTES_MIN_RELAY_ID_ASC',
  BridgeVotesMinRelayIdDesc = 'BRIDGE_VOTES_MIN_RELAY_ID_DESC',
  BridgeVotesStddevPopulationEthBlockNumberAsc = 'BRIDGE_VOTES_STDDEV_POPULATION_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesStddevPopulationEthBlockNumberDesc = 'BRIDGE_VOTES_STDDEV_POPULATION_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesStddevPopulationEventIdAsc = 'BRIDGE_VOTES_STDDEV_POPULATION_EVENT_ID_ASC',
  BridgeVotesStddevPopulationEventIdDesc = 'BRIDGE_VOTES_STDDEV_POPULATION_EVENT_ID_DESC',
  BridgeVotesStddevPopulationIdAsc = 'BRIDGE_VOTES_STDDEV_POPULATION_ID_ASC',
  BridgeVotesStddevPopulationIdDesc = 'BRIDGE_VOTES_STDDEV_POPULATION_ID_DESC',
  BridgeVotesStddevPopulationReceiptIdAsc = 'BRIDGE_VOTES_STDDEV_POPULATION_RECEIPT_ID_ASC',
  BridgeVotesStddevPopulationReceiptIdDesc = 'BRIDGE_VOTES_STDDEV_POPULATION_RECEIPT_ID_DESC',
  BridgeVotesStddevPopulationRelayIdAsc = 'BRIDGE_VOTES_STDDEV_POPULATION_RELAY_ID_ASC',
  BridgeVotesStddevPopulationRelayIdDesc = 'BRIDGE_VOTES_STDDEV_POPULATION_RELAY_ID_DESC',
  BridgeVotesStddevSampleEthBlockNumberAsc = 'BRIDGE_VOTES_STDDEV_SAMPLE_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesStddevSampleEthBlockNumberDesc = 'BRIDGE_VOTES_STDDEV_SAMPLE_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesStddevSampleEventIdAsc = 'BRIDGE_VOTES_STDDEV_SAMPLE_EVENT_ID_ASC',
  BridgeVotesStddevSampleEventIdDesc = 'BRIDGE_VOTES_STDDEV_SAMPLE_EVENT_ID_DESC',
  BridgeVotesStddevSampleIdAsc = 'BRIDGE_VOTES_STDDEV_SAMPLE_ID_ASC',
  BridgeVotesStddevSampleIdDesc = 'BRIDGE_VOTES_STDDEV_SAMPLE_ID_DESC',
  BridgeVotesStddevSampleReceiptIdAsc = 'BRIDGE_VOTES_STDDEV_SAMPLE_RECEIPT_ID_ASC',
  BridgeVotesStddevSampleReceiptIdDesc = 'BRIDGE_VOTES_STDDEV_SAMPLE_RECEIPT_ID_DESC',
  BridgeVotesStddevSampleRelayIdAsc = 'BRIDGE_VOTES_STDDEV_SAMPLE_RELAY_ID_ASC',
  BridgeVotesStddevSampleRelayIdDesc = 'BRIDGE_VOTES_STDDEV_SAMPLE_RELAY_ID_DESC',
  BridgeVotesSumEthBlockNumberAsc = 'BRIDGE_VOTES_SUM_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesSumEthBlockNumberDesc = 'BRIDGE_VOTES_SUM_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesSumEventIdAsc = 'BRIDGE_VOTES_SUM_EVENT_ID_ASC',
  BridgeVotesSumEventIdDesc = 'BRIDGE_VOTES_SUM_EVENT_ID_DESC',
  BridgeVotesSumIdAsc = 'BRIDGE_VOTES_SUM_ID_ASC',
  BridgeVotesSumIdDesc = 'BRIDGE_VOTES_SUM_ID_DESC',
  BridgeVotesSumReceiptIdAsc = 'BRIDGE_VOTES_SUM_RECEIPT_ID_ASC',
  BridgeVotesSumReceiptIdDesc = 'BRIDGE_VOTES_SUM_RECEIPT_ID_DESC',
  BridgeVotesSumRelayIdAsc = 'BRIDGE_VOTES_SUM_RELAY_ID_ASC',
  BridgeVotesSumRelayIdDesc = 'BRIDGE_VOTES_SUM_RELAY_ID_DESC',
  BridgeVotesVariancePopulationEthBlockNumberAsc = 'BRIDGE_VOTES_VARIANCE_POPULATION_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesVariancePopulationEthBlockNumberDesc = 'BRIDGE_VOTES_VARIANCE_POPULATION_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesVariancePopulationEventIdAsc = 'BRIDGE_VOTES_VARIANCE_POPULATION_EVENT_ID_ASC',
  BridgeVotesVariancePopulationEventIdDesc = 'BRIDGE_VOTES_VARIANCE_POPULATION_EVENT_ID_DESC',
  BridgeVotesVariancePopulationIdAsc = 'BRIDGE_VOTES_VARIANCE_POPULATION_ID_ASC',
  BridgeVotesVariancePopulationIdDesc = 'BRIDGE_VOTES_VARIANCE_POPULATION_ID_DESC',
  BridgeVotesVariancePopulationReceiptIdAsc = 'BRIDGE_VOTES_VARIANCE_POPULATION_RECEIPT_ID_ASC',
  BridgeVotesVariancePopulationReceiptIdDesc = 'BRIDGE_VOTES_VARIANCE_POPULATION_RECEIPT_ID_DESC',
  BridgeVotesVariancePopulationRelayIdAsc = 'BRIDGE_VOTES_VARIANCE_POPULATION_RELAY_ID_ASC',
  BridgeVotesVariancePopulationRelayIdDesc = 'BRIDGE_VOTES_VARIANCE_POPULATION_RELAY_ID_DESC',
  BridgeVotesVarianceSampleEthBlockNumberAsc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_ETH_BLOCK_NUMBER_ASC',
  BridgeVotesVarianceSampleEthBlockNumberDesc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_ETH_BLOCK_NUMBER_DESC',
  BridgeVotesVarianceSampleEventIdAsc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_EVENT_ID_ASC',
  BridgeVotesVarianceSampleEventIdDesc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_EVENT_ID_DESC',
  BridgeVotesVarianceSampleIdAsc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_ID_ASC',
  BridgeVotesVarianceSampleIdDesc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_ID_DESC',
  BridgeVotesVarianceSampleReceiptIdAsc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_RECEIPT_ID_ASC',
  BridgeVotesVarianceSampleReceiptIdDesc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_RECEIPT_ID_DESC',
  BridgeVotesVarianceSampleRelayIdAsc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_RELAY_ID_ASC',
  BridgeVotesVarianceSampleRelayIdDesc = 'BRIDGE_VOTES_VARIANCE_SAMPLE_RELAY_ID_DESC',
  CongressMotionsByExecutionEventIdAverageBlockNumberAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_BLOCK_NUMBER_ASC',
  CongressMotionsByExecutionEventIdAverageBlockNumberDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_BLOCK_NUMBER_DESC',
  CongressMotionsByExecutionEventIdAverageCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_CALL_ASC',
  CongressMotionsByExecutionEventIdAverageCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_CALL_DESC',
  CongressMotionsByExecutionEventIdAverageExecutionEventIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_EXECUTION_EVENT_ID_ASC',
  CongressMotionsByExecutionEventIdAverageExecutionEventIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_EXECUTION_EVENT_ID_DESC',
  CongressMotionsByExecutionEventIdAverageExtrinsicIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_EXTRINSIC_ID_ASC',
  CongressMotionsByExecutionEventIdAverageExtrinsicIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_EXTRINSIC_ID_DESC',
  CongressMotionsByExecutionEventIdAverageHashAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_HASH_ASC',
  CongressMotionsByExecutionEventIdAverageHashDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_HASH_DESC',
  CongressMotionsByExecutionEventIdAverageIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_ID_ASC',
  CongressMotionsByExecutionEventIdAverageIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_ID_DESC',
  CongressMotionsByExecutionEventIdAverageRawCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_RAW_CALL_ASC',
  CongressMotionsByExecutionEventIdAverageRawCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_RAW_CALL_DESC',
  CongressMotionsByExecutionEventIdAverageThresholdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_THRESHOLD_ASC',
  CongressMotionsByExecutionEventIdAverageThresholdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_AVERAGE_THRESHOLD_DESC',
  CongressMotionsByExecutionEventIdCountAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_COUNT_ASC',
  CongressMotionsByExecutionEventIdCountDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_COUNT_DESC',
  CongressMotionsByExecutionEventIdDistinctCountBlockNumberAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  CongressMotionsByExecutionEventIdDistinctCountBlockNumberDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  CongressMotionsByExecutionEventIdDistinctCountCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_CALL_ASC',
  CongressMotionsByExecutionEventIdDistinctCountCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_CALL_DESC',
  CongressMotionsByExecutionEventIdDistinctCountExecutionEventIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_EXECUTION_EVENT_ID_ASC',
  CongressMotionsByExecutionEventIdDistinctCountExecutionEventIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_EXECUTION_EVENT_ID_DESC',
  CongressMotionsByExecutionEventIdDistinctCountExtrinsicIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_EXTRINSIC_ID_ASC',
  CongressMotionsByExecutionEventIdDistinctCountExtrinsicIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_EXTRINSIC_ID_DESC',
  CongressMotionsByExecutionEventIdDistinctCountHashAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_HASH_ASC',
  CongressMotionsByExecutionEventIdDistinctCountHashDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_HASH_DESC',
  CongressMotionsByExecutionEventIdDistinctCountIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_ID_ASC',
  CongressMotionsByExecutionEventIdDistinctCountIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_ID_DESC',
  CongressMotionsByExecutionEventIdDistinctCountRawCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_RAW_CALL_ASC',
  CongressMotionsByExecutionEventIdDistinctCountRawCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_RAW_CALL_DESC',
  CongressMotionsByExecutionEventIdDistinctCountThresholdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_THRESHOLD_ASC',
  CongressMotionsByExecutionEventIdDistinctCountThresholdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_DISTINCT_COUNT_THRESHOLD_DESC',
  CongressMotionsByExecutionEventIdMaxBlockNumberAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_BLOCK_NUMBER_ASC',
  CongressMotionsByExecutionEventIdMaxBlockNumberDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_BLOCK_NUMBER_DESC',
  CongressMotionsByExecutionEventIdMaxCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_CALL_ASC',
  CongressMotionsByExecutionEventIdMaxCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_CALL_DESC',
  CongressMotionsByExecutionEventIdMaxExecutionEventIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_EXECUTION_EVENT_ID_ASC',
  CongressMotionsByExecutionEventIdMaxExecutionEventIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_EXECUTION_EVENT_ID_DESC',
  CongressMotionsByExecutionEventIdMaxExtrinsicIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_EXTRINSIC_ID_ASC',
  CongressMotionsByExecutionEventIdMaxExtrinsicIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_EXTRINSIC_ID_DESC',
  CongressMotionsByExecutionEventIdMaxHashAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_HASH_ASC',
  CongressMotionsByExecutionEventIdMaxHashDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_HASH_DESC',
  CongressMotionsByExecutionEventIdMaxIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_ID_ASC',
  CongressMotionsByExecutionEventIdMaxIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_ID_DESC',
  CongressMotionsByExecutionEventIdMaxRawCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_RAW_CALL_ASC',
  CongressMotionsByExecutionEventIdMaxRawCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_RAW_CALL_DESC',
  CongressMotionsByExecutionEventIdMaxThresholdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_THRESHOLD_ASC',
  CongressMotionsByExecutionEventIdMaxThresholdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MAX_THRESHOLD_DESC',
  CongressMotionsByExecutionEventIdMinBlockNumberAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_BLOCK_NUMBER_ASC',
  CongressMotionsByExecutionEventIdMinBlockNumberDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_BLOCK_NUMBER_DESC',
  CongressMotionsByExecutionEventIdMinCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_CALL_ASC',
  CongressMotionsByExecutionEventIdMinCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_CALL_DESC',
  CongressMotionsByExecutionEventIdMinExecutionEventIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_EXECUTION_EVENT_ID_ASC',
  CongressMotionsByExecutionEventIdMinExecutionEventIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_EXECUTION_EVENT_ID_DESC',
  CongressMotionsByExecutionEventIdMinExtrinsicIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_EXTRINSIC_ID_ASC',
  CongressMotionsByExecutionEventIdMinExtrinsicIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_EXTRINSIC_ID_DESC',
  CongressMotionsByExecutionEventIdMinHashAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_HASH_ASC',
  CongressMotionsByExecutionEventIdMinHashDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_HASH_DESC',
  CongressMotionsByExecutionEventIdMinIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_ID_ASC',
  CongressMotionsByExecutionEventIdMinIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_ID_DESC',
  CongressMotionsByExecutionEventIdMinRawCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_RAW_CALL_ASC',
  CongressMotionsByExecutionEventIdMinRawCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_RAW_CALL_DESC',
  CongressMotionsByExecutionEventIdMinThresholdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_THRESHOLD_ASC',
  CongressMotionsByExecutionEventIdMinThresholdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_MIN_THRESHOLD_DESC',
  CongressMotionsByExecutionEventIdStddevPopulationBlockNumberAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  CongressMotionsByExecutionEventIdStddevPopulationBlockNumberDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  CongressMotionsByExecutionEventIdStddevPopulationCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_CALL_ASC',
  CongressMotionsByExecutionEventIdStddevPopulationCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_CALL_DESC',
  CongressMotionsByExecutionEventIdStddevPopulationExecutionEventIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_EXECUTION_EVENT_ID_ASC',
  CongressMotionsByExecutionEventIdStddevPopulationExecutionEventIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_EXECUTION_EVENT_ID_DESC',
  CongressMotionsByExecutionEventIdStddevPopulationExtrinsicIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_EXTRINSIC_ID_ASC',
  CongressMotionsByExecutionEventIdStddevPopulationExtrinsicIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_EXTRINSIC_ID_DESC',
  CongressMotionsByExecutionEventIdStddevPopulationHashAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_HASH_ASC',
  CongressMotionsByExecutionEventIdStddevPopulationHashDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_HASH_DESC',
  CongressMotionsByExecutionEventIdStddevPopulationIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_ID_ASC',
  CongressMotionsByExecutionEventIdStddevPopulationIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_ID_DESC',
  CongressMotionsByExecutionEventIdStddevPopulationRawCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_RAW_CALL_ASC',
  CongressMotionsByExecutionEventIdStddevPopulationRawCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_RAW_CALL_DESC',
  CongressMotionsByExecutionEventIdStddevPopulationThresholdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_THRESHOLD_ASC',
  CongressMotionsByExecutionEventIdStddevPopulationThresholdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_POPULATION_THRESHOLD_DESC',
  CongressMotionsByExecutionEventIdStddevSampleBlockNumberAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  CongressMotionsByExecutionEventIdStddevSampleBlockNumberDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  CongressMotionsByExecutionEventIdStddevSampleCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_CALL_ASC',
  CongressMotionsByExecutionEventIdStddevSampleCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_CALL_DESC',
  CongressMotionsByExecutionEventIdStddevSampleExecutionEventIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_EXECUTION_EVENT_ID_ASC',
  CongressMotionsByExecutionEventIdStddevSampleExecutionEventIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_EXECUTION_EVENT_ID_DESC',
  CongressMotionsByExecutionEventIdStddevSampleExtrinsicIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_EXTRINSIC_ID_ASC',
  CongressMotionsByExecutionEventIdStddevSampleExtrinsicIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_EXTRINSIC_ID_DESC',
  CongressMotionsByExecutionEventIdStddevSampleHashAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_HASH_ASC',
  CongressMotionsByExecutionEventIdStddevSampleHashDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_HASH_DESC',
  CongressMotionsByExecutionEventIdStddevSampleIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_ID_ASC',
  CongressMotionsByExecutionEventIdStddevSampleIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_ID_DESC',
  CongressMotionsByExecutionEventIdStddevSampleRawCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_RAW_CALL_ASC',
  CongressMotionsByExecutionEventIdStddevSampleRawCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_RAW_CALL_DESC',
  CongressMotionsByExecutionEventIdStddevSampleThresholdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_THRESHOLD_ASC',
  CongressMotionsByExecutionEventIdStddevSampleThresholdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_STDDEV_SAMPLE_THRESHOLD_DESC',
  CongressMotionsByExecutionEventIdSumBlockNumberAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_BLOCK_NUMBER_ASC',
  CongressMotionsByExecutionEventIdSumBlockNumberDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_BLOCK_NUMBER_DESC',
  CongressMotionsByExecutionEventIdSumCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_CALL_ASC',
  CongressMotionsByExecutionEventIdSumCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_CALL_DESC',
  CongressMotionsByExecutionEventIdSumExecutionEventIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_EXECUTION_EVENT_ID_ASC',
  CongressMotionsByExecutionEventIdSumExecutionEventIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_EXECUTION_EVENT_ID_DESC',
  CongressMotionsByExecutionEventIdSumExtrinsicIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_EXTRINSIC_ID_ASC',
  CongressMotionsByExecutionEventIdSumExtrinsicIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_EXTRINSIC_ID_DESC',
  CongressMotionsByExecutionEventIdSumHashAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_HASH_ASC',
  CongressMotionsByExecutionEventIdSumHashDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_HASH_DESC',
  CongressMotionsByExecutionEventIdSumIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_ID_ASC',
  CongressMotionsByExecutionEventIdSumIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_ID_DESC',
  CongressMotionsByExecutionEventIdSumRawCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_RAW_CALL_ASC',
  CongressMotionsByExecutionEventIdSumRawCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_RAW_CALL_DESC',
  CongressMotionsByExecutionEventIdSumThresholdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_THRESHOLD_ASC',
  CongressMotionsByExecutionEventIdSumThresholdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_SUM_THRESHOLD_DESC',
  CongressMotionsByExecutionEventIdVariancePopulationBlockNumberAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  CongressMotionsByExecutionEventIdVariancePopulationBlockNumberDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  CongressMotionsByExecutionEventIdVariancePopulationCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_CALL_ASC',
  CongressMotionsByExecutionEventIdVariancePopulationCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_CALL_DESC',
  CongressMotionsByExecutionEventIdVariancePopulationExecutionEventIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_EXECUTION_EVENT_ID_ASC',
  CongressMotionsByExecutionEventIdVariancePopulationExecutionEventIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_EXECUTION_EVENT_ID_DESC',
  CongressMotionsByExecutionEventIdVariancePopulationExtrinsicIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_EXTRINSIC_ID_ASC',
  CongressMotionsByExecutionEventIdVariancePopulationExtrinsicIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_EXTRINSIC_ID_DESC',
  CongressMotionsByExecutionEventIdVariancePopulationHashAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_HASH_ASC',
  CongressMotionsByExecutionEventIdVariancePopulationHashDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_HASH_DESC',
  CongressMotionsByExecutionEventIdVariancePopulationIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_ID_ASC',
  CongressMotionsByExecutionEventIdVariancePopulationIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_ID_DESC',
  CongressMotionsByExecutionEventIdVariancePopulationRawCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_RAW_CALL_ASC',
  CongressMotionsByExecutionEventIdVariancePopulationRawCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_RAW_CALL_DESC',
  CongressMotionsByExecutionEventIdVariancePopulationThresholdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_THRESHOLD_ASC',
  CongressMotionsByExecutionEventIdVariancePopulationThresholdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_POPULATION_THRESHOLD_DESC',
  CongressMotionsByExecutionEventIdVarianceSampleBlockNumberAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  CongressMotionsByExecutionEventIdVarianceSampleBlockNumberDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  CongressMotionsByExecutionEventIdVarianceSampleCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_CALL_ASC',
  CongressMotionsByExecutionEventIdVarianceSampleCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_CALL_DESC',
  CongressMotionsByExecutionEventIdVarianceSampleExecutionEventIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_EXECUTION_EVENT_ID_ASC',
  CongressMotionsByExecutionEventIdVarianceSampleExecutionEventIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_EXECUTION_EVENT_ID_DESC',
  CongressMotionsByExecutionEventIdVarianceSampleExtrinsicIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_EXTRINSIC_ID_ASC',
  CongressMotionsByExecutionEventIdVarianceSampleExtrinsicIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_EXTRINSIC_ID_DESC',
  CongressMotionsByExecutionEventIdVarianceSampleHashAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_HASH_ASC',
  CongressMotionsByExecutionEventIdVarianceSampleHashDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_HASH_DESC',
  CongressMotionsByExecutionEventIdVarianceSampleIdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_ID_ASC',
  CongressMotionsByExecutionEventIdVarianceSampleIdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_ID_DESC',
  CongressMotionsByExecutionEventIdVarianceSampleRawCallAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_RAW_CALL_ASC',
  CongressMotionsByExecutionEventIdVarianceSampleRawCallDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_RAW_CALL_DESC',
  CongressMotionsByExecutionEventIdVarianceSampleThresholdAsc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_THRESHOLD_ASC',
  CongressMotionsByExecutionEventIdVarianceSampleThresholdDesc = 'CONGRESS_MOTIONS_BY_EXECUTION_EVENT_ID_VARIANCE_SAMPLE_THRESHOLD_DESC',
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  ExtrinsicIdAsc = 'EXTRINSIC_ID_ASC',
  ExtrinsicIdDesc = 'EXTRINSIC_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  MethodAsc = 'METHOD_ASC',
  MethodDesc = 'METHOD_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SectionAsc = 'SECTION_ASC',
  SectionDesc = 'SECTION_DESC'
}

export type Extrinsic = Node & {
  __typename?: 'Extrinsic';
  /** Reads a single `Block` that is related to this `Extrinsic`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  /** Reads and enables pagination through a set of `Block`. */
  blocksByEventExtrinsicIdAndBlockId: ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection;
  /** Reads and enables pagination through a set of `CongressMotion`. */
  congressMotions: CongressMotionsConnection;
  /** Reads and enables pagination through a set of `Event`. */
  events: EventsConnection;
  /** Reads and enables pagination through a set of `Event`. */
  eventsByCongressMotionExtrinsicIdAndExecutionEventId: ExtrinsicEventsByCongressMotionExtrinsicIdAndExecutionEventIdManyToManyConnection;
  hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  isSigned?: Maybe<Scalars['Boolean']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  section?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Account` that is related to this `Extrinsic`. */
  signer?: Maybe<Account>;
  signerId?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};


export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


export type ExtrinsicCongressMotionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Congress_Motions_Distinct_Enum>>>;
  filter?: InputMaybe<CongressMotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CongressMotionsOrderBy>>;
};


export type ExtrinsicEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


export type ExtrinsicEventsByCongressMotionExtrinsicIdAndExecutionEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type ExtrinsicAggregates = {
  __typename?: 'ExtrinsicAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<ExtrinsicAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<ExtrinsicDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<ExtrinsicMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<ExtrinsicMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<ExtrinsicStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<ExtrinsicStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<ExtrinsicSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<ExtrinsicVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<ExtrinsicVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Extrinsic` object types. */
export type ExtrinsicAggregatesFilter = {
  /** Mean average aggregate over matching `Extrinsic` objects. */
  average?: InputMaybe<ExtrinsicAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Extrinsic` objects. */
  distinctCount?: InputMaybe<ExtrinsicDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Extrinsic` object to be included within the aggregate. */
  filter?: InputMaybe<ExtrinsicFilter>;
  /** Maximum aggregate over matching `Extrinsic` objects. */
  max?: InputMaybe<ExtrinsicMaxAggregateFilter>;
  /** Minimum aggregate over matching `Extrinsic` objects. */
  min?: InputMaybe<ExtrinsicMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Extrinsic` objects. */
  stddevPopulation?: InputMaybe<ExtrinsicStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Extrinsic` objects. */
  stddevSample?: InputMaybe<ExtrinsicStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Extrinsic` objects. */
  sum?: InputMaybe<ExtrinsicSumAggregateFilter>;
  /** Population variance aggregate over matching `Extrinsic` objects. */
  variancePopulation?: InputMaybe<ExtrinsicVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Extrinsic` objects. */
  varianceSample?: InputMaybe<ExtrinsicVarianceSampleAggregateFilter>;
};

export type ExtrinsicAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type ExtrinsicAverageAggregates = {
  __typename?: 'ExtrinsicAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `Block` values, with data from `Event`. */
export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection = {
  __typename?: 'ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<BlockAggregates>;
  /** A list of edges which contains the `Block`, info from the `Event`, and the cursor to aid in pagination. */
  edges: Array<ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<BlockAggregates>>;
  /** A list of `Block` objects. */
  nodes: Array<Maybe<Block>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Block` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Block` values, with data from `Event`. */
export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<BlocksGroupBy>;
  having?: InputMaybe<BlocksHavingInput>;
};

/** A `Block` edge in the connection, with data from `Event`. */
export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge = {
  __typename?: 'ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** Reads and enables pagination through a set of `Event`. */
  events: EventsConnection;
  /** The `Block` at the end of the edge. */
  node?: Maybe<Block>;
};


/** A `Block` edge in the connection, with data from `Event`. */
export type ExtrinsicBlocksByEventExtrinsicIdAndBlockIdManyToManyEdgeEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type ExtrinsicDistinctCountAggregateFilter = {
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  hash?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  index?: InputMaybe<BigIntFilter>;
  isSigned?: InputMaybe<BigIntFilter>;
  method?: InputMaybe<BigIntFilter>;
  section?: InputMaybe<BigIntFilter>;
  signerId?: InputMaybe<BigIntFilter>;
  success?: InputMaybe<BigIntFilter>;
};

export type ExtrinsicDistinctCountAggregates = {
  __typename?: 'ExtrinsicDistinctCountAggregates';
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of hash across the matching connection */
  hash?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of index across the matching connection */
  index?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of isSigned across the matching connection */
  isSigned?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of method across the matching connection */
  method?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of section across the matching connection */
  section?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of signerId across the matching connection */
  signerId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of success across the matching connection */
  success?: Maybe<Scalars['BigInt']['output']>;
};

/** A connection to a list of `Event` values, with data from `CongressMotion`. */
export type ExtrinsicEventsByCongressMotionExtrinsicIdAndExecutionEventIdManyToManyConnection = {
  __typename?: 'ExtrinsicEventsByCongressMotionExtrinsicIdAndExecutionEventIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<EventAggregates>;
  /** A list of edges which contains the `Event`, info from the `CongressMotion`, and the cursor to aid in pagination. */
  edges: Array<ExtrinsicEventsByCongressMotionExtrinsicIdAndExecutionEventIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<EventAggregates>>;
  /** A list of `Event` objects. */
  nodes: Array<Maybe<Event>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Event` values, with data from `CongressMotion`. */
export type ExtrinsicEventsByCongressMotionExtrinsicIdAndExecutionEventIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<EventsGroupBy>;
  having?: InputMaybe<EventsHavingInput>;
};

/** A `Event` edge in the connection, with data from `CongressMotion`. */
export type ExtrinsicEventsByCongressMotionExtrinsicIdAndExecutionEventIdManyToManyEdge = {
  __typename?: 'ExtrinsicEventsByCongressMotionExtrinsicIdAndExecutionEventIdManyToManyEdge';
  /** Reads and enables pagination through a set of `CongressMotion`. */
  congressMotionsByExecutionEventId: CongressMotionsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Event` at the end of the edge. */
  node?: Maybe<Event>;
};


/** A `Event` edge in the connection, with data from `CongressMotion`. */
export type ExtrinsicEventsByCongressMotionExtrinsicIdAndExecutionEventIdManyToManyEdgeCongressMotionsByExecutionEventIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Congress_Motions_Distinct_Enum>>>;
  filter?: InputMaybe<CongressMotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CongressMotionsOrderBy>>;
};

/** A filter to be used against `Extrinsic` object types. All fields are combined with a logical ‘and.’ */
export type ExtrinsicFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ExtrinsicFilter>>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `congressMotions` relation. */
  congressMotions?: InputMaybe<ExtrinsicToManyCongressMotionFilter>;
  /** Some related `congressMotions` exist. */
  congressMotionsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `events` relation. */
  events?: InputMaybe<ExtrinsicToManyEventFilter>;
  /** Some related `events` exist. */
  eventsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `index` field. */
  index?: InputMaybe<IntFilter>;
  /** Filter by the object’s `isSigned` field. */
  isSigned?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `method` field. */
  method?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ExtrinsicFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ExtrinsicFilter>>;
  /** Filter by the object’s `section` field. */
  section?: InputMaybe<StringFilter>;
  /** Filter by the object’s `signer` relation. */
  signer?: InputMaybe<AccountFilter>;
  /** A related `signer` exists. */
  signerExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `signerId` field. */
  signerId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `success` field. */
  success?: InputMaybe<BooleanFilter>;
};

export type ExtrinsicMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<IntFilter>;
};

export type ExtrinsicMaxAggregates = {
  __typename?: 'ExtrinsicMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of index across the matching connection */
  index?: Maybe<Scalars['Int']['output']>;
};

export type ExtrinsicMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<IntFilter>;
};

export type ExtrinsicMinAggregates = {
  __typename?: 'ExtrinsicMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of index across the matching connection */
  index?: Maybe<Scalars['Int']['output']>;
};

export type ExtrinsicStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type ExtrinsicStddevPopulationAggregates = {
  __typename?: 'ExtrinsicStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

export type ExtrinsicStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type ExtrinsicStddevSampleAggregates = {
  __typename?: 'ExtrinsicStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

export type ExtrinsicSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigIntFilter>;
};

export type ExtrinsicSumAggregates = {
  __typename?: 'ExtrinsicSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of index across the matching connection */
  index: Scalars['BigInt']['output'];
};

/** A filter to be used against many `CongressMotion` object types. All fields are combined with a logical ‘and.’ */
export type ExtrinsicToManyCongressMotionFilter = {
  /** Aggregates across related `CongressMotion` match the filter criteria. */
  aggregates?: InputMaybe<CongressMotionAggregatesFilter>;
  /** Every related `CongressMotion` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CongressMotionFilter>;
  /** No related `CongressMotion` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CongressMotionFilter>;
  /** Some related `CongressMotion` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CongressMotionFilter>;
};

/** A filter to be used against many `Event` object types. All fields are combined with a logical ‘and.’ */
export type ExtrinsicToManyEventFilter = {
  /** Aggregates across related `Event` match the filter criteria. */
  aggregates?: InputMaybe<EventAggregatesFilter>;
  /** Every related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<EventFilter>;
  /** No related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<EventFilter>;
  /** Some related `Event` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<EventFilter>;
};

export type ExtrinsicVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type ExtrinsicVariancePopulationAggregates = {
  __typename?: 'ExtrinsicVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

export type ExtrinsicVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  index?: InputMaybe<BigFloatFilter>;
};

export type ExtrinsicVarianceSampleAggregates = {
  __typename?: 'ExtrinsicVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of index across the matching connection */
  index?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `Extrinsic` values. */
export type ExtrinsicsConnection = {
  __typename?: 'ExtrinsicsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<ExtrinsicAggregates>;
  /** A list of edges which contains the `Extrinsic` and cursor to aid in pagination. */
  edges: Array<ExtrinsicsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<ExtrinsicAggregates>>;
  /** A list of `Extrinsic` objects. */
  nodes: Array<Maybe<Extrinsic>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Extrinsic` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Extrinsic` values. */
export type ExtrinsicsConnectionGroupedAggregatesArgs = {
  groupBy: Array<ExtrinsicsGroupBy>;
  having?: InputMaybe<ExtrinsicsHavingInput>;
};

/** A `Extrinsic` edge in the connection. */
export type ExtrinsicsEdge = {
  __typename?: 'ExtrinsicsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Extrinsic` at the end of the edge. */
  node?: Maybe<Extrinsic>;
};

/** Grouping methods for `Extrinsic` for usage during aggregation. */
export enum ExtrinsicsGroupBy {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  Hash = 'HASH',
  Index = 'INDEX',
  IsSigned = 'IS_SIGNED',
  Method = 'METHOD',
  Section = 'SECTION',
  SignerId = 'SIGNER_ID',
  Success = 'SUCCESS'
}

export type ExtrinsicsHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type ExtrinsicsHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

/** Conditions for `Extrinsic` aggregates. */
export type ExtrinsicsHavingInput = {
  AND?: InputMaybe<Array<ExtrinsicsHavingInput>>;
  OR?: InputMaybe<Array<ExtrinsicsHavingInput>>;
  average?: InputMaybe<ExtrinsicsHavingAverageInput>;
  distinctCount?: InputMaybe<ExtrinsicsHavingDistinctCountInput>;
  max?: InputMaybe<ExtrinsicsHavingMaxInput>;
  min?: InputMaybe<ExtrinsicsHavingMinInput>;
  stddevPopulation?: InputMaybe<ExtrinsicsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<ExtrinsicsHavingStddevSampleInput>;
  sum?: InputMaybe<ExtrinsicsHavingSumInput>;
  variancePopulation?: InputMaybe<ExtrinsicsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<ExtrinsicsHavingVarianceSampleInput>;
};

export type ExtrinsicsHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type ExtrinsicsHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type ExtrinsicsHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type ExtrinsicsHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type ExtrinsicsHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type ExtrinsicsHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

export type ExtrinsicsHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  index?: InputMaybe<HavingIntFilter>;
};

/** Methods to use when ordering `Extrinsic`. */
export enum ExtrinsicsOrderBy {
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  CongressMotionsAverageBlockNumberAsc = 'CONGRESS_MOTIONS_AVERAGE_BLOCK_NUMBER_ASC',
  CongressMotionsAverageBlockNumberDesc = 'CONGRESS_MOTIONS_AVERAGE_BLOCK_NUMBER_DESC',
  CongressMotionsAverageCallAsc = 'CONGRESS_MOTIONS_AVERAGE_CALL_ASC',
  CongressMotionsAverageCallDesc = 'CONGRESS_MOTIONS_AVERAGE_CALL_DESC',
  CongressMotionsAverageExecutionEventIdAsc = 'CONGRESS_MOTIONS_AVERAGE_EXECUTION_EVENT_ID_ASC',
  CongressMotionsAverageExecutionEventIdDesc = 'CONGRESS_MOTIONS_AVERAGE_EXECUTION_EVENT_ID_DESC',
  CongressMotionsAverageExtrinsicIdAsc = 'CONGRESS_MOTIONS_AVERAGE_EXTRINSIC_ID_ASC',
  CongressMotionsAverageExtrinsicIdDesc = 'CONGRESS_MOTIONS_AVERAGE_EXTRINSIC_ID_DESC',
  CongressMotionsAverageHashAsc = 'CONGRESS_MOTIONS_AVERAGE_HASH_ASC',
  CongressMotionsAverageHashDesc = 'CONGRESS_MOTIONS_AVERAGE_HASH_DESC',
  CongressMotionsAverageIdAsc = 'CONGRESS_MOTIONS_AVERAGE_ID_ASC',
  CongressMotionsAverageIdDesc = 'CONGRESS_MOTIONS_AVERAGE_ID_DESC',
  CongressMotionsAverageRawCallAsc = 'CONGRESS_MOTIONS_AVERAGE_RAW_CALL_ASC',
  CongressMotionsAverageRawCallDesc = 'CONGRESS_MOTIONS_AVERAGE_RAW_CALL_DESC',
  CongressMotionsAverageThresholdAsc = 'CONGRESS_MOTIONS_AVERAGE_THRESHOLD_ASC',
  CongressMotionsAverageThresholdDesc = 'CONGRESS_MOTIONS_AVERAGE_THRESHOLD_DESC',
  CongressMotionsCountAsc = 'CONGRESS_MOTIONS_COUNT_ASC',
  CongressMotionsCountDesc = 'CONGRESS_MOTIONS_COUNT_DESC',
  CongressMotionsDistinctCountBlockNumberAsc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  CongressMotionsDistinctCountBlockNumberDesc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  CongressMotionsDistinctCountCallAsc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_CALL_ASC',
  CongressMotionsDistinctCountCallDesc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_CALL_DESC',
  CongressMotionsDistinctCountExecutionEventIdAsc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_EXECUTION_EVENT_ID_ASC',
  CongressMotionsDistinctCountExecutionEventIdDesc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_EXECUTION_EVENT_ID_DESC',
  CongressMotionsDistinctCountExtrinsicIdAsc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_EXTRINSIC_ID_ASC',
  CongressMotionsDistinctCountExtrinsicIdDesc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_EXTRINSIC_ID_DESC',
  CongressMotionsDistinctCountHashAsc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_HASH_ASC',
  CongressMotionsDistinctCountHashDesc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_HASH_DESC',
  CongressMotionsDistinctCountIdAsc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_ID_ASC',
  CongressMotionsDistinctCountIdDesc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_ID_DESC',
  CongressMotionsDistinctCountRawCallAsc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_RAW_CALL_ASC',
  CongressMotionsDistinctCountRawCallDesc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_RAW_CALL_DESC',
  CongressMotionsDistinctCountThresholdAsc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_THRESHOLD_ASC',
  CongressMotionsDistinctCountThresholdDesc = 'CONGRESS_MOTIONS_DISTINCT_COUNT_THRESHOLD_DESC',
  CongressMotionsMaxBlockNumberAsc = 'CONGRESS_MOTIONS_MAX_BLOCK_NUMBER_ASC',
  CongressMotionsMaxBlockNumberDesc = 'CONGRESS_MOTIONS_MAX_BLOCK_NUMBER_DESC',
  CongressMotionsMaxCallAsc = 'CONGRESS_MOTIONS_MAX_CALL_ASC',
  CongressMotionsMaxCallDesc = 'CONGRESS_MOTIONS_MAX_CALL_DESC',
  CongressMotionsMaxExecutionEventIdAsc = 'CONGRESS_MOTIONS_MAX_EXECUTION_EVENT_ID_ASC',
  CongressMotionsMaxExecutionEventIdDesc = 'CONGRESS_MOTIONS_MAX_EXECUTION_EVENT_ID_DESC',
  CongressMotionsMaxExtrinsicIdAsc = 'CONGRESS_MOTIONS_MAX_EXTRINSIC_ID_ASC',
  CongressMotionsMaxExtrinsicIdDesc = 'CONGRESS_MOTIONS_MAX_EXTRINSIC_ID_DESC',
  CongressMotionsMaxHashAsc = 'CONGRESS_MOTIONS_MAX_HASH_ASC',
  CongressMotionsMaxHashDesc = 'CONGRESS_MOTIONS_MAX_HASH_DESC',
  CongressMotionsMaxIdAsc = 'CONGRESS_MOTIONS_MAX_ID_ASC',
  CongressMotionsMaxIdDesc = 'CONGRESS_MOTIONS_MAX_ID_DESC',
  CongressMotionsMaxRawCallAsc = 'CONGRESS_MOTIONS_MAX_RAW_CALL_ASC',
  CongressMotionsMaxRawCallDesc = 'CONGRESS_MOTIONS_MAX_RAW_CALL_DESC',
  CongressMotionsMaxThresholdAsc = 'CONGRESS_MOTIONS_MAX_THRESHOLD_ASC',
  CongressMotionsMaxThresholdDesc = 'CONGRESS_MOTIONS_MAX_THRESHOLD_DESC',
  CongressMotionsMinBlockNumberAsc = 'CONGRESS_MOTIONS_MIN_BLOCK_NUMBER_ASC',
  CongressMotionsMinBlockNumberDesc = 'CONGRESS_MOTIONS_MIN_BLOCK_NUMBER_DESC',
  CongressMotionsMinCallAsc = 'CONGRESS_MOTIONS_MIN_CALL_ASC',
  CongressMotionsMinCallDesc = 'CONGRESS_MOTIONS_MIN_CALL_DESC',
  CongressMotionsMinExecutionEventIdAsc = 'CONGRESS_MOTIONS_MIN_EXECUTION_EVENT_ID_ASC',
  CongressMotionsMinExecutionEventIdDesc = 'CONGRESS_MOTIONS_MIN_EXECUTION_EVENT_ID_DESC',
  CongressMotionsMinExtrinsicIdAsc = 'CONGRESS_MOTIONS_MIN_EXTRINSIC_ID_ASC',
  CongressMotionsMinExtrinsicIdDesc = 'CONGRESS_MOTIONS_MIN_EXTRINSIC_ID_DESC',
  CongressMotionsMinHashAsc = 'CONGRESS_MOTIONS_MIN_HASH_ASC',
  CongressMotionsMinHashDesc = 'CONGRESS_MOTIONS_MIN_HASH_DESC',
  CongressMotionsMinIdAsc = 'CONGRESS_MOTIONS_MIN_ID_ASC',
  CongressMotionsMinIdDesc = 'CONGRESS_MOTIONS_MIN_ID_DESC',
  CongressMotionsMinRawCallAsc = 'CONGRESS_MOTIONS_MIN_RAW_CALL_ASC',
  CongressMotionsMinRawCallDesc = 'CONGRESS_MOTIONS_MIN_RAW_CALL_DESC',
  CongressMotionsMinThresholdAsc = 'CONGRESS_MOTIONS_MIN_THRESHOLD_ASC',
  CongressMotionsMinThresholdDesc = 'CONGRESS_MOTIONS_MIN_THRESHOLD_DESC',
  CongressMotionsStddevPopulationBlockNumberAsc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  CongressMotionsStddevPopulationBlockNumberDesc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  CongressMotionsStddevPopulationCallAsc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_CALL_ASC',
  CongressMotionsStddevPopulationCallDesc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_CALL_DESC',
  CongressMotionsStddevPopulationExecutionEventIdAsc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_EXECUTION_EVENT_ID_ASC',
  CongressMotionsStddevPopulationExecutionEventIdDesc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_EXECUTION_EVENT_ID_DESC',
  CongressMotionsStddevPopulationExtrinsicIdAsc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_EXTRINSIC_ID_ASC',
  CongressMotionsStddevPopulationExtrinsicIdDesc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_EXTRINSIC_ID_DESC',
  CongressMotionsStddevPopulationHashAsc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_HASH_ASC',
  CongressMotionsStddevPopulationHashDesc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_HASH_DESC',
  CongressMotionsStddevPopulationIdAsc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_ID_ASC',
  CongressMotionsStddevPopulationIdDesc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_ID_DESC',
  CongressMotionsStddevPopulationRawCallAsc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_RAW_CALL_ASC',
  CongressMotionsStddevPopulationRawCallDesc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_RAW_CALL_DESC',
  CongressMotionsStddevPopulationThresholdAsc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_THRESHOLD_ASC',
  CongressMotionsStddevPopulationThresholdDesc = 'CONGRESS_MOTIONS_STDDEV_POPULATION_THRESHOLD_DESC',
  CongressMotionsStddevSampleBlockNumberAsc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  CongressMotionsStddevSampleBlockNumberDesc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  CongressMotionsStddevSampleCallAsc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_CALL_ASC',
  CongressMotionsStddevSampleCallDesc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_CALL_DESC',
  CongressMotionsStddevSampleExecutionEventIdAsc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_EXECUTION_EVENT_ID_ASC',
  CongressMotionsStddevSampleExecutionEventIdDesc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_EXECUTION_EVENT_ID_DESC',
  CongressMotionsStddevSampleExtrinsicIdAsc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_EXTRINSIC_ID_ASC',
  CongressMotionsStddevSampleExtrinsicIdDesc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_EXTRINSIC_ID_DESC',
  CongressMotionsStddevSampleHashAsc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_HASH_ASC',
  CongressMotionsStddevSampleHashDesc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_HASH_DESC',
  CongressMotionsStddevSampleIdAsc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_ID_ASC',
  CongressMotionsStddevSampleIdDesc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_ID_DESC',
  CongressMotionsStddevSampleRawCallAsc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_RAW_CALL_ASC',
  CongressMotionsStddevSampleRawCallDesc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_RAW_CALL_DESC',
  CongressMotionsStddevSampleThresholdAsc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_THRESHOLD_ASC',
  CongressMotionsStddevSampleThresholdDesc = 'CONGRESS_MOTIONS_STDDEV_SAMPLE_THRESHOLD_DESC',
  CongressMotionsSumBlockNumberAsc = 'CONGRESS_MOTIONS_SUM_BLOCK_NUMBER_ASC',
  CongressMotionsSumBlockNumberDesc = 'CONGRESS_MOTIONS_SUM_BLOCK_NUMBER_DESC',
  CongressMotionsSumCallAsc = 'CONGRESS_MOTIONS_SUM_CALL_ASC',
  CongressMotionsSumCallDesc = 'CONGRESS_MOTIONS_SUM_CALL_DESC',
  CongressMotionsSumExecutionEventIdAsc = 'CONGRESS_MOTIONS_SUM_EXECUTION_EVENT_ID_ASC',
  CongressMotionsSumExecutionEventIdDesc = 'CONGRESS_MOTIONS_SUM_EXECUTION_EVENT_ID_DESC',
  CongressMotionsSumExtrinsicIdAsc = 'CONGRESS_MOTIONS_SUM_EXTRINSIC_ID_ASC',
  CongressMotionsSumExtrinsicIdDesc = 'CONGRESS_MOTIONS_SUM_EXTRINSIC_ID_DESC',
  CongressMotionsSumHashAsc = 'CONGRESS_MOTIONS_SUM_HASH_ASC',
  CongressMotionsSumHashDesc = 'CONGRESS_MOTIONS_SUM_HASH_DESC',
  CongressMotionsSumIdAsc = 'CONGRESS_MOTIONS_SUM_ID_ASC',
  CongressMotionsSumIdDesc = 'CONGRESS_MOTIONS_SUM_ID_DESC',
  CongressMotionsSumRawCallAsc = 'CONGRESS_MOTIONS_SUM_RAW_CALL_ASC',
  CongressMotionsSumRawCallDesc = 'CONGRESS_MOTIONS_SUM_RAW_CALL_DESC',
  CongressMotionsSumThresholdAsc = 'CONGRESS_MOTIONS_SUM_THRESHOLD_ASC',
  CongressMotionsSumThresholdDesc = 'CONGRESS_MOTIONS_SUM_THRESHOLD_DESC',
  CongressMotionsVariancePopulationBlockNumberAsc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  CongressMotionsVariancePopulationBlockNumberDesc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  CongressMotionsVariancePopulationCallAsc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_CALL_ASC',
  CongressMotionsVariancePopulationCallDesc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_CALL_DESC',
  CongressMotionsVariancePopulationExecutionEventIdAsc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_EXECUTION_EVENT_ID_ASC',
  CongressMotionsVariancePopulationExecutionEventIdDesc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_EXECUTION_EVENT_ID_DESC',
  CongressMotionsVariancePopulationExtrinsicIdAsc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_EXTRINSIC_ID_ASC',
  CongressMotionsVariancePopulationExtrinsicIdDesc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_EXTRINSIC_ID_DESC',
  CongressMotionsVariancePopulationHashAsc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_HASH_ASC',
  CongressMotionsVariancePopulationHashDesc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_HASH_DESC',
  CongressMotionsVariancePopulationIdAsc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_ID_ASC',
  CongressMotionsVariancePopulationIdDesc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_ID_DESC',
  CongressMotionsVariancePopulationRawCallAsc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_RAW_CALL_ASC',
  CongressMotionsVariancePopulationRawCallDesc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_RAW_CALL_DESC',
  CongressMotionsVariancePopulationThresholdAsc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_THRESHOLD_ASC',
  CongressMotionsVariancePopulationThresholdDesc = 'CONGRESS_MOTIONS_VARIANCE_POPULATION_THRESHOLD_DESC',
  CongressMotionsVarianceSampleBlockNumberAsc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  CongressMotionsVarianceSampleBlockNumberDesc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  CongressMotionsVarianceSampleCallAsc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_CALL_ASC',
  CongressMotionsVarianceSampleCallDesc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_CALL_DESC',
  CongressMotionsVarianceSampleExecutionEventIdAsc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_EXECUTION_EVENT_ID_ASC',
  CongressMotionsVarianceSampleExecutionEventIdDesc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_EXECUTION_EVENT_ID_DESC',
  CongressMotionsVarianceSampleExtrinsicIdAsc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_EXTRINSIC_ID_ASC',
  CongressMotionsVarianceSampleExtrinsicIdDesc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_EXTRINSIC_ID_DESC',
  CongressMotionsVarianceSampleHashAsc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_HASH_ASC',
  CongressMotionsVarianceSampleHashDesc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_HASH_DESC',
  CongressMotionsVarianceSampleIdAsc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_ID_ASC',
  CongressMotionsVarianceSampleIdDesc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_ID_DESC',
  CongressMotionsVarianceSampleRawCallAsc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_RAW_CALL_ASC',
  CongressMotionsVarianceSampleRawCallDesc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_RAW_CALL_DESC',
  CongressMotionsVarianceSampleThresholdAsc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_THRESHOLD_ASC',
  CongressMotionsVarianceSampleThresholdDesc = 'CONGRESS_MOTIONS_VARIANCE_SAMPLE_THRESHOLD_DESC',
  EventsAverageBlockIdAsc = 'EVENTS_AVERAGE_BLOCK_ID_ASC',
  EventsAverageBlockIdDesc = 'EVENTS_AVERAGE_BLOCK_ID_DESC',
  EventsAverageBlockNumberAsc = 'EVENTS_AVERAGE_BLOCK_NUMBER_ASC',
  EventsAverageBlockNumberDesc = 'EVENTS_AVERAGE_BLOCK_NUMBER_DESC',
  EventsAverageDataAsc = 'EVENTS_AVERAGE_DATA_ASC',
  EventsAverageDataDesc = 'EVENTS_AVERAGE_DATA_DESC',
  EventsAverageExtrinsicIdAsc = 'EVENTS_AVERAGE_EXTRINSIC_ID_ASC',
  EventsAverageExtrinsicIdDesc = 'EVENTS_AVERAGE_EXTRINSIC_ID_DESC',
  EventsAverageIdAsc = 'EVENTS_AVERAGE_ID_ASC',
  EventsAverageIdDesc = 'EVENTS_AVERAGE_ID_DESC',
  EventsAverageIndexAsc = 'EVENTS_AVERAGE_INDEX_ASC',
  EventsAverageIndexDesc = 'EVENTS_AVERAGE_INDEX_DESC',
  EventsAverageMethodAsc = 'EVENTS_AVERAGE_METHOD_ASC',
  EventsAverageMethodDesc = 'EVENTS_AVERAGE_METHOD_DESC',
  EventsAverageSectionAsc = 'EVENTS_AVERAGE_SECTION_ASC',
  EventsAverageSectionDesc = 'EVENTS_AVERAGE_SECTION_DESC',
  EventsCountAsc = 'EVENTS_COUNT_ASC',
  EventsCountDesc = 'EVENTS_COUNT_DESC',
  EventsDistinctCountBlockIdAsc = 'EVENTS_DISTINCT_COUNT_BLOCK_ID_ASC',
  EventsDistinctCountBlockIdDesc = 'EVENTS_DISTINCT_COUNT_BLOCK_ID_DESC',
  EventsDistinctCountBlockNumberAsc = 'EVENTS_DISTINCT_COUNT_BLOCK_NUMBER_ASC',
  EventsDistinctCountBlockNumberDesc = 'EVENTS_DISTINCT_COUNT_BLOCK_NUMBER_DESC',
  EventsDistinctCountDataAsc = 'EVENTS_DISTINCT_COUNT_DATA_ASC',
  EventsDistinctCountDataDesc = 'EVENTS_DISTINCT_COUNT_DATA_DESC',
  EventsDistinctCountExtrinsicIdAsc = 'EVENTS_DISTINCT_COUNT_EXTRINSIC_ID_ASC',
  EventsDistinctCountExtrinsicIdDesc = 'EVENTS_DISTINCT_COUNT_EXTRINSIC_ID_DESC',
  EventsDistinctCountIdAsc = 'EVENTS_DISTINCT_COUNT_ID_ASC',
  EventsDistinctCountIdDesc = 'EVENTS_DISTINCT_COUNT_ID_DESC',
  EventsDistinctCountIndexAsc = 'EVENTS_DISTINCT_COUNT_INDEX_ASC',
  EventsDistinctCountIndexDesc = 'EVENTS_DISTINCT_COUNT_INDEX_DESC',
  EventsDistinctCountMethodAsc = 'EVENTS_DISTINCT_COUNT_METHOD_ASC',
  EventsDistinctCountMethodDesc = 'EVENTS_DISTINCT_COUNT_METHOD_DESC',
  EventsDistinctCountSectionAsc = 'EVENTS_DISTINCT_COUNT_SECTION_ASC',
  EventsDistinctCountSectionDesc = 'EVENTS_DISTINCT_COUNT_SECTION_DESC',
  EventsMaxBlockIdAsc = 'EVENTS_MAX_BLOCK_ID_ASC',
  EventsMaxBlockIdDesc = 'EVENTS_MAX_BLOCK_ID_DESC',
  EventsMaxBlockNumberAsc = 'EVENTS_MAX_BLOCK_NUMBER_ASC',
  EventsMaxBlockNumberDesc = 'EVENTS_MAX_BLOCK_NUMBER_DESC',
  EventsMaxDataAsc = 'EVENTS_MAX_DATA_ASC',
  EventsMaxDataDesc = 'EVENTS_MAX_DATA_DESC',
  EventsMaxExtrinsicIdAsc = 'EVENTS_MAX_EXTRINSIC_ID_ASC',
  EventsMaxExtrinsicIdDesc = 'EVENTS_MAX_EXTRINSIC_ID_DESC',
  EventsMaxIdAsc = 'EVENTS_MAX_ID_ASC',
  EventsMaxIdDesc = 'EVENTS_MAX_ID_DESC',
  EventsMaxIndexAsc = 'EVENTS_MAX_INDEX_ASC',
  EventsMaxIndexDesc = 'EVENTS_MAX_INDEX_DESC',
  EventsMaxMethodAsc = 'EVENTS_MAX_METHOD_ASC',
  EventsMaxMethodDesc = 'EVENTS_MAX_METHOD_DESC',
  EventsMaxSectionAsc = 'EVENTS_MAX_SECTION_ASC',
  EventsMaxSectionDesc = 'EVENTS_MAX_SECTION_DESC',
  EventsMinBlockIdAsc = 'EVENTS_MIN_BLOCK_ID_ASC',
  EventsMinBlockIdDesc = 'EVENTS_MIN_BLOCK_ID_DESC',
  EventsMinBlockNumberAsc = 'EVENTS_MIN_BLOCK_NUMBER_ASC',
  EventsMinBlockNumberDesc = 'EVENTS_MIN_BLOCK_NUMBER_DESC',
  EventsMinDataAsc = 'EVENTS_MIN_DATA_ASC',
  EventsMinDataDesc = 'EVENTS_MIN_DATA_DESC',
  EventsMinExtrinsicIdAsc = 'EVENTS_MIN_EXTRINSIC_ID_ASC',
  EventsMinExtrinsicIdDesc = 'EVENTS_MIN_EXTRINSIC_ID_DESC',
  EventsMinIdAsc = 'EVENTS_MIN_ID_ASC',
  EventsMinIdDesc = 'EVENTS_MIN_ID_DESC',
  EventsMinIndexAsc = 'EVENTS_MIN_INDEX_ASC',
  EventsMinIndexDesc = 'EVENTS_MIN_INDEX_DESC',
  EventsMinMethodAsc = 'EVENTS_MIN_METHOD_ASC',
  EventsMinMethodDesc = 'EVENTS_MIN_METHOD_DESC',
  EventsMinSectionAsc = 'EVENTS_MIN_SECTION_ASC',
  EventsMinSectionDesc = 'EVENTS_MIN_SECTION_DESC',
  EventsStddevPopulationBlockIdAsc = 'EVENTS_STDDEV_POPULATION_BLOCK_ID_ASC',
  EventsStddevPopulationBlockIdDesc = 'EVENTS_STDDEV_POPULATION_BLOCK_ID_DESC',
  EventsStddevPopulationBlockNumberAsc = 'EVENTS_STDDEV_POPULATION_BLOCK_NUMBER_ASC',
  EventsStddevPopulationBlockNumberDesc = 'EVENTS_STDDEV_POPULATION_BLOCK_NUMBER_DESC',
  EventsStddevPopulationDataAsc = 'EVENTS_STDDEV_POPULATION_DATA_ASC',
  EventsStddevPopulationDataDesc = 'EVENTS_STDDEV_POPULATION_DATA_DESC',
  EventsStddevPopulationExtrinsicIdAsc = 'EVENTS_STDDEV_POPULATION_EXTRINSIC_ID_ASC',
  EventsStddevPopulationExtrinsicIdDesc = 'EVENTS_STDDEV_POPULATION_EXTRINSIC_ID_DESC',
  EventsStddevPopulationIdAsc = 'EVENTS_STDDEV_POPULATION_ID_ASC',
  EventsStddevPopulationIdDesc = 'EVENTS_STDDEV_POPULATION_ID_DESC',
  EventsStddevPopulationIndexAsc = 'EVENTS_STDDEV_POPULATION_INDEX_ASC',
  EventsStddevPopulationIndexDesc = 'EVENTS_STDDEV_POPULATION_INDEX_DESC',
  EventsStddevPopulationMethodAsc = 'EVENTS_STDDEV_POPULATION_METHOD_ASC',
  EventsStddevPopulationMethodDesc = 'EVENTS_STDDEV_POPULATION_METHOD_DESC',
  EventsStddevPopulationSectionAsc = 'EVENTS_STDDEV_POPULATION_SECTION_ASC',
  EventsStddevPopulationSectionDesc = 'EVENTS_STDDEV_POPULATION_SECTION_DESC',
  EventsStddevSampleBlockIdAsc = 'EVENTS_STDDEV_SAMPLE_BLOCK_ID_ASC',
  EventsStddevSampleBlockIdDesc = 'EVENTS_STDDEV_SAMPLE_BLOCK_ID_DESC',
  EventsStddevSampleBlockNumberAsc = 'EVENTS_STDDEV_SAMPLE_BLOCK_NUMBER_ASC',
  EventsStddevSampleBlockNumberDesc = 'EVENTS_STDDEV_SAMPLE_BLOCK_NUMBER_DESC',
  EventsStddevSampleDataAsc = 'EVENTS_STDDEV_SAMPLE_DATA_ASC',
  EventsStddevSampleDataDesc = 'EVENTS_STDDEV_SAMPLE_DATA_DESC',
  EventsStddevSampleExtrinsicIdAsc = 'EVENTS_STDDEV_SAMPLE_EXTRINSIC_ID_ASC',
  EventsStddevSampleExtrinsicIdDesc = 'EVENTS_STDDEV_SAMPLE_EXTRINSIC_ID_DESC',
  EventsStddevSampleIdAsc = 'EVENTS_STDDEV_SAMPLE_ID_ASC',
  EventsStddevSampleIdDesc = 'EVENTS_STDDEV_SAMPLE_ID_DESC',
  EventsStddevSampleIndexAsc = 'EVENTS_STDDEV_SAMPLE_INDEX_ASC',
  EventsStddevSampleIndexDesc = 'EVENTS_STDDEV_SAMPLE_INDEX_DESC',
  EventsStddevSampleMethodAsc = 'EVENTS_STDDEV_SAMPLE_METHOD_ASC',
  EventsStddevSampleMethodDesc = 'EVENTS_STDDEV_SAMPLE_METHOD_DESC',
  EventsStddevSampleSectionAsc = 'EVENTS_STDDEV_SAMPLE_SECTION_ASC',
  EventsStddevSampleSectionDesc = 'EVENTS_STDDEV_SAMPLE_SECTION_DESC',
  EventsSumBlockIdAsc = 'EVENTS_SUM_BLOCK_ID_ASC',
  EventsSumBlockIdDesc = 'EVENTS_SUM_BLOCK_ID_DESC',
  EventsSumBlockNumberAsc = 'EVENTS_SUM_BLOCK_NUMBER_ASC',
  EventsSumBlockNumberDesc = 'EVENTS_SUM_BLOCK_NUMBER_DESC',
  EventsSumDataAsc = 'EVENTS_SUM_DATA_ASC',
  EventsSumDataDesc = 'EVENTS_SUM_DATA_DESC',
  EventsSumExtrinsicIdAsc = 'EVENTS_SUM_EXTRINSIC_ID_ASC',
  EventsSumExtrinsicIdDesc = 'EVENTS_SUM_EXTRINSIC_ID_DESC',
  EventsSumIdAsc = 'EVENTS_SUM_ID_ASC',
  EventsSumIdDesc = 'EVENTS_SUM_ID_DESC',
  EventsSumIndexAsc = 'EVENTS_SUM_INDEX_ASC',
  EventsSumIndexDesc = 'EVENTS_SUM_INDEX_DESC',
  EventsSumMethodAsc = 'EVENTS_SUM_METHOD_ASC',
  EventsSumMethodDesc = 'EVENTS_SUM_METHOD_DESC',
  EventsSumSectionAsc = 'EVENTS_SUM_SECTION_ASC',
  EventsSumSectionDesc = 'EVENTS_SUM_SECTION_DESC',
  EventsVariancePopulationBlockIdAsc = 'EVENTS_VARIANCE_POPULATION_BLOCK_ID_ASC',
  EventsVariancePopulationBlockIdDesc = 'EVENTS_VARIANCE_POPULATION_BLOCK_ID_DESC',
  EventsVariancePopulationBlockNumberAsc = 'EVENTS_VARIANCE_POPULATION_BLOCK_NUMBER_ASC',
  EventsVariancePopulationBlockNumberDesc = 'EVENTS_VARIANCE_POPULATION_BLOCK_NUMBER_DESC',
  EventsVariancePopulationDataAsc = 'EVENTS_VARIANCE_POPULATION_DATA_ASC',
  EventsVariancePopulationDataDesc = 'EVENTS_VARIANCE_POPULATION_DATA_DESC',
  EventsVariancePopulationExtrinsicIdAsc = 'EVENTS_VARIANCE_POPULATION_EXTRINSIC_ID_ASC',
  EventsVariancePopulationExtrinsicIdDesc = 'EVENTS_VARIANCE_POPULATION_EXTRINSIC_ID_DESC',
  EventsVariancePopulationIdAsc = 'EVENTS_VARIANCE_POPULATION_ID_ASC',
  EventsVariancePopulationIdDesc = 'EVENTS_VARIANCE_POPULATION_ID_DESC',
  EventsVariancePopulationIndexAsc = 'EVENTS_VARIANCE_POPULATION_INDEX_ASC',
  EventsVariancePopulationIndexDesc = 'EVENTS_VARIANCE_POPULATION_INDEX_DESC',
  EventsVariancePopulationMethodAsc = 'EVENTS_VARIANCE_POPULATION_METHOD_ASC',
  EventsVariancePopulationMethodDesc = 'EVENTS_VARIANCE_POPULATION_METHOD_DESC',
  EventsVariancePopulationSectionAsc = 'EVENTS_VARIANCE_POPULATION_SECTION_ASC',
  EventsVariancePopulationSectionDesc = 'EVENTS_VARIANCE_POPULATION_SECTION_DESC',
  EventsVarianceSampleBlockIdAsc = 'EVENTS_VARIANCE_SAMPLE_BLOCK_ID_ASC',
  EventsVarianceSampleBlockIdDesc = 'EVENTS_VARIANCE_SAMPLE_BLOCK_ID_DESC',
  EventsVarianceSampleBlockNumberAsc = 'EVENTS_VARIANCE_SAMPLE_BLOCK_NUMBER_ASC',
  EventsVarianceSampleBlockNumberDesc = 'EVENTS_VARIANCE_SAMPLE_BLOCK_NUMBER_DESC',
  EventsVarianceSampleDataAsc = 'EVENTS_VARIANCE_SAMPLE_DATA_ASC',
  EventsVarianceSampleDataDesc = 'EVENTS_VARIANCE_SAMPLE_DATA_DESC',
  EventsVarianceSampleExtrinsicIdAsc = 'EVENTS_VARIANCE_SAMPLE_EXTRINSIC_ID_ASC',
  EventsVarianceSampleExtrinsicIdDesc = 'EVENTS_VARIANCE_SAMPLE_EXTRINSIC_ID_DESC',
  EventsVarianceSampleIdAsc = 'EVENTS_VARIANCE_SAMPLE_ID_ASC',
  EventsVarianceSampleIdDesc = 'EVENTS_VARIANCE_SAMPLE_ID_DESC',
  EventsVarianceSampleIndexAsc = 'EVENTS_VARIANCE_SAMPLE_INDEX_ASC',
  EventsVarianceSampleIndexDesc = 'EVENTS_VARIANCE_SAMPLE_INDEX_DESC',
  EventsVarianceSampleMethodAsc = 'EVENTS_VARIANCE_SAMPLE_METHOD_ASC',
  EventsVarianceSampleMethodDesc = 'EVENTS_VARIANCE_SAMPLE_METHOD_DESC',
  EventsVarianceSampleSectionAsc = 'EVENTS_VARIANCE_SAMPLE_SECTION_ASC',
  EventsVarianceSampleSectionDesc = 'EVENTS_VARIANCE_SAMPLE_SECTION_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IsSignedAsc = 'IS_SIGNED_ASC',
  IsSignedDesc = 'IS_SIGNED_DESC',
  MethodAsc = 'METHOD_ASC',
  MethodDesc = 'METHOD_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SectionAsc = 'SECTION_ASC',
  SectionDesc = 'SECTION_DESC',
  SignerIdAsc = 'SIGNER_ID_ASC',
  SignerIdDesc = 'SIGNER_ID_DESC',
  SuccessAsc = 'SUCCESS_ASC',
  SuccessDesc = 'SUCCESS_DESC'
}

export type HavingBigfloatFilter = {
  equalTo?: InputMaybe<Scalars['BigFloat']['input']>;
  greaterThan?: InputMaybe<Scalars['BigFloat']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  lessThan?: InputMaybe<Scalars['BigFloat']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  notEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type HavingDatetimeFilter = {
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
};

export type HavingIntFilter = {
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `Identity` values. */
export type IdentitiesConnection = {
  __typename?: 'IdentitiesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<IdentityAggregates>;
  /** A list of edges which contains the `Identity` and cursor to aid in pagination. */
  edges: Array<IdentitiesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<IdentityAggregates>>;
  /** A list of `Identity` objects. */
  nodes: Array<Maybe<Identity>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Identity` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Identity` values. */
export type IdentitiesConnectionGroupedAggregatesArgs = {
  groupBy: Array<IdentitiesGroupBy>;
  having?: InputMaybe<IdentitiesHavingInput>;
};

/** A `Identity` edge in the connection. */
export type IdentitiesEdge = {
  __typename?: 'IdentitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Identity` at the end of the edge. */
  node?: Maybe<Identity>;
};

/** Grouping methods for `Identity` for usage during aggregation. */
export enum IdentitiesGroupBy {
  IsConfirmed = 'IS_CONFIRMED',
  Name = 'NAME'
}

/** Conditions for `Identity` aggregates. */
export type IdentitiesHavingInput = {
  AND?: InputMaybe<Array<IdentitiesHavingInput>>;
  OR?: InputMaybe<Array<IdentitiesHavingInput>>;
};

/** Methods to use when ordering `Identity`. */
export enum IdentitiesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsConfirmedAsc = 'IS_CONFIRMED_ASC',
  IsConfirmedDesc = 'IS_CONFIRMED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Identity = Node & {
  __typename?: 'Identity';
  id: Scalars['String']['output'];
  isConfirmed: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

export type IdentityAggregates = {
  __typename?: 'IdentityAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<IdentityDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
};

export type IdentityDistinctCountAggregates = {
  __typename?: 'IdentityDistinctCountAggregates';
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of isConfirmed across the matching connection */
  isConfirmed?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Identity` object types. All fields are combined with a logical ‘and.’ */
export type IdentityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<IdentityFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isConfirmed` field. */
  isConfirmed?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<IdentityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<IdentityFilter>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Contained by the specified JSON. */
  containedBy?: InputMaybe<Scalars['JSON']['input']>;
  /** Contains the specified JSON. */
  contains?: InputMaybe<Scalars['JSON']['input']>;
  /** Contains all of the specified keys. */
  containsAllKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains any of the specified keys. */
  containsAnyKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified key. */
  containsKey?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['JSON']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['JSON']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['JSON']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

export type Merit = Node & {
  __typename?: 'Merit';
  /** Reads a single `Block` that is related to this `Merit`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  eventIndex: Scalars['Int']['output'];
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Reads a single `Account` that is related to this `Merit`. */
  from?: Maybe<Account>;
  fromId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  remark?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Account` that is related to this `Merit`. */
  to?: Maybe<Account>;
  toId: Scalars['String']['output'];
  value: Scalars['BigFloat']['output'];
};

export type MeritAggregates = {
  __typename?: 'MeritAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<MeritAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<MeritDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<MeritMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<MeritMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<MeritStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<MeritStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<MeritSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<MeritVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<MeritVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Merit` object types. */
export type MeritAggregatesFilter = {
  /** Mean average aggregate over matching `Merit` objects. */
  average?: InputMaybe<MeritAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Merit` objects. */
  distinctCount?: InputMaybe<MeritDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Merit` object to be included within the aggregate. */
  filter?: InputMaybe<MeritFilter>;
  /** Maximum aggregate over matching `Merit` objects. */
  max?: InputMaybe<MeritMaxAggregateFilter>;
  /** Minimum aggregate over matching `Merit` objects. */
  min?: InputMaybe<MeritMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Merit` objects. */
  stddevPopulation?: InputMaybe<MeritStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Merit` objects. */
  stddevSample?: InputMaybe<MeritStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Merit` objects. */
  sum?: InputMaybe<MeritSumAggregateFilter>;
  /** Population variance aggregate over matching `Merit` objects. */
  variancePopulation?: InputMaybe<MeritVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Merit` objects. */
  varianceSample?: InputMaybe<MeritVarianceSampleAggregateFilter>;
};

export type MeritAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type MeritAverageAggregates = {
  __typename?: 'MeritAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type MeritDistinctCountAggregateFilter = {
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  fromId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  remark?: InputMaybe<BigIntFilter>;
  toId?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigIntFilter>;
};

export type MeritDistinctCountAggregates = {
  __typename?: 'MeritDistinctCountAggregates';
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of fromId across the matching connection */
  fromId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of remark across the matching connection */
  remark?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of toId across the matching connection */
  toId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of value across the matching connection */
  value?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Merit` object types. All fields are combined with a logical ‘and.’ */
export type MeritFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MeritFilter>>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `eventIndex` field. */
  eventIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `extrinsicIndex` field. */
  extrinsicIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `from` relation. */
  from?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `fromId` field. */
  fromId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MeritFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MeritFilter>>;
  /** Filter by the object’s `remark` field. */
  remark?: InputMaybe<StringFilter>;
  /** Filter by the object’s `to` relation. */
  to?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `toId` field. */
  toId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<BigFloatFilter>;
};

export type MeritMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type MeritMaxAggregates = {
  __typename?: 'MeritMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type MeritMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type MeritMinAggregates = {
  __typename?: 'MeritMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type MeritStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type MeritStddevPopulationAggregates = {
  __typename?: 'MeritStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type MeritStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type MeritStddevSampleAggregates = {
  __typename?: 'MeritStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type MeritSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type MeritSumAggregates = {
  __typename?: 'MeritSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of eventIndex across the matching connection */
  eventIndex: Scalars['BigInt']['output'];
  /** Sum of extrinsicIndex across the matching connection */
  extrinsicIndex: Scalars['BigInt']['output'];
  /** Sum of value across the matching connection */
  value: Scalars['BigFloat']['output'];
};

export type MeritVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type MeritVariancePopulationAggregates = {
  __typename?: 'MeritVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type MeritVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type MeritVarianceSampleAggregates = {
  __typename?: 'MeritVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `Merit` values. */
export type MeritsConnection = {
  __typename?: 'MeritsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<MeritAggregates>;
  /** A list of edges which contains the `Merit` and cursor to aid in pagination. */
  edges: Array<MeritsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<MeritAggregates>>;
  /** A list of `Merit` objects. */
  nodes: Array<Maybe<Merit>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Merit` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Merit` values. */
export type MeritsConnectionGroupedAggregatesArgs = {
  groupBy: Array<MeritsGroupBy>;
  having?: InputMaybe<MeritsHavingInput>;
};

/** A `Merit` edge in the connection. */
export type MeritsEdge = {
  __typename?: 'MeritsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Merit` at the end of the edge. */
  node?: Maybe<Merit>;
};

/** Grouping methods for `Merit` for usage during aggregation. */
export enum MeritsGroupBy {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  FromId = 'FROM_ID',
  Remark = 'REMARK',
  ToId = 'TO_ID',
  Value = 'VALUE'
}

export type MeritsHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type MeritsHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Merit` aggregates. */
export type MeritsHavingInput = {
  AND?: InputMaybe<Array<MeritsHavingInput>>;
  OR?: InputMaybe<Array<MeritsHavingInput>>;
  average?: InputMaybe<MeritsHavingAverageInput>;
  distinctCount?: InputMaybe<MeritsHavingDistinctCountInput>;
  max?: InputMaybe<MeritsHavingMaxInput>;
  min?: InputMaybe<MeritsHavingMinInput>;
  stddevPopulation?: InputMaybe<MeritsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<MeritsHavingStddevSampleInput>;
  sum?: InputMaybe<MeritsHavingSumInput>;
  variancePopulation?: InputMaybe<MeritsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<MeritsHavingVarianceSampleInput>;
};

export type MeritsHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type MeritsHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type MeritsHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type MeritsHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type MeritsHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type MeritsHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type MeritsHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `Merit`. */
export enum MeritsOrderBy {
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  EventIndexAsc = 'EVENT_INDEX_ASC',
  EventIndexDesc = 'EVENT_INDEX_DESC',
  ExtrinsicIndexAsc = 'EXTRINSIC_INDEX_ASC',
  ExtrinsicIndexDesc = 'EXTRINSIC_INDEX_DESC',
  FromIdAsc = 'FROM_ID_ASC',
  FromIdDesc = 'FROM_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RemarkAsc = 'REMARK_ASC',
  RemarkDesc = 'REMARK_DESC',
  ToIdAsc = 'TO_ID_ASC',
  ToIdDesc = 'TO_ID_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  _metadata?: Maybe<_Metadata>;
  _metadatas?: Maybe<_Metadatas>;
  account?: Maybe<Account>;
  /** Reads a single `Account` using its globally unique `ID`. */
  accountByNodeId?: Maybe<Account>;
  /** Reads and enables pagination through a set of `Account`. */
  accounts?: Maybe<AccountsConnection>;
  assetTransfer?: Maybe<AssetTransfer>;
  /** Reads a single `AssetTransfer` using its globally unique `ID`. */
  assetTransferByNodeId?: Maybe<AssetTransfer>;
  /** Reads and enables pagination through a set of `AssetTransfer`. */
  assetTransfers?: Maybe<AssetTransfersConnection>;
  block?: Maybe<Block>;
  /** Reads a single `Block` using its globally unique `ID`. */
  blockByNodeId?: Maybe<Block>;
  /** Reads and enables pagination through a set of `Block`. */
  blocks?: Maybe<BlocksConnection>;
  bridgeReceipt?: Maybe<BridgeReceipt>;
  bridgeReceiptApproved?: Maybe<BridgeReceiptApproved>;
  /** Reads a single `BridgeReceiptApproved` using its globally unique `ID`. */
  bridgeReceiptApprovedByNodeId?: Maybe<BridgeReceiptApproved>;
  /** Reads and enables pagination through a set of `BridgeReceiptApproved`. */
  bridgeReceiptApproveds?: Maybe<BridgeReceiptApprovedsConnection>;
  /** Reads a single `BridgeReceipt` using its globally unique `ID`. */
  bridgeReceiptByNodeId?: Maybe<BridgeReceipt>;
  bridgeReceiptProcessed?: Maybe<BridgeReceiptProcessed>;
  /** Reads a single `BridgeReceiptProcessed` using its globally unique `ID`. */
  bridgeReceiptProcessedByNodeId?: Maybe<BridgeReceiptProcessed>;
  /** Reads and enables pagination through a set of `BridgeReceiptProcessed`. */
  bridgeReceiptProcesseds?: Maybe<BridgeReceiptProcessedsConnection>;
  /** Reads and enables pagination through a set of `BridgeReceipt`. */
  bridgeReceipts?: Maybe<BridgeReceiptsConnection>;
  bridgeVote?: Maybe<BridgeVote>;
  /** Reads a single `BridgeVote` using its globally unique `ID`. */
  bridgeVoteByNodeId?: Maybe<BridgeVote>;
  /** Reads and enables pagination through a set of `BridgeVote`. */
  bridgeVotes?: Maybe<BridgeVotesConnection>;
  congressMotion?: Maybe<CongressMotion>;
  /** Reads a single `CongressMotion` using its globally unique `ID`. */
  congressMotionByNodeId?: Maybe<CongressMotion>;
  /** Reads and enables pagination through a set of `CongressMotion`. */
  congressMotions?: Maybe<CongressMotionsConnection>;
  day?: Maybe<Day>;
  /** Reads a single `Day` using its globally unique `ID`. */
  dayByNodeId?: Maybe<Day>;
  /** Reads and enables pagination through a set of `Day`. */
  days?: Maybe<DaysConnection>;
  ethAccount?: Maybe<EthAccount>;
  /** Reads a single `EthAccount` using its globally unique `ID`. */
  ethAccountByNodeId?: Maybe<EthAccount>;
  /** Reads and enables pagination through a set of `EthAccount`. */
  ethAccounts?: Maybe<EthAccountsConnection>;
  event?: Maybe<Event>;
  /** Reads a single `Event` using its globally unique `ID`. */
  eventByNodeId?: Maybe<Event>;
  /** Reads and enables pagination through a set of `Event`. */
  events?: Maybe<EventsConnection>;
  extrinsic?: Maybe<Extrinsic>;
  /** Reads a single `Extrinsic` using its globally unique `ID`. */
  extrinsicByNodeId?: Maybe<Extrinsic>;
  /** Reads and enables pagination through a set of `Extrinsic`. */
  extrinsics?: Maybe<ExtrinsicsConnection>;
  /** Reads and enables pagination through a set of `Identity`. */
  identities?: Maybe<IdentitiesConnection>;
  identity?: Maybe<Identity>;
  /** Reads a single `Identity` using its globally unique `ID`. */
  identityByNodeId?: Maybe<Identity>;
  merit?: Maybe<Merit>;
  /** Reads a single `Merit` using its globally unique `ID`. */
  meritByNodeId?: Maybe<Merit>;
  /** Reads and enables pagination through a set of `Merit`. */
  merits?: Maybe<MeritsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  soraBurned?: Maybe<SoraBurned>;
  /** Reads a single `SoraBurned` using its globally unique `ID`. */
  soraBurnedByNodeId?: Maybe<SoraBurned>;
  /** Reads and enables pagination through a set of `SoraBurned`. */
  soraBurneds?: Maybe<SoraBurnedsConnection>;
  soraMinted?: Maybe<SoraMinted>;
  /** Reads a single `SoraMinted` using its globally unique `ID`. */
  soraMintedByNodeId?: Maybe<SoraMinted>;
  /** Reads and enables pagination through a set of `SoraMinted`. */
  soraMinteds?: Maybe<SoraMintedsConnection>;
  staking?: Maybe<Staking>;
  /** Reads a single `Staking` using its globally unique `ID`. */
  stakingByNodeId?: Maybe<Staking>;
  /** Reads and enables pagination through a set of `Staking`. */
  stakings?: Maybe<StakingsConnection>;
  taxPool?: Maybe<TaxPool>;
  /** Reads a single `TaxPool` using its globally unique `ID`. */
  taxPoolByNodeId?: Maybe<TaxPool>;
  /** Reads and enables pagination through a set of `TaxPool`. */
  taxPools?: Maybe<TaxPoolsConnection>;
  taxUnPool?: Maybe<TaxUnPool>;
  /** Reads a single `TaxUnPool` using its globally unique `ID`. */
  taxUnPoolByNodeId?: Maybe<TaxUnPool>;
  /** Reads and enables pagination through a set of `TaxUnPool`. */
  taxUnPools?: Maybe<TaxUnPoolsConnection>;
  transfer?: Maybe<Transfer>;
  /** Reads a single `Transfer` using its globally unique `ID`. */
  transferByNodeId?: Maybe<Transfer>;
  /** Reads and enables pagination through a set of `Transfer`. */
  transfers?: Maybe<TransfersConnection>;
};


/** The root query type which gives access points into the data universe. */
export type Query_MetadataArgs = {
  chainId?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type Query_MetadatasArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAssetTransferArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAssetTransferByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAssetTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Asset_Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<AssetTransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AssetTransfersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBlockArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBlockByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBlocksArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Blocks_Distinct_Enum>>>;
  filter?: InputMaybe<BlockFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BlocksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeReceiptArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeReceiptApprovedArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeReceiptApprovedByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipt_Approveds_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeReceiptApprovedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipt_Approveds_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptApprovedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptApprovedsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeReceiptByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeReceiptProcessedArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeReceiptProcessedByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipt_Processeds_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeReceiptProcessedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipt_Processeds_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptProcessedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptProcessedsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeReceiptsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Receipts_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeReceiptFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeReceiptsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeVoteArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeVoteByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Votes_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBridgeVotesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Bridge_Votes_Distinct_Enum>>>;
  filter?: InputMaybe<BridgeVoteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BridgeVotesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCongressMotionArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCongressMotionByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Congress_Motions_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCongressMotionsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Congress_Motions_Distinct_Enum>>>;
  filter?: InputMaybe<CongressMotionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CongressMotionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDayArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDayByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Days_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDaysArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Days_Distinct_Enum>>>;
  filter?: InputMaybe<DayFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DaysOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEthAccountArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEthAccountByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Eth_Accounts_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEthAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Eth_Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<EthAccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EthAccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Events_Distinct_Enum>>>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryExtrinsicArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryExtrinsicByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Extrinsics_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryExtrinsicsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Extrinsics_Distinct_Enum>>>;
  filter?: InputMaybe<ExtrinsicFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExtrinsicsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryIdentitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Identities_Distinct_Enum>>>;
  filter?: InputMaybe<IdentityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IdentitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryIdentityArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIdentityByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Identities_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMeritArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMeritByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMeritsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Merits_Distinct_Enum>>>;
  filter?: InputMaybe<MeritFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeritsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySoraBurnedArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySoraBurnedByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Sora_Burneds_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySoraBurnedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Burneds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraBurnedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraBurnedsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySoraMintedArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySoraMintedByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Sora_Minteds_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySoraMintedsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Sora_Minteds_Distinct_Enum>>>;
  filter?: InputMaybe<SoraMintedFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SoraMintedsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryStakingArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStakingByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Stakings_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryStakingsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Stakings_Distinct_Enum>>>;
  filter?: InputMaybe<StakingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StakingsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTaxPoolArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTaxPoolByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Tax_Pools_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTaxPoolsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxPoolsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTaxUnPoolArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTaxUnPoolByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Tax_Un_Pools_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTaxUnPoolsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Tax_Un_Pools_Distinct_Enum>>>;
  filter?: InputMaybe<TaxUnPoolFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TaxUnPoolsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTransferArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTransferByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTransfersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  distinct?: InputMaybe<Array<InputMaybe<Transfers_Distinct_Enum>>>;
  filter?: InputMaybe<TransferFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TransfersOrderBy>>;
};

export type SoraBurned = Node & {
  __typename?: 'SoraBurned';
  asset: Scalars['String']['output'];
  /** Reads a single `Block` that is related to this `SoraBurned`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  eventIndex: Scalars['Int']['output'];
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  network: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  recipient: Scalars['String']['output'];
  /** Reads a single `Account` that is related to this `SoraBurned`. */
  sender?: Maybe<Account>;
  senderId: Scalars['String']['output'];
  value: Scalars['BigFloat']['output'];
};

export type SoraBurnedAggregates = {
  __typename?: 'SoraBurnedAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<SoraBurnedAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<SoraBurnedDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<SoraBurnedMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<SoraBurnedMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<SoraBurnedStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<SoraBurnedStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<SoraBurnedSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<SoraBurnedVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<SoraBurnedVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `SoraBurned` object types. */
export type SoraBurnedAggregatesFilter = {
  /** Mean average aggregate over matching `SoraBurned` objects. */
  average?: InputMaybe<SoraBurnedAverageAggregateFilter>;
  /** Distinct count aggregate over matching `SoraBurned` objects. */
  distinctCount?: InputMaybe<SoraBurnedDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `SoraBurned` object to be included within the aggregate. */
  filter?: InputMaybe<SoraBurnedFilter>;
  /** Maximum aggregate over matching `SoraBurned` objects. */
  max?: InputMaybe<SoraBurnedMaxAggregateFilter>;
  /** Minimum aggregate over matching `SoraBurned` objects. */
  min?: InputMaybe<SoraBurnedMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `SoraBurned` objects. */
  stddevPopulation?: InputMaybe<SoraBurnedStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `SoraBurned` objects. */
  stddevSample?: InputMaybe<SoraBurnedStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `SoraBurned` objects. */
  sum?: InputMaybe<SoraBurnedSumAggregateFilter>;
  /** Population variance aggregate over matching `SoraBurned` objects. */
  variancePopulation?: InputMaybe<SoraBurnedVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `SoraBurned` objects. */
  varianceSample?: InputMaybe<SoraBurnedVarianceSampleAggregateFilter>;
};

export type SoraBurnedAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraBurnedAverageAggregates = {
  __typename?: 'SoraBurnedAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraBurnedDistinctCountAggregateFilter = {
  asset?: InputMaybe<BigIntFilter>;
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  network?: InputMaybe<BigIntFilter>;
  recipient?: InputMaybe<BigIntFilter>;
  senderId?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigIntFilter>;
};

export type SoraBurnedDistinctCountAggregates = {
  __typename?: 'SoraBurnedDistinctCountAggregates';
  /** Distinct count of asset across the matching connection */
  asset?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of network across the matching connection */
  network?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of recipient across the matching connection */
  recipient?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of senderId across the matching connection */
  senderId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of value across the matching connection */
  value?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `SoraBurned` object types. All fields are combined with a logical ‘and.’ */
export type SoraBurnedFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SoraBurnedFilter>>;
  /** Filter by the object’s `asset` field. */
  asset?: InputMaybe<StringFilter>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `eventIndex` field. */
  eventIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `extrinsicIndex` field. */
  extrinsicIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `network` field. */
  network?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SoraBurnedFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SoraBurnedFilter>>;
  /** Filter by the object’s `recipient` field. */
  recipient?: InputMaybe<StringFilter>;
  /** Filter by the object’s `sender` relation. */
  sender?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `senderId` field. */
  senderId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraBurnedMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraBurnedMaxAggregates = {
  __typename?: 'SoraBurnedMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraBurnedMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraBurnedMinAggregates = {
  __typename?: 'SoraBurnedMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraBurnedStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraBurnedStddevPopulationAggregates = {
  __typename?: 'SoraBurnedStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraBurnedStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraBurnedStddevSampleAggregates = {
  __typename?: 'SoraBurnedStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraBurnedSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraBurnedSumAggregates = {
  __typename?: 'SoraBurnedSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of eventIndex across the matching connection */
  eventIndex: Scalars['BigInt']['output'];
  /** Sum of extrinsicIndex across the matching connection */
  extrinsicIndex: Scalars['BigInt']['output'];
  /** Sum of value across the matching connection */
  value: Scalars['BigFloat']['output'];
};

export type SoraBurnedVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraBurnedVariancePopulationAggregates = {
  __typename?: 'SoraBurnedVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraBurnedVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraBurnedVarianceSampleAggregates = {
  __typename?: 'SoraBurnedVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `SoraBurned` values. */
export type SoraBurnedsConnection = {
  __typename?: 'SoraBurnedsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<SoraBurnedAggregates>;
  /** A list of edges which contains the `SoraBurned` and cursor to aid in pagination. */
  edges: Array<SoraBurnedsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<SoraBurnedAggregates>>;
  /** A list of `SoraBurned` objects. */
  nodes: Array<Maybe<SoraBurned>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SoraBurned` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `SoraBurned` values. */
export type SoraBurnedsConnectionGroupedAggregatesArgs = {
  groupBy: Array<SoraBurnedsGroupBy>;
  having?: InputMaybe<SoraBurnedsHavingInput>;
};

/** A `SoraBurned` edge in the connection. */
export type SoraBurnedsEdge = {
  __typename?: 'SoraBurnedsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `SoraBurned` at the end of the edge. */
  node?: Maybe<SoraBurned>;
};

/** Grouping methods for `SoraBurned` for usage during aggregation. */
export enum SoraBurnedsGroupBy {
  Asset = 'ASSET',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  Network = 'NETWORK',
  Recipient = 'RECIPIENT',
  SenderId = 'SENDER_ID',
  Value = 'VALUE'
}

export type SoraBurnedsHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraBurnedsHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `SoraBurned` aggregates. */
export type SoraBurnedsHavingInput = {
  AND?: InputMaybe<Array<SoraBurnedsHavingInput>>;
  OR?: InputMaybe<Array<SoraBurnedsHavingInput>>;
  average?: InputMaybe<SoraBurnedsHavingAverageInput>;
  distinctCount?: InputMaybe<SoraBurnedsHavingDistinctCountInput>;
  max?: InputMaybe<SoraBurnedsHavingMaxInput>;
  min?: InputMaybe<SoraBurnedsHavingMinInput>;
  stddevPopulation?: InputMaybe<SoraBurnedsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<SoraBurnedsHavingStddevSampleInput>;
  sum?: InputMaybe<SoraBurnedsHavingSumInput>;
  variancePopulation?: InputMaybe<SoraBurnedsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<SoraBurnedsHavingVarianceSampleInput>;
};

export type SoraBurnedsHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraBurnedsHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraBurnedsHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraBurnedsHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraBurnedsHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraBurnedsHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraBurnedsHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `SoraBurned`. */
export enum SoraBurnedsOrderBy {
  AssetAsc = 'ASSET_ASC',
  AssetDesc = 'ASSET_DESC',
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  EventIndexAsc = 'EVENT_INDEX_ASC',
  EventIndexDesc = 'EVENT_INDEX_DESC',
  ExtrinsicIndexAsc = 'EXTRINSIC_INDEX_ASC',
  ExtrinsicIndexDesc = 'EXTRINSIC_INDEX_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NetworkAsc = 'NETWORK_ASC',
  NetworkDesc = 'NETWORK_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RecipientAsc = 'RECIPIENT_ASC',
  RecipientDesc = 'RECIPIENT_DESC',
  SenderIdAsc = 'SENDER_ID_ASC',
  SenderIdDesc = 'SENDER_ID_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

export type SoraMinted = Node & {
  __typename?: 'SoraMinted';
  asset: Scalars['String']['output'];
  /** Reads a single `Block` that is related to this `SoraMinted`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  eventIndex: Scalars['Int']['output'];
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  network: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Account` that is related to this `SoraMinted`. */
  recipient?: Maybe<Account>;
  recipientId: Scalars['String']['output'];
  sender: Scalars['String']['output'];
  value: Scalars['BigFloat']['output'];
};

export type SoraMintedAggregates = {
  __typename?: 'SoraMintedAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<SoraMintedAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<SoraMintedDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<SoraMintedMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<SoraMintedMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<SoraMintedStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<SoraMintedStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<SoraMintedSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<SoraMintedVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<SoraMintedVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `SoraMinted` object types. */
export type SoraMintedAggregatesFilter = {
  /** Mean average aggregate over matching `SoraMinted` objects. */
  average?: InputMaybe<SoraMintedAverageAggregateFilter>;
  /** Distinct count aggregate over matching `SoraMinted` objects. */
  distinctCount?: InputMaybe<SoraMintedDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `SoraMinted` object to be included within the aggregate. */
  filter?: InputMaybe<SoraMintedFilter>;
  /** Maximum aggregate over matching `SoraMinted` objects. */
  max?: InputMaybe<SoraMintedMaxAggregateFilter>;
  /** Minimum aggregate over matching `SoraMinted` objects. */
  min?: InputMaybe<SoraMintedMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `SoraMinted` objects. */
  stddevPopulation?: InputMaybe<SoraMintedStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `SoraMinted` objects. */
  stddevSample?: InputMaybe<SoraMintedStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `SoraMinted` objects. */
  sum?: InputMaybe<SoraMintedSumAggregateFilter>;
  /** Population variance aggregate over matching `SoraMinted` objects. */
  variancePopulation?: InputMaybe<SoraMintedVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `SoraMinted` objects. */
  varianceSample?: InputMaybe<SoraMintedVarianceSampleAggregateFilter>;
};

export type SoraMintedAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraMintedAverageAggregates = {
  __typename?: 'SoraMintedAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraMintedDistinctCountAggregateFilter = {
  asset?: InputMaybe<BigIntFilter>;
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  network?: InputMaybe<BigIntFilter>;
  recipientId?: InputMaybe<BigIntFilter>;
  sender?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigIntFilter>;
};

export type SoraMintedDistinctCountAggregates = {
  __typename?: 'SoraMintedDistinctCountAggregates';
  /** Distinct count of asset across the matching connection */
  asset?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of network across the matching connection */
  network?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of recipientId across the matching connection */
  recipientId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of sender across the matching connection */
  sender?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of value across the matching connection */
  value?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `SoraMinted` object types. All fields are combined with a logical ‘and.’ */
export type SoraMintedFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SoraMintedFilter>>;
  /** Filter by the object’s `asset` field. */
  asset?: InputMaybe<StringFilter>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `eventIndex` field. */
  eventIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `extrinsicIndex` field. */
  extrinsicIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `network` field. */
  network?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SoraMintedFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SoraMintedFilter>>;
  /** Filter by the object’s `recipient` relation. */
  recipient?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `recipientId` field. */
  recipientId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `sender` field. */
  sender?: InputMaybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraMintedMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraMintedMaxAggregates = {
  __typename?: 'SoraMintedMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraMintedMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraMintedMinAggregates = {
  __typename?: 'SoraMintedMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraMintedStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraMintedStddevPopulationAggregates = {
  __typename?: 'SoraMintedStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraMintedStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraMintedStddevSampleAggregates = {
  __typename?: 'SoraMintedStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraMintedSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraMintedSumAggregates = {
  __typename?: 'SoraMintedSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of eventIndex across the matching connection */
  eventIndex: Scalars['BigInt']['output'];
  /** Sum of extrinsicIndex across the matching connection */
  extrinsicIndex: Scalars['BigInt']['output'];
  /** Sum of value across the matching connection */
  value: Scalars['BigFloat']['output'];
};

export type SoraMintedVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraMintedVariancePopulationAggregates = {
  __typename?: 'SoraMintedVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type SoraMintedVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type SoraMintedVarianceSampleAggregates = {
  __typename?: 'SoraMintedVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `SoraMinted` values. */
export type SoraMintedsConnection = {
  __typename?: 'SoraMintedsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<SoraMintedAggregates>;
  /** A list of edges which contains the `SoraMinted` and cursor to aid in pagination. */
  edges: Array<SoraMintedsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<SoraMintedAggregates>>;
  /** A list of `SoraMinted` objects. */
  nodes: Array<Maybe<SoraMinted>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SoraMinted` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `SoraMinted` values. */
export type SoraMintedsConnectionGroupedAggregatesArgs = {
  groupBy: Array<SoraMintedsGroupBy>;
  having?: InputMaybe<SoraMintedsHavingInput>;
};

/** A `SoraMinted` edge in the connection. */
export type SoraMintedsEdge = {
  __typename?: 'SoraMintedsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `SoraMinted` at the end of the edge. */
  node?: Maybe<SoraMinted>;
};

/** Grouping methods for `SoraMinted` for usage during aggregation. */
export enum SoraMintedsGroupBy {
  Asset = 'ASSET',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  Network = 'NETWORK',
  RecipientId = 'RECIPIENT_ID',
  Sender = 'SENDER',
  Value = 'VALUE'
}

export type SoraMintedsHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraMintedsHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `SoraMinted` aggregates. */
export type SoraMintedsHavingInput = {
  AND?: InputMaybe<Array<SoraMintedsHavingInput>>;
  OR?: InputMaybe<Array<SoraMintedsHavingInput>>;
  average?: InputMaybe<SoraMintedsHavingAverageInput>;
  distinctCount?: InputMaybe<SoraMintedsHavingDistinctCountInput>;
  max?: InputMaybe<SoraMintedsHavingMaxInput>;
  min?: InputMaybe<SoraMintedsHavingMinInput>;
  stddevPopulation?: InputMaybe<SoraMintedsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<SoraMintedsHavingStddevSampleInput>;
  sum?: InputMaybe<SoraMintedsHavingSumInput>;
  variancePopulation?: InputMaybe<SoraMintedsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<SoraMintedsHavingVarianceSampleInput>;
};

export type SoraMintedsHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraMintedsHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraMintedsHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraMintedsHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraMintedsHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraMintedsHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type SoraMintedsHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `SoraMinted`. */
export enum SoraMintedsOrderBy {
  AssetAsc = 'ASSET_ASC',
  AssetDesc = 'ASSET_DESC',
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  EventIndexAsc = 'EVENT_INDEX_ASC',
  EventIndexDesc = 'EVENT_INDEX_DESC',
  ExtrinsicIndexAsc = 'EXTRINSIC_INDEX_ASC',
  ExtrinsicIndexDesc = 'EXTRINSIC_INDEX_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NetworkAsc = 'NETWORK_ASC',
  NetworkDesc = 'NETWORK_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RecipientIdAsc = 'RECIPIENT_ID_ASC',
  RecipientIdDesc = 'RECIPIENT_ID_DESC',
  SenderAsc = 'SENDER_ASC',
  SenderDesc = 'SENDER_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

export type Staking = Node & {
  __typename?: 'Staking';
  /** Reads a single `Block` that is related to this `Staking`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  eventIndex: Scalars['Int']['output'];
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  isPositive: Scalars['Boolean']['output'];
  method: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Account` that is related to this `Staking`. */
  user?: Maybe<Account>;
  userId: Scalars['String']['output'];
  value: Scalars['BigFloat']['output'];
};

export type StakingAggregates = {
  __typename?: 'StakingAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<StakingAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<StakingDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<StakingMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<StakingMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<StakingStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<StakingStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<StakingSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<StakingVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<StakingVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Staking` object types. */
export type StakingAggregatesFilter = {
  /** Mean average aggregate over matching `Staking` objects. */
  average?: InputMaybe<StakingAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Staking` objects. */
  distinctCount?: InputMaybe<StakingDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Staking` object to be included within the aggregate. */
  filter?: InputMaybe<StakingFilter>;
  /** Maximum aggregate over matching `Staking` objects. */
  max?: InputMaybe<StakingMaxAggregateFilter>;
  /** Minimum aggregate over matching `Staking` objects. */
  min?: InputMaybe<StakingMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Staking` objects. */
  stddevPopulation?: InputMaybe<StakingStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Staking` objects. */
  stddevSample?: InputMaybe<StakingStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Staking` objects. */
  sum?: InputMaybe<StakingSumAggregateFilter>;
  /** Population variance aggregate over matching `Staking` objects. */
  variancePopulation?: InputMaybe<StakingVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Staking` objects. */
  varianceSample?: InputMaybe<StakingVarianceSampleAggregateFilter>;
};

export type StakingAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type StakingAverageAggregates = {
  __typename?: 'StakingAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type StakingDistinctCountAggregateFilter = {
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  isPositive?: InputMaybe<BigIntFilter>;
  method?: InputMaybe<BigIntFilter>;
  userId?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigIntFilter>;
};

export type StakingDistinctCountAggregates = {
  __typename?: 'StakingDistinctCountAggregates';
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of isPositive across the matching connection */
  isPositive?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of method across the matching connection */
  method?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of userId across the matching connection */
  userId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of value across the matching connection */
  value?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Staking` object types. All fields are combined with a logical ‘and.’ */
export type StakingFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<StakingFilter>>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `eventIndex` field. */
  eventIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `extrinsicIndex` field. */
  extrinsicIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isPositive` field. */
  isPositive?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `method` field. */
  method?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<StakingFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<StakingFilter>>;
  /** Filter by the object’s `user` relation. */
  user?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<BigFloatFilter>;
};

export type StakingMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type StakingMaxAggregates = {
  __typename?: 'StakingMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type StakingMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type StakingMinAggregates = {
  __typename?: 'StakingMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type StakingStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type StakingStddevPopulationAggregates = {
  __typename?: 'StakingStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type StakingStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type StakingStddevSampleAggregates = {
  __typename?: 'StakingStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type StakingSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type StakingSumAggregates = {
  __typename?: 'StakingSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of eventIndex across the matching connection */
  eventIndex: Scalars['BigInt']['output'];
  /** Sum of extrinsicIndex across the matching connection */
  extrinsicIndex: Scalars['BigInt']['output'];
  /** Sum of value across the matching connection */
  value: Scalars['BigFloat']['output'];
};

export type StakingVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type StakingVariancePopulationAggregates = {
  __typename?: 'StakingVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type StakingVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type StakingVarianceSampleAggregates = {
  __typename?: 'StakingVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `Staking` values. */
export type StakingsConnection = {
  __typename?: 'StakingsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<StakingAggregates>;
  /** A list of edges which contains the `Staking` and cursor to aid in pagination. */
  edges: Array<StakingsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<StakingAggregates>>;
  /** A list of `Staking` objects. */
  nodes: Array<Maybe<Staking>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Staking` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Staking` values. */
export type StakingsConnectionGroupedAggregatesArgs = {
  groupBy: Array<StakingsGroupBy>;
  having?: InputMaybe<StakingsHavingInput>;
};

/** A `Staking` edge in the connection. */
export type StakingsEdge = {
  __typename?: 'StakingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Staking` at the end of the edge. */
  node?: Maybe<Staking>;
};

/** Grouping methods for `Staking` for usage during aggregation. */
export enum StakingsGroupBy {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  IsPositive = 'IS_POSITIVE',
  Method = 'METHOD',
  UserId = 'USER_ID',
  Value = 'VALUE'
}

export type StakingsHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type StakingsHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Staking` aggregates. */
export type StakingsHavingInput = {
  AND?: InputMaybe<Array<StakingsHavingInput>>;
  OR?: InputMaybe<Array<StakingsHavingInput>>;
  average?: InputMaybe<StakingsHavingAverageInput>;
  distinctCount?: InputMaybe<StakingsHavingDistinctCountInput>;
  max?: InputMaybe<StakingsHavingMaxInput>;
  min?: InputMaybe<StakingsHavingMinInput>;
  stddevPopulation?: InputMaybe<StakingsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<StakingsHavingStddevSampleInput>;
  sum?: InputMaybe<StakingsHavingSumInput>;
  variancePopulation?: InputMaybe<StakingsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<StakingsHavingVarianceSampleInput>;
};

export type StakingsHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type StakingsHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type StakingsHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type StakingsHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type StakingsHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type StakingsHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type StakingsHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `Staking`. */
export enum StakingsOrderBy {
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  EventIndexAsc = 'EVENT_INDEX_ASC',
  EventIndexDesc = 'EVENT_INDEX_DESC',
  ExtrinsicIndexAsc = 'EXTRINSIC_INDEX_ASC',
  ExtrinsicIndexDesc = 'EXTRINSIC_INDEX_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsPositiveAsc = 'IS_POSITIVE_ASC',
  IsPositiveDesc = 'IS_POSITIVE_DESC',
  MethodAsc = 'METHOD_ASC',
  MethodDesc = 'METHOD_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']['input']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /**
   * Matches the specified pattern (case-sensitive). An underscore (_) matches any
   * single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  like?: InputMaybe<Scalars['String']['input']>;
  /**
   * Matches the specified pattern (case-insensitive). An underscore (_) matches
   * any single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  likeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']['input']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']['input']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']['input']>;
  /**
   * Does not match the specified pattern (case-sensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLike?: InputMaybe<Scalars['String']['input']>;
  /**
   * Does not match the specified pattern (case-insensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLikeInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']['input']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']['input']>;
};

export type TableEstimate = {
  __typename?: 'TableEstimate';
  estimate?: Maybe<Scalars['Int']['output']>;
  table?: Maybe<Scalars['String']['output']>;
};

export type TaxPool = Node & {
  __typename?: 'TaxPool';
  /** Reads a single `Account` that is related to this `TaxPool`. */
  address?: Maybe<Account>;
  addressId: Scalars['String']['output'];
  /** Reads a single `Block` that is related to this `TaxPool`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  eventIndex: Scalars['Int']['output'];
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  value: Scalars['BigFloat']['output'];
};

export type TaxPoolAggregates = {
  __typename?: 'TaxPoolAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<TaxPoolAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<TaxPoolDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<TaxPoolMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<TaxPoolMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<TaxPoolStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<TaxPoolStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<TaxPoolSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<TaxPoolVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<TaxPoolVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `TaxPool` object types. */
export type TaxPoolAggregatesFilter = {
  /** Mean average aggregate over matching `TaxPool` objects. */
  average?: InputMaybe<TaxPoolAverageAggregateFilter>;
  /** Distinct count aggregate over matching `TaxPool` objects. */
  distinctCount?: InputMaybe<TaxPoolDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `TaxPool` object to be included within the aggregate. */
  filter?: InputMaybe<TaxPoolFilter>;
  /** Maximum aggregate over matching `TaxPool` objects. */
  max?: InputMaybe<TaxPoolMaxAggregateFilter>;
  /** Minimum aggregate over matching `TaxPool` objects. */
  min?: InputMaybe<TaxPoolMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `TaxPool` objects. */
  stddevPopulation?: InputMaybe<TaxPoolStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `TaxPool` objects. */
  stddevSample?: InputMaybe<TaxPoolStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `TaxPool` objects. */
  sum?: InputMaybe<TaxPoolSumAggregateFilter>;
  /** Population variance aggregate over matching `TaxPool` objects. */
  variancePopulation?: InputMaybe<TaxPoolVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `TaxPool` objects. */
  varianceSample?: InputMaybe<TaxPoolVarianceSampleAggregateFilter>;
};

export type TaxPoolAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxPoolAverageAggregates = {
  __typename?: 'TaxPoolAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxPoolDistinctCountAggregateFilter = {
  addressId?: InputMaybe<BigIntFilter>;
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigIntFilter>;
};

export type TaxPoolDistinctCountAggregates = {
  __typename?: 'TaxPoolDistinctCountAggregates';
  /** Distinct count of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of value across the matching connection */
  value?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `TaxPool` object types. All fields are combined with a logical ‘and.’ */
export type TaxPoolFilter = {
  /** Filter by the object’s `address` relation. */
  address?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `addressId` field. */
  addressId?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TaxPoolFilter>>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `eventIndex` field. */
  eventIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `extrinsicIndex` field. */
  extrinsicIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TaxPoolFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TaxPoolFilter>>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxPoolMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxPoolMaxAggregates = {
  __typename?: 'TaxPoolMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxPoolMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxPoolMinAggregates = {
  __typename?: 'TaxPoolMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxPoolStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxPoolStddevPopulationAggregates = {
  __typename?: 'TaxPoolStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxPoolStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxPoolStddevSampleAggregates = {
  __typename?: 'TaxPoolStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxPoolSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxPoolSumAggregates = {
  __typename?: 'TaxPoolSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of eventIndex across the matching connection */
  eventIndex: Scalars['BigInt']['output'];
  /** Sum of extrinsicIndex across the matching connection */
  extrinsicIndex: Scalars['BigInt']['output'];
  /** Sum of value across the matching connection */
  value: Scalars['BigFloat']['output'];
};

export type TaxPoolVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxPoolVariancePopulationAggregates = {
  __typename?: 'TaxPoolVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxPoolVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxPoolVarianceSampleAggregates = {
  __typename?: 'TaxPoolVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `TaxPool` values. */
export type TaxPoolsConnection = {
  __typename?: 'TaxPoolsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<TaxPoolAggregates>;
  /** A list of edges which contains the `TaxPool` and cursor to aid in pagination. */
  edges: Array<TaxPoolsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<TaxPoolAggregates>>;
  /** A list of `TaxPool` objects. */
  nodes: Array<Maybe<TaxPool>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TaxPool` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `TaxPool` values. */
export type TaxPoolsConnectionGroupedAggregatesArgs = {
  groupBy: Array<TaxPoolsGroupBy>;
  having?: InputMaybe<TaxPoolsHavingInput>;
};

/** A `TaxPool` edge in the connection. */
export type TaxPoolsEdge = {
  __typename?: 'TaxPoolsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `TaxPool` at the end of the edge. */
  node?: Maybe<TaxPool>;
};

/** Grouping methods for `TaxPool` for usage during aggregation. */
export enum TaxPoolsGroupBy {
  AddressId = 'ADDRESS_ID',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  Value = 'VALUE'
}

export type TaxPoolsHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxPoolsHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `TaxPool` aggregates. */
export type TaxPoolsHavingInput = {
  AND?: InputMaybe<Array<TaxPoolsHavingInput>>;
  OR?: InputMaybe<Array<TaxPoolsHavingInput>>;
  average?: InputMaybe<TaxPoolsHavingAverageInput>;
  distinctCount?: InputMaybe<TaxPoolsHavingDistinctCountInput>;
  max?: InputMaybe<TaxPoolsHavingMaxInput>;
  min?: InputMaybe<TaxPoolsHavingMinInput>;
  stddevPopulation?: InputMaybe<TaxPoolsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TaxPoolsHavingStddevSampleInput>;
  sum?: InputMaybe<TaxPoolsHavingSumInput>;
  variancePopulation?: InputMaybe<TaxPoolsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TaxPoolsHavingVarianceSampleInput>;
};

export type TaxPoolsHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxPoolsHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxPoolsHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxPoolsHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxPoolsHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxPoolsHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxPoolsHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `TaxPool`. */
export enum TaxPoolsOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  EventIndexAsc = 'EVENT_INDEX_ASC',
  EventIndexDesc = 'EVENT_INDEX_DESC',
  ExtrinsicIndexAsc = 'EXTRINSIC_INDEX_ASC',
  ExtrinsicIndexDesc = 'EXTRINSIC_INDEX_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

export type TaxUnPool = Node & {
  __typename?: 'TaxUnPool';
  /** Reads a single `Account` that is related to this `TaxUnPool`. */
  address?: Maybe<Account>;
  addressId: Scalars['String']['output'];
  /** Reads a single `Block` that is related to this `TaxUnPool`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  eventIndex: Scalars['Int']['output'];
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  value: Scalars['BigFloat']['output'];
};

export type TaxUnPoolAggregates = {
  __typename?: 'TaxUnPoolAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<TaxUnPoolAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<TaxUnPoolDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<TaxUnPoolMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<TaxUnPoolMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<TaxUnPoolStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<TaxUnPoolStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<TaxUnPoolSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<TaxUnPoolVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<TaxUnPoolVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `TaxUnPool` object types. */
export type TaxUnPoolAggregatesFilter = {
  /** Mean average aggregate over matching `TaxUnPool` objects. */
  average?: InputMaybe<TaxUnPoolAverageAggregateFilter>;
  /** Distinct count aggregate over matching `TaxUnPool` objects. */
  distinctCount?: InputMaybe<TaxUnPoolDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `TaxUnPool` object to be included within the aggregate. */
  filter?: InputMaybe<TaxUnPoolFilter>;
  /** Maximum aggregate over matching `TaxUnPool` objects. */
  max?: InputMaybe<TaxUnPoolMaxAggregateFilter>;
  /** Minimum aggregate over matching `TaxUnPool` objects. */
  min?: InputMaybe<TaxUnPoolMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `TaxUnPool` objects. */
  stddevPopulation?: InputMaybe<TaxUnPoolStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `TaxUnPool` objects. */
  stddevSample?: InputMaybe<TaxUnPoolStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `TaxUnPool` objects. */
  sum?: InputMaybe<TaxUnPoolSumAggregateFilter>;
  /** Population variance aggregate over matching `TaxUnPool` objects. */
  variancePopulation?: InputMaybe<TaxUnPoolVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `TaxUnPool` objects. */
  varianceSample?: InputMaybe<TaxUnPoolVarianceSampleAggregateFilter>;
};

export type TaxUnPoolAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxUnPoolAverageAggregates = {
  __typename?: 'TaxUnPoolAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxUnPoolDistinctCountAggregateFilter = {
  addressId?: InputMaybe<BigIntFilter>;
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigIntFilter>;
};

export type TaxUnPoolDistinctCountAggregates = {
  __typename?: 'TaxUnPoolDistinctCountAggregates';
  /** Distinct count of addressId across the matching connection */
  addressId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of value across the matching connection */
  value?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `TaxUnPool` object types. All fields are combined with a logical ‘and.’ */
export type TaxUnPoolFilter = {
  /** Filter by the object’s `address` relation. */
  address?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `addressId` field. */
  addressId?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TaxUnPoolFilter>>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `eventIndex` field. */
  eventIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `extrinsicIndex` field. */
  extrinsicIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TaxUnPoolFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TaxUnPoolFilter>>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxUnPoolMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxUnPoolMaxAggregates = {
  __typename?: 'TaxUnPoolMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxUnPoolMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxUnPoolMinAggregates = {
  __typename?: 'TaxUnPoolMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxUnPoolStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxUnPoolStddevPopulationAggregates = {
  __typename?: 'TaxUnPoolStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxUnPoolStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxUnPoolStddevSampleAggregates = {
  __typename?: 'TaxUnPoolStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxUnPoolSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxUnPoolSumAggregates = {
  __typename?: 'TaxUnPoolSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of eventIndex across the matching connection */
  eventIndex: Scalars['BigInt']['output'];
  /** Sum of extrinsicIndex across the matching connection */
  extrinsicIndex: Scalars['BigInt']['output'];
  /** Sum of value across the matching connection */
  value: Scalars['BigFloat']['output'];
};

export type TaxUnPoolVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxUnPoolVariancePopulationAggregates = {
  __typename?: 'TaxUnPoolVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TaxUnPoolVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TaxUnPoolVarianceSampleAggregates = {
  __typename?: 'TaxUnPoolVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `TaxUnPool` values. */
export type TaxUnPoolsConnection = {
  __typename?: 'TaxUnPoolsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<TaxUnPoolAggregates>;
  /** A list of edges which contains the `TaxUnPool` and cursor to aid in pagination. */
  edges: Array<TaxUnPoolsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<TaxUnPoolAggregates>>;
  /** A list of `TaxUnPool` objects. */
  nodes: Array<Maybe<TaxUnPool>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TaxUnPool` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `TaxUnPool` values. */
export type TaxUnPoolsConnectionGroupedAggregatesArgs = {
  groupBy: Array<TaxUnPoolsGroupBy>;
  having?: InputMaybe<TaxUnPoolsHavingInput>;
};

/** A `TaxUnPool` edge in the connection. */
export type TaxUnPoolsEdge = {
  __typename?: 'TaxUnPoolsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `TaxUnPool` at the end of the edge. */
  node?: Maybe<TaxUnPool>;
};

/** Grouping methods for `TaxUnPool` for usage during aggregation. */
export enum TaxUnPoolsGroupBy {
  AddressId = 'ADDRESS_ID',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  Value = 'VALUE'
}

export type TaxUnPoolsHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxUnPoolsHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `TaxUnPool` aggregates. */
export type TaxUnPoolsHavingInput = {
  AND?: InputMaybe<Array<TaxUnPoolsHavingInput>>;
  OR?: InputMaybe<Array<TaxUnPoolsHavingInput>>;
  average?: InputMaybe<TaxUnPoolsHavingAverageInput>;
  distinctCount?: InputMaybe<TaxUnPoolsHavingDistinctCountInput>;
  max?: InputMaybe<TaxUnPoolsHavingMaxInput>;
  min?: InputMaybe<TaxUnPoolsHavingMinInput>;
  stddevPopulation?: InputMaybe<TaxUnPoolsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TaxUnPoolsHavingStddevSampleInput>;
  sum?: InputMaybe<TaxUnPoolsHavingSumInput>;
  variancePopulation?: InputMaybe<TaxUnPoolsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TaxUnPoolsHavingVarianceSampleInput>;
};

export type TaxUnPoolsHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxUnPoolsHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxUnPoolsHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxUnPoolsHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxUnPoolsHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxUnPoolsHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TaxUnPoolsHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `TaxUnPool`. */
export enum TaxUnPoolsOrderBy {
  AddressIdAsc = 'ADDRESS_ID_ASC',
  AddressIdDesc = 'ADDRESS_ID_DESC',
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  EventIndexAsc = 'EVENT_INDEX_ASC',
  EventIndexDesc = 'EVENT_INDEX_DESC',
  ExtrinsicIndexAsc = 'EXTRINSIC_INDEX_ASC',
  ExtrinsicIndexDesc = 'EXTRINSIC_INDEX_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

export type Transfer = Node & {
  __typename?: 'Transfer';
  /** Reads a single `Block` that is related to this `Transfer`. */
  block?: Maybe<Block>;
  blockId: Scalars['String']['output'];
  blockNumber: Scalars['BigFloat']['output'];
  eventIndex: Scalars['Int']['output'];
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Reads a single `Account` that is related to this `Transfer`. */
  from?: Maybe<Account>;
  fromId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  remark?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Account` that is related to this `Transfer`. */
  to?: Maybe<Account>;
  toId: Scalars['String']['output'];
  value: Scalars['BigFloat']['output'];
};

export type TransferAggregates = {
  __typename?: 'TransferAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<TransferAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<TransferDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']['output']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<TransferMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<TransferMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<TransferStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<TransferStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<TransferSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<TransferVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<TransferVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Transfer` object types. */
export type TransferAggregatesFilter = {
  /** Mean average aggregate over matching `Transfer` objects. */
  average?: InputMaybe<TransferAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Transfer` objects. */
  distinctCount?: InputMaybe<TransferDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Transfer` object to be included within the aggregate. */
  filter?: InputMaybe<TransferFilter>;
  /** Maximum aggregate over matching `Transfer` objects. */
  max?: InputMaybe<TransferMaxAggregateFilter>;
  /** Minimum aggregate over matching `Transfer` objects. */
  min?: InputMaybe<TransferMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Transfer` objects. */
  stddevPopulation?: InputMaybe<TransferStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Transfer` objects. */
  stddevSample?: InputMaybe<TransferStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Transfer` objects. */
  sum?: InputMaybe<TransferSumAggregateFilter>;
  /** Population variance aggregate over matching `Transfer` objects. */
  variancePopulation?: InputMaybe<TransferVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Transfer` objects. */
  varianceSample?: InputMaybe<TransferVarianceSampleAggregateFilter>;
};

export type TransferAverageAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TransferAverageAggregates = {
  __typename?: 'TransferAverageAggregates';
  /** Mean average of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Mean average of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TransferDistinctCountAggregateFilter = {
  blockId?: InputMaybe<BigIntFilter>;
  blockNumber?: InputMaybe<BigIntFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  fromId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  remark?: InputMaybe<BigIntFilter>;
  toId?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigIntFilter>;
};

export type TransferDistinctCountAggregates = {
  __typename?: 'TransferDistinctCountAggregates';
  /** Distinct count of blockId across the matching connection */
  blockId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of fromId across the matching connection */
  fromId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of remark across the matching connection */
  remark?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of toId across the matching connection */
  toId?: Maybe<Scalars['BigInt']['output']>;
  /** Distinct count of value across the matching connection */
  value?: Maybe<Scalars['BigInt']['output']>;
};

/** A filter to be used against `Transfer` object types. All fields are combined with a logical ‘and.’ */
export type TransferFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<TransferFilter>>;
  /** Filter by the object’s `block` relation. */
  block?: InputMaybe<BlockFilter>;
  /** Filter by the object’s `blockId` field. */
  blockId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `eventIndex` field. */
  eventIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `extrinsicIndex` field. */
  extrinsicIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `from` relation. */
  from?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `fromId` field. */
  fromId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<TransferFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<TransferFilter>>;
  /** Filter by the object’s `remark` field. */
  remark?: InputMaybe<StringFilter>;
  /** Filter by the object’s `to` relation. */
  to?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `toId` field. */
  toId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<BigFloatFilter>;
};

export type TransferMaxAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TransferMaxAggregates = {
  __typename?: 'TransferMaxAggregates';
  /** Maximum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Maximum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Maximum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TransferMinAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<IntFilter>;
  extrinsicIndex?: InputMaybe<IntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TransferMinAggregates = {
  __typename?: 'TransferMinAggregates';
  /** Minimum of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Minimum of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
  /** Minimum of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TransferStddevPopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TransferStddevPopulationAggregates = {
  __typename?: 'TransferStddevPopulationAggregates';
  /** Population standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TransferStddevSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TransferStddevSampleAggregates = {
  __typename?: 'TransferStddevSampleAggregates';
  /** Sample standard deviation of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample standard deviation of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TransferSumAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigIntFilter>;
  extrinsicIndex?: InputMaybe<BigIntFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TransferSumAggregates = {
  __typename?: 'TransferSumAggregates';
  /** Sum of blockNumber across the matching connection */
  blockNumber: Scalars['BigFloat']['output'];
  /** Sum of eventIndex across the matching connection */
  eventIndex: Scalars['BigInt']['output'];
  /** Sum of extrinsicIndex across the matching connection */
  extrinsicIndex: Scalars['BigInt']['output'];
  /** Sum of value across the matching connection */
  value: Scalars['BigFloat']['output'];
};

export type TransferVariancePopulationAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TransferVariancePopulationAggregates = {
  __typename?: 'TransferVariancePopulationAggregates';
  /** Population variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Population variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

export type TransferVarianceSampleAggregateFilter = {
  blockNumber?: InputMaybe<BigFloatFilter>;
  eventIndex?: InputMaybe<BigFloatFilter>;
  extrinsicIndex?: InputMaybe<BigFloatFilter>;
  value?: InputMaybe<BigFloatFilter>;
};

export type TransferVarianceSampleAggregates = {
  __typename?: 'TransferVarianceSampleAggregates';
  /** Sample variance of blockNumber across the matching connection */
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of eventIndex across the matching connection */
  eventIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of extrinsicIndex across the matching connection */
  extrinsicIndex?: Maybe<Scalars['BigFloat']['output']>;
  /** Sample variance of value across the matching connection */
  value?: Maybe<Scalars['BigFloat']['output']>;
};

/** A connection to a list of `Transfer` values. */
export type TransfersConnection = {
  __typename?: 'TransfersConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<TransferAggregates>;
  /** A list of edges which contains the `Transfer` and cursor to aid in pagination. */
  edges: Array<TransfersEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<TransferAggregates>>;
  /** A list of `Transfer` objects. */
  nodes: Array<Maybe<Transfer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Transfer` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};


/** A connection to a list of `Transfer` values. */
export type TransfersConnectionGroupedAggregatesArgs = {
  groupBy: Array<TransfersGroupBy>;
  having?: InputMaybe<TransfersHavingInput>;
};

/** A `Transfer` edge in the connection. */
export type TransfersEdge = {
  __typename?: 'TransfersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Transfer` at the end of the edge. */
  node?: Maybe<Transfer>;
};

/** Grouping methods for `Transfer` for usage during aggregation. */
export enum TransfersGroupBy {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  FromId = 'FROM_ID',
  Remark = 'REMARK',
  ToId = 'TO_ID',
  Value = 'VALUE'
}

export type TransfersHavingAverageInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TransfersHavingDistinctCountInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Transfer` aggregates. */
export type TransfersHavingInput = {
  AND?: InputMaybe<Array<TransfersHavingInput>>;
  OR?: InputMaybe<Array<TransfersHavingInput>>;
  average?: InputMaybe<TransfersHavingAverageInput>;
  distinctCount?: InputMaybe<TransfersHavingDistinctCountInput>;
  max?: InputMaybe<TransfersHavingMaxInput>;
  min?: InputMaybe<TransfersHavingMinInput>;
  stddevPopulation?: InputMaybe<TransfersHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<TransfersHavingStddevSampleInput>;
  sum?: InputMaybe<TransfersHavingSumInput>;
  variancePopulation?: InputMaybe<TransfersHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<TransfersHavingVarianceSampleInput>;
};

export type TransfersHavingMaxInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TransfersHavingMinInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TransfersHavingStddevPopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TransfersHavingStddevSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TransfersHavingSumInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TransfersHavingVariancePopulationInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

export type TransfersHavingVarianceSampleInput = {
  blockNumber?: InputMaybe<HavingBigfloatFilter>;
  eventIndex?: InputMaybe<HavingIntFilter>;
  extrinsicIndex?: InputMaybe<HavingIntFilter>;
  value?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `Transfer`. */
export enum TransfersOrderBy {
  BlockIdAsc = 'BLOCK_ID_ASC',
  BlockIdDesc = 'BLOCK_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  EventIndexAsc = 'EVENT_INDEX_ASC',
  EventIndexDesc = 'EVENT_INDEX_DESC',
  ExtrinsicIndexAsc = 'EXTRINSIC_INDEX_ASC',
  ExtrinsicIndexDesc = 'EXTRINSIC_INDEX_DESC',
  FromIdAsc = 'FROM_ID_ASC',
  FromIdDesc = 'FROM_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RemarkAsc = 'REMARK_ASC',
  RemarkDesc = 'REMARK_DESC',
  ToIdAsc = 'TO_ID_ASC',
  ToIdDesc = 'TO_ID_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

export type _Metadata = {
  __typename?: '_Metadata';
  chain?: Maybe<Scalars['String']['output']>;
  deployments?: Maybe<Scalars['JSON']['output']>;
  dynamicDatasources?: Maybe<Scalars['String']['output']>;
  evmChainId?: Maybe<Scalars['String']['output']>;
  genesisHash?: Maybe<Scalars['String']['output']>;
  indexerHealthy?: Maybe<Scalars['Boolean']['output']>;
  indexerNodeVersion?: Maybe<Scalars['String']['output']>;
  lastCreatedPoiHeight?: Maybe<Scalars['Int']['output']>;
  lastFinalizedVerifiedHeight?: Maybe<Scalars['Int']['output']>;
  lastProcessedHeight?: Maybe<Scalars['Int']['output']>;
  lastProcessedTimestamp?: Maybe<Scalars['Date']['output']>;
  latestSyncedPoiHeight?: Maybe<Scalars['Int']['output']>;
  queryNodeVersion?: Maybe<Scalars['String']['output']>;
  rowCountEstimate?: Maybe<Array<Maybe<TableEstimate>>>;
  specName?: Maybe<Scalars['String']['output']>;
  startHeight?: Maybe<Scalars['Int']['output']>;
  targetHeight?: Maybe<Scalars['Int']['output']>;
  unfinalizedBlocks?: Maybe<Scalars['String']['output']>;
};

export type _Metadatas = {
  __typename?: '_Metadatas';
  nodes: Array<Maybe<_Metadata>>;
  totalCount: Scalars['Int']['output'];
};

export enum Accounts_Distinct_Enum {
  Id = 'ID'
}

export enum Asset_Transfers_Distinct_Enum {
  Asset = 'ASSET',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  FromId = 'FROM_ID',
  Id = 'ID',
  Remark = 'REMARK',
  ToId = 'TO_ID',
  Value = 'VALUE'
}

export enum Blocks_Distinct_Enum {
  ExtrinsicsRoot = 'EXTRINSICS_ROOT',
  Hash = 'HASH',
  Id = 'ID',
  Number = 'NUMBER',
  ParentHash = 'PARENT_HASH',
  SpecVersion = 'SPEC_VERSION',
  StateRoot = 'STATE_ROOT',
  Timestamp = 'TIMESTAMP'
}

export enum Bridge_Receipt_Approveds_Distinct_Enum {
  EventId = 'EVENT_ID',
  Id = 'ID',
  ReceiptId = 'RECEIPT_ID'
}

export enum Bridge_Receipt_Processeds_Distinct_Enum {
  EventId = 'EVENT_ID',
  Id = 'ID',
  ReceiptId = 'RECEIPT_ID'
}

export enum Bridge_Receipts_Distinct_Enum {
  Amount = 'AMOUNT',
  EthRecipientId = 'ETH_RECIPIENT_ID',
  EventId = 'EVENT_ID',
  FromId = 'FROM_ID',
  Id = 'ID',
  ReceiptId = 'RECEIPT_ID'
}

export enum Bridge_Votes_Distinct_Enum {
  EthBlockNumber = 'ETH_BLOCK_NUMBER',
  EventId = 'EVENT_ID',
  Id = 'ID',
  ReceiptId = 'RECEIPT_ID',
  RelayId = 'RELAY_ID'
}

export enum Congress_Motions_Distinct_Enum {
  BlockNumber = 'BLOCK_NUMBER',
  Call = 'CALL',
  ExecutionEventId = 'EXECUTION_EVENT_ID',
  ExtrinsicId = 'EXTRINSIC_ID',
  Hash = 'HASH',
  Id = 'ID',
  RawCall = 'RAW_CALL',
  Threshold = 'THRESHOLD'
}

export enum Days_Distinct_Enum {
  Date = 'DATE',
  Events = 'EVENTS',
  Extrinsics = 'EXTRINSICS',
  Id = 'ID',
  Month = 'MONTH',
  TransferAmount = 'TRANSFER_AMOUNT',
  TransferAssetAmount = 'TRANSFER_ASSET_AMOUNT',
  TransferAssetCount = 'TRANSFER_ASSET_COUNT',
  TransferCount = 'TRANSFER_COUNT',
  TransferMeritAmount = 'TRANSFER_MERIT_AMOUNT',
  TransferMeritCount = 'TRANSFER_MERIT_COUNT',
  Year = 'YEAR'
}

export enum Eth_Accounts_Distinct_Enum {
  Id = 'ID'
}

export enum Events_Distinct_Enum {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  Data = 'DATA',
  ExtrinsicId = 'EXTRINSIC_ID',
  Id = 'ID',
  Index = 'INDEX',
  Method = 'METHOD',
  Section = 'SECTION'
}

export enum Extrinsics_Distinct_Enum {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  Hash = 'HASH',
  Id = 'ID',
  Index = 'INDEX',
  IsSigned = 'IS_SIGNED',
  Method = 'METHOD',
  Section = 'SECTION',
  SignerId = 'SIGNER_ID',
  Success = 'SUCCESS'
}

export enum Identities_Distinct_Enum {
  Id = 'ID',
  IsConfirmed = 'IS_CONFIRMED',
  Name = 'NAME'
}

export enum Merits_Distinct_Enum {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  FromId = 'FROM_ID',
  Id = 'ID',
  Remark = 'REMARK',
  ToId = 'TO_ID',
  Value = 'VALUE'
}

export enum Sora_Burneds_Distinct_Enum {
  Asset = 'ASSET',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  Id = 'ID',
  Network = 'NETWORK',
  Recipient = 'RECIPIENT',
  SenderId = 'SENDER_ID',
  Value = 'VALUE'
}

export enum Sora_Minteds_Distinct_Enum {
  Asset = 'ASSET',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  Id = 'ID',
  Network = 'NETWORK',
  RecipientId = 'RECIPIENT_ID',
  Sender = 'SENDER',
  Value = 'VALUE'
}

export enum Stakings_Distinct_Enum {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  Id = 'ID',
  IsPositive = 'IS_POSITIVE',
  Method = 'METHOD',
  UserId = 'USER_ID',
  Value = 'VALUE'
}

export enum Tax_Pools_Distinct_Enum {
  AddressId = 'ADDRESS_ID',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  Id = 'ID',
  Value = 'VALUE'
}

export enum Tax_Un_Pools_Distinct_Enum {
  AddressId = 'ADDRESS_ID',
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  Id = 'ID',
  Value = 'VALUE'
}

export enum Transfers_Distinct_Enum {
  BlockId = 'BLOCK_ID',
  BlockNumber = 'BLOCK_NUMBER',
  EventIndex = 'EVENT_INDEX',
  ExtrinsicIndex = 'EXTRINSIC_INDEX',
  FromId = 'FROM_ID',
  Id = 'ID',
  Remark = 'REMARK',
  ToId = 'TO_ID',
  Value = 'VALUE'
}

export type HistoryCombinedQueryQueryVariables = Exact<{
  orderByTransfers?: InputMaybe<Array<TransfersOrderBy> | TransfersOrderBy>;
  filterTransfers?: InputMaybe<TransferFilter>;
  orderByMerits?: InputMaybe<Array<MeritsOrderBy> | MeritsOrderBy>;
  filterMerits?: InputMaybe<MeritFilter>;
  orderByAssetTransfers?: InputMaybe<Array<AssetTransfersOrderBy> | AssetTransfersOrderBy>;
  filterAssetTransfers?: InputMaybe<AssetTransferFilter>;
  orderByStakings?: InputMaybe<Array<StakingsOrderBy> | StakingsOrderBy>;
  filterStakings?: InputMaybe<StakingFilter>;
  filterSoraMinted?: InputMaybe<SoraMintedFilter>;
  filterSoraBurned?: InputMaybe<SoraBurnedFilter>;
}>;


export type HistoryCombinedQueryQuery = { __typename?: 'Query', transfers?: { __typename?: 'TransfersConnection', nodes: Array<{ __typename?: 'Transfer', id: string, fromId: string, toId: string, value: any, extrinsicIndex?: number | null, eventIndex: number, type: 'Transfer', block?: { __typename?: 'Block', id: string, number: any, timestamp?: any | null } | null } | null> } | null, merits?: { __typename?: 'MeritsConnection', nodes: Array<{ __typename?: 'Merit', id: string, fromId: string, toId: string, value: any, extrinsicIndex?: number | null, eventIndex: number, type: 'Merit', block?: { __typename?: 'Block', id: string, number: any, timestamp?: any | null } | null } | null> } | null, assetTransfers?: { __typename?: 'AssetTransfersConnection', nodes: Array<{ __typename?: 'AssetTransfer', toId: string, fromId: string, asset: any, value: any, type: 'AssetTransfer', block?: { __typename?: 'Block', id: string, number: any, timestamp?: any | null } | null } | null> } | null, stakings?: { __typename?: 'StakingsConnection', nodes: Array<{ __typename?: 'Staking', isPositive: boolean, userId: string, value: any, blockId: string, blockNumber: any, extrinsicIndex?: number | null, method: string, type: 'Staking', block?: { __typename?: 'Block', id: string, number: any, timestamp?: any | null } | null } | null> } | null, soraMinteds?: { __typename?: 'SoraMintedsConnection', nodes: Array<{ __typename?: 'SoraMinted', id: string, sender: string, recipientId: string, value: any, asset: string, extrinsicIndex?: number | null, block?: { __typename?: 'Block', id: string, number: any, timestamp?: any | null } | null } | null> } | null, soraBurneds?: { __typename?: 'SoraBurnedsConnection', nodes: Array<{ __typename?: 'SoraBurned', id: string, senderId: string, recipient: string, value: any, asset: string, extrinsicIndex?: number | null, block?: { __typename?: 'Block', id: string, number: any, timestamp?: any | null } | null } | null> } | null };

export type GetIdentitiesQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type GetIdentitiesQuery = { __typename?: 'Query', identities?: { __typename?: 'IdentitiesConnection', nodes: Array<{ __typename?: 'Identity', id: string, name?: string | null, isConfirmed: boolean } | null> } | null };


export const HistoryCombinedQueryDocument = gql`
    query HistoryCombinedQuery($orderByTransfers: [TransfersOrderBy!], $filterTransfers: TransferFilter, $orderByMerits: [MeritsOrderBy!], $filterMerits: MeritFilter, $orderByAssetTransfers: [AssetTransfersOrderBy!], $filterAssetTransfers: AssetTransferFilter, $orderByStakings: [StakingsOrderBy!], $filterStakings: StakingFilter, $filterSoraMinted: SoraMintedFilter, $filterSoraBurned: SoraBurnedFilter) {
  transfers(orderBy: $orderByTransfers, filter: $filterTransfers) {
    nodes {
      type: __typename
      id
      fromId
      toId
      value
      extrinsicIndex
      eventIndex
      block {
        id
        number
        timestamp
      }
    }
  }
  merits(orderBy: $orderByMerits, filter: $filterMerits) {
    nodes {
      type: __typename
      id
      fromId
      toId
      value
      extrinsicIndex
      eventIndex
      block {
        id
        number
        timestamp
      }
    }
  }
  assetTransfers(orderBy: $orderByAssetTransfers, filter: $filterAssetTransfers) {
    nodes {
      type: __typename
      toId
      fromId
      asset
      value
      block {
        id
        number
        timestamp
      }
    }
  }
  stakings(orderBy: $orderByStakings, filter: $filterStakings) {
    nodes {
      type: __typename
      isPositive
      userId
      value
      blockId
      blockNumber
      extrinsicIndex
      method
      block {
        id
        number
        timestamp
      }
    }
  }
  soraMinteds(filter: $filterSoraMinted) {
    nodes {
      id
      sender
      recipientId
      value
      asset
      block {
        id
        number
        timestamp
      }
      extrinsicIndex
    }
  }
  soraBurneds(filter: $filterSoraBurned) {
    nodes {
      id
      senderId
      recipient
      value
      asset
      block {
        id
        number
        timestamp
      }
      extrinsicIndex
    }
  }
}
    `;
export const GetIdentitiesDocument = gql`
    query GetIdentities($name: String!) {
  identities(
    first: 10
    filter: {or: [{name: {includesInsensitive: $name}}, {id: {includesInsensitive: $name}}]}
  ) {
    nodes {
      id
      name
      isConfirmed
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    HistoryCombinedQuery(variables?: HistoryCombinedQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<HistoryCombinedQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HistoryCombinedQueryQuery>({ document: HistoryCombinedQueryDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'HistoryCombinedQuery', 'query', variables);
    },
    GetIdentities(variables: GetIdentitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetIdentitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetIdentitiesQuery>({ document: GetIdentitiesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetIdentities', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;