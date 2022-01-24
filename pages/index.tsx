import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Title from 'components/atoms/Title';
import CallToAction from 'components/moleculs/CallToAction';
import ContentWrapper from 'components/components/ContentWrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>CEV - Le club</title>
        <meta property="og:title" content="CEV - Le club" key="og_title" />
        <meta
          property="og:description"
          content="Le club d'escalade Visétois, cours d'escalades pour enfants de 6 à 18 ans. Cours en salle et en extérieur durant la fin d'année"
          key="og_description"
        />
        <meta property="og:title" content="CEV - Le club" key="title" />
        <meta
          property="og:description"
          content="Le club d'escalade Visétois, cours d'escalades pour enfants de 6 à 18 ans. Cours en salle et en extérieur durant la fin d'année"
          key="description"
        />
      </Head>
      <main>
        <section className="hero hero--index core">
          <div className="hero__img hero__img--index">
            <Image
              className="hero__image"
              src="/assets/indoor__climbing.jpeg"
              width="6000"
              height="4000"
              layout="responsive"
            />
          </div>
          <div className="hero__title hero__title--index">
            <h2
              itemProp="name"
              className="hero__title__text hero__title__text--index">
              Le club d'escalade{' '}
              <span className="hero__title--light">Visétois</span>
            </h2>
          </div>

          <ContentWrapper
            className="content__wrapper--index
         content__wrapper--blue content__wrapper--reverse">
            <div className="content__wrapper__container">
              <div className="content__wrapper__content">
                <div className="content__wrapper__title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#004546"
                    viewBox="0 0 23 26"
                    className="title__svg">
                    <path
                      stroke="null"
                      d="M9.51.05a3.54 3.54 0 00-.25 7.07l-1.72.32h-.06l-3.12.82-2.63-4.31L.01 5.03 2.64 9.3a2.05 2.05 0 002.22.92l2.25-.57.84 6.82-1.84 9.08 1.97.4 1.71-8.56 5.63-.41 2.4 5.71 1.85-.8-2.4-5.74a2 2 0 00-1.94-1.2l.65-.2.03-.02h.03l.7-.29.05-.03.04-.03.43-.23-.93-1.77-.35.19-.1.03-.5.22-.05.03h-.04l-.62.2.6 1.9-1.16.1-.1-.86V7.98l2.44-1.84c.26-.2.48-.47.63-.76l1.84-3.88L17.1.62l-1.85 3.9-2.72 2.03-1.62.29A3.54 3.54 0 009.52.05zm13.5.98l-2 .06v.99h2V1.03zM9.51 2.08c.84 0 1.5.67 1.5 1.52a1.5 1.5 0 11-3 0c0-.85.66-1.52 1.5-1.52zm11.47.95l-.06.66h.03l-.16 1.08v.1l1.94.38.03-.16.03-.03v-.03l.13-1.15v-.06l.06-.67-2-.12zm-.37 2.76l-.22.85v.07l-.28.82v.04l-.03.03.53.16 1.34.57v-.04l.03-.03v-.03l.31-.95v-.03l.04-.03.21-.92-1.93-.51zm-.85 2.63l-.34.67-.03.06-.35.6h-.03l-.15.26 1.62 1.17.16-.22.06-.06.44-.76.03-.04v-.03l.37-.73-1.78-.92zm-7.75.32v6.47l-2.18.2-.75-6.16L12 8.74zm6.28 1.97l-.18.25-.07.06-.43.42-.07.06-.43.38h-.03l-.07.06.53.7.1.1.53.85.1-.1.59-.47.06-.03.66-.67.25-.28-1.54-1.33z"
                    />
                  </svg>
                  <h3 className="title__h3">Le club</h3>
                </div>
                <p className="content__wrapper__text">
                  Le club d’<span itemProp="sport">escalade</span> de Visé est
                  l’un des premiers clubs à d’
                  <span className="content__wrapper__text--bold">
                    escalade en salle{' '}
                  </span>
                  à avoir ouvert ne région Wallonne.
                </p>
                <p className="content__wrapper__text">
                  Composé de{' '}
                  <span className="content__wrapper__text--bold">
                    3 moniteurs passionnés{' '}
                  </span>
                  et{' '}
                  <span className="content__wrapper--text--bold">
                    forts de leurs années d’expériences,
                  </span>{' '}
                  ils encadrent des enfants de{' '}
                  <span className="content__wrapper__text--bold">
                    6 à 18 ans
                  </span>{' '}
                  autant en intérieur qu’en extérieur sur une falaise privée
                  pour tous les niveaux vers la fin de l’année.
                </p>
                <p className="content__wrapper__text">
                  Le club organise aussi durant les vacances scolaires des{' '}
                  <span className="content__wrapper__text--bold">
                    stages de bloc
                  </span>{' '}
                  ou nous allons durant quelques jours grimper{' '}
                  <span className="content__wrapper__text--bold">
                    à Fontainebleau (France).
                  </span>
                </p>
                <CallToAction main name="Horaire des cours" to="/courses">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    className="cta__svg">
                    <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm0 2c5.54 0 10 4.46 10 10s-4.46 10-10 10S2 17.54 2 12 6.46 2 12 2zm-1 2v9h7v-2h-5V4h-2z" />
                  </svg>
                </CallToAction>
              </div>
              <div className="content__wrapper__img hidden">
                <div className="wrapper__img__container">
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
            </div>
          </ContentWrapper>
          <div className="divider" aria-hidden="true">
            <img className="divider__img" src="/assets/Moutains.svg" alt="" />
          </div>
          <ContentWrapper className="content__wrapper--nt content__wrapper--reverse">
            <div className="content__wrapper__container">
              <div className="content__wrapper__content content__wrapper__content--left">
                <Title content="L'infrastructure">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFA98F"
                    viewBox="0 0 24 24"
                    className="title__svg">
                    <path d="M2 0v22H0v2h24v-2h-2V0H2zm2 2h16v20H4V2zm2 2v2h3V4H6zm8 2a2 2 0 104 0h-4zm-7 4a2 2 0 104 0H7zm7 2v2h3v-2h-3zm-8 4v2h3v-2H6zm8 2a2 2 0 104 0h-4z" />
                  </svg>
                </Title>
                <p className="content__wrapper__text" itemProp="description">
                  Le club dispose de{' '}
                  <span className="content__wrapper__text--bold">
                    deux murs d'escalade de 8m{' '}
                  </span>
                  à de hauteur chacun situés dans le{' '}
                  <span
                    itemProp="place"
                    className="content__wrapper__text--bold">
                    hall omnisport de Visé.{' '}
                  </span>
                </p>
                <p className="content__wrapper__text">
                  Ainsi que d'une{' '}
                  <span className="content__wrapper__text--bold">
                    falaise privatisée de 40m{' '}
                  </span>
                  de hauteur et de{' '}
                  <span className="content__wrapper--text--bold">
                    100m de large
                  </span>{' '}
                  environ avec des voies adaptées à tous les niveaux.{' '}
                </p>
                <CallToAction main name="Nos spots" to="/courses#spots">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 17 25">
                    <path
                      stroke="null"
                      d="M8.45.06a8.4 8.4 0 00-8.4 8.39c0 1.3.54 2.81 1.26 4.45a51.62 51.62 0 002.6 5.01 94.46 94.46 0 003.78 5.97L8.45 25l.75-1.1s1.9-2.73 3.79-5.98a51.62 51.62 0 002.6-5c.71-1.65 1.24-3.15 1.24-4.46A8.4 8.4 0 008.45.05zm0 1.86c3.61 0 6.52 2.91 6.52 6.53 0 .74-.4 2.15-1.08 3.7a51.2 51.2 0 01-2.53 4.83c-1.47 2.53-2.38 3.86-2.91 4.66-.54-.8-1.45-2.13-2.92-4.66A51.2 51.2 0 013 12.14a11.25 11.25 0 01-1.08-3.7c0-3.61 2.91-6.52 6.53-6.52zm0 4.66a1.86 1.86 0 100 3.73 1.86 1.86 0 000-3.73z"
                    />
                  </svg>
                </CallToAction>
              </div>
              <div className="content__wrapper__img content__wrapper__img--right hidden">
                <div className="wrapper__img__container">
                  <Image
                    className="hero__image"
                    src="/assets/climbing__wall.jpeg"
                    width="6000"
                    height="4000"
                    layout="responsive"
                  />
                  {/* <p>SVG here behind image</p> */}
                </div>
              </div>
            </div>
          </ContentWrapper>
        </section>
      </main>
    </>
  );
}
