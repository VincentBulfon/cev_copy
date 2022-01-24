import { gql } from '@apollo/client';

export const CREATE_CANCELLATION = gql`
  mutation CreateCancellation($data: CancellationsCreateInput!) {
    createOneCancellations(data: $data) {
      id
      date
    }
  }
`;
