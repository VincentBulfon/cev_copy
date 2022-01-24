import { ChildrenStateType } from 'alltypes';
import { Get_User_And_Children_With_Courses_users_children_courses } from 'operations/__generated__/Get_User_And_Children_With_Courses';
import { ChildrenErrorsType } from './ChildrenTypes';

export type formContent = {
  parentContent: parentContent;
  childrenContent: childrenContentType;
};

export type formPartialContent = {
  parentContent: parentContentWithId;
  childrenContent: childrenPartialContentType[] | null | [];
};

export type formContentWithoutParent = {
  childrenContent: childrenContentType;
};

export type formErrors = {
  parentErrors: parentErrors;
  childrenError: childrenErrors;
};

export type parentContent = {
  name: string;
  firstName: string;
  phone: string;
  email: string;
  secondaryEmail: string;
  password: string;
  repeatPassword: string;
};

export type parentContentWithId = {
  id: string;
  name: string;
  firstName: string;
  phone: string;
  email: string;
  secondaryEmail: string;
  password: string;
  repeatPassword: string;
};

export type parentErrorsContent = {
  name: string | null;
  firstName: string | null;
  phone: string | null;
  email: string | null;
  secondaryEmail: string | null;
  password: string | null;
  repeatPassword: string | null;
};

export type parentErrors = {
  hasError: boolean;
  errors: parentErrorsContent;
};

export type childrenContentType = Array<ChildrenStateType>;

export type childrenPartialContentType = {
  id: number;
  name: string;
  first_name: string;
  birth_date: any;
  courses: Get_User_And_Children_With_Courses_users_children_courses[] | null;
};

export type childrenPartialContentUpdateType = {
  index: number;
  children: Array<{
    id: number;
    name: string;
    first_name: string;
    birth_date: any;
    courses: Get_User_And_Children_With_Courses_users_children_courses[] | null;
  }>;
};

export type childrenErrors = {
  hasError: boolean;
  errors: Array<ChildrenErrorsType>;
};

export type childErrors = {
  hasError: boolean;
  errors: Omit<ChildrenErrorsType, 'course_id'>;
};
export type formCreateCourseErrors = {
  start: string | null;
  end: string | null;
  day: string | null;
  places: string | null;
};
