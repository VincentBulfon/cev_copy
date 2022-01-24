/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoursesUpdateInput, CoursesWhereUniqueInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateCourse
// ====================================================

export interface UpdateCourse_updateOneCourses {
  __typename: "Course";
  id: number;
  places: number;
  day_of_week: number;
  start_time: any;
  end_time: any;
}

export interface UpdateCourse {
  /**
   * update one course
   */
  updateOneCourses: UpdateCourse_updateOneCourses | null;
}

export interface UpdateCourseVariables {
  data: CoursesUpdateInput;
  where: CoursesWhereUniqueInput;
}
