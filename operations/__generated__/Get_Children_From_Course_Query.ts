/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChildrenWhereInput, StatusEnum, NameEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: Get_Children_From_Course_Query
// ====================================================

export interface Get_Children_From_Course_Query_children_tutor {
  __typename: "User";
  id: string;
  phone_number: string;
}

export interface Get_Children_From_Course_Query_children_order_option_set_options {
  __typename: "Option";
  id: number;
  name: NameEnum;
}

export interface Get_Children_From_Course_Query_children_order_option_set {
  __typename: "OptionSet";
  id: number;
  status: StatusEnum;
  options: Get_Children_From_Course_Query_children_order_option_set_options;
}

export interface Get_Children_From_Course_Query_children_order {
  __typename: "Order";
  id: number;
  sport_voucher: boolean;
  option_set: Get_Children_From_Course_Query_children_order_option_set[] | null;
}

export interface Get_Children_From_Course_Query_children {
  __typename: "Child";
  id: number;
  name: string;
  first_name: string;
  tutor: Get_Children_From_Course_Query_children_tutor;
  order: Get_Children_From_Course_Query_children_order | null;
}

export interface Get_Children_From_Course_Query {
  children: Get_Children_From_Course_Query_children[];
}

export interface Get_Children_From_Course_QueryVariables {
  where?: ChildrenWhereInput | null;
}
