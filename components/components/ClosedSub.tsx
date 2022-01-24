import React from 'react';

import Title from 'components/atoms/Title';

const ClosedSub = () => {
  return (
    <>
      <Title content="Revenez nous voir plus tard...">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          viewBox="0 0 32 32"
          className="title__svg">
          <path
            stroke="null"
            d="M28 .06c-1.03 0-2.03.4-2.8 1.16L12.01 14.37l-.29.3-.08.41-.92 4.66-.41 1.96 1.95-.42 4.66-.91.42-.09.29-.29L30.78 6.8A3.95 3.95 0 0028 .07zm0 2.58c.3 0 .61.16.9.45.6.6.6 1.24 0 1.84L16 17.83l-2.28.46.46-2.3 12.9-12.9c.3-.3.6-.45.91-.45zM.02 5.34v26.64h26.63V14.42L24 17.08V29.3H2.69V8.01h12.23l2.67-2.67H.03z"
          />
        </svg>
      </Title>
      <p className="content__wrapper__text">
        Les{' '}
        <span className="content__wrapper__text--bold">
          inscriptions sont fermées
        </span>{' '}
        à partir de début mars{' '}
        <span className="content__wrapper__text--bold">
          jusqu’a début septembre
        </span>{' '}
        Les anciens sont ceux ayants déjà une inscription avec un compte actif
        l’année précédente.
      </p>
    </>
  );
};

export default ClosedSub;
