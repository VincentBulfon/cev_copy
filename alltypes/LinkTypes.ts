import { MouseEventHandler } from 'react';
import { Classname } from './ClassnameTypes';

export interface LinkType extends Classname {
  to: string;
  name: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export type UserRole = {
  role: Role;
};

export enum Role {
  customer = 0,
  admin = 1,
  monitor = 2,
}
