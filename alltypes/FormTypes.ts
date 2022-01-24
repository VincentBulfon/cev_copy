import { GetCoursesDate_courses } from 'operations/__generated__/GetCoursesDate';
import { GetData } from 'operations/__generated__/GetData';

import {
  ChildrenErrorsType,
  ChildrenStateType,
  ChildrenStateWithIdType,
  formPartialContent,
} from 'alltypes';
import { Children } from './ChildrenPropTypes';
import { Content } from './ContentTypes';
import { formContent } from './FormContentType';
import { setParentContentType } from './FormStepsTypes';
import { Get_User_And_Children_With_Courses_users_children_courses } from 'operations/__generated__/Get_User_And_Children_With_Courses';

export interface FormField
  extends Partial<Children>,
    Content,
    Omit<Unique, 'onChange' | 'onRemove'> {
  id: string;
  info?: string;
  type?: string;
  checked?: boolean;
  className?: string;
  inputClassName?: string;
  name: string;
  error?: string | null;
  onChange: Function;
  value: string | number;
  placeholder?: string;
}

export type Unique = {
  uniqueKey: string | number;
  onChange: Function;
  onRemove: Function;
  showDelete?: boolean;
  valueElmt?: ChildrenStateType;
  errors?: ChildrenErrorsType;
  courses?: GetCoursesDate_courses[];
};

export type UniqueUpdate = {
  uniqueKey: string | number;
  onChange: Function;
  showUpdate?: boolean;
  valueElmt: ChildrenStateWithIdType;
  errors?: ChildrenErrorsType;
  courses: Get_User_And_Children_With_Courses_users_children_courses[] | null;
  validateAction?: Function;
  cancelAction: Function;
};

export type FormStepOneType = {
  children?: React.ReactNode;
  handleNext: Function;
  formContent: formContent;
  setContent: setParentContentType;
  options?: Omit<GetData, 'courses'>;
};

export type FormUserInfoType = {
  children?: React.ReactNode;
  handleNext: Function;
  formContent: formPartialContent;
  setContent: setParentContentType;
  options?: Omit<GetData, 'courses'>;
  canceAction: Function;
};
