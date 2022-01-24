import React from 'react';
import { StepSwitcherConnected } from 'alltypes';

import FormStepThree from './FormStepThree';
import FormStepTwoConnected from './FormStepTwoConnected';

function formSwitcherConnected({
  activeStep,
  handleNext,
  handlePrevious,
  handleFinish,
  formContent,
  setChildrenContent,
  data,
}: StepSwitcherConnected): JSX.Element {
  switch (activeStep) {
    case 0:
      return (
        <FormStepTwoConnected
          data={data}
          formContent={formContent}
          handleNext={handleNext}
          setContent={setChildrenContent}
          hasPrevious //set to true
        />
      );
      break;

    case 1:
      return (
        <FormStepThree
          handleFinish={handleFinish}
          handlePrevious={handlePrevious}
          formContent={formContent}
          data={data}
        />
      );
      break;
    default:
      return <p>An error occured could not determine which form to display</p>;
      break;
  }
}

export default formSwitcherConnected;
