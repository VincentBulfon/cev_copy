/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserExistsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: CheckIfEmailIsAlreadyInUse
// ====================================================

export interface CheckIfEmailIsAlreadyInUse_UserExists {
  __typename: "UserExistsObject";
  exists: boolean;
}

export interface CheckIfEmailIsAlreadyInUse {
  UserExists: CheckIfEmailIsAlreadyInUse_UserExists;
}

export interface CheckIfEmailIsAlreadyInUseVariables {
  passedEmail: UserExistsInput;
}
