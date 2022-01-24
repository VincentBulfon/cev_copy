/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { resetPasswordInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ResetUserPassword
// ====================================================

export interface ResetUserPassword_resetPassword {
  __typename: "MessagePayload";
  message: string;
}

export interface ResetUserPassword {
  resetPassword: ResetUserPassword_resetPassword;
}

export interface ResetUserPasswordVariables {
  resetPasswordInput: resetPasswordInput;
}
