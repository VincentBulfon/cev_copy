import React from 'react';

import Title from 'components/atoms/Title';
import Hero from 'components/components/Hero';
import FormField from 'components/components/FormField';
import RecapView from 'components/moleculs/RecapView';

const pay = () => (
  <Hero
    width={3873}
    height={2592}
    title="Le calendrier"
    src="/assets/calendar.jpeg">
    <section className="content__wrapper">
      <div className="content__wrapper__content">
        <Title content="Récapitulatif">
          <svg
            fill="#004546"
            viewBox="0 0 32 32"
            className="title__svg"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="null"
              d="M0 0v32h12.5V0H0zm2.8 2.8h7v7h-7v-7zm1.4 1.4v4.1h4.1V4.2H4.2zm11 0v2.7h7V4.2h-7zm9.8 0v2.7h7V4.2h-7zM2.8 12.5h7v7h-7v-7zm3.4 1.4a2 2 0 100 4.2 2 2 0 000-4.2zm9 0v2.8h7v-2.8h-7zm9.8 0v2.8h7v-2.8h-7zM2.8 22.2h7v7h-7v-7zm3.4 1.4l-2 4.2h4.1l-2-4.2zm9 0v2.8h7v-2.8h-7zm9.8 0v2.8h7v-2.8h-7z"
            />
          </svg>
        </Title>
        {/* @ts-ignore TODO:Add recap props here */}
        <RecapView />
      </div>
    </section>
    <section className="content__wrapper">
      <div className="content__wrapper__content">
        <Title content="Informations de paiement">
          <svg
            fill="#004546"
            className="title__svg"
            viewBox="0 0 31.9 26.5"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="null"
              d="M0 0v26.6h31.9V0H0zm2.7 2.7h26.5v21.2H2.7V2.7zM5.3 8v2.6H20V8H5.3zm17.3 0v2.6h4V8h-4zM5.3 13.3v2.6H20v-2.6H5.3zm17.3 0v2.6h4v-2.6h-4zm0 5.3v2.7h4v-2.7h-4z"
            />
          </svg>
        </Title>
        {/* @ts-ignore TODO:Add missing props here */}
        <FormField id="owner" content="Titulaire du compte :">
          <svg
            className="field__svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 29 31">
            <path
              stroke="null"
              d="M14.5 0a10.1 10.1 0 00-5.7 18.5A14.5 14.5 0 000 31.8h2.9c0-3.6 1.7-6.9 4.3-9l6.3 5.7 1 1 1-1 6.2-5.7c2.6 2.1 4.3 5.4 4.3 9h3c0-6-3.7-11-8.9-13.3A10.2 10.2 0 0014.5 0zm0 2.9a7.2 7.2 0 110 14.5c-4 0-7.3-3.3-7.3-7.3S10.5 3 14.5 3zm0 17.4c1.6 0 3.2.3 4.6 1l-4.6 4.2-4.7-4.3c1.4-.6 3-1 4.7-1z"
            />
          </svg>
        </FormField>
        {/* @ts-ignore TODO:Add missing props here */}
        <FormField id="email" content="Email :">
          <svg
            className="field__svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 32 22">
            <path
              stroke="null"
              d="M0 0v22.1h32V0H0zm5.3 2.5h21.4L16 9.5l-10.7-7zm-2.8 1l12.8 8.6.7.4.7-.4 12.8-8.6v16.2h-27V3.5z"
            />
          </svg>
        </FormField>
        {/* @ts-ignore TODO:Add missing props here */}
        <FormField id="account" content="IBAN :">
          <svg
            className="field__svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="#004546"
            viewBox="0 0 31.9 22.8">
            <path
              stroke="null"
              d="M3.4 0A3.4 3.4 0 000 3.4v16c0 1.8 1.5 3.4 3.4 3.4h25c2 0 3.5-1.6 3.5-3.4v-16c0-1.9-1.6-3.4-3.4-3.4h-25zm0 2.3h25c.7 0 1.2.5 1.2 1.1v16c0 .6-.5 1.1-1.1 1.1h-25c-.7 0-1.2-.5-1.2-1.1v-16c0-.6.5-1.1 1.1-1.1zm1.2 4.5v4.6h5.6V6.8H4.6zm11.3 0v2.3h10.3V6.8H15.9zm-11.3 8v2.3H9v-2.3H4.6zm5.6 0v2.3h4.6v-2.3h-4.6zm5.7 0v2.3h4.6v-2.3h-4.6zm5.7 0v2.3h4.6v-2.3h-4.6z"
            />
          </svg>
        </FormField>
        <button type="button" className=" cta cta--main">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            viewBox="0 0 32 23.3">
            <path
              stroke="null"
              d="M12.3 0c-1 0-2 .5-2.8 1.2-1.5.1-2.6 1.1-3.8 2l-.4.4L0 8.1v3.2L7 5.5l.5-.4 1.2-1v8.3l-1.3.7 1.1 2.2 5.3-2.9c1.3-.7 2.1-1.3 3.3-1.3.8 0 1.5.6 1.5 1.5 0 .6-.2.8-.4 1a5 5 0 01-1.2 1c-1.3.9-2.8 2.3-2.8 2.3v.1H14c-1.5 2.2-3.3 3.9-6.6 3.9H0v2.4h7.4c4.1 0 6.8-2.3 8.4-4.6l1.7-1.5h10.8c2 0 3.7-1.7 3.7-3.7V3.7c0-2-1.7-3.7-3.7-3.7h-16zm0 2.5h16c.7 0 1.2.5 1.2 1.2v1.2H12.3v2.5h17.2v6.1c0 .7-.5 1.2-1.2 1.2h-8A4 4 0 0017 8.6c-2 0-3.4 1-4.5 1.7l-1.4.7V3.7c0-.7.5-1.2 1.2-1.2z"
            />
          </svg>
          <span className="input__value cta__content__text">Payer</span>
        </button>
      </div>
    </section>
  </Hero>
);

export default pay;
