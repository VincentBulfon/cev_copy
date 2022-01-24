/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { courseId } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteCourse
// ====================================================

export interface DeleteCourse_deleteCourse {
  __typename: "Course";
  start_time: any;
  day_of_week: number;
  id: number;
  end_time: any;
  places: number;
}

export interface DeleteCourse {
  deleteCourse: DeleteCourse_deleteCourse | null;
}

export interface DeleteCourseVariables {
  courseId?: courseId | null;
}
