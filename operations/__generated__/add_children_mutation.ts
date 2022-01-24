/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChildrenCreateInput, StatusEnum, NameEnum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: add_children_mutation
// ====================================================

export interface add_children_mutation_createChildren_child_courses {
  __typename: "Course";
  day_of_week: number;
  start_time: any;
  end_time: any;
  places: number;
}

export interface add_children_mutation_createChildren_child_tutor {
  __typename: "User";
  id: string;
  name: string;
  first_name: string;
}

export interface add_children_mutation_createChildren_child_orders_option_set_options {
  __typename: "Option";
  name: NameEnum;
  id: number;
}

export interface add_children_mutation_createChildren_child_orders_option_set_price {
  __typename: "Price";
  id: number;
  price: number;
}

export interface add_children_mutation_createChildren_child_orders_option_set {
  __typename: "OptionSet";
  id: number;
  status: StatusEnum;
  options: add_children_mutation_createChildren_child_orders_option_set_options;
  price: add_children_mutation_createChildren_child_orders_option_set_price | null;
}

export interface add_children_mutation_createChildren_child_orders {
  __typename: "Order";
  id: number;
  sport_voucher: boolean;
  option_set: add_children_mutation_createChildren_child_orders_option_set[] | null;
}

export interface add_children_mutation_createChildren_child {
  __typename: "Child";
  name: string;
  id: number;
  first_name: string;
  courses: add_children_mutation_createChildren_child_courses[] | null;
  birth_date: any;
  tutor: add_children_mutation_createChildren_child_tutor;
  orders: (add_children_mutation_createChildren_child_orders | null)[] | null;
}

export interface add_children_mutation_createChildren {
  __typename: "createChildrenType";
  child: add_children_mutation_createChildren_child[] | null;
}

export interface add_children_mutation {
  createChildren: add_children_mutation_createChildren | null;
}

export interface add_children_mutationVariables {
  childrenList: (ChildrenCreateInput | null)[];
}
