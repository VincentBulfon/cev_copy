/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChildrenCreateInput, RoleEnum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateChildren
// ====================================================

export interface CreateChildren_createChildren_child {
  __typename: "Child";
  id: number;
  name: string;
  first_name: string;
  birth_date: any;
  tutor_id: string;
}

export interface CreateChildren_createChildren_token {
  __typename: "Token";
  token: string;
  userId: string;
  userRole: RoleEnum;
}

export interface CreateChildren_createChildren {
  __typename: "createChildrenType";
  child: CreateChildren_createChildren_child[] | null;
  token: CreateChildren_createChildren_token;
}

export interface CreateChildren {
  createChildren: CreateChildren_createChildren | null;
}

export interface CreateChildrenVariables {
  childrenList: (ChildrenCreateInput | null)[];
}
