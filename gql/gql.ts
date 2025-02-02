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
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  #graphql\n  mutation CreatePost($payload: CreatePostData!) {\n    createPost(payload: $payload) {\n      id\n    }\n  }\n": types.CreatePostDocument,
    "\n  #graphql\n\n  query GetAllPosts {\n    getAllPosts {\n      id\n      content\n      imageUrl\n      owner {\n        id\n        firstname\n        lastname\n        avatar\n      }\n    }\n  }\n": types.GetAllPostsDocument,
    "\n  #graphql\n  query verifyGoogleToken($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n": types.VerifyGoogleTokenDocument,
    "\n  #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      avatar\n      email\n      firstname\n      lastname\n      posts {\n        id\n        content\n        owner {\n          avatar\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  #graphql\n  query GetUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      firstname\n      lastname\n      avatar\n      posts {\n        content\n        id\n        owner {\n          id\n          avatar\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation CreatePost($payload: CreatePostData!) {\n    createPost(payload: $payload) {\n      id\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation CreatePost($payload: CreatePostData!) {\n    createPost(payload: $payload) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n\n  query GetAllPosts {\n    getAllPosts {\n      id\n      content\n      imageUrl\n      owner {\n        id\n        firstname\n        lastname\n        avatar\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n\n  query GetAllPosts {\n    getAllPosts {\n      id\n      content\n      imageUrl\n      owner {\n        id\n        firstname\n        lastname\n        avatar\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query verifyGoogleToken($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n"): (typeof documents)["\n  #graphql\n  query verifyGoogleToken($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      avatar\n      email\n      firstname\n      lastname\n      posts {\n        id\n        content\n        owner {\n          avatar\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      avatar\n      email\n      firstname\n      lastname\n      posts {\n        id\n        content\n        owner {\n          avatar\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      firstname\n      lastname\n      avatar\n      posts {\n        content\n        id\n        owner {\n          id\n          avatar\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetUserById($id: ID!) {\n    getUserById(id: $id) {\n      id\n      firstname\n      lastname\n      avatar\n      posts {\n        content\n        id\n        owner {\n          id\n          avatar\n          firstname\n          lastname\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;