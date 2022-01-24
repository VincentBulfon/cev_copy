import Title from 'components/atoms/Title';
import CallToAction from 'components/moleculs/CallToAction';
import React from 'react';

const SignInOrSignUp = () => {
  return (
    <>
      <Title content="Se connecter" className="sro" />
      <p className="content__wrapper__text content__wrapper__text--connect">
        Connectez-vous ou créez un compte afin de
        <span className="content__wrapper__text--bold">
          pouvoir vous inscrire.
        </span>
      </p>
      <CallToAction main className="cta--nb" to="/sign_in" name="Se connecter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          viewBox="0 0 29 31"
          className="svg">
          <path
            stroke="null"
            d="M14.47 0a10.15 10.15 0 00-5.65 18.54A14.51 14.51 0 000 31.84h2.9c0-3.67 1.69-6.93 4.33-9.05l6.25 5.74.99.95 1-.95 6.23-5.74a11.56 11.56 0 014.35 9.04h2.89c0-5.95-3.66-11.07-8.82-13.3A10.15 10.15 0 0014.47 0zm0 2.9a7.21 7.21 0 017.23 7.23 7.21 7.21 0 01-7.23 7.23 7.21 7.21 0 01-7.24-7.23 7.21 7.21 0 017.24-7.24zm0 17.36c1.66 0 3.24.33 4.66.95l-4.66 4.34-4.66-4.34c1.42-.62 3-.95 4.66-.95z"
          />
        </svg>
      </CallToAction>
      <span className="centred__text">Ou</span>
      <CallToAction
        className="cta--nb cta--secondary"
        to="/register"
        name="Inscription">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffa98f"
          viewBox="0 0 32 32">
          <path
            stroke="null"
            d="M28 .06c-1.03 0-2.03.4-2.8 1.16L12.01 14.37l-.29.3-.08.41-.92 4.66-.41 1.96 1.95-.42 4.66-.91.42-.09.29-.29L30.78 6.8A3.95 3.95 0 0028 .07zm0 2.58c.3 0 .61.16.9.45.6.6.6 1.24 0 1.84L16 17.83l-2.28.46.46-2.3 12.9-12.9c.3-.3.6-.45.91-.45zM.02 5.34v26.64h26.63V14.42L24 17.08V29.3H2.69V8.01h12.23l2.67-2.67H.03z"
          />
        </svg>
      </CallToAction>
    </>
  );
};

export default SignInOrSignUp;
