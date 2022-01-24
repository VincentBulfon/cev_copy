/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ForgotUserPassword
// ====================================================

export interface ForgotUserPassword_forgotPassword {
  __typename: "MessagePayload";
  message: string;
}

export interface ForgotUserPassword {
  forgotPassword: ForgotUserPassword_forgotPassword;
}

export interface ForgotUserPasswordVariables {
  email: string;
}
