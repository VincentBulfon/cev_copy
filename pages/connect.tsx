import React from 'react';

import Hero from 'components/components/Hero';
import ContentWrapper from 'components/components/ContentWrapper';
import SignInOrSignUp from 'components/components/SignInOrSignUp';
import Head from 'next/head';

const register = () => {
  return (
    <>
      <Head>
        <title>CEV - Connexion ou Inscirptions</title>
        <meta
          property="og:title"
          content="CEV - Connexion ou Inscirptions"
          key="og_title"
        />
        <meta
          property="og:description"
          content="Connectez-vous ou inscrivez vous sur le site du CEV."
          key="og_description"
        />
        <meta
          property="og:title"
          content="CEV - Connexion ou Inscirptions"
          key="title"
        />
        <meta
          property="og:description"
          content="Connectez-vous ou inscrivez vous sur le site du CEV."
        />
      </Head>
      <Hero
        title="Inscription"
        src="/assets/indoor_waiting.jpeg"
        width={4000}
        height={6000}>
        <div className="bg__container">
          <ContentWrapper className="content__wrapper--bt">
            <SignInOrSignUp />
          </ContentWrapper>
        </div>
      </Hero>
    </>
  );
};

export default register;
