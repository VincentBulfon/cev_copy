/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoursesOrderByInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetCoursesOrderedByStartTime
// ====================================================

export interface GetCoursesOrderedByStartTime_courses {
  __typename: "Course";
  id: number;
  day_of_week: number;
  start_time: any;
  end_time: any;
  places: number;
}

export interface GetCoursesOrderedByStartTime {
  courses: GetCoursesOrderedByStartTime_courses[];
}

export interface GetCoursesOrderedByStartTimeVariables {
  orderBy?: CoursesOrderByInput[] | null;
}
