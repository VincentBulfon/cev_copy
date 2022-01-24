import React, { useEffect, useState } from 'react';

import Title from 'components/atoms/Title';

import HeroWithoutImg from 'components/components/HeroWithoutImg';
import ContentWrapper, {
  ContentWrapperDiv,
} from 'components/components/ContentWrapper';
import UserRow from 'components/moleculs/UserRow';
import { BtnMain } from 'components/moleculs/Btn';

import { Dd, Dt } from 'components/atoms/Datalist';
import client from 'providers/apollo-provider';
import { gql, useQuery } from '@apollo/client';
import { getCourseString } from 'helpers/strings';
import {
  GetCoursesDate,
  GetCoursesDate_courses,
} from 'operations/__generated__/GetCoursesDate';
import { GET_CHILDREN_FROM_COURSE_QUERY } from 'operations/queries/children';
import {
  Get_Children_From_Course_Query,
  Get_Children_From_Course_QueryVariables,
} from 'operations/__generated__/Get_Children_From_Course_Query';
import { ChildrenWhereInput } from 'operations/__generated__/globalTypes';
import { useIsAuthenticated } from 'hooks/useIsAuthenticatedHook';
import { useIsAdmin } from 'hooks/useIsAdminHook';
import Head from 'next/head';

const Management = (props: { data: GetCoursesDate }) => {
  useIsAuthenticated();

  const [search, setSearch] = useState<string>('');
  const [course, setCourse] = useState<number>(props.data.courses[0].id || 0);

  //course where input, is updated when state change
  const where: ChildrenWhereInput = {
    AND: [
      {
        ChildrenOnCourse: {
          some: {
            courseId: {
              equals: course,
            },
          },
        },
        OR: [
          {
            name: {
              startsWith: search,
            },
          },
          {
            first_name: {
              startsWith: search,
            },
          },
        ],
      },
    ],
  };

  //Get children from selected course
  const {
    data: childrenList,
    loading: childrenListLoading,
    refetch,
  } = useQuery<
    Get_Children_From_Course_Query,
    Get_Children_From_Course_QueryVariables
  >(GET_CHILDREN_FROM_COURSE_QUERY, {
    variables: {
      where,
    },
  });

  const handleChange = (e: { target: HTMLSelectElement }) => {
    setCourse(parseInt(e.target.value));
  };

  let filterTimeOut: NodeJS.Timeout;

  //NOTE: talk about debounce, debounce can be put in custom hook called,
  // with useDebounce
  const handleSearch = (e: { target: HTMLInputElement }) => {
    clearTimeout(filterTimeOut);

    filterTimeOut = setTimeout(() => {
      const upString =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

      setSearch(upString);
    }, 500);
  };

  useEffect(() => {
    refetch({ where });
  }, [course]);

  return (
    //Display the name of the title inside the page header.
    useIsAdmin() && (
      <>
        <Head>
          <title>CEV - liste des inscrits</title>
        </Head>
        <HeroWithoutImg title="Gestion">
          <ContentWrapper className="content__wrapper--nt">
            <Title content="Liste des inscrits">
              <svg
                className="title__svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 32 32">
                <path
                  stroke="null"
                  d="M0 0v32h12.5V0H0zm2.8 2.8h7v7h-7v-7zm1.4 1.4v4.1h4.1V4.2H4.2zm11 0v2.7h7V4.2h-7zm9.8 0v2.7h7V4.2h-7zM2.8 12.5h7v7h-7v-7zm3.4 1.4a2 2 0 100 4.2 2 2 0 000-4.2zm9 0v2.8h7v-2.8h-7zm9.8 0v2.8h7v-2.8h-7zM2.8 22.2h7v7h-7v-7zm3.4 1.4l-2 4.2h4.1l-2-4.2zm9 0v2.8h7v-2.8h-7zm9.8 0v2.8h7v-2.8h-7z"
                />
              </svg>{' '}
            </Title>
            <ContentWrapperDiv className="content__wrapper--fw">
              <label htmlFor="course" className="field__label">
                Sélctionnez une ou plusieurs heures de cours :
              </label>
              {props.data.courses ? (
                <select
                  defaultValue={course}
                  className="courses field__input"
                  id="course"
                  onChange={(e: { target: HTMLSelectElement }) => {
                    handleChange(e);
                  }}
                  name="course_id">
                  <option value="select" disabled>
                    Sélectionnez un cours
                  </option>
                  {props.data.courses.map(
                    (course: GetCoursesDate_courses, index: number) => {
                      return (
                        <option key={index} value={course.id}>
                          {getCourseString(course)}
                        </option>
                      );
                    },
                  )}
                </select>
              ) : (
                <option disabled>
                  Aucun cours disponnible acutellement (cela peut être dû à une
                  erreur).
                </option>
              )}
              <p className="content__wrapper__text--sb">
                Liste des membre pour la/les heures choisies :
              </p>
              <div className="table__main__wrapper">
                <form action="" className="table__search">
                  <div className="form__field form__field--search">
                    <label htmlFor="search" className="field__label sro">
                      Rechercher
                    </label>
                    <input
                      id="search"
                      type="text"
                      className="field__input"
                      onChange={e => {
                        handleSearch(e);
                      }}
                    />
                  </div>
                  <button type="submit" className="search__btn">
                    <svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#004546"
                      viewBox="0 0 32 32">
                      <path
                        stroke="null"
                        d="M19.6 0a12.5 12.5 0 00-9.7 20.3L0 30.3 1.8 32l10-9.9A12.5 12.5 0 1019.6 0zm0 2.5a10 10 0 110 20 10 10 0 110-20z"
                      />
                    </svg>
                    <span className="sro">Rechercher</span>
                  </button>
                </form>
                <div className="table__wrapper">
                  <table className="members__table">
                    <thead className="table__header">
                      <tr className="table__row">
                        <th className="table__th" scope="col">
                          Élève
                        </th>
                        <th className="table__th" scope="col">
                          Gsm
                        </th>
                        <th className="table__th" scope="col">
                          C25
                        </th>
                        <th className="table__th" scope="col">
                          Coti 1
                        </th>
                        <th className="table__th" scope="col">
                          Coti 2
                        </th>
                        <th className="table__th" scope="col">
                          Assurance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {childrenList?.children[0] != null ? (
                        <UserRow content={childrenList.children}></UserRow>
                      ) : childrenListLoading ? (
                        <tr className="table__row" key="no_user">
                          <td className="table__data" colSpan={6}>
                            <div className="loader loader--orange">
                              <span className="sro">
                                Nous chargeons les données, veuillez patienter
                              </span>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        <tr className="table__row" key="no_user">
                          <td className="table__data" colSpan={6}>
                            Aucun enfant n'est inscrit à ce cours.
                          </td>
                        </tr>
                      )}
                    </tbody>
                    <tfoot className="table__footer">
                      <tr className="table__footer__row">
                        {/* user count for course here */}
                        <td colSpan={9} className="table__footer__row">
                          <dl className="dl table--dl">
                            <Dt>Total des inscrits à ce cours :</Dt>
                            <Dd>
                              {props.data.courses.map(elmt => {
                                if (elmt.id === course) {
                                  return elmt.occupation;
                                }
                              })}
                            </Dd>
                          </dl>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <BtnMain
                  onClick={() => {
                    window.print();
                  }}>
                  <svg
                    className="svg svg--left"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    viewBox="0 0 24 32">
                    <path
                      stroke="null"
                      d="M10.7 0v22l-7-7-2 2 9.3 9.3 1 .9 1-1 9.3-9.3-2-1.9-7 7V0h-2.6zM0 29.3V32h24v-2.7H0z"
                    />
                  </svg>{' '}
                  Télécharger en PDF
                </BtnMain>
              </div>
            </ContentWrapperDiv>
          </ContentWrapper>
        </HeroWithoutImg>
      </>
    )
  );
};

//get info before page display is displayed on client side
export async function getServerSideProps() {
  const { data } = await client.query<GetCoursesDate>({
    query: gql`
      query GetCoursesInfos {
        courses {
          id
          day_of_week
          start_time
          end_time
          occupation
          places
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
}

export default Management;
