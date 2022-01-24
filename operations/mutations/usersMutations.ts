import { gql } from '@apollo/client';

export const SUB_CONNECTED = gql`
  mutation add_children_mutation($childrenList: [ChildrenCreateInput]!) {
    createChildren(childrenList: $childrenList) {
      child {
        name
        id
        first_name
        courses {
          day_of_week
          start_time
          end_time
          places
        }
        birth_date
        tutor {
          id
          name
          first_name
        }
        orders {
          id
          sport_voucher
          option_set {
            id
            status
            options {
              name
              id
            }
            price {
              id
              price
            }
          }
        }
      }
    }
  }
`;
