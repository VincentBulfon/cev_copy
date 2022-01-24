/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NameEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetOptions
// ====================================================

export interface GetOptions_options_price {
  __typename: "Price";
  price: number;
  id: number;
}

export interface GetOptions_options {
  __typename: "Option";
  price: GetOptions_options_price;
  name: NameEnum;
  id: number;
}

export interface GetOptions {
  /**
   * get options
   */
  options: GetOptions_options[];
}
