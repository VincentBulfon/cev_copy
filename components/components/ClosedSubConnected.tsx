import React from 'react';

import Title from 'components/atoms/Title';

const ClosedSub = () => {
  return (
    <>
      <Title content="Revenez nous voir plus tard...">Svg here</Title>
      <p className="content__wrapper__text">
        Votre compte
        <span className="content__wrapper__text--bold">
          n’avais pas de souscription active l’année passée
        </span>{' '}
        vous ne pouvez donc pas vous inscrire avant les inscription ouvertes à
        tous publics, dès le 1<span className="exposant">er</span> septembre.
      </p>
    </>
  );
};

export default ClosedSub;
