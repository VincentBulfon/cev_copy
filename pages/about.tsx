import React from 'react';
import Image from 'next/image';

import Hero from 'components/components/Hero';
import ContentWrapper from 'components/components/ContentWrapper';
import { Dd, Dt } from 'components/atoms/Datalist';
import CallToAction from 'components/moleculs/CallToAction';
import Title from 'components/atoms/Title';
import Head from 'next/head';

const about = () => {
  return (
    <>
      <Head>
        <title>CEV - À propos</title>
        <meta property="og:title" content="CEV - À propos" key="og_title" />
        <meta
          property="og:description"
          content="Informations de contact des gérants du club."
          key="og_description"
        />
        <meta property="og:title" content="CEV - À propos" key="title" />
        <meta
          property="og:description"
          content="Informations de contact des gérants du club."
        />
      </Head>
      <Hero
        className="hero--blue"
        title="Contact"
        src="/assets/contact_picture.jpeg"
        width={1500}
        height={1101}>
        <ContentWrapper className="content__wrapper--centred content__wrapper--blue content__wrapper--reverse">
          <div className="content__wrapper__container">
            <div className="content__container">
              <Title content="Président du club">
                <svg
                  className="title__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 32">
                  <path
                    stroke="null"
                    d="M2.63 0C1.94 0 1.23.24.74.75.24 1.25 0 1.96 0 2.66v26.6c0 .7.24 1.4.74 1.91.5.5 1.2.75 1.89.75h15.78c.69 0 1.4-.24 1.89-.75.5-.5.74-1.21.74-1.91V2.66c0-.7-.24-1.4-.74-1.91-.5-.5-1.2-.75-1.89-.75H2.63zm0 2.66h15.78v26.6H2.63V2.66zm5.26 22.61v2.66h5.26v-2.66H7.89z"
                  />
                </svg>
              </Title>
              <dl
                itemProp="employee"
                itemScope
                itemType="https://schema.org/Person"
                className="dl--left dl">
                <Dt>Nom :</Dt>
                <Dd>
                  <span itemProp="familyName">HANOZIN</span>{' '}
                  <span itemProp="firstName">Didier</span>
                </Dd>
                <Dt>Gsm :</Dt>
                <Dd>
                  <a itemProp="telephone" href="tel:+04774124545">
                    0477 412 45 45
                  </a>
                </Dd>
                <Dt>Adresse :</Dt>
                <Dd>
                  <span
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">Rue Basse 29</span>,{' '}
                    <span itemProp="postalCode">4600</span>{' '}
                    <span itemProp="addressLocality">Visé</span>
                  </span>
                </Dd>
                <Dt>Email :</Dt>
                <Dd>
                  <span itemProp="email ">viseescalade@gmail.com</span>
                </Dd>
              </dl>
            </div>
            <div className="wrapper__img__container content__wrapper__img content__wrapper__img">
              <Image
                className="contact__image"
                src="/assets/guy1.jpg"
                width="200"
                height="200"
                layout="responsive"
              />
            </div>
          </div>
        </ContentWrapper>
        <div className="divider" aria-hidden="true">
          <img className="divider__img" src="/assets/Moutains.svg" alt="" />
        </div>
        <ContentWrapper className="content__wrapper--centred content__wrapper--reverse">
          <div className="content__wrapper__container">
            <div className="content__container">
              <Title content="Responsable du club">
                <svg
                  className="title__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 32">
                  <path
                    stroke="null"
                    d="M2.63 0C1.94 0 1.23.24.74.75.24 1.25 0 1.96 0 2.66v26.6c0 .7.24 1.4.74 1.91.5.5 1.2.75 1.89.75h15.78c.69 0 1.4-.24 1.89-.75.5-.5.74-1.21.74-1.91V2.66c0-.7-.24-1.4-.74-1.91-.5-.5-1.2-.75-1.89-.75H2.63zm0 2.66h15.78v26.6H2.63V2.66zm5.26 22.61v2.66h5.26v-2.66H7.89z"
                  />
                </svg>
              </Title>
              <dl
                itemProp="employee"
                itemScope
                itemType="https://schema.org/Person"
                className="dl--left dl">
                <Dt>Nom :</Dt>
                <Dd>
                  <span itemProp="familyName">OLIVIER</span>{' '}
                  <span itemProp="givenName">Nicolas</span>
                </Dd>
                <Dt>Gsm :</Dt>
                <Dd>
                  <a itemProp="telephone" href="tel:+04774124545">
                    0477 412 45 45
                  </a>
                </Dd>
                <Dt>Adresse :</Dt>
                <Dd>
                  <span
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">Rue Basse 29</span>,{' '}
                    <span itemProp="postalCode">4600</span>{' '}
                    <span itemProp="addressLocality">Visé</span>
                  </span>
                </Dd>
                <Dt>Email :</Dt>
                <Dd>viseescalade@gmail.com</Dd>
              </dl>
            </div>
            <div className="wrapper__img__container content__wrapper__img content__wrapper__img--right content__wrapper__img--mb">
              <Image
                className="contact__image"
                src="/assets/guy2.jpg"
                width="200"
                height="200"
                layout="responsive"
              />
            </div>
            <CallToAction main name="Inscription" to="register">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                viewBox="0 0 32 32">
                <path
                  stroke="null"
                  d="M28 .06c-1.03 0-2.03.4-2.8 1.16L12.01 14.37l-.29.3-.08.41-.92 4.66-.41 1.96 1.95-.42 4.66-.91.42-.09.29-.29L30.78 6.8A3.95 3.95 0 0028 .07zm0 2.58c.3 0 .61.16.9.45.6.6.6 1.24 0 1.84L16 17.83l-2.28.46.46-2.3 12.9-12.9c.3-.3.6-.45.91-.45zM.02 5.34v26.64h26.63V14.42L24 17.08V29.3H2.69V8.01h12.23l2.67-2.67H.03z"
                />
              </svg>
            </CallToAction>
          </div>
        </ContentWrapper>
      </Hero>
    </>
  );
};

export default about;
