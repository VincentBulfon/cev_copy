import React from 'react';

import { CourseTypes } from 'alltypes';
import DotOption from 'components/atoms/DotOption';
import { isAdminVar, isLoggedVar } from 'client/reactVars';

function Course({ day, hours, id, isCalendar, cancelled, date }: CourseTypes) {
  return (
    <div className="day__course">
      <div className="course__core">
        {cancelled && (
          <>
            <span className="sro">Ce cours est annulé</span>
            <svg
              className="svg svg--small"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21">
              <g
                fill="none"
                stroke="#ff3100"
                strokeWidth="2"
                data-name="Group 22">
                <g data-name="Rectangle 25">
                  <path stroke="none" d="M0 0h21v21H0z" />
                  <path d="M1 1h19v19H1z" />
                </g>
                <g data-name="Group 19">
                  <path d="M5.74 5.8l9.46 9.46" data-name="Path 61" />
                  <path d="M15.2 5.8l-9.46 9.46" data-name="Path 62" />
                </g>
              </g>
            </svg>
          </>
        )}
        <p className="course__hours">{hours}</p>
      </div>
      {isLoggedVar().isLogged.length && isAdminVar().isAdmin === true ? (
        <DotOption
          isCalendar={isCalendar}
          courseId={id}
          date={date}
          content={`actions possibles sur le cours du ${day} de ${hours}`}
          timeRange={hours}
        />
      ) : null}
    </div>
  );
}

export default Course;
