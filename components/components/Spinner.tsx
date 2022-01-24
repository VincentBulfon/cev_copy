import { ColorsEnum } from 'alltypes';
import React from 'react';

const Spinner = (color: ColorsEnum | null) => {
  if (color == ColorsEnum.White) {
    return (
      <div className="loader loader--white">Nous chargeons les données...</div>
    );
  }
  return (
    <div className="loader loader--orange">Nous chargeons les données...</div>
  );
};

export default Spinner;
