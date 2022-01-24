import { gql } from '@apollo/client';

export const SIGN_UP_MUTATION = gql`
  mutation CreateUserWithChild($signupSignupInput: signupInput) {
    signup(signupInput: $signupSignupInput) {
      token
      userId
    }
  }
`;

export const CREATE_CHILDREN_MUTATION = gql`
  mutation CreateChildren($childrenList: [ChildrenCreateInput]!) {
    createChildren(childrenList: $childrenList) {
      child {
        id
        name
        first_name
        birth_date
        tutor_id
      }
      token {
        token
        userId
        userRole
      }
    }
  }
`;

export const GET_OPTIONS = gql`
  query GetOptions {
    options {
      price {
        price
        id
      }
      name
      id
    }
  }
`;

export const GET_COURSES = gql`
  query Get_Courses {
    courses {
      id
      places
      day_of_week
    }
  }
`;

export const GET_DATA = gql`
  query GetData {
    courses {
      id
      day_of_week
      start_time
      end_time
      occupation
      places
    }
    options {
      price {
        price
        id
      }
      name
      id
    }
  }
`;

export const SING_IN_MUTATION = gql`
  mutation Sign_In_Mutation($input: loginInput) {
    login(loginInput: $input) {
      token
      userId
      userRole
      userFirstName
    }
  }
`;
