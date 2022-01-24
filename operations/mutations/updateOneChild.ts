import { gql } from '@apollo/client';

export const UPDATE_ONE_CHILD_MUTATION = gql`
  mutation Update_One_Child_Mutation(
    $data: ChildrenUpdateInput!
    $where: ChildrenWhereUniqueInput!
  ) {
    updateOneChildren(data: $data, where: $where) {
      id
      name
      first_name
    }
  }
`;
