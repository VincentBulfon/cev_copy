/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: Update_User_Data_Mutation
// ====================================================

export interface Update_User_Data_Mutation_updateUserData {
  __typename: "User";
  name: string;
  first_name: string;
  phone_number: string;
  email: string;
  secondary_email: string | null;
}

export interface Update_User_Data_Mutation {
  updateUserData: Update_User_Data_Mutation_updateUserData;
}

export interface Update_User_Data_MutationVariables {
  updateUserData: updateUserInput;
}
