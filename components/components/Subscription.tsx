import React, { ChangeEvent } from 'react';

import { BtnMain, BtnSecondaryWarning } from 'components/moleculs/Btn';
import { ColorsEnum, SubType } from 'alltypes';

import {
  GetChildAndCourse_children_order_option_set,
  GetChildAndCourse_courses,
} from 'operations/__generated__/GetChildAndCourse';
import { getCourseString } from 'helpers/strings';
import { NameEnum, StatusEnum } from 'operations/__generated__/globalTypes';
import { useUserInput } from 'hooks/useUserInput';
import dayjs from 'config/dayjs';
import { useMutation } from '@apollo/client';
import { UPDATE_OPTION_SET } from 'operations/mutations/UpdateOptionSet';
import {
  UpdateOptionSet,
  UpdateOptionSetVariables,
} from 'operations/__generated__/UpdateOptionSet';
import { useRouter } from 'next/dist/client/router';
import Spinner from './Spinner';

const SubscriptionElement = ({ order, courses, currentCourse }: SubType) => {
  const router = useRouter();
  const query = router.query;

  //NOTE: if 2 is returned disable input
  //Always one option is returned
  const filterOptions = (string: NameEnum) => {
    let status: 0 | 1 | 2 = 0;
    const option: GetChildAndCourse_children_order_option_set[] | undefined =
      order.option_set?.filter(option => {
        if (option.options.name === string) {
          return option;
        }
      });

    if (option?.length) {
      switch (option[0].status) {
        case StatusEnum.UNPAID:
          status = 0;
          break;

        case StatusEnum.PAID:
          status = 1;
          break;
        default:
          status = 2;
          break;
      }
    }

    return status;
  };

  const filterOptionsId = (string: NameEnum) => {
    const option: GetChildAndCourse_children_order_option_set[] | undefined =
      order.option_set?.filter(option => {
        if (option.options.name === string) {
          return option;
        }
      });

    return option || null;
  };

  const inssurance = useUserInput(filterOptions(NameEnum.INSSURANCE));
  const cot1 = useUserInput(filterOptions(NameEnum.MEMBERSH1PFEE1));
  const cot2 = useUserInput(filterOptions(NameEnum.MEMBERSHIPFEE2));
  const courseId = useUserInput(currentCourse);

  const handleChange = (
    evt: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
    callBack: CallableFunction,
  ) => {
    callBack(evt);
  };

  const inssuranceId = filterOptionsId(NameEnum.INSSURANCE);
  const coti1Id = filterOptionsId(NameEnum.MEMBERSH1PFEE1);
  const coti2Id = filterOptionsId(NameEnum.MEMBERSHIPFEE2);

  const [updateOptionSet, { loading }] = useMutation<
    UpdateOptionSet,
    UpdateOptionSetVariables
  >(UPDATE_OPTION_SET, {
    variables: {
      updateOptionSet: [
        {
          option_set_id: inssuranceId?.length ? inssuranceId[0].id : 0,
          option_set_status: inssurance.value
            ? StatusEnum.PAID
            : StatusEnum.UNPAID,
          childId: parseInt(query.id as string),
        },
        {
          option_set_id: coti1Id?.length ? coti1Id[0].id : 0,
          option_set_status: cot1.value ? StatusEnum.PAID : StatusEnum.UNPAID,
          childId: parseInt(query.id as string),
        },
        {
          option_set_id: coti2Id?.length ? coti2Id[0].id : 0,
          option_set_status: cot2.value ? StatusEnum.PAID : StatusEnum.UNPAID,
          childId: parseInt(query.id as string),
        },
      ],
      data: {
        course: {
          connect: {
            id: parseInt(courseId.value as string),
          },
        },
      },
      where: {
        courseId_childrenId: {
          courseId: parseInt(`${currentCourse ? currentCourse : 0}`),
          childrenId: parseInt(query.id as string),
        },
      },
    },
  });

  return (
    <>
      <div className="course__wrapper">
        <div className="form__field">
          <label htmlFor="course" className="field__label">
            Cours actuel :
          </label>
          {courses ? (
            <select
              defaultValue={courseId.value || 'none'}
              className="courses field__input"
              id="course"
              onChange={(evt: ChangeEvent<HTMLSelectElement>) => {
                handleChange(evt, courseId.handleChange);
              }}
              name="course_id">
              <option value="none" disabled>
                Ce enfant n'est inscrit à aucun cours.
              </option>
              {courses.map(
                (course: GetChildAndCourse_courses, index: number) => {
                  return (
                    <option key={index} value={course.id}>
                      {getCourseString(course)}
                    </option>
                  );
                },
              )}
            </select>
          ) : (
            <p>
              Aucun cours disponnible acutellement (cela peut être dû à une
              erreur).
            </p>
          )}
        </div>
        {currentCourse && (
          <form action="">
            <label
              htmlFor="ass"
              className="field__label field__label--fw field__label--mb">
              Assurance :
              <input
                defaultChecked={inssurance.value}
                className="field__input sro"
                type="checkbox"
                name="ass"
                id="ass"
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  handleChange(evt, inssurance.handleChange);
                }}
              />
              <span className="checkboxmark"></span>
            </label>
            <label
              htmlFor="coti1"
              className={`field__label field__label--fw field__label--mb ${
                cot1.value === 2 ? 'field__label--disabled' : null
              }`}>
              Cotisation 1 :
              <input
                defaultChecked={cot1.value == 1 ? true : false}
                disabled={cot1.value === 2}
                className={`field__input sro ${
                  cot1.value === 2 ? 'field__input--disabled' : null
                }`}
                type="checkbox"
                name="coti1"
                id="coti1"
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  handleChange(evt, cot1.handleChange);
                }}
              />
              <span className="checkboxmark"></span>
            </label>
            {false && (
              <p className="content__wrapper__text--small field__label--mb">
                Inscription effectuée après le premier semestre.
              </p>
            )}
            <label
              htmlFor="coti2"
              className={`field__label field__label--fw field__label--mb ${
                cot2.value === 2 ? 'field__label--disabled' : null
              }`}>
              Cotisation 2 :
              <input
                defaultChecked={cot2.value == 1 ? true : false}
                className={`field__input sro ${
                  cot2.value === 2 ? 'field__input--disabled' : null
                }`}
                type="checkbox"
                name="coti2"
                id="coti2"
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  handleChange(evt, cot2.handleChange);
                }}
              />
              <span className="checkboxmark"></span>
            </label>
            <p className="field__label field__label--fw field__label--mb">
              Inscrit le : {dayjs(order.created_at).format('DD/MM/YYYY')}
            </p>
            {/* TODO conditional rendering with user role */}
            {false && (
              <p className="content__wrapper__text content__wrapper__text--small">
                Seul un admin peut supprimer cette personne d'un cours ou la
                déplacer à un autre cours.
              </p>
            )}
            {/* if user is admin can delete sub if not he can't delete sub */}
            <BtnSecondaryWarning
              onClick={() => {
                /**TODO: add function*/
              }}>
              <svg
                className="svg svg--left svg--danger"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 26 26">
                <path
                  stroke="null"
                  d="M13 0a13 13 0 100 26 13 13 0 000-26zm0 2a11 11 0 110 22 11 11 0 010-22zM9.2 7.9L7.8 9.2l3.8 3.8-3.8 3.8 1.4 1.4 3.8-3.8 3.8 3.8 1.4-1.4-3.8-3.8 3.8-3.8-1.4-1.4-3.8 3.8-3.8-3.8z"
                />
              </svg>{' '}
              Supprimer l'inscription
            </BtnSecondaryWarning>
            <BtnMain
              onClick={() => {
                updateOptionSet();
              }}>
              {loading ? (
                Spinner(ColorsEnum.White)
              ) : (
                <>
                  <svg
                    className="svg svg--left"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 26 26">
                    <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z"></path>
                  </svg>
                  <span className="input__value">Sauver</span>
                </>
              )}
            </BtnMain>
          </form>
        )}
      </div>
    </>
  );
};

export default SubscriptionElement;
