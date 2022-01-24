import React from 'react';
import Image from 'next/image';

import Title from 'components/atoms/Title';
import ContentWrapper from 'components/components/ContentWrapper';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import CallToAction from 'components/moleculs/CallToAction';
import ContactError from 'components/components/ContactError';
import { useIsAuthenticatedNotAdmin } from 'hooks/useIsAuthenticatedIsNotAdmin';
import Head from 'next/head';

const Subscriptions = () => {
  return (
    useIsAuthenticatedNotAdmin() && (
      <>
        <Head>
          <title>CEV - inscriptions</title>
        </Head>
        <HeroWithoutImg title="Jean-François Delacours">
          <ContentWrapper className="content__wrapper--nt">
            <Title
              className="content__wrapper__title--nb"
              content="Vos inscriptions :">
              <Image
                src="/assets/pp.svg"
                alt="votre photo de profil"
                width="62"
                height="62"
              />
            </Title>
            <ContentWrapper className="content__wrapper--fw">
              <h4 className="me__title">Leblanc Juste :</h4>
              {true ? (
                <p>inscription courante de l'enfant</p>
              ) : (
                // <SubscriptionElement id={1} />
                <p className="content__wrapper__text">
                  Il n'y a aucune inscription enregistrée pour cet enfant pour
                  l'année courante.
                </p>
              )}
            </ContentWrapper>
            <ContentWrapper className="content__wrapper--fw">
              <h4 className="me__title">Alice Doe :</h4>
              {/* set conditional rendering */}
              <p>inscription courante de l'enfant</p>
              {/* <SubscriptionElement
              id={1}
              cot1Status={Cot1Status.paid}
              cot2Status={Cot2Status['not yet payable']}
              assStatus={AssStatus.paid}
            /> */}
              {/* set conditional rendering */}
              <p className="content__wrapper__text">
                Il n'y a aucune inscription enregistrée pour cet enfant.
              </p>

              <CallToAction main name="Inscrire Alice" to="/register">
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
                  viewBox="0 0 31 32">
                  <path
                    stroke="null"
                    d="M15.5 0C7 0 0 7.3 0 16s7 16 15.5 16S31 24.7 31 16 24 0 15.5 0zm0 2.5c7.2 0 13.1 6 13.1 13.5s-5.9 13.5-13.1 13.5c-7.2 0-13.1-6-13.1-13.5S8.3 2.5 15.5 2.5zM14.3 10v4.9H9.5v2.4h4.8v5h2.4v-5h4.8v-2.4h-4.8v-5h-2.4z"
                  />
                </svg>
              </CallToAction>
              {/* end conditional rendering */}
            </ContentWrapper>
          </ContentWrapper>
          <ContactError>
            Si vous constatez une erreur dans les données présentes ci-dessus
            merci de prendre contacte avec nous. Dans les délais les plus brefs.
          </ContactError>
        </HeroWithoutImg>
      </>
    )
  );
};

export default Subscriptions;
