import { gql } from '@apollo/client';

export const GET_OPTION_LAST_PRICE = gql`
  query GetOptionLastPrice {
    options {
      id
      price {
        id
        price
      }
      name
    }
  }
`;
