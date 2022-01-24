import { Children } from './ChildrenPropTypes';
import { LinkType } from './LinkTypes';

export interface CallToAction extends Omit<LinkType, 'className'>, Children {
  className?: string;
  main?: boolean;
}
