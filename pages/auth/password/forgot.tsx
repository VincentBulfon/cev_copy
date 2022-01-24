import React, { useState } from 'react';

import Title from 'components/atoms/Title';
import Hero from 'components/components/Hero';
import FormField from 'components/components/FormField';
import ContentWrapper from 'components/components/ContentWrapper';
import { BtnMain } from 'components/moleculs/Btn';
import { useMutation } from '@apollo/client';
import { FORGOT_USER_PASSWORD } from 'operations/mutations/auth';
import {
  ForgotUserPassword,
  ForgotUserPasswordVariables,
} from 'operations/__generated__/ForgotUserPassword';
import { ColorsEnum, handleChangeType } from 'alltypes';
import { rules } from 'helpers/validation';
import Spinner from 'components/components/Spinner';

const resetPassword = () => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [forgotPassword, { data, loading, error }] = useMutation<
    ForgotUserPassword,
    ForgotUserPasswordVariables
  >(FORGOT_USER_PASSWORD);

  const checkEmailIsValid = () => {
    let isInvalid: boolean = true;
    if (email != '' && email.match(rules.email)) {
      isInvalid = false;
    }

    setInvalidEmail(isInvalid);

    if (!isInvalid) {
      forgotPassword({
        variables: { email },
      });
      setEmail('');
    }
  };

  return (
    <Hero
      title="Récupérer votre mot de passe"
      src="/assets/indoor_waiting.jpeg"
      width={4000}
      height={6000}>
      <ContentWrapper className="content__wrapper--nt">
        <Title content="Entrez votre adresse email :">
          <svg
            className="title__svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 32 32">
            <path
              stroke="null"
              d="M16 .08A15.94 15.94 0 00.08 16c0 8.78 7.14 15.92 15.92 15.92 8.78 0 15.92-7.14 15.92-15.92C31.92 7.22 24.78.08 16 .08zm0 2.45c7.45 0 13.47 6.02 13.47 13.47 0 7.45-6.02 13.47-13.47 13.47A13.45 13.45 0 012.53 16C2.53 8.55 8.55 2.53 16 2.53zm0 3.68a6.14 6.14 0 00-6.12 6.12c0 1.85.86 3.5 2.18 4.63a8.58 8.58 0 00-4.63 7.61h2.45A6.1 6.1 0 0116 18.45a6.1 6.1 0 016.12 6.12h2.45c0-3.3-1.87-6.18-4.63-7.61a6.1 6.1 0 002.18-4.63A6.14 6.14 0 0016 6.2zm0 2.44a3.66 3.66 0 013.67 3.68A3.66 3.66 0 0116 16a3.66 3.66 0 01-3.67-3.67A3.66 3.66 0 0116 8.65z"
            />
          </svg>
        </Title>
        <form action="" className="form__contact__person">
          <FormField
            onChange={(e: handleChangeType) => {
              setEmail(e.evt.target.value);
            }}
            value={email}
            name="email"
            uniqueKey="email"
            type={'email'}
            id="email"
            error={
              invalidEmail
                ? 'Veuillez entrer un email valide'
                : error
                ? 'Cet email ne correspond à aucun utilisateur dans notre base de données.'
                : null
            }
            content="Entrez votre adresse email :*"
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
          <p className="form__mandatory">*Champs obligatoires</p>
          {data && !error && (
            <p className="content__wrapper__text">
              Un email à été envoyé à{' '}
              <strong className="content__wrapper__text--bold">
                {data.forgotPassword.message}
              </strong>
              . Suivez les instructions pour réinitialiser votre mot de passe
              (le lien n'est{' '}
              <strong className="content__wrapper__text--bold">
                valide que 10 minutes
              </strong>
              ).
            </p>
          )}
          <BtnMain
            onClick={() => {
              checkEmailIsValid();
            }}>
            <>
              {loading ? (
                Spinner(ColorsEnum.White)
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 32 32"
                    className="svg">
                    <path
                      stroke="null"
                      d="M15.95 0C8.54 0 2.32 5.1.54 11.96h2.74a13.3 13.3 0 0125.96 4 13.3 13.3 0 01-25.96 3.99l-2.74-.01c1.78 6.87 8 11.96 15.41 11.96 8.8 0 15.95-7.15 15.95-15.95C31.9 7.15 24.75 0 15.95 0zm-.87 9.68l-1.91 1.9 3.03 3.04H0v2.66h16.2l-3.03 3.03 1.9 1.91 5.33-5.31.91-.96-.91-.95-5.32-5.32z"
                    />
                  </svg>
                  <p className="cta__content__text">
                    Récupérer <span className="sro">votre mot de passe</span>
                  </p>
                </>
              )}
            </>
          </BtnMain>
        </form>
      </ContentWrapper>
    </Hero>
  );
};

export default resetPassword;
