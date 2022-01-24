import React, { useMemo, useState } from 'react';

import { useQuery } from '@apollo/client';
import { GET_COURSES } from 'operations/queries/courses';
import {
  GetCourses,
  GetCoursesVariables,
  GetCourses_courses,
} from 'operations/__generated__/GetCourses';

import Day from './Day';
import dayjs from 'config/dayjs';
import CallToAction from 'components/moleculs/CallToAction';
import { isAdminVar } from 'client/reactVars';

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(dayjs().startOf('month'));

  const daysInMonth = currentDate.daysInMonth();

  const { data, loading, error } = useQuery<GetCourses, GetCoursesVariables>(
    GET_COURSES,
    {
      variables: {
        cancellationsFirstDate: currentDate,
        cancellationsSecondDate: currentDate.endOf('month'),
      },
      ssr: false,
    },
  );

  const daysWithCourses = useMemo(() => {
    if (!loading && !error && data) {
      return createCoursesDay();
    }
  }, [currentDate, loading, data, error]);

  function createCoursesDay() {
    const coursesOfTheMonth = [];
    for (let i = 1; i <= daysInMonth; i++) {
      let coursesOfTheDay = {
        date: Date(),
        dayNbr: Number(),
        dayName: String(),
        courses: Array<GetCourses_courses>(),
      };
      const date = currentDate.add(i, 'day').toString();
      const dayOfWe = currentDate.add(i, 'day').day();
      const dayName = currentDate.add(i, 'day').format('dddd');
      data?.courses.forEach(course => {
        if (dayOfWe === course.day_of_week) {
          coursesOfTheDay.date = date;
          coursesOfTheDay.dayName = dayName;
          coursesOfTheDay.dayNbr = dayjs(date).day();
          coursesOfTheDay.courses.push(course);
        }
      });
      if (coursesOfTheDay.courses.length) {
        coursesOfTheMonth.push(coursesOfTheDay);
      }
    }
    return coursesOfTheMonth;
  }

  function handleNextMonth() {
    setCurrentDate(prev => {
      return prev.add(1, 'month');
    });
  }

  function handlePreviousMonth() {
    setCurrentDate(prev => {
      return prev.subtract(1, 'month');
    });
  }

  return (
    <section className="calendar__comp">
      <div className="calendar__header">
        <div className="calendar__title">
          <h4 className="calendar__month">{currentDate.format('MMMM')}</h4>
          <button className="calendar__next" onClick={handleNextMonth}>
            <span className="sro">Précédent</span>
          </button>
          <button className="calendar__prev" onClick={handlePreviousMonth}>
            <span className="sro">Suivant</span>
          </button>
        </div>
        <p className="calendar__year">{currentDate.format('YYYY')}</p>
      </div>
      <ul className="calendar__days">
        {daysWithCourses?.length ? (
          daysWithCourses.map((courseOfTheDay, index) => {
            return (
              <Day courses={courseOfTheDay} key={index} isCalendar={true} />
            );
          })
        ) : loading ? (
          <li className="loader loader--orange">
            <span className="sro">
              Nous chargeons les données, veuillez patienter
            </span>
          </li>
        ) : (
          <li className="day__title">
            Aucun cours n'est prévu pour ce mois-ci.
          </li>
        )}
      </ul>
      {isAdminVar().isAdmin && !daysWithCourses?.length && (
        <CallToAction
          main
          name="Ajouter un cours"
          to="/management/courses/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            viewBox="0 0 31 32"
            className="svg svg--left">
            <path
              stroke="null"
              d="M15.5.06C6.97.06.02 7.2.02 16c0 8.8 6.95 15.94 15.48 15.94 8.53 0 15.48-7.15 15.48-15.94C30.98 7.2 24.03.06 15.5.06zm0 2.45c7.25 0 13.1 6.03 13.1 13.49s-5.85 13.5-13.1 13.5S2.4 23.45 2.4 16 8.25 2.5 15.5 2.5zm-1.2 7.36v4.9H9.56v2.46h4.76v4.9h2.38v-4.9h4.76v-2.46H16.7v-4.9h-2.38z"></path>
          </svg>
        </CallToAction>
      )}
    </section>
  );
};
export default CalendarComponent;
