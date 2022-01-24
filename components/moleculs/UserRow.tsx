import React from 'react';

import Link from 'components/atoms/Link';
import DisplayPaymentStatus from './DisplayPaymentStatus';
import { Get_Children_From_Course_Query_children } from 'operations/__generated__/Get_Children_From_Course_Query';
import { NameEnum, StatusEnum } from 'operations/__generated__/globalTypes';

const UserRow = (props: {
  content: Get_Children_From_Course_Query_children[];
}) => {
  return (
    //   Loop on users to contruct the rows
    <>
      {props.content.map((child, i) => {
        return (
          <tr className="table__row" key={i}>
            <th className="table__row__th">
              <Link
                className="table__data__link"
                name={`${child.name} ${child.first_name}`}
                to={`/management/users/${encodeURIComponent(child.id)}`}></Link>
            </th>
            <td className="table__data">{child.tutor.phone_number}</td>
            <td className="table__data">
              <DisplayPaymentStatus
                value={
                  child.order?.sport_voucher ? child.order.sport_voucher : false
                }></DisplayPaymentStatus>
            </td>
            {child.order?.option_set ? (
              child.order.option_set.map(elmt => {
                if (elmt.options?.name != undefined) {
                  switch (elmt.options.name) {
                    case NameEnum.INSSURANCE:
                      return (
                        <td className="table__data">
                          <DisplayPaymentStatus
                            value={elmt.status || false}></DisplayPaymentStatus>
                        </td>
                      );
                      break;
                    case NameEnum.MEMBERSH1PFEE1:
                      return (
                        <td className="table__data">
                          <DisplayPaymentStatus
                            value={elmt.status || false}></DisplayPaymentStatus>
                        </td>
                      );
                      break;
                    case NameEnum.MEMBERSHIPFEE2:
                      return (
                        <td className="table__data">
                          <DisplayPaymentStatus
                            value={elmt.status || false}></DisplayPaymentStatus>
                        </td>
                      );
                      break;
                    default:
                      return (
                        <td className="table__data">
                          <DisplayPaymentStatus
                            value={
                              StatusEnum.NOTAPPLICABLE || false
                            }></DisplayPaymentStatus>
                        </td>
                      );
                      break;
                  }
                }
              })
            ) : (
              <>
                <td className="table__data">
                  <DisplayPaymentStatus
                    value={
                      StatusEnum.NOTAPPLICABLE || false
                    }></DisplayPaymentStatus>
                </td>
                <td className="table__data">
                  <DisplayPaymentStatus
                    value={
                      StatusEnum.NOTAPPLICABLE || false
                    }></DisplayPaymentStatus>
                </td>
                <td className="table__data">
                  <DisplayPaymentStatus
                    value={
                      StatusEnum.NOTAPPLICABLE || false
                    }></DisplayPaymentStatus>
                </td>
              </>
            )}
          </tr>
        );
      })}
    </>
  );
};

export default UserRow;
