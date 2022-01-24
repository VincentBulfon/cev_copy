import { IdType } from './IdTypes';

export interface CourseTypes extends IdType {
  date: Date;
  day: string;
  hours: string;
  cancelled: boolean;
  isCalendar?: boolean;
}
