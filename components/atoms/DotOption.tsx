import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  CreateCancellation,
  CreateCancellationVariables,
} from 'operations/__generated__/CreateCancellation';

import NavLink from './Link';
import dayjs from 'config/dayjs';
import { DotOptions } from 'alltypes';
import { GET_COURSES } from 'operations/queries/courses';
import useClickOutsideHook from 'hooks/useClickOutsideHook';
import ModalContainer from 'components/components/DropDownMenu';
import { CREATE_CANCELLATION } from 'operations/mutations/cancellations';
import {
  DELETE_COURSE,
  UPDATE_COURSE_MUTATION,
} from 'operations/mutations/courses';
import {
  UpdateCourse,
  UpdateCourseVariables,
} from 'operations/__generated__/UpdateCourse';
import {
  DeleteCourse,
  DeleteCourseVariables,
} from 'operations/__generated__/DeleteCourse';

const DotOption = ({
  content,
  courseId,
  isCalendar,
  coursePlaces,
  date,
  timeRange,
}: DotOptions) => {
  const [isShownDropDown, setIsShownDropDown] = useState<boolean>(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);
  const [isShowUpdatePlaceNumber, setIsShowUpdatePlaceNumber] =
    useState<boolean>(false);
  const [isShowCancelCourse, setIsShowCancelCourse] = useState<boolean>(false);
  const [places, setPlaces] = useState(coursePlaces || 0);

  const [createCancellation] = useMutation<
    CreateCancellation,
    CreateCancellationVariables
  >(CREATE_CANCELLATION, {
    refetchQueries: [GET_COURSES],
    variables: {
      data: {
        course: { connect: { id: courseId } },
        date: dayjs(date).add(1, 'day'),
      },
    },
    optimisticResponse: {
      createOneCancellations: {
        __typename: 'Cancellation',
        id: courseId,
        date: dayjs(date).add(1, 'day'),
      },
    },
  });

  useEffect(() => {
    console.log(places);
  }, [places]);

  const [UpdatePlaces] = useMutation<UpdateCourse, UpdateCourseVariables>(
    UPDATE_COURSE_MUTATION,
    {
      variables: {
        where: { id: courseId },
        data: { places: { set: places } },
      },
    },
  );

  const [
    deleteCourse,
    //{ data: deletedData, loading: deletedLoading, error: deletedError },
  ] = useMutation<DeleteCourse, DeleteCourseVariables>(DELETE_COURSE, {
    variables: {
      courseId: { id: courseId },
    },
    refetchQueries: 'active',
  });

  const dropRef = useRef<HTMLButtonElement>(null);
  const modalContainer = useRef<HTMLDivElement>(null);

  function handleClick() {
    setIsShownDropDown(prevState => !prevState);
  }

  function cancelCourse() {
    setIsShowCancelCourse(true);
  }

  useClickOutsideHook({
    ref: dropRef,
    callback: () => {
      setIsShownDropDown(false);
    },
  });

  useClickOutsideHook({
    ref: modalContainer,
    callback: () => {
      setIsShowDeleteModal(false);
      setIsShowUpdatePlaceNumber(false);
      setIsShowCancelCourse(false);
    },
  });

  return (
    <div className="course__options__container">
      <button
        ref={dropRef}
        className="course__options"
        onClick={() => {
          handleClick();
        }}>
        <span className="sro">{content}</span>
        <span className="course__options__dot1"></span>
        <span className="course__options__dot2"></span>
        <span className="course__options__dot3"></span>
      </button>
      {isShownDropDown && (
        <ModalContainer
          className="course__options__drop"
          isVisible={isShownDropDown}>
          {isShowDeleteModal ? (
            <section className="course__delete__form" ref={modalContainer}>
              <h4 className="course__delete__form__title">
                Supprimer le cours{' '}
                <span className="sro">{`du ${content}`}</span>
              </h4>
              <p className="field__info">
                Tous les adhérents seront notifié de ce la suppression de ce
                cours si elle survient avant la fin du moins de juin de l’année
                académique en cours.
              </p>
              <form action="">
                <fieldset className="form__button__wrapper form__button__wrapper--small">
                  <legend className="sro">Supprimer le cours {content}</legend>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setIsShowDeleteModal(false);
                    }}
                    type="button"
                    className="form__button form__button--main form__button--half form__button--small">
                    <span className="input__value">Annuler</span>
                  </button>
                  <button
                    onClick={e => {
                      deleteCourse();
                      e.preventDefault();
                      setIsShownDropDown(false);
                      setIsShowDeleteModal(false);
                    }}
                    type="button"
                    className="form__button form__button--secondary form__button--half form__button--small">
                    <span className="input__value">Supprimer</span>
                  </button>
                </fieldset>
              </form>
            </section>
          ) : isShowUpdatePlaceNumber ? (
            <section className="course__delete__form" ref={modalContainer}>
              <h4 className="course__delete__form__title">
                Modifier le nombre maximum de participants{' '}
                <span className="sro">{`du ${content}`}</span>
              </h4>
              <form action="" onClick={e => e.stopPropagation()}>
                <div className={`form__field`}>
                  <label htmlFor="places" className="field__label">
                    Nombre de places
                    <span className="sro">{`du ${content}`}</span>
                     :*
                  </label>

                  <input
                    value={places}
                    id="places"
                    type="number"
                    className="field__input"
                    onChange={(e: { target: HTMLInputElement }) => {
                      setPlaces(parseInt(e.target.value));
                    }}
                  />
                </div>
                <p className="form__mandatory">*Champs obligatoires</p>
                <div className="form__button__wrapper form__button__wrapper--small">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setIsShowUpdatePlaceNumber(false);
                    }}
                    type="button"
                    className="form__button form__button--main form__button--half form__button--small">
                    <span className="input__value">Annuler</span>
                  </button>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      UpdatePlaces();
                      setIsShowUpdatePlaceNumber(false);
                    }}
                    type="button"
                    className="form__button form__button--secondary form__button--half form__button--small">
                    <span className="input__value">Modifier</span>
                  </button>
                </div>
              </form>
            </section>
          ) : isShowCancelCourse ? (
            <section className="course__delete__form" ref={modalContainer}>
              <h4 className="course__delete__form__title">
                Annuler ce cours ?{' '}
                <span className="sro">
                  (
                  {`du ${dayjs(date).format('dddd')} ${dayjs(date).format(
                    'D/M',
                  )} de ${timeRange}`}
                  )
                </span>
              </h4>
              <p className="field__info">
                Vous allez annuler uniquement le cours à cettte heure et date
                précise.
              </p>
              <form action="">
                <fieldset className="form__button__wrapper form__button__wrapper--small">
                  <legend className="sro">
                    Annuler ce cours{' '}
                    <span className="sro">{`du ${content}`}</span>
                  </legend>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setIsShowCancelCourse(false);
                    }}
                    type="button"
                    className="form__button form__button--secondary form__button--half form__button--small">
                    <span className="input__value">Annuler</span>
                  </button>
                  <button
                    onClick={() => {
                      createCancellation();
                    }}
                    type="button"
                    className="form__button form__button--main form__button--half form__button--small">
                    <span className="input__value">Confirmer</span>
                  </button>
                </fieldset>
              </form>
            </section>
          ) : (
            <>
              <NavLink
                name="Voir les adhérents"
                to={`/management/users?course=${courseId}`}
                className="drop__link"
              />
              {!isCalendar && (
                <button
                  className="drop__btn"
                  onClick={e => {
                    e.stopPropagation();
                    setIsShowUpdatePlaceNumber(true);
                  }}>
                  Modifier le nombre de places
                </button>
              )}
              {!isCalendar ? (
                <button
                  className="drop__btn"
                  onClick={e => {
                    //prevent window from disappearing with the event bubbling back to window element and triggers clickoutside
                    e.stopPropagation();
                    setIsShowDeleteModal(true);
                  }}>
                  Supprimer le cours{' '}
                  <span className="sro">{`du ${content}`}</span> <br></br>(pour
                  l'anné entière)
                </button>
              ) : (
                <button
                  className="drop__btn"
                  onClick={e => {
                    //prevent window from disappearing with the event bubbling back to window element and triggers clickoutside
                    e.stopPropagation();
                    cancelCourse();
                  }}>
                  Annuler ce cours
                </button>
              )}
            </>
          )}
        </ModalContainer>
      )}
    </div>
  );
};

export default DotOption;
