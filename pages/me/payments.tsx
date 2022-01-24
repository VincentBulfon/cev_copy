import React from 'react';
import Image from 'next/image';

import Title from 'components/atoms/Title';
import ContentWrapper, {
  ContentWrapperDiv,
} from 'components/components/ContentWrapper';
import { PayementType } from 'alltypes/PayementType';
import Payements from 'components/moleculs/Payement';
import ContactError from 'components/components/ContactError';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import { useIsAuthenticatedNotAdmin } from 'hooks/useIsAuthenticatedIsNotAdmin';
import Head from 'next/head';

//@ts-ignore
//TODO:Add data inside component
const PayementsPage = ({ data }: PayementType) => {
  return (
    useIsAuthenticatedNotAdmin() && (
      <>
        <Head>
          <title>CEV - payements</title>
        </Head>
        <HeroWithoutImg title="Jean-François Delacours">
          <ContentWrapper className="content__wrapper--nt">
            <Title content="Vos paiements :">
              <Image
                src="/assets/pp.svg"
                alt="votre photo de profil"
                width="62"
                height="62"
              />
            </Title>
            <ContentWrapperDiv className="content__wrapper--fw">
              <Payements
                data={[
                  { date: new Date(1625819077972), obj: ['coti 1', 'coti 2'] },
                ]}
              />
            </ContentWrapperDiv>
          </ContentWrapper>
          <ContactError>
            Si vous constatez une erreur dans les données présentes ci-dessus
            merci de prendre contacte avec nous. Dans les délais les plus brefs.
            Si les paiements on déjà été effectués veillez attendre le temps de
            traitement des données par la banque. Pour les paiements en mains
            propre nous pouvons prendre jusqu’a une semaine pour mettre les
            données à jours.
          </ContactError>
        </HeroWithoutImg>
      </>
    )
  );
};

export default PayementsPage;
