/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { loginInput, RoleEnum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: Sign_In_Mutation
// ====================================================

export interface Sign_In_Mutation_login {
  __typename: "AuthPayload";
  token: string;
  userId: string;
  userRole: RoleEnum;
  userFirstName: string;
}

export interface Sign_In_Mutation {
  login: Sign_In_Mutation_login;
}

export interface Sign_In_MutationVariables {
  input?: loginInput | null;
}
