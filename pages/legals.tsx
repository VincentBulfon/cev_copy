import React from 'react';

import { ContentWrapperDiv } from 'components/components/ContentWrapper';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import Head from 'next/head';

const legals = () => {
  return (
    <>
      <Head>
        <title>CEV - Mentions légales</title>
        <meta
          property="og:title"
          content="CEV - Mentions légales"
          key="og_title"
        />
        <meta
          property="og:description"
          content="Mentions légales concerant l'utilisation de l'application du club d'escalade Visétois."
          key="og_description"
        />
        <meta
          property="og:title"
          content="CEV - Mentions légales"
          key="title"
        />
        <meta
          property="og:description"
          content="Mentions légales concerant l'utilisation de l'application du club d'escalade Visétois."
        />
      </Head>
      <HeroWithoutImg title="Traitement des données">
        <ContentWrapperDiv>
          <p className="content__wrapper__text">
            Les seules données personnelles que nous conservons sont celles que
            vous soumettez lorsque vous vous remplissez le fomulaire
            (partiellement, une ou plusieurs étapes ou complètement). <br />
            Elles peuvent êtres supprimées confomément au RGPD en nous en
            faisant la demande de par email.
          </p>
        </ContentWrapperDiv>
      </HeroWithoutImg>
    </>
  );
};

export default legals;
