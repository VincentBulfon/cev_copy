import { gql } from '@apollo/client';

export const UPDATE_USER_DATA_MUTATION = gql`
  mutation Update_User_Data_Mutation($updateUserData: updateUserInput!) {
    updateUserData(updateUserData: $updateUserData) {
      name
      first_name
      phone_number
      email
      secondary_email
    }
  }
`;


