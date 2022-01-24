import { optClassname } from './ClassnameTypes';

export interface Wrapper extends optClassname {
  children: React.ReactNode;
  id?: string;
}
