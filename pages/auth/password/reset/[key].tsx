import React, { useState } from 'react';

import Title from 'components/atoms/Title';
import Hero from 'components/components/Hero';
import FormField from 'components/components/FormField';
import ContentWrapper from 'components/components/ContentWrapper';
import { BtnMain } from 'components/moleculs/Btn';
import { GetServerSideProps } from 'next';
import { gql, useMutation } from '@apollo/client';
import client from 'providers/apollo-provider';
import { CheckToken } from 'operations/__generated__/CheckToken';
import { useRouter } from 'next/dist/client/router';
import { rules } from 'helpers/validation';
import {
  ColorsEnum,
  handleChangeType,
  resetPasswordErrorsType,
} from 'alltypes';
import { RESET_USER_PASSWORD } from 'operations/mutations/auth';
import {
  ResetUserPassword,
  ResetUserPasswordVariables,
} from 'operations/__generated__/ResetUserPassword';
import Spinner from 'components/components/Spinner';
import NavLink from 'components/atoms/Link';

const resetPassword = ({
  isValid,
  token,
}: {
  isValid: boolean;
  token: string;
}) => {
  const [passwords, setPasswords] = useState({
    password: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState<resetPasswordErrorsType>({
    hasError: false,
    password: null,
    repeatPassword: null,
  });

  const router = useRouter();

  if (!isValid) {
    router.push('/auth/password/bad_token');
  }

  const [ResetPassword, { data, loading }] = useMutation<
    ResetUserPassword,
    ResetUserPasswordVariables
  >(RESET_USER_PASSWORD);

  const checkValidity = () => {
    console.log('validity check');

    let passwordErrors: resetPasswordErrorsType = {
      hasError: false,
      password: null,
      repeatPassword: null,
    };
    if (passwords.password == '' || !passwords.password.match(rules.password)) {
      passwordErrors.hasError = true;
      passwordErrors.password =
        'Le mot de passe ne doit faire plue de 4 charactères';
    } else {
      passwordErrors.hasError = false;
      passwordErrors.password = null;
    }

    if (
      passwordErrors.hasError === false &&
      passwords.password !== passwords.repeatPassword
    ) {
      passwordErrors.password = 'Les mots de passes ne correspondent';
      passwordErrors.repeatPassword = 'Les mots de passes ne correspondent';
      passwordErrors.hasError = true;
    } else if (
      passwordErrors.hasError === false &&
      passwords.password === passwords.repeatPassword
    ) {
      passwordErrors.password = null;
      passwordErrors.repeatPassword = null;
      passwordErrors.hasError = false;
    }

    setErrors(passwordErrors);

    if (!passwordErrors.hasError) {
      ResetPassword({
        variables: {
          resetPasswordInput: {
            resetPasswordToken: token,
            newPassword: passwords.password,
          },
        },
      });
    }
  };

  return (
    <Hero
      title="Mot de passe oublié"
      src="/assets/indoor_waiting.jpeg"
      width={4000}
      height={6000}>
      <ContentWrapper className="content__wrapper--nt">
        <Title
          content={
            data
              ? 'Votre mot de passe à été changé.'
              : 'Entrez votre nouveau mot de passe :'
          }>
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
        {data ? (
          <>
            <p className="content__wrapper__text">
              {data.resetPassword.message}
            </p>
            <NavLink
              key={'go_to_connection'}
              className="nav__dropdown__link nav__dropdown__link--green nav__dropdown__link--center"
              to="/sign_in"
              name="Se connecter"
            />
          </>
        ) : (
          <form
            action=""
            className="form__contact__person"
            onSubmit={e => {
              checkValidity();
              e.preventDefault();
            }}>
            <FormField
              onChange={(e: handleChangeType) => {
                setPasswords({
                  ...passwords,
                  password: e.evt.target.value,
                });
              }}
              value={passwords.password}
              id="password"
              content="Nouveau mot de passe :*"
              type={'password'}
              name="password"
              uniqueKey="password1"
              error={errors.password}>
              <svg
                className="field__svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 25 32">
                <path
                  stroke="null"
                  d="M12.45 0a8.69 8.69 0 00-8.71 8.62v3.7H0v19.7h24.9v-19.7h-3.73v-3.7A8.69 8.69 0 0012.45 0zm0 2.46a6.17 6.17 0 016.23 6.16v3.7H6.23v-3.7a6.17 6.17 0 016.22-6.16zM2.49 14.78h19.92v14.78H2.5V14.78zm4.98 6.16c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23zm4.98 0c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23zm4.98 0c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23z"
                />
              </svg>
            </FormField>
            <FormField
              onChange={(e: handleChangeType) => {
                setPasswords({
                  ...passwords,
                  repeatPassword: e.evt.target.value,
                });
              }}
              value={passwords.repeatPassword}
              name="password"
              uniqueKey="repeatpassword"
              type={'password'}
              id="password"
              content="Répétez votre nouveau mot de passe :*"
              error={errors.repeatPassword}>
              <svg
                className="field__svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 25 32">
                <path
                  stroke="null"
                  d="M12.45 0a8.69 8.69 0 00-8.71 8.62v3.7H0v19.7h24.9v-19.7h-3.73v-3.7A8.69 8.69 0 0012.45 0zm0 2.46a6.17 6.17 0 016.23 6.16v3.7H6.23v-3.7a6.17 6.17 0 016.22-6.16zM2.49 14.78h19.92v14.78H2.5V14.78zm4.98 6.16c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23zm4.98 0c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23zm4.98 0c-.69 0-1.24.55-1.24 1.23 0 .68.55 1.23 1.24 1.23s1.25-.55 1.25-1.23c0-.68-.56-1.23-1.25-1.23z"
                />
              </svg>
            </FormField>
            <p className="form__mandatory">*Champs obligatoires</p>
            <BtnMain type="submit" onClick={() => {}}>
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
                    Modifier <span className="sro">le mot de passe</span>
                  </p>
                </>
              )}
            </BtnMain>
          </form>
        )}
      </ContentWrapper>
    </Hero>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const token =
    context.params != undefined &&
    (context.params.key != undefined || !Array.isArray(context.params.key))
      ? context.params.key
      : null;

  const isValid = await client.query<CheckToken>({
    query: gql`
      query CheckToken($token: String) {
        checkToken(token: $token)
      }
    `,
    variables: {
      token,
    },
    fetchPolicy: 'network-only',
  });
  return {
    props: {
      token,
      isValid: isValid.data.checkToken,
    },
  };
};

export default resetPassword;
