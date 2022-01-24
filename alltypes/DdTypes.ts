import { Children } from './ChildrenPropTypes';
import { optClassname } from './ClassnameTypes';

export interface DdType extends optClassname, Children {
  dash?: boolean;
}
