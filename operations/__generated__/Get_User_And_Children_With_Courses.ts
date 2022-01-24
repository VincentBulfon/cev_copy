/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UsersWhereInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: Get_User_And_Children_With_Courses
// ====================================================

export interface Get_User_And_Children_With_Courses_users_children_courses {
  __typename: "Course";
  id: number;
  day_of_week: number;
  start_time: any;
  end_time: any;
}

export interface Get_User_And_Children_With_Courses_users_children {
  __typename: "Child";
  id: number;
  name: string;
  first_name: string;
  birth_date: any;
  courses: Get_User_And_Children_With_Courses_users_children_courses[] | null;
}

export interface Get_User_And_Children_With_Courses_users {
  __typename: "User";
  id: string;
  name: string;
  first_name: string;
  phone_number: string;
  email: string;
  secondary_email: string | null;
  children: Get_User_And_Children_With_Courses_users_children[] | null;
}

export interface Get_User_And_Children_With_Courses {
  users: Get_User_And_Children_With_Courses_users[];
}

export interface Get_User_And_Children_With_CoursesVariables {
  where?: UsersWhereInput | null;
}
