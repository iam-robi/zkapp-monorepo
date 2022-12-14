/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "query getOwnershipSignedData($address: String!, $ercType: String!) {\n  getOwnershipSignedData(address: $address, ercType: $ercType) {\n    data {\n      address\n      chainId\n      createdAt\n      balance\n    }\n    signature\n    publicKey\n  }\n}": types.GetOwnershipSignedDataDocument,
    "query getTradingSignedData($exchange: String!) {\n  getTradingSignedData(exchange: $exchange) {\n    data {\n      swapCounts\n      amountUsd\n      exchange\n      createdAt\n    }\n    signature\n    publicKey\n  }\n}": types.GetTradingSignedDataDocument,
    "query userProfile {\n  userProfile {\n    data {\n      id\n      email\n      lastName\n      firstName\n      age\n      gender\n      createdAt\n      updatedAt\n    }\n    signature\n    publicKey\n  }\n}": types.UserProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getOwnershipSignedData($address: String!, $ercType: String!) {\n  getOwnershipSignedData(address: $address, ercType: $ercType) {\n    data {\n      address\n      chainId\n      createdAt\n      balance\n    }\n    signature\n    publicKey\n  }\n}"): (typeof documents)["query getOwnershipSignedData($address: String!, $ercType: String!) {\n  getOwnershipSignedData(address: $address, ercType: $ercType) {\n    data {\n      address\n      chainId\n      createdAt\n      balance\n    }\n    signature\n    publicKey\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getTradingSignedData($exchange: String!) {\n  getTradingSignedData(exchange: $exchange) {\n    data {\n      swapCounts\n      amountUsd\n      exchange\n      createdAt\n    }\n    signature\n    publicKey\n  }\n}"): (typeof documents)["query getTradingSignedData($exchange: String!) {\n  getTradingSignedData(exchange: $exchange) {\n    data {\n      swapCounts\n      amountUsd\n      exchange\n      createdAt\n    }\n    signature\n    publicKey\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query userProfile {\n  userProfile {\n    data {\n      id\n      email\n      lastName\n      firstName\n      age\n      gender\n      createdAt\n      updatedAt\n    }\n    signature\n    publicKey\n  }\n}"): (typeof documents)["query userProfile {\n  userProfile {\n    data {\n      id\n      email\n      lastName\n      firstName\n      age\n      gender\n      createdAt\n      updatedAt\n    }\n    signature\n    publicKey\n  }\n}"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;