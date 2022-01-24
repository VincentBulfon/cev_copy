/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCoursesDate
// ====================================================

export interface GetCoursesDate_courses {
  __typename: "Course";
  id: number;
  day_of_week: number;
  start_time: any;
  end_time: any;
  occupation: number;
  places: number;
}

export interface GetCoursesDate {
  courses: GetCoursesDate_courses[];
}
