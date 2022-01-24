import React, { useEffect, useState } from 'react';

import NewChild from 'components/components/NewChild';
import AddSomeone from 'components/moleculs/AddSomone';
import {
  childrenErrors,
  ChildrenStateType,
  handleChangeType,
  NormalStep,
} from 'alltypes';

import { checkChildrenValidity } from 'helpers/validation';
import FormCurrentChildren from './FormCurrentChildren';
import { useQuery } from '@apollo/client';
import { GET_USER_CHILDREN } from 'operations/queries/children';
import {
  Get_User_Children,
  Get_User_ChildrenVariables,
} from 'operations/__generated__/Get_User_Children';
import { isLoggedVar } from 'client/reactVars';
import { useScrollIntoView } from 'hooks/userScrollIntoViewHook';

const FormStepTwo = ({
  handleNext,
  handlePrevious,
  setContent,
  formContent,
  data,
  hasPrevious,
}: NormalStep) => {
  const MAX_CHILD_NUMBER = 5;
  const MIN_CHILD_NUMBER = 1;
  const [isActive, setIsActive] = useState<boolean>(false);

  const [childrenErrors, setChildrenErrors] = useState<childrenErrors>({
    hasError: false,
    errors: [],
  });

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleNewChild = () => {
    if (formContent.childrenContent.length <= MAX_CHILD_NUMBER) {
      setContent([
        ...formContent.childrenContent,
        {
          name: '',
          birth_date: Date.now().toString(),
          first_name: '',
          voucher: false,
          course_id: 9999999,
          tutor: '',
        },
      ]);
    }
  };

  const { data: returnedUser } = useQuery<
    Get_User_Children,
    Get_User_ChildrenVariables
  >(GET_USER_CHILDREN, {
    variables: { where: { id: { equals: isLoggedVar().isLogged } } },
  });

  const handleRemoveChild = ({ index }: { index: number }) => {
    const childList = [...formContent.childrenContent];
    childList.splice(index, 1);
    setContent([...childList]);
  };

  const handleChange = ({ evt, uniqueKey }: handleChangeType) => {
    const { name, value, checked } = evt.target;

    console.log(name, value);

    const childList = [...formContent.childrenContent];

    if (
      name === 'name' ||
      name === 'first_name' ||
      name === 'birth_date' ||
      name === 'tutor' ||
      name === 'course_id'
    ) {
      if (name === 'course_id') {
        childList[uniqueKey][name] = Number(value);
      } else {
        childList[uniqueKey][name] = value;
      }
    }
    if (name === 'voucher') {
      childList[uniqueKey][name] = checked;
    }
    setContent([...childList]);
  };

  const checkValidity = (children: ChildrenStateType[]) => {
    const errors = checkChildrenValidity(children);
    errors.errors.forEach(thisError => {
      let key: keyof typeof thisError;
      for (key in thisError) {
        if (thisError[key] != null) {
          setChildrenErrors({
            hasError: true,
            errors: [...childrenErrors.errors, ...errors.errors],
          });
          return;
        }
      }
    });

    if (!errors.hasError) {
      setChildrenErrors({
        hasError: false,
        errors: [
          {
            name: null,
            first_name: null,
            birth_date: null,
            course_id: null,
          },
        ],
      });
      useScrollIntoView('sub_title');
      handleNext();
    }
  };
  console.log(returnedUser, isLoggedVar().isLogged);

  return (
    <section
      className={
        isActive ? `form__step__two active` : `form__step__two inactive`
      }>
      <h3 className="form__subtitle">
        Information de la/les personne(s) inscrites :
      </h3>
      <p className="content__wrapper__text">
        Si{' '}
        <span className="content__wrapper__text--bold">
          vous résidez dans la commune de Visé{' '}
        </span>
        vous avez probablement reçu{' '}
        <span className="content__wrapper__text--bold">
          un chèque sport de (25€) à nous remettre en main propre{' '}
        </span>
        dès que vous êtes inscrit. Veuillez cocher la case si vous souhaitez{' '}
        <span className="content__wrapper__text--bold">
          rentrer chèque sport avec l'inscription pour chaque enfant.
        </span>
      </p>
      {returnedUser?.users && returnedUser.users.length > 0 ? (
        <FormCurrentChildren
          data={data}
          currentChildren={returnedUser.users[0]}
        />
      ) : null}
      {formContent.childrenContent.map((child, index) => {
        return (
          <NewChild
            courses={data.data.courses}
            valueElmt={child}
            key={index}
            uniqueKey={index}
            onRemove={handleRemoveChild}
            onChange={handleChange}
            showDelete={formContent.childrenContent.length > MIN_CHILD_NUMBER}
            errors={childrenErrors.errors[index]}
          />
        );
      })}
      <AddSomeone handleAdd={handleNewChild} />
      <p className="form__mandatory">*Champs obligatoires</p>
      {childrenErrors.hasError && (
        <p className="error">
          Il y a une/plusieurs erreur(s) au sein du fomulaire
        </p>
      )}
      {!hasPrevious ? (
        <div className="form__button__wrapper">
          <button
            onClick={() => {
              handlePrevious && handlePrevious();
            }}
            type="button"
            className="form__button form__button--secondary form__button--half">
            <svg
              className="svg svg--left svg--reverse"
              xmlns="http://www.w3.org/2000/svg"
              fill="#004546"
              viewBox="0 0 32 18">
              <path
                stroke="null"
                d="M22.97.04l-1.88 1.91 5.7 5.71H.07v2.67H26.8l-5.7 5.7 1.87 1.92 8.95-8.96L22.97.04z"
              />
            </svg>
            <span className="input__value">Précédent</span>
          </button>
          <button
            onClick={() => checkValidity(formContent.childrenContent)}
            type="button"
            className="form__button form__button--main form__button--half">
            <span className="input__value">Suivant</span>
            <svg
              className="svg svg--right"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              viewBox="0 0 32 18">
              <path
                stroke="null"
                d="M22.97.04l-1.88 1.91 5.7 5.71H.07v2.67H26.8l-5.7 5.7 1.87 1.92 8.95-8.96L22.97.04z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="form__button__wrapper">
          <button
            type="button"
            className="cta cta--main"
            onClick={() => {
              checkValidity(formContent.childrenContent);
              useScrollIntoView('sub_title');
            }}>
            <span className="input__value">Valider</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffff"
              viewBox="0 0 32 18"
              className="svg svg--right">
              <path
                stroke="null"
                d="M22.97.04l-1.88 1.91 5.7 5.71H.07v2.67H26.8l-5.7 5.7 1.87 1.92 8.95-8.96L22.97.04z"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default FormStepTwo;
