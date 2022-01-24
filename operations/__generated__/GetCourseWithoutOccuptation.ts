/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourseWithoutOccuptation
// ====================================================

export interface GetCourseWithoutOccuptation_courses {
  __typename: "Course";
  id: number;
  day_of_week: number;
  start_time: any;
  end_time: any;
  places: number;
}

export interface GetCourseWithoutOccuptation {
  courses: GetCourseWithoutOccuptation_courses[];
}
