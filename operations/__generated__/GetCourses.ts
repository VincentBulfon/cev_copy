/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCourses
// ====================================================

export interface GetCourses_courses_cancellations {
  __typename: "Cancellation";
  id: number;
  date: any;
}

export interface GetCourses_courses {
  __typename: "Course";
  id: number;
  cancellations: (GetCourses_courses_cancellations | null)[] | null;
  day_of_week: number;
  start_time: any;
  end_time: any;
}

export interface GetCourses {
  courses: GetCourses_courses[];
}

export interface GetCoursesVariables {
  cancellationsFirstDate?: any | null;
  cancellationsSecondDate?: any | null;
}
