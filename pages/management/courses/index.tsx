import React from 'react';
import Title from 'components/atoms/Title';

import HeroWithoutImg from 'components/components/HeroWithoutImg';
import ContentWrapper, {
  ContentWrapperDiv,
} from 'components/components/ContentWrapper';
import { Dd, Dt } from 'components/atoms/Datalist';
import DotOption from 'components/atoms/DotOption';
import CallToAction from 'components/moleculs/CallToAction';
import { useIsAdmin } from 'hooks/useIsAdminHook';
import { GetCourseWithoutOccuptation_courses } from 'operations/__generated__/GetCourseWithoutOccuptation';
import dayjs from 'config/dayjs';
import { getCourseStringWithoutOccupation } from 'helpers/strings';
import { useQuery } from '@apollo/client';
import { GET_COURSE_ORDERED_BY_START_TIME } from 'operations/queries/courses';
import { GetCoursesOrderedByStartTime } from 'operations/__generated__/GetCoursesOrderedByStartTime';
import Head from 'next/head';

const Management = () => {
  const {
    data: courses,
    // loading: coursesLoading,
    // error: coursesError,
  } = useQuery<GetCoursesOrderedByStartTime>(GET_COURSE_ORDERED_BY_START_TIME);
  const filterCourses = (dayOfWeek: number) => {
    const filtredCourses: GetCourseWithoutOccuptation_courses[] = [];
    courses?.courses.forEach(course => {
      if (course.day_of_week == dayOfWeek) {
        filtredCourses.push(course);
      }
    });

    return filtredCourses;
  };

  //NOTE: Temporary cheat to get the job done this is not clean but it works.
  const dayOfTheWeek = [1, 2, 3, 4, 5, 6, 7];

  return (
    //Display the name of the title inside the page header.
    useIsAdmin() && (
      <>
        <Head>
          <title>CEV - liste des cours</title>
        </Head>
        <HeroWithoutImg title="Gestion">
          <ContentWrapper className="content__wrapper--nt">
            <Title content="Heures de cours">
              <svg
                className="title__svg"
                xmlns="http://www.w3.org/2000/svg"
                width="35.039"
                height="35.039"
                viewBox="0 0 35.039 35.039">
                <path
                  id="icons8-clock"
                  d="M21.519,4A17.519,17.519,0,1,0,39.039,21.519,17.538,17.538,0,0,0,21.519,4Zm0,2.92a14.6,14.6,0,1,1-14.6,14.6A14.576,14.576,0,0,1,21.519,6.92Zm-1.46,2.92V22.979h10.22v-2.92h-7.3V9.84Z"
                  transform="translate(-4 -4)"
                  fill="#ffa98f"
                />
              </svg>
            </Title>
            {/* #TODO replace content attribute by content from DB */}
            <ContentWrapperDiv className="content__wrapper--fw">
              {dayOfTheWeek.map(day => {
                console.log(filterCourses(day));
              })}
              {courses?.courses.length ? (
                <dl className="dl dl--courses">
                  {dayOfTheWeek.map(day => {
                    const filtredCourses = filterCourses(day);
                    const response: any[] = [];
                    if (filtredCourses.length) {
                      response.push(
                        <Dt className="dt--left">
                          {dayjs()
                            .day(filtredCourses[0].day_of_week)
                            .format('dddd')}
                           :
                        </Dt>,
                      );
                      const courses = filtredCourses.map(course => {
                        return (
                          <>
                            <Dd>{`${dayjs(course.start_time).format(
                              'HH:mm',
                            )}-${dayjs(course.end_time).format('HH:mm')}`}</Dd>
                            <DotOption
                              coursePlaces={course.places}
                              courseId={course.id}
                              date={new Date() /**TODO:Add date here */}
                              content={`Options pour le cours du 
                          ${getCourseStringWithoutOccupation(course)}
                          `}
                            />
                          </>
                        );
                      });
                      response.push(courses);
                      return response;
                    }
                  })}
                </dl>
              ) : (
                <p className="dl">
                  Il n'y a aucun cours prévu pour le momment.
                </p>
              )}
            </ContentWrapperDiv>

            <CallToAction
              main
              name="Ajouter un cours"
              to="/management/courses/create">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                viewBox="0 0 31 32"
                className="svg svg--left">
                <path
                  stroke="null"
                  d="M15.5.06C6.97.06.02 7.2.02 16c0 8.8 6.95 15.94 15.48 15.94 8.53 0 15.48-7.15 15.48-15.94C30.98 7.2 24.03.06 15.5.06zm0 2.45c7.25 0 13.1 6.03 13.1 13.49s-5.85 13.5-13.1 13.5S2.4 23.45 2.4 16 8.25 2.5 15.5 2.5zm-1.2 7.36v4.9H9.56v2.46h4.76v4.9h2.38v-4.9h4.76v-2.46H16.7v-4.9h-2.38z"></path>
              </svg>
            </CallToAction>
          </ContentWrapper>
        </HeroWithoutImg>
      </>
    )
  );
};

// export async function getServerSideProps() {
//   const { data } = await client.query<GetCourseWithoutOccuptation>({
//     query: gql`
//       query Courses {
//         courses {
//           id
//           day_of_week
//           start_time
//           end_time
//         }
//       }
//     `,
//   });

//   return { props: { data } };
// }

export default Management;
