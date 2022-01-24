/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChildrenUpdateInput, ChildrenWhereUniqueInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: Update_One_Child_Mutation
// ====================================================

export interface Update_One_Child_Mutation_updateOneChildren {
  __typename: "Child";
  id: number;
  name: string;
  first_name: string;
}

export interface Update_One_Child_Mutation {
  /**
   * update one child
   */
  updateOneChildren: Update_One_Child_Mutation_updateOneChildren | null;
}

export interface Update_One_Child_MutationVariables {
  data: ChildrenUpdateInput;
  where: ChildrenWhereUniqueInput;
}
