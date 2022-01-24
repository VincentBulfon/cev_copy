import { gql } from '@apollo/client';

export const FORGOT_USER_PASSWORD = gql`
  mutation ForgotUserPassword($email: String!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;

export const RESET_USER_PASSWORD = gql`
  mutation ResetUserPassword($resetPasswordInput: resetPasswordInput!) {
    resetPassword(resetPasswordInput: $resetPasswordInput) {
      message
    }
  }
`;
