import { gql } from '@apollo/client';

export const CHECK_IF_EMAIL_ALREADY_IN_USE = gql`
  query CheckIfEmailIsAlreadyInUse($passedEmail: UserExistsInput!) {
    UserExists(passedEmail: $passedEmail) {
      exists
    }
  }
`;
