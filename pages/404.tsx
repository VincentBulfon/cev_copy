import React from 'react';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import ContentWrapper from 'components/components/ContentWrapper';
import Title from 'components/atoms/Title';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>CEV - 404</title>
        <meta property="og:title" content="CEV - 404" key="og_title" />
        <meta
          property="og:description"
          content="Cette page n'existe pas."
          key="og_description"
        />
        <meta property="og:title" content="CEV - 404" key="title" />
        <meta property="og:description" content="Cette page n'existe pas." />
      </Head>
      <HeroWithoutImg title={'Oooops'}>
        <ContentWrapper className=" content__wrapper--nt content__wrapper--nf">
          <Title content="Il n'y a rien ici... 🥶"></Title>
          <p className="content__wrapper__text">
            Erreur : 404 | La page que vous cherchez n'existe pas.
          </p>
        </ContentWrapper>
      </HeroWithoutImg>
    </>
  );
}
