import React from 'react';

import { Children } from 'alltypes';
import ContentWrapper from './ContentWrapper';
import CallToAction from 'components/moleculs/CallToAction';

const ContactError = ({ children }: Children) => {
  return (
    <ContentWrapper>
      <h3 className="sro">Une erreur ?</h3>
      <p className="content__wrapper__text content__wrapper__text--small">
        {children}
      </p>
      <CallToAction main name="Contact" to="../about">
        <svg
          className="svg svg--right"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          viewBox="0 0 28 25">
          <path d="M0 0v16h4v5l1.6-1.2 4.7-3.8H20V0H0zm2 2h16v12H9.7l-.3.2L6 17V14H2V2zm20 2v2h4v12h-4v3l-3.7-3h-7.5l-2.5 2h9.4l6.3 5v-5h4V4z" />
        </svg>
      </CallToAction>
    </ContentWrapper>
  );
};

export default ContactError;
