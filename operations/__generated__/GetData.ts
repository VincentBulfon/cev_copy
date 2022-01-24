/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NameEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetData
// ====================================================

export interface GetData_courses {
  __typename: "Course";
  id: number;
  day_of_week: number;
  start_time: any;
  end_time: any;
  occupation: number;
  places: number;
}

export interface GetData_options_price {
  __typename: "Price";
  price: number;
  id: number;
}

export interface GetData_options {
  __typename: "Option";
  price: GetData_options_price;
  name: NameEnum;
  id: number;
}

export interface GetData {
  courses: GetData_courses[];
  /**
   * get options
   */
  options: GetData_options[];
}
