import React from 'react';

import { PayementType } from 'alltypes/PayementType';
import { Dd, Dt } from 'components/atoms/Datalist';

//@ts-ignore
const Payements = ({ data }: PayementType) => {
  return (
    //   return dl constructed from obj in data with a loop
    <dl>
      <Dt dash className="dt--grid">
        Cotisation 2 :
      </Dt>
      <Dd className="dd--grid">Le 13février 2021</Dd>
      <Dt dash className="dt--grid">
        Cotisation 1 et assurance :
      </Dt>
      <Dd className="dd--grid">Le 20 septembre 2020</Dd>
      <Dt dash className="dt--grid">
        Cotisation 2  :
      </Dt>
      <Dd className="dd--grid">Le 13février 2021</Dd>
      <Dt dash className="dt--grid">
        Cotisation 1 et assurance :
      </Dt>
      <Dd className="dd--grid">Le 20 septembre 2020</Dd>
      <Dt dash className="dt--grid">
        Cotisation 2 :
      </Dt>
      <Dd className="dd--grid">Le 13février 2021</Dd>
      <Dt dash className="dt--grid">
        Cotisation 1 et assurance :
      </Dt>
      <Dd className="dd--grid">Le 20 septembre 2020</Dd>
      <Dt dash className="dt--grid">
        Cotisation 2 :
      </Dt>
      <Dd className="dd--grid">Le 13février 2021</Dd>
      <Dt dash className="dt--grid">
        Cotisation 1 et assurance :
      </Dt>
      <Dd className="dd--grid">Le 20 septembre 2020</Dd>
      <Dt dash className="dt--grid">
        Cotisation 2 :
      </Dt>
      <Dd className="dd--grid">Le 13février 2021</Dd>
      <Dt dash className="dt--grid">
        Cotisation 1 et assurance :
      </Dt>
      <Dd className="dd--grid">Le 20 septembre 2020</Dd>
    </dl>
  );
};

export default Payements;
