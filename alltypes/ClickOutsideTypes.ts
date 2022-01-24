import { RefObject } from 'react';

export type ClickOutside = {
  ref: RefObject<HTMLDivElement> | RefObject<HTMLButtonElement>;
  callback: Function;
};
