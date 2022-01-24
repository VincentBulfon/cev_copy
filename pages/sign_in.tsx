import React, { useEffect, useState } from 'react';

import Title from 'components/atoms/Title';
import Hero from 'components/components/Hero';
import FormField from 'components/components/FormField';
import ContentWrapper from 'components/components/ContentWrapper';
import { BtnMain } from 'components/moleculs/Btn';
import { handleChangeType } from 'alltypes';
import { checkCredentialsValidity } from 'helpers/validation';
import { useMutation } from '@apollo/client';

import { useRouter } from 'next/dist/client/router';
import { isAdminVar, isLoggedVar, userFirstNameVar } from 'client/reactVars';
import { RoleEnum } from 'operations/__generated__/globalTypes';
import {
  Sign_In_Mutation,
  Sign_In_MutationVariables,
} from 'operations/__generated__/Sign_In_Mutation';
import { SING_IN_MUTATION } from 'operations/mutations/singup';
import NavLink from 'components/atoms/Link';
import Head from 'next/head';

const sign_in = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [credErrors, setCredErrors] = useState<{
    email: string | null;
    password: string | null;
  }>({
    email: null,
    password: null,
  });

  //Import router
  const router = useRouter();

  const handleChange = ({ evt }: Omit<handleChangeType, 'uniqueKey'>) => {
    const { name, value } = evt.target;

    //set email
    name === 'email' &&
      setCredentials({
        email: value,
        password: credentials.password,
      });

    //set password
    name === 'password' &&
      setCredentials({
        email: credentials.email,
        password: value,
      });
  };

  const [sign_in, { data, loading, error }] = useMutation<
    Sign_In_Mutation,
    Sign_In_MutationVariables
  >(SING_IN_MUTATION, {
    variables: {
      input: {
        email: credentials.email,
        password: credentials.password,
      },
    },
  });

  const handleSubmit = () => {
    const { email, password } = checkCredentialsValidity(
      credentials,
      credErrors,
    );
    setCredErrors({ email, password });
    if (email === null && password === null) {
      sign_in();
    }
  };

  useEffect(() => {
    if (data && !error && !loading) {
      if (
        data?.login.token ||
        data?.login.userFirstName ||
        data.login.userRole
      ) {
        //Store the token inside the localstorage
        localStorage.setItem('token', data?.login.token || '');

        //store the user id inside the is reactiveVar
        isLoggedVar({ isLogged: data?.login.userId });
        isAdminVar({
          isAdmin:
            data?.login.userRole === RoleEnum.ADMIN ||
            data?.login.userRole === RoleEnum.MONITOR,
        });
        userFirstNameVar({ userFirstName: data.login.userFirstName });
        data?.login.userRole === RoleEnum.ADMIN ||
        data?.login.userRole === RoleEnum.MONITOR
          ? router.push('/management/users')
          : router.push('/me');
      }
    }
  }, [data, loading, error, isAdminVar()]);

  return (
    <>
      <Head>
        <title>CEV - Se connecter</title>
        <meta property="og:title" content="CEV - Se connecter" key="og_title" />
        <meta
          property="og:description"
          content="Se connecter sur le site du Club d'esclade Visétois"
          key="og_description"
        />
        <meta property="og:title" content="CEV - Se connecter" key="title" />
        <meta
          property="og:description"
          content="Se connecter sur le site du Club d'esclade Visétois"
        />
      </Head>
      <Hero
        title="Inscription"
        src="/assets/indoor_waiting.jpeg"
        width={4000}
        height={6000}>
        <ContentWrapper className="content__wrapper--nt">
          <Title content="Se connecter">
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
              id="email"
              content="Email :*"
              name="email"
              uniqueKey={'email'}
              value={credentials.email}
              placeholder={'exemple@email.com'}
              onChange={handleChange}
              error={
                credErrors.email
                  ? credErrors.email
                  : error
                  ? 'Le couple email mot de passe est incorrecte'
                  : undefined
              }>
              <svg
                className="field__svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 32 22">
                <path
                  stroke="null"
                  d="M0 0v22.13h31.96V0H0zm5.3 2.46h21.36l-10.68 7.1L5.3 2.47zM2.46 3.53l12.83 8.57.7.42.68-.42L29.5 3.53v16.14H2.46V3.53z"
                />
              </svg>
            </FormField>
            <FormField
              id="password"
              content="Mot de passe :*"
              name="password"
              uniqueKey={'email'}
              value={credentials.password}
              onChange={handleChange}
              type={'password'}
              error={
                credErrors.password
                  ? credErrors.password
                  : error
                  ? 'Le couple email mot de passe est incorrecte'
                  : undefined
              }>
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
            <NavLink
              key={'link forgot'}
              className="nav__dropdown__link nav__dropdown__link--green"
              to="/auth/password/forgot"
              name="Récupérer mon mot de passe"
            />
            <BtnMain onClick={handleSubmit}>
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
                <p className="cta__content__text">Se connecter</p>
              </>
            </BtnMain>
          </form>
        </ContentWrapper>
      </Hero>
    </>
  );
};

export default sign_in;
