import React from 'react';

import { StepSwitcher } from 'alltypes';
import FormStepOne from './FormStepOne';
import FormStepThree from './FormStepThree';
import FormStepTwo from './FormStepTwo';

function formSwitcher({
  activeStep,
  handleNext,
  handlePrevious,
  handleFinish,
  data,
  formContent,
  loading,
  setParentContent,
  setChildrenContent,
}: StepSwitcher): JSX.Element {
  switch (activeStep) {
    case 0:
      return (
        <FormStepOne
          options={{ options: data.data.options }}
          handleNext={handleNext}
          formContent={formContent}
          setContent={setParentContent}
        />
      );
    case 1:
      return (
        <FormStepTwo
          data={data}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          formContent={formContent}
          setContent={setChildrenContent}
        />
      );
    case 2:
      return (
        <FormStepThree
          handleFinish={handleFinish}
          handlePrevious={handlePrevious}
          formContent={formContent}
          data={data}
          loading={loading}
        />
      );
    default:
      return (
        <p>
          Une erreur est survenue nous ne pouvons pas déterminer quel formulaire
          afficher.
        </p>
      );
  }
}

export default formSwitcher;
