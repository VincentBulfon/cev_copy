import { Children } from './ChildrenPropTypes';

export interface BtnInterface extends Children {
  className?: string;
  onClick: Function;
  type?: 'submit';
}
