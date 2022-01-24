import { gql } from '@apollo/client';

export const UPDATE_OPTION_SET = gql`
  mutation UpdateOptionSet(
    $updateOptionSet: [UpdateOptionSetInput]!
    $data: ChildrenOnCourseUpdateInput!
    $where: ChildrenOnCourseWhereUniqueInput!
  ) {
    updateOptionSet(UpdateOptionSet: $updateOptionSet) {
      id
      status
    }
    updateOneChildrenOnCourse(data: $data, where: $where) {
      inscriptionDate
    }
  }
`;
