/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CancellationsCreateInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCancellation
// ====================================================

export interface CreateCancellation_createOneCancellations {
  __typename: "Cancellation";
  id: number;
  date: any;
}

export interface CreateCancellation {
  /**
   * create one cancellation
   */
  createOneCancellations: CreateCancellation_createOneCancellations;
}

export interface CreateCancellationVariables {
  data: CancellationsCreateInput;
}
