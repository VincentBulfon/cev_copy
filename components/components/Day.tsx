import React from 'react';
import { GetCourses_courses } from 'operations/__generated__/GetCourses';

import dayjs from 'config/dayjs';
import Course from './Course';
import { CourseDayTypes } from 'alltypes';

const Day = ({ isCalendar = false, courses }: CourseDayTypes) => {
  function isCancelled(course: GetCourses_courses) {
    if (course.cancellations?.length) {
      for (let i = 0; i < course.cancellations.length; i++) {
        if (
          dayjs(course.cancellations[i]?.date)
            .subtract(1, 'day')
            .format('DD/MM/YYYY') == dayjs(courses.date).format('DD/MM/YYYY')
        ) {
          return true;
        }
      }
    }
    return false;
  }
  return (
    <li className="calendar__day">
      <div className="day__wrapper">
        <div className="day__title">
          <span className="day__number">{dayjs(courses.date).format('D')}</span>
          <span className="day__name">{courses.dayName}</span>
        </div>
        {courses.courses.map((course, index) => {
          return (
            <Course
              cancelled={isCancelled(course)}
              date={new Date(courses.date)}
              key={index}
              day={courses.dayName}
              hours={`${dayjs(course.start_time).format('HH:mm')}-${dayjs(
                course.end_time,
              ).format('HH:mm')}`}
              id={course.id}
              isCalendar={isCalendar}
            />
          );
        })}
      </div>
    </li>
  );
};

export default Day;
