import { gql } from '@apollo/client';

export const UPDATE_COURSE_MUTATION = gql`
  mutation UpdateCourse(
    $data: CoursesUpdateInput!
    $where: CoursesWhereUniqueInput!
  ) {
    updateOneCourses(data: $data, where: $where) {
      id
      places
      day_of_week
      start_time
      end_time
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation DeleteCourse($courseId: courseId) {
    deleteCourse(courseId: $courseId) {
      start_time
      day_of_week
      id
      end_time
      places
    }
  }
`;

export const ADD_COURSE = gql`
  mutation AddCourse($data: CoursesCreateInput!) {
    createOneCourses(data: $data) {
      id
      day_of_week
      start_time
      end_time
      places
      occupation
    }
  }
`;
