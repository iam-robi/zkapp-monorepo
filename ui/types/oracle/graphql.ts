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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Contract = {
  __typename?: 'Contract';
  address: Scalars['String'];
  chainId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  minaProofAddress?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type GetContractListResponse = {
  __typename?: 'GetContractListResponse';
  data: Array<Contract>;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  removeContract: Scalars['Boolean'];
  restoreContract: Contract;
  softRemoveContract: Scalars['Boolean'];
};


export type MutationRemoveContractArgs = {
  id: Scalars['ID'];
};


export type MutationRestoreContractArgs = {
  id: Scalars['ID'];
};


export type MutationSoftRemoveContractArgs = {
  id: Scalars['ID'];
};

export type OwnershipData = {
  __typename?: 'OwnershipData';
  address: Scalars['String'];
  balance: Scalars['Int'];
  chainId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  contract?: Maybe<Contract>;
  contracts: GetContractListResponse;
  getOwnershipSignedData: SignedOwnershipData;
  getOwnershipSignedDataTest: SignedOwnershipData;
  userProfile: SignedUser;
};


export type QueryContractArgs = {
  id: Scalars['ID'];
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryContractsArgs = {
  search?: InputMaybe<Scalars['String']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetOwnershipSignedDataArgs = {
  address: Scalars['String'];
  ercType: Scalars['String'];
};

export type SignedOwnershipData = {
  __typename?: 'SignedOwnershipData';
  data: OwnershipData;
  publicKey: Scalars['String'];
  signature: Scalars['JSON'];
};

export type SignedUser = {
  __typename?: 'SignedUser';
  data: User;
  publicKey: Scalars['String'];
  signature: Scalars['JSON'];
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  age?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type GetOwnershipSignedDataQueryVariables = Exact<{
  address: Scalars['String'];
  ercType: Scalars['String'];
}>;


export type GetOwnershipSignedDataQuery = { __typename?: 'Query', getOwnershipSignedData: { __typename?: 'SignedOwnershipData', signature: any, publicKey: string, data: { __typename?: 'OwnershipData', address: string, chainId: number, createdAt: any, balance: number } } };

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = { __typename?: 'Query', userProfile: { __typename?: 'SignedUser', signature: any, publicKey: string, data: { __typename?: 'User', id: string, email?: string | null, lastName?: string | null, firstName?: string | null, age?: number | null, gender?: number | null, createdAt: any, updatedAt: any } } };


export const GetOwnershipSignedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOwnershipSignedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ercType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOwnershipSignedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"ercType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ercType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}}]}}]} as unknown as DocumentNode<GetOwnershipSignedDataQuery, GetOwnershipSignedDataQueryVariables>;
export const UserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}}]}}]} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;