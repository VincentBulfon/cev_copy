/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersWhereInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: Get_User_Children
// ====================================================

export interface Get_User_Children_users_children {
  __typename: "Child";
  id: number;
  name: string;
  first_name: string;
}

export interface Get_User_Children_users {
  __typename: "User";
  id: string;
  children: Get_User_Children_users_children[] | null;
}

export interface Get_User_Children {
  users: Get_User_Children_users[];
}

export interface Get_User_ChildrenVariables {
  where?: UsersWhereInput | null;
}
