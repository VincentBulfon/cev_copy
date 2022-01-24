import React from 'react';
import Title from 'components/atoms/Title';
import ContentWrapper, {
  ContentWrapperDiv,
} from 'components/components/ContentWrapper';
import FormField from 'components/components/FormField';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import { useIsAdmin } from 'hooks/useIsAdminHook';
import { gql } from '@apollo/client';

import client from 'providers/apollo-provider';
import {
  GetOptionLastPrice,
  GetOptionLastPrice_options,
} from 'operations/__generated__/GetOptionLastPrice';
import { useUserInput } from 'hooks/useUserInput';
import { NameEnum } from 'operations/__generated__/globalTypes';
import { handleChangeType } from 'alltypes';
import Head from 'next/head';

function prices({ options }: { options: GetOptionLastPrice_options[] }) {
  const priceForm: HTMLFormElement | null =
    document.querySelector('#priceForm');

  const handleReset = priceForm ? priceForm.reset() : null;

  const filterOpts = (string: NameEnum): GetOptionLastPrice_options => {
    return options.filter(opt => {
      if (opt.name == string) {
        return opt;
      }
    })[0];
  };

  //default value for cotisations
  // const baseCoti1 = useUserInput(filterOpts(NameEnum.MEMBERSH1PFEE1));
  // const baseCoti2 = useUserInput(filterOpts(NameEnum.MEMBERSHIPFEE2));
  // const baseCoti3 = useUserInput(filterOpts(NameEnum.INSSURANCE));

  //new values for cotisations
  const coti1 = useUserInput(filterOpts(NameEnum.MEMBERSH1PFEE1).price.price);
  const coti2 = useUserInput(filterOpts(NameEnum.MEMBERSHIPFEE2).price.price);
  const inss = useUserInput(filterOpts(NameEnum.INSSURANCE).price.price);

  return (
    useIsAdmin() && (
      <>
        <Head>
          <title>CEV - gestion des prix</title>
        </Head>
        <HeroWithoutImg title="Gestion">
          <ContentWrapper className="content__wrapper--nt">
            <Title content="Prix des cotisations">
              <svg
                className="title__svg"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#ff8b17"
                  d="M16.943 0l-.427.384L.939 16.132 0 17.07l.939.981 12.974 12.974.981.939.939-.94L31.581 15.45l.384-.427V0H16.943zm1.152 2.731h11.139V13.87l-14.34 14.254L3.841 17.07 18.095 2.73zm7.042 2.732c-.753 0-1.366.613-1.366 1.365s.613 1.366 1.366 1.366c.752 0 1.365-.614 1.365-1.366 0-.752-.613-1.365-1.365-1.365zM14.083 9.474l-.939.94.854.853c-.155.133-.32.234-.47.384a7.016 7.016 0 00-.554.64l-.854-.854-.981.982 1.067 1.067c-1.185 2.299-1.051 5.052.768 6.87 1.125 1.126 2.672 1.617 4.182 1.537l-.128-2.731c-.843.042-1.6-.192-2.134-.726v-.042c-.667-.689-.885-1.766-.597-2.86l2.134 2.134.938-.939-2.475-2.475c.16-.24.336-.464.555-.683a4.08 4.08 0 01.427-.384l2.518 2.518.981-.982-2.219-2.219c1.206-.421 2.411-.234 3.158.512.534.534.768 1.243.726 2.092l2.73.17c.08-1.51-.415-3.056-1.535-4.182-1.169-1.168-2.732-1.66-4.31-1.536-.966.074-1.932.432-2.817.938l-1.025-1.024zm0 0"
                  stroke="null"
                />
              </svg>
            </Title>
            <ContentWrapperDiv className="content__wrapper--fw">
              <form action="" className="priceForm">
                <FormField
                  onChange={(e: handleChangeType) => {
                    coti1.handleChange(e.evt);
                  }}
                  value={coti1.value || 0}
                  uniqueKey="cotisation1"
                  name="cotisation_one"
                  className="form__field--inline form__field--euro"
                  content="Cotisation 1 :"
                  id="coti1"
                  type="number"
                  inputClassName="field__input--limited"
                />
                <FormField
                  onChange={(e: handleChangeType) => {
                    coti2.handleChange(e.evt);
                  }}
                  value={coti2.value || 0}
                  uniqueKey="cotisation2"
                  name="cotisation_two"
                  className="form__field--inline form__field--euro"
                  content="Cotisation 2 :"
                  id="coti2"
                  type="number"
                  inputClassName="field__input--limited"
                />
                <FormField
                  onChange={(e: handleChangeType) => {
                    inss.handleChange(e.evt);
                  }}
                  value={inss.value || 0}
                  uniqueKey="inssurance"
                  name="inssurance"
                  className="form__field--inline form__field--euro"
                  content="Assurance anuelle :"
                  id="ass"
                  type="number"
                  inputClassName="field__input--limited"
                />
                <div className="form__button__wrapper form__button__wrapper--small">
                  <button
                    onClick={() => {
                      handleReset;
                    }}
                    type="button"
                    className="form__button form__button--secondary form__button--half">
                    <span className="input__value">Reset</span>
                  </button>
                  <button
                    onClick={() => {
                      /**TODO:Add function here */
                    }}
                    type="button"
                    className="form__button form__button--main form__button--half ">
                    <span className="input__value">Valider</span>
                  </button>
                </div>
              </form>
            </ContentWrapperDiv>
          </ContentWrapper>
        </HeroWithoutImg>
      </>
    )
  );
}

export async function getServerSideProps() {
  const { data } = await client.query<GetOptionLastPrice>({
    query: gql`
      query GetOptionLastPrice {
        options {
          id
          price {
            id
            price
          }
          name
        }
      }
    `,
  });
  return {
    props: {
      options: data.options,
    },
  };
}

export default prices;
