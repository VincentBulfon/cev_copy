/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateOptionSetInput, ChildrenOnCourseUpdateInput, ChildrenOnCourseWhereUniqueInput, StatusEnum } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateOptionSet
// ====================================================

export interface UpdateOptionSet_updateOptionSet {
  __typename: "OptionSet";
  id: number;
  status: StatusEnum;
}

export interface UpdateOptionSet_updateOneChildrenOnCourse {
  __typename: "ChildrenOnCourses";
  inscriptionDate: any;
}

export interface UpdateOptionSet {
  updateOptionSet: (UpdateOptionSet_updateOptionSet | null)[] | null;
  /**
   * update one children course
   */
  updateOneChildrenOnCourse: UpdateOptionSet_updateOneChildrenOnCourse | null;
}

export interface UpdateOptionSetVariables {
  updateOptionSet: (UpdateOptionSetInput | null)[];
  data: ChildrenOnCourseUpdateInput;
  where: ChildrenOnCourseWhereUniqueInput;
}
