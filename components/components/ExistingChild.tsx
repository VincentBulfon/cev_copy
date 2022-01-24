import { getCourseStringWithoutOccupation } from 'helpers/strings';

import React, { useEffect, useState } from 'react';

import {
  childErrors,
  childrenPartialContentType,
  UniqueUpdate,
} from 'alltypes';
import FormField from './FormField';
import ConfirmButton from 'components/moleculs/ConfirmButton';
import { Get_User_And_Children_With_Courses_users_children_courses } from 'operations/__generated__/Get_User_And_Children_With_Courses';
import dayjs from 'config/dayjs';
import { checkChildValidity } from 'helpers/validation';
import { useMutation } from '@apollo/client';
import {
  Update_One_Child_Mutation,
  Update_One_Child_MutationVariables,
} from 'operations/__generated__/Update_One_Child_Mutation';
import { UPDATE_ONE_CHILD_MUTATION } from 'operations/mutations/updateOneChild';

const ExistingChild = ({
  uniqueKey,
  onChange,
  valueElmt,
  courses,
  cancelAction,
}: UniqueUpdate) => {
  //Children error
  const [childrenErrors, setChildrenErrors] = useState<childErrors>({
    hasError: false,
    errors: { name: null, first_name: null, birth_date: null },
  });
  //Check validity of update
  const checkValidity = (child: childrenPartialContentType) => {
    const errors = checkChildValidity(child);

    let key: keyof typeof errors.errors;
    for (key in errors.errors) {
      if (errors.errors[key] != null) {
        setChildrenErrors({
          hasError: true,
          errors: { ...errors.errors },
        });
        return;
      }
    }

    if (!errors.hasError) {
      setChildrenErrors({
        hasError: false,
        errors: {
          name: null,
          first_name: null,
          birth_date: null,
        },
      });

      updateChild();
    }
  };

  const [updateChild, { data: updateData, loading, error }] = useMutation<
    Update_One_Child_Mutation,
    Update_One_Child_MutationVariables
  >(UPDATE_ONE_CHILD_MUTATION, {
    variables: {
      where: { id: valueElmt.id },
      data: {
        name: { set: valueElmt.name },
        first_name: { set: valueElmt.first_name },
        birth_date: { set: new Date(valueElmt.birth_date) },
      },
    },
  });

  useEffect(() => {
    console.log(updateData);
  }, [updateData, loading, error]);

  const validateAction = () => {
    checkValidity(valueElmt);
  };

  return (
    <div className="form__child">
      <FormField
        value={valueElmt.first_name || ''}
        onChange={onChange}
        uniqueKey={uniqueKey}
        name="first_name"
        id={`child__firstname__${uniqueKey}`}
        content="Prénom : *"
        error={childrenErrors.errors.first_name}>
        <svg
          className="field__svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 29 31">
          <path
            stroke="null"
            d="M14.47 0a10.15 10.15 0 00-5.65 18.54A14.51 14.51 0 000 31.84h2.9c0-3.67 1.69-6.93 4.33-9.05l6.25 5.74.99.95 1-.95 6.23-5.74a11.56 11.56 0 014.35 9.04h2.89c0-5.95-3.66-11.07-8.82-13.3A10.15 10.15 0 0014.47 0zm0 2.9a7.21 7.21 0 017.23 7.23 7.21 7.21 0 01-7.23 7.23 7.21 7.21 0 01-7.24-7.23 7.21 7.21 0 017.24-7.24zm0 17.36c1.66 0 3.24.33 4.66.95l-4.66 4.34-4.66-4.34c1.42-.62 3-.95 4.66-.95z"
          />
        </svg>
      </FormField>
      <FormField
        value={valueElmt.name || ''}
        onChange={onChange}
        uniqueKey={uniqueKey}
        name="name"
        id={`child__lastname__${uniqueKey}`}
        content="Nom : *"
        error={childrenErrors.errors.name}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 29 31"
          className="field__svg">
          <path
            stroke="null"
            d="M14.47 0a10.15 10.15 0 00-5.65 18.54A14.51 14.51 0 000 31.84h2.9c0-3.67 1.69-6.93 4.33-9.05l6.25 5.74.99.95 1-.95 6.23-5.74a11.56 11.56 0 014.35 9.04h2.89c0-5.95-3.66-11.07-8.82-13.3A10.15 10.15 0 0014.47 0zm0 2.9a7.21 7.21 0 017.23 7.23 7.21 7.21 0 01-7.23 7.23 7.21 7.21 0 01-7.24-7.23 7.21 7.21 0 017.24-7.24zm0 17.36c1.66 0 3.24.33 4.66.95l-4.66 4.34-4.66-4.34c1.42-.62 3-.95 4.66-.95z"
          />
        </svg>
      </FormField>
      <FormField
        value={dayjs(valueElmt.birth_date).format('YYYY-MM-DD')}
        onChange={onChange}
        uniqueKey={uniqueKey}
        name="birth_date"
        id={`child__birthdate__${uniqueKey}`}
        content="Date de naissance : *"
        error={childrenErrors.errors.birth_date}
        type="date">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 27 28"
          className="field__svg">
          <path d="M4 0v1H0v22h10v-2H2V7h18v2.2l.38.35c.47.45 1.1 1.1 1.62 1.86V1h-4V0h-2v1H6V0H4zM2 3h2v1h2V3h10v1h2V3h2v2H2V3zm6 6v2h2V9H8zm4 0v2h2V9h-2zm7 2s-2 1.9-2 3c0 .74.4 1.38 1 1.72V17h-3c-1.65 0-3 1.35-3 2.99V26h-1v2h16v-2h-1v-6c0-1.64-1.36-3-3-3h-3v-1.28c.6-.34 1-.98 1-1.72 0-1.1-2-3-2-3zM4 13v2h2v-2H4zm4 0v2h2v-2H8zm4 0v2h2v-2h-2zm-8 4v2h2v-2H4zm4 0v2h2v-2H8zm7 2h8c.57 0 1 .43 1 1v1c0 .57-.43 1-1 1-.57 0-1-.43-1-1h-2c0 .57-.43 1-1 1-.57 0-1-.43-1-1h-2c0 .57-.43 1-1 1-.57 0-1-.43-1-1v-1c0-.56.43-1 1-1zm2 4.17c.54.49 1.22.83 2 .83s1.46-.34 2-.83c.54.49 1.22.83 2 .83.35 0 .69-.07 1-.19V26H14v-2.19c.31.12.65.19 1 .19.78 0 1.46-.34 2-.83z" />
        </svg>
      </FormField>
      <dl className="form__field form__field--nb">
        <dt className="field__label">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 24 24"
            className="field__svg">
            <path d="M12 0a12.01 12.01 0 1012 12c0-6.62-5.38-12-12-12zm0 2c5.54 0 10 4.46 10 10s-4.46 10-10 10S2 17.54 2 12 6.46 2 12 2zm-1 2v9h7v-2h-5V4z" />
          </svg>{' '}
          Est acutellement inscrit au cours suivant :
        </dt>
        {courses ? (
          <dd className="select field__input">
            {courses.map(
              (
                course: Get_User_And_Children_With_Courses_users_children_courses,
                index: number,
              ) => {
                return (
                  <span key={index}>
                    {getCourseStringWithoutOccupation(course)}
                  </span>
                );
              },
            )}
          </dd>
        ) : (
          <dd className="select field__input">
            N'est inscrit à aucun cours actuellement.
          </dd>
        )}
      </dl>
      <ConfirmButton
        validateAction={validateAction}
        cancelAction={cancelAction}
        validate="Modifier"
        cancel="Annuler"
      />
    </div>
  );
};

export default ExistingChild;
