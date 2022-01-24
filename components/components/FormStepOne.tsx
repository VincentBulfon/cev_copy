import React, { useEffect, useState } from 'react';

import { checkParentInfosValidity } from 'helpers/validation';

import {
  ColorsEnum,
  FormStepOneType,
  handleChangeType,
  parentContent,
  parentErrors,
  parentErrorsContent,
} from 'alltypes';
import FormField from './FormField';
import { useLazyQuery } from '@apollo/client';
import {
  CheckIfEmailIsAlreadyInUse,
  CheckIfEmailIsAlreadyInUseVariables,
} from 'operations/__generated__/CheckIfEmailIsAlreadyInUse';
import { CHECK_IF_EMAIL_ALREADY_IN_USE } from 'operations/queries/users';
import Spinner from './Spinner';

const FormStepOne = ({
  handleNext,
  formContent: formContentState,
  setContent: setParentContent,
}: FormStepOneType) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [formErrors, setFormErrors] = useState<parentErrors>({
    hasError: false,
    errors: {
      name: null,
      firstName: null,
      phone: null,
      email: null,
      secondaryEmail: null,
      password: null,
      repeatPassword: null,
    },
  });

  const [
    validateEmail,
    { data: isUserInvalid, loading, error: queryError, refetch },
  ] = useLazyQuery<
    CheckIfEmailIsAlreadyInUse,
    CheckIfEmailIsAlreadyInUseVariables
  >(CHECK_IF_EMAIL_ALREADY_IN_USE, {
    fetchPolicy: 'no-cache',
  });

  async function checkValidity(content: parentContent) {
    //all content is equal to null if no errors are detected
    let errors = checkParentInfosValidity(content);

    let key: keyof parentErrorsContent;
    for (key in errors.errors) {
      //if the current key is user
      if (key === 'email') {
        const getCheck = async () => {
          if (!isUserInvalid && !queryError) {
            return await validateEmail({
              variables: {
                passedEmail: {
                  email: formContentState.parentContent.email,
                },
              },
            });
          } else {
            return await refetch({
              passedEmail: {
                email: formContentState.parentContent.email,
              },
            });
          }
        };
        const res = await getCheck();

        if (res.data?.UserExists && res.data.UserExists.exists) {
          errors = {
            hasError: true,
            errors: {
              ...errors.errors,
              email: "L'email est déjà utilisé pour un autre utilisateur.",
            },
          };
        }
      }
    }

    setFormErrors({ ...errors });

    if (errors.hasError) {
      return;
    }

    handleNext();
  }

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleChange = ({ evt }: handleChangeType) => {
    const { name, value } = evt.target;
    if (
      name === 'name' ||
      name === 'firstName' ||
      name === 'phone' ||
      name === 'email' ||
      name === 'secondaryEmail' ||
      name === 'password' ||
      name === 'repeatPassword'
    ) {
      setParentContent({
        [name]: value,
      });
    }
  };

  return (
    <section
      className={
        isActive ? `form__step__one active` : `form__step__one inactive`
      }>
      <h4 className="form__subtitle">
        Information de la personne de contact :
      </h4>
      <FormField
        value={formContentState.parentContent.firstName}
        name="firstName"
        onChange={handleChange}
        uniqueKey="none"
        id="firstname"
        content="Prénom : *"
        error={formErrors.errors.firstName}>
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
        value={formContentState.parentContent.name}
        name="name"
        onChange={handleChange}
        uniqueKey="none"
        id="lastname"
        content="Nom : *"
        error={formErrors.errors.name ? formErrors.errors.name : null}>
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
        value={formContentState.parentContent.phone}
        name="phone"
        onChange={handleChange}
        uniqueKey="none"
        id="phone"
        content="Numéro de gsm : *"
        error={formErrors.errors.phone}
        placeholder={'0483865714'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 32"
          className="field__svg">
          <path
            stroke="null"
            d="M2.63 0C1.94 0 1.23.24.74.75.24 1.25 0 1.96 0 2.66v26.6c0 .7.24 1.4.74 1.91.5.5 1.2.75 1.89.75h15.78c.69 0 1.4-.24 1.89-.75.5-.5.74-1.21.74-1.91V2.66c0-.7-.24-1.4-.74-1.91-.5-.5-1.2-.75-1.89-.75H2.63zm0 2.66h15.78v26.6H2.63V2.66zm5.26 22.61v2.66h5.26v-2.66H7.89z"
          />
        </svg>
      </FormField>
      <FormField
        value={formContentState.parentContent.email}
        name="email"
        onChange={handleChange}
        uniqueKey="none"
        id="email"
        info="(Utilisé pour la connexion et reçevoir les informations importantes)"
        content="Email principal : *"
        error={formErrors.errors.email}
        placeholder={'exemple@email.com'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 32 22"
          className="field__svg">
          <path
            stroke="null"
            d="M0 0v22.13h31.96V0H0zm5.3 2.46h21.36l-10.68 7.1L5.3 2.47zM2.46 3.53l12.83 8.57.7.42.68-.42L29.5 3.53v16.14H2.46V3.53z"
          />
        </svg>
      </FormField>
      {/* <FormField
        value={formContentState.parentContent.secondaryEmail}
        name="secondaryEmail"
        onChange={handleChange}
        uniqueKey="none"
        id="secondaryEmail"
        info="(Seconde adresse à laquelle envoyer les informations importantes)"
        content="Email secondaire :"
        error={formErrors.errors.secondaryEmail}
        placeholder={'otherexemple@email.com'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 32 22"
          className="field__svg">
          <path
            stroke="null"
            d="M0 0v22.13h31.96V0H0zm5.3 2.46h21.36l-10.68 7.1L5.3 2.47zM2.46 3.53l12.83 8.57.7.42.68-.42L29.5 3.53v16.14H2.46V3.53z"
          />
        </svg>
      </FormField> */}
      <FormField
        value={formContentState.parentContent.password}
        name="password"
        onChange={handleChange}
        uniqueKey="none"
        id="password"
        info="(Minimum 4 charactères)"
        content="Mot de passe :"
        type={'password'}
        error={formErrors.errors.password}>
        <svg
          className="field__svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 25 32">
          <path
            stroke="null"
            d="M12.45 0a8.69 8.69 0 00-8.71 8.62v3.7H0v19.7h24.9v-19.7h-3.73v-3.7A8.69 8.69 0 0012.45 0zm0 2.46a6.17 6.17 0 016.23 6.16v3.7H6.23v-3.7a6.17 6.17 0 016.22-6.16zM2.49 14.78h19.92v14.78H2.5V14.78zm4.98 6.16c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23zm4.98 0c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23zm4.98 0c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23z"></path>
        </svg>
      </FormField>
      <FormField
        value={formContentState.parentContent.repeatPassword}
        name="repeatPassword"
        onChange={handleChange}
        uniqueKey="none"
        id="repeatPassword"
        type={'password'}
        content="Répétez le mot de passe :"
        error={formErrors.errors.repeatPassword}>
        <svg
          className="field__svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 25 32">
          <path
            stroke="null"
            d="M12.45 0a8.69 8.69 0 00-8.71 8.62v3.7H0v19.7h24.9v-19.7h-3.73v-3.7A8.69 8.69 0 0012.45 0zm0 2.46a6.17 6.17 0 016.23 6.16v3.7H6.23v-3.7a6.17 6.17 0 016.22-6.16zM2.49 14.78h19.92v14.78H2.5V14.78zm4.98 6.16c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23zm4.98 0c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23zm4.98 0c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23z"></path>
        </svg>
      </FormField>
      <p className="form__mandatory">*Champs obligatoires</p>
      {formErrors.hasError && (
        <p className="error">Il y a une erreur au sein du fomulaire</p>
      )}
      {/* {mutationError && (
        <p>Une erreur est survenue : {mutationError.message}</p>
      )} */}
      <div className="form__button__wrapper">
        <button
          type="button"
          className="cta cta--main"
          onClick={() => {
            checkValidity(formContentState.parentContent);
          }}>
          {!loading ? (
            <>
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
            </>
          ) : (
            Spinner(ColorsEnum.White)
          )}
        </button>
      </div>
    </section>
  );
};

export default FormStepOne;
