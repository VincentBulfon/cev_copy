import React, { useState } from 'react';

import Title from 'components/atoms/Title';
import { BtnMain } from 'components/moleculs/Btn';
import FormField from 'components/components/FormField';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import ContentWrapper, {
  ContentWrapperDiv,
} from 'components/components/ContentWrapper';
import { useIsAdmin } from 'hooks/useIsAdminHook';
import { formCreateCourseErrors, handleChangeType } from 'alltypes';
import Head from 'next/head';

const addCourse = () => {
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  const [formState, setFormState] = useState({
    start: '',
    end: '',
    day: 'no_day',
    places: '',
  });

  const [formErrors, setFormErrors] = useState<formCreateCourseErrors>({
    start: null,
    end: null,
    day: null,
    places: null,
  });

  const rules = {
    time: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/,
    places: /^(2[0-5]|1[0-9]|[1-9])$/,
  };

  //could extracted later to be put into helper module
  const validateNewCourse = () => {
    let property: keyof typeof formState;
    let containsErrors = false;
    let errors: formCreateCourseErrors = {
      start: null,
      end: null,
      day: null,
      places: null,
    };
    for (property in formState) {
      if (property == 'start' || property == 'end') {
        if (formState[property].match(rules.time)) {
          console.log(formState[property].match(rules.time));
          if (property == 'start') {
            errors = { ...errors, start: null };
          } else {
            errors = { ...errors, end: null };
          }
        } else {
          if (property == 'start') {
            errors = {
              ...errors,
              start: 'Le champ doit avoir le format suivant : "hh:mm".',
            };
          } else {
            errors = {
              ...errors,
              end: 'Le champ doit avoir le format suivant : "hh:mm".',
            };
          }
        }
      }
      if (property == 'day') {
        if (formState[property] == 'no_day') {
          errors = {
            ...errors,
            day: 'Veuillez séclectionner un jour de la semaine.',
          };
        } else {
          errors = {
            ...errors,
            day: null,
          };
        }
      }
      if (property == 'places') {
        if (
          formState[property].length == 0 ||
          !formState[property].match(rules.places)
        ) {
          errors = {
            ...errors,
            places: 'Veuillez entrer un nombre entre 1 et 25.',
          };
        } else {
          errors = {
            ...errors,
            places: null,
          };
        }
      }
    }

    let errorKey: keyof typeof errors;
    const check = function () {
      for (errorKey in errors) {
        if (errorKey != null) {
          containsErrors = true;
          return;
        }
        containsErrors = false;
        return;
      }
    };
    check();

    setFormErrors(errors);
    setHasErrors(containsErrors);
  };

  return (
    //Display the name of the title inside the page header.
    useIsAdmin() && (
      <>
        <Head>
          <title>CEV - créer un cours</title>
        </Head>
        <HeroWithoutImg title="Gestion">
          <ContentWrapper className="content__wrapper--nt">
            <Title content="Ajouter un cours">
              <svg
                className="title__svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 31 32">
                <path
                  stroke="null"
                  d="M15.5 0C7 0 0 7.3 0 16s7 16 15.5 16S31 24.7 31 16 24 0 15.5 0zm0 2.5c7.2 0 13.1 6 13.1 13.5s-5.9 13.5-13.1 13.5c-7.2 0-13.1-6-13.1-13.5S8.3 2.5 15.5 2.5zM14.3 10v4.9H9.5v2.4h4.8v5h2.4v-5h4.8v-2.4h-4.8v-5h-2.4z"
                />
              </svg>
            </Title>
            <ContentWrapperDiv className="content__wrapper--fw  content__wrapper--nt">
              <form
                method=""
                onSubmit={e => {
                  e.preventDefault();
                  validateNewCourse();
                }}>
                {/* TODO: Add regex verification on hour format */}
                <FormField
                  type="text"
                  onChange={(e: handleChangeType) => {
                    setFormState({ ...formState, start: e.evt.target.value });
                  }}
                  value={formState.start}
                  uniqueKey={'courseHours'}
                  name="Heure de début"
                  id="start__hour"
                  content="Heur de début : (ex : 18:00)"
                  error={formErrors.start}>
                  <svg
                    className="field__svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32">
                    <path
                      stroke="null"
                      d="M16 0a16 16 0 100 32 16 16 0 000-32zm0 2.7a13.3 13.3 0 11-8 2.7L9 6l7 5V2.6zM7.4 8.2L6 10.4l9.2 6.5.5.4.7-.2 6.8-2.5-1-2.5-6.1 2.2-8.6-6zm0 0"
                    />
                  </svg>
                </FormField>
                <FormField
                  type="text"
                  onChange={(e: handleChangeType) => {
                    setFormState({ ...formState, end: e.evt.target.value });
                  }}
                  value={formState.end}
                  uniqueKey={'courseHours'}
                  name="Heure de de fin"
                  id="end__hour"
                  content="Heure de fin : (ex : 19h00)"
                  error={formErrors.end}>
                  <svg
                    className="field__svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32">
                    <path
                      stroke="null"
                      d="M16 0a16 16 0 100 32 16 16 0 000-32zm0 2.7a13.3 13.3 0 11-8 2.7L9 6l7 5V2.6zM7.4 8.2L6 10.4l9.2 6.5.5.4.7-.2 6.8-2.5-1-2.5-6.1 2.2-8.6-6zm0 0"
                    />
                  </svg>
                </FormField>
                <div className="form__field">
                  <label htmlFor="day" className="field__label">
                    <svg
                      className="field__svg"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#004546"
                      viewBox="0 0 30.5 32">
                      <path
                        stroke="null"
                        d="M5.6 0v1.4H0v30.5h30.6V1.4H25V0h-2.8v1.4H8.3V0H5.6zM2.8 4.2h2.8v1.4h2.7V4.2h14v1.4H25V4.2h2.8v2.7h-25V4.2zm0 5.5h25v19.5h-25V9.7zm8.3 2.8v2.8H14v-2.8H11zm7 0L16.7 14l2.7 2.7-2.7 2.7 1.4 1.4 2.7-2.7 2.7 2.7 1.5-1.4-2.7-2.7L25 14l-1.5-1.5-2.7 2.7-2.7-2.7zM5.6 18.1v2.7h2.7v-2.7H5.6zm5.5 0v2.7H14v-2.7H11zm-5.5 5.5v2.8h2.7v-2.8H5.6zm5.5 0v2.8H14v-2.8H11zm5.6 0v2.8h2.7v-2.8h-2.7z"
                      />
                    </svg>{' '}
                    Jour :
                  </label>
                  <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setFormState({ ...formState, day: e.target.value });
                    }}
                    className={`field__input select ${
                      formErrors.day && 'field__input--red'
                    }`}
                    id="day"
                    value={formState.day}>
                    <option value="no_day" disabled>
                      Sélectionnez un jour de la semaine
                    </option>
                    <option value="1">Lundi</option>
                    <option value="2">Mardi</option>
                    <option value="3">Mercredi</option>
                    <option value="4">Jeudi</option>
                    <option value="5">Vendredi</option>
                    <option value="6">Samedi</option>
                  </select>
                  {formErrors.day && (
                    <p className="input__error">{formErrors.day}</p>
                  )}
                </div>
                <FormField
                  type="number"
                  onChange={(e: handleChangeType) => {
                    setFormState({ ...formState, places: e.evt.target.value });
                  }}
                  value={formState.places}
                  uniqueKey={'coursePlaces'}
                  name="Nombre de places"
                  id="places"
                  placeholder="16"
                  content="Nombre de places :"
                  error={formErrors.places}>
                  <svg
                    fill="#004546"
                    className="field__svg"
                    viewBox="0 0 32 16"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke="null"
                      d="M16 0c-3 0-5.4 2.4-5.4 5.4 0 1.6.8 3 2 4A7.7 7.7 0 009.6 12c-.4-.6-.9-1.1-1.4-1.5a4.2 4.2 0 00-3-7.3c-2.3 0-4.2 2-4.2 4.3 0 1.2.5 2.3 1.3 3A5.4 5.4 0 000 15h2.1a3.2 3.2 0 016.4 0v1h2.1a5.3 5.3 0 0110.7 0h2.1v-1a3.2 3.2 0 016.4 0H32c0-1.9-.9-3.5-2.3-4.5a4.2 4.2 0 00-3-7.3c-2.3 0-4.2 2-4.2 4.3 0 1.2.5 2.3 1.3 3-.6.4-1 1-1.5 1.5-.7-1.1-1.7-2-2.8-2.6A5.3 5.3 0 0016 0zm0 2.2c1.7 0 3.2 1.4 3.2 3.2 0 1.7-1.5 3.2-3.2 3.2a3.2 3.2 0 01-3.2-3.2c0-1.8 1.4-3.2 3.2-3.2zM5.3 5.4c1.2 0 2.2 1 2.2 2.1 0 1.2-1 2.1-2.2 2.1a2.1 2.1 0 110-4.3zm21.3 0a2.1 2.1 0 110 4.3c-1.2 0-2.1-1-2.1-2.2 0-1.2 1-2.1 2.1-2.1z"
                    />
                  </svg>
                </FormField>
                {hasErrors && (
                  <p className="error">
                    Il y a une/plusieurs erreur(s) au sein du fomulaire
                  </p>
                )}
                <BtnMain
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    validateNewCourse();
                  }}>
                  <svg
                    className="svg svg--left"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 26 26">
                    <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z" />
                  </svg>
                  Créer le cours
                </BtnMain>
              </form>
            </ContentWrapperDiv>
          </ContentWrapper>
        </HeroWithoutImg>
      </>
    )
  );
};

export default addCourse;
