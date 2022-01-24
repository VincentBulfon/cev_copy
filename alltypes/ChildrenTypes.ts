import { Get_User_And_Children_With_Courses_users_children_courses } from 'operations/__generated__/Get_User_And_Children_With_Courses';

export type ChildrenStateType = {
  name: string;
  first_name: string;
  birth_date: string;
  voucher: boolean | null;
  course_id: number;
  tutor: string;
};

export type ChildStateType = {
  name: string;
  first_name: string;
  birth_date: string;
};

export type ChildrenStateWithIdType = {
  index?: number;
  id: number;
  name: string;
  first_name: string;
  birth_date: string;
  courses: Get_User_And_Children_With_Courses_users_children_courses[] | null;
};

export type ChildrenUpdatetableType = {
  name: string;
  first_name: string;
  birth_date: string;
};

export type ChildrenErrorsType = {
  name: string | null;
  first_name: string | null;
  birth_date: string | null;
  course_id: string | null;
};

export type ChildErrorsType = {
  name: string | null;
  first_name: string | null;
  birth_date: string | null;
};
