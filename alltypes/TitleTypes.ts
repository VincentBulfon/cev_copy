import { optClassname } from './ClassnameTypes';
import { Content } from './ContentTypes';

export interface Title extends optClassname, Content {
  children?: React.ReactNode;
  id?: string;
}
