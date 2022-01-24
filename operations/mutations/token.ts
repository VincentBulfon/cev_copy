import { gql } from '@apollo/client';

export const VERIFY_TOKEN = gql`
  mutation verifyToken($token: verifyTokenInput!) {
    verifyToken(token: $token) {
      response
      userId
      userRole
      userFirstName
    }
  }
`;
