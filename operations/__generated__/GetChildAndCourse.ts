/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChildrenWhereInput, StatusEnum, NameEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetChildAndCourse
// ====================================================

export interface GetChildAndCourse_courses {
  __typename: "Course";
  id: number;
  day_of_week: number;
  start_time: any;
  end_time: any;
  occupation: number;
  places: number;
}

export interface GetChildAndCourse_children_tutor {
  __typename: "User";
  id: string;
  phone_number: string;
}

export interface GetChildAndCourse_children_currentCourse_course {
  __typename: "Course";
  id: number;
}

export interface GetChildAndCourse_children_currentCourse {
  __typename: "currentCourseType";
  course: GetChildAndCourse_children_currentCourse_course | null;
}

export interface GetChildAndCourse_children_order_option_set_options {
  __typename: "Option";
  id: number;
  name: NameEnum;
}

export interface GetChildAndCourse_children_order_option_set {
  __typename: "OptionSet";
  id: number;
  status: StatusEnum;
  options: GetChildAndCourse_children_order_option_set_options;
}

export interface GetChildAndCourse_children_order {
  __typename: "Order";
  id: number;
  created_at: any;
  sport_voucher: boolean;
  option_set: GetChildAndCourse_children_order_option_set[] | null;
}

export interface GetChildAndCourse_children {
  __typename: "Child";
  id: number;
  name: string;
  first_name: string;
  tutor: GetChildAndCourse_children_tutor;
  currentCourse: GetChildAndCourse_children_currentCourse | null;
  order: GetChildAndCourse_children_order | null;
}

export interface GetChildAndCourse {
  courses: GetChildAndCourse_courses[];
  children: GetChildAndCourse_children[];
}

export interface GetChildAndCourseVariables {
  where?: ChildrenWhereInput | null;
}
