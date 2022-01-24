import { GetCourses_courses } from 'operations/__generated__/GetCourses';

export type CourseDayTypes = {
  isCalendar: boolean;
  courses: {
    date: string;
    dayNbr: number;
    dayName: string;
    courses: Array<GetCourses_courses>;
  };
};
