import { gql } from '@apollo/client';

export const GET_COURSES = gql`
  query GetCourses(
    $cancellationsFirstDate: DateTime
    $cancellationsSecondDate: DateTime
  ) {
    courses {
      id
      cancellations(
        firstDate: $cancellationsFirstDate
        secondDate: $cancellationsSecondDate
      ) {
        id
        date
      }
      day_of_week
      start_time
      end_time
    }
  }
`;

export const GET_COURSES_DATES = gql`
  query GetCoursesDate {
    courses {
      id
      day_of_week
      start_time
      end_time
      occupation
      places
    }
  }
`;

//NOTE: only used to get the type of the query written inside
//a getServerSideProps
export const GET_COURSE_WITHOUT_OCCUPATION = gql`
  query GetCourseWithoutOccuptation {
    courses {
      id
      day_of_week
      start_time
      end_time
      places
    }
  }
`;

export const GET_COURSE_ORDERED_BY_START_TIME = gql`
  query GetCoursesOrderedByStartTime($orderBy: [CoursesOrderByInput!]) {
    courses(orderBy: $orderBy) {
      id
      day_of_week
      start_time
      end_time
      places
    }
  }
`;
