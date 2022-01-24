import { Children } from './ChildrenPropTypes';

export interface ModalTypes extends Children {
  isVisible: boolean;
  handleClose?: Function;
  className: string;
}

export interface DropDownType extends Children {
  isVisible: boolean;
}
