import React from 'react';
import Title from 'components/atoms/Title';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import ContentWrapper from 'components/components/ContentWrapper';
import SubscriptionElement from 'components/components/Subscription';
import { useQuery } from '@apollo/client';
import { GET_CHILD_AND_COURSES } from 'operations/queries/children';
import {
  GetChildAndCourse,
  GetChildAndCourseVariables,
} from 'operations/__generated__/GetChildAndCourse';
import { useRouter } from 'next/dist/client/router';
import { useIsAdmin } from 'hooks/useIsAdminHook';
import Spinner from 'components/components/Spinner';
import Head from 'next/head';

const course = () => {
  useIsAdmin();
  //get router param
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  let childId: number;
  if (typeof id == 'string') {
    childId = parseInt(id);
  } else {
    childId = 0;
  }

  const { data, loading } = useQuery<
    GetChildAndCourse,
    GetChildAndCourseVariables
  >(GET_CHILD_AND_COURSES, {
    variables: {
      where: { id: { equals: childId } },
    },
  });

  return (
    //Display the name of the title inside the page header.
    useIsAdmin() && (
      <>
        <Head>
          <title>CEV - status de l'inscrit</title>
        </Head>
        <HeroWithoutImg title="Gestion">
          <ContentWrapper className="content__wrapper--nt">
            <Title
              content={`${data?.children[0].first_name || 'loading'} ${
                data?.children[0].name || ''
              }`}>
              <svg
                className="title__svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 32 32">
                <path
                  d="M16 0a16 16 0 100 32 16 16 0 000-32zm0 2.5a13.5 13.5 0 110 27 13.5 13.5 0 010-27zm0 3.7A6 6 0 0012 17a8.6 8.6 0 00-4.6 7.6H10a6.1 6.1 0 1112.2 0h2.5c0-3.3-1.9-6.2-4.7-7.6A6 6 0 0016 6.2zm0 2.5c2 0 3.7 1.6 3.7 3.6S18 16 16 16s-3.7-1.6-3.7-3.7c0-2 1.7-3.6 3.7-3.6z"
                  stroke="null"
                />
              </svg>
            </Title>
            {data?.children[0].order ? (
              <SubscriptionElement
                id={1}
                order={data?.children[0].order}
                courses={data?.courses}
                currentCourse={
                  data?.children[0].currentCourse?.course?.id || null
                }
              />
            ) : loading ? (
              Spinner(null)
            ) : (
              <p> Cette enfant n'as pas d'inscription active</p>
            )}
          </ContentWrapper>
        </HeroWithoutImg>
      </>
    )
  );
};

export default course;
