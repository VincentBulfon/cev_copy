/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { signupInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateUserWithChild
// ====================================================

export interface CreateUserWithChild_signup {
  __typename: "AuthPayload";
  token: string;
  userId: string;
}

export interface CreateUserWithChild {
  signup: CreateUserWithChild_signup;
}

export interface CreateUserWithChildVariables {
  signupSignupInput?: signupInput | null;
}
