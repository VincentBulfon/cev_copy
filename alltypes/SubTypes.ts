import {
  GetChildAndCourse_children_order,
  GetChildAndCourse_courses,
} from 'operations/__generated__/GetChildAndCourse';
import { GetData } from 'operations/__generated__/GetData';
import { IdType } from './IdTypes';

export type Day = number;
export type Hours = string;
export enum Cot1Status {
  paid,
  unpaid,
  'not applicable',
}
export enum Cot2Status {
  paid,
  unpaid,
  'not applicable',
  'not yet payable',
}
export enum AssStatus {
  paid,
  unpaid,
}
export interface SubType extends IdType {
  order: GetChildAndCourse_children_order;
  courses: GetChildAndCourse_courses[] | undefined;
  currentCourse: number | null;
}

export type SubDataType = {
  data: GetData;
};
