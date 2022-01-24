import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Title from 'components/atoms/Title';
import ContentWrapper from 'components/components/ContentWrapper';
import HeroWithoutImg from 'components/components/HeroWithoutImg';
import {
  childrenPartialContentType,
  childrenPartialContentUpdateType,
  formPartialContent,
  handleChangeType,
  parentContent,
} from 'alltypes';
import { useQuery } from '@apollo/client';
import { GET_USER_AND_CHILDREN_WITH_COURSES } from 'operations/queries/children';
import { isLoggedVar } from 'client/reactVars';
import FormUserInfo from 'components/components/FormUserInfo';
import ExistingChild from 'components/components/ExistingChild';
import {
  Get_User_And_Children_With_Courses,
  Get_User_And_Children_With_CoursesVariables,
} from 'operations/__generated__/Get_User_And_Children_With_Courses';
import { useIsAuthenticated } from 'hooks/useIsAuthenticatedHook';
import Head from 'next/head';

const me = () => {
  const [refreshData, setRefreshData] = useState(false);
  const [formContent, setFormContent] = useState<formPartialContent>({
    parentContent: {
      id: '',
      name: '',
      firstName: '',
      email: '',
      password: '',
      repeatPassword: '',
      phone: '',
      secondaryEmail: '',
    },
    childrenContent: [],
  });

  const { data, loading, refetch } = useQuery<
    Get_User_And_Children_With_Courses,
    Get_User_And_Children_With_CoursesVariables
  >(GET_USER_AND_CHILDREN_WITH_COURSES, {
    variables: {
      where: {
        id: {
          equals: isLoggedVar().isLogged,
        },
      },
    },
  });

  const refetchData = () => {
    refetch({
      where: {
        id: {
          equals: isLoggedVar().isLogged,
        },
      },
    });
    setRefreshData(true);
  };

  const cancelAction = () => {
    refetchData();
  };

  //Populate the fields when the data are loaded from the database
  useEffect(() => {
    setRefreshData(false);
    const user = data?.users[0];
    let children: childrenPartialContentType[] | null;
    if (user) {
      children = user.children
        ? user.children.map(child => {
            return {
              id: child.id,
              name: child.name,
              first_name: child.first_name,
              birth_date: child.birth_date,
              courses: child.courses,
            };
          })
        : null;
      setFormContent({
        parentContent: {
          id: user.id,
          name: user.name,
          email: user.email,
          firstName: user.first_name,
          phone: user.phone_number,
          secondaryEmail: user.secondary_email || '',
          password: '',
          repeatPassword: '',
        },
        childrenContent: children,
      });
    }
  }, [data, refreshData]);

  function setParentContent(content: Partial<parentContent>) {
    setFormContent({
      parentContent: { ...formContent.parentContent, ...content },
      childrenContent: formContent.childrenContent
        ? [...formContent.childrenContent]
        : null,
    });
  }

  function setChildrenContent(content: childrenPartialContentUpdateType) {
    if (content !== undefined) {
      setFormContent({
        parentContent: formContent.parentContent,
        childrenContent: content.children,
      });
    }
  }

  const handleChange = ({ evt, uniqueKey }: handleChangeType) => {
    const { name, value } = evt.target;

    const childList = formContent.childrenContent
      ? [...formContent.childrenContent]
      : null;

    if (childList != null) {
      if (name === 'name' || name === 'first_name' || name === 'birth_date') {
        childList[uniqueKey][name] = value;
      }
      setChildrenContent({ index: uniqueKey, children: childList });
    }
  };

  return (
    //Display the name of the title inside the page header.
    useIsAuthenticated() && (
      <>
        <Head>
          <title>CEV - profil</title>
        </Head>
        <HeroWithoutImg
          title={
            data?.users[0].first_name && data?.users[0].name
              ? `${data?.users[0].first_name} ${data?.users[0].name}`
              : ''
          }>
          <ContentWrapper className=" content__wrapper--nt content__wrapper--nf">
            <Title content="Mon compte">
              <Image
                src="/assets/pp.svg"
                alt="votre photo de profil"
                width="62"
                height="62"
              />
            </Title>
            {loading ? (
              <p>Nous chargeons les données relative à votre compte</p>
            ) : data ? (
              <>
                <form action="">
                  <FormUserInfo
                    canceAction={cancelAction}
                    formContent={formContent}
                    setContent={setParentContent}
                    handleNext={refetchData}></FormUserInfo>
                </form>
                {formContent.childrenContent ? (
                  <form action="">
                    {' '}
                    <h4 className="form__subtitle">
                      Information de l'/des enfants inscrits :
                    </h4>
                    {formContent.childrenContent &&
                      formContent.childrenContent.map((child, index) => {
                        return (
                          <ExistingChild
                            uniqueKey={index}
                            onChange={handleChange}
                            valueElmt={child}
                            courses={child.courses}
                            cancelAction={cancelAction}
                            validateAction={refetchData}
                          />
                        );
                      })}
                  </form>
                ) : (
                  <p>Aucun enfant n'est associé à cet utilisateur.</p>
                )}
              </>
            ) : (
              <p>
                Une erreur est survenue, n'hésitez pas à nous en faire part.
              </p>
            )}
          </ContentWrapper>
          <ContentWrapper>
            <h4 className="sro">Suppression du compte</h4>
            <p className="content__wrapper__text content__wrapper__text--small">
              Si vous souhaitez supprimer votre compte et toutes les donnes qui
              y sont associées cela est possible via le bouton ci-dessous.
            </p>
            <button type="button" className="cta cta--secondary cta--danger">
              <svg
                className="svg svg--danger svg--left"
                viewBox="0 0 26.8 32"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="null"
                  d="M10.7 0C10 0 9.3.2 8.8.8c-.5.5-.7 1.2-.7 1.9V4H0v2.7h1.3V28a4 4 0 004 4h16a4 4 0 004-4V6.7h1.3V4h-8V2.7c0-.7-.2-1.4-.7-2-.5-.5-1.2-.7-2-.7h-5.3zm0 2.7h5.4V4h-5.4V2.7zm-6.6 4h18.6V28c0 .8-.6 1.4-1.3 1.4h-16c-.7 0-1.3-.6-1.3-1.4V6.7zm2.6 4v14.7h2.7V10.7H6.7zm5.4 0v14.7h2.6V10.7h-2.6zm5.3 0v14.7h2.7V10.7h-2.7z"
                />
              </svg>{' '}
              Supprimer mon compte
            </button>
          </ContentWrapper>
        </HeroWithoutImg>
      </>
    )
  );
};

export default me;
