import { gql } from '@apollo/client';

export const GET_USER_CHILDREN = gql`
  query Get_User_Children($where: UsersWhereInput) {
    users(where: $where) {
      id
      children {
        id
        name
        first_name
      }
    }
  }
`;

export const GET_USER_AND_CHILDREN_WITH_COURSES = gql`
  query Get_User_And_Children_With_Courses($where: UsersWhereInput) {
    users(where: $where) {
      id
      name
      first_name
      phone_number
      email
      secondary_email
      children {
        id
        name
        first_name
        birth_date
        courses {
          id
          day_of_week
          start_time
          end_time
        }
      }
    }
  }
`;

export const GET_CHILDREN_FROM_COURSE_QUERY = gql`
  query Get_Children_From_Course_Query($where: ChildrenWhereInput) {
    children(where: $where) {
      id
      name
      first_name
      tutor {
        id
        phone_number
      }
      order {
        id
        sport_voucher
        option_set {
          id
          status
          options {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_CHILD_AND_COURSES = gql`
  query GetChildAndCourse($where: ChildrenWhereInput) {
    courses {
      id
      day_of_week
      start_time
      end_time
      occupation
      places
    }
    children(where: $where) {
      id
      name
      first_name
      tutor {
        id
        phone_number
      }
      currentCourse {
        course {
          id
        }
      }
      order {
        id
        created_at
        sport_voucher
        option_set {
          id
          status
          options {
            id
            name
          }
        }
      }
    }
  }
`;
