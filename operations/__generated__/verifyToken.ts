/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { verifyTokenInput, RoleEnum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: verifyToken
// ====================================================

export interface verifyToken_verifyToken {
  __typename: "tokenVerificationResponse";
  response: boolean;
  userId: string;
  userRole: RoleEnum;
  userFirstName: string;
}

export interface verifyToken {
  verifyToken: verifyToken_verifyToken;
}

export interface verifyTokenVariables {
  token: verifyTokenInput;
}
