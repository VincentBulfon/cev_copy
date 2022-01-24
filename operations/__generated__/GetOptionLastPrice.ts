/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NameEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetOptionLastPrice
// ====================================================

export interface GetOptionLastPrice_options_price {
  __typename: "Price";
  id: number;
  price: number;
}

export interface GetOptionLastPrice_options {
  __typename: "Option";
  id: number;
  price: GetOptionLastPrice_options_price;
  name: NameEnum;
}

export interface GetOptionLastPrice {
  /**
   * get options
   */
  options: GetOptionLastPrice_options[];
}
