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

export type CollectionProof = {
  __typename?: 'CollectionProof';
  address: Scalars['String'];
  chainId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  minaProofAddress?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GetCollectionProofListResponse = {
  __typename?: 'GetCollectionProofListResponse';
  data: Array<CollectionProof>;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  removeCollectionProof: Scalars['Boolean'];
  restoreCollectionProof: CollectionProof;
  softRemoveCollectionProof: Scalars['Boolean'];
};


export type MutationRemoveCollectionProofArgs = {
  id: Scalars['ID'];
};


export type MutationRestoreCollectionProofArgs = {
  id: Scalars['ID'];
};


export type MutationSoftRemoveCollectionProofArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  collectionproof?: Maybe<CollectionProof>;
  collectionproofs: GetCollectionProofListResponse;
  getSignedCollectionProof: SignedCollectionProof;
  userProfile: SignedUser;
};


export type QueryCollectionproofArgs = {
  id: Scalars['ID'];
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCollectionproofsArgs = {
  search?: InputMaybe<Scalars['String']>;
  withDeleted?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetSignedCollectionProofArgs = {
  address: Scalars['String'];
  chainId: Scalars['Int'];
};

export type SignedCollectionProof = {
  __typename?: 'SignedCollectionProof';
  data: CollectionProof;
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

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = { __typename?: 'Query', userProfile: { __typename?: 'SignedUser', signature: any, publicKey: string, data: { __typename?: 'User', id: string, email?: string | null, lastName?: string | null, firstName?: string | null, age?: number | null, gender?: number | null, createdAt: any, updatedAt: any } } };


export const UserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"signature"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}}]}}]} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;