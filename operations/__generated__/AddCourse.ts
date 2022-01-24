/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoursesCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddCourse
// ====================================================

export interface AddCourse_createOneCourses {
  __typename: "Course";
  id: number;
  day_of_week: number;
  start_time: any;
  end_time: any;
  places: number;
  occupation: number;
}

export interface AddCourse {
  /**
   * create on course
   */
  createOneCourses: AddCourse_createOneCourses;
}

export interface AddCourseVariables {
  data: CoursesCreateInput;
}
