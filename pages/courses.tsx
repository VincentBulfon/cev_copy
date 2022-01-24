import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import client from 'providers/apollo-provider';
import { gql } from '@apollo/client';

import Hero from 'components/components/Hero';

import ContentWrapper from 'components/components/ContentWrapper';
import Title from 'components/atoms/Title';
import { Dd, Dt } from 'components/atoms/Datalist';
import CallToAction from 'components/moleculs/CallToAction';

import { GetCoursesDate_courses } from 'operations/__generated__/GetCoursesDate';
import dayjs from 'config/dayjs';
import { GetOptionLastPrice_options } from 'operations/__generated__/GetOptionLastPrice';

import { NameEnum } from 'operations/__generated__/globalTypes';
import Head from 'next/head';

const courses = (props: {
  data: GetCoursesDate_courses[];
  options: GetOptionLastPrice_options[];
}) => {
  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.slice(
    0,
    process.env.NEXT_PUBLIC_MAPBOX_TOKEN.length,
  );
  console.log(mapboxgl.accessToken);

  let groupBy = ({ array, key }: { array: any[]; key: string }) => {
    return array.reduce((result, obj) => {
      (result[obj[key]] = result[obj[key]] || []).push(obj);
      return result;
    }, {});
  };

  const coursesMemo = useMemo(() => {
    return groupBy({ array: props.data, key: 'day_of_week' });
  }, [props.data]);

  const optionsMemo = useMemo(() => {
    return props.options;
  }, [props.options]);

  useEffect(() => {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/snow-rocks/ckrw7w03v1lky18qgeng1dmum',
    });
  }, []);

  return (
    <>
      <Head>
        <title>CEV - Les cours</title>
        <meta property="og:title" content="CEV - Les cours" key="og_title" />
        <meta
          property="og:description"
          content="Liste des cours donnés au club d'escalade visétois."
          key="og_description"
        />
        <meta property="og:title" content="CEV - Les cours" key="title" />
        <meta
          property="og:description"
          content="Liste des cours donnés au club d'escalade visétois."
        />
      </Head>
      <Hero
        className="hero--blue"
        title="Les cours"
        src="/assets/child-climbing.jpeg"
        width={1500}
        height={1101}>
        <div className="main__wrapper main__wrapper--lb">
          <div className="content__wrapper__img content__wrapper__img--sticky hidden">
            <div className="wrapper__img__container">
              <Image
                key="hero_image"
                className="hero__image"
                src="/assets/indoor__climbing.jpeg"
                width="6000"
                height="4000"
                layout="responsive"
              />
            </div>
          </div>
          <div className="content__container content__container--gr">
            <ContentWrapper
              key={'cw1'}
              className="content__wrapper--blue content__wrapper--nt content__wrapper--gd">
              <Title content="Les horaires">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#004546"
                  viewBox="0 0 24 24"
                  className="title__svg">
                  <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm0 2c5.54 0 10 4.46 10 10s-4.46 10-10 10S2 17.54 2 12 6.46 2 12 2zm-1 2v9h7v-2h-5V4h-2z" />
                </svg>
              </Title>
              <dl className="dl">
                {Object.entries(coursesMemo).map(
                  (courseEntry: any, index: number) => {
                    return (
                      <>
                        <Dt key={`day${index}`}>
                          {dayjs().day(parseInt(courseEntry[0])).format('dddd')}
                           :
                        </Dt>
                        {courseEntry[1].map(function (
                          elmt: any,
                          entryIndex: number,
                        ) {
                          return (
                            <Dd key={`${index} ${entryIndex}`}>{`${dayjs(
                              elmt.start_time,
                            ).format('HH:mm')}-${dayjs(elmt.end_time).format(
                              'HH:mm',
                            )}`}</Dd>
                          );
                        })}
                      </>
                    );
                  },
                )}
              </dl>
              <p className={'content__wrapper__text'}>
                Lorsque nous allons{' '}
                <span className="content__wrapper__text--bold">
                  à la falaise en fin d’année
                </span>{' '}
                les cours sont{' '}
                <span className="content__wrapper__text--bold">
                  regroupés sur certains jours de la semaine
                </span>{' '}
                afin de nous éviter d’aller installer le matériel sur la falaise
                uniquement pour deux heures de cours consécutives.
              </p>
            </ContentWrapper>
            <ContentWrapper
              key={'cw2'}
              className="content__wrapper--nt content__wrapper--blue content__wrapper--gd">
              <Title content="Les prix">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#004546"
                  viewBox="0 0 32 31"
                  className="title__svg">
                  <path
                    stroke="null"
                    d="M13.44.05a5.8 5.8 0 00-5.79 5.79c0 1.02.3 1.98.77 2.8a12.1 12.1 0 00-5.1 5.55h-.16a.63.63 0 01-.65-.64c0-.23.12-.41.28-.53l-1.48-2.08a3.18 3.18 0 00-1.37 2.6 3.2 3.2 0 002.7 3.14c-.07.45-.13.9-.13 1.37 0 3.2 1.7 5.98 4.18 8.03-.31 1.28-.15 2.66.84 3.65a3.94 3.94 0 005.55 0l.48-.48c1 .19 2.01.36 3.1.36 1.07 0 2.08-.17 3.09-.36l.48.48a3.94 3.94 0 005.54 0c.98-.97 1.12-2.3.84-3.57a11.84 11.84 0 002.61-2.97h2.86V12.9h-2.94a11.51 11.51 0 00-1.64-2.08l.72-3.98V5.19h-1.28s-3.1.05-5.7 2.01c-.7-.2-1.38-.36-2.1-.48a5.8 5.8 0 00-5.7-6.67zm0 2.57a3.2 3.2 0 013.21 3.22c0 .22-.04.43-.08.64-2.07 0-4.03.4-5.82 1.08a3.2 3.2 0 012.7-4.94zM25.33 8h.04l-.48 2.94-.12.68.56.48c.9.8 1.6 1.68 2.09 2.65l.36.73h1.73v5.14h-1.73l-.36.72a9.22 9.22 0 01-2.9 3.25l-.92.69.56 1.04c.31.52.25 1.16-.2 1.6a1.3 1.3 0 01-1.89 0l-.92-.92-.52-.48-.68.16a14.68 14.68 0 01-6.6 0l-.67-.16-.53.48-.92.93a1.3 1.3 0 01-1.89 0 1.3 1.3 0 01-.2-1.61l.56-1.04-.92-.69c-2.33-1.68-3.7-3.99-3.7-6.54 0-4.81 5.03-9 11.57-9 1.58 0 3.09.23 4.46.68l.68.24.57-.48A7.02 7.02 0 0125.33 8zm-.97 7.48a1.29 1.29 0 000 2.57 1.29 1.29 0 000-2.57z"
                  />
                </svg>
              </Title>
              <div className="content__wrapper__content">
                <p className="content__wrapper__text">
                  L’année est divisée en{' '}
                  <span className="content__wrapper__text--bold">
                    deux “semestres”{' '}
                  </span>
                  le premier de septembre à début janvier et le second de début
                  janvier à fin juin.
                </p>
                <p className="content__wrapper__text">
                  La cotisation du{' '}
                  <span className="content__wrapper__text--bold">
                    premier semestre est de{' '}
                    {optionsMemo.map(option => {
                      if (option.name === NameEnum.MEMBERSH1PFEE1) {
                        return option.price.price;
                      }
                    })}
                    €.{' '}
                  </span>
                  Et{' '}
                  <span className="content__wrapper__text--bold">
                    le second de{' '}
                    {optionsMemo.map(option => {
                      if (option.name === NameEnum.MEMBERSHIPFEE2) {
                        return option.price.price;
                      }
                    })}
                    €
                  </span>
                </p>
                <p className="content__wrapper__text">
                  <span className="content__wrapper__text--bold">
                    Le montant de l’assurance annuelle est de{' '}
                    {optionsMemo.map(option => {
                      if (option.name === NameEnum.INSSURANCE) {
                        return option.price.price;
                      }
                    })}
                    €.{' '}
                  </span>
                  Et est à payer en même temps que le premier paiement pour le
                  cours. Si vous résider à Visé et que vous avez un{' '}
                  <span className="content__wrapper__text--bold">
                    chèque sport{' '}
                  </span>
                  vous pouvez décompter 25€ de la première cotisation en nous le
                  remettant.
                </p>
                <CallToAction main to="/connect" name="Inscription">
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
          </div>
        </div>
        <div className="divider" aria-hidden="true">
          <img className="divider__img" src="/assets/Moutains.svg" alt="" />
        </div>
        <div className="main__wrapper">
          <div className="content__wrapper__img content__wrapper__img--sticky content__wrapper__img--right hidden">
            <div className="wrapper__img__container">
              <Image
                key="decoration_image"
                className="hero__image"
                src="/assets/indoor__climbing.jpeg"
                width="6000"
                height="4000"
                layout="responsive"
              />
            </div>
          </div>
          <div className="content__container content__container--gl">
            <div className="content__wrapper__content">
              <ContentWrapper key={'cw3'}>
                <Title content="Quel matos prendre?">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#004546"
                    viewBox="0 0 32 27"
                    className="title__svg">
                    <path
                      stroke="null"
                      d="M16 .04c-2.78 0-5.3.29-7.21.76-.96.24-1.75.53-2.41.92-.66.4-1.37.99-1.37 1.98v4.9c0 .99.7 1.58 1.37 1.98.66.39 1.45.67 2.4.91 1.03.26 2.24.48 3.56.61v7.48h7.32V12.1c1.32-.13 2.53-.35 3.55-.6a8.97 8.97 0 002.41-.92c.66-.4 1.37-1 1.37-1.99V3.7c0-1-.7-1.59-1.37-1.98a8.97 8.97 0 00-2.4-.92C21.3.33 18.77.04 16 .04zm0 2.44c2.61 0 4.98.28 6.6.69.68.17 1.14.36 1.5.53-.36.18-.82.37-1.5.54-1.62.4-3.99.69-6.6.69-2.61 0-4.98-.29-6.6-.7a7.29 7.29 0 01-1.5-.53c.36-.17.82-.36 1.5-.53 1.62-.4 3.99-.69 6.6-.69zm-8.55 3.7c.41.16.84.3 1.34.43 1.9.47 4.43.76 7.21.76 2.78 0 5.3-.29 7.21-.76.5-.13.93-.27 1.34-.42v2.17c-.01.01-.02.04-.15.12-.33.19-.98.44-1.8.65-1.62.4-3.99.68-6.6.68-2.61 0-4.98-.28-6.6-.68a7.75 7.75 0 01-1.8-.65c-.13-.08-.14-.1-.15-.12V6.2zm7.33 6.04c.4.01.8.04 1.22.04.42 0 .82-.03 1.22-.04v4.92h-2.44v-4.92zM11.1 14.7a4.9 4.9 0 00-4.46 2.9c-.73-.56-1.45-1-2.18-1.3a4.81 4.81 0 00-1.83-.38 2.6 2.6 0 00-1.83.69 2.6 2.6 0 00-.69 1.83c0 .62.14 1.22.38 1.83.5 1.23 1.41 2.48 2.6 3.67a11.47 11.47 0 003.66 2.6c.61.24 1.21.38 1.83.37a2.6 2.6 0 001.84-.68c.5-.5.68-1.22.68-1.84 0-.62-.13-1.22-.38-1.83a10.6 10.6 0 00-2.06-3.09 2.43 2.43 0 012.44-2.33V14.7zm9.78 0v2.44a2.43 2.43 0 012.44 2.33 10.6 10.6 0 00-2.06 3.1 4.81 4.81 0 00-.38 1.82c0 .62.18 1.33.68 1.84.5.5 1.22.68 1.84.68.62 0 1.22-.13 1.83-.38 1.22-.49 2.48-1.41 3.66-2.6a11.47 11.47 0 002.6-3.66c.24-.6.38-1.21.38-1.83a2.6 2.6 0 00-.69-1.83 2.6 2.6 0 00-1.83-.69c-.62 0-1.22.14-1.83.38-.73.3-1.45.74-2.18 1.3a4.9 4.9 0 00-4.46-2.9zM2.56 18.36h.12c.17 0 .5.07.91.23.81.33 1.85 1.04 2.83 2.03.98.98 1.7 2.01 2.02 2.82.16.4.23.74.23.92v.11h-.11c-.18 0-.51-.07-.92-.23a9.27 9.27 0 01-2.82-2.02 9.27 9.27 0 01-2.03-2.83c-.16-.4-.23-.74-.23-.91v-.12zm26.76 0h.12v.12c0 .17-.07.5-.23.91a9.27 9.27 0 01-2.03 2.83 9.27 9.27 0 01-2.82 2.02c-.4.16-.74.23-.92.23h-.11v-.11c0-.18.07-.51.23-.92a9.27 9.27 0 012.02-2.82 9.27 9.27 0 012.83-2.03c.4-.16.74-.23.91-.23z"
                    />
                  </svg>
                </Title>
                <div className="content__wrapper__content">
                  <p className={'content__wrapper__text'}>
                    Rien du tout ! 😀 <br />
                    Ha si, j'ai failli oublier ! ☝️ 
                    <br />
                    <span className="content__wrapper__text--bold">
                      Vos chaussons ou pantoufles de gym.
                      <br />
                    </span>{' '}
                    Sinon des chaussures à semelles plates sont plus adaptées
                    pour grimper si vous n'avez pas de chaussons ou de
                    pentoufles de gym.
                  </p>
                  <p className={'content__wrapper__text'}>
                    Vous pouvez bien évidement venir avec votre propre baudrier.{' '}
                    <span className="content__wrapper__text--bold">
                      Tout le matériel{' '}
                    </span>
                    (baudriers, mousquetons, systèmes d’assurage auto-bloquants){' '}
                    <span className="content__wrapper__text--bold">
                      sauf les chaussons sont mis à disposition par le club.{' '}
                    </span>
                    Le matériel est mis à disposition des hadérents{' '}
                    <span className="content__wrapper__text--bold">
                      uniquement pendants les heures de cours auquelles ils sont
                      inscrits.{' '}
                    </span>
                    De même que l’utilisation du mur d’escalade n’est permise
                    que pendants ces mêmes heures de cours.{' '}
                  </p>
                </div>
              </ContentWrapper>
              <ContentWrapper
                key={'cw4'}
                id="spots"
                className="content__wrapper--bt">
                <Title
                  content="Nos spots"
                  className="content__wrapper__title--nt">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 17 25"
                    className="title__svg">
                    <path
                      stroke="null"
                      d="M8.45.06a8.4 8.4 0 00-8.4 8.39c0 1.3.54 2.81 1.26 4.45a51.62 51.62 0 002.6 5.01 94.46 94.46 0 003.78 5.97L8.45 25l.75-1.1s1.9-2.73 3.79-5.98a51.62 51.62 0 002.6-5c.71-1.65 1.24-3.15 1.24-4.46A8.4 8.4 0 008.45.05zm0 1.86c3.61 0 6.52 2.91 6.52 6.53 0 .74-.4 2.15-1.08 3.7a51.2 51.2 0 01-2.53 4.83c-1.47 2.53-2.38 3.86-2.91 4.66-.54-.8-1.45-2.13-2.92-4.66A51.2 51.2 0 013 12.14a11.25 11.25 0 01-1.08-3.7c0-3.61 2.91-6.52 6.53-6.52zm0 4.66a1.86 1.86 0 100 3.73 1.86 1.86 0 000-3.73z"
                    />
                  </svg>
                </Title>
                <div className="content__wrapper__content">
                  <p className="content__wrapper__text">
                    Nous avons deux spots,{' '}
                    <span
                      itemProp="place"
                      className="content__wrapper__text--bold">
                      le hallomnisport de Visé.{' '}
                    </span>
                    Auquel nous grimperons toute l'année.
                  </p>
                  <p className="content__wrapper__text">
                    <span className="content__wrapper__text--bold">
                      Ainsi qu'une falaise privatisée,{' '}
                    </span>
                    où nous ne grimpons que durant le mois de Juin.
                  </p>
                  <span id="map"></span>
                  <CallToAction main to="/connect" name="Inscription">
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
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query GetCoursesInfos {
        courses {
          id
          day_of_week
          start_time
          end_time
        }
        options {
          id
          price {
            price
            id
          }
          name
        }
      }
    `,
  });
  return {
    props: {
      data: data?.courses,
      options: data.options,
    },
  };
}

export default courses;
