import { gql } from '@apollo/client';

export const CHECK_TOKEN = gql`
  query CheckToken($token: String) {
    checkToken(token: $token)
  }
`;
