import { Step } from 'alltypes';

function getClassFromStep({ currentStep, elementStep }: Step): string {
  if (currentStep === elementStep) {
    return 'progress__step--current';
  }
  if (currentStep > elementStep) {
    return 'progress__step--done';
  }
  return '';
}

export default getClassFromStep;
