import {
  childrenContentType,
  formContent,
  formContentWithoutParent,
  parentContent,
} from './FormContentType';
import { Children } from './ChildrenPropTypes';

import { SubDataType } from './SubTypes';

type activeStep = { activeStep: number };
type isStep = { isStep: number };
type elmt = { elmt: Element };

export interface StartStep
  extends Partial<Children>,
    Partial<activeStep>,
    Partial<isStep>,
    Partial<elmt>,
    Partial<Children> {
  handleNext?: Function;
}

export interface NormalStep
  extends Partial<activeStep>,
    Partial<isStep>,
    Partial<elmt> {
  handleNext: Function;
  handlePrevious?: Function;
  data: SubDataType;
  formContent: formContent | formContentWithoutParent;
  setContent: setChildrenContentType;
  hasPrevious?: boolean;
}

export interface FinishStep
  extends Partial<activeStep>,
    Partial<isStep>,
    Partial<elmt> {
  handleFinish: Function;
  handlePrevious: Function;
  formContent: formContent | formContentWithoutParent;
  data: SubDataType;
  loading?: boolean;
}

export interface FinishStepConnected
  extends Partial<activeStep>,
    Partial<isStep>,
    Partial<elmt> {
  handleFinish: Function;
  handlePrevious: Function;
  formContent: formContentWithoutParent;
  data: SubDataType;
}

export interface StepSwitcher
  extends Omit<NormalStep, 'isStep' | 'setContent' | 'handlePrevious'>,
    Partial<elmt> {
  handleFinish: Function;
  handlePrevious: Function;
  formContent: formContent;
  loading: boolean;
  setParentContent: setParentContentType;
  setChildrenContent: setChildrenContentType;
}

export interface StepSwitcherConnected
  extends Omit<
      NormalStep,
      'isStep' | 'setContent' | 'formContent' | 'handlePrevious'
    >,
    Partial<elmt> {
  handlePrevious: Function;
  handleFinish: Function;
  formContent: formContentWithoutParent;
  setChildrenContent: setChildrenContentType;
}

export type setParentContentType = (content: Partial<parentContent>) => void;
export type setChildrenContentType = (content: childrenContentType) => void;
