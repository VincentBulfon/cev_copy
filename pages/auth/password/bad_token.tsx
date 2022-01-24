import React from 'react';
import Link from 'next/link';
import Title from 'components/atoms/Title';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import ContentWrapper from 'components/components/ContentWrapper';

export default function BadToken() {
  return (
    <HeroWithoutImg title={'Oooops'}>
      <ContentWrapper className=" content__wrapper--nt content__wrapper--nf">
        <Title content="Le token saisit est invalide! 🥲"></Title>
        <p className="content__wrapper__text">
          Demandez un nouveau token pour{' '}
          {
            <Link href="/auth/password/forgot">
              <a>réinitialiser votre mot de passe</a>
            </Link>
          }
          .
        </p>
      </ContentWrapper>
    </HeroWithoutImg>
  );
}
