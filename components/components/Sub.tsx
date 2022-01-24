import React, { useEffect, useState } from 'react';

import FormSwitcher from './FormSwitcher';
import Title from 'components/atoms/Title';
import { useMutation } from '@apollo/client';
import getClassFromStep from 'helpers/getClassFromStep';
import { CREATE_CHILDREN_MUTATION } from 'operations/mutations/singup';

import {
  childrenContentType,
  formContent,
  parentContent,
  SubDataType,
} from 'alltypes';

import {
  CreateChildren,
  CreateChildrenVariables,
} from 'operations/__generated__/CreateChildren';
import { isAdminVar, isLoggedVar } from 'client/reactVars';
import { useRouter } from 'next/dist/client/router';
import { RoleEnum } from 'operations/__generated__/globalTypes';

const Sub = (data: SubDataType) => {
  const [step, setStep] = useState(0);
  const [payNow, setPayNow] = useState(false);
  const [formContent, setFormContent] = useState<formContent>({
    parentContent: {
      name: '',
      firstName: '',
      email: '',
      password: '',
      repeatPassword: '',
      phone: '',
      secondaryEmail: '',
    },
    childrenContent: [
      {
        name: '',
        first_name: '',
        birth_date: '',
        course_id: 9999999,
        voucher: false,
        tutor: '',
      },
    ],
  });

  const router = useRouter();

  function setParentContent(content: Partial<parentContent>) {
    setFormContent({
      parentContent: { ...formContent.parentContent, ...content },
      childrenContent: [...formContent.childrenContent],
    });
  }

  function setChildrenContent(content: childrenContentType) {
    setFormContent({ ...formContent, childrenContent: [...content] });
  }

  const [createUser, { data: mutationData, error, loading }] = useMutation<
    CreateChildren,
    CreateChildrenVariables
  >(CREATE_CHILDREN_MUTATION, {
    variables: {
      childrenList: formContent.childrenContent.map(child => {
        return {
          birth_date: child.birth_date,
          first_name: child.first_name,
          name: child.name,
          tutor: {
            connectOrCreate: {
              where: {
                email: formContent.parentContent.email,
              },
              create: {
                email: formContent.parentContent.email,
                name: formContent.parentContent.name,
                password: formContent.parentContent.password,
                first_name: formContent.parentContent.firstName,
                phone_number: formContent.parentContent.phone,
                secondary_email:
                  formContent.parentContent.secondaryEmail || null,
              },
            },
          },
          ChildrenOnCourse: {
            connect: [
              {
                courseId_childrenId: {
                  childrenId: 0,
                  courseId: child.course_id,
                },
              },
            ],
          },
          Orders: {
            create: [
              {
                sport_voucher: child.voucher,
                options_set: {
                  createMany: {
                    data: data.data.options.map(opt => {
                      return {
                        option_id: opt.id,
                        price_id: opt.price.id,
                      };
                    }),
                  },
                },
              },
            ],
          },
        };
      }),
    },
  });

  useEffect(() => {
    if (mutationData && !error) {
      console.log(mutationData);

      if (
        mutationData.createChildren?.token.token ||
        mutationData.createChildren?.token.userId
      ) {
        //Store the token inside the localstorage
        localStorage.setItem(
          'token',
          mutationData.createChildren?.token.token || '',
        );
        //store the user id inside the is reactiveVar
        isLoggedVar({ isLogged: mutationData.createChildren?.token.userId });
        isAdminVar({
          isAdmin:
            mutationData.createChildren?.token.userRole === RoleEnum.ADMIN ||
            mutationData.createChildren?.token.userRole === RoleEnum.MONITOR,
        });
      }
      if (payNow) {
        router.push('/pay');
      }
      router.push('/');
      return;
    }
    if (error) {
    }
  }, [mutationData, payNow]);

  useEffect(() => {
    if (error) {
      //
    }
  }, [error]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleFinish = (payNow: boolean) => {
    setPayNow(payNow);
    createUser();
  };

  return (
    <>
      <Title id="sub_title" content="Créer un compte">
        <svg
          className="title__svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="#004546"
          viewBox="0 0 32 32">
          <path
            stroke="null"
            d="M28 .06c-1.03 0-2.03.4-2.8 1.16L12.01 14.37l-.29.3-.08.41-.92 4.66-.41 1.96 1.95-.42 4.66-.91.42-.09.29-.29L30.78 6.8A3.95 3.95 0 0028 .07zm0 2.58c.3 0 .61.16.9.45.6.6.6 1.24 0 1.84L16 17.83l-2.28.46.46-2.3 12.9-12.9c.3-.3.6-.45.91-.45zM.02 5.34v26.64h26.63V14.42L24 17.08V29.3H2.69V8.01h12.23l2.67-2.67H.03z"
          />
        </svg>
      </Title>
      <p className="content__wrapper__text">
        Veuillez remplir les champs et les différentes étapes ci-dessous votre
        compte sera automatiquement créé à la fin de l'inscription des ces trois
        étapes.
      </p>
      <div className="progress__panel">
        <ol className="progress__steps">
          <li
            className={`progress__step ${getClassFromStep({
              currentStep: step,
              elementStep: 0,
            })}`}>
            <div className="progress__step__number">
              <span className="step__number__content">1</span>
              <svg
                className="step__number__achieved"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 26 26">
                <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z" />
              </svg>
            </div>
            <p className="progress__step__name">
              Créez votre compte avec vos information de contact
            </p>
          </li>
          <li
            className={`progress__step ${getClassFromStep({
              currentStep: step,
              elementStep: 1,
            })}`}>
            <div className="progress__step__number">
              <span className="step__number__content">2</span>
              <svg
                className="step__number__achieved"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 26 26">
                <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z" />
              </svg>
            </div>
            <p className="progress__step__name">
              Information de la/les personne(s) inscrite(s)
            </p>
          </li>
          <li
            className={`progress__step ${getClassFromStep({
              currentStep: step,
              elementStep: 2,
            })}`}>
            <div className="progress__step__number">
              <span>3</span>
              <svg
                className="step__number__achieved"
                xmlns="http://www.w3.org/2000/svg"
                fill="#004546"
                viewBox="0 0 26 26">
                <path d="M13 0a13 13 0 100 26A13 13 0 0025.3 9l-1.6 1.5A11 11 0 0113 24 11 11 0 012 13a11 11 0 0118.6-8L22 3.8A12.7 12.7 0 0013 0zm11.3 4.3L13 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 12-12-1.4-1.4z" />
              </svg>
            </div>
            <p className="progress__step__name">Moyen de paiement</p>
          </li>
        </ol>
      </div>{' '}
      <form action="" className="form__contact__person">
        <FormSwitcher
          loading={loading}
          data={data}
          activeStep={step}
          handleNext={handleNext}
          formContent={formContent}
          handleFinish={handleFinish}
          handlePrevious={handlePrevious}
          setParentContent={setParentContent}
          setChildrenContent={setChildrenContent}
        />
      </form>
    </>
  );
};

export default Sub;
