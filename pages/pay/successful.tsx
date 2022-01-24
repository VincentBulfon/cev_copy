import React from 'react';

import NavLink from 'components/atoms/Link';
import Hero from 'components/components/Hero';
import ContentWrapper from 'components/components/ContentWrapper';
import Title from 'components/atoms/Title';

const sucessful = () => {
  return (
    <Hero
      title="Inscription"
      src="/assets/indoor_waiting.jpeg"
      width={4000}
      height={6000}>
      <div className="bg__container">
        <ContentWrapper className="content__wrapper--white">
          <Title content="Status du paiement">
            <svg
              fill="#004546"
              className="title__svg"
              viewBox="0 0 26.6 31.9"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="null"
                d="M0 0v32h26.6V0H0zm2.7 2.7h21.2v26.5H2.7V2.7zm2.6 6.6V12H8V9.3H5.3zm4 0V12h12V9.3h-12zm-4 5.3v2.7H8v-2.7H5.3zm4 0v2.7h12v-2.7h-12zm-4 5.3v2.7H8v-2.7H5.3zm4 0v2.7h12v-2.7h-12z"
              />
            </svg>
          </Title>
          <p className="content__wrapper__text content__wrapper__text--flex">
            Réussite du paiement !
            <svg
              className="svg svg--right"
              xmlns="http://www.w3.org/2000/svg"
              fill="#1FAA19"
              viewBox="0 0 26 26">
              <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z" />
            </svg>
          </p>
          <NavLink
            className="text--underline text__link text--bold"
            to="/me/payments"
            name="Voir mes paiements"
          />
        </ContentWrapper>
      </div>
    </Hero>
  );
};

export default sucessful;
