/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a DateTime. The DateTime is serialized as an RFC 3339 quoted string */
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values in string format to prevent lossy conversions */
  Long: any;
  ObjectId: any;
};

export type Account = {
  __typename?: 'Account';
  balance?: Maybe<Scalars['Float']>;
  countzkAppAccounts?: Maybe<Scalars['Int']>;
  delegate?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  permissions?: Maybe<AccountPermission>;
  public_key?: Maybe<Scalars['String']>;
  receipt_chain_hash?: Maybe<Scalars['String']>;
  timing?: Maybe<AccountTiming>;
  token?: Maybe<Scalars['Int']>;
  token_symbol?: Maybe<Scalars['String']>;
  voting_for?: Maybe<Scalars['String']>;
  zkapp?: Maybe<AccountZkapp>;
  zkapp_uri?: Maybe<Scalars['String']>;
};

export type AccountInsertInput = {
  balance?: InputMaybe<Scalars['Float']>;
  delegate?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['Int']>;
  permissions?: InputMaybe<AccountPermissionInsertInput>;
  public_key?: InputMaybe<Scalars['String']>;
  receipt_chain_hash?: InputMaybe<Scalars['String']>;
  timing?: InputMaybe<AccountTimingInsertInput>;
  token?: InputMaybe<Scalars['Int']>;
  token_symbol?: InputMaybe<Scalars['String']>;
  voting_for?: InputMaybe<Scalars['String']>;
  zkapp?: InputMaybe<AccountZkappInsertInput>;
  zkapp_uri?: InputMaybe<Scalars['String']>;
};

export type AccountPermission = {
  __typename?: 'AccountPermission';
  edit_sequence_state?: Maybe<Scalars['String']>;
  edit_state?: Maybe<Scalars['String']>;
  increment_nonce?: Maybe<Scalars['String']>;
  send?: Maybe<Scalars['String']>;
  set_delegate?: Maybe<Scalars['String']>;
  set_permissions?: Maybe<Scalars['String']>;
  set_token_symbol?: Maybe<Scalars['String']>;
  set_verification_key?: Maybe<Scalars['String']>;
  set_voting_for?: Maybe<Scalars['String']>;
  set_zkapp_uri?: Maybe<Scalars['String']>;
};

export type AccountPermissionInsertInput = {
  edit_sequence_state?: InputMaybe<Scalars['String']>;
  edit_state?: InputMaybe<Scalars['String']>;
  increment_nonce?: InputMaybe<Scalars['String']>;
  send?: InputMaybe<Scalars['String']>;
  set_delegate?: InputMaybe<Scalars['String']>;
  set_permissions?: InputMaybe<Scalars['String']>;
  set_token_symbol?: InputMaybe<Scalars['String']>;
  set_verification_key?: InputMaybe<Scalars['String']>;
  set_voting_for?: InputMaybe<Scalars['String']>;
  set_zkapp_uri?: InputMaybe<Scalars['String']>;
};

export type AccountPermissionQueryInput = {
  AND?: InputMaybe<Array<AccountPermissionQueryInput>>;
  OR?: InputMaybe<Array<AccountPermissionQueryInput>>;
  edit_sequence_state?: InputMaybe<Scalars['String']>;
  edit_sequence_state_exists?: InputMaybe<Scalars['Boolean']>;
  edit_sequence_state_gt?: InputMaybe<Scalars['String']>;
  edit_sequence_state_gte?: InputMaybe<Scalars['String']>;
  edit_sequence_state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  edit_sequence_state_lt?: InputMaybe<Scalars['String']>;
  edit_sequence_state_lte?: InputMaybe<Scalars['String']>;
  edit_sequence_state_ne?: InputMaybe<Scalars['String']>;
  edit_sequence_state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  edit_state?: InputMaybe<Scalars['String']>;
  edit_state_exists?: InputMaybe<Scalars['Boolean']>;
  edit_state_gt?: InputMaybe<Scalars['String']>;
  edit_state_gte?: InputMaybe<Scalars['String']>;
  edit_state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  edit_state_lt?: InputMaybe<Scalars['String']>;
  edit_state_lte?: InputMaybe<Scalars['String']>;
  edit_state_ne?: InputMaybe<Scalars['String']>;
  edit_state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  increment_nonce?: InputMaybe<Scalars['String']>;
  increment_nonce_exists?: InputMaybe<Scalars['Boolean']>;
  increment_nonce_gt?: InputMaybe<Scalars['String']>;
  increment_nonce_gte?: InputMaybe<Scalars['String']>;
  increment_nonce_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  increment_nonce_lt?: InputMaybe<Scalars['String']>;
  increment_nonce_lte?: InputMaybe<Scalars['String']>;
  increment_nonce_ne?: InputMaybe<Scalars['String']>;
  increment_nonce_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send?: InputMaybe<Scalars['String']>;
  send_exists?: InputMaybe<Scalars['Boolean']>;
  send_gt?: InputMaybe<Scalars['String']>;
  send_gte?: InputMaybe<Scalars['String']>;
  send_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send_lt?: InputMaybe<Scalars['String']>;
  send_lte?: InputMaybe<Scalars['String']>;
  send_ne?: InputMaybe<Scalars['String']>;
  send_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_delegate?: InputMaybe<Scalars['String']>;
  set_delegate_exists?: InputMaybe<Scalars['Boolean']>;
  set_delegate_gt?: InputMaybe<Scalars['String']>;
  set_delegate_gte?: InputMaybe<Scalars['String']>;
  set_delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_delegate_lt?: InputMaybe<Scalars['String']>;
  set_delegate_lte?: InputMaybe<Scalars['String']>;
  set_delegate_ne?: InputMaybe<Scalars['String']>;
  set_delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_permissions?: InputMaybe<Scalars['String']>;
  set_permissions_exists?: InputMaybe<Scalars['Boolean']>;
  set_permissions_gt?: InputMaybe<Scalars['String']>;
  set_permissions_gte?: InputMaybe<Scalars['String']>;
  set_permissions_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_permissions_lt?: InputMaybe<Scalars['String']>;
  set_permissions_lte?: InputMaybe<Scalars['String']>;
  set_permissions_ne?: InputMaybe<Scalars['String']>;
  set_permissions_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_token_symbol?: InputMaybe<Scalars['String']>;
  set_token_symbol_exists?: InputMaybe<Scalars['Boolean']>;
  set_token_symbol_gt?: InputMaybe<Scalars['String']>;
  set_token_symbol_gte?: InputMaybe<Scalars['String']>;
  set_token_symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_token_symbol_lt?: InputMaybe<Scalars['String']>;
  set_token_symbol_lte?: InputMaybe<Scalars['String']>;
  set_token_symbol_ne?: InputMaybe<Scalars['String']>;
  set_token_symbol_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_verification_key?: InputMaybe<Scalars['String']>;
  set_verification_key_exists?: InputMaybe<Scalars['Boolean']>;
  set_verification_key_gt?: InputMaybe<Scalars['String']>;
  set_verification_key_gte?: InputMaybe<Scalars['String']>;
  set_verification_key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_verification_key_lt?: InputMaybe<Scalars['String']>;
  set_verification_key_lte?: InputMaybe<Scalars['String']>;
  set_verification_key_ne?: InputMaybe<Scalars['String']>;
  set_verification_key_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_voting_for?: InputMaybe<Scalars['String']>;
  set_voting_for_exists?: InputMaybe<Scalars['Boolean']>;
  set_voting_for_gt?: InputMaybe<Scalars['String']>;
  set_voting_for_gte?: InputMaybe<Scalars['String']>;
  set_voting_for_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_voting_for_lt?: InputMaybe<Scalars['String']>;
  set_voting_for_lte?: InputMaybe<Scalars['String']>;
  set_voting_for_ne?: InputMaybe<Scalars['String']>;
  set_voting_for_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_zkapp_uri?: InputMaybe<Scalars['String']>;
  set_zkapp_uri_exists?: InputMaybe<Scalars['Boolean']>;
  set_zkapp_uri_gt?: InputMaybe<Scalars['String']>;
  set_zkapp_uri_gte?: InputMaybe<Scalars['String']>;
  set_zkapp_uri_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_zkapp_uri_lt?: InputMaybe<Scalars['String']>;
  set_zkapp_uri_lte?: InputMaybe<Scalars['String']>;
  set_zkapp_uri_ne?: InputMaybe<Scalars['String']>;
  set_zkapp_uri_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AccountPermissionUpdateInput = {
  edit_sequence_state?: InputMaybe<Scalars['String']>;
  edit_sequence_state_unset?: InputMaybe<Scalars['Boolean']>;
  edit_state?: InputMaybe<Scalars['String']>;
  edit_state_unset?: InputMaybe<Scalars['Boolean']>;
  increment_nonce?: InputMaybe<Scalars['String']>;
  increment_nonce_unset?: InputMaybe<Scalars['Boolean']>;
  send?: InputMaybe<Scalars['String']>;
  send_unset?: InputMaybe<Scalars['Boolean']>;
  set_delegate?: InputMaybe<Scalars['String']>;
  set_delegate_unset?: InputMaybe<Scalars['Boolean']>;
  set_permissions?: InputMaybe<Scalars['String']>;
  set_permissions_unset?: InputMaybe<Scalars['Boolean']>;
  set_token_symbol?: InputMaybe<Scalars['String']>;
  set_token_symbol_unset?: InputMaybe<Scalars['Boolean']>;
  set_verification_key?: InputMaybe<Scalars['String']>;
  set_verification_key_unset?: InputMaybe<Scalars['Boolean']>;
  set_voting_for?: InputMaybe<Scalars['String']>;
  set_voting_for_unset?: InputMaybe<Scalars['Boolean']>;
  set_zkapp_uri?: InputMaybe<Scalars['String']>;
  set_zkapp_uri_unset?: InputMaybe<Scalars['Boolean']>;
};

export type AccountQueryInput = {
  AND?: InputMaybe<Array<AccountQueryInput>>;
  OR?: InputMaybe<Array<AccountQueryInput>>;
  balance?: InputMaybe<Scalars['Float']>;
  balance_exists?: InputMaybe<Scalars['Boolean']>;
  balance_gt?: InputMaybe<Scalars['Float']>;
  balance_gte?: InputMaybe<Scalars['Float']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  balance_lt?: InputMaybe<Scalars['Float']>;
  balance_lte?: InputMaybe<Scalars['Float']>;
  balance_ne?: InputMaybe<Scalars['Float']>;
  balance_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_exists?: InputMaybe<Scalars['Boolean']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_ne?: InputMaybe<Scalars['String']>;
  delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_exists?: InputMaybe<Scalars['Boolean']>;
  nonce_gt?: InputMaybe<Scalars['Int']>;
  nonce_gte?: InputMaybe<Scalars['Int']>;
  nonce_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nonce_lt?: InputMaybe<Scalars['Int']>;
  nonce_lte?: InputMaybe<Scalars['Int']>;
  nonce_ne?: InputMaybe<Scalars['Int']>;
  nonce_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  permissions?: InputMaybe<AccountPermissionQueryInput>;
  permissions_exists?: InputMaybe<Scalars['Boolean']>;
  public_key?: InputMaybe<Scalars['String']>;
  public_key_exists?: InputMaybe<Scalars['Boolean']>;
  public_key_gt?: InputMaybe<Scalars['String']>;
  public_key_gte?: InputMaybe<Scalars['String']>;
  public_key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  public_key_lt?: InputMaybe<Scalars['String']>;
  public_key_lte?: InputMaybe<Scalars['String']>;
  public_key_ne?: InputMaybe<Scalars['String']>;
  public_key_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receipt_chain_hash?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_exists?: InputMaybe<Scalars['Boolean']>;
  receipt_chain_hash_gt?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_gte?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receipt_chain_hash_lt?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_lte?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_ne?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timing?: InputMaybe<AccountTimingQueryInput>;
  timing_exists?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['Int']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['Int']>;
  token_gte?: InputMaybe<Scalars['Int']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  token_lt?: InputMaybe<Scalars['Int']>;
  token_lte?: InputMaybe<Scalars['Int']>;
  token_ne?: InputMaybe<Scalars['Int']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  token_symbol?: InputMaybe<Scalars['String']>;
  token_symbol_exists?: InputMaybe<Scalars['Boolean']>;
  token_symbol_gt?: InputMaybe<Scalars['String']>;
  token_symbol_gte?: InputMaybe<Scalars['String']>;
  token_symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_symbol_lt?: InputMaybe<Scalars['String']>;
  token_symbol_lte?: InputMaybe<Scalars['String']>;
  token_symbol_ne?: InputMaybe<Scalars['String']>;
  token_symbol_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  voting_for?: InputMaybe<Scalars['String']>;
  voting_for_exists?: InputMaybe<Scalars['Boolean']>;
  voting_for_gt?: InputMaybe<Scalars['String']>;
  voting_for_gte?: InputMaybe<Scalars['String']>;
  voting_for_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  voting_for_lt?: InputMaybe<Scalars['String']>;
  voting_for_lte?: InputMaybe<Scalars['String']>;
  voting_for_ne?: InputMaybe<Scalars['String']>;
  voting_for_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkapp?: InputMaybe<AccountZkappQueryInput>;
  zkapp_exists?: InputMaybe<Scalars['Boolean']>;
  zkapp_uri?: InputMaybe<Scalars['String']>;
  zkapp_uri_exists?: InputMaybe<Scalars['Boolean']>;
  zkapp_uri_gt?: InputMaybe<Scalars['String']>;
  zkapp_uri_gte?: InputMaybe<Scalars['String']>;
  zkapp_uri_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkapp_uri_lt?: InputMaybe<Scalars['String']>;
  zkapp_uri_lte?: InputMaybe<Scalars['String']>;
  zkapp_uri_ne?: InputMaybe<Scalars['String']>;
  zkapp_uri_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum AccountSortByInput {
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  DelegateAsc = 'DELEGATE_ASC',
  DelegateDesc = 'DELEGATE_DESC',
  NonceAsc = 'NONCE_ASC',
  NonceDesc = 'NONCE_DESC',
  PublicKeyAsc = 'PUBLIC_KEY_ASC',
  PublicKeyDesc = 'PUBLIC_KEY_DESC',
  ReceiptChainHashAsc = 'RECEIPT_CHAIN_HASH_ASC',
  ReceiptChainHashDesc = 'RECEIPT_CHAIN_HASH_DESC',
  TokenAsc = 'TOKEN_ASC',
  TokenDesc = 'TOKEN_DESC',
  TokenSymbolAsc = 'TOKEN_SYMBOL_ASC',
  TokenSymbolDesc = 'TOKEN_SYMBOL_DESC',
  VotingForAsc = 'VOTING_FOR_ASC',
  VotingForDesc = 'VOTING_FOR_DESC',
  ZkappUriAsc = 'ZKAPP_URI_ASC',
  ZkappUriDesc = 'ZKAPP_URI_DESC'
}

export type AccountTiming = {
  __typename?: 'AccountTiming';
  cliff_amount?: Maybe<Scalars['Float']>;
  cliff_time?: Maybe<Scalars['Int']>;
  initial_minimum_balance?: Maybe<Scalars['Float']>;
  vesting_increment?: Maybe<Scalars['Float']>;
  vesting_period?: Maybe<Scalars['Int']>;
};

export type AccountTimingInsertInput = {
  cliff_amount?: InputMaybe<Scalars['Float']>;
  cliff_time?: InputMaybe<Scalars['Int']>;
  initial_minimum_balance?: InputMaybe<Scalars['Float']>;
  vesting_increment?: InputMaybe<Scalars['Float']>;
  vesting_period?: InputMaybe<Scalars['Int']>;
};

export type AccountTimingQueryInput = {
  AND?: InputMaybe<Array<AccountTimingQueryInput>>;
  OR?: InputMaybe<Array<AccountTimingQueryInput>>;
  cliff_amount?: InputMaybe<Scalars['Float']>;
  cliff_amount_exists?: InputMaybe<Scalars['Boolean']>;
  cliff_amount_gt?: InputMaybe<Scalars['Float']>;
  cliff_amount_gte?: InputMaybe<Scalars['Float']>;
  cliff_amount_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cliff_amount_lt?: InputMaybe<Scalars['Float']>;
  cliff_amount_lte?: InputMaybe<Scalars['Float']>;
  cliff_amount_ne?: InputMaybe<Scalars['Float']>;
  cliff_amount_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cliff_time?: InputMaybe<Scalars['Int']>;
  cliff_time_exists?: InputMaybe<Scalars['Boolean']>;
  cliff_time_gt?: InputMaybe<Scalars['Int']>;
  cliff_time_gte?: InputMaybe<Scalars['Int']>;
  cliff_time_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cliff_time_lt?: InputMaybe<Scalars['Int']>;
  cliff_time_lte?: InputMaybe<Scalars['Int']>;
  cliff_time_ne?: InputMaybe<Scalars['Int']>;
  cliff_time_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  initial_minimum_balance?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_exists?: InputMaybe<Scalars['Boolean']>;
  initial_minimum_balance_gt?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_gte?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  initial_minimum_balance_lt?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_lte?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_ne?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vesting_increment?: InputMaybe<Scalars['Float']>;
  vesting_increment_exists?: InputMaybe<Scalars['Boolean']>;
  vesting_increment_gt?: InputMaybe<Scalars['Float']>;
  vesting_increment_gte?: InputMaybe<Scalars['Float']>;
  vesting_increment_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vesting_increment_lt?: InputMaybe<Scalars['Float']>;
  vesting_increment_lte?: InputMaybe<Scalars['Float']>;
  vesting_increment_ne?: InputMaybe<Scalars['Float']>;
  vesting_increment_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vesting_period?: InputMaybe<Scalars['Int']>;
  vesting_period_exists?: InputMaybe<Scalars['Boolean']>;
  vesting_period_gt?: InputMaybe<Scalars['Int']>;
  vesting_period_gte?: InputMaybe<Scalars['Int']>;
  vesting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  vesting_period_lt?: InputMaybe<Scalars['Int']>;
  vesting_period_lte?: InputMaybe<Scalars['Int']>;
  vesting_period_ne?: InputMaybe<Scalars['Int']>;
  vesting_period_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AccountTimingUpdateInput = {
  cliff_amount?: InputMaybe<Scalars['Float']>;
  cliff_amount_inc?: InputMaybe<Scalars['Float']>;
  cliff_amount_unset?: InputMaybe<Scalars['Boolean']>;
  cliff_time?: InputMaybe<Scalars['Int']>;
  cliff_time_inc?: InputMaybe<Scalars['Int']>;
  cliff_time_unset?: InputMaybe<Scalars['Boolean']>;
  initial_minimum_balance?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_inc?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_unset?: InputMaybe<Scalars['Boolean']>;
  vesting_increment?: InputMaybe<Scalars['Float']>;
  vesting_increment_inc?: InputMaybe<Scalars['Float']>;
  vesting_increment_unset?: InputMaybe<Scalars['Boolean']>;
  vesting_period?: InputMaybe<Scalars['Int']>;
  vesting_period_inc?: InputMaybe<Scalars['Int']>;
  vesting_period_unset?: InputMaybe<Scalars['Boolean']>;
};

export type AccountUpdateInput = {
  balance?: InputMaybe<Scalars['Float']>;
  balance_inc?: InputMaybe<Scalars['Float']>;
  balance_unset?: InputMaybe<Scalars['Boolean']>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_unset?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_inc?: InputMaybe<Scalars['Int']>;
  nonce_unset?: InputMaybe<Scalars['Boolean']>;
  permissions?: InputMaybe<AccountPermissionUpdateInput>;
  permissions_unset?: InputMaybe<Scalars['Boolean']>;
  public_key?: InputMaybe<Scalars['String']>;
  public_key_unset?: InputMaybe<Scalars['Boolean']>;
  receipt_chain_hash?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_unset?: InputMaybe<Scalars['Boolean']>;
  timing?: InputMaybe<AccountTimingUpdateInput>;
  timing_unset?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['Int']>;
  token_inc?: InputMaybe<Scalars['Int']>;
  token_symbol?: InputMaybe<Scalars['String']>;
  token_symbol_unset?: InputMaybe<Scalars['Boolean']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
  voting_for?: InputMaybe<Scalars['String']>;
  voting_for_unset?: InputMaybe<Scalars['Boolean']>;
  zkapp?: InputMaybe<AccountZkappUpdateInput>;
  zkapp_unset?: InputMaybe<Scalars['Boolean']>;
  zkapp_uri?: InputMaybe<Scalars['String']>;
  zkapp_uri_unset?: InputMaybe<Scalars['Boolean']>;
};

export type AccountZkapp = {
  __typename?: 'AccountZkapp';
  last_sequence_slot?: Maybe<Scalars['Int']>;
  proved_state?: Maybe<Scalars['Boolean']>;
  sequence_state?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Array<Maybe<Scalars['String']>>>;
  verification_key?: Maybe<Scalars['String']>;
  zkapp_version?: Maybe<Scalars['String']>;
};

export type AccountZkappInsertInput = {
  last_sequence_slot?: InputMaybe<Scalars['Int']>;
  proved_state?: InputMaybe<Scalars['Boolean']>;
  sequence_state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  verification_key?: InputMaybe<Scalars['String']>;
  zkapp_version?: InputMaybe<Scalars['String']>;
};

export type AccountZkappQueryInput = {
  AND?: InputMaybe<Array<AccountZkappQueryInput>>;
  OR?: InputMaybe<Array<AccountZkappQueryInput>>;
  last_sequence_slot?: InputMaybe<Scalars['Int']>;
  last_sequence_slot_exists?: InputMaybe<Scalars['Boolean']>;
  last_sequence_slot_gt?: InputMaybe<Scalars['Int']>;
  last_sequence_slot_gte?: InputMaybe<Scalars['Int']>;
  last_sequence_slot_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  last_sequence_slot_lt?: InputMaybe<Scalars['Int']>;
  last_sequence_slot_lte?: InputMaybe<Scalars['Int']>;
  last_sequence_slot_ne?: InputMaybe<Scalars['Int']>;
  last_sequence_slot_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  proved_state?: InputMaybe<Scalars['Boolean']>;
  proved_state_exists?: InputMaybe<Scalars['Boolean']>;
  proved_state_ne?: InputMaybe<Scalars['Boolean']>;
  sequence_state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sequence_state_exists?: InputMaybe<Scalars['Boolean']>;
  sequence_state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sequence_state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  verification_key?: InputMaybe<Scalars['String']>;
  verification_key_exists?: InputMaybe<Scalars['Boolean']>;
  verification_key_gt?: InputMaybe<Scalars['String']>;
  verification_key_gte?: InputMaybe<Scalars['String']>;
  verification_key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  verification_key_lt?: InputMaybe<Scalars['String']>;
  verification_key_lte?: InputMaybe<Scalars['String']>;
  verification_key_ne?: InputMaybe<Scalars['String']>;
  verification_key_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkapp_version?: InputMaybe<Scalars['String']>;
  zkapp_version_exists?: InputMaybe<Scalars['Boolean']>;
  zkapp_version_gt?: InputMaybe<Scalars['String']>;
  zkapp_version_gte?: InputMaybe<Scalars['String']>;
  zkapp_version_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkapp_version_lt?: InputMaybe<Scalars['String']>;
  zkapp_version_lte?: InputMaybe<Scalars['String']>;
  zkapp_version_ne?: InputMaybe<Scalars['String']>;
  zkapp_version_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AccountZkappUpdateInput = {
  last_sequence_slot?: InputMaybe<Scalars['Int']>;
  last_sequence_slot_inc?: InputMaybe<Scalars['Int']>;
  last_sequence_slot_unset?: InputMaybe<Scalars['Boolean']>;
  proved_state?: InputMaybe<Scalars['Boolean']>;
  proved_state_unset?: InputMaybe<Scalars['Boolean']>;
  sequence_state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sequence_state_unset?: InputMaybe<Scalars['Boolean']>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_unset?: InputMaybe<Scalars['Boolean']>;
  verification_key?: InputMaybe<Scalars['String']>;
  verification_key_unset?: InputMaybe<Scalars['Boolean']>;
  zkapp_version?: InputMaybe<Scalars['String']>;
  zkapp_version_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Block = {
  __typename?: 'Block';
  blockHeight?: Maybe<Scalars['Int']>;
  canonical?: Maybe<Scalars['Boolean']>;
  creator?: Maybe<Scalars['String']>;
  creatorAccount?: Maybe<BlockCreatorAccount>;
  dateTime?: Maybe<Scalars['DateTime']>;
  protocolState?: Maybe<BlockProtocolState>;
  receivedTime?: Maybe<Scalars['DateTime']>;
  snarkFees?: Maybe<Scalars['Long']>;
  snarkJobs?: Maybe<Array<Maybe<BlockSnarkJob>>>;
  stateHash?: Maybe<Scalars['String']>;
  stateHashField?: Maybe<Scalars['String']>;
  transactions?: Maybe<BlockTransaction>;
  txFees?: Maybe<Scalars['Long']>;
  winnerAccount?: Maybe<BlockWinnerAccount>;
};

export type BlockCreatorAccount = {
  __typename?: 'BlockCreatorAccount';
  publicKey?: Maybe<Scalars['String']>;
};

export type BlockCreatorAccountInsertInput = {
  publicKey?: InputMaybe<Scalars['String']>;
};

export type BlockCreatorAccountQueryInput = {
  AND?: InputMaybe<Array<BlockCreatorAccountQueryInput>>;
  OR?: InputMaybe<Array<BlockCreatorAccountQueryInput>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockCreatorAccountUpdateInput = {
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockInsertInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  creator?: InputMaybe<Scalars['String']>;
  creatorAccount?: InputMaybe<BlockCreatorAccountInsertInput>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  protocolState?: InputMaybe<BlockProtocolStateInsertInput>;
  receivedTime?: InputMaybe<Scalars['DateTime']>;
  snarkJobs?: InputMaybe<Array<InputMaybe<BlockSnarkJobInsertInput>>>;
  stateHash?: InputMaybe<Scalars['String']>;
  stateHashField?: InputMaybe<Scalars['String']>;
  transactions?: InputMaybe<BlockTransactionInsertInput>;
  winnerAccount?: InputMaybe<BlockWinnerAccountInsertInput>;
};

export type BlockProtocolState = {
  __typename?: 'BlockProtocolState';
  blockchainState?: Maybe<BlockProtocolStateBlockchainState>;
  consensusState?: Maybe<BlockProtocolStateConsensusState>;
  previousStateHash?: Maybe<Scalars['String']>;
};

export type BlockProtocolStateBlockchainState = {
  __typename?: 'BlockProtocolStateBlockchainState';
  date?: Maybe<Scalars['Long']>;
  snarkedLedgerHash?: Maybe<Scalars['String']>;
  stagedLedgerHash?: Maybe<Scalars['String']>;
  utcDate?: Maybe<Scalars['Long']>;
};

export type BlockProtocolStateBlockchainStateInsertInput = {
  date?: InputMaybe<Scalars['Long']>;
  snarkedLedgerHash?: InputMaybe<Scalars['String']>;
  stagedLedgerHash?: InputMaybe<Scalars['String']>;
  utcDate?: InputMaybe<Scalars['Long']>;
};

export type BlockProtocolStateBlockchainStateQueryInput = {
  AND?: InputMaybe<Array<BlockProtocolStateBlockchainStateQueryInput>>;
  OR?: InputMaybe<Array<BlockProtocolStateBlockchainStateQueryInput>>;
  date?: InputMaybe<Scalars['Long']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['Long']>;
  date_gte?: InputMaybe<Scalars['Long']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  date_lt?: InputMaybe<Scalars['Long']>;
  date_lte?: InputMaybe<Scalars['Long']>;
  date_ne?: InputMaybe<Scalars['Long']>;
  date_nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  snarkedLedgerHash?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_exists?: InputMaybe<Scalars['Boolean']>;
  snarkedLedgerHash_gt?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_gte?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  snarkedLedgerHash_lt?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_lte?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_ne?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stagedLedgerHash?: InputMaybe<Scalars['String']>;
  stagedLedgerHash_exists?: InputMaybe<Scalars['Boolean']>;
  stagedLedgerHash_gt?: InputMaybe<Scalars['String']>;
  stagedLedgerHash_gte?: InputMaybe<Scalars['String']>;
  stagedLedgerHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stagedLedgerHash_lt?: InputMaybe<Scalars['String']>;
  stagedLedgerHash_lte?: InputMaybe<Scalars['String']>;
  stagedLedgerHash_ne?: InputMaybe<Scalars['String']>;
  stagedLedgerHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  utcDate?: InputMaybe<Scalars['Long']>;
  utcDate_exists?: InputMaybe<Scalars['Boolean']>;
  utcDate_gt?: InputMaybe<Scalars['Long']>;
  utcDate_gte?: InputMaybe<Scalars['Long']>;
  utcDate_in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  utcDate_lt?: InputMaybe<Scalars['Long']>;
  utcDate_lte?: InputMaybe<Scalars['Long']>;
  utcDate_ne?: InputMaybe<Scalars['Long']>;
  utcDate_nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
};

export type BlockProtocolStateBlockchainStateUpdateInput = {
  date?: InputMaybe<Scalars['Long']>;
  date_unset?: InputMaybe<Scalars['Boolean']>;
  snarkedLedgerHash?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_unset?: InputMaybe<Scalars['Boolean']>;
  stagedLedgerHash?: InputMaybe<Scalars['String']>;
  stagedLedgerHash_unset?: InputMaybe<Scalars['Boolean']>;
  utcDate?: InputMaybe<Scalars['Long']>;
  utcDate_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockProtocolStateConsensusState = {
  __typename?: 'BlockProtocolStateConsensusState';
  blockHeight?: Maybe<Scalars['Int']>;
  blockchainLength?: Maybe<Scalars['Int']>;
  epoch?: Maybe<Scalars['Int']>;
  epochCount?: Maybe<Scalars['Int']>;
  hasAncestorInSameCheckpointWindow?: Maybe<Scalars['Boolean']>;
  lastVrfOutput?: Maybe<Scalars['String']>;
  minWindowDensity?: Maybe<Scalars['Int']>;
  nextEpochData?: Maybe<BlockProtocolStateConsensusStateNextEpochDatum>;
  slot?: Maybe<Scalars['Int']>;
  slotSinceGenesis?: Maybe<Scalars['Int']>;
  stakingEpochData?: Maybe<BlockProtocolStateConsensusStateStakingEpochDatum>;
  totalCurrency?: Maybe<Scalars['Float']>;
};

export type BlockProtocolStateConsensusStateInsertInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockchainLength?: InputMaybe<Scalars['Int']>;
  epoch?: InputMaybe<Scalars['Int']>;
  epochCount?: InputMaybe<Scalars['Int']>;
  hasAncestorInSameCheckpointWindow?: InputMaybe<Scalars['Boolean']>;
  lastVrfOutput?: InputMaybe<Scalars['String']>;
  minWindowDensity?: InputMaybe<Scalars['Int']>;
  nextEpochData?: InputMaybe<BlockProtocolStateConsensusStateNextEpochDatumInsertInput>;
  slot?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis?: InputMaybe<Scalars['Int']>;
  stakingEpochData?: InputMaybe<BlockProtocolStateConsensusStateStakingEpochDatumInsertInput>;
  totalCurrency?: InputMaybe<Scalars['Float']>;
};

export type BlockProtocolStateConsensusStateNextEpochDatum = {
  __typename?: 'BlockProtocolStateConsensusStateNextEpochDatum';
  epochLength?: Maybe<Scalars['Int']>;
  ledger?: Maybe<BlockProtocolStateConsensusStateNextEpochDatumLedger>;
  lockCheckpoint?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startCheckpoint?: Maybe<Scalars['String']>;
};

export type BlockProtocolStateConsensusStateNextEpochDatumInsertInput = {
  epochLength?: InputMaybe<Scalars['Int']>;
  ledger?: InputMaybe<BlockProtocolStateConsensusStateNextEpochDatumLedgerInsertInput>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
};

export type BlockProtocolStateConsensusStateNextEpochDatumLedger = {
  __typename?: 'BlockProtocolStateConsensusStateNextEpochDatumLedger';
  hash?: Maybe<Scalars['String']>;
  totalCurrency?: Maybe<Scalars['Float']>;
};

export type BlockProtocolStateConsensusStateNextEpochDatumLedgerInsertInput = {
  hash?: InputMaybe<Scalars['String']>;
  totalCurrency?: InputMaybe<Scalars['Float']>;
};

export type BlockProtocolStateConsensusStateNextEpochDatumLedgerQueryInput = {
  AND?: InputMaybe<Array<BlockProtocolStateConsensusStateNextEpochDatumLedgerQueryInput>>;
  OR?: InputMaybe<Array<BlockProtocolStateConsensusStateNextEpochDatumLedgerQueryInput>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency?: InputMaybe<Scalars['Float']>;
  totalCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency_gt?: InputMaybe<Scalars['Float']>;
  totalCurrency_gte?: InputMaybe<Scalars['Float']>;
  totalCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  totalCurrency_lt?: InputMaybe<Scalars['Float']>;
  totalCurrency_lte?: InputMaybe<Scalars['Float']>;
  totalCurrency_ne?: InputMaybe<Scalars['Float']>;
  totalCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type BlockProtocolStateConsensusStateNextEpochDatumLedgerUpdateInput = {
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['Float']>;
  totalCurrency_inc?: InputMaybe<Scalars['Float']>;
  totalCurrency_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockProtocolStateConsensusStateNextEpochDatumQueryInput = {
  AND?: InputMaybe<Array<BlockProtocolStateConsensusStateNextEpochDatumQueryInput>>;
  OR?: InputMaybe<Array<BlockProtocolStateConsensusStateNextEpochDatumQueryInput>>;
  epochLength?: InputMaybe<Scalars['Int']>;
  epochLength_exists?: InputMaybe<Scalars['Boolean']>;
  epochLength_gt?: InputMaybe<Scalars['Int']>;
  epochLength_gte?: InputMaybe<Scalars['Int']>;
  epochLength_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  epochLength_lt?: InputMaybe<Scalars['Int']>;
  epochLength_lte?: InputMaybe<Scalars['Int']>;
  epochLength_ne?: InputMaybe<Scalars['Int']>;
  epochLength_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ledger?: InputMaybe<BlockProtocolStateConsensusStateNextEpochDatumLedgerQueryInput>;
  ledger_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint_gt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_gte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lockCheckpoint_lt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_lte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_ne?: InputMaybe<Scalars['String']>;
  lockCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed?: InputMaybe<Scalars['String']>;
  seed_exists?: InputMaybe<Scalars['Boolean']>;
  seed_gt?: InputMaybe<Scalars['String']>;
  seed_gte?: InputMaybe<Scalars['String']>;
  seed_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed_lt?: InputMaybe<Scalars['String']>;
  seed_lte?: InputMaybe<Scalars['String']>;
  seed_ne?: InputMaybe<Scalars['String']>;
  seed_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint_gt?: InputMaybe<Scalars['String']>;
  startCheckpoint_gte?: InputMaybe<Scalars['String']>;
  startCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint_lt?: InputMaybe<Scalars['String']>;
  startCheckpoint_lte?: InputMaybe<Scalars['String']>;
  startCheckpoint_ne?: InputMaybe<Scalars['String']>;
  startCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockProtocolStateConsensusStateNextEpochDatumUpdateInput = {
  epochLength?: InputMaybe<Scalars['Int']>;
  epochLength_inc?: InputMaybe<Scalars['Int']>;
  epochLength_unset?: InputMaybe<Scalars['Boolean']>;
  ledger?: InputMaybe<BlockProtocolStateConsensusStateNextEpochDatumLedgerUpdateInput>;
  ledger_unset?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
  seed?: InputMaybe<Scalars['String']>;
  seed_unset?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockProtocolStateConsensusStateQueryInput = {
  AND?: InputMaybe<Array<BlockProtocolStateConsensusStateQueryInput>>;
  OR?: InputMaybe<Array<BlockProtocolStateConsensusStateQueryInput>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockchainLength?: InputMaybe<Scalars['Int']>;
  blockchainLength_exists?: InputMaybe<Scalars['Boolean']>;
  blockchainLength_gt?: InputMaybe<Scalars['Int']>;
  blockchainLength_gte?: InputMaybe<Scalars['Int']>;
  blockchainLength_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockchainLength_lt?: InputMaybe<Scalars['Int']>;
  blockchainLength_lte?: InputMaybe<Scalars['Int']>;
  blockchainLength_ne?: InputMaybe<Scalars['Int']>;
  blockchainLength_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  epoch?: InputMaybe<Scalars['Int']>;
  epochCount?: InputMaybe<Scalars['Int']>;
  epochCount_exists?: InputMaybe<Scalars['Boolean']>;
  epochCount_gt?: InputMaybe<Scalars['Int']>;
  epochCount_gte?: InputMaybe<Scalars['Int']>;
  epochCount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  epochCount_lt?: InputMaybe<Scalars['Int']>;
  epochCount_lte?: InputMaybe<Scalars['Int']>;
  epochCount_ne?: InputMaybe<Scalars['Int']>;
  epochCount_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  epoch_exists?: InputMaybe<Scalars['Boolean']>;
  epoch_gt?: InputMaybe<Scalars['Int']>;
  epoch_gte?: InputMaybe<Scalars['Int']>;
  epoch_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  epoch_lt?: InputMaybe<Scalars['Int']>;
  epoch_lte?: InputMaybe<Scalars['Int']>;
  epoch_ne?: InputMaybe<Scalars['Int']>;
  epoch_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  hasAncestorInSameCheckpointWindow?: InputMaybe<Scalars['Boolean']>;
  hasAncestorInSameCheckpointWindow_exists?: InputMaybe<Scalars['Boolean']>;
  hasAncestorInSameCheckpointWindow_ne?: InputMaybe<Scalars['Boolean']>;
  lastVrfOutput?: InputMaybe<Scalars['String']>;
  lastVrfOutput_exists?: InputMaybe<Scalars['Boolean']>;
  lastVrfOutput_gt?: InputMaybe<Scalars['String']>;
  lastVrfOutput_gte?: InputMaybe<Scalars['String']>;
  lastVrfOutput_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastVrfOutput_lt?: InputMaybe<Scalars['String']>;
  lastVrfOutput_lte?: InputMaybe<Scalars['String']>;
  lastVrfOutput_ne?: InputMaybe<Scalars['String']>;
  lastVrfOutput_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minWindowDensity?: InputMaybe<Scalars['Int']>;
  minWindowDensity_exists?: InputMaybe<Scalars['Boolean']>;
  minWindowDensity_gt?: InputMaybe<Scalars['Int']>;
  minWindowDensity_gte?: InputMaybe<Scalars['Int']>;
  minWindowDensity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  minWindowDensity_lt?: InputMaybe<Scalars['Int']>;
  minWindowDensity_lte?: InputMaybe<Scalars['Int']>;
  minWindowDensity_ne?: InputMaybe<Scalars['Int']>;
  minWindowDensity_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nextEpochData?: InputMaybe<BlockProtocolStateConsensusStateNextEpochDatumQueryInput>;
  nextEpochData_exists?: InputMaybe<Scalars['Boolean']>;
  slot?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis_exists?: InputMaybe<Scalars['Boolean']>;
  slotSinceGenesis_gt?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis_gte?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  slotSinceGenesis_lt?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis_lte?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis_ne?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  slot_exists?: InputMaybe<Scalars['Boolean']>;
  slot_gt?: InputMaybe<Scalars['Int']>;
  slot_gte?: InputMaybe<Scalars['Int']>;
  slot_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  slot_lt?: InputMaybe<Scalars['Int']>;
  slot_lte?: InputMaybe<Scalars['Int']>;
  slot_ne?: InputMaybe<Scalars['Int']>;
  slot_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  stakingEpochData?: InputMaybe<BlockProtocolStateConsensusStateStakingEpochDatumQueryInput>;
  stakingEpochData_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['Float']>;
  totalCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency_gt?: InputMaybe<Scalars['Float']>;
  totalCurrency_gte?: InputMaybe<Scalars['Float']>;
  totalCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  totalCurrency_lt?: InputMaybe<Scalars['Float']>;
  totalCurrency_lte?: InputMaybe<Scalars['Float']>;
  totalCurrency_ne?: InputMaybe<Scalars['Float']>;
  totalCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type BlockProtocolStateConsensusStateStakingEpochDatum = {
  __typename?: 'BlockProtocolStateConsensusStateStakingEpochDatum';
  epochLength?: Maybe<Scalars['Int']>;
  ledger?: Maybe<BlockProtocolStateConsensusStateStakingEpochDatumLedger>;
  lockCheckpoint?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startCheckpoint?: Maybe<Scalars['String']>;
};

export type BlockProtocolStateConsensusStateStakingEpochDatumInsertInput = {
  epochLength?: InputMaybe<Scalars['Int']>;
  ledger?: InputMaybe<BlockProtocolStateConsensusStateStakingEpochDatumLedgerInsertInput>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
};

export type BlockProtocolStateConsensusStateStakingEpochDatumLedger = {
  __typename?: 'BlockProtocolStateConsensusStateStakingEpochDatumLedger';
  hash?: Maybe<Scalars['String']>;
  totalCurrency?: Maybe<Scalars['Float']>;
};

export type BlockProtocolStateConsensusStateStakingEpochDatumLedgerInsertInput = {
  hash?: InputMaybe<Scalars['String']>;
  totalCurrency?: InputMaybe<Scalars['Float']>;
};

export type BlockProtocolStateConsensusStateStakingEpochDatumLedgerQueryInput = {
  AND?: InputMaybe<Array<BlockProtocolStateConsensusStateStakingEpochDatumLedgerQueryInput>>;
  OR?: InputMaybe<Array<BlockProtocolStateConsensusStateStakingEpochDatumLedgerQueryInput>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency?: InputMaybe<Scalars['Float']>;
  totalCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency_gt?: InputMaybe<Scalars['Float']>;
  totalCurrency_gte?: InputMaybe<Scalars['Float']>;
  totalCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  totalCurrency_lt?: InputMaybe<Scalars['Float']>;
  totalCurrency_lte?: InputMaybe<Scalars['Float']>;
  totalCurrency_ne?: InputMaybe<Scalars['Float']>;
  totalCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type BlockProtocolStateConsensusStateStakingEpochDatumLedgerUpdateInput = {
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['Float']>;
  totalCurrency_inc?: InputMaybe<Scalars['Float']>;
  totalCurrency_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockProtocolStateConsensusStateStakingEpochDatumQueryInput = {
  AND?: InputMaybe<Array<BlockProtocolStateConsensusStateStakingEpochDatumQueryInput>>;
  OR?: InputMaybe<Array<BlockProtocolStateConsensusStateStakingEpochDatumQueryInput>>;
  epochLength?: InputMaybe<Scalars['Int']>;
  epochLength_exists?: InputMaybe<Scalars['Boolean']>;
  epochLength_gt?: InputMaybe<Scalars['Int']>;
  epochLength_gte?: InputMaybe<Scalars['Int']>;
  epochLength_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  epochLength_lt?: InputMaybe<Scalars['Int']>;
  epochLength_lte?: InputMaybe<Scalars['Int']>;
  epochLength_ne?: InputMaybe<Scalars['Int']>;
  epochLength_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ledger?: InputMaybe<BlockProtocolStateConsensusStateStakingEpochDatumLedgerQueryInput>;
  ledger_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint_gt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_gte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lockCheckpoint_lt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_lte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_ne?: InputMaybe<Scalars['String']>;
  lockCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed?: InputMaybe<Scalars['String']>;
  seed_exists?: InputMaybe<Scalars['Boolean']>;
  seed_gt?: InputMaybe<Scalars['String']>;
  seed_gte?: InputMaybe<Scalars['String']>;
  seed_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed_lt?: InputMaybe<Scalars['String']>;
  seed_lte?: InputMaybe<Scalars['String']>;
  seed_ne?: InputMaybe<Scalars['String']>;
  seed_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint_gt?: InputMaybe<Scalars['String']>;
  startCheckpoint_gte?: InputMaybe<Scalars['String']>;
  startCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint_lt?: InputMaybe<Scalars['String']>;
  startCheckpoint_lte?: InputMaybe<Scalars['String']>;
  startCheckpoint_ne?: InputMaybe<Scalars['String']>;
  startCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockProtocolStateConsensusStateStakingEpochDatumUpdateInput = {
  epochLength?: InputMaybe<Scalars['Int']>;
  epochLength_inc?: InputMaybe<Scalars['Int']>;
  epochLength_unset?: InputMaybe<Scalars['Boolean']>;
  ledger?: InputMaybe<BlockProtocolStateConsensusStateStakingEpochDatumLedgerUpdateInput>;
  ledger_unset?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
  seed?: InputMaybe<Scalars['String']>;
  seed_unset?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockProtocolStateConsensusStateUpdateInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  blockchainLength?: InputMaybe<Scalars['Int']>;
  blockchainLength_inc?: InputMaybe<Scalars['Int']>;
  blockchainLength_unset?: InputMaybe<Scalars['Boolean']>;
  epoch?: InputMaybe<Scalars['Int']>;
  epochCount?: InputMaybe<Scalars['Int']>;
  epochCount_inc?: InputMaybe<Scalars['Int']>;
  epochCount_unset?: InputMaybe<Scalars['Boolean']>;
  epoch_inc?: InputMaybe<Scalars['Int']>;
  epoch_unset?: InputMaybe<Scalars['Boolean']>;
  hasAncestorInSameCheckpointWindow?: InputMaybe<Scalars['Boolean']>;
  hasAncestorInSameCheckpointWindow_unset?: InputMaybe<Scalars['Boolean']>;
  lastVrfOutput?: InputMaybe<Scalars['String']>;
  lastVrfOutput_unset?: InputMaybe<Scalars['Boolean']>;
  minWindowDensity?: InputMaybe<Scalars['Int']>;
  minWindowDensity_inc?: InputMaybe<Scalars['Int']>;
  minWindowDensity_unset?: InputMaybe<Scalars['Boolean']>;
  nextEpochData?: InputMaybe<BlockProtocolStateConsensusStateNextEpochDatumUpdateInput>;
  nextEpochData_unset?: InputMaybe<Scalars['Boolean']>;
  slot?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis_inc?: InputMaybe<Scalars['Int']>;
  slotSinceGenesis_unset?: InputMaybe<Scalars['Boolean']>;
  slot_inc?: InputMaybe<Scalars['Int']>;
  slot_unset?: InputMaybe<Scalars['Boolean']>;
  stakingEpochData?: InputMaybe<BlockProtocolStateConsensusStateStakingEpochDatumUpdateInput>;
  stakingEpochData_unset?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['Float']>;
  totalCurrency_inc?: InputMaybe<Scalars['Float']>;
  totalCurrency_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockProtocolStateInsertInput = {
  blockchainState?: InputMaybe<BlockProtocolStateBlockchainStateInsertInput>;
  consensusState?: InputMaybe<BlockProtocolStateConsensusStateInsertInput>;
  previousStateHash?: InputMaybe<Scalars['String']>;
};

export type BlockProtocolStateQueryInput = {
  AND?: InputMaybe<Array<BlockProtocolStateQueryInput>>;
  OR?: InputMaybe<Array<BlockProtocolStateQueryInput>>;
  blockchainState?: InputMaybe<BlockProtocolStateBlockchainStateQueryInput>;
  blockchainState_exists?: InputMaybe<Scalars['Boolean']>;
  consensusState?: InputMaybe<BlockProtocolStateConsensusStateQueryInput>;
  consensusState_exists?: InputMaybe<Scalars['Boolean']>;
  previousStateHash?: InputMaybe<Scalars['String']>;
  previousStateHash_exists?: InputMaybe<Scalars['Boolean']>;
  previousStateHash_gt?: InputMaybe<Scalars['String']>;
  previousStateHash_gte?: InputMaybe<Scalars['String']>;
  previousStateHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  previousStateHash_lt?: InputMaybe<Scalars['String']>;
  previousStateHash_lte?: InputMaybe<Scalars['String']>;
  previousStateHash_ne?: InputMaybe<Scalars['String']>;
  previousStateHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockProtocolStateUpdateInput = {
  blockchainState?: InputMaybe<BlockProtocolStateBlockchainStateUpdateInput>;
  blockchainState_unset?: InputMaybe<Scalars['Boolean']>;
  consensusState?: InputMaybe<BlockProtocolStateConsensusStateUpdateInput>;
  consensusState_unset?: InputMaybe<Scalars['Boolean']>;
  previousStateHash?: InputMaybe<Scalars['String']>;
  previousStateHash_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockQueryInput = {
  AND?: InputMaybe<Array<BlockQueryInput>>;
  OR?: InputMaybe<Array<BlockQueryInput>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_exists?: InputMaybe<Scalars['Boolean']>;
  canonical_ne?: InputMaybe<Scalars['Boolean']>;
  creator?: InputMaybe<Scalars['String']>;
  creatorAccount?: InputMaybe<BlockCreatorAccountQueryInput>;
  creatorAccount_exists?: InputMaybe<Scalars['Boolean']>;
  creator_exists?: InputMaybe<Scalars['Boolean']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_ne?: InputMaybe<Scalars['String']>;
  creator_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_exists?: InputMaybe<Scalars['Boolean']>;
  dateTime_gt?: InputMaybe<Scalars['DateTime']>;
  dateTime_gte?: InputMaybe<Scalars['DateTime']>;
  dateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateTime_lt?: InputMaybe<Scalars['DateTime']>;
  dateTime_lte?: InputMaybe<Scalars['DateTime']>;
  dateTime_ne?: InputMaybe<Scalars['DateTime']>;
  dateTime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  protocolState?: InputMaybe<BlockProtocolStateQueryInput>;
  protocolState_exists?: InputMaybe<Scalars['Boolean']>;
  receivedTime?: InputMaybe<Scalars['DateTime']>;
  receivedTime_exists?: InputMaybe<Scalars['Boolean']>;
  receivedTime_gt?: InputMaybe<Scalars['DateTime']>;
  receivedTime_gte?: InputMaybe<Scalars['DateTime']>;
  receivedTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  receivedTime_lt?: InputMaybe<Scalars['DateTime']>;
  receivedTime_lte?: InputMaybe<Scalars['DateTime']>;
  receivedTime_ne?: InputMaybe<Scalars['DateTime']>;
  receivedTime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  snarkJobs?: InputMaybe<Array<InputMaybe<BlockSnarkJobQueryInput>>>;
  snarkJobs_exists?: InputMaybe<Scalars['Boolean']>;
  snarkJobs_in?: InputMaybe<Array<InputMaybe<BlockSnarkJobQueryInput>>>;
  snarkJobs_nin?: InputMaybe<Array<InputMaybe<BlockSnarkJobQueryInput>>>;
  stateHash?: InputMaybe<Scalars['String']>;
  stateHashField?: InputMaybe<Scalars['String']>;
  stateHashField_exists?: InputMaybe<Scalars['Boolean']>;
  stateHashField_gt?: InputMaybe<Scalars['String']>;
  stateHashField_gte?: InputMaybe<Scalars['String']>;
  stateHashField_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stateHashField_lt?: InputMaybe<Scalars['String']>;
  stateHashField_lte?: InputMaybe<Scalars['String']>;
  stateHashField_ne?: InputMaybe<Scalars['String']>;
  stateHashField_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stateHash_exists?: InputMaybe<Scalars['Boolean']>;
  stateHash_gt?: InputMaybe<Scalars['String']>;
  stateHash_gte?: InputMaybe<Scalars['String']>;
  stateHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stateHash_lt?: InputMaybe<Scalars['String']>;
  stateHash_lte?: InputMaybe<Scalars['String']>;
  stateHash_ne?: InputMaybe<Scalars['String']>;
  stateHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  transactions?: InputMaybe<BlockTransactionQueryInput>;
  transactions_exists?: InputMaybe<Scalars['Boolean']>;
  winnerAccount?: InputMaybe<BlockWinnerAccountQueryInput>;
  winnerAccount_exists?: InputMaybe<Scalars['Boolean']>;
};

export type BlockSnarkJob = {
  __typename?: 'BlockSnarkJob';
  blockHeight?: Maybe<Scalars['Int']>;
  blockStateHash?: Maybe<Scalars['String']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  fee?: Maybe<Scalars['Int']>;
  prover?: Maybe<Scalars['String']>;
  workIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type BlockSnarkJobInsertInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  fee?: InputMaybe<Scalars['Int']>;
  prover?: InputMaybe<Scalars['String']>;
  workIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type BlockSnarkJobQueryInput = {
  AND?: InputMaybe<Array<BlockSnarkJobQueryInput>>;
  OR?: InputMaybe<Array<BlockSnarkJobQueryInput>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_exists?: InputMaybe<Scalars['Boolean']>;
  blockStateHash_gt?: InputMaybe<Scalars['String']>;
  blockStateHash_gte?: InputMaybe<Scalars['String']>;
  blockStateHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockStateHash_lt?: InputMaybe<Scalars['String']>;
  blockStateHash_lte?: InputMaybe<Scalars['String']>;
  blockStateHash_ne?: InputMaybe<Scalars['String']>;
  blockStateHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_exists?: InputMaybe<Scalars['Boolean']>;
  dateTime_gt?: InputMaybe<Scalars['DateTime']>;
  dateTime_gte?: InputMaybe<Scalars['DateTime']>;
  dateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateTime_lt?: InputMaybe<Scalars['DateTime']>;
  dateTime_lte?: InputMaybe<Scalars['DateTime']>;
  dateTime_ne?: InputMaybe<Scalars['DateTime']>;
  dateTime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fee?: InputMaybe<Scalars['Int']>;
  fee_exists?: InputMaybe<Scalars['Boolean']>;
  fee_gt?: InputMaybe<Scalars['Int']>;
  fee_gte?: InputMaybe<Scalars['Int']>;
  fee_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fee_lt?: InputMaybe<Scalars['Int']>;
  fee_lte?: InputMaybe<Scalars['Int']>;
  fee_ne?: InputMaybe<Scalars['Int']>;
  fee_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  prover?: InputMaybe<Scalars['String']>;
  prover_exists?: InputMaybe<Scalars['Boolean']>;
  prover_gt?: InputMaybe<Scalars['String']>;
  prover_gte?: InputMaybe<Scalars['String']>;
  prover_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prover_lt?: InputMaybe<Scalars['String']>;
  prover_lte?: InputMaybe<Scalars['String']>;
  prover_ne?: InputMaybe<Scalars['String']>;
  prover_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  workIds_exists?: InputMaybe<Scalars['Boolean']>;
  workIds_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  workIds_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type BlockSnarkJobUpdateInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_unset?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_unset?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Int']>;
  fee_inc?: InputMaybe<Scalars['Int']>;
  fee_unset?: InputMaybe<Scalars['Boolean']>;
  prover?: InputMaybe<Scalars['String']>;
  prover_unset?: InputMaybe<Scalars['Boolean']>;
  workIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  workIds_unset?: InputMaybe<Scalars['Boolean']>;
};

export enum BlockSortByInput {
  BlockheightAsc = 'BLOCKHEIGHT_ASC',
  BlockheightDesc = 'BLOCKHEIGHT_DESC',
  CreatorAsc = 'CREATOR_ASC',
  CreatorDesc = 'CREATOR_DESC',
  DatetimeAsc = 'DATETIME_ASC',
  DatetimeDesc = 'DATETIME_DESC',
  ReceivedtimeAsc = 'RECEIVEDTIME_ASC',
  ReceivedtimeDesc = 'RECEIVEDTIME_DESC',
  StatehashfieldAsc = 'STATEHASHFIELD_ASC',
  StatehashfieldDesc = 'STATEHASHFIELD_DESC',
  StatehashAsc = 'STATEHASH_ASC',
  StatehashDesc = 'STATEHASH_DESC'
}

export type BlockTransaction = {
  __typename?: 'BlockTransaction';
  coinbase?: Maybe<Scalars['Long']>;
  coinbaseReceiverAccount?: Maybe<BlockTransactionCoinbaseReceiverAccount>;
  feeTransfer?: Maybe<Array<Maybe<BlockTransactionFeeTransfer>>>;
  userCommands?: Maybe<Array<Maybe<BlockTransactionUserCommand>>>;
  zkappCommands?: Maybe<Array<Maybe<BlockTransactionZkappCommand>>>;
};

export type BlockTransactionCoinbaseReceiverAccount = {
  __typename?: 'BlockTransactionCoinbaseReceiverAccount';
  publicKey?: Maybe<Scalars['String']>;
};

export type BlockTransactionCoinbaseReceiverAccountInsertInput = {
  publicKey?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionCoinbaseReceiverAccountQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionCoinbaseReceiverAccountQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionCoinbaseReceiverAccountQueryInput>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionCoinbaseReceiverAccountUpdateInput = {
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionFeeTransfer = {
  __typename?: 'BlockTransactionFeeTransfer';
  fee?: Maybe<Scalars['Long']>;
  recipient?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type BlockTransactionFeeTransferInsertInput = {
  fee?: InputMaybe<Scalars['Long']>;
  recipient?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionFeeTransferQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionFeeTransferQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionFeeTransferQueryInput>>;
  fee?: InputMaybe<Scalars['Long']>;
  fee_exists?: InputMaybe<Scalars['Boolean']>;
  fee_gt?: InputMaybe<Scalars['Long']>;
  fee_gte?: InputMaybe<Scalars['Long']>;
  fee_in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  fee_lt?: InputMaybe<Scalars['Long']>;
  fee_lte?: InputMaybe<Scalars['Long']>;
  fee_ne?: InputMaybe<Scalars['Long']>;
  fee_nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  recipient?: InputMaybe<Scalars['String']>;
  recipient_exists?: InputMaybe<Scalars['Boolean']>;
  recipient_gt?: InputMaybe<Scalars['String']>;
  recipient_gte?: InputMaybe<Scalars['String']>;
  recipient_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recipient_lt?: InputMaybe<Scalars['String']>;
  recipient_lte?: InputMaybe<Scalars['String']>;
  recipient_ne?: InputMaybe<Scalars['String']>;
  recipient_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionFeeTransferUpdateInput = {
  fee?: InputMaybe<Scalars['Long']>;
  fee_unset?: InputMaybe<Scalars['Boolean']>;
  recipient?: InputMaybe<Scalars['String']>;
  recipient_unset?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionInsertInput = {
  coinbase?: InputMaybe<Scalars['Long']>;
  coinbaseReceiverAccount?: InputMaybe<BlockTransactionCoinbaseReceiverAccountInsertInput>;
  feeTransfer?: InputMaybe<Array<InputMaybe<BlockTransactionFeeTransferInsertInput>>>;
  userCommands?: InputMaybe<Array<InputMaybe<BlockTransactionUserCommandInsertInput>>>;
  zkappCommands?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandInsertInput>>>;
};

export type BlockTransactionQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionQueryInput>>;
  coinbase?: InputMaybe<Scalars['Long']>;
  coinbaseReceiverAccount?: InputMaybe<BlockTransactionCoinbaseReceiverAccountQueryInput>;
  coinbaseReceiverAccount_exists?: InputMaybe<Scalars['Boolean']>;
  coinbase_exists?: InputMaybe<Scalars['Boolean']>;
  coinbase_gt?: InputMaybe<Scalars['Long']>;
  coinbase_gte?: InputMaybe<Scalars['Long']>;
  coinbase_in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  coinbase_lt?: InputMaybe<Scalars['Long']>;
  coinbase_lte?: InputMaybe<Scalars['Long']>;
  coinbase_ne?: InputMaybe<Scalars['Long']>;
  coinbase_nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  feeTransfer?: InputMaybe<Array<InputMaybe<BlockTransactionFeeTransferQueryInput>>>;
  feeTransfer_exists?: InputMaybe<Scalars['Boolean']>;
  feeTransfer_in?: InputMaybe<Array<InputMaybe<BlockTransactionFeeTransferQueryInput>>>;
  feeTransfer_nin?: InputMaybe<Array<InputMaybe<BlockTransactionFeeTransferQueryInput>>>;
  userCommands?: InputMaybe<Array<InputMaybe<BlockTransactionUserCommandQueryInput>>>;
  userCommands_exists?: InputMaybe<Scalars['Boolean']>;
  userCommands_in?: InputMaybe<Array<InputMaybe<BlockTransactionUserCommandQueryInput>>>;
  userCommands_nin?: InputMaybe<Array<InputMaybe<BlockTransactionUserCommandQueryInput>>>;
  zkappCommands?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandQueryInput>>>;
  zkappCommands_exists?: InputMaybe<Scalars['Boolean']>;
  zkappCommands_in?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandQueryInput>>>;
  zkappCommands_nin?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandQueryInput>>>;
};

export type BlockTransactionUpdateInput = {
  coinbase?: InputMaybe<Scalars['Long']>;
  coinbaseReceiverAccount?: InputMaybe<BlockTransactionCoinbaseReceiverAccountUpdateInput>;
  coinbaseReceiverAccount_unset?: InputMaybe<Scalars['Boolean']>;
  coinbase_unset?: InputMaybe<Scalars['Boolean']>;
  feeTransfer?: InputMaybe<Array<InputMaybe<BlockTransactionFeeTransferUpdateInput>>>;
  feeTransfer_unset?: InputMaybe<Scalars['Boolean']>;
  userCommands?: InputMaybe<Array<InputMaybe<BlockTransactionUserCommandUpdateInput>>>;
  userCommands_unset?: InputMaybe<Scalars['Boolean']>;
  zkappCommands?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandUpdateInput>>>;
  zkappCommands_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionUserCommand = {
  __typename?: 'BlockTransactionUserCommand';
  amount?: Maybe<Scalars['Float']>;
  blockHeight?: Maybe<Scalars['Int']>;
  blockStateHash?: Maybe<Scalars['String']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  failureReason?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  feePayer?: Maybe<BlockTransactionUserCommandFeePayer>;
  feeToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  fromAccount?: Maybe<BlockTransactionUserCommandFromAccount>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isDelegation?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  receiver?: Maybe<BlockTransactionUserCommandReceiver>;
  source?: Maybe<BlockTransactionUserCommandSource>;
  to?: Maybe<Scalars['String']>;
  toAccount?: Maybe<BlockTransactionUserCommandToAccount>;
  token?: Maybe<Scalars['String']>;
};

export type BlockTransactionUserCommandFeePayer = {
  __typename?: 'BlockTransactionUserCommandFeePayer';
  token?: Maybe<Scalars['String']>;
};

export type BlockTransactionUserCommandFeePayerInsertInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionUserCommandFeePayerQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionUserCommandFeePayerQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionUserCommandFeePayerQueryInput>>;
  token?: InputMaybe<Scalars['String']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_ne?: InputMaybe<Scalars['String']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionUserCommandFeePayerUpdateInput = {
  token?: InputMaybe<Scalars['String']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionUserCommandFromAccount = {
  __typename?: 'BlockTransactionUserCommandFromAccount';
  token?: Maybe<Scalars['String']>;
};

export type BlockTransactionUserCommandFromAccountInsertInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionUserCommandFromAccountQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionUserCommandFromAccountQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionUserCommandFromAccountQueryInput>>;
  token?: InputMaybe<Scalars['String']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_ne?: InputMaybe<Scalars['String']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionUserCommandFromAccountUpdateInput = {
  token?: InputMaybe<Scalars['String']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionUserCommandInsertInput = {
  amount?: InputMaybe<Scalars['Float']>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  failureReason?: InputMaybe<Scalars['String']>;
  fee?: InputMaybe<Scalars['Float']>;
  feePayer?: InputMaybe<BlockTransactionUserCommandFeePayerInsertInput>;
  feeToken?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  fromAccount?: InputMaybe<BlockTransactionUserCommandFromAccountInsertInput>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isDelegation?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['Int']>;
  receiver?: InputMaybe<BlockTransactionUserCommandReceiverInsertInput>;
  source?: InputMaybe<BlockTransactionUserCommandSourceInsertInput>;
  to?: InputMaybe<Scalars['String']>;
  toAccount?: InputMaybe<BlockTransactionUserCommandToAccountInsertInput>;
  token?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionUserCommandQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionUserCommandQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionUserCommandQueryInput>>;
  amount?: InputMaybe<Scalars['Float']>;
  amount_exists?: InputMaybe<Scalars['Boolean']>;
  amount_gt?: InputMaybe<Scalars['Float']>;
  amount_gte?: InputMaybe<Scalars['Float']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  amount_lt?: InputMaybe<Scalars['Float']>;
  amount_lte?: InputMaybe<Scalars['Float']>;
  amount_ne?: InputMaybe<Scalars['Float']>;
  amount_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_exists?: InputMaybe<Scalars['Boolean']>;
  blockStateHash_gt?: InputMaybe<Scalars['String']>;
  blockStateHash_gte?: InputMaybe<Scalars['String']>;
  blockStateHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockStateHash_lt?: InputMaybe<Scalars['String']>;
  blockStateHash_lte?: InputMaybe<Scalars['String']>;
  blockStateHash_ne?: InputMaybe<Scalars['String']>;
  blockStateHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_exists?: InputMaybe<Scalars['Boolean']>;
  dateTime_gt?: InputMaybe<Scalars['DateTime']>;
  dateTime_gte?: InputMaybe<Scalars['DateTime']>;
  dateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateTime_lt?: InputMaybe<Scalars['DateTime']>;
  dateTime_lte?: InputMaybe<Scalars['DateTime']>;
  dateTime_ne?: InputMaybe<Scalars['DateTime']>;
  dateTime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  failureReason?: InputMaybe<Scalars['String']>;
  failureReason_exists?: InputMaybe<Scalars['Boolean']>;
  failureReason_gt?: InputMaybe<Scalars['String']>;
  failureReason_gte?: InputMaybe<Scalars['String']>;
  failureReason_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  failureReason_lt?: InputMaybe<Scalars['String']>;
  failureReason_lte?: InputMaybe<Scalars['String']>;
  failureReason_ne?: InputMaybe<Scalars['String']>;
  failureReason_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fee?: InputMaybe<Scalars['Float']>;
  feePayer?: InputMaybe<BlockTransactionUserCommandFeePayerQueryInput>;
  feePayer_exists?: InputMaybe<Scalars['Boolean']>;
  feeToken?: InputMaybe<Scalars['String']>;
  feeToken_exists?: InputMaybe<Scalars['Boolean']>;
  feeToken_gt?: InputMaybe<Scalars['String']>;
  feeToken_gte?: InputMaybe<Scalars['String']>;
  feeToken_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  feeToken_lt?: InputMaybe<Scalars['String']>;
  feeToken_lte?: InputMaybe<Scalars['String']>;
  feeToken_ne?: InputMaybe<Scalars['String']>;
  feeToken_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fee_exists?: InputMaybe<Scalars['Boolean']>;
  fee_gt?: InputMaybe<Scalars['Float']>;
  fee_gte?: InputMaybe<Scalars['Float']>;
  fee_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  fee_lt?: InputMaybe<Scalars['Float']>;
  fee_lte?: InputMaybe<Scalars['Float']>;
  fee_ne?: InputMaybe<Scalars['Float']>;
  fee_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  from?: InputMaybe<Scalars['String']>;
  fromAccount?: InputMaybe<BlockTransactionUserCommandFromAccountQueryInput>;
  fromAccount_exists?: InputMaybe<Scalars['Boolean']>;
  from_exists?: InputMaybe<Scalars['Boolean']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_ne?: InputMaybe<Scalars['String']>;
  from_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_ne?: InputMaybe<Scalars['String']>;
  id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDelegation?: InputMaybe<Scalars['Boolean']>;
  isDelegation_exists?: InputMaybe<Scalars['Boolean']>;
  isDelegation_ne?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Scalars['String']>;
  kind_exists?: InputMaybe<Scalars['Boolean']>;
  kind_gt?: InputMaybe<Scalars['String']>;
  kind_gte?: InputMaybe<Scalars['String']>;
  kind_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  kind_lt?: InputMaybe<Scalars['String']>;
  kind_lte?: InputMaybe<Scalars['String']>;
  kind_ne?: InputMaybe<Scalars['String']>;
  kind_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  memo?: InputMaybe<Scalars['String']>;
  memo_exists?: InputMaybe<Scalars['Boolean']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_ne?: InputMaybe<Scalars['String']>;
  memo_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_exists?: InputMaybe<Scalars['Boolean']>;
  nonce_gt?: InputMaybe<Scalars['Int']>;
  nonce_gte?: InputMaybe<Scalars['Int']>;
  nonce_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nonce_lt?: InputMaybe<Scalars['Int']>;
  nonce_lte?: InputMaybe<Scalars['Int']>;
  nonce_ne?: InputMaybe<Scalars['Int']>;
  nonce_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  receiver?: InputMaybe<BlockTransactionUserCommandReceiverQueryInput>;
  receiver_exists?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<BlockTransactionUserCommandSourceQueryInput>;
  source_exists?: InputMaybe<Scalars['Boolean']>;
  to?: InputMaybe<Scalars['String']>;
  toAccount?: InputMaybe<BlockTransactionUserCommandToAccountQueryInput>;
  toAccount_exists?: InputMaybe<Scalars['Boolean']>;
  to_exists?: InputMaybe<Scalars['Boolean']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_ne?: InputMaybe<Scalars['String']>;
  to_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token?: InputMaybe<Scalars['String']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_ne?: InputMaybe<Scalars['String']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionUserCommandReceiver = {
  __typename?: 'BlockTransactionUserCommandReceiver';
  publicKey?: Maybe<Scalars['String']>;
};

export type BlockTransactionUserCommandReceiverInsertInput = {
  publicKey?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionUserCommandReceiverQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionUserCommandReceiverQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionUserCommandReceiverQueryInput>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionUserCommandReceiverUpdateInput = {
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionUserCommandSource = {
  __typename?: 'BlockTransactionUserCommandSource';
  publicKey?: Maybe<Scalars['String']>;
};

export type BlockTransactionUserCommandSourceInsertInput = {
  publicKey?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionUserCommandSourceQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionUserCommandSourceQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionUserCommandSourceQueryInput>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionUserCommandSourceUpdateInput = {
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionUserCommandToAccount = {
  __typename?: 'BlockTransactionUserCommandToAccount';
  token?: Maybe<Scalars['String']>;
};

export type BlockTransactionUserCommandToAccountInsertInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionUserCommandToAccountQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionUserCommandToAccountQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionUserCommandToAccountQueryInput>>;
  token?: InputMaybe<Scalars['String']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_ne?: InputMaybe<Scalars['String']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionUserCommandToAccountUpdateInput = {
  token?: InputMaybe<Scalars['String']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionUserCommandUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  amount_inc?: InputMaybe<Scalars['Float']>;
  amount_unset?: InputMaybe<Scalars['Boolean']>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_unset?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_unset?: InputMaybe<Scalars['Boolean']>;
  failureReason?: InputMaybe<Scalars['String']>;
  failureReason_unset?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  feePayer?: InputMaybe<BlockTransactionUserCommandFeePayerUpdateInput>;
  feePayer_unset?: InputMaybe<Scalars['Boolean']>;
  feeToken?: InputMaybe<Scalars['String']>;
  feeToken_unset?: InputMaybe<Scalars['Boolean']>;
  fee_inc?: InputMaybe<Scalars['Float']>;
  fee_unset?: InputMaybe<Scalars['Boolean']>;
  from?: InputMaybe<Scalars['String']>;
  fromAccount?: InputMaybe<BlockTransactionUserCommandFromAccountUpdateInput>;
  fromAccount_unset?: InputMaybe<Scalars['Boolean']>;
  from_unset?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  id_unset?: InputMaybe<Scalars['Boolean']>;
  isDelegation?: InputMaybe<Scalars['Boolean']>;
  isDelegation_unset?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Scalars['String']>;
  kind_unset?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  memo_unset?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_inc?: InputMaybe<Scalars['Int']>;
  nonce_unset?: InputMaybe<Scalars['Boolean']>;
  receiver?: InputMaybe<BlockTransactionUserCommandReceiverUpdateInput>;
  receiver_unset?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<BlockTransactionUserCommandSourceUpdateInput>;
  source_unset?: InputMaybe<Scalars['Boolean']>;
  to?: InputMaybe<Scalars['String']>;
  toAccount?: InputMaybe<BlockTransactionUserCommandToAccountUpdateInput>;
  toAccount_unset?: InputMaybe<Scalars['Boolean']>;
  to_unset?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommand = {
  __typename?: 'BlockTransactionZkappCommand';
  blockHeight?: Maybe<Scalars['Int']>;
  blockStateHash?: Maybe<Scalars['String']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  failureReason?: Maybe<Array<Maybe<BlockTransactionZkappCommandFailureReason>>>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  zkappCommand?: Maybe<BlockTransactionZkappCommandZkappCommand>;
};

export type BlockTransactionZkappCommandFailureReason = {
  __typename?: 'BlockTransactionZkappCommandFailureReason';
  failures?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandFailureReasonInsertInput = {
  failures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandFailureReasonQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandFailureReasonQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandFailureReasonQueryInput>>;
  failures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  failures_exists?: InputMaybe<Scalars['Boolean']>;
  failures_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  failures_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  index_exists?: InputMaybe<Scalars['Boolean']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_ne?: InputMaybe<Scalars['String']>;
  index_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandFailureReasonUpdateInput = {
  failures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  failures_unset?: InputMaybe<Scalars['Boolean']>;
  index?: InputMaybe<Scalars['String']>;
  index_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandInsertInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  failureReason?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandFailureReasonInsertInput>>>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  zkappCommand?: InputMaybe<BlockTransactionZkappCommandZkappCommandInsertInput>;
};

export type BlockTransactionZkappCommandQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandQueryInput>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_exists?: InputMaybe<Scalars['Boolean']>;
  blockStateHash_gt?: InputMaybe<Scalars['String']>;
  blockStateHash_gte?: InputMaybe<Scalars['String']>;
  blockStateHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockStateHash_lt?: InputMaybe<Scalars['String']>;
  blockStateHash_lte?: InputMaybe<Scalars['String']>;
  blockStateHash_ne?: InputMaybe<Scalars['String']>;
  blockStateHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_exists?: InputMaybe<Scalars['Boolean']>;
  dateTime_gt?: InputMaybe<Scalars['DateTime']>;
  dateTime_gte?: InputMaybe<Scalars['DateTime']>;
  dateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateTime_lt?: InputMaybe<Scalars['DateTime']>;
  dateTime_lte?: InputMaybe<Scalars['DateTime']>;
  dateTime_ne?: InputMaybe<Scalars['DateTime']>;
  dateTime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  failureReason?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandFailureReasonQueryInput>>>;
  failureReason_exists?: InputMaybe<Scalars['Boolean']>;
  failureReason_in?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandFailureReasonQueryInput>>>;
  failureReason_nin?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandFailureReasonQueryInput>>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_ne?: InputMaybe<Scalars['String']>;
  id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkappCommand?: InputMaybe<BlockTransactionZkappCommandZkappCommandQueryInput>;
  zkappCommand_exists?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandUpdateInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_unset?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_unset?: InputMaybe<Scalars['Boolean']>;
  failureReason?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandFailureReasonUpdateInput>>>;
  failureReason_unset?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  id_unset?: InputMaybe<Scalars['Boolean']>;
  zkappCommand?: InputMaybe<BlockTransactionZkappCommandZkappCommandUpdateInput>;
  zkappCommand_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommand = {
  __typename?: 'BlockTransactionZkappCommandZkappCommand';
  accountUpdates?: Maybe<Array<Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdate>>>;
  feePayer?: Maybe<BlockTransactionZkappCommandZkappCommandFeePayer>;
  memo?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdate = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdate';
  authorization?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorization>;
  body?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBody>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorization = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorization';
  proof?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorizationInsertInput = {
  proof?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorizationQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorizationQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorizationQueryInput>>;
  proof?: InputMaybe<Scalars['String']>;
  proof_exists?: InputMaybe<Scalars['Boolean']>;
  proof_gt?: InputMaybe<Scalars['String']>;
  proof_gte?: InputMaybe<Scalars['String']>;
  proof_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  proof_lt?: InputMaybe<Scalars['String']>;
  proof_lte?: InputMaybe<Scalars['String']>;
  proof_ne?: InputMaybe<Scalars['String']>;
  proof_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  signature?: InputMaybe<Scalars['String']>;
  signature_exists?: InputMaybe<Scalars['Boolean']>;
  signature_gt?: InputMaybe<Scalars['String']>;
  signature_gte?: InputMaybe<Scalars['String']>;
  signature_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  signature_lt?: InputMaybe<Scalars['String']>;
  signature_lte?: InputMaybe<Scalars['String']>;
  signature_ne?: InputMaybe<Scalars['String']>;
  signature_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorizationUpdateInput = {
  proof?: InputMaybe<Scalars['String']>;
  proof_unset?: InputMaybe<Scalars['Boolean']>;
  signature?: InputMaybe<Scalars['String']>;
  signature_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBody = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBody';
  balanceChange?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChange>;
  callData?: Maybe<Scalars['String']>;
  callDepth?: Maybe<Scalars['Int']>;
  caller?: Maybe<Scalars['String']>;
  incrementNonce?: Maybe<Scalars['Boolean']>;
  preconditions?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPrecondition>;
  publicKey?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  update?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdate>;
  useFullCommitment?: Maybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChange = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChange';
  magnitude?: Maybe<Scalars['Int']>;
  sgn?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChangeInsertInput = {
  magnitude?: InputMaybe<Scalars['Int']>;
  sgn?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChangeQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChangeQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChangeQueryInput>>;
  magnitude?: InputMaybe<Scalars['Int']>;
  magnitude_exists?: InputMaybe<Scalars['Boolean']>;
  magnitude_gt?: InputMaybe<Scalars['Int']>;
  magnitude_gte?: InputMaybe<Scalars['Int']>;
  magnitude_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  magnitude_lt?: InputMaybe<Scalars['Int']>;
  magnitude_lte?: InputMaybe<Scalars['Int']>;
  magnitude_ne?: InputMaybe<Scalars['Int']>;
  magnitude_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sgn?: InputMaybe<Scalars['String']>;
  sgn_exists?: InputMaybe<Scalars['Boolean']>;
  sgn_gt?: InputMaybe<Scalars['String']>;
  sgn_gte?: InputMaybe<Scalars['String']>;
  sgn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sgn_lt?: InputMaybe<Scalars['String']>;
  sgn_lte?: InputMaybe<Scalars['String']>;
  sgn_ne?: InputMaybe<Scalars['String']>;
  sgn_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChangeUpdateInput = {
  magnitude?: InputMaybe<Scalars['Int']>;
  magnitude_inc?: InputMaybe<Scalars['Int']>;
  magnitude_unset?: InputMaybe<Scalars['Boolean']>;
  sgn?: InputMaybe<Scalars['String']>;
  sgn_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyInsertInput = {
  balanceChange?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChangeInsertInput>;
  callData?: InputMaybe<Scalars['String']>;
  callDepth?: InputMaybe<Scalars['Int']>;
  caller?: InputMaybe<Scalars['String']>;
  incrementNonce?: InputMaybe<Scalars['Boolean']>;
  preconditions?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionInsertInput>;
  publicKey?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateInsertInput>;
  useFullCommitment?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPrecondition = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPrecondition';
  account?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccount>;
  network?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetwork>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccount = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccount';
  balance?: Maybe<Scalars['String']>;
  delegate?: Maybe<Scalars['String']>;
  isNew?: Maybe<Scalars['Boolean']>;
  nonce?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonce>;
  provedState?: Maybe<Scalars['String']>;
  receiptChainHash?: Maybe<Scalars['String']>;
  state?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountInsertInput = {
  balance?: InputMaybe<Scalars['String']>;
  delegate?: InputMaybe<Scalars['String']>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonceInsertInput>;
  provedState?: InputMaybe<Scalars['String']>;
  receiptChainHash?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonce = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonce';
  lower?: Maybe<Scalars['Int']>;
  upper?: Maybe<Scalars['Int']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonceInsertInput = {
  lower?: InputMaybe<Scalars['Int']>;
  upper?: InputMaybe<Scalars['Int']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonceQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonceQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonceQueryInput>>;
  lower?: InputMaybe<Scalars['Int']>;
  lower_exists?: InputMaybe<Scalars['Boolean']>;
  lower_gt?: InputMaybe<Scalars['Int']>;
  lower_gte?: InputMaybe<Scalars['Int']>;
  lower_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lower_lt?: InputMaybe<Scalars['Int']>;
  lower_lte?: InputMaybe<Scalars['Int']>;
  lower_ne?: InputMaybe<Scalars['Int']>;
  lower_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  upper?: InputMaybe<Scalars['Int']>;
  upper_exists?: InputMaybe<Scalars['Boolean']>;
  upper_gt?: InputMaybe<Scalars['Int']>;
  upper_gte?: InputMaybe<Scalars['Int']>;
  upper_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  upper_lt?: InputMaybe<Scalars['Int']>;
  upper_lte?: InputMaybe<Scalars['Int']>;
  upper_ne?: InputMaybe<Scalars['Int']>;
  upper_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonceUpdateInput = {
  lower?: InputMaybe<Scalars['Int']>;
  lower_inc?: InputMaybe<Scalars['Int']>;
  lower_unset?: InputMaybe<Scalars['Boolean']>;
  upper?: InputMaybe<Scalars['Int']>;
  upper_inc?: InputMaybe<Scalars['Int']>;
  upper_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountQueryInput>>;
  balance?: InputMaybe<Scalars['String']>;
  balance_exists?: InputMaybe<Scalars['Boolean']>;
  balance_gt?: InputMaybe<Scalars['String']>;
  balance_gte?: InputMaybe<Scalars['String']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  balance_lt?: InputMaybe<Scalars['String']>;
  balance_lte?: InputMaybe<Scalars['String']>;
  balance_ne?: InputMaybe<Scalars['String']>;
  balance_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_exists?: InputMaybe<Scalars['Boolean']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_ne?: InputMaybe<Scalars['String']>;
  delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  isNew_exists?: InputMaybe<Scalars['Boolean']>;
  isNew_ne?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonceQueryInput>;
  nonce_exists?: InputMaybe<Scalars['Boolean']>;
  provedState?: InputMaybe<Scalars['String']>;
  provedState_exists?: InputMaybe<Scalars['Boolean']>;
  provedState_gt?: InputMaybe<Scalars['String']>;
  provedState_gte?: InputMaybe<Scalars['String']>;
  provedState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  provedState_lt?: InputMaybe<Scalars['String']>;
  provedState_lte?: InputMaybe<Scalars['String']>;
  provedState_ne?: InputMaybe<Scalars['String']>;
  provedState_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receiptChainHash?: InputMaybe<Scalars['String']>;
  receiptChainHash_exists?: InputMaybe<Scalars['Boolean']>;
  receiptChainHash_gt?: InputMaybe<Scalars['String']>;
  receiptChainHash_gte?: InputMaybe<Scalars['String']>;
  receiptChainHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receiptChainHash_lt?: InputMaybe<Scalars['String']>;
  receiptChainHash_lte?: InputMaybe<Scalars['String']>;
  receiptChainHash_ne?: InputMaybe<Scalars['String']>;
  receiptChainHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountUpdateInput = {
  balance?: InputMaybe<Scalars['String']>;
  balance_unset?: InputMaybe<Scalars['Boolean']>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_unset?: InputMaybe<Scalars['Boolean']>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  isNew_unset?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountNonceUpdateInput>;
  nonce_unset?: InputMaybe<Scalars['Boolean']>;
  provedState?: InputMaybe<Scalars['String']>;
  provedState_unset?: InputMaybe<Scalars['Boolean']>;
  receiptChainHash?: InputMaybe<Scalars['String']>;
  receiptChainHash_unset?: InputMaybe<Scalars['Boolean']>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionInsertInput = {
  account?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountInsertInput>;
  network?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkInsertInput>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetwork = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetwork';
  globalSlotSinceGenesis?: Maybe<Scalars['Int']>;
  globalSlotSinceHardFork?: Maybe<Scalars['Int']>;
  minWindowDensity?: Maybe<Scalars['Int']>;
  nextEpochData?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatum>;
  sequenceEvents?: Maybe<Scalars['String']>;
  snarkedLedgerHash?: Maybe<Scalars['String']>;
  stakingEpochData?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatum>;
  timestamp?: Maybe<Scalars['String']>;
  totalCurrency?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkInsertInput = {
  globalSlotSinceGenesis?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork?: InputMaybe<Scalars['Int']>;
  minWindowDensity?: InputMaybe<Scalars['Int']>;
  nextEpochData?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumInsertInput>;
  sequenceEvents?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash?: InputMaybe<Scalars['String']>;
  stakingEpochData?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumInsertInput>;
  timestamp?: InputMaybe<Scalars['String']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatum = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatum';
  epochLength?: Maybe<Scalars['String']>;
  ledger?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedger>;
  lockCheckpoint?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startCheckpoint?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumInsertInput = {
  epochLength?: InputMaybe<Scalars['String']>;
  ledger?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerInsertInput>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedger = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedger';
  hash?: Maybe<Scalars['String']>;
  totalCurrency?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerInsertInput = {
  hash?: InputMaybe<Scalars['String']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerQueryInput>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency_gt?: InputMaybe<Scalars['String']>;
  totalCurrency_gte?: InputMaybe<Scalars['String']>;
  totalCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency_lt?: InputMaybe<Scalars['String']>;
  totalCurrency_lte?: InputMaybe<Scalars['String']>;
  totalCurrency_ne?: InputMaybe<Scalars['String']>;
  totalCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerUpdateInput = {
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumQueryInput>>;
  epochLength?: InputMaybe<Scalars['String']>;
  epochLength_exists?: InputMaybe<Scalars['Boolean']>;
  epochLength_gt?: InputMaybe<Scalars['String']>;
  epochLength_gte?: InputMaybe<Scalars['String']>;
  epochLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  epochLength_lt?: InputMaybe<Scalars['String']>;
  epochLength_lte?: InputMaybe<Scalars['String']>;
  epochLength_ne?: InputMaybe<Scalars['String']>;
  epochLength_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ledger?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerQueryInput>;
  ledger_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint_gt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_gte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lockCheckpoint_lt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_lte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_ne?: InputMaybe<Scalars['String']>;
  lockCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed?: InputMaybe<Scalars['String']>;
  seed_exists?: InputMaybe<Scalars['Boolean']>;
  seed_gt?: InputMaybe<Scalars['String']>;
  seed_gte?: InputMaybe<Scalars['String']>;
  seed_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed_lt?: InputMaybe<Scalars['String']>;
  seed_lte?: InputMaybe<Scalars['String']>;
  seed_ne?: InputMaybe<Scalars['String']>;
  seed_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint_gt?: InputMaybe<Scalars['String']>;
  startCheckpoint_gte?: InputMaybe<Scalars['String']>;
  startCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint_lt?: InputMaybe<Scalars['String']>;
  startCheckpoint_lte?: InputMaybe<Scalars['String']>;
  startCheckpoint_ne?: InputMaybe<Scalars['String']>;
  startCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumUpdateInput = {
  epochLength?: InputMaybe<Scalars['String']>;
  epochLength_unset?: InputMaybe<Scalars['Boolean']>;
  ledger?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerUpdateInput>;
  ledger_unset?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
  seed?: InputMaybe<Scalars['String']>;
  seed_unset?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkQueryInput>>;
  globalSlotSinceGenesis?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_exists?: InputMaybe<Scalars['Boolean']>;
  globalSlotSinceGenesis_gt?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_gte?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  globalSlotSinceGenesis_lt?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_lte?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_ne?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  globalSlotSinceHardFork?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_exists?: InputMaybe<Scalars['Boolean']>;
  globalSlotSinceHardFork_gt?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_gte?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  globalSlotSinceHardFork_lt?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_lte?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_ne?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  minWindowDensity?: InputMaybe<Scalars['Int']>;
  minWindowDensity_exists?: InputMaybe<Scalars['Boolean']>;
  minWindowDensity_gt?: InputMaybe<Scalars['Int']>;
  minWindowDensity_gte?: InputMaybe<Scalars['Int']>;
  minWindowDensity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  minWindowDensity_lt?: InputMaybe<Scalars['Int']>;
  minWindowDensity_lte?: InputMaybe<Scalars['Int']>;
  minWindowDensity_ne?: InputMaybe<Scalars['Int']>;
  minWindowDensity_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nextEpochData?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumQueryInput>;
  nextEpochData_exists?: InputMaybe<Scalars['Boolean']>;
  sequenceEvents?: InputMaybe<Scalars['String']>;
  sequenceEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sequenceEvents_gt?: InputMaybe<Scalars['String']>;
  sequenceEvents_gte?: InputMaybe<Scalars['String']>;
  sequenceEvents_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sequenceEvents_lt?: InputMaybe<Scalars['String']>;
  sequenceEvents_lte?: InputMaybe<Scalars['String']>;
  sequenceEvents_ne?: InputMaybe<Scalars['String']>;
  sequenceEvents_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  snarkedLedgerHash?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_exists?: InputMaybe<Scalars['Boolean']>;
  snarkedLedgerHash_gt?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_gte?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  snarkedLedgerHash_lt?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_lte?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_ne?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stakingEpochData?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumQueryInput>;
  stakingEpochData_exists?: InputMaybe<Scalars['Boolean']>;
  timestamp?: InputMaybe<Scalars['String']>;
  timestamp_exists?: InputMaybe<Scalars['Boolean']>;
  timestamp_gt?: InputMaybe<Scalars['String']>;
  timestamp_gte?: InputMaybe<Scalars['String']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timestamp_lt?: InputMaybe<Scalars['String']>;
  timestamp_lte?: InputMaybe<Scalars['String']>;
  timestamp_ne?: InputMaybe<Scalars['String']>;
  timestamp_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency_gt?: InputMaybe<Scalars['String']>;
  totalCurrency_gte?: InputMaybe<Scalars['String']>;
  totalCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency_lt?: InputMaybe<Scalars['String']>;
  totalCurrency_lte?: InputMaybe<Scalars['String']>;
  totalCurrency_ne?: InputMaybe<Scalars['String']>;
  totalCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatum = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatum';
  epochLength?: Maybe<Scalars['String']>;
  ledger?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedger>;
  lockCheckpoint?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startCheckpoint?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumInsertInput = {
  epochLength?: InputMaybe<Scalars['String']>;
  ledger?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerInsertInput>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedger = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedger';
  hash?: Maybe<Scalars['String']>;
  totalCurrency?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerInsertInput = {
  hash?: InputMaybe<Scalars['String']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerQueryInput>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency_gt?: InputMaybe<Scalars['String']>;
  totalCurrency_gte?: InputMaybe<Scalars['String']>;
  totalCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency_lt?: InputMaybe<Scalars['String']>;
  totalCurrency_lte?: InputMaybe<Scalars['String']>;
  totalCurrency_ne?: InputMaybe<Scalars['String']>;
  totalCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerUpdateInput = {
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumQueryInput>>;
  epochLength?: InputMaybe<Scalars['String']>;
  epochLength_exists?: InputMaybe<Scalars['Boolean']>;
  epochLength_gt?: InputMaybe<Scalars['String']>;
  epochLength_gte?: InputMaybe<Scalars['String']>;
  epochLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  epochLength_lt?: InputMaybe<Scalars['String']>;
  epochLength_lte?: InputMaybe<Scalars['String']>;
  epochLength_ne?: InputMaybe<Scalars['String']>;
  epochLength_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ledger?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerQueryInput>;
  ledger_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint_gt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_gte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lockCheckpoint_lt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_lte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_ne?: InputMaybe<Scalars['String']>;
  lockCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed?: InputMaybe<Scalars['String']>;
  seed_exists?: InputMaybe<Scalars['Boolean']>;
  seed_gt?: InputMaybe<Scalars['String']>;
  seed_gte?: InputMaybe<Scalars['String']>;
  seed_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed_lt?: InputMaybe<Scalars['String']>;
  seed_lte?: InputMaybe<Scalars['String']>;
  seed_ne?: InputMaybe<Scalars['String']>;
  seed_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint_gt?: InputMaybe<Scalars['String']>;
  startCheckpoint_gte?: InputMaybe<Scalars['String']>;
  startCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint_lt?: InputMaybe<Scalars['String']>;
  startCheckpoint_lte?: InputMaybe<Scalars['String']>;
  startCheckpoint_ne?: InputMaybe<Scalars['String']>;
  startCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumUpdateInput = {
  epochLength?: InputMaybe<Scalars['String']>;
  epochLength_unset?: InputMaybe<Scalars['Boolean']>;
  ledger?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerUpdateInput>;
  ledger_unset?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
  seed?: InputMaybe<Scalars['String']>;
  seed_unset?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkUpdateInput = {
  globalSlotSinceGenesis?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_inc?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_unset?: InputMaybe<Scalars['Boolean']>;
  globalSlotSinceHardFork?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_inc?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_unset?: InputMaybe<Scalars['Boolean']>;
  minWindowDensity?: InputMaybe<Scalars['Int']>;
  minWindowDensity_inc?: InputMaybe<Scalars['Int']>;
  minWindowDensity_unset?: InputMaybe<Scalars['Boolean']>;
  nextEpochData?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumUpdateInput>;
  nextEpochData_unset?: InputMaybe<Scalars['Boolean']>;
  sequenceEvents?: InputMaybe<Scalars['String']>;
  sequenceEvents_unset?: InputMaybe<Scalars['Boolean']>;
  snarkedLedgerHash?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_unset?: InputMaybe<Scalars['Boolean']>;
  stakingEpochData?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumUpdateInput>;
  stakingEpochData_unset?: InputMaybe<Scalars['Boolean']>;
  timestamp?: InputMaybe<Scalars['String']>;
  timestamp_unset?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionQueryInput>>;
  account?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountQueryInput>;
  account_exists?: InputMaybe<Scalars['Boolean']>;
  network?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkQueryInput>;
  network_exists?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionUpdateInput = {
  account?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionAccountUpdateInput>;
  account_unset?: InputMaybe<Scalars['Boolean']>;
  network?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionNetworkUpdateInput>;
  network_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyQueryInput>>;
  balanceChange?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChangeQueryInput>;
  balanceChange_exists?: InputMaybe<Scalars['Boolean']>;
  callData?: InputMaybe<Scalars['String']>;
  callData_exists?: InputMaybe<Scalars['Boolean']>;
  callData_gt?: InputMaybe<Scalars['String']>;
  callData_gte?: InputMaybe<Scalars['String']>;
  callData_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  callData_lt?: InputMaybe<Scalars['String']>;
  callData_lte?: InputMaybe<Scalars['String']>;
  callData_ne?: InputMaybe<Scalars['String']>;
  callData_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  callDepth?: InputMaybe<Scalars['Int']>;
  callDepth_exists?: InputMaybe<Scalars['Boolean']>;
  callDepth_gt?: InputMaybe<Scalars['Int']>;
  callDepth_gte?: InputMaybe<Scalars['Int']>;
  callDepth_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  callDepth_lt?: InputMaybe<Scalars['Int']>;
  callDepth_lte?: InputMaybe<Scalars['Int']>;
  callDepth_ne?: InputMaybe<Scalars['Int']>;
  callDepth_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  caller?: InputMaybe<Scalars['String']>;
  caller_exists?: InputMaybe<Scalars['Boolean']>;
  caller_gt?: InputMaybe<Scalars['String']>;
  caller_gte?: InputMaybe<Scalars['String']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  caller_lt?: InputMaybe<Scalars['String']>;
  caller_lte?: InputMaybe<Scalars['String']>;
  caller_ne?: InputMaybe<Scalars['String']>;
  caller_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  incrementNonce?: InputMaybe<Scalars['Boolean']>;
  incrementNonce_exists?: InputMaybe<Scalars['Boolean']>;
  incrementNonce_ne?: InputMaybe<Scalars['Boolean']>;
  preconditions?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionQueryInput>;
  preconditions_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_exists?: InputMaybe<Scalars['Boolean']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_ne?: InputMaybe<Scalars['String']>;
  tokenId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  update?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateQueryInput>;
  update_exists?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment_exists?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment_ne?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdate = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdate';
  appState?: Maybe<Array<Maybe<Scalars['String']>>>;
  delegate?: Maybe<Scalars['String']>;
  permissions?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermission>;
  timing?: Maybe<Scalars['String']>;
  tokenSymbol?: Maybe<Scalars['String']>;
  verificationKey?: Maybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKey>;
  votingFor?: Maybe<Scalars['String']>;
  zkappUri?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateInput = {
  balanceChange?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyBalanceChangeUpdateInput>;
  balanceChange_unset?: InputMaybe<Scalars['Boolean']>;
  callData?: InputMaybe<Scalars['String']>;
  callData_unset?: InputMaybe<Scalars['Boolean']>;
  callDepth?: InputMaybe<Scalars['Int']>;
  callDepth_inc?: InputMaybe<Scalars['Int']>;
  callDepth_unset?: InputMaybe<Scalars['Boolean']>;
  caller?: InputMaybe<Scalars['String']>;
  caller_unset?: InputMaybe<Scalars['Boolean']>;
  incrementNonce?: InputMaybe<Scalars['Boolean']>;
  incrementNonce_unset?: InputMaybe<Scalars['Boolean']>;
  preconditions?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyPreconditionUpdateInput>;
  preconditions_unset?: InputMaybe<Scalars['Boolean']>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_unset?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateUpdateInput>;
  update_unset?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateInsertInput = {
  appState?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermissionInsertInput>;
  timing?: InputMaybe<Scalars['String']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  verificationKey?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKeyInsertInput>;
  votingFor?: InputMaybe<Scalars['String']>;
  zkappUri?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermission = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermission';
  editSequenceState?: Maybe<Scalars['String']>;
  editState?: Maybe<Scalars['String']>;
  incrementNonce?: Maybe<Scalars['String']>;
  receive?: Maybe<Scalars['String']>;
  send?: Maybe<Scalars['String']>;
  setDelegate?: Maybe<Scalars['String']>;
  setPermissions?: Maybe<Scalars['String']>;
  setTokenSymbol?: Maybe<Scalars['String']>;
  setVerificationKey?: Maybe<Scalars['String']>;
  setVotingFor?: Maybe<Scalars['String']>;
  setZkappUri?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermissionInsertInput = {
  editSequenceState?: InputMaybe<Scalars['String']>;
  editState?: InputMaybe<Scalars['String']>;
  incrementNonce?: InputMaybe<Scalars['String']>;
  receive?: InputMaybe<Scalars['String']>;
  send?: InputMaybe<Scalars['String']>;
  setDelegate?: InputMaybe<Scalars['String']>;
  setPermissions?: InputMaybe<Scalars['String']>;
  setTokenSymbol?: InputMaybe<Scalars['String']>;
  setVerificationKey?: InputMaybe<Scalars['String']>;
  setVotingFor?: InputMaybe<Scalars['String']>;
  setZkappUri?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermissionQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermissionQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermissionQueryInput>>;
  editSequenceState?: InputMaybe<Scalars['String']>;
  editSequenceState_exists?: InputMaybe<Scalars['Boolean']>;
  editSequenceState_gt?: InputMaybe<Scalars['String']>;
  editSequenceState_gte?: InputMaybe<Scalars['String']>;
  editSequenceState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  editSequenceState_lt?: InputMaybe<Scalars['String']>;
  editSequenceState_lte?: InputMaybe<Scalars['String']>;
  editSequenceState_ne?: InputMaybe<Scalars['String']>;
  editSequenceState_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  editState?: InputMaybe<Scalars['String']>;
  editState_exists?: InputMaybe<Scalars['Boolean']>;
  editState_gt?: InputMaybe<Scalars['String']>;
  editState_gte?: InputMaybe<Scalars['String']>;
  editState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  editState_lt?: InputMaybe<Scalars['String']>;
  editState_lte?: InputMaybe<Scalars['String']>;
  editState_ne?: InputMaybe<Scalars['String']>;
  editState_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  incrementNonce?: InputMaybe<Scalars['String']>;
  incrementNonce_exists?: InputMaybe<Scalars['Boolean']>;
  incrementNonce_gt?: InputMaybe<Scalars['String']>;
  incrementNonce_gte?: InputMaybe<Scalars['String']>;
  incrementNonce_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  incrementNonce_lt?: InputMaybe<Scalars['String']>;
  incrementNonce_lte?: InputMaybe<Scalars['String']>;
  incrementNonce_ne?: InputMaybe<Scalars['String']>;
  incrementNonce_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receive?: InputMaybe<Scalars['String']>;
  receive_exists?: InputMaybe<Scalars['Boolean']>;
  receive_gt?: InputMaybe<Scalars['String']>;
  receive_gte?: InputMaybe<Scalars['String']>;
  receive_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receive_lt?: InputMaybe<Scalars['String']>;
  receive_lte?: InputMaybe<Scalars['String']>;
  receive_ne?: InputMaybe<Scalars['String']>;
  receive_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send?: InputMaybe<Scalars['String']>;
  send_exists?: InputMaybe<Scalars['Boolean']>;
  send_gt?: InputMaybe<Scalars['String']>;
  send_gte?: InputMaybe<Scalars['String']>;
  send_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send_lt?: InputMaybe<Scalars['String']>;
  send_lte?: InputMaybe<Scalars['String']>;
  send_ne?: InputMaybe<Scalars['String']>;
  send_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setDelegate?: InputMaybe<Scalars['String']>;
  setDelegate_exists?: InputMaybe<Scalars['Boolean']>;
  setDelegate_gt?: InputMaybe<Scalars['String']>;
  setDelegate_gte?: InputMaybe<Scalars['String']>;
  setDelegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setDelegate_lt?: InputMaybe<Scalars['String']>;
  setDelegate_lte?: InputMaybe<Scalars['String']>;
  setDelegate_ne?: InputMaybe<Scalars['String']>;
  setDelegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setPermissions?: InputMaybe<Scalars['String']>;
  setPermissions_exists?: InputMaybe<Scalars['Boolean']>;
  setPermissions_gt?: InputMaybe<Scalars['String']>;
  setPermissions_gte?: InputMaybe<Scalars['String']>;
  setPermissions_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setPermissions_lt?: InputMaybe<Scalars['String']>;
  setPermissions_lte?: InputMaybe<Scalars['String']>;
  setPermissions_ne?: InputMaybe<Scalars['String']>;
  setPermissions_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setTokenSymbol?: InputMaybe<Scalars['String']>;
  setTokenSymbol_exists?: InputMaybe<Scalars['Boolean']>;
  setTokenSymbol_gt?: InputMaybe<Scalars['String']>;
  setTokenSymbol_gte?: InputMaybe<Scalars['String']>;
  setTokenSymbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setTokenSymbol_lt?: InputMaybe<Scalars['String']>;
  setTokenSymbol_lte?: InputMaybe<Scalars['String']>;
  setTokenSymbol_ne?: InputMaybe<Scalars['String']>;
  setTokenSymbol_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setVerificationKey?: InputMaybe<Scalars['String']>;
  setVerificationKey_exists?: InputMaybe<Scalars['Boolean']>;
  setVerificationKey_gt?: InputMaybe<Scalars['String']>;
  setVerificationKey_gte?: InputMaybe<Scalars['String']>;
  setVerificationKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setVerificationKey_lt?: InputMaybe<Scalars['String']>;
  setVerificationKey_lte?: InputMaybe<Scalars['String']>;
  setVerificationKey_ne?: InputMaybe<Scalars['String']>;
  setVerificationKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setVotingFor?: InputMaybe<Scalars['String']>;
  setVotingFor_exists?: InputMaybe<Scalars['Boolean']>;
  setVotingFor_gt?: InputMaybe<Scalars['String']>;
  setVotingFor_gte?: InputMaybe<Scalars['String']>;
  setVotingFor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setVotingFor_lt?: InputMaybe<Scalars['String']>;
  setVotingFor_lte?: InputMaybe<Scalars['String']>;
  setVotingFor_ne?: InputMaybe<Scalars['String']>;
  setVotingFor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setZkappUri?: InputMaybe<Scalars['String']>;
  setZkappUri_exists?: InputMaybe<Scalars['Boolean']>;
  setZkappUri_gt?: InputMaybe<Scalars['String']>;
  setZkappUri_gte?: InputMaybe<Scalars['String']>;
  setZkappUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setZkappUri_lt?: InputMaybe<Scalars['String']>;
  setZkappUri_lte?: InputMaybe<Scalars['String']>;
  setZkappUri_ne?: InputMaybe<Scalars['String']>;
  setZkappUri_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermissionUpdateInput = {
  editSequenceState?: InputMaybe<Scalars['String']>;
  editSequenceState_unset?: InputMaybe<Scalars['Boolean']>;
  editState?: InputMaybe<Scalars['String']>;
  editState_unset?: InputMaybe<Scalars['Boolean']>;
  incrementNonce?: InputMaybe<Scalars['String']>;
  incrementNonce_unset?: InputMaybe<Scalars['Boolean']>;
  receive?: InputMaybe<Scalars['String']>;
  receive_unset?: InputMaybe<Scalars['Boolean']>;
  send?: InputMaybe<Scalars['String']>;
  send_unset?: InputMaybe<Scalars['Boolean']>;
  setDelegate?: InputMaybe<Scalars['String']>;
  setDelegate_unset?: InputMaybe<Scalars['Boolean']>;
  setPermissions?: InputMaybe<Scalars['String']>;
  setPermissions_unset?: InputMaybe<Scalars['Boolean']>;
  setTokenSymbol?: InputMaybe<Scalars['String']>;
  setTokenSymbol_unset?: InputMaybe<Scalars['Boolean']>;
  setVerificationKey?: InputMaybe<Scalars['String']>;
  setVerificationKey_unset?: InputMaybe<Scalars['Boolean']>;
  setVotingFor?: InputMaybe<Scalars['String']>;
  setVotingFor_unset?: InputMaybe<Scalars['Boolean']>;
  setZkappUri?: InputMaybe<Scalars['String']>;
  setZkappUri_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateQueryInput>>;
  appState?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appState_exists?: InputMaybe<Scalars['Boolean']>;
  appState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appState_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_exists?: InputMaybe<Scalars['Boolean']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_ne?: InputMaybe<Scalars['String']>;
  delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  permissions?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermissionQueryInput>;
  permissions_exists?: InputMaybe<Scalars['Boolean']>;
  timing?: InputMaybe<Scalars['String']>;
  timing_exists?: InputMaybe<Scalars['Boolean']>;
  timing_gt?: InputMaybe<Scalars['String']>;
  timing_gte?: InputMaybe<Scalars['String']>;
  timing_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timing_lt?: InputMaybe<Scalars['String']>;
  timing_lte?: InputMaybe<Scalars['String']>;
  timing_ne?: InputMaybe<Scalars['String']>;
  timing_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_exists?: InputMaybe<Scalars['Boolean']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_ne?: InputMaybe<Scalars['String']>;
  tokenSymbol_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  verificationKey?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKeyQueryInput>;
  verificationKey_exists?: InputMaybe<Scalars['Boolean']>;
  votingFor?: InputMaybe<Scalars['String']>;
  votingFor_exists?: InputMaybe<Scalars['Boolean']>;
  votingFor_gt?: InputMaybe<Scalars['String']>;
  votingFor_gte?: InputMaybe<Scalars['String']>;
  votingFor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  votingFor_lt?: InputMaybe<Scalars['String']>;
  votingFor_lte?: InputMaybe<Scalars['String']>;
  votingFor_ne?: InputMaybe<Scalars['String']>;
  votingFor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkappUri?: InputMaybe<Scalars['String']>;
  zkappUri_exists?: InputMaybe<Scalars['Boolean']>;
  zkappUri_gt?: InputMaybe<Scalars['String']>;
  zkappUri_gte?: InputMaybe<Scalars['String']>;
  zkappUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkappUri_lt?: InputMaybe<Scalars['String']>;
  zkappUri_lte?: InputMaybe<Scalars['String']>;
  zkappUri_ne?: InputMaybe<Scalars['String']>;
  zkappUri_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateUpdateInput = {
  appState?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appState_unset?: InputMaybe<Scalars['Boolean']>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_unset?: InputMaybe<Scalars['Boolean']>;
  permissions?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdatePermissionUpdateInput>;
  permissions_unset?: InputMaybe<Scalars['Boolean']>;
  timing?: InputMaybe<Scalars['String']>;
  timing_unset?: InputMaybe<Scalars['Boolean']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_unset?: InputMaybe<Scalars['Boolean']>;
  verificationKey?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKeyUpdateInput>;
  verificationKey_unset?: InputMaybe<Scalars['Boolean']>;
  votingFor?: InputMaybe<Scalars['String']>;
  votingFor_unset?: InputMaybe<Scalars['Boolean']>;
  zkappUri?: InputMaybe<Scalars['String']>;
  zkappUri_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKey = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKey';
  data?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKeyInsertInput = {
  data?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKeyQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKeyQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKeyQueryInput>>;
  data?: InputMaybe<Scalars['String']>;
  data_exists?: InputMaybe<Scalars['Boolean']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_ne?: InputMaybe<Scalars['String']>;
  data_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateVerificationKeyUpdateInput = {
  data?: InputMaybe<Scalars['String']>;
  data_unset?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateInsertInput = {
  authorization?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorizationInsertInput>;
  body?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyInsertInput>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandAccountUpdateQueryInput>>;
  authorization?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorizationQueryInput>;
  authorization_exists?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyQueryInput>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandAccountUpdateUpdateInput = {
  authorization?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateAuthorizationUpdateInput>;
  authorization_unset?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateBodyUpdateInput>;
  body_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandFeePayer = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandFeePayer';
  authorization?: Maybe<Scalars['String']>;
  body?: Maybe<BlockTransactionZkappCommandZkappCommandFeePayerBody>;
};

export type BlockTransactionZkappCommandZkappCommandFeePayerBody = {
  __typename?: 'BlockTransactionZkappCommandZkappCommandFeePayerBody';
  fee?: Maybe<Scalars['Int']>;
  nonce?: Maybe<Scalars['Int']>;
  publicKey?: Maybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandFeePayerBodyInsertInput = {
  fee?: InputMaybe<Scalars['Int']>;
  nonce?: InputMaybe<Scalars['Int']>;
  publicKey?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandFeePayerBodyQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandFeePayerBodyQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandFeePayerBodyQueryInput>>;
  fee?: InputMaybe<Scalars['Int']>;
  fee_exists?: InputMaybe<Scalars['Boolean']>;
  fee_gt?: InputMaybe<Scalars['Int']>;
  fee_gte?: InputMaybe<Scalars['Int']>;
  fee_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fee_lt?: InputMaybe<Scalars['Int']>;
  fee_lte?: InputMaybe<Scalars['Int']>;
  fee_ne?: InputMaybe<Scalars['Int']>;
  fee_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_exists?: InputMaybe<Scalars['Boolean']>;
  nonce_gt?: InputMaybe<Scalars['Int']>;
  nonce_gte?: InputMaybe<Scalars['Int']>;
  nonce_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nonce_lt?: InputMaybe<Scalars['Int']>;
  nonce_lte?: InputMaybe<Scalars['Int']>;
  nonce_ne?: InputMaybe<Scalars['Int']>;
  nonce_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandFeePayerBodyUpdateInput = {
  fee?: InputMaybe<Scalars['Int']>;
  fee_inc?: InputMaybe<Scalars['Int']>;
  fee_unset?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_inc?: InputMaybe<Scalars['Int']>;
  nonce_unset?: InputMaybe<Scalars['Boolean']>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandFeePayerInsertInput = {
  authorization?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<BlockTransactionZkappCommandZkappCommandFeePayerBodyInsertInput>;
};

export type BlockTransactionZkappCommandZkappCommandFeePayerQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandFeePayerQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandFeePayerQueryInput>>;
  authorization?: InputMaybe<Scalars['String']>;
  authorization_exists?: InputMaybe<Scalars['Boolean']>;
  authorization_gt?: InputMaybe<Scalars['String']>;
  authorization_gte?: InputMaybe<Scalars['String']>;
  authorization_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorization_lt?: InputMaybe<Scalars['String']>;
  authorization_lte?: InputMaybe<Scalars['String']>;
  authorization_ne?: InputMaybe<Scalars['String']>;
  authorization_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body?: InputMaybe<BlockTransactionZkappCommandZkappCommandFeePayerBodyQueryInput>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandFeePayerUpdateInput = {
  authorization?: InputMaybe<Scalars['String']>;
  authorization_unset?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<BlockTransactionZkappCommandZkappCommandFeePayerBodyUpdateInput>;
  body_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockTransactionZkappCommandZkappCommandInsertInput = {
  accountUpdates?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateInsertInput>>>;
  feePayer?: InputMaybe<BlockTransactionZkappCommandZkappCommandFeePayerInsertInput>;
  memo?: InputMaybe<Scalars['String']>;
};

export type BlockTransactionZkappCommandZkappCommandQueryInput = {
  AND?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandQueryInput>>;
  OR?: InputMaybe<Array<BlockTransactionZkappCommandZkappCommandQueryInput>>;
  accountUpdates?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateQueryInput>>>;
  accountUpdates_exists?: InputMaybe<Scalars['Boolean']>;
  accountUpdates_in?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateQueryInput>>>;
  accountUpdates_nin?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateQueryInput>>>;
  feePayer?: InputMaybe<BlockTransactionZkappCommandZkappCommandFeePayerQueryInput>;
  feePayer_exists?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  memo_exists?: InputMaybe<Scalars['Boolean']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_ne?: InputMaybe<Scalars['String']>;
  memo_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockTransactionZkappCommandZkappCommandUpdateInput = {
  accountUpdates?: InputMaybe<Array<InputMaybe<BlockTransactionZkappCommandZkappCommandAccountUpdateUpdateInput>>>;
  accountUpdates_unset?: InputMaybe<Scalars['Boolean']>;
  feePayer?: InputMaybe<BlockTransactionZkappCommandZkappCommandFeePayerUpdateInput>;
  feePayer_unset?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  memo_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockUpdateInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_unset?: InputMaybe<Scalars['Boolean']>;
  creator?: InputMaybe<Scalars['String']>;
  creatorAccount?: InputMaybe<BlockCreatorAccountUpdateInput>;
  creatorAccount_unset?: InputMaybe<Scalars['Boolean']>;
  creator_unset?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_unset?: InputMaybe<Scalars['Boolean']>;
  protocolState?: InputMaybe<BlockProtocolStateUpdateInput>;
  protocolState_unset?: InputMaybe<Scalars['Boolean']>;
  receivedTime?: InputMaybe<Scalars['DateTime']>;
  receivedTime_unset?: InputMaybe<Scalars['Boolean']>;
  snarkJobs?: InputMaybe<Array<InputMaybe<BlockSnarkJobUpdateInput>>>;
  snarkJobs_unset?: InputMaybe<Scalars['Boolean']>;
  stateHash?: InputMaybe<Scalars['String']>;
  stateHashField?: InputMaybe<Scalars['String']>;
  stateHashField_unset?: InputMaybe<Scalars['Boolean']>;
  stateHash_unset?: InputMaybe<Scalars['Boolean']>;
  transactions?: InputMaybe<BlockTransactionUpdateInput>;
  transactions_unset?: InputMaybe<Scalars['Boolean']>;
  winnerAccount?: InputMaybe<BlockWinnerAccountUpdateInput>;
  winnerAccount_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockWinnerAccount = {
  __typename?: 'BlockWinnerAccount';
  balance?: Maybe<BlockWinnerAccountBalance>;
  publicKey?: Maybe<Scalars['String']>;
};

export type BlockWinnerAccountBalance = {
  __typename?: 'BlockWinnerAccountBalance';
  blockHeight?: Maybe<Scalars['Int']>;
  liquid?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Long']>;
  stateHash?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Long']>;
  unknown?: Maybe<Scalars['Long']>;
};

export type BlockWinnerAccountBalanceInsertInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  liquid?: InputMaybe<Scalars['Int']>;
  locked?: InputMaybe<Scalars['Long']>;
  stateHash?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Long']>;
  unknown?: InputMaybe<Scalars['Long']>;
};

export type BlockWinnerAccountBalanceQueryInput = {
  AND?: InputMaybe<Array<BlockWinnerAccountBalanceQueryInput>>;
  OR?: InputMaybe<Array<BlockWinnerAccountBalanceQueryInput>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  liquid?: InputMaybe<Scalars['Int']>;
  liquid_exists?: InputMaybe<Scalars['Boolean']>;
  liquid_gt?: InputMaybe<Scalars['Int']>;
  liquid_gte?: InputMaybe<Scalars['Int']>;
  liquid_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  liquid_lt?: InputMaybe<Scalars['Int']>;
  liquid_lte?: InputMaybe<Scalars['Int']>;
  liquid_ne?: InputMaybe<Scalars['Int']>;
  liquid_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  locked?: InputMaybe<Scalars['Long']>;
  locked_exists?: InputMaybe<Scalars['Boolean']>;
  locked_gt?: InputMaybe<Scalars['Long']>;
  locked_gte?: InputMaybe<Scalars['Long']>;
  locked_in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  locked_lt?: InputMaybe<Scalars['Long']>;
  locked_lte?: InputMaybe<Scalars['Long']>;
  locked_ne?: InputMaybe<Scalars['Long']>;
  locked_nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  stateHash?: InputMaybe<Scalars['String']>;
  stateHash_exists?: InputMaybe<Scalars['Boolean']>;
  stateHash_gt?: InputMaybe<Scalars['String']>;
  stateHash_gte?: InputMaybe<Scalars['String']>;
  stateHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stateHash_lt?: InputMaybe<Scalars['String']>;
  stateHash_lte?: InputMaybe<Scalars['String']>;
  stateHash_ne?: InputMaybe<Scalars['String']>;
  stateHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  total?: InputMaybe<Scalars['Long']>;
  total_exists?: InputMaybe<Scalars['Boolean']>;
  total_gt?: InputMaybe<Scalars['Long']>;
  total_gte?: InputMaybe<Scalars['Long']>;
  total_in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  total_lt?: InputMaybe<Scalars['Long']>;
  total_lte?: InputMaybe<Scalars['Long']>;
  total_ne?: InputMaybe<Scalars['Long']>;
  total_nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  unknown?: InputMaybe<Scalars['Long']>;
  unknown_exists?: InputMaybe<Scalars['Boolean']>;
  unknown_gt?: InputMaybe<Scalars['Long']>;
  unknown_gte?: InputMaybe<Scalars['Long']>;
  unknown_in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  unknown_lt?: InputMaybe<Scalars['Long']>;
  unknown_lte?: InputMaybe<Scalars['Long']>;
  unknown_ne?: InputMaybe<Scalars['Long']>;
  unknown_nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
};

export type BlockWinnerAccountBalanceUpdateInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  liquid?: InputMaybe<Scalars['Int']>;
  liquid_inc?: InputMaybe<Scalars['Int']>;
  liquid_unset?: InputMaybe<Scalars['Boolean']>;
  locked?: InputMaybe<Scalars['Long']>;
  locked_unset?: InputMaybe<Scalars['Boolean']>;
  stateHash?: InputMaybe<Scalars['String']>;
  stateHash_unset?: InputMaybe<Scalars['Boolean']>;
  total?: InputMaybe<Scalars['Long']>;
  total_unset?: InputMaybe<Scalars['Boolean']>;
  unknown?: InputMaybe<Scalars['Long']>;
  unknown_unset?: InputMaybe<Scalars['Boolean']>;
};

export type BlockWinnerAccountInsertInput = {
  balance?: InputMaybe<BlockWinnerAccountBalanceInsertInput>;
  publicKey?: InputMaybe<Scalars['String']>;
};

export type BlockWinnerAccountQueryInput = {
  AND?: InputMaybe<Array<BlockWinnerAccountQueryInput>>;
  OR?: InputMaybe<Array<BlockWinnerAccountQueryInput>>;
  balance?: InputMaybe<BlockWinnerAccountBalanceQueryInput>;
  balance_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BlockWinnerAccountUpdateInput = {
  balance?: InputMaybe<BlockWinnerAccountBalanceUpdateInput>;
  balance_unset?: InputMaybe<Scalars['Boolean']>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type Feetransfer = {
  __typename?: 'Feetransfer';
  blockHeight?: Maybe<Scalars['Int']>;
  blockStateHash?: Maybe<Block>;
  canonical?: Maybe<Scalars['Boolean']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  fee?: Maybe<Scalars['Int']>;
  recipient?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type FeetransferBlockStateHashRelationInput = {
  create?: InputMaybe<BlockInsertInput>;
  link?: InputMaybe<Scalars['String']>;
};

export type FeetransferInsertInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockStateHash?: InputMaybe<FeetransferBlockStateHashRelationInput>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  fee?: InputMaybe<Scalars['Int']>;
  recipient?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FeetransferQueryInput = {
  AND?: InputMaybe<Array<FeetransferQueryInput>>;
  OR?: InputMaybe<Array<FeetransferQueryInput>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockStateHash?: InputMaybe<BlockQueryInput>;
  blockStateHash_exists?: InputMaybe<Scalars['Boolean']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_exists?: InputMaybe<Scalars['Boolean']>;
  canonical_ne?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_exists?: InputMaybe<Scalars['Boolean']>;
  dateTime_gt?: InputMaybe<Scalars['DateTime']>;
  dateTime_gte?: InputMaybe<Scalars['DateTime']>;
  dateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateTime_lt?: InputMaybe<Scalars['DateTime']>;
  dateTime_lte?: InputMaybe<Scalars['DateTime']>;
  dateTime_ne?: InputMaybe<Scalars['DateTime']>;
  dateTime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fee?: InputMaybe<Scalars['Int']>;
  fee_exists?: InputMaybe<Scalars['Boolean']>;
  fee_gt?: InputMaybe<Scalars['Int']>;
  fee_gte?: InputMaybe<Scalars['Int']>;
  fee_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fee_lt?: InputMaybe<Scalars['Int']>;
  fee_lte?: InputMaybe<Scalars['Int']>;
  fee_ne?: InputMaybe<Scalars['Int']>;
  fee_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  recipient?: InputMaybe<Scalars['String']>;
  recipient_exists?: InputMaybe<Scalars['Boolean']>;
  recipient_gt?: InputMaybe<Scalars['String']>;
  recipient_gte?: InputMaybe<Scalars['String']>;
  recipient_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  recipient_lt?: InputMaybe<Scalars['String']>;
  recipient_lte?: InputMaybe<Scalars['String']>;
  recipient_ne?: InputMaybe<Scalars['String']>;
  recipient_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum FeetransferSortByInput {
  BlockheightAsc = 'BLOCKHEIGHT_ASC',
  BlockheightDesc = 'BLOCKHEIGHT_DESC',
  BlockstatehashAsc = 'BLOCKSTATEHASH_ASC',
  BlockstatehashDesc = 'BLOCKSTATEHASH_DESC',
  DatetimeAsc = 'DATETIME_ASC',
  DatetimeDesc = 'DATETIME_DESC',
  FeeAsc = 'FEE_ASC',
  FeeDesc = 'FEE_DESC',
  RecipientAsc = 'RECIPIENT_ASC',
  RecipientDesc = 'RECIPIENT_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export type FeetransferUpdateInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  blockStateHash?: InputMaybe<FeetransferBlockStateHashRelationInput>;
  blockStateHash_unset?: InputMaybe<Scalars['Boolean']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_unset?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_unset?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Int']>;
  fee_inc?: InputMaybe<Scalars['Int']>;
  fee_unset?: InputMaybe<Scalars['Boolean']>;
  recipient?: InputMaybe<Scalars['String']>;
  recipient_unset?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_unset?: InputMaybe<Scalars['Boolean']>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyAccounts?: Maybe<DeleteManyPayload>;
  deleteManyBlocks?: Maybe<DeleteManyPayload>;
  deleteManyFeetransfers?: Maybe<DeleteManyPayload>;
  deleteManyNextstakes?: Maybe<DeleteManyPayload>;
  deleteManySnarks?: Maybe<DeleteManyPayload>;
  deleteManyStakes?: Maybe<DeleteManyPayload>;
  deleteManyTransactions?: Maybe<DeleteManyPayload>;
  deleteManyZkapps?: Maybe<DeleteManyPayload>;
  deleteOneAccount?: Maybe<Account>;
  deleteOneBlock?: Maybe<Block>;
  deleteOneFeetransfer?: Maybe<Feetransfer>;
  deleteOneNextstake?: Maybe<Nextstake>;
  deleteOneSnark?: Maybe<Snark>;
  deleteOneStake?: Maybe<Stake>;
  deleteOneTransaction?: Maybe<Transaction>;
  deleteOneZkapp?: Maybe<Zkapp>;
  insertManyAccounts?: Maybe<InsertManyPayload>;
  insertManyBlocks?: Maybe<InsertManyPayload>;
  insertManyFeetransfers?: Maybe<InsertManyPayload>;
  insertManyNextstakes?: Maybe<InsertManyPayload>;
  insertManySnarks?: Maybe<InsertManyPayload>;
  insertManyStakes?: Maybe<InsertManyPayload>;
  insertManyTransactions?: Maybe<InsertManyPayload>;
  insertManyZkapps?: Maybe<InsertManyPayload>;
  insertOneAccount?: Maybe<Account>;
  insertOneBlock?: Maybe<Block>;
  insertOneFeetransfer?: Maybe<Feetransfer>;
  insertOneNextstake?: Maybe<Nextstake>;
  insertOneSnark?: Maybe<Snark>;
  insertOneStake?: Maybe<Stake>;
  insertOneTransaction?: Maybe<Transaction>;
  insertOneZkapp?: Maybe<Zkapp>;
  replaceOneAccount?: Maybe<Account>;
  replaceOneBlock?: Maybe<Block>;
  replaceOneFeetransfer?: Maybe<Feetransfer>;
  replaceOneNextstake?: Maybe<Nextstake>;
  replaceOneSnark?: Maybe<Snark>;
  replaceOneStake?: Maybe<Stake>;
  replaceOneTransaction?: Maybe<Transaction>;
  replaceOneZkapp?: Maybe<Zkapp>;
  updateManyAccounts?: Maybe<UpdateManyPayload>;
  updateManyBlocks?: Maybe<UpdateManyPayload>;
  updateManyFeetransfers?: Maybe<UpdateManyPayload>;
  updateManyNextstakes?: Maybe<UpdateManyPayload>;
  updateManySnarks?: Maybe<UpdateManyPayload>;
  updateManyStakes?: Maybe<UpdateManyPayload>;
  updateManyTransactions?: Maybe<UpdateManyPayload>;
  updateManyZkapps?: Maybe<UpdateManyPayload>;
  updateOneAccount?: Maybe<Account>;
  updateOneBlock?: Maybe<Block>;
  updateOneFeetransfer?: Maybe<Feetransfer>;
  updateOneNextstake?: Maybe<Nextstake>;
  updateOneSnark?: Maybe<Snark>;
  updateOneStake?: Maybe<Stake>;
  updateOneTransaction?: Maybe<Transaction>;
  updateOneZkapp?: Maybe<Zkapp>;
  upsertOneAccount?: Maybe<Account>;
  upsertOneBlock?: Maybe<Block>;
  upsertOneFeetransfer?: Maybe<Feetransfer>;
  upsertOneNextstake?: Maybe<Nextstake>;
  upsertOneSnark?: Maybe<Snark>;
  upsertOneStake?: Maybe<Stake>;
  upsertOneTransaction?: Maybe<Transaction>;
  upsertOneZkapp?: Maybe<Zkapp>;
};


export type MutationDeleteManyAccountsArgs = {
  query?: InputMaybe<AccountQueryInput>;
};


export type MutationDeleteManyBlocksArgs = {
  query?: InputMaybe<BlockQueryInput>;
};


export type MutationDeleteManyFeetransfersArgs = {
  query?: InputMaybe<FeetransferQueryInput>;
};


export type MutationDeleteManyNextstakesArgs = {
  query?: InputMaybe<NextstakeQueryInput>;
};


export type MutationDeleteManySnarksArgs = {
  query?: InputMaybe<SnarkQueryInput>;
};


export type MutationDeleteManyStakesArgs = {
  query?: InputMaybe<StakeQueryInput>;
};


export type MutationDeleteManyTransactionsArgs = {
  query?: InputMaybe<TransactionQueryInput>;
};


export type MutationDeleteManyZkappsArgs = {
  query?: InputMaybe<ZkappQueryInput>;
};


export type MutationDeleteOneAccountArgs = {
  query: AccountQueryInput;
};


export type MutationDeleteOneBlockArgs = {
  query: BlockQueryInput;
};


export type MutationDeleteOneFeetransferArgs = {
  query: FeetransferQueryInput;
};


export type MutationDeleteOneNextstakeArgs = {
  query: NextstakeQueryInput;
};


export type MutationDeleteOneSnarkArgs = {
  query: SnarkQueryInput;
};


export type MutationDeleteOneStakeArgs = {
  query: StakeQueryInput;
};


export type MutationDeleteOneTransactionArgs = {
  query: TransactionQueryInput;
};


export type MutationDeleteOneZkappArgs = {
  query: ZkappQueryInput;
};


export type MutationInsertManyAccountsArgs = {
  data: Array<AccountInsertInput>;
};


export type MutationInsertManyBlocksArgs = {
  data: Array<BlockInsertInput>;
};


export type MutationInsertManyFeetransfersArgs = {
  data: Array<FeetransferInsertInput>;
};


export type MutationInsertManyNextstakesArgs = {
  data: Array<NextstakeInsertInput>;
};


export type MutationInsertManySnarksArgs = {
  data: Array<SnarkInsertInput>;
};


export type MutationInsertManyStakesArgs = {
  data: Array<StakeInsertInput>;
};


export type MutationInsertManyTransactionsArgs = {
  data: Array<TransactionInsertInput>;
};


export type MutationInsertManyZkappsArgs = {
  data: Array<ZkappInsertInput>;
};


export type MutationInsertOneAccountArgs = {
  data: AccountInsertInput;
};


export type MutationInsertOneBlockArgs = {
  data: BlockInsertInput;
};


export type MutationInsertOneFeetransferArgs = {
  data: FeetransferInsertInput;
};


export type MutationInsertOneNextstakeArgs = {
  data: NextstakeInsertInput;
};


export type MutationInsertOneSnarkArgs = {
  data: SnarkInsertInput;
};


export type MutationInsertOneStakeArgs = {
  data: StakeInsertInput;
};


export type MutationInsertOneTransactionArgs = {
  data: TransactionInsertInput;
};


export type MutationInsertOneZkappArgs = {
  data: ZkappInsertInput;
};


export type MutationReplaceOneAccountArgs = {
  data: AccountInsertInput;
  query?: InputMaybe<AccountQueryInput>;
};


export type MutationReplaceOneBlockArgs = {
  data: BlockInsertInput;
  query?: InputMaybe<BlockQueryInput>;
};


export type MutationReplaceOneFeetransferArgs = {
  data: FeetransferInsertInput;
  query?: InputMaybe<FeetransferQueryInput>;
};


export type MutationReplaceOneNextstakeArgs = {
  data: NextstakeInsertInput;
  query?: InputMaybe<NextstakeQueryInput>;
};


export type MutationReplaceOneSnarkArgs = {
  data: SnarkInsertInput;
  query?: InputMaybe<SnarkQueryInput>;
};


export type MutationReplaceOneStakeArgs = {
  data: StakeInsertInput;
  query?: InputMaybe<StakeQueryInput>;
};


export type MutationReplaceOneTransactionArgs = {
  data: TransactionInsertInput;
  query?: InputMaybe<TransactionQueryInput>;
};


export type MutationReplaceOneZkappArgs = {
  data: ZkappInsertInput;
  query?: InputMaybe<ZkappQueryInput>;
};


export type MutationUpdateManyAccountsArgs = {
  query?: InputMaybe<AccountQueryInput>;
  set: AccountUpdateInput;
};


export type MutationUpdateManyBlocksArgs = {
  query?: InputMaybe<BlockQueryInput>;
  set: BlockUpdateInput;
};


export type MutationUpdateManyFeetransfersArgs = {
  query?: InputMaybe<FeetransferQueryInput>;
  set: FeetransferUpdateInput;
};


export type MutationUpdateManyNextstakesArgs = {
  query?: InputMaybe<NextstakeQueryInput>;
  set: NextstakeUpdateInput;
};


export type MutationUpdateManySnarksArgs = {
  query?: InputMaybe<SnarkQueryInput>;
  set: SnarkUpdateInput;
};


export type MutationUpdateManyStakesArgs = {
  query?: InputMaybe<StakeQueryInput>;
  set: StakeUpdateInput;
};


export type MutationUpdateManyTransactionsArgs = {
  query?: InputMaybe<TransactionQueryInput>;
  set: TransactionUpdateInput;
};


export type MutationUpdateManyZkappsArgs = {
  query?: InputMaybe<ZkappQueryInput>;
  set: ZkappUpdateInput;
};


export type MutationUpdateOneAccountArgs = {
  query?: InputMaybe<AccountQueryInput>;
  set: AccountUpdateInput;
};


export type MutationUpdateOneBlockArgs = {
  query?: InputMaybe<BlockQueryInput>;
  set: BlockUpdateInput;
};


export type MutationUpdateOneFeetransferArgs = {
  query?: InputMaybe<FeetransferQueryInput>;
  set: FeetransferUpdateInput;
};


export type MutationUpdateOneNextstakeArgs = {
  query?: InputMaybe<NextstakeQueryInput>;
  set: NextstakeUpdateInput;
};


export type MutationUpdateOneSnarkArgs = {
  query?: InputMaybe<SnarkQueryInput>;
  set: SnarkUpdateInput;
};


export type MutationUpdateOneStakeArgs = {
  query?: InputMaybe<StakeQueryInput>;
  set: StakeUpdateInput;
};


export type MutationUpdateOneTransactionArgs = {
  query?: InputMaybe<TransactionQueryInput>;
  set: TransactionUpdateInput;
};


export type MutationUpdateOneZkappArgs = {
  query?: InputMaybe<ZkappQueryInput>;
  set: ZkappUpdateInput;
};


export type MutationUpsertOneAccountArgs = {
  data: AccountInsertInput;
  query?: InputMaybe<AccountQueryInput>;
};


export type MutationUpsertOneBlockArgs = {
  data: BlockInsertInput;
  query?: InputMaybe<BlockQueryInput>;
};


export type MutationUpsertOneFeetransferArgs = {
  data: FeetransferInsertInput;
  query?: InputMaybe<FeetransferQueryInput>;
};


export type MutationUpsertOneNextstakeArgs = {
  data: NextstakeInsertInput;
  query?: InputMaybe<NextstakeQueryInput>;
};


export type MutationUpsertOneSnarkArgs = {
  data: SnarkInsertInput;
  query?: InputMaybe<SnarkQueryInput>;
};


export type MutationUpsertOneStakeArgs = {
  data: StakeInsertInput;
  query?: InputMaybe<StakeQueryInput>;
};


export type MutationUpsertOneTransactionArgs = {
  data: TransactionInsertInput;
  query?: InputMaybe<TransactionQueryInput>;
};


export type MutationUpsertOneZkappArgs = {
  data: ZkappInsertInput;
  query?: InputMaybe<ZkappQueryInput>;
};

export type Nextstake = {
  __typename?: 'Nextstake';
  balance?: Maybe<Scalars['Float']>;
  delegate?: Maybe<Scalars['String']>;
  ledgerHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  permissions?: Maybe<NextstakePermission>;
  pk?: Maybe<Scalars['String']>;
  public_key?: Maybe<Scalars['String']>;
  receipt_chain_hash?: Maybe<Scalars['String']>;
  timing?: Maybe<NextstakeTiming>;
  token?: Maybe<Scalars['Int']>;
  voting_for?: Maybe<Scalars['String']>;
};

export type NextstakeInsertInput = {
  balance?: InputMaybe<Scalars['Float']>;
  delegate?: InputMaybe<Scalars['String']>;
  ledgerHash?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['Int']>;
  permissions?: InputMaybe<NextstakePermissionInsertInput>;
  pk?: InputMaybe<Scalars['String']>;
  public_key?: InputMaybe<Scalars['String']>;
  receipt_chain_hash?: InputMaybe<Scalars['String']>;
  timing?: InputMaybe<NextstakeTimingInsertInput>;
  token?: InputMaybe<Scalars['Int']>;
  voting_for?: InputMaybe<Scalars['String']>;
};

export type NextstakePermission = {
  __typename?: 'NextstakePermission';
  edit_state?: Maybe<Scalars['String']>;
  send?: Maybe<Scalars['String']>;
  set_delegate?: Maybe<Scalars['String']>;
  set_permissions?: Maybe<Scalars['String']>;
  set_verification_key?: Maybe<Scalars['String']>;
  stake?: Maybe<Scalars['Boolean']>;
};

export type NextstakePermissionInsertInput = {
  edit_state?: InputMaybe<Scalars['String']>;
  send?: InputMaybe<Scalars['String']>;
  set_delegate?: InputMaybe<Scalars['String']>;
  set_permissions?: InputMaybe<Scalars['String']>;
  set_verification_key?: InputMaybe<Scalars['String']>;
  stake?: InputMaybe<Scalars['Boolean']>;
};

export type NextstakePermissionQueryInput = {
  AND?: InputMaybe<Array<NextstakePermissionQueryInput>>;
  OR?: InputMaybe<Array<NextstakePermissionQueryInput>>;
  edit_state?: InputMaybe<Scalars['String']>;
  edit_state_exists?: InputMaybe<Scalars['Boolean']>;
  edit_state_gt?: InputMaybe<Scalars['String']>;
  edit_state_gte?: InputMaybe<Scalars['String']>;
  edit_state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  edit_state_lt?: InputMaybe<Scalars['String']>;
  edit_state_lte?: InputMaybe<Scalars['String']>;
  edit_state_ne?: InputMaybe<Scalars['String']>;
  edit_state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send?: InputMaybe<Scalars['String']>;
  send_exists?: InputMaybe<Scalars['Boolean']>;
  send_gt?: InputMaybe<Scalars['String']>;
  send_gte?: InputMaybe<Scalars['String']>;
  send_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send_lt?: InputMaybe<Scalars['String']>;
  send_lte?: InputMaybe<Scalars['String']>;
  send_ne?: InputMaybe<Scalars['String']>;
  send_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_delegate?: InputMaybe<Scalars['String']>;
  set_delegate_exists?: InputMaybe<Scalars['Boolean']>;
  set_delegate_gt?: InputMaybe<Scalars['String']>;
  set_delegate_gte?: InputMaybe<Scalars['String']>;
  set_delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_delegate_lt?: InputMaybe<Scalars['String']>;
  set_delegate_lte?: InputMaybe<Scalars['String']>;
  set_delegate_ne?: InputMaybe<Scalars['String']>;
  set_delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_permissions?: InputMaybe<Scalars['String']>;
  set_permissions_exists?: InputMaybe<Scalars['Boolean']>;
  set_permissions_gt?: InputMaybe<Scalars['String']>;
  set_permissions_gte?: InputMaybe<Scalars['String']>;
  set_permissions_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_permissions_lt?: InputMaybe<Scalars['String']>;
  set_permissions_lte?: InputMaybe<Scalars['String']>;
  set_permissions_ne?: InputMaybe<Scalars['String']>;
  set_permissions_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_verification_key?: InputMaybe<Scalars['String']>;
  set_verification_key_exists?: InputMaybe<Scalars['Boolean']>;
  set_verification_key_gt?: InputMaybe<Scalars['String']>;
  set_verification_key_gte?: InputMaybe<Scalars['String']>;
  set_verification_key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_verification_key_lt?: InputMaybe<Scalars['String']>;
  set_verification_key_lte?: InputMaybe<Scalars['String']>;
  set_verification_key_ne?: InputMaybe<Scalars['String']>;
  set_verification_key_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stake?: InputMaybe<Scalars['Boolean']>;
  stake_exists?: InputMaybe<Scalars['Boolean']>;
  stake_ne?: InputMaybe<Scalars['Boolean']>;
};

export type NextstakePermissionUpdateInput = {
  edit_state?: InputMaybe<Scalars['String']>;
  edit_state_unset?: InputMaybe<Scalars['Boolean']>;
  send?: InputMaybe<Scalars['String']>;
  send_unset?: InputMaybe<Scalars['Boolean']>;
  set_delegate?: InputMaybe<Scalars['String']>;
  set_delegate_unset?: InputMaybe<Scalars['Boolean']>;
  set_permissions?: InputMaybe<Scalars['String']>;
  set_permissions_unset?: InputMaybe<Scalars['Boolean']>;
  set_verification_key?: InputMaybe<Scalars['String']>;
  set_verification_key_unset?: InputMaybe<Scalars['Boolean']>;
  stake?: InputMaybe<Scalars['Boolean']>;
  stake_unset?: InputMaybe<Scalars['Boolean']>;
};

export type NextstakeQueryInput = {
  AND?: InputMaybe<Array<NextstakeQueryInput>>;
  OR?: InputMaybe<Array<NextstakeQueryInput>>;
  balance?: InputMaybe<Scalars['Float']>;
  balance_exists?: InputMaybe<Scalars['Boolean']>;
  balance_gt?: InputMaybe<Scalars['Float']>;
  balance_gte?: InputMaybe<Scalars['Float']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  balance_lt?: InputMaybe<Scalars['Float']>;
  balance_lte?: InputMaybe<Scalars['Float']>;
  balance_ne?: InputMaybe<Scalars['Float']>;
  balance_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_exists?: InputMaybe<Scalars['Boolean']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_ne?: InputMaybe<Scalars['String']>;
  delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ledgerHash?: InputMaybe<Scalars['String']>;
  ledgerHash_exists?: InputMaybe<Scalars['Boolean']>;
  ledgerHash_gt?: InputMaybe<Scalars['String']>;
  ledgerHash_gte?: InputMaybe<Scalars['String']>;
  ledgerHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ledgerHash_lt?: InputMaybe<Scalars['String']>;
  ledgerHash_lte?: InputMaybe<Scalars['String']>;
  ledgerHash_ne?: InputMaybe<Scalars['String']>;
  ledgerHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_exists?: InputMaybe<Scalars['Boolean']>;
  nonce_gt?: InputMaybe<Scalars['Int']>;
  nonce_gte?: InputMaybe<Scalars['Int']>;
  nonce_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nonce_lt?: InputMaybe<Scalars['Int']>;
  nonce_lte?: InputMaybe<Scalars['Int']>;
  nonce_ne?: InputMaybe<Scalars['Int']>;
  nonce_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  permissions?: InputMaybe<NextstakePermissionQueryInput>;
  permissions_exists?: InputMaybe<Scalars['Boolean']>;
  pk?: InputMaybe<Scalars['String']>;
  pk_exists?: InputMaybe<Scalars['Boolean']>;
  pk_gt?: InputMaybe<Scalars['String']>;
  pk_gte?: InputMaybe<Scalars['String']>;
  pk_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pk_lt?: InputMaybe<Scalars['String']>;
  pk_lte?: InputMaybe<Scalars['String']>;
  pk_ne?: InputMaybe<Scalars['String']>;
  pk_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  public_key?: InputMaybe<Scalars['String']>;
  public_key_exists?: InputMaybe<Scalars['Boolean']>;
  public_key_gt?: InputMaybe<Scalars['String']>;
  public_key_gte?: InputMaybe<Scalars['String']>;
  public_key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  public_key_lt?: InputMaybe<Scalars['String']>;
  public_key_lte?: InputMaybe<Scalars['String']>;
  public_key_ne?: InputMaybe<Scalars['String']>;
  public_key_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receipt_chain_hash?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_exists?: InputMaybe<Scalars['Boolean']>;
  receipt_chain_hash_gt?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_gte?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receipt_chain_hash_lt?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_lte?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_ne?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timing?: InputMaybe<NextstakeTimingQueryInput>;
  timing_exists?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['Int']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['Int']>;
  token_gte?: InputMaybe<Scalars['Int']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  token_lt?: InputMaybe<Scalars['Int']>;
  token_lte?: InputMaybe<Scalars['Int']>;
  token_ne?: InputMaybe<Scalars['Int']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  voting_for?: InputMaybe<Scalars['String']>;
  voting_for_exists?: InputMaybe<Scalars['Boolean']>;
  voting_for_gt?: InputMaybe<Scalars['String']>;
  voting_for_gte?: InputMaybe<Scalars['String']>;
  voting_for_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  voting_for_lt?: InputMaybe<Scalars['String']>;
  voting_for_lte?: InputMaybe<Scalars['String']>;
  voting_for_ne?: InputMaybe<Scalars['String']>;
  voting_for_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum NextstakeSortByInput {
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  DelegateAsc = 'DELEGATE_ASC',
  DelegateDesc = 'DELEGATE_DESC',
  LedgerhashAsc = 'LEDGERHASH_ASC',
  LedgerhashDesc = 'LEDGERHASH_DESC',
  NonceAsc = 'NONCE_ASC',
  NonceDesc = 'NONCE_DESC',
  PkAsc = 'PK_ASC',
  PkDesc = 'PK_DESC',
  PublicKeyAsc = 'PUBLIC_KEY_ASC',
  PublicKeyDesc = 'PUBLIC_KEY_DESC',
  ReceiptChainHashAsc = 'RECEIPT_CHAIN_HASH_ASC',
  ReceiptChainHashDesc = 'RECEIPT_CHAIN_HASH_DESC',
  TokenAsc = 'TOKEN_ASC',
  TokenDesc = 'TOKEN_DESC',
  VotingForAsc = 'VOTING_FOR_ASC',
  VotingForDesc = 'VOTING_FOR_DESC'
}

export type NextstakeTiming = {
  __typename?: 'NextstakeTiming';
  cliff_amount?: Maybe<Scalars['Float']>;
  cliff_time?: Maybe<Scalars['Int']>;
  initial_minimum_balance?: Maybe<Scalars['Float']>;
  vesting_increment?: Maybe<Scalars['Float']>;
  vesting_period?: Maybe<Scalars['Int']>;
};

export type NextstakeTimingInsertInput = {
  cliff_amount?: InputMaybe<Scalars['Float']>;
  cliff_time?: InputMaybe<Scalars['Int']>;
  initial_minimum_balance?: InputMaybe<Scalars['Float']>;
  vesting_increment?: InputMaybe<Scalars['Float']>;
  vesting_period?: InputMaybe<Scalars['Int']>;
};

export type NextstakeTimingQueryInput = {
  AND?: InputMaybe<Array<NextstakeTimingQueryInput>>;
  OR?: InputMaybe<Array<NextstakeTimingQueryInput>>;
  cliff_amount?: InputMaybe<Scalars['Float']>;
  cliff_amount_exists?: InputMaybe<Scalars['Boolean']>;
  cliff_amount_gt?: InputMaybe<Scalars['Float']>;
  cliff_amount_gte?: InputMaybe<Scalars['Float']>;
  cliff_amount_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cliff_amount_lt?: InputMaybe<Scalars['Float']>;
  cliff_amount_lte?: InputMaybe<Scalars['Float']>;
  cliff_amount_ne?: InputMaybe<Scalars['Float']>;
  cliff_amount_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cliff_time?: InputMaybe<Scalars['Int']>;
  cliff_time_exists?: InputMaybe<Scalars['Boolean']>;
  cliff_time_gt?: InputMaybe<Scalars['Int']>;
  cliff_time_gte?: InputMaybe<Scalars['Int']>;
  cliff_time_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cliff_time_lt?: InputMaybe<Scalars['Int']>;
  cliff_time_lte?: InputMaybe<Scalars['Int']>;
  cliff_time_ne?: InputMaybe<Scalars['Int']>;
  cliff_time_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  initial_minimum_balance?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_exists?: InputMaybe<Scalars['Boolean']>;
  initial_minimum_balance_gt?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_gte?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  initial_minimum_balance_lt?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_lte?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_ne?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vesting_increment?: InputMaybe<Scalars['Float']>;
  vesting_increment_exists?: InputMaybe<Scalars['Boolean']>;
  vesting_increment_gt?: InputMaybe<Scalars['Float']>;
  vesting_increment_gte?: InputMaybe<Scalars['Float']>;
  vesting_increment_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vesting_increment_lt?: InputMaybe<Scalars['Float']>;
  vesting_increment_lte?: InputMaybe<Scalars['Float']>;
  vesting_increment_ne?: InputMaybe<Scalars['Float']>;
  vesting_increment_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vesting_period?: InputMaybe<Scalars['Int']>;
  vesting_period_exists?: InputMaybe<Scalars['Boolean']>;
  vesting_period_gt?: InputMaybe<Scalars['Int']>;
  vesting_period_gte?: InputMaybe<Scalars['Int']>;
  vesting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  vesting_period_lt?: InputMaybe<Scalars['Int']>;
  vesting_period_lte?: InputMaybe<Scalars['Int']>;
  vesting_period_ne?: InputMaybe<Scalars['Int']>;
  vesting_period_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NextstakeTimingUpdateInput = {
  cliff_amount?: InputMaybe<Scalars['Float']>;
  cliff_amount_inc?: InputMaybe<Scalars['Float']>;
  cliff_amount_unset?: InputMaybe<Scalars['Boolean']>;
  cliff_time?: InputMaybe<Scalars['Int']>;
  cliff_time_inc?: InputMaybe<Scalars['Int']>;
  cliff_time_unset?: InputMaybe<Scalars['Boolean']>;
  initial_minimum_balance?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_inc?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_unset?: InputMaybe<Scalars['Boolean']>;
  vesting_increment?: InputMaybe<Scalars['Float']>;
  vesting_increment_inc?: InputMaybe<Scalars['Float']>;
  vesting_increment_unset?: InputMaybe<Scalars['Boolean']>;
  vesting_period?: InputMaybe<Scalars['Int']>;
  vesting_period_inc?: InputMaybe<Scalars['Int']>;
  vesting_period_unset?: InputMaybe<Scalars['Boolean']>;
};

export type NextstakeUpdateInput = {
  balance?: InputMaybe<Scalars['Float']>;
  balance_inc?: InputMaybe<Scalars['Float']>;
  balance_unset?: InputMaybe<Scalars['Boolean']>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_unset?: InputMaybe<Scalars['Boolean']>;
  ledgerHash?: InputMaybe<Scalars['String']>;
  ledgerHash_unset?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_inc?: InputMaybe<Scalars['Int']>;
  nonce_unset?: InputMaybe<Scalars['Boolean']>;
  permissions?: InputMaybe<NextstakePermissionUpdateInput>;
  permissions_unset?: InputMaybe<Scalars['Boolean']>;
  pk?: InputMaybe<Scalars['String']>;
  pk_unset?: InputMaybe<Scalars['Boolean']>;
  public_key?: InputMaybe<Scalars['String']>;
  public_key_unset?: InputMaybe<Scalars['Boolean']>;
  receipt_chain_hash?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_unset?: InputMaybe<Scalars['Boolean']>;
  timing?: InputMaybe<NextstakeTimingUpdateInput>;
  timing_unset?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['Int']>;
  token_inc?: InputMaybe<Scalars['Int']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
  voting_for?: InputMaybe<Scalars['String']>;
  voting_for_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Maybe<Account>>;
  block?: Maybe<Block>;
  blocks: Array<Maybe<Block>>;
  feetransfer?: Maybe<Feetransfer>;
  feetransfers: Array<Maybe<Feetransfer>>;
  nextstake?: Maybe<Nextstake>;
  nextstakes: Array<Maybe<Nextstake>>;
  snark?: Maybe<Snark>;
  snarks: Array<Maybe<Snark>>;
  stake?: Maybe<Stake>;
  stakes: Array<Maybe<Stake>>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Maybe<Transaction>>;
  zkapp?: Maybe<Zkapp>;
  zkapps: Array<Maybe<Zkapp>>;
};


export type QueryAccountArgs = {
  query?: InputMaybe<AccountQueryInput>;
};


export type QueryAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<AccountQueryInput>;
  sortBy?: InputMaybe<AccountSortByInput>;
};


export type QueryBlockArgs = {
  query?: InputMaybe<BlockQueryInput>;
};


export type QueryBlocksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<BlockQueryInput>;
  sortBy?: InputMaybe<BlockSortByInput>;
};


export type QueryFeetransferArgs = {
  query?: InputMaybe<FeetransferQueryInput>;
};


export type QueryFeetransfersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<FeetransferQueryInput>;
  sortBy?: InputMaybe<FeetransferSortByInput>;
};


export type QueryNextstakeArgs = {
  query?: InputMaybe<NextstakeQueryInput>;
};


export type QueryNextstakesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<NextstakeQueryInput>;
  sortBy?: InputMaybe<NextstakeSortByInput>;
};


export type QuerySnarkArgs = {
  query?: InputMaybe<SnarkQueryInput>;
};


export type QuerySnarksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<SnarkQueryInput>;
  sortBy?: InputMaybe<SnarkSortByInput>;
};


export type QueryStakeArgs = {
  query?: InputMaybe<StakeQueryInput>;
};


export type QueryStakesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<StakeQueryInput>;
  sortBy?: InputMaybe<StakeSortByInput>;
};


export type QueryTransactionArgs = {
  query?: InputMaybe<TransactionQueryInput>;
};


export type QueryTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<TransactionQueryInput>;
  sortBy?: InputMaybe<TransactionSortByInput>;
};


export type QueryZkappArgs = {
  query?: InputMaybe<ZkappQueryInput>;
};


export type QueryZkappsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<ZkappQueryInput>;
  sortBy?: InputMaybe<ZkappSortByInput>;
};

export type Snark = {
  __typename?: 'Snark';
  blockHeight?: Maybe<Scalars['Int']>;
  blockStateHash?: Maybe<Scalars['String']>;
  canonical?: Maybe<Scalars['Boolean']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  fee?: Maybe<Scalars['Float']>;
  prover?: Maybe<Scalars['String']>;
  workIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SnarkInsertInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  fee?: InputMaybe<Scalars['Float']>;
  prover?: InputMaybe<Scalars['String']>;
  workIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type SnarkQueryInput = {
  AND?: InputMaybe<Array<SnarkQueryInput>>;
  OR?: InputMaybe<Array<SnarkQueryInput>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_exists?: InputMaybe<Scalars['Boolean']>;
  blockStateHash_gt?: InputMaybe<Scalars['String']>;
  blockStateHash_gte?: InputMaybe<Scalars['String']>;
  blockStateHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockStateHash_lt?: InputMaybe<Scalars['String']>;
  blockStateHash_lte?: InputMaybe<Scalars['String']>;
  blockStateHash_ne?: InputMaybe<Scalars['String']>;
  blockStateHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_exists?: InputMaybe<Scalars['Boolean']>;
  canonical_ne?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_exists?: InputMaybe<Scalars['Boolean']>;
  dateTime_gt?: InputMaybe<Scalars['DateTime']>;
  dateTime_gte?: InputMaybe<Scalars['DateTime']>;
  dateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateTime_lt?: InputMaybe<Scalars['DateTime']>;
  dateTime_lte?: InputMaybe<Scalars['DateTime']>;
  dateTime_ne?: InputMaybe<Scalars['DateTime']>;
  dateTime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  fee?: InputMaybe<Scalars['Float']>;
  fee_exists?: InputMaybe<Scalars['Boolean']>;
  fee_gt?: InputMaybe<Scalars['Float']>;
  fee_gte?: InputMaybe<Scalars['Float']>;
  fee_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  fee_lt?: InputMaybe<Scalars['Float']>;
  fee_lte?: InputMaybe<Scalars['Float']>;
  fee_ne?: InputMaybe<Scalars['Float']>;
  fee_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  prover?: InputMaybe<Scalars['String']>;
  prover_exists?: InputMaybe<Scalars['Boolean']>;
  prover_gt?: InputMaybe<Scalars['String']>;
  prover_gte?: InputMaybe<Scalars['String']>;
  prover_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  prover_lt?: InputMaybe<Scalars['String']>;
  prover_lte?: InputMaybe<Scalars['String']>;
  prover_ne?: InputMaybe<Scalars['String']>;
  prover_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  workIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  workIds_exists?: InputMaybe<Scalars['Boolean']>;
  workIds_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  workIds_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum SnarkSortByInput {
  BlockheightAsc = 'BLOCKHEIGHT_ASC',
  BlockheightDesc = 'BLOCKHEIGHT_DESC',
  BlockstatehashAsc = 'BLOCKSTATEHASH_ASC',
  BlockstatehashDesc = 'BLOCKSTATEHASH_DESC',
  DatetimeAsc = 'DATETIME_ASC',
  DatetimeDesc = 'DATETIME_DESC',
  FeeAsc = 'FEE_ASC',
  FeeDesc = 'FEE_DESC',
  ProverAsc = 'PROVER_ASC',
  ProverDesc = 'PROVER_DESC'
}

export type SnarkUpdateInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_unset?: InputMaybe<Scalars['Boolean']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_unset?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_unset?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  fee_inc?: InputMaybe<Scalars['Float']>;
  fee_unset?: InputMaybe<Scalars['Boolean']>;
  prover?: InputMaybe<Scalars['String']>;
  prover_unset?: InputMaybe<Scalars['Boolean']>;
  workIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  workIds_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Stake = {
  __typename?: 'Stake';
  balance?: Maybe<Scalars['Float']>;
  chainId?: Maybe<Scalars['String']>;
  delegate?: Maybe<Scalars['String']>;
  epoch?: Maybe<Scalars['Int']>;
  ledgerHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  permissions?: Maybe<StakePermission>;
  pk?: Maybe<Scalars['String']>;
  public_key?: Maybe<Scalars['String']>;
  receipt_chain_hash?: Maybe<Scalars['String']>;
  timing?: Maybe<StakeTiming>;
  token?: Maybe<Scalars['Int']>;
  voting_for?: Maybe<Scalars['String']>;
};

export type StakeInsertInput = {
  balance?: InputMaybe<Scalars['Float']>;
  chainId?: InputMaybe<Scalars['String']>;
  delegate?: InputMaybe<Scalars['String']>;
  epoch?: InputMaybe<Scalars['Int']>;
  ledgerHash?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['Int']>;
  permissions?: InputMaybe<StakePermissionInsertInput>;
  pk?: InputMaybe<Scalars['String']>;
  public_key?: InputMaybe<Scalars['String']>;
  receipt_chain_hash?: InputMaybe<Scalars['String']>;
  timing?: InputMaybe<StakeTimingInsertInput>;
  token?: InputMaybe<Scalars['Int']>;
  voting_for?: InputMaybe<Scalars['String']>;
};

export type StakePermission = {
  __typename?: 'StakePermission';
  edit_state?: Maybe<Scalars['String']>;
  send?: Maybe<Scalars['String']>;
  set_delegate?: Maybe<Scalars['String']>;
  set_permissions?: Maybe<Scalars['String']>;
  set_verification_key?: Maybe<Scalars['String']>;
  stake?: Maybe<Scalars['Boolean']>;
};

export type StakePermissionInsertInput = {
  edit_state?: InputMaybe<Scalars['String']>;
  send?: InputMaybe<Scalars['String']>;
  set_delegate?: InputMaybe<Scalars['String']>;
  set_permissions?: InputMaybe<Scalars['String']>;
  set_verification_key?: InputMaybe<Scalars['String']>;
  stake?: InputMaybe<Scalars['Boolean']>;
};

export type StakePermissionQueryInput = {
  AND?: InputMaybe<Array<StakePermissionQueryInput>>;
  OR?: InputMaybe<Array<StakePermissionQueryInput>>;
  edit_state?: InputMaybe<Scalars['String']>;
  edit_state_exists?: InputMaybe<Scalars['Boolean']>;
  edit_state_gt?: InputMaybe<Scalars['String']>;
  edit_state_gte?: InputMaybe<Scalars['String']>;
  edit_state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  edit_state_lt?: InputMaybe<Scalars['String']>;
  edit_state_lte?: InputMaybe<Scalars['String']>;
  edit_state_ne?: InputMaybe<Scalars['String']>;
  edit_state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send?: InputMaybe<Scalars['String']>;
  send_exists?: InputMaybe<Scalars['Boolean']>;
  send_gt?: InputMaybe<Scalars['String']>;
  send_gte?: InputMaybe<Scalars['String']>;
  send_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send_lt?: InputMaybe<Scalars['String']>;
  send_lte?: InputMaybe<Scalars['String']>;
  send_ne?: InputMaybe<Scalars['String']>;
  send_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_delegate?: InputMaybe<Scalars['String']>;
  set_delegate_exists?: InputMaybe<Scalars['Boolean']>;
  set_delegate_gt?: InputMaybe<Scalars['String']>;
  set_delegate_gte?: InputMaybe<Scalars['String']>;
  set_delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_delegate_lt?: InputMaybe<Scalars['String']>;
  set_delegate_lte?: InputMaybe<Scalars['String']>;
  set_delegate_ne?: InputMaybe<Scalars['String']>;
  set_delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_permissions?: InputMaybe<Scalars['String']>;
  set_permissions_exists?: InputMaybe<Scalars['Boolean']>;
  set_permissions_gt?: InputMaybe<Scalars['String']>;
  set_permissions_gte?: InputMaybe<Scalars['String']>;
  set_permissions_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_permissions_lt?: InputMaybe<Scalars['String']>;
  set_permissions_lte?: InputMaybe<Scalars['String']>;
  set_permissions_ne?: InputMaybe<Scalars['String']>;
  set_permissions_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_verification_key?: InputMaybe<Scalars['String']>;
  set_verification_key_exists?: InputMaybe<Scalars['Boolean']>;
  set_verification_key_gt?: InputMaybe<Scalars['String']>;
  set_verification_key_gte?: InputMaybe<Scalars['String']>;
  set_verification_key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set_verification_key_lt?: InputMaybe<Scalars['String']>;
  set_verification_key_lte?: InputMaybe<Scalars['String']>;
  set_verification_key_ne?: InputMaybe<Scalars['String']>;
  set_verification_key_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stake?: InputMaybe<Scalars['Boolean']>;
  stake_exists?: InputMaybe<Scalars['Boolean']>;
  stake_ne?: InputMaybe<Scalars['Boolean']>;
};

export type StakePermissionUpdateInput = {
  edit_state?: InputMaybe<Scalars['String']>;
  edit_state_unset?: InputMaybe<Scalars['Boolean']>;
  send?: InputMaybe<Scalars['String']>;
  send_unset?: InputMaybe<Scalars['Boolean']>;
  set_delegate?: InputMaybe<Scalars['String']>;
  set_delegate_unset?: InputMaybe<Scalars['Boolean']>;
  set_permissions?: InputMaybe<Scalars['String']>;
  set_permissions_unset?: InputMaybe<Scalars['Boolean']>;
  set_verification_key?: InputMaybe<Scalars['String']>;
  set_verification_key_unset?: InputMaybe<Scalars['Boolean']>;
  stake?: InputMaybe<Scalars['Boolean']>;
  stake_unset?: InputMaybe<Scalars['Boolean']>;
};

export type StakeQueryInput = {
  AND?: InputMaybe<Array<StakeQueryInput>>;
  OR?: InputMaybe<Array<StakeQueryInput>>;
  balance?: InputMaybe<Scalars['Float']>;
  balance_exists?: InputMaybe<Scalars['Boolean']>;
  balance_gt?: InputMaybe<Scalars['Float']>;
  balance_gte?: InputMaybe<Scalars['Float']>;
  balance_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  balance_lt?: InputMaybe<Scalars['Float']>;
  balance_lte?: InputMaybe<Scalars['Float']>;
  balance_ne?: InputMaybe<Scalars['Float']>;
  balance_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  chainId?: InputMaybe<Scalars['String']>;
  chainId_exists?: InputMaybe<Scalars['Boolean']>;
  chainId_gt?: InputMaybe<Scalars['String']>;
  chainId_gte?: InputMaybe<Scalars['String']>;
  chainId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  chainId_lt?: InputMaybe<Scalars['String']>;
  chainId_lte?: InputMaybe<Scalars['String']>;
  chainId_ne?: InputMaybe<Scalars['String']>;
  chainId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_exists?: InputMaybe<Scalars['Boolean']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_ne?: InputMaybe<Scalars['String']>;
  delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  epoch?: InputMaybe<Scalars['Int']>;
  epoch_exists?: InputMaybe<Scalars['Boolean']>;
  epoch_gt?: InputMaybe<Scalars['Int']>;
  epoch_gte?: InputMaybe<Scalars['Int']>;
  epoch_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  epoch_lt?: InputMaybe<Scalars['Int']>;
  epoch_lte?: InputMaybe<Scalars['Int']>;
  epoch_ne?: InputMaybe<Scalars['Int']>;
  epoch_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  ledgerHash?: InputMaybe<Scalars['String']>;
  ledgerHash_exists?: InputMaybe<Scalars['Boolean']>;
  ledgerHash_gt?: InputMaybe<Scalars['String']>;
  ledgerHash_gte?: InputMaybe<Scalars['String']>;
  ledgerHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ledgerHash_lt?: InputMaybe<Scalars['String']>;
  ledgerHash_lte?: InputMaybe<Scalars['String']>;
  ledgerHash_ne?: InputMaybe<Scalars['String']>;
  ledgerHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_exists?: InputMaybe<Scalars['Boolean']>;
  nonce_gt?: InputMaybe<Scalars['Int']>;
  nonce_gte?: InputMaybe<Scalars['Int']>;
  nonce_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nonce_lt?: InputMaybe<Scalars['Int']>;
  nonce_lte?: InputMaybe<Scalars['Int']>;
  nonce_ne?: InputMaybe<Scalars['Int']>;
  nonce_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  permissions?: InputMaybe<StakePermissionQueryInput>;
  permissions_exists?: InputMaybe<Scalars['Boolean']>;
  pk?: InputMaybe<Scalars['String']>;
  pk_exists?: InputMaybe<Scalars['Boolean']>;
  pk_gt?: InputMaybe<Scalars['String']>;
  pk_gte?: InputMaybe<Scalars['String']>;
  pk_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pk_lt?: InputMaybe<Scalars['String']>;
  pk_lte?: InputMaybe<Scalars['String']>;
  pk_ne?: InputMaybe<Scalars['String']>;
  pk_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  public_key?: InputMaybe<Scalars['String']>;
  public_key_exists?: InputMaybe<Scalars['Boolean']>;
  public_key_gt?: InputMaybe<Scalars['String']>;
  public_key_gte?: InputMaybe<Scalars['String']>;
  public_key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  public_key_lt?: InputMaybe<Scalars['String']>;
  public_key_lte?: InputMaybe<Scalars['String']>;
  public_key_ne?: InputMaybe<Scalars['String']>;
  public_key_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receipt_chain_hash?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_exists?: InputMaybe<Scalars['Boolean']>;
  receipt_chain_hash_gt?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_gte?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receipt_chain_hash_lt?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_lte?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_ne?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timing?: InputMaybe<StakeTimingQueryInput>;
  timing_exists?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['Int']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['Int']>;
  token_gte?: InputMaybe<Scalars['Int']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  token_lt?: InputMaybe<Scalars['Int']>;
  token_lte?: InputMaybe<Scalars['Int']>;
  token_ne?: InputMaybe<Scalars['Int']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  voting_for?: InputMaybe<Scalars['String']>;
  voting_for_exists?: InputMaybe<Scalars['Boolean']>;
  voting_for_gt?: InputMaybe<Scalars['String']>;
  voting_for_gte?: InputMaybe<Scalars['String']>;
  voting_for_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  voting_for_lt?: InputMaybe<Scalars['String']>;
  voting_for_lte?: InputMaybe<Scalars['String']>;
  voting_for_ne?: InputMaybe<Scalars['String']>;
  voting_for_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum StakeSortByInput {
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  ChainidAsc = 'CHAINID_ASC',
  ChainidDesc = 'CHAINID_DESC',
  DelegateAsc = 'DELEGATE_ASC',
  DelegateDesc = 'DELEGATE_DESC',
  EpochAsc = 'EPOCH_ASC',
  EpochDesc = 'EPOCH_DESC',
  LedgerhashAsc = 'LEDGERHASH_ASC',
  LedgerhashDesc = 'LEDGERHASH_DESC',
  NonceAsc = 'NONCE_ASC',
  NonceDesc = 'NONCE_DESC',
  PkAsc = 'PK_ASC',
  PkDesc = 'PK_DESC',
  PublicKeyAsc = 'PUBLIC_KEY_ASC',
  PublicKeyDesc = 'PUBLIC_KEY_DESC',
  ReceiptChainHashAsc = 'RECEIPT_CHAIN_HASH_ASC',
  ReceiptChainHashDesc = 'RECEIPT_CHAIN_HASH_DESC',
  TokenAsc = 'TOKEN_ASC',
  TokenDesc = 'TOKEN_DESC',
  VotingForAsc = 'VOTING_FOR_ASC',
  VotingForDesc = 'VOTING_FOR_DESC'
}

export type StakeTiming = {
  __typename?: 'StakeTiming';
  cliff_amount?: Maybe<Scalars['Float']>;
  cliff_time?: Maybe<Scalars['Int']>;
  initial_minimum_balance?: Maybe<Scalars['Float']>;
  timed_epoch_end?: Maybe<Scalars['Boolean']>;
  timed_in_epoch?: Maybe<Scalars['Boolean']>;
  timed_weighting?: Maybe<Scalars['Float']>;
  untimed_slot?: Maybe<Scalars['Int']>;
  vesting_increment?: Maybe<Scalars['Float']>;
  vesting_period?: Maybe<Scalars['Int']>;
};

export type StakeTimingInsertInput = {
  cliff_amount?: InputMaybe<Scalars['Float']>;
  cliff_time?: InputMaybe<Scalars['Int']>;
  initial_minimum_balance?: InputMaybe<Scalars['Float']>;
  timed_epoch_end?: InputMaybe<Scalars['Boolean']>;
  timed_in_epoch?: InputMaybe<Scalars['Boolean']>;
  timed_weighting?: InputMaybe<Scalars['Float']>;
  untimed_slot?: InputMaybe<Scalars['Int']>;
  vesting_increment?: InputMaybe<Scalars['Float']>;
  vesting_period?: InputMaybe<Scalars['Int']>;
};

export type StakeTimingQueryInput = {
  AND?: InputMaybe<Array<StakeTimingQueryInput>>;
  OR?: InputMaybe<Array<StakeTimingQueryInput>>;
  cliff_amount?: InputMaybe<Scalars['Float']>;
  cliff_amount_exists?: InputMaybe<Scalars['Boolean']>;
  cliff_amount_gt?: InputMaybe<Scalars['Float']>;
  cliff_amount_gte?: InputMaybe<Scalars['Float']>;
  cliff_amount_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cliff_amount_lt?: InputMaybe<Scalars['Float']>;
  cliff_amount_lte?: InputMaybe<Scalars['Float']>;
  cliff_amount_ne?: InputMaybe<Scalars['Float']>;
  cliff_amount_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  cliff_time?: InputMaybe<Scalars['Int']>;
  cliff_time_exists?: InputMaybe<Scalars['Boolean']>;
  cliff_time_gt?: InputMaybe<Scalars['Int']>;
  cliff_time_gte?: InputMaybe<Scalars['Int']>;
  cliff_time_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cliff_time_lt?: InputMaybe<Scalars['Int']>;
  cliff_time_lte?: InputMaybe<Scalars['Int']>;
  cliff_time_ne?: InputMaybe<Scalars['Int']>;
  cliff_time_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  initial_minimum_balance?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_exists?: InputMaybe<Scalars['Boolean']>;
  initial_minimum_balance_gt?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_gte?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  initial_minimum_balance_lt?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_lte?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_ne?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  timed_epoch_end?: InputMaybe<Scalars['Boolean']>;
  timed_epoch_end_exists?: InputMaybe<Scalars['Boolean']>;
  timed_epoch_end_ne?: InputMaybe<Scalars['Boolean']>;
  timed_in_epoch?: InputMaybe<Scalars['Boolean']>;
  timed_in_epoch_exists?: InputMaybe<Scalars['Boolean']>;
  timed_in_epoch_ne?: InputMaybe<Scalars['Boolean']>;
  timed_weighting?: InputMaybe<Scalars['Float']>;
  timed_weighting_exists?: InputMaybe<Scalars['Boolean']>;
  timed_weighting_gt?: InputMaybe<Scalars['Float']>;
  timed_weighting_gte?: InputMaybe<Scalars['Float']>;
  timed_weighting_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  timed_weighting_lt?: InputMaybe<Scalars['Float']>;
  timed_weighting_lte?: InputMaybe<Scalars['Float']>;
  timed_weighting_ne?: InputMaybe<Scalars['Float']>;
  timed_weighting_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  untimed_slot?: InputMaybe<Scalars['Int']>;
  untimed_slot_exists?: InputMaybe<Scalars['Boolean']>;
  untimed_slot_gt?: InputMaybe<Scalars['Int']>;
  untimed_slot_gte?: InputMaybe<Scalars['Int']>;
  untimed_slot_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  untimed_slot_lt?: InputMaybe<Scalars['Int']>;
  untimed_slot_lte?: InputMaybe<Scalars['Int']>;
  untimed_slot_ne?: InputMaybe<Scalars['Int']>;
  untimed_slot_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  vesting_increment?: InputMaybe<Scalars['Float']>;
  vesting_increment_exists?: InputMaybe<Scalars['Boolean']>;
  vesting_increment_gt?: InputMaybe<Scalars['Float']>;
  vesting_increment_gte?: InputMaybe<Scalars['Float']>;
  vesting_increment_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vesting_increment_lt?: InputMaybe<Scalars['Float']>;
  vesting_increment_lte?: InputMaybe<Scalars['Float']>;
  vesting_increment_ne?: InputMaybe<Scalars['Float']>;
  vesting_increment_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  vesting_period?: InputMaybe<Scalars['Int']>;
  vesting_period_exists?: InputMaybe<Scalars['Boolean']>;
  vesting_period_gt?: InputMaybe<Scalars['Int']>;
  vesting_period_gte?: InputMaybe<Scalars['Int']>;
  vesting_period_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  vesting_period_lt?: InputMaybe<Scalars['Int']>;
  vesting_period_lte?: InputMaybe<Scalars['Int']>;
  vesting_period_ne?: InputMaybe<Scalars['Int']>;
  vesting_period_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type StakeTimingUpdateInput = {
  cliff_amount?: InputMaybe<Scalars['Float']>;
  cliff_amount_inc?: InputMaybe<Scalars['Float']>;
  cliff_amount_unset?: InputMaybe<Scalars['Boolean']>;
  cliff_time?: InputMaybe<Scalars['Int']>;
  cliff_time_inc?: InputMaybe<Scalars['Int']>;
  cliff_time_unset?: InputMaybe<Scalars['Boolean']>;
  initial_minimum_balance?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_inc?: InputMaybe<Scalars['Float']>;
  initial_minimum_balance_unset?: InputMaybe<Scalars['Boolean']>;
  timed_epoch_end?: InputMaybe<Scalars['Boolean']>;
  timed_epoch_end_unset?: InputMaybe<Scalars['Boolean']>;
  timed_in_epoch?: InputMaybe<Scalars['Boolean']>;
  timed_in_epoch_unset?: InputMaybe<Scalars['Boolean']>;
  timed_weighting?: InputMaybe<Scalars['Float']>;
  timed_weighting_inc?: InputMaybe<Scalars['Float']>;
  timed_weighting_unset?: InputMaybe<Scalars['Boolean']>;
  untimed_slot?: InputMaybe<Scalars['Int']>;
  untimed_slot_inc?: InputMaybe<Scalars['Int']>;
  untimed_slot_unset?: InputMaybe<Scalars['Boolean']>;
  vesting_increment?: InputMaybe<Scalars['Float']>;
  vesting_increment_inc?: InputMaybe<Scalars['Float']>;
  vesting_increment_unset?: InputMaybe<Scalars['Boolean']>;
  vesting_period?: InputMaybe<Scalars['Int']>;
  vesting_period_inc?: InputMaybe<Scalars['Int']>;
  vesting_period_unset?: InputMaybe<Scalars['Boolean']>;
};

export type StakeUpdateInput = {
  balance?: InputMaybe<Scalars['Float']>;
  balance_inc?: InputMaybe<Scalars['Float']>;
  balance_unset?: InputMaybe<Scalars['Boolean']>;
  chainId?: InputMaybe<Scalars['String']>;
  chainId_unset?: InputMaybe<Scalars['Boolean']>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_unset?: InputMaybe<Scalars['Boolean']>;
  epoch?: InputMaybe<Scalars['Int']>;
  epoch_inc?: InputMaybe<Scalars['Int']>;
  epoch_unset?: InputMaybe<Scalars['Boolean']>;
  ledgerHash?: InputMaybe<Scalars['String']>;
  ledgerHash_unset?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_inc?: InputMaybe<Scalars['Int']>;
  nonce_unset?: InputMaybe<Scalars['Boolean']>;
  permissions?: InputMaybe<StakePermissionUpdateInput>;
  permissions_unset?: InputMaybe<Scalars['Boolean']>;
  pk?: InputMaybe<Scalars['String']>;
  pk_unset?: InputMaybe<Scalars['Boolean']>;
  public_key?: InputMaybe<Scalars['String']>;
  public_key_unset?: InputMaybe<Scalars['Boolean']>;
  receipt_chain_hash?: InputMaybe<Scalars['String']>;
  receipt_chain_hash_unset?: InputMaybe<Scalars['Boolean']>;
  timing?: InputMaybe<StakeTimingUpdateInput>;
  timing_unset?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['Int']>;
  token_inc?: InputMaybe<Scalars['Int']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
  voting_for?: InputMaybe<Scalars['String']>;
  voting_for_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount?: Maybe<Scalars['Float']>;
  blockHeight?: Maybe<Scalars['Int']>;
  blockStateHash?: Maybe<Scalars['String']>;
  canonical?: Maybe<Scalars['Boolean']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  failureReason?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  feePayer?: Maybe<TransactionFeePayer>;
  feeToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  fromAccount?: Maybe<TransactionFromAccount>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isDelegation?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
  receiver?: Maybe<TransactionReceiver>;
  source?: Maybe<TransactionSource>;
  to?: Maybe<Scalars['String']>;
  toAccount?: Maybe<TransactionToAccount>;
  token?: Maybe<Scalars['String']>;
};

export type TransactionFeePayer = {
  __typename?: 'TransactionFeePayer';
  token?: Maybe<Scalars['String']>;
};

export type TransactionFeePayerInsertInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type TransactionFeePayerQueryInput = {
  AND?: InputMaybe<Array<TransactionFeePayerQueryInput>>;
  OR?: InputMaybe<Array<TransactionFeePayerQueryInput>>;
  token?: InputMaybe<Scalars['String']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_ne?: InputMaybe<Scalars['String']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TransactionFeePayerUpdateInput = {
  token?: InputMaybe<Scalars['String']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionFromAccount = {
  __typename?: 'TransactionFromAccount';
  token?: Maybe<Scalars['String']>;
};

export type TransactionFromAccountInsertInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type TransactionFromAccountQueryInput = {
  AND?: InputMaybe<Array<TransactionFromAccountQueryInput>>;
  OR?: InputMaybe<Array<TransactionFromAccountQueryInput>>;
  token?: InputMaybe<Scalars['String']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_ne?: InputMaybe<Scalars['String']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TransactionFromAccountUpdateInput = {
  token?: InputMaybe<Scalars['String']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionInsertInput = {
  amount?: InputMaybe<Scalars['Float']>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  failureReason?: InputMaybe<Scalars['String']>;
  fee?: InputMaybe<Scalars['Float']>;
  feePayer?: InputMaybe<TransactionFeePayerInsertInput>;
  feeToken?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  fromAccount?: InputMaybe<TransactionFromAccountInsertInput>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isDelegation?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['Int']>;
  receiver?: InputMaybe<TransactionReceiverInsertInput>;
  source?: InputMaybe<TransactionSourceInsertInput>;
  to?: InputMaybe<Scalars['String']>;
  toAccount?: InputMaybe<TransactionToAccountInsertInput>;
  token?: InputMaybe<Scalars['String']>;
};

export type TransactionQueryInput = {
  AND?: InputMaybe<Array<TransactionQueryInput>>;
  OR?: InputMaybe<Array<TransactionQueryInput>>;
  amount?: InputMaybe<Scalars['Float']>;
  amount_exists?: InputMaybe<Scalars['Boolean']>;
  amount_gt?: InputMaybe<Scalars['Float']>;
  amount_gte?: InputMaybe<Scalars['Float']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  amount_lt?: InputMaybe<Scalars['Float']>;
  amount_lte?: InputMaybe<Scalars['Float']>;
  amount_ne?: InputMaybe<Scalars['Float']>;
  amount_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_exists?: InputMaybe<Scalars['Boolean']>;
  blockStateHash_gt?: InputMaybe<Scalars['String']>;
  blockStateHash_gte?: InputMaybe<Scalars['String']>;
  blockStateHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  blockStateHash_lt?: InputMaybe<Scalars['String']>;
  blockStateHash_lte?: InputMaybe<Scalars['String']>;
  blockStateHash_ne?: InputMaybe<Scalars['String']>;
  blockStateHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_exists?: InputMaybe<Scalars['Boolean']>;
  canonical_ne?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_exists?: InputMaybe<Scalars['Boolean']>;
  dateTime_gt?: InputMaybe<Scalars['DateTime']>;
  dateTime_gte?: InputMaybe<Scalars['DateTime']>;
  dateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateTime_lt?: InputMaybe<Scalars['DateTime']>;
  dateTime_lte?: InputMaybe<Scalars['DateTime']>;
  dateTime_ne?: InputMaybe<Scalars['DateTime']>;
  dateTime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  failureReason?: InputMaybe<Scalars['String']>;
  failureReason_exists?: InputMaybe<Scalars['Boolean']>;
  failureReason_gt?: InputMaybe<Scalars['String']>;
  failureReason_gte?: InputMaybe<Scalars['String']>;
  failureReason_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  failureReason_lt?: InputMaybe<Scalars['String']>;
  failureReason_lte?: InputMaybe<Scalars['String']>;
  failureReason_ne?: InputMaybe<Scalars['String']>;
  failureReason_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fee?: InputMaybe<Scalars['Float']>;
  feePayer?: InputMaybe<TransactionFeePayerQueryInput>;
  feePayer_exists?: InputMaybe<Scalars['Boolean']>;
  feeToken?: InputMaybe<Scalars['String']>;
  feeToken_exists?: InputMaybe<Scalars['Boolean']>;
  feeToken_gt?: InputMaybe<Scalars['String']>;
  feeToken_gte?: InputMaybe<Scalars['String']>;
  feeToken_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  feeToken_lt?: InputMaybe<Scalars['String']>;
  feeToken_lte?: InputMaybe<Scalars['String']>;
  feeToken_ne?: InputMaybe<Scalars['String']>;
  feeToken_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fee_exists?: InputMaybe<Scalars['Boolean']>;
  fee_gt?: InputMaybe<Scalars['Float']>;
  fee_gte?: InputMaybe<Scalars['Float']>;
  fee_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  fee_lt?: InputMaybe<Scalars['Float']>;
  fee_lte?: InputMaybe<Scalars['Float']>;
  fee_ne?: InputMaybe<Scalars['Float']>;
  fee_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  from?: InputMaybe<Scalars['String']>;
  fromAccount?: InputMaybe<TransactionFromAccountQueryInput>;
  fromAccount_exists?: InputMaybe<Scalars['Boolean']>;
  from_exists?: InputMaybe<Scalars['Boolean']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_ne?: InputMaybe<Scalars['String']>;
  from_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_ne?: InputMaybe<Scalars['String']>;
  id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDelegation?: InputMaybe<Scalars['Boolean']>;
  isDelegation_exists?: InputMaybe<Scalars['Boolean']>;
  isDelegation_ne?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Scalars['String']>;
  kind_exists?: InputMaybe<Scalars['Boolean']>;
  kind_gt?: InputMaybe<Scalars['String']>;
  kind_gte?: InputMaybe<Scalars['String']>;
  kind_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  kind_lt?: InputMaybe<Scalars['String']>;
  kind_lte?: InputMaybe<Scalars['String']>;
  kind_ne?: InputMaybe<Scalars['String']>;
  kind_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  memo?: InputMaybe<Scalars['String']>;
  memo_exists?: InputMaybe<Scalars['Boolean']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_ne?: InputMaybe<Scalars['String']>;
  memo_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_exists?: InputMaybe<Scalars['Boolean']>;
  nonce_gt?: InputMaybe<Scalars['Int']>;
  nonce_gte?: InputMaybe<Scalars['Int']>;
  nonce_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nonce_lt?: InputMaybe<Scalars['Int']>;
  nonce_lte?: InputMaybe<Scalars['Int']>;
  nonce_ne?: InputMaybe<Scalars['Int']>;
  nonce_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  receiver?: InputMaybe<TransactionReceiverQueryInput>;
  receiver_exists?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<TransactionSourceQueryInput>;
  source_exists?: InputMaybe<Scalars['Boolean']>;
  to?: InputMaybe<Scalars['String']>;
  toAccount?: InputMaybe<TransactionToAccountQueryInput>;
  toAccount_exists?: InputMaybe<Scalars['Boolean']>;
  to_exists?: InputMaybe<Scalars['Boolean']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_ne?: InputMaybe<Scalars['String']>;
  to_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token?: InputMaybe<Scalars['String']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_ne?: InputMaybe<Scalars['String']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TransactionReceiver = {
  __typename?: 'TransactionReceiver';
  publicKey?: Maybe<Scalars['String']>;
};

export type TransactionReceiverInsertInput = {
  publicKey?: InputMaybe<Scalars['String']>;
};

export type TransactionReceiverQueryInput = {
  AND?: InputMaybe<Array<TransactionReceiverQueryInput>>;
  OR?: InputMaybe<Array<TransactionReceiverQueryInput>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TransactionReceiverUpdateInput = {
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export enum TransactionSortByInput {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  BlockheightAsc = 'BLOCKHEIGHT_ASC',
  BlockheightDesc = 'BLOCKHEIGHT_DESC',
  BlockstatehashAsc = 'BLOCKSTATEHASH_ASC',
  BlockstatehashDesc = 'BLOCKSTATEHASH_DESC',
  DatetimeAsc = 'DATETIME_ASC',
  DatetimeDesc = 'DATETIME_DESC',
  FailurereasonAsc = 'FAILUREREASON_ASC',
  FailurereasonDesc = 'FAILUREREASON_DESC',
  FeetokenAsc = 'FEETOKEN_ASC',
  FeetokenDesc = 'FEETOKEN_DESC',
  FeeAsc = 'FEE_ASC',
  FeeDesc = 'FEE_DESC',
  FromAsc = 'FROM_ASC',
  FromDesc = 'FROM_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KindAsc = 'KIND_ASC',
  KindDesc = 'KIND_DESC',
  MemoAsc = 'MEMO_ASC',
  MemoDesc = 'MEMO_DESC',
  NonceAsc = 'NONCE_ASC',
  NonceDesc = 'NONCE_DESC',
  TokenAsc = 'TOKEN_ASC',
  TokenDesc = 'TOKEN_DESC',
  ToAsc = 'TO_ASC',
  ToDesc = 'TO_DESC'
}

export type TransactionSource = {
  __typename?: 'TransactionSource';
  publicKey?: Maybe<Scalars['String']>;
};

export type TransactionSourceInsertInput = {
  publicKey?: InputMaybe<Scalars['String']>;
};

export type TransactionSourceQueryInput = {
  AND?: InputMaybe<Array<TransactionSourceQueryInput>>;
  OR?: InputMaybe<Array<TransactionSourceQueryInput>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TransactionSourceUpdateInput = {
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionToAccount = {
  __typename?: 'TransactionToAccount';
  token?: Maybe<Scalars['String']>;
};

export type TransactionToAccountInsertInput = {
  token?: InputMaybe<Scalars['String']>;
};

export type TransactionToAccountQueryInput = {
  AND?: InputMaybe<Array<TransactionToAccountQueryInput>>;
  OR?: InputMaybe<Array<TransactionToAccountQueryInput>>;
  token?: InputMaybe<Scalars['String']>;
  token_exists?: InputMaybe<Scalars['Boolean']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_ne?: InputMaybe<Scalars['String']>;
  token_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TransactionToAccountUpdateInput = {
  token?: InputMaybe<Scalars['String']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  amount_inc?: InputMaybe<Scalars['Float']>;
  amount_unset?: InputMaybe<Scalars['Boolean']>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  blockStateHash?: InputMaybe<Scalars['String']>;
  blockStateHash_unset?: InputMaybe<Scalars['Boolean']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_unset?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_unset?: InputMaybe<Scalars['Boolean']>;
  failureReason?: InputMaybe<Scalars['String']>;
  failureReason_unset?: InputMaybe<Scalars['Boolean']>;
  fee?: InputMaybe<Scalars['Float']>;
  feePayer?: InputMaybe<TransactionFeePayerUpdateInput>;
  feePayer_unset?: InputMaybe<Scalars['Boolean']>;
  feeToken?: InputMaybe<Scalars['String']>;
  feeToken_unset?: InputMaybe<Scalars['Boolean']>;
  fee_inc?: InputMaybe<Scalars['Float']>;
  fee_unset?: InputMaybe<Scalars['Boolean']>;
  from?: InputMaybe<Scalars['String']>;
  fromAccount?: InputMaybe<TransactionFromAccountUpdateInput>;
  fromAccount_unset?: InputMaybe<Scalars['Boolean']>;
  from_unset?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  id_unset?: InputMaybe<Scalars['Boolean']>;
  isDelegation?: InputMaybe<Scalars['Boolean']>;
  isDelegation_unset?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Scalars['String']>;
  kind_unset?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  memo_unset?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_inc?: InputMaybe<Scalars['Int']>;
  nonce_unset?: InputMaybe<Scalars['Boolean']>;
  receiver?: InputMaybe<TransactionReceiverUpdateInput>;
  receiver_unset?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<TransactionSourceUpdateInput>;
  source_unset?: InputMaybe<Scalars['Boolean']>;
  to?: InputMaybe<Scalars['String']>;
  toAccount?: InputMaybe<TransactionToAccountUpdateInput>;
  toAccount_unset?: InputMaybe<Scalars['Boolean']>;
  to_unset?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<Scalars['String']>;
  token_unset?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type Zkapp = {
  __typename?: 'Zkapp';
  blockHeight?: Maybe<Scalars['Int']>;
  blockStateHash?: Maybe<Block>;
  canonical?: Maybe<Scalars['Boolean']>;
  dateTime?: Maybe<Scalars['DateTime']>;
  failureReason?: Maybe<Array<Maybe<ZkappFailureReason>>>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  zkappCommand?: Maybe<ZkappZkappCommand>;
};

export type ZkappBlockStateHashRelationInput = {
  create?: InputMaybe<BlockInsertInput>;
  link?: InputMaybe<Scalars['String']>;
};

export type ZkappFailureReason = {
  __typename?: 'ZkappFailureReason';
  failures?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['String']>;
};

export type ZkappFailureReasonInsertInput = {
  failures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
};

export type ZkappFailureReasonQueryInput = {
  AND?: InputMaybe<Array<ZkappFailureReasonQueryInput>>;
  OR?: InputMaybe<Array<ZkappFailureReasonQueryInput>>;
  failures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  failures_exists?: InputMaybe<Scalars['Boolean']>;
  failures_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  failures_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index?: InputMaybe<Scalars['String']>;
  index_exists?: InputMaybe<Scalars['Boolean']>;
  index_gt?: InputMaybe<Scalars['String']>;
  index_gte?: InputMaybe<Scalars['String']>;
  index_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  index_lt?: InputMaybe<Scalars['String']>;
  index_lte?: InputMaybe<Scalars['String']>;
  index_ne?: InputMaybe<Scalars['String']>;
  index_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappFailureReasonUpdateInput = {
  failures?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  failures_unset?: InputMaybe<Scalars['Boolean']>;
  index?: InputMaybe<Scalars['String']>;
  index_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappInsertInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockStateHash?: InputMaybe<ZkappBlockStateHashRelationInput>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  failureReason?: InputMaybe<Array<InputMaybe<ZkappFailureReasonInsertInput>>>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  zkappCommand?: InputMaybe<ZkappZkappCommandInsertInput>;
};

export type ZkappQueryInput = {
  AND?: InputMaybe<Array<ZkappQueryInput>>;
  OR?: InputMaybe<Array<ZkappQueryInput>>;
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_exists?: InputMaybe<Scalars['Boolean']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']>;
  blockHeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockHeight_lt?: InputMaybe<Scalars['Int']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']>;
  blockHeight_ne?: InputMaybe<Scalars['Int']>;
  blockHeight_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  blockStateHash?: InputMaybe<BlockQueryInput>;
  blockStateHash_exists?: InputMaybe<Scalars['Boolean']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_exists?: InputMaybe<Scalars['Boolean']>;
  canonical_ne?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_exists?: InputMaybe<Scalars['Boolean']>;
  dateTime_gt?: InputMaybe<Scalars['DateTime']>;
  dateTime_gte?: InputMaybe<Scalars['DateTime']>;
  dateTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateTime_lt?: InputMaybe<Scalars['DateTime']>;
  dateTime_lte?: InputMaybe<Scalars['DateTime']>;
  dateTime_ne?: InputMaybe<Scalars['DateTime']>;
  dateTime_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  failureReason?: InputMaybe<Array<InputMaybe<ZkappFailureReasonQueryInput>>>;
  failureReason_exists?: InputMaybe<Scalars['Boolean']>;
  failureReason_in?: InputMaybe<Array<InputMaybe<ZkappFailureReasonQueryInput>>>;
  failureReason_nin?: InputMaybe<Array<InputMaybe<ZkappFailureReasonQueryInput>>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_ne?: InputMaybe<Scalars['String']>;
  id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkappCommand?: InputMaybe<ZkappZkappCommandQueryInput>;
  zkappCommand_exists?: InputMaybe<Scalars['Boolean']>;
};

export enum ZkappSortByInput {
  BlockheightAsc = 'BLOCKHEIGHT_ASC',
  BlockheightDesc = 'BLOCKHEIGHT_DESC',
  BlockstatehashAsc = 'BLOCKSTATEHASH_ASC',
  BlockstatehashDesc = 'BLOCKSTATEHASH_DESC',
  DatetimeAsc = 'DATETIME_ASC',
  DatetimeDesc = 'DATETIME_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC'
}

export type ZkappUpdateInput = {
  blockHeight?: InputMaybe<Scalars['Int']>;
  blockHeight_inc?: InputMaybe<Scalars['Int']>;
  blockHeight_unset?: InputMaybe<Scalars['Boolean']>;
  blockStateHash?: InputMaybe<ZkappBlockStateHashRelationInput>;
  blockStateHash_unset?: InputMaybe<Scalars['Boolean']>;
  canonical?: InputMaybe<Scalars['Boolean']>;
  canonical_unset?: InputMaybe<Scalars['Boolean']>;
  dateTime?: InputMaybe<Scalars['DateTime']>;
  dateTime_unset?: InputMaybe<Scalars['Boolean']>;
  failureReason?: InputMaybe<Array<InputMaybe<ZkappFailureReasonUpdateInput>>>;
  failureReason_unset?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  id_unset?: InputMaybe<Scalars['Boolean']>;
  zkappCommand?: InputMaybe<ZkappZkappCommandUpdateInput>;
  zkappCommand_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommand = {
  __typename?: 'ZkappZkappCommand';
  accountUpdates?: Maybe<Array<Maybe<ZkappZkappCommandAccountUpdate>>>;
  feePayer?: Maybe<ZkappZkappCommandFeePayer>;
  memo?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdate = {
  __typename?: 'ZkappZkappCommandAccountUpdate';
  authorization?: Maybe<ZkappZkappCommandAccountUpdateAuthorization>;
  body?: Maybe<ZkappZkappCommandAccountUpdateBody>;
};

export type ZkappZkappCommandAccountUpdateAuthorization = {
  __typename?: 'ZkappZkappCommandAccountUpdateAuthorization';
  proof?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateAuthorizationInsertInput = {
  proof?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateAuthorizationQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateAuthorizationQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateAuthorizationQueryInput>>;
  proof?: InputMaybe<Scalars['String']>;
  proof_exists?: InputMaybe<Scalars['Boolean']>;
  proof_gt?: InputMaybe<Scalars['String']>;
  proof_gte?: InputMaybe<Scalars['String']>;
  proof_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  proof_lt?: InputMaybe<Scalars['String']>;
  proof_lte?: InputMaybe<Scalars['String']>;
  proof_ne?: InputMaybe<Scalars['String']>;
  proof_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  signature?: InputMaybe<Scalars['String']>;
  signature_exists?: InputMaybe<Scalars['Boolean']>;
  signature_gt?: InputMaybe<Scalars['String']>;
  signature_gte?: InputMaybe<Scalars['String']>;
  signature_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  signature_lt?: InputMaybe<Scalars['String']>;
  signature_lte?: InputMaybe<Scalars['String']>;
  signature_ne?: InputMaybe<Scalars['String']>;
  signature_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateAuthorizationUpdateInput = {
  proof?: InputMaybe<Scalars['String']>;
  proof_unset?: InputMaybe<Scalars['Boolean']>;
  signature?: InputMaybe<Scalars['String']>;
  signature_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBody = {
  __typename?: 'ZkappZkappCommandAccountUpdateBody';
  balanceChange?: Maybe<ZkappZkappCommandAccountUpdateBodyBalanceChange>;
  callData?: Maybe<Scalars['String']>;
  callDepth?: Maybe<Scalars['Int']>;
  caller?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<Scalars['String']>>>;
  events1?: Maybe<Array<Maybe<Scalars['String']>>>;
  incrementNonce?: Maybe<Scalars['Boolean']>;
  preconditions?: Maybe<ZkappZkappCommandAccountUpdateBodyPrecondition>;
  publicKey?: Maybe<Scalars['String']>;
  sequenceEvents?: Maybe<Array<Maybe<Scalars['String']>>>;
  tokenId?: Maybe<Scalars['String']>;
  update?: Maybe<ZkappZkappCommandAccountUpdateBodyUpdate>;
  useFullCommitment?: Maybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyBalanceChange = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyBalanceChange';
  magnitude?: Maybe<Scalars['Int']>;
  sgn?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyBalanceChangeInsertInput = {
  magnitude?: InputMaybe<Scalars['Int']>;
  sgn?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyBalanceChangeQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyBalanceChangeQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyBalanceChangeQueryInput>>;
  magnitude?: InputMaybe<Scalars['Int']>;
  magnitude_exists?: InputMaybe<Scalars['Boolean']>;
  magnitude_gt?: InputMaybe<Scalars['Int']>;
  magnitude_gte?: InputMaybe<Scalars['Int']>;
  magnitude_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  magnitude_lt?: InputMaybe<Scalars['Int']>;
  magnitude_lte?: InputMaybe<Scalars['Int']>;
  magnitude_ne?: InputMaybe<Scalars['Int']>;
  magnitude_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sgn?: InputMaybe<Scalars['String']>;
  sgn_exists?: InputMaybe<Scalars['Boolean']>;
  sgn_gt?: InputMaybe<Scalars['String']>;
  sgn_gte?: InputMaybe<Scalars['String']>;
  sgn_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sgn_lt?: InputMaybe<Scalars['String']>;
  sgn_lte?: InputMaybe<Scalars['String']>;
  sgn_ne?: InputMaybe<Scalars['String']>;
  sgn_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyBalanceChangeUpdateInput = {
  magnitude?: InputMaybe<Scalars['Int']>;
  magnitude_inc?: InputMaybe<Scalars['Int']>;
  magnitude_unset?: InputMaybe<Scalars['Boolean']>;
  sgn?: InputMaybe<Scalars['String']>;
  sgn_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyInsertInput = {
  balanceChange?: InputMaybe<ZkappZkappCommandAccountUpdateBodyBalanceChangeInsertInput>;
  callData?: InputMaybe<Scalars['String']>;
  callDepth?: InputMaybe<Scalars['Int']>;
  caller?: InputMaybe<Scalars['String']>;
  incrementNonce?: InputMaybe<Scalars['Boolean']>;
  preconditions?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionInsertInput>;
  publicKey?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdateInsertInput>;
  useFullCommitment?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPrecondition = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyPrecondition';
  account?: Maybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccount>;
  network?: Maybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetwork>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccount = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyPreconditionAccount';
  balance?: Maybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalance>;
  delegate?: Maybe<Scalars['String']>;
  isNew?: Maybe<Scalars['Boolean']>;
  nonce?: Maybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonce>;
  provedState?: Maybe<Scalars['Boolean']>;
  receiptChainHash?: Maybe<Scalars['String']>;
  sequenceState?: Maybe<Scalars['String']>;
  state?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalance = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalance';
  lower?: Maybe<Scalars['String']>;
  upper?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalanceInsertInput = {
  lower?: InputMaybe<Scalars['String']>;
  upper?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalanceQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalanceQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalanceQueryInput>>;
  lower?: InputMaybe<Scalars['String']>;
  lower_exists?: InputMaybe<Scalars['Boolean']>;
  lower_gt?: InputMaybe<Scalars['String']>;
  lower_gte?: InputMaybe<Scalars['String']>;
  lower_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lower_lt?: InputMaybe<Scalars['String']>;
  lower_lte?: InputMaybe<Scalars['String']>;
  lower_ne?: InputMaybe<Scalars['String']>;
  lower_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  upper?: InputMaybe<Scalars['String']>;
  upper_exists?: InputMaybe<Scalars['Boolean']>;
  upper_gt?: InputMaybe<Scalars['String']>;
  upper_gte?: InputMaybe<Scalars['String']>;
  upper_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  upper_lt?: InputMaybe<Scalars['String']>;
  upper_lte?: InputMaybe<Scalars['String']>;
  upper_ne?: InputMaybe<Scalars['String']>;
  upper_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalanceUpdateInput = {
  lower?: InputMaybe<Scalars['String']>;
  lower_unset?: InputMaybe<Scalars['Boolean']>;
  upper?: InputMaybe<Scalars['String']>;
  upper_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountInsertInput = {
  balance?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalanceInsertInput>;
  delegate?: InputMaybe<Scalars['String']>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonceInsertInput>;
  provedState?: InputMaybe<Scalars['Boolean']>;
  receiptChainHash?: InputMaybe<Scalars['String']>;
  sequenceState?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonce = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonce';
  lower?: Maybe<Scalars['Int']>;
  upper?: Maybe<Scalars['Int']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonceInsertInput = {
  lower?: InputMaybe<Scalars['Int']>;
  upper?: InputMaybe<Scalars['Int']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonceQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonceQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonceQueryInput>>;
  lower?: InputMaybe<Scalars['Int']>;
  lower_exists?: InputMaybe<Scalars['Boolean']>;
  lower_gt?: InputMaybe<Scalars['Int']>;
  lower_gte?: InputMaybe<Scalars['Int']>;
  lower_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lower_lt?: InputMaybe<Scalars['Int']>;
  lower_lte?: InputMaybe<Scalars['Int']>;
  lower_ne?: InputMaybe<Scalars['Int']>;
  lower_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  upper?: InputMaybe<Scalars['Int']>;
  upper_exists?: InputMaybe<Scalars['Boolean']>;
  upper_gt?: InputMaybe<Scalars['Int']>;
  upper_gte?: InputMaybe<Scalars['Int']>;
  upper_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  upper_lt?: InputMaybe<Scalars['Int']>;
  upper_lte?: InputMaybe<Scalars['Int']>;
  upper_ne?: InputMaybe<Scalars['Int']>;
  upper_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonceUpdateInput = {
  lower?: InputMaybe<Scalars['Int']>;
  lower_inc?: InputMaybe<Scalars['Int']>;
  lower_unset?: InputMaybe<Scalars['Boolean']>;
  upper?: InputMaybe<Scalars['Int']>;
  upper_inc?: InputMaybe<Scalars['Int']>;
  upper_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionAccountQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionAccountQueryInput>>;
  balance?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalanceQueryInput>;
  balance_exists?: InputMaybe<Scalars['Boolean']>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_exists?: InputMaybe<Scalars['Boolean']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_ne?: InputMaybe<Scalars['String']>;
  delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  isNew_exists?: InputMaybe<Scalars['Boolean']>;
  isNew_ne?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonceQueryInput>;
  nonce_exists?: InputMaybe<Scalars['Boolean']>;
  provedState?: InputMaybe<Scalars['Boolean']>;
  provedState_exists?: InputMaybe<Scalars['Boolean']>;
  provedState_ne?: InputMaybe<Scalars['Boolean']>;
  receiptChainHash?: InputMaybe<Scalars['String']>;
  receiptChainHash_exists?: InputMaybe<Scalars['Boolean']>;
  receiptChainHash_gt?: InputMaybe<Scalars['String']>;
  receiptChainHash_gte?: InputMaybe<Scalars['String']>;
  receiptChainHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receiptChainHash_lt?: InputMaybe<Scalars['String']>;
  receiptChainHash_lte?: InputMaybe<Scalars['String']>;
  receiptChainHash_ne?: InputMaybe<Scalars['String']>;
  receiptChainHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sequenceState?: InputMaybe<Scalars['String']>;
  sequenceState_exists?: InputMaybe<Scalars['Boolean']>;
  sequenceState_gt?: InputMaybe<Scalars['String']>;
  sequenceState_gte?: InputMaybe<Scalars['String']>;
  sequenceState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sequenceState_lt?: InputMaybe<Scalars['String']>;
  sequenceState_lte?: InputMaybe<Scalars['String']>;
  sequenceState_ne?: InputMaybe<Scalars['String']>;
  sequenceState_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_exists?: InputMaybe<Scalars['Boolean']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionAccountUpdateInput = {
  balance?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountBalanceUpdateInput>;
  balance_unset?: InputMaybe<Scalars['Boolean']>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_unset?: InputMaybe<Scalars['Boolean']>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  isNew_unset?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountNonceUpdateInput>;
  nonce_unset?: InputMaybe<Scalars['Boolean']>;
  provedState?: InputMaybe<Scalars['Boolean']>;
  provedState_unset?: InputMaybe<Scalars['Boolean']>;
  receiptChainHash?: InputMaybe<Scalars['String']>;
  receiptChainHash_unset?: InputMaybe<Scalars['Boolean']>;
  sequenceState?: InputMaybe<Scalars['String']>;
  sequenceState_unset?: InputMaybe<Scalars['Boolean']>;
  state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionInsertInput = {
  account?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountInsertInput>;
  network?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkInsertInput>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetwork = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyPreconditionNetwork';
  globalSlotSinceGenesis?: Maybe<Scalars['Int']>;
  globalSlotSinceHardFork?: Maybe<Scalars['Int']>;
  minWindowDensity?: Maybe<Scalars['Int']>;
  nextEpochData?: Maybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatum>;
  sequenceEvents?: Maybe<Scalars['String']>;
  snarkedLedgerHash?: Maybe<Scalars['String']>;
  stakingEpochData?: Maybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatum>;
  timestamp?: Maybe<Scalars['String']>;
  totalCurrency?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkInsertInput = {
  globalSlotSinceGenesis?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork?: InputMaybe<Scalars['Int']>;
  minWindowDensity?: InputMaybe<Scalars['Int']>;
  nextEpochData?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumInsertInput>;
  sequenceEvents?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash?: InputMaybe<Scalars['String']>;
  stakingEpochData?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumInsertInput>;
  timestamp?: InputMaybe<Scalars['String']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatum = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatum';
  epochLength?: Maybe<Scalars['String']>;
  ledger?: Maybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedger>;
  lockCheckpoint?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startCheckpoint?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumInsertInput = {
  epochLength?: InputMaybe<Scalars['String']>;
  ledger?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerInsertInput>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedger = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedger';
  hash?: Maybe<Scalars['String']>;
  totalCurrency?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerInsertInput = {
  hash?: InputMaybe<Scalars['String']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerQueryInput>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency_gt?: InputMaybe<Scalars['String']>;
  totalCurrency_gte?: InputMaybe<Scalars['String']>;
  totalCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency_lt?: InputMaybe<Scalars['String']>;
  totalCurrency_lte?: InputMaybe<Scalars['String']>;
  totalCurrency_ne?: InputMaybe<Scalars['String']>;
  totalCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerUpdateInput = {
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumQueryInput>>;
  epochLength?: InputMaybe<Scalars['String']>;
  epochLength_exists?: InputMaybe<Scalars['Boolean']>;
  epochLength_gt?: InputMaybe<Scalars['String']>;
  epochLength_gte?: InputMaybe<Scalars['String']>;
  epochLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  epochLength_lt?: InputMaybe<Scalars['String']>;
  epochLength_lte?: InputMaybe<Scalars['String']>;
  epochLength_ne?: InputMaybe<Scalars['String']>;
  epochLength_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ledger?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerQueryInput>;
  ledger_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint_gt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_gte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lockCheckpoint_lt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_lte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_ne?: InputMaybe<Scalars['String']>;
  lockCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed?: InputMaybe<Scalars['String']>;
  seed_exists?: InputMaybe<Scalars['Boolean']>;
  seed_gt?: InputMaybe<Scalars['String']>;
  seed_gte?: InputMaybe<Scalars['String']>;
  seed_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed_lt?: InputMaybe<Scalars['String']>;
  seed_lte?: InputMaybe<Scalars['String']>;
  seed_ne?: InputMaybe<Scalars['String']>;
  seed_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint_gt?: InputMaybe<Scalars['String']>;
  startCheckpoint_gte?: InputMaybe<Scalars['String']>;
  startCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint_lt?: InputMaybe<Scalars['String']>;
  startCheckpoint_lte?: InputMaybe<Scalars['String']>;
  startCheckpoint_ne?: InputMaybe<Scalars['String']>;
  startCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumUpdateInput = {
  epochLength?: InputMaybe<Scalars['String']>;
  epochLength_unset?: InputMaybe<Scalars['Boolean']>;
  ledger?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumLedgerUpdateInput>;
  ledger_unset?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
  seed?: InputMaybe<Scalars['String']>;
  seed_unset?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkQueryInput>>;
  globalSlotSinceGenesis?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_exists?: InputMaybe<Scalars['Boolean']>;
  globalSlotSinceGenesis_gt?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_gte?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  globalSlotSinceGenesis_lt?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_lte?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_ne?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  globalSlotSinceHardFork?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_exists?: InputMaybe<Scalars['Boolean']>;
  globalSlotSinceHardFork_gt?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_gte?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  globalSlotSinceHardFork_lt?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_lte?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_ne?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  minWindowDensity?: InputMaybe<Scalars['Int']>;
  minWindowDensity_exists?: InputMaybe<Scalars['Boolean']>;
  minWindowDensity_gt?: InputMaybe<Scalars['Int']>;
  minWindowDensity_gte?: InputMaybe<Scalars['Int']>;
  minWindowDensity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  minWindowDensity_lt?: InputMaybe<Scalars['Int']>;
  minWindowDensity_lte?: InputMaybe<Scalars['Int']>;
  minWindowDensity_ne?: InputMaybe<Scalars['Int']>;
  minWindowDensity_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nextEpochData?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumQueryInput>;
  nextEpochData_exists?: InputMaybe<Scalars['Boolean']>;
  sequenceEvents?: InputMaybe<Scalars['String']>;
  sequenceEvents_exists?: InputMaybe<Scalars['Boolean']>;
  sequenceEvents_gt?: InputMaybe<Scalars['String']>;
  sequenceEvents_gte?: InputMaybe<Scalars['String']>;
  sequenceEvents_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sequenceEvents_lt?: InputMaybe<Scalars['String']>;
  sequenceEvents_lte?: InputMaybe<Scalars['String']>;
  sequenceEvents_ne?: InputMaybe<Scalars['String']>;
  sequenceEvents_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  snarkedLedgerHash?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_exists?: InputMaybe<Scalars['Boolean']>;
  snarkedLedgerHash_gt?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_gte?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  snarkedLedgerHash_lt?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_lte?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_ne?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  stakingEpochData?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumQueryInput>;
  stakingEpochData_exists?: InputMaybe<Scalars['Boolean']>;
  timestamp?: InputMaybe<Scalars['String']>;
  timestamp_exists?: InputMaybe<Scalars['Boolean']>;
  timestamp_gt?: InputMaybe<Scalars['String']>;
  timestamp_gte?: InputMaybe<Scalars['String']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timestamp_lt?: InputMaybe<Scalars['String']>;
  timestamp_lte?: InputMaybe<Scalars['String']>;
  timestamp_ne?: InputMaybe<Scalars['String']>;
  timestamp_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency_gt?: InputMaybe<Scalars['String']>;
  totalCurrency_gte?: InputMaybe<Scalars['String']>;
  totalCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency_lt?: InputMaybe<Scalars['String']>;
  totalCurrency_lte?: InputMaybe<Scalars['String']>;
  totalCurrency_ne?: InputMaybe<Scalars['String']>;
  totalCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatum = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatum';
  epochLength?: Maybe<Scalars['String']>;
  ledger?: Maybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedger>;
  lockCheckpoint?: Maybe<Scalars['String']>;
  seed?: Maybe<Scalars['String']>;
  startCheckpoint?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumInsertInput = {
  epochLength?: InputMaybe<Scalars['String']>;
  ledger?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerInsertInput>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedger = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedger';
  hash?: Maybe<Scalars['String']>;
  totalCurrency?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerInsertInput = {
  hash?: InputMaybe<Scalars['String']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerQueryInput>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_exists?: InputMaybe<Scalars['Boolean']>;
  totalCurrency_gt?: InputMaybe<Scalars['String']>;
  totalCurrency_gte?: InputMaybe<Scalars['String']>;
  totalCurrency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  totalCurrency_lt?: InputMaybe<Scalars['String']>;
  totalCurrency_lte?: InputMaybe<Scalars['String']>;
  totalCurrency_ne?: InputMaybe<Scalars['String']>;
  totalCurrency_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerUpdateInput = {
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumQueryInput>>;
  epochLength?: InputMaybe<Scalars['String']>;
  epochLength_exists?: InputMaybe<Scalars['Boolean']>;
  epochLength_gt?: InputMaybe<Scalars['String']>;
  epochLength_gte?: InputMaybe<Scalars['String']>;
  epochLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  epochLength_lt?: InputMaybe<Scalars['String']>;
  epochLength_lte?: InputMaybe<Scalars['String']>;
  epochLength_ne?: InputMaybe<Scalars['String']>;
  epochLength_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ledger?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerQueryInput>;
  ledger_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint_gt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_gte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lockCheckpoint_lt?: InputMaybe<Scalars['String']>;
  lockCheckpoint_lte?: InputMaybe<Scalars['String']>;
  lockCheckpoint_ne?: InputMaybe<Scalars['String']>;
  lockCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed?: InputMaybe<Scalars['String']>;
  seed_exists?: InputMaybe<Scalars['Boolean']>;
  seed_gt?: InputMaybe<Scalars['String']>;
  seed_gte?: InputMaybe<Scalars['String']>;
  seed_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seed_lt?: InputMaybe<Scalars['String']>;
  seed_lte?: InputMaybe<Scalars['String']>;
  seed_ne?: InputMaybe<Scalars['String']>;
  seed_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_exists?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint_gt?: InputMaybe<Scalars['String']>;
  startCheckpoint_gte?: InputMaybe<Scalars['String']>;
  startCheckpoint_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startCheckpoint_lt?: InputMaybe<Scalars['String']>;
  startCheckpoint_lte?: InputMaybe<Scalars['String']>;
  startCheckpoint_ne?: InputMaybe<Scalars['String']>;
  startCheckpoint_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumUpdateInput = {
  epochLength?: InputMaybe<Scalars['String']>;
  epochLength_unset?: InputMaybe<Scalars['Boolean']>;
  ledger?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumLedgerUpdateInput>;
  ledger_unset?: InputMaybe<Scalars['Boolean']>;
  lockCheckpoint?: InputMaybe<Scalars['String']>;
  lockCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
  seed?: InputMaybe<Scalars['String']>;
  seed_unset?: InputMaybe<Scalars['Boolean']>;
  startCheckpoint?: InputMaybe<Scalars['String']>;
  startCheckpoint_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionNetworkUpdateInput = {
  globalSlotSinceGenesis?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_inc?: InputMaybe<Scalars['Int']>;
  globalSlotSinceGenesis_unset?: InputMaybe<Scalars['Boolean']>;
  globalSlotSinceHardFork?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_inc?: InputMaybe<Scalars['Int']>;
  globalSlotSinceHardFork_unset?: InputMaybe<Scalars['Boolean']>;
  minWindowDensity?: InputMaybe<Scalars['Int']>;
  minWindowDensity_inc?: InputMaybe<Scalars['Int']>;
  minWindowDensity_unset?: InputMaybe<Scalars['Boolean']>;
  nextEpochData?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkNextEpochDatumUpdateInput>;
  nextEpochData_unset?: InputMaybe<Scalars['Boolean']>;
  sequenceEvents?: InputMaybe<Scalars['String']>;
  sequenceEvents_unset?: InputMaybe<Scalars['Boolean']>;
  snarkedLedgerHash?: InputMaybe<Scalars['String']>;
  snarkedLedgerHash_unset?: InputMaybe<Scalars['Boolean']>;
  stakingEpochData?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkStakingEpochDatumUpdateInput>;
  stakingEpochData_unset?: InputMaybe<Scalars['Boolean']>;
  timestamp?: InputMaybe<Scalars['String']>;
  timestamp_unset?: InputMaybe<Scalars['Boolean']>;
  totalCurrency?: InputMaybe<Scalars['String']>;
  totalCurrency_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyPreconditionQueryInput>>;
  account?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountQueryInput>;
  account_exists?: InputMaybe<Scalars['Boolean']>;
  network?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkQueryInput>;
  network_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyPreconditionUpdateInput = {
  account?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionAccountUpdateInput>;
  account_unset?: InputMaybe<Scalars['Boolean']>;
  network?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionNetworkUpdateInput>;
  network_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyQueryInput>>;
  balanceChange?: InputMaybe<ZkappZkappCommandAccountUpdateBodyBalanceChangeQueryInput>;
  balanceChange_exists?: InputMaybe<Scalars['Boolean']>;
  callData?: InputMaybe<Scalars['String']>;
  callData_exists?: InputMaybe<Scalars['Boolean']>;
  callData_gt?: InputMaybe<Scalars['String']>;
  callData_gte?: InputMaybe<Scalars['String']>;
  callData_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  callData_lt?: InputMaybe<Scalars['String']>;
  callData_lte?: InputMaybe<Scalars['String']>;
  callData_ne?: InputMaybe<Scalars['String']>;
  callData_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  callDepth?: InputMaybe<Scalars['Int']>;
  callDepth_exists?: InputMaybe<Scalars['Boolean']>;
  callDepth_gt?: InputMaybe<Scalars['Int']>;
  callDepth_gte?: InputMaybe<Scalars['Int']>;
  callDepth_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  callDepth_lt?: InputMaybe<Scalars['Int']>;
  callDepth_lte?: InputMaybe<Scalars['Int']>;
  callDepth_ne?: InputMaybe<Scalars['Int']>;
  callDepth_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  caller?: InputMaybe<Scalars['String']>;
  caller_exists?: InputMaybe<Scalars['Boolean']>;
  caller_gt?: InputMaybe<Scalars['String']>;
  caller_gte?: InputMaybe<Scalars['String']>;
  caller_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  caller_lt?: InputMaybe<Scalars['String']>;
  caller_lte?: InputMaybe<Scalars['String']>;
  caller_ne?: InputMaybe<Scalars['String']>;
  caller_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  incrementNonce?: InputMaybe<Scalars['Boolean']>;
  incrementNonce_exists?: InputMaybe<Scalars['Boolean']>;
  incrementNonce_ne?: InputMaybe<Scalars['Boolean']>;
  preconditions?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionQueryInput>;
  preconditions_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_exists?: InputMaybe<Scalars['Boolean']>;
  tokenId_gt?: InputMaybe<Scalars['String']>;
  tokenId_gte?: InputMaybe<Scalars['String']>;
  tokenId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tokenId_lt?: InputMaybe<Scalars['String']>;
  tokenId_lte?: InputMaybe<Scalars['String']>;
  tokenId_ne?: InputMaybe<Scalars['String']>;
  tokenId_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  update?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdateQueryInput>;
  update_exists?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment_exists?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment_ne?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdate = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyUpdate';
  appState?: Maybe<Array<Maybe<Scalars['String']>>>;
  delegate?: Maybe<Scalars['String']>;
  permissions?: Maybe<ZkappZkappCommandAccountUpdateBodyUpdatePermission>;
  timing?: Maybe<Scalars['String']>;
  tokenSymbol?: Maybe<Scalars['String']>;
  verificationKey?: Maybe<ZkappZkappCommandAccountUpdateBodyUpdateVerificationKey>;
  votingFor?: Maybe<Scalars['String']>;
  zkappUri?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdateInput = {
  balanceChange?: InputMaybe<ZkappZkappCommandAccountUpdateBodyBalanceChangeUpdateInput>;
  balanceChange_unset?: InputMaybe<Scalars['Boolean']>;
  callData?: InputMaybe<Scalars['String']>;
  callData_unset?: InputMaybe<Scalars['Boolean']>;
  callDepth?: InputMaybe<Scalars['Int']>;
  callDepth_inc?: InputMaybe<Scalars['Int']>;
  callDepth_unset?: InputMaybe<Scalars['Boolean']>;
  caller?: InputMaybe<Scalars['String']>;
  caller_unset?: InputMaybe<Scalars['Boolean']>;
  incrementNonce?: InputMaybe<Scalars['Boolean']>;
  incrementNonce_unset?: InputMaybe<Scalars['Boolean']>;
  preconditions?: InputMaybe<ZkappZkappCommandAccountUpdateBodyPreconditionUpdateInput>;
  preconditions_unset?: InputMaybe<Scalars['Boolean']>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
  tokenId?: InputMaybe<Scalars['String']>;
  tokenId_unset?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdateUpdateInput>;
  update_unset?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment?: InputMaybe<Scalars['Boolean']>;
  useFullCommitment_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdateInsertInput = {
  appState?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdatePermissionInsertInput>;
  timing?: InputMaybe<Scalars['String']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  verificationKey?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdateVerificationKeyInsertInput>;
  votingFor?: InputMaybe<Scalars['String']>;
  zkappUri?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdatePermission = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyUpdatePermission';
  editSequenceState?: Maybe<Scalars['String']>;
  editState?: Maybe<Scalars['String']>;
  incrementNonce?: Maybe<Scalars['String']>;
  receive?: Maybe<Scalars['String']>;
  send?: Maybe<Scalars['String']>;
  setDelegate?: Maybe<Scalars['String']>;
  setPermissions?: Maybe<Scalars['String']>;
  setTokenSymbol?: Maybe<Scalars['String']>;
  setVerificationKey?: Maybe<Scalars['String']>;
  setVotingFor?: Maybe<Scalars['String']>;
  setZkappUri?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdatePermissionInsertInput = {
  editSequenceState?: InputMaybe<Scalars['String']>;
  editState?: InputMaybe<Scalars['String']>;
  incrementNonce?: InputMaybe<Scalars['String']>;
  receive?: InputMaybe<Scalars['String']>;
  send?: InputMaybe<Scalars['String']>;
  setDelegate?: InputMaybe<Scalars['String']>;
  setPermissions?: InputMaybe<Scalars['String']>;
  setTokenSymbol?: InputMaybe<Scalars['String']>;
  setVerificationKey?: InputMaybe<Scalars['String']>;
  setVotingFor?: InputMaybe<Scalars['String']>;
  setZkappUri?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdatePermissionQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyUpdatePermissionQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyUpdatePermissionQueryInput>>;
  editSequenceState?: InputMaybe<Scalars['String']>;
  editSequenceState_exists?: InputMaybe<Scalars['Boolean']>;
  editSequenceState_gt?: InputMaybe<Scalars['String']>;
  editSequenceState_gte?: InputMaybe<Scalars['String']>;
  editSequenceState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  editSequenceState_lt?: InputMaybe<Scalars['String']>;
  editSequenceState_lte?: InputMaybe<Scalars['String']>;
  editSequenceState_ne?: InputMaybe<Scalars['String']>;
  editSequenceState_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  editState?: InputMaybe<Scalars['String']>;
  editState_exists?: InputMaybe<Scalars['Boolean']>;
  editState_gt?: InputMaybe<Scalars['String']>;
  editState_gte?: InputMaybe<Scalars['String']>;
  editState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  editState_lt?: InputMaybe<Scalars['String']>;
  editState_lte?: InputMaybe<Scalars['String']>;
  editState_ne?: InputMaybe<Scalars['String']>;
  editState_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  incrementNonce?: InputMaybe<Scalars['String']>;
  incrementNonce_exists?: InputMaybe<Scalars['Boolean']>;
  incrementNonce_gt?: InputMaybe<Scalars['String']>;
  incrementNonce_gte?: InputMaybe<Scalars['String']>;
  incrementNonce_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  incrementNonce_lt?: InputMaybe<Scalars['String']>;
  incrementNonce_lte?: InputMaybe<Scalars['String']>;
  incrementNonce_ne?: InputMaybe<Scalars['String']>;
  incrementNonce_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receive?: InputMaybe<Scalars['String']>;
  receive_exists?: InputMaybe<Scalars['Boolean']>;
  receive_gt?: InputMaybe<Scalars['String']>;
  receive_gte?: InputMaybe<Scalars['String']>;
  receive_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  receive_lt?: InputMaybe<Scalars['String']>;
  receive_lte?: InputMaybe<Scalars['String']>;
  receive_ne?: InputMaybe<Scalars['String']>;
  receive_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send?: InputMaybe<Scalars['String']>;
  send_exists?: InputMaybe<Scalars['Boolean']>;
  send_gt?: InputMaybe<Scalars['String']>;
  send_gte?: InputMaybe<Scalars['String']>;
  send_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  send_lt?: InputMaybe<Scalars['String']>;
  send_lte?: InputMaybe<Scalars['String']>;
  send_ne?: InputMaybe<Scalars['String']>;
  send_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setDelegate?: InputMaybe<Scalars['String']>;
  setDelegate_exists?: InputMaybe<Scalars['Boolean']>;
  setDelegate_gt?: InputMaybe<Scalars['String']>;
  setDelegate_gte?: InputMaybe<Scalars['String']>;
  setDelegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setDelegate_lt?: InputMaybe<Scalars['String']>;
  setDelegate_lte?: InputMaybe<Scalars['String']>;
  setDelegate_ne?: InputMaybe<Scalars['String']>;
  setDelegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setPermissions?: InputMaybe<Scalars['String']>;
  setPermissions_exists?: InputMaybe<Scalars['Boolean']>;
  setPermissions_gt?: InputMaybe<Scalars['String']>;
  setPermissions_gte?: InputMaybe<Scalars['String']>;
  setPermissions_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setPermissions_lt?: InputMaybe<Scalars['String']>;
  setPermissions_lte?: InputMaybe<Scalars['String']>;
  setPermissions_ne?: InputMaybe<Scalars['String']>;
  setPermissions_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setTokenSymbol?: InputMaybe<Scalars['String']>;
  setTokenSymbol_exists?: InputMaybe<Scalars['Boolean']>;
  setTokenSymbol_gt?: InputMaybe<Scalars['String']>;
  setTokenSymbol_gte?: InputMaybe<Scalars['String']>;
  setTokenSymbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setTokenSymbol_lt?: InputMaybe<Scalars['String']>;
  setTokenSymbol_lte?: InputMaybe<Scalars['String']>;
  setTokenSymbol_ne?: InputMaybe<Scalars['String']>;
  setTokenSymbol_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setVerificationKey?: InputMaybe<Scalars['String']>;
  setVerificationKey_exists?: InputMaybe<Scalars['Boolean']>;
  setVerificationKey_gt?: InputMaybe<Scalars['String']>;
  setVerificationKey_gte?: InputMaybe<Scalars['String']>;
  setVerificationKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setVerificationKey_lt?: InputMaybe<Scalars['String']>;
  setVerificationKey_lte?: InputMaybe<Scalars['String']>;
  setVerificationKey_ne?: InputMaybe<Scalars['String']>;
  setVerificationKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setVotingFor?: InputMaybe<Scalars['String']>;
  setVotingFor_exists?: InputMaybe<Scalars['Boolean']>;
  setVotingFor_gt?: InputMaybe<Scalars['String']>;
  setVotingFor_gte?: InputMaybe<Scalars['String']>;
  setVotingFor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setVotingFor_lt?: InputMaybe<Scalars['String']>;
  setVotingFor_lte?: InputMaybe<Scalars['String']>;
  setVotingFor_ne?: InputMaybe<Scalars['String']>;
  setVotingFor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setZkappUri?: InputMaybe<Scalars['String']>;
  setZkappUri_exists?: InputMaybe<Scalars['Boolean']>;
  setZkappUri_gt?: InputMaybe<Scalars['String']>;
  setZkappUri_gte?: InputMaybe<Scalars['String']>;
  setZkappUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  setZkappUri_lt?: InputMaybe<Scalars['String']>;
  setZkappUri_lte?: InputMaybe<Scalars['String']>;
  setZkappUri_ne?: InputMaybe<Scalars['String']>;
  setZkappUri_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdatePermissionUpdateInput = {
  editSequenceState?: InputMaybe<Scalars['String']>;
  editSequenceState_unset?: InputMaybe<Scalars['Boolean']>;
  editState?: InputMaybe<Scalars['String']>;
  editState_unset?: InputMaybe<Scalars['Boolean']>;
  incrementNonce?: InputMaybe<Scalars['String']>;
  incrementNonce_unset?: InputMaybe<Scalars['Boolean']>;
  receive?: InputMaybe<Scalars['String']>;
  receive_unset?: InputMaybe<Scalars['Boolean']>;
  send?: InputMaybe<Scalars['String']>;
  send_unset?: InputMaybe<Scalars['Boolean']>;
  setDelegate?: InputMaybe<Scalars['String']>;
  setDelegate_unset?: InputMaybe<Scalars['Boolean']>;
  setPermissions?: InputMaybe<Scalars['String']>;
  setPermissions_unset?: InputMaybe<Scalars['Boolean']>;
  setTokenSymbol?: InputMaybe<Scalars['String']>;
  setTokenSymbol_unset?: InputMaybe<Scalars['Boolean']>;
  setVerificationKey?: InputMaybe<Scalars['String']>;
  setVerificationKey_unset?: InputMaybe<Scalars['Boolean']>;
  setVotingFor?: InputMaybe<Scalars['String']>;
  setVotingFor_unset?: InputMaybe<Scalars['Boolean']>;
  setZkappUri?: InputMaybe<Scalars['String']>;
  setZkappUri_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdateQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyUpdateQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyUpdateQueryInput>>;
  appState?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appState_exists?: InputMaybe<Scalars['Boolean']>;
  appState_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appState_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_exists?: InputMaybe<Scalars['Boolean']>;
  delegate_gt?: InputMaybe<Scalars['String']>;
  delegate_gte?: InputMaybe<Scalars['String']>;
  delegate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  delegate_lt?: InputMaybe<Scalars['String']>;
  delegate_lte?: InputMaybe<Scalars['String']>;
  delegate_ne?: InputMaybe<Scalars['String']>;
  delegate_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  permissions?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdatePermissionQueryInput>;
  permissions_exists?: InputMaybe<Scalars['Boolean']>;
  timing?: InputMaybe<Scalars['String']>;
  timing_exists?: InputMaybe<Scalars['Boolean']>;
  timing_gt?: InputMaybe<Scalars['String']>;
  timing_gte?: InputMaybe<Scalars['String']>;
  timing_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timing_lt?: InputMaybe<Scalars['String']>;
  timing_lte?: InputMaybe<Scalars['String']>;
  timing_ne?: InputMaybe<Scalars['String']>;
  timing_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_exists?: InputMaybe<Scalars['Boolean']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']>;
  tokenSymbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']>;
  tokenSymbol_ne?: InputMaybe<Scalars['String']>;
  tokenSymbol_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  verificationKey?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdateVerificationKeyQueryInput>;
  verificationKey_exists?: InputMaybe<Scalars['Boolean']>;
  votingFor?: InputMaybe<Scalars['String']>;
  votingFor_exists?: InputMaybe<Scalars['Boolean']>;
  votingFor_gt?: InputMaybe<Scalars['String']>;
  votingFor_gte?: InputMaybe<Scalars['String']>;
  votingFor_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  votingFor_lt?: InputMaybe<Scalars['String']>;
  votingFor_lte?: InputMaybe<Scalars['String']>;
  votingFor_ne?: InputMaybe<Scalars['String']>;
  votingFor_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkappUri?: InputMaybe<Scalars['String']>;
  zkappUri_exists?: InputMaybe<Scalars['Boolean']>;
  zkappUri_gt?: InputMaybe<Scalars['String']>;
  zkappUri_gte?: InputMaybe<Scalars['String']>;
  zkappUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  zkappUri_lt?: InputMaybe<Scalars['String']>;
  zkappUri_lte?: InputMaybe<Scalars['String']>;
  zkappUri_ne?: InputMaybe<Scalars['String']>;
  zkappUri_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdateUpdateInput = {
  appState?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  appState_unset?: InputMaybe<Scalars['Boolean']>;
  delegate?: InputMaybe<Scalars['String']>;
  delegate_unset?: InputMaybe<Scalars['Boolean']>;
  permissions?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdatePermissionUpdateInput>;
  permissions_unset?: InputMaybe<Scalars['Boolean']>;
  timing?: InputMaybe<Scalars['String']>;
  timing_unset?: InputMaybe<Scalars['Boolean']>;
  tokenSymbol?: InputMaybe<Scalars['String']>;
  tokenSymbol_unset?: InputMaybe<Scalars['Boolean']>;
  verificationKey?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdateVerificationKeyUpdateInput>;
  verificationKey_unset?: InputMaybe<Scalars['Boolean']>;
  votingFor?: InputMaybe<Scalars['String']>;
  votingFor_unset?: InputMaybe<Scalars['Boolean']>;
  zkappUri?: InputMaybe<Scalars['String']>;
  zkappUri_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdateVerificationKey = {
  __typename?: 'ZkappZkappCommandAccountUpdateBodyUpdateVerificationKey';
  data?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdateVerificationKeyInsertInput = {
  data?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdateVerificationKeyQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyUpdateVerificationKeyQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateBodyUpdateVerificationKeyQueryInput>>;
  data?: InputMaybe<Scalars['String']>;
  data_exists?: InputMaybe<Scalars['Boolean']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_ne?: InputMaybe<Scalars['String']>;
  data_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_exists?: InputMaybe<Scalars['Boolean']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_ne?: InputMaybe<Scalars['String']>;
  hash_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandAccountUpdateBodyUpdateVerificationKeyUpdateInput = {
  data?: InputMaybe<Scalars['String']>;
  data_unset?: InputMaybe<Scalars['Boolean']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateInsertInput = {
  authorization?: InputMaybe<ZkappZkappCommandAccountUpdateAuthorizationInsertInput>;
  body?: InputMaybe<ZkappZkappCommandAccountUpdateBodyInsertInput>;
};

export type ZkappZkappCommandAccountUpdateQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandAccountUpdateQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandAccountUpdateQueryInput>>;
  authorization?: InputMaybe<ZkappZkappCommandAccountUpdateAuthorizationQueryInput>;
  authorization_exists?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<ZkappZkappCommandAccountUpdateBodyQueryInput>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandAccountUpdateUpdateInput = {
  authorization?: InputMaybe<ZkappZkappCommandAccountUpdateAuthorizationUpdateInput>;
  authorization_unset?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<ZkappZkappCommandAccountUpdateBodyUpdateInput>;
  body_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandFeePayer = {
  __typename?: 'ZkappZkappCommandFeePayer';
  authorization?: Maybe<Scalars['String']>;
  body?: Maybe<ZkappZkappCommandFeePayerBody>;
};

export type ZkappZkappCommandFeePayerBody = {
  __typename?: 'ZkappZkappCommandFeePayerBody';
  fee?: Maybe<Scalars['Int']>;
  nonce?: Maybe<Scalars['Int']>;
  publicKey?: Maybe<Scalars['String']>;
};

export type ZkappZkappCommandFeePayerBodyInsertInput = {
  fee?: InputMaybe<Scalars['Int']>;
  nonce?: InputMaybe<Scalars['Int']>;
  publicKey?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandFeePayerBodyQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandFeePayerBodyQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandFeePayerBodyQueryInput>>;
  fee?: InputMaybe<Scalars['Int']>;
  fee_exists?: InputMaybe<Scalars['Boolean']>;
  fee_gt?: InputMaybe<Scalars['Int']>;
  fee_gte?: InputMaybe<Scalars['Int']>;
  fee_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fee_lt?: InputMaybe<Scalars['Int']>;
  fee_lte?: InputMaybe<Scalars['Int']>;
  fee_ne?: InputMaybe<Scalars['Int']>;
  fee_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_exists?: InputMaybe<Scalars['Boolean']>;
  nonce_gt?: InputMaybe<Scalars['Int']>;
  nonce_gte?: InputMaybe<Scalars['Int']>;
  nonce_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nonce_lt?: InputMaybe<Scalars['Int']>;
  nonce_lte?: InputMaybe<Scalars['Int']>;
  nonce_ne?: InputMaybe<Scalars['Int']>;
  nonce_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_exists?: InputMaybe<Scalars['Boolean']>;
  publicKey_gt?: InputMaybe<Scalars['String']>;
  publicKey_gte?: InputMaybe<Scalars['String']>;
  publicKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicKey_lt?: InputMaybe<Scalars['String']>;
  publicKey_lte?: InputMaybe<Scalars['String']>;
  publicKey_ne?: InputMaybe<Scalars['String']>;
  publicKey_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandFeePayerBodyUpdateInput = {
  fee?: InputMaybe<Scalars['Int']>;
  fee_inc?: InputMaybe<Scalars['Int']>;
  fee_unset?: InputMaybe<Scalars['Boolean']>;
  nonce?: InputMaybe<Scalars['Int']>;
  nonce_inc?: InputMaybe<Scalars['Int']>;
  nonce_unset?: InputMaybe<Scalars['Boolean']>;
  publicKey?: InputMaybe<Scalars['String']>;
  publicKey_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandFeePayerInsertInput = {
  authorization?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<ZkappZkappCommandFeePayerBodyInsertInput>;
};

export type ZkappZkappCommandFeePayerQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandFeePayerQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandFeePayerQueryInput>>;
  authorization?: InputMaybe<Scalars['String']>;
  authorization_exists?: InputMaybe<Scalars['Boolean']>;
  authorization_gt?: InputMaybe<Scalars['String']>;
  authorization_gte?: InputMaybe<Scalars['String']>;
  authorization_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  authorization_lt?: InputMaybe<Scalars['String']>;
  authorization_lte?: InputMaybe<Scalars['String']>;
  authorization_ne?: InputMaybe<Scalars['String']>;
  authorization_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body?: InputMaybe<ZkappZkappCommandFeePayerBodyQueryInput>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandFeePayerUpdateInput = {
  authorization?: InputMaybe<Scalars['String']>;
  authorization_unset?: InputMaybe<Scalars['Boolean']>;
  body?: InputMaybe<ZkappZkappCommandFeePayerBodyUpdateInput>;
  body_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ZkappZkappCommandInsertInput = {
  accountUpdates?: InputMaybe<Array<InputMaybe<ZkappZkappCommandAccountUpdateInsertInput>>>;
  feePayer?: InputMaybe<ZkappZkappCommandFeePayerInsertInput>;
  memo?: InputMaybe<Scalars['String']>;
};

export type ZkappZkappCommandQueryInput = {
  AND?: InputMaybe<Array<ZkappZkappCommandQueryInput>>;
  OR?: InputMaybe<Array<ZkappZkappCommandQueryInput>>;
  accountUpdates?: InputMaybe<Array<InputMaybe<ZkappZkappCommandAccountUpdateQueryInput>>>;
  accountUpdates_exists?: InputMaybe<Scalars['Boolean']>;
  accountUpdates_in?: InputMaybe<Array<InputMaybe<ZkappZkappCommandAccountUpdateQueryInput>>>;
  accountUpdates_nin?: InputMaybe<Array<InputMaybe<ZkappZkappCommandAccountUpdateQueryInput>>>;
  feePayer?: InputMaybe<ZkappZkappCommandFeePayerQueryInput>;
  feePayer_exists?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  memo_exists?: InputMaybe<Scalars['Boolean']>;
  memo_gt?: InputMaybe<Scalars['String']>;
  memo_gte?: InputMaybe<Scalars['String']>;
  memo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  memo_lt?: InputMaybe<Scalars['String']>;
  memo_lte?: InputMaybe<Scalars['String']>;
  memo_ne?: InputMaybe<Scalars['String']>;
  memo_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ZkappZkappCommandUpdateInput = {
  accountUpdates?: InputMaybe<Array<InputMaybe<ZkappZkappCommandAccountUpdateUpdateInput>>>;
  accountUpdates_unset?: InputMaybe<Scalars['Boolean']>;
  feePayer?: InputMaybe<ZkappZkappCommandFeePayerUpdateInput>;
  feePayer_unset?: InputMaybe<Scalars['Boolean']>;
  memo?: InputMaybe<Scalars['String']>;
  memo_unset?: InputMaybe<Scalars['Boolean']>;
};

export type GetEventsQueryVariables = Exact<{
  zkAppAddress: Scalars['String'];
}>;


export type GetEventsQuery = { __typename?: 'Query', zkapps: Array<{ __typename?: 'Zkapp', hash?: string | null, blockHeight?: number | null, zkappCommand?: { __typename?: 'ZkappZkappCommand', accountUpdates?: Array<{ __typename?: 'ZkappZkappCommandAccountUpdate', body?: { __typename?: 'ZkappZkappCommandAccountUpdateBody', events?: Array<string | null> | null, publicKey?: string | null } | null } | null> | null } | null } | null> };


export const GetEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zkAppAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"zkapps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"zkappCommand"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accountUpdates"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"publicKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zkAppAddress"}}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"canonical"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"failureReason_exists"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"EnumValue","value":"BLOCKHEIGHT_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEventsQuery, GetEventsQueryVariables>;