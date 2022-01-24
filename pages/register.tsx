import React from 'react';

import dayjs from 'config/dayjs';
import Sub from 'components/components/Sub';
import Hero from 'components/components/Hero';
import client from 'providers/apollo-provider';
import { isLoggedVar } from 'client/reactVars';
import { InferGetServerSidePropsType } from 'next';
import { ApolloQueryResult, gql } from '@apollo/client';
import ClosedSub from 'components/components/ClosedSub';
import { GetData } from 'operations/__generated__/GetData';
import SubConnected from 'components/components/SubConnected';
import ContentWrapper from 'components/components/ContentWrapper';
import Head from 'next/head';

const register = ({
  data: CourseAndOptions,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //NOTE:Talk about this.
  //no need to user memo since the date change all the time,
  //we could use maybe only the day number insinde the array
  //this is fully functionnal as we update the definined year with the current one
  const isClosed = dayjs().isBetween(
    dayjs('2021-7-1').set('year', dayjs().year()),
    dayjs('2021-8-31').set('year', dayjs().year()),
    'month',
    '[]',
  );

  return (
    <>
      <Head>
        <title>CEV - S'inscrire</title>
        <meta property="og:title" content="CEV - S'inscrire" key="og_title" />
        <meta
          property="og:description"
          content="S'inscrire sur le site du Club d'esclade Visétois"
          key="og_description"
        />
        <meta property="og:title" content="CEV - S'inscrire" key="title" />
        <meta
          property="og:description"
          content="S'inscrire sur le site du Club d'esclade Visétois"
        />
      </Head>
      <Hero
        title="Inscriptions"
        src="/assets/indoor_waiting.jpeg"
        width={4000}
        height={6000}>
        <div className="bg__container">
          <ContentWrapper className="content__wrapper--white  content__wrapper--nt">
            {isLoggedVar().isLogged != '' ? (
              <SubConnected data={CourseAndOptions} />
            ) : isClosed ? (
              <ClosedSub />
            ) : (
              <Sub data={CourseAndOptions} />
            )}
          </ContentWrapper>
        </div>
      </Hero>
    </>
  );
};

export async function getServerSideProps() {
  const { data }: ApolloQueryResult<GetData> = await client.query({
    query: gql`
      query getData {
        courses {
          id
          day_of_week
          start_time
          end_time
          occupation
          places
        }
        options {
          price {
            price
            id
          }
          name
          id
        }
      }
    `,
  });

  return { props: { data } };
}

export default register;
