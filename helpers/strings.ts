import dayjs from 'config/dayjs';
import { GetCoursesDate_courses } from 'operations/__generated__/GetCoursesDate';
import { Get_User_And_Children_With_Courses_users_children_courses } from 'operations/__generated__/Get_User_And_Children_With_Courses';

//return the day of the week and the time of the current course and also the
//the occupation of the course
export function getCourseString(course: GetCoursesDate_courses) {
  return `${dayjs().day(course.day_of_week).format('dddd')} : ${dayjs(
    course.start_time,
  ).format('HH:mm')}-${dayjs(course.end_time).format('HH:mm')} Inscrits : ${
    course.occupation
  }/${course.places}`;
}

//return the day of the week and the time of the current course
export function getCourseStringWithoutOccupation(
  course: Get_User_And_Children_With_Courses_users_children_courses,
) {
  return `${dayjs().day(course.day_of_week).format('dddd')} : ${dayjs(
    course.start_time,
  ).format('HH:mm')}-${dayjs(course.end_time).format('HH:mm')}`;
}
