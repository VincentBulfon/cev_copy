import React from 'react';
import Image from 'next/image';

import Hero from 'components/components/Hero';
import CallToAction from 'components/moleculs/CallToAction';
import Title from 'components/atoms/Title';
import CalendarComponent from 'components/components/Calendar';
import Head from 'next/head';

const Calendar = () => {
  return (
    <>
      <Head>
        <title>CEV - Le calendrier</title>
        <meta
          property="og:title"
          content="CEV - Le calendrier"
          key="og_title"
        />
        <meta
          property="og:description"
          content="Liste de cours donnés pour le mois courant."
          key="og_description"
        />
        <meta property="og:title" content="CEV - Le calendrier" key="title" />
        <meta
          property="og:description"
          content="Liste de cours donnés pour le mois courant."
        />
      </Head>
      <Hero
        className="hero--blue"
        title="Le calendrier"
        src="/assets/calendar.jpeg"
        width={3873}
        height={2592}>
        <section className="content__wrapper content__wrapper--blue content__wrapper--nt content__wrapper--reverse content__wrapper--lb">
          <div className="content__wrapper__content">
            <Title content="Légende">
              <svg
                className="title__svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 22 22">
                <path
                  stroke="null"
                  d="M4-.18v.96H0v21.17h22V.78h-4v-.96h-2v.96H6v-.96H4zM2 2.71h2v.96h2V2.7h10v.96h2V2.7h2v1.92H2V2.71zm0 3.85h18v13.46H2V6.56zm6 1.92v1.92h2V8.48H8zm4 0v1.92h2V8.48h-2zm4 0v1.92h2V8.48h-2zM4 12.33v1.92h2v-1.92H4zm4 0v1.92h2v-1.92H8zm4 0v1.92h2v-1.92h-2zm4 0v1.92h2v-1.92h-2zM4 16.18v1.92h2v-1.92H4zm4 0v1.92h2v-1.92H8zm4 0v1.92h2v-1.92h-2z"
                />
              </svg>
            </Title>
            <div className="legend">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27 27"
                className="svg">
                <g data-name="Group 17">
                  <g stroke="#ff3100" strokeWidth="2" data-name="Group 21">
                    <g fill="rgba(255,255,255,0)" data-name="Rectangle 25">
                      <path stroke="none" d="M0 0h27v27H0z" />
                      <path fill="none" d="M1 1h25v25H1z" />
                    </g>
                    <g fill="none" data-name="Group 19">
                      <path d="M7.4 7.4l12.2 12.2" data-name="Path 61" />
                      <path d="M19.6 7.4L7.4 19.6" data-name="Path 62" />
                    </g>
                  </g>
                </g>
              </svg>{' '}
              <p className="legend__content">Indique un cours annulé</p>
            </div>
          </div>
          <div className="content__wrapper__img" aria-hidden="true">
            <div className="wrapper__img__container hidden">
              <Image
                className="wrapper__img"
                src="/assets/indoor__climbing.jpeg"
                width="6000"
                height="4000"
                layout="responsive"
              />
              {/* <p>SVG here behind image</p> */}
            </div>
          </div>
        </section>
        <section className="calendar">
          <h3 className="sro">Calendrier</h3>
          {/* #TODO create the calendar here */}
          <CalendarComponent />
        </section>
        <section className="cta__wrapper">
          <h3 className="sro">Une question ?</h3>
          <p className="cta__wrapper__text">
            Une question sur les dates d'un cours ?{' '}
            <span className="cta__wrapper__text--bold">Contactez-nous !</span>
          </p>
          <CallToAction main to="/about" name="Contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              viewBox="0 0 28 25">
              <path d="M0 0v16h4v5.1l1.63-1.32L10.34 16H20V0H0zm2 2h16v12H9.66l-.28.22L6 16.9V14H2V2zm20 2v2h4v12h-4v2.9L18.34 18h-7.5l-2.5 2h9.32L24 25.1V20h4V4h-6z" />
            </svg>
          </CallToAction>
        </section>
      </Hero>
    </>
  );
};

export default Calendar;
