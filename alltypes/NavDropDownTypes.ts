import { MouseEventHandler } from 'react';
import { UserRole } from './LinkTypes';

export interface NavDropDownTypes extends UserRole {
  refName: React.MutableRefObject<HTMLDivElement | null>;
  hideMenuFunc: MouseEventHandler<HTMLAnchorElement>;
}
